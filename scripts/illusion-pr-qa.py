#!/usr/bin/env python3
"""Browser smoke/interaction checks for the six draft illusion PRs. No screenshot claims about perception."""
import argparse
import asyncio
from pathlib import Path
from urllib.parse import urlsplit
from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:4321"
FIGURES = {
    137: ("ames-window-illusion", "ames-window"),
    138: ("sound-induced-flash-illusion", "sound-induced-flash-illusion"),
    139: ("stream-bounce-illusion", "stream-bounce-illusion"),
    140: ("kinetic-depth-effect", "kinetic-depth-effect"),
    141: ("motion-aftereffect", "motion-aftereffect"),
    142: ("motion-silencing-illusion", "motion-silencing-illusion"),
}

def require(value, message):
    if not value:
        raise AssertionError(message)

async def interaction(page, pr):
    if pr == 137:
        proof = page.locator("#ames-window-guide-toggle")
        play = page.locator("#ames-window-play")
        outline = page.locator("#ames-window-outline")
        answer = page.locator('#ames-window-choices [data-choice="swings"]')
        require(not await page.locator("#ames-window-angle").is_visible(), "Ames slider must stay hidden during ordinary playback")
        require(not await proof.is_visible(), "Ames proof must be hidden before answer")
        require(await answer.is_disabled(), "Ames answers must await an attempt")
        await play.click()
        require(await play.inner_text() == "Pause", "Ames Play should become Pause")
        require(await answer.is_enabled(), "Ames answer should enable on Play")
        initial_path = await outline.get_attribute("d")
        await page.wait_for_timeout(4500)
        require(await play.inner_text() == "Pause", "Ames rotation stopped before a judgement")
        require(await play.get_attribute("aria-pressed") == "true", "Ames rotation should remain active")
        require(await outline.get_attribute("d") != initial_path, "Ames window did not rotate")
        await answer.click()
        require(await play.inner_text() == "Pause", "Ames answer must not stop playback")
        require(await play.get_attribute("aria-pressed") == "true", "Ames answer cleared the playing state")
        moving_path = await outline.get_attribute("d")
        await page.wait_for_timeout(180)
        require(await outline.get_attribute("d") != moving_path, "Ames window stopped after answer")
        require(await proof.is_visible(), "Ames proof did not unlock after judgement")
        await proof.click()
        require(await page.locator("#ames-window-guides").get_attribute("visibility") == "visible", "Ames top view not revealed")
        require(await play.inner_text() == "Pause", "Showing the top view must not stop playback")
        first_dot = await page.locator("#ames-window-near").get_attribute("cy")
        await page.wait_for_timeout(200)
        require(await page.locator("#ames-window-near").get_attribute("cy") != first_dot, "Top-view red dot stopped when revealed")
        await play.click()
        require(await play.inner_text() == "Play", "Ames Pause should stop playback")
        paused_path = await outline.get_attribute("d")
        await page.wait_for_timeout(180)
        require(await outline.get_attribute("d") == paused_path, "Ames window continued after Pause")
        await play.click()
        await page.locator('#ames-window-choices [data-choice="skip"]').click()
        require(await play.inner_text() == "Play", "Motion opt-out must stop animation")
    elif pr == 138:
        prefix = "sound-induced-flash-illusion"
        one = page.locator(f"#{prefix}-one")
        two = page.locator(f"#{prefix}-two")
        answer = page.locator(f'#{prefix}-choices [data-choice="two"]')
        reveal = page.locator(f"#{prefix}-reveal")
        require(await answer.is_disabled(), "Flash judgement available without listening")
        require(not await reveal.is_visible(), "Flash reveal appears before judgement")
        require("Each version shows one" not in await page.locator(f'[data-illustration="{prefix}"] p').first.inner_text(), "Visible setup gives away answer")
        await page.evaluate("""() => {
          window.__flashChanges = []
          const disc = document.querySelector('#sound-induced-flash-illusion-disc')
          new MutationObserver(() => {
            window.__flashChanges.push({colour: disc.getAttribute('fill'), time: performance.now()})
          }).observe(disc, { attributes: true, attributeFilter: ['fill'] })
        }""")
        await one.click()
        require(await answer.is_disabled(), "One-beep version alone should not unlock answer")
        await page.wait_for_timeout(520)
        require("other one too" in await page.locator(f"#{prefix}-status").inner_text(), "First version should invite comparison")
        await two.click()
        require(await answer.is_disabled(), "Second trial must finish before answers unlock")
        await page.wait_for_timeout(520)
        require(await answer.is_enabled(), "Completed comparison should unlock answer")
        changes = await page.evaluate("window.__flashChanges")
        starts = [i for i, c in enumerate(changes) if c["colour"] == "var(--color-series-gold)"]
        require(len(starts) == 2, f"Expected exactly one flash for each version: {changes}")
        durations = [changes[i+1]["time"] - changes[i]["time"] for i in starts]
        require(all(20 <= d <= 90 for d in durations), f"Flash duration not frame-aware: {durations}")
        await answer.click()
        require(await reveal.is_visible(), "Flash answer did not unlock explanation")
        # Rapidly restarting a trial must cancel a still-scheduled previous flash.
        previous = len(starts)
        await two.click()
        await page.wait_for_timeout(35)
        await one.click()
        await page.wait_for_timeout(520)
        changes = await page.evaluate("window.__flashChanges")
        flashes = len([c for c in changes if c["colour"] == "var(--color-series-gold)"])
        require(flashes == previous + 1, f"Rapid replay produced spurious flashes: {changes}")
    elif pr == 139:
        await page.locator('#stream-bounce-illusion-choices [data-choice="skip"]').click()
        require(await page.locator("#stream-bounce-illusion-reveal").is_visible(), "Stream/bounce proof unavailable")
        await page.locator("#stream-bounce-illusion-guide-toggle").click()
        require(await page.locator("#stream-bounce-illusion-guides").get_attribute("visibility") == "visible", "Stream/bounce paths not revealed")
    elif pr == 140:
        dots = page.locator("#kinetic-depth-effect-dots circle[data-index]")
        require(await dots.count() == 108, "Kinetic depth must have 108 seeded dots")
        ys = await dots.evaluate_all("(els) => new Set(els.map(e => Number(e.getAttribute('cy')).toFixed(2))).size")
        require(ys > 75, f"Kinetic depth looks row-structured: {ys} distinct y levels")
        first = await dots.first.get_attribute("cx")
        await page.locator("#kinetic-depth-effect-angle").evaluate("(el) => { el.value = '75'; el.dispatchEvent(new Event('input', { bubbles: true })) }")
        require(await dots.first.get_attribute("cx") != first, "Kinetic dot did not move")
        await page.locator("#kinetic-depth-effect-guide-toggle").click()
        require(await dots.first.get_attribute("fill") != "var(--color-stroke)", "Depth proof did not recolour dots")
    elif pr == 141:
        skip = page.locator('#motion-aftereffect-choices [data-choice="skip"]')
        require(await skip.is_visible() and await skip.is_enabled(), "Motion aftereffect opt-out unavailable before Start")
        require(await page.locator('#motion-aftereffect-choices [data-choice="opposite"]').is_disabled(), "Motion aftereffect answer available before adaptation")
        await skip.click()
        require(await page.locator("#motion-aftereffect-reveal").is_visible(), "Skipping did not unlock explanation")
        await page.locator("#motion-aftereffect-play").click()
        await page.wait_for_timeout(120)
        await page.locator("#motion-aftereffect-play").click()
        require(await page.locator('#motion-aftereffect-choices [data-choice="opposite"]').is_enabled(), "Stopped adaptation should allow judgement")
    elif pr == 142:
        await page.locator("#motion-silencing-illusion-play").click()
        await page.locator("#motion-silencing-illusion-turn").click()
        await page.wait_for_timeout(100)
        await page.locator('#motion-silencing-illusion-choices [data-choice="skip"]').click()
        require(await page.locator("#motion-silencing-illusion-reveal").is_visible(), "Motion silencing proof unavailable")
        await page.locator("#motion-silencing-illusion-guide-toggle").click()
        require("paused" in (await page.locator("#motion-silencing-illusion-status").inner_text()), "Motion silencing rotation did not pause")
        await page.locator("#motion-silencing-illusion-play").click()

async def reduced_ames_interaction(page):
    slider = page.locator("#ames-window-angle")
    play = page.locator("#ames-window-play")
    outline = page.locator("#ames-window-outline")
    answer = page.locator('#ames-window-choices [data-choice="swings"]')
    proof = page.locator("#ames-window-guide-toggle")
    require(await slider.is_visible(), "Reduced-motion slider must be visible")
    require(not await play.is_visible(), "Play must be hidden under reduced motion")
    require(await answer.is_disabled(), "Answer should await a manual step")
    require(not await proof.is_visible(), "Top view should be hidden before a judgement")
    first = await outline.get_attribute("d")
    await slider.focus()
    await slider.press("ArrowRight")
    require(await slider.input_value() == "1", "Keyboard slider did not advance")
    require(await outline.get_attribute("d") != first, "Window did not move manually")
    require(await slider.get_attribute("aria-valuetext") == "Angle 1 degrees", "Slider's spoken angle is stale")
    require("1 degrees" in await page.locator("#ames-window-readout").inner_text(), "Angle readout is stale")
    require(await answer.is_enabled(), "Manual movement should enable the judgement")
    await answer.click()
    require(await proof.is_visible(), "Reduced-motion judgement should enable top view")
    await proof.click()
    require(await page.locator("#ames-window-guides").get_attribute("visibility") == "visible", "Reduced-motion top view not revealed")
    window_dot = page.locator("#ames-window-frame-marker")
    inset_dot = page.locator("#ames-window-near")
    before = (await window_dot.get_attribute("cx"), await inset_dot.get_attribute("cy"))
    await slider.press("ArrowRight")
    after = (await window_dot.get_attribute("cx"), await inset_dot.get_attribute("cy"))
    require(before != after, "Both markers must follow manual slider movement")
    require(await play.get_attribute("aria-pressed") == "false", "Manual motion must not activate playback")
    # In this test window and top-view markers track the same positive-x endpoint.
    values = await page.evaluate("""() => {
      const a = Number(document.querySelector('#ames-window-angle').value) * Math.PI / 180
      const depth = 125 * Math.sin(a)
      const scale = 760 / (900 - depth) * 1.5
      const x = 300 + 125 * Math.cos(a) * scale
      const y = 190 - 48 * scale
      const windowDot = document.querySelector('#ames-window-frame-marker')
      const topDot = document.querySelector('#ames-window-near')
      return [Number(windowDot.getAttribute('cx')) - x,
              Number(windowDot.getAttribute('cy')) - y,
              Number(topDot.getAttribute('cx')) - (530 + 30 * Math.cos(a)),
              Number(topDot.getAttribute('cy')) - (70 + 30 * Math.sin(a))]
    }""")
    require(all(abs(v) < 0.01 for v in values), f"Dot positions out of sync with angle: {values}")

async def compensated_flash_interaction(page):
    await page.evaluate("""() => {
      window.__outputFlashOnsets = []
      window.__audioStartedAt = 0
      const disc = document.querySelector('#sound-induced-flash-illusion-disc')
      new MutationObserver(() => {
        if (disc.getAttribute('fill') === 'var(--color-series-gold)')
          window.__outputFlashOnsets.push(performance.now())
      }).observe(disc, { attributes: true, attributeFilter: ['fill'] })
    }""")
    await page.locator("#sound-induced-flash-illusion-one").click()
    await page.wait_for_timeout(550)
    delay = await page.evaluate("""() => window.__outputFlashOnsets[0] - window.__audioStartedAt""")
    require(delay is not None and 295 <= delay <= 450,
            f"Compensated flash should follow simulated 180 ms output latency + 160 ms: {delay}")
    print(f"PASS simulated 180ms audio-output delay: visual onset {delay:.1f}ms from audio start", flush=True)

async def run(pr):
    slug, name = FIGURES[pr]
    out = Path("screenshots")
    out.mkdir(exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=["--no-sandbox"])
        for width in (1280, 350):
            page = await browser.new_page(viewport={"width": width, "height": 900 if width == 1280 else 780}, device_scale_factor=1, reduced_motion="no-preference")
            errors = []
            external = []
            page.on("pageerror", lambda exc: errors.append(str(exc)))
            page.on("console", lambda msg: errors.append("console: " + msg.text) if msg.type == "error" else None)
            page.on("request", lambda req: external.append(req.url) if urlsplit(req.url).scheme in ("http", "https") and urlsplit(req.url).netloc != "127.0.0.1:4321" else None)
            response = await page.goto(f"{BASE}/entries/{slug}/", wait_until="networkidle", timeout=45000)
            require(response is not None and response.status == 200, f"bad page status PR {pr} width {width}: {getattr(response, 'status', None)}")
            await page.locator(f'[data-illustration="{name}"]').scroll_into_view_if_needed()
            await page.locator(f'[data-illustration="{name}"]').screenshot(path=str(out / f"pr{pr}-{width}-initial.png"))
            overflow = await page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
            require(overflow <= 1, f"horizontal overflow PR {pr}, width {width}: {overflow}px")
            await interaction(page, pr)
            if pr == 137:
                # Compare the prior perspective (580), chosen weaker perspective (900),
                # and an even weaker one (1200) at the same apparent drawing size.
                # This is a geometric/display comparison, not a human percept test.
                for distance in (580, 900, 1200):
                    await page.evaluate("""distance => {
                      const a = 55 * Math.PI / 180
                      const scaleAtCentre = (760 / 900) * 1.5
                      const project = (x,y) => {
                        const depth = x * Math.sin(a)
                        const scale = (scaleAtCentre * distance) / (distance - depth)
                        return [300 + x * Math.cos(a) * scale, 190 - y * scale]
                      }
                      const line = xs => xs.map(([x,y]) => x.toFixed(2) + ' ' + y.toFixed(2)).join(' L')
                      const corners=[project(-125,115),project(125,48),project(125,-48),project(-125,-115)]
                      document.querySelector('#ames-window-outline').setAttribute('d','M'+line(corners)+' Z')
                      document.querySelector('#ames-window-bar').setAttribute('d','M'+line([project(-125,0),project(125,0)]))
                      document.querySelector('#ames-window-mid').setAttribute('d','M'+line([project(0,81.5),project(0,-81.5)]))
                    }""", distance)
                    await page.locator('[data-illustration="ames-window"]').screenshot(path=str(out / f"pr137-{width}-perspective-{distance}.png"))
                print(f"Compared Ames perspective distances 580, 900, 1200 at {width}px, fixed 55 degree angle", flush=True)
            await page.wait_for_timeout(100)
            overflow = await page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
            require(overflow <= 1, f"horizontal overflow after interaction PR {pr}, width {width}: {overflow}px")
            require(not external, f"third-party requests PR {pr}, width {width}: {external}")
            require(not errors, f"console/page errors PR {pr}, width {width}: {errors}")
            print(f"PASS browser PR {pr} at {width}px; no overflow/errors/third-party; interactions checked", flush=True)
            await page.close()
            if pr == 138:
                # Simulate a device with 180 ms output latency to exercise the
                # output timestamp path instead of relying on headless audio latency.
                compensated = await browser.new_page(
                    viewport={"width": width, "height": 900 if width == 1280 else 780},
                    device_scale_factor=1
                )
                await compensated.add_init_script("""(() => {
                  const actual = AudioBufferSourceNode.prototype.start
                  AudioBufferSourceNode.prototype.start = function (...args) {
                    if (this.buffer && this.buffer.length > 1000) window.__audioStartedAt = performance.now()
                    return actual.apply(this, args)
                  }
                  AudioContext.prototype.getOutputTimestamp = function () {
                    return { contextTime: this.currentTime, performanceTime: performance.now() + 180 }
                  }
                })()""")
                response = await compensated.goto(f"{BASE}/entries/{slug}/", wait_until="networkidle", timeout=45000)
                require(response is not None and response.status == 200, "Latency test page failed to load")
                await compensated_flash_interaction(compensated)
                await compensated.close()
            if pr == 137:
                reduced_page = await browser.new_page(
                    viewport={"width": width, "height": 900 if width == 1280 else 780},
                    device_scale_factor=1,
                    reduced_motion="reduce",
                )
                reduced_errors = []
                reduced_page.on("pageerror", lambda exc: reduced_errors.append(str(exc)))
                reduced_page.on("console", lambda msg: reduced_errors.append(msg.text) if msg.type == "error" else None)
                response = await reduced_page.goto(f"{BASE}/entries/{slug}/", wait_until="networkidle", timeout=45000)
                require(response is not None and response.status == 200, "Reduced-motion page failed to load")
                await reduced_ames_interaction(reduced_page)
                overflow = await reduced_page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
                require(overflow <= 1, f"Reduced-motion horizontal overflow at {width}px: {overflow}")
                require(not reduced_errors, f"Reduced-motion console errors: {reduced_errors}")
                print(f"PASS Ames reduced motion at {width}px; slider, keyboard, linked dots, no errors", flush=True)
                await reduced_page.close()
        await browser.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--pr", type=int, choices=FIGURES)
    args = parser.parse_args()
    asyncio.run(run(args.pr))

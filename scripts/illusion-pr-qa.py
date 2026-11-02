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
        require(await page.locator("#ames-window-angle").count() == 0, "Ames slider must be removed")
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
        require(await play.inner_text() == "Play", "Ames answer must stop playback")
        paused_path = await outline.get_attribute("d")
        await page.wait_for_timeout(180)
        require(await outline.get_attribute("d") == paused_path, "Ames animation continued after answer")
        require(await proof.is_visible(), "Ames proof did not unlock after judgement")
        await proof.click()
        require(await page.locator("#ames-window-guides").get_attribute("visibility") == "visible", "Ames top view not revealed")
        await play.click()
        await page.wait_for_timeout(200)
        require(await outline.get_attribute("d") != paused_path, "Ames cannot replay with top view")
        await play.click()
        require(await play.inner_text() == "Play", "Ames Pause should stop playback")
    elif pr == 138:
        await page.locator('#sound-induced-flash-illusion-choices [data-choice="skip"]').click()
        require(await page.locator("#sound-induced-flash-illusion-reveal").is_visible(), "Flash text reveal unavailable")
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
                      const scaleAtCentre = 490 / 580
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
        await browser.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--pr", type=int, choices=FIGURES)
    args = parser.parse_args()
    asyncio.run(run(args.pr))

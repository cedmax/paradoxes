from pathlib import Path
from playwright.sync_api import sync_playwright
import time

base = "http://127.0.0.1:4321/entries/"
slugs = [
    "ames-window-illusion", "sound-induced-flash-illusion", "stream-bounce-illusion",
    "kinetic-depth-effect", "motion-aftereffect", "motion-silencing-illusion",
    "spinning-dancer-illusion"
]
Path("/tmp/video-screens").mkdir(exist_ok=True)

def test_figure(page, slug, width):
    url = base + slug + "/"
    response = page.goto(url, wait_until="domcontentloaded", timeout=30000)
    assert response.status == 200, (slug, response.status)
    figure = page.locator("figure[data-illustration]").first
    figure.wait_for(state="visible")
    page.screenshot(path=f"/tmp/video-screens/{slug}-{width}.png", full_page=True)
    bounds = figure.bounding_box()
    assert bounds and bounds["width"] <= width + 2, (slug, width, bounds)
    assert page.evaluate("document.documentElement.scrollWidth") <= width + 2, (slug, width, "horizontal overflow")
    return figure

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for width in (1280, 350):
        context = browser.new_context(viewport={"width": width, "height": 900}, reduced_motion="no-preference")
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        for slug in slugs:
            figure = test_figure(page, slug, width)
            if slug == "ames-window-illusion":
                slider = page.locator("#ames-window-angle")
                slider.focus()
                slider.press("End")
                assert "359" in page.locator("#ames-window-readout").inner_text()
                page.locator("#ames-window-guide-toggle").click()
                assert page.locator("#ames-window-guides").get_attribute("visibility") == "visible"
            elif slug == "sound-induced-flash-illusion":
                page.locator("#sound-induced-flash-illusion-one").click()
                page.wait_for_timeout(550)
                one = page.locator("#sound-induced-flash-illusion-choices [data-choice='one']")
                assert one.is_enabled()
                one.click()
                assert page.locator("#sound-induced-flash-illusion-reveal").is_visible()
                page.locator("#sound-induced-flash-illusion-two").click()
            elif slug == "stream-bounce-illusion":
                page.locator("#stream-bounce-illusion-silent").click()
                page.wait_for_timeout(1850)
                page.locator("#stream-bounce-illusion-choices [data-choice='stream']").click()
                page.locator("#stream-bounce-illusion-sound").click()
                page.wait_for_timeout(1850)
                page.locator("#stream-bounce-illusion-choices [data-choice='bounce']").click()
                assert page.locator("#stream-bounce-illusion-reveal").is_visible()
                page.locator("#stream-bounce-illusion-guide-toggle").click()
                assert page.locator("#stream-bounce-illusion-guides").get_attribute("visibility") == "visible"
            elif slug == "kinetic-depth-effect":
                old = page.locator("#kinetic-depth-effect-dots circle").first.get_attribute("cx")
                page.locator("#kinetic-depth-effect-angle").press("End")
                new = page.locator("#kinetic-depth-effect-dots circle").first.get_attribute("cx")
                assert old != new
                page.locator("#kinetic-depth-effect-guide-toggle").click()
            elif slug == "motion-aftereffect":
                page.locator("#motion-aftereffect-play").click()
                page.wait_for_timeout(500)
                page.locator("#motion-aftereffect-play").click()
                assert page.locator("#motion-aftereffect-answer").is_visible()
                page.locator("#motion-aftereffect-choices [data-choice='still']").click()
                assert page.locator("#motion-aftereffect-reveal").is_visible()
            elif slug == "motion-silencing-illusion":
                page.locator("#motion-silencing-illusion-play").click()
                dot = page.locator("#motion-silencing-illusion-ring circle").first
                c1 = dot.get_attribute("fill")
                page.wait_for_timeout(450)
                c2 = dot.get_attribute("fill")
                assert c1 != c2
                page.locator("#motion-silencing-illusion-turn").click()
                page.locator("#motion-silencing-illusion-choices [data-choice='continued']").click()
                assert page.locator("#motion-silencing-illusion-reveal").is_visible()
                page.locator("#motion-silencing-illusion-guide-toggle").click()
                before = page.locator("#motion-silencing-illusion-ring").get_attribute("transform")
                page.wait_for_timeout(250)
                after = page.locator("#motion-silencing-illusion-ring").get_attribute("transform")
                assert before == after, "freeze did not stop rotation"
            elif slug == "spinning-dancer-illusion":
                page.locator("#spinning-dancer-illusion-angle").press("End")
                page.locator("#spinning-dancer-illusion-choices [data-choice='both']").click()
                assert page.locator("#spinning-dancer-illusion-reveal").is_visible()
                page.locator("#spinning-dancer-illusion-guide-toggle").click()
                assert page.locator("#spinning-dancer-illusion-guides").get_attribute("visibility") == "visible"
            assert not errors, (slug, errors)
            print(f"PASS {width}px {slug}", flush=True)
        context.close()
    for slug in slugs:
        context = browser.new_context(viewport={"width": 350, "height": 800}, java_script_enabled=False)
        page = context.new_page()
        response = page.goto(base + slug + "/", wait_until="domcontentloaded")
        assert response.status == 200
        assert page.locator("figure[data-illustration]").first.is_visible()
        context.close()
        print(f"PASS no-JS {slug}", flush=True)
    for slug in slugs:
        context = browser.new_context(viewport={"width": 350, "height": 800}, reduced_motion="reduce")
        page = context.new_page()
        page.goto(base + slug + "/", wait_until="domcontentloaded")
        if slug in ("ames-window-illusion","kinetic-depth-effect","spinning-dancer-illusion"):
            fig_name = {"ames-window-illusion": "ames-window", "kinetic-depth-effect": "kinetic-depth-effect", "spinning-dancer-illusion": "spinning-dancer-illusion"}[slug]
            assert page.locator(f"#{fig_name}-play").is_disabled()
        if slug == "motion-aftereffect":
            page.locator("#motion-aftereffect-play").click()
            assert page.locator("#motion-aftereffect-reveal").is_visible()
        context.close()
        print(f"PASS reduced-motion {slug}",flush=True)
    context = browser.new_context(viewport={"width": 1280, "height": 800})
    page = context.new_page()
    requests = []
    page.on("request", lambda req: requests.append(req.url))
    response = page.goto("http://127.0.0.1:4321/video-fixture-test/", wait_until="networkidle")
    assert response.status == 200
    assert page.locator("[data-load-video]").is_visible()
    assert page.locator("iframe").count() == 0
    third_party = [url for url in requests if not url.startswith("http://127.0.0.1:4321/")]
    assert not third_party, ("third-party request before click", third_party)
    img = page.locator("figure img")
    assert img.is_visible()
    assert img.evaluate("(img) => img.naturalWidth") >= 1280
    page.locator("[data-load-video]").focus()
    page.keyboard.press("Enter")
    frame = page.locator("iframe")
    frame.wait_for(state="attached")
    assert frame.get_attribute("src").startswith("https://www.youtube-nocookie.com/embed/")
    print("PASS component: zero third-party pre-click requests, HD poster, keyboard loading", flush=True)
    context.close()
    context = browser.new_context(viewport={"width": 350, "height": 800}, java_script_enabled=False)
    page = context.new_page()
    page.goto("http://127.0.0.1:4321/video-fixture-test/")
    assert page.locator("figure img").is_visible()
    assert page.locator("[data-load-video]").is_hidden()
    assert page.locator('a[href*="youtube.com/watch"]').is_visible()
    print("PASS component: no-JS poster and fallback link", flush=True)
    context.close()
    browser.close()

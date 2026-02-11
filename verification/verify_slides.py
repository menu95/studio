
from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:9002")

            # Wait for the "Segundo All Hands" card to be visible and click it
            page.get_by_text("Segundo All Hands").click()
            time.sleep(2) # Wait for animation

            # Take screenshot of the first slide (WelcomeSlideSecond)
            page.screenshot(path="verification/slide_0_welcome.png")

            # Click next 8 times to reach "Divisão Estratégica"
            next_button = page.get_by_label("Próximo Slide")
            for _ in range(8):
                next_button.click()
                time.sleep(0.5)

            time.sleep(1)
            # Take screenshot of "Divisão Estratégica"
            page.screenshot(path="verification/slide_8_estrategia.png")

            # Click next to reach "Liderança"
            next_button.click()
            time.sleep(1)
            # Take screenshot of "Liderança"
            page.screenshot(path="verification/slide_9_lideranca.png")

            # Click next to reach "Estrela Guia & OKRs"
            next_button.click()
            time.sleep(1)
            # Take screenshot of "Estrela Guia & OKRs"
            page.screenshot(path="verification/slide_10_okrs.png")

            # Click next to reach "Notion & Organização"
            next_button.click()
            time.sleep(1)
            # Take screenshot of "Notion & Organização"
            page.screenshot(path="verification/slide_11_notion.png")

            # Click next to reach "Rituais All Hands"
            next_button.click()
            time.sleep(1)
            # Take screenshot of "Rituais All Hands"
            page.screenshot(path="verification/slide_12_rituais.png")

            # Click next to reach "Encerramento"
            next_button.click()
            time.sleep(1)
            # Take screenshot of "Encerramento"
            page.screenshot(path="verification/slide_13_encerramento.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()

"""Test the /playbook auth flow as a real browser."""
import time
from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

opts = Options()
opts.add_argument("--headless=new")
opts.add_argument("--disable-gpu")
opts.add_argument("--no-sandbox")
opts.add_argument("--window-size=1280,900")
driver = webdriver.Edge(options=opts)

try:
    print("[1] Visit /playbook (no auth) ->", end=" ")
    driver.get("http://localhost:3000/playbook")
    time.sleep(2)
    print(f"redirected to: {driver.current_url}")
    assert "/playbook/login" in driver.current_url, "should redirect to login"

    print("[2] Submit WRONG password ->", end=" ")
    driver.find_element(By.NAME, "password").send_keys("wrongpw")
    driver.find_element(By.CSS_SELECTOR, "button[type=submit]").click()
    time.sleep(2)
    print(f"url: {driver.current_url}")
    assert "error=1" in driver.current_url, "should show error"
    print("    error message visible:", "incorrecta" in driver.page_source)

    print("[3] Submit CORRECT password ->", end=" ")
    driver.find_element(By.NAME, "password").send_keys("gambitho-playbook-2026")
    driver.find_element(By.CSS_SELECTOR, "button[type=submit]").click()
    time.sleep(3)
    print(f"url: {driver.current_url}")
    assert driver.current_url.endswith("/playbook"), "should land on /playbook"
    print("    page contains 'Playbook':", "Playbook" in driver.page_source)
    print("    cookie set:", any(c["name"] == "playbook-auth" for c in driver.get_cookies()))

    print("[4] Re-visit /playbook with cookie ->", end=" ")
    driver.get("http://localhost:3000/playbook")
    time.sleep(2)
    print(f"url: {driver.current_url} (should stay)")

    print("[5] Try PDF asset with cookie ->", end=" ")
    driver.get("http://localhost:3000/playbook-vendedora.pdf")
    time.sleep(2)
    print(f"url: {driver.current_url}")

    print("\n✓ All flow steps OK")
finally:
    driver.quit()

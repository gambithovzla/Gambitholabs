"""
Generate playbook PDF from the local /playbook page using Edge headless.
Run after `npm run dev` is up at localhost:3000.
"""
import base64
import time
from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.print_page_options import PrintOptions

opts = Options()
opts.add_argument("--headless=new")
opts.add_argument("--disable-gpu")
opts.add_argument("--no-sandbox")
opts.add_argument("--window-size=1280,1800")

driver = webdriver.Edge(options=opts)

try:
    print("Loading /playbook ...")
    driver.get("http://localhost:3000/playbook")
    time.sleep(6)  # let fonts/images load

    print("Generating PDF ...")
    print_opts = PrintOptions()
    print_opts.page_height = 29.7  # A4
    print_opts.page_width = 21.0
    print_opts.margin_top = 1.8
    print_opts.margin_bottom = 1.8
    print_opts.margin_left = 1.4
    print_opts.margin_right = 1.4
    print_opts.background = True
    print_opts.scale = 0.95

    pdf_b64 = driver.print_page(print_options=print_opts)
    pdf_bytes = base64.b64decode(pdf_b64)

    out_path = r"c:\proyectos\gambitho-web\public\playbook-vendedora.pdf"
    with open(out_path, "wb") as f:
        f.write(pdf_bytes)
    print(f"Saved: {out_path} ({len(pdf_bytes):,} bytes)")
finally:
    driver.quit()

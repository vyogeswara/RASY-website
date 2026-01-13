import re
import os
import json

file_path = r'C:\Users\lbabu\RASY-website\7b2494bf-c6b1-4f74-b380-5f1cd7f3ec17\ai-solutions\page.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Find all data-framer-name values
names = re.findall(r'data-framer-name="([^"]+)"', content)
unique_names = sorted(list(set(names)))
print("Unique data-framer-names:")
for name in unique_names:
    print(f"  - {name}")

# 2. Try to find the tag start for each major section
sections_to_extract = ["Hero", "AI for Work", "AI for Service", "AI for Process", "Footer"]

for section in sections_to_extract:
    # Find the tag that has this data-framer-name
    # Framer usually uses <div or <nav or <footer
    pattern = rf'<[^>]+data-framer-name="{section}"'
    match = re.search(pattern, content)
    if match:
        print(f"Found section '{section}' at index {match.start()}")
        # Let's see some context
        # print(content[match.start():match.start()+200])
    else:
        print(f"Section '{section}' not found.")

# 3. Extract Styles
# data-framer-css-ssr-minified
style_match = re.search(r'<style data-framer-css-ssr-minified[^>]*>(.*?)</style>', content, re.DOTALL)
if style_match:
    with open('minified_styles.css', 'w', encoding='utf-8') as f:
        f.write(style_match.group(1))
    print("Extracted minified styles.")

# 4. Extract Font Styles
font_style_match = re.search(r'<style data-framer-font-css[^>]*>(.*?)</style>', content, re.DOTALL)
if font_style_match:
    with open('font_styles.css', 'w', encoding='utf-8') as f:
        f.write(font_style_match.group(1))
    print("Extracted font styles.")

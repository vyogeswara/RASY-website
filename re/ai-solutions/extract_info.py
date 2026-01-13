import re
import os
import json

file_path = r'C:\Users\lbabu\RASY-website\7b2494bf-c6b1-4f74-b380-5f1cd7f3ec17\ai-solutions\page.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract data-framer-name sections
# This is tricky with minified HTML, let's try to find tags with data-framer-name
names = re.findall(r'data-framer-name="([^"]+)"', content)
print("Found data-framer-name attributes:", list(set(names)))

# 2. Extract Assets
# Images and SVGs
images = re.findall(r'https://framerusercontent.com/images/[^"\? ]+', content)
# Fonts
fonts = re.findall(r'https://framerusercontent.com/assets/[^"\? ]+\.woff2', content)

assets = {
    "images": list(set(images)),
    "fonts": list(set(fonts))
}

with open('assets_list.json', 'w') as f:
    json.dump(assets, f, indent=4)

print(f"Extracted {len(assets['images'])} images and {len(assets['fonts'])} fonts.")

# 3. Extract CSS variables
css_vars = re.findall(r'--token-[a-z0-9-]+:[^;]+;', content)
with open('css_variables.txt', 'w') as f:
    f.write("\n".join(list(set(css_vars))))

print(f"Extracted {len(css_vars)} CSS variables.")

Conversion instructions — create PNG from SVG (recommended for LinkedIn)

If you have ImageMagick installed locally, run these commands from the `frontend/public` folder:

```bash
# Convert SVG to PNG at 1200x630 (good for social previews)
magick portfolio-preview.svg -background none -resize 1200x630 portfolio-preview.png

# (Optional) If the output has wrong DPI or aspect, force exact size:
magick portfolio-preview.svg -background none -resize 1200x630 -gravity center -extent 1200x630 portfolio-preview.png
```

If you don't have ImageMagick, you can use an online converter or install `sharp` and run a small Node script.

After creating `portfolio-preview.png`, commit and push:

```bash
git add public/portfolio-preview.png
git commit -m "Add OG preview PNG"
git push
```

Vercel will redeploy and the PNG will be served from `/portfolio-preview.png`.

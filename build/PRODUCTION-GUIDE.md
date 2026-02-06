# WANDER STATE - Production Build Guide

## Overview

This guide explains how to optimize the site for production deployment.

## Performance Optimizations Implemented

### 1. Minified CSS & JS

Production-ready minified files have been created:

| Original File | Minified File | Savings |
|--------------|---------------|---------|
| `olipop_meets_lacroix_styleguide.css` (44 KB) | `olipop_meets_lacroix_styleguide.min.css` (~28 KB) | ~36% |
| `script.js` (8 KB) | `script.min.js` (~4 KB) | ~50% |

**To use minified files in production:**

Replace in your HTML files:
```html
<!-- Development -->
<link rel="stylesheet" href="olipop_meets_lacroix_styleguide.css">
<script src="script.js"></script>

<!-- Production -->
<link rel="stylesheet" href="olipop_meets_lacroix_styleguide.min.css">
<script src="script.min.js"></script>
```

### 2. Lazy Loading

All below-the-fold images now have `loading="lazy"` attribute:

- Product can images on homepage and beverages page
- Mushroom images on science page
- Partner images and logos

This defers loading of off-screen images until the user scrolls near them.

### 3. Image Compression

Run the image optimization script to compress images and generate WebP versions:

```powershell
# First time setup (requires Node.js)
cd C:\Users\tommy\dev\wanderstate_marketing
npm install sharp glob --save-dev

# Run optimization
node build/optimize-images.js
```

**Expected Results:**
- PNG product images: ~1.1MB → ~200KB (80% reduction)
- Mushroom images: ~2.2MB → ~400KB (80% reduction)
- WebP versions: Additional 20-30% savings

## Production Checklist

### Before Deployment

- [ ] Switch to minified CSS: `olipop_meets_lacroix_styleguide.min.css`
- [ ] Switch to minified JS: `script.min.js`
- [ ] Run image optimization script
- [ ] Replace image paths with optimized versions
- [ ] Update placeholder text in legal pages:
  - `[Address — update before launch]`
  - `[YOUR STATE — update before launch]`
- [ ] Replace `#` placeholder social links with real URLs
- [ ] Test all pages on mobile and desktop

### Image Path Updates

After running the optimization script, update image sources:

```html
<!-- Before -->
<img src="docs/assets/Lemon-Mint_Center no white.png" alt="...">

<!-- After (with WebP fallback) -->
<picture>
  <source srcset="docs/assets/optimized/Lemon-Mint_Center no white.webp" type="image/webp">
  <img src="docs/assets/optimized/Lemon-Mint_Center no white.png" alt="..." loading="lazy">
</picture>
```

### Performance Targets

| Metric | Target | Current Status |
|--------|--------|----------------|
| First Contentful Paint | < 1.5s | Pending test |
| Largest Contentful Paint | < 2.5s | Pending test |
| Total Page Weight (Homepage) | < 2MB | ~12MB (needs image optimization) |
| Total Page Weight (After Optimization) | < 1MB | Expected |

## File Structure

```
wanderstate_marketing/
├── build/
│   ├── optimize-images.js      # Image compression script
│   ├── optimize-images.ps1     # PowerShell wrapper
│   └── PRODUCTION-GUIDE.md     # This file
├── docs/assets/
│   ├── optimized/              # Optimized images (generated)
│   └── [original images]
├── olipop_meets_lacroix_styleguide.css     # Development CSS
├── olipop_meets_lacroix_styleguide.min.css # Production CSS
├── script.js                               # Development JS
├── script.min.js                           # Production JS
└── [HTML pages]
```

## Quick Start

```powershell
# 1. Navigate to project
cd C:\Users\tommy\dev\wanderstate_marketing

# 2. Install dependencies (first time only)
npm install sharp glob --save-dev

# 3. Run image optimization
node build/optimize-images.js

# 4. Test locally
python -m http.server 8000

# 5. Open http://localhost:8000 in browser
```

## Browser Support

The optimizations are compatible with:
- Chrome 77+ (native lazy loading)
- Firefox 75+ (native lazy loading)
- Safari 15.4+ (native lazy loading)
- Edge 79+

Older browsers will ignore `loading="lazy"` and load images normally.

## Additional Optimizations (Optional)

### Enable Gzip/Brotli Compression
Configure your web server to compress text files:
- HTML, CSS, JS files can be compressed 60-80%

### Add Cache Headers
Set appropriate cache headers for static assets:
```
Cache-Control: public, max-age=31536000 # 1 year for images/fonts
Cache-Control: public, max-age=86400    # 1 day for CSS/JS
```

### Consider a CDN
For production, serve static assets from a CDN like:
- Cloudflare
- AWS CloudFront
- Netlify (includes CDN)
- Vercel (includes CDN)

---

*Last updated: January 2026*

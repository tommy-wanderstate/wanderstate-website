# WANDER STATE - Shopify Theme Settings Guide

This guide documents the exact settings to configure your Shopify theme to match the Wander State brand design.

---

## Recommended Theme

**Dawn** (Shopify's free default theme) or **Craft** work well as base themes.

For a more premium look similar to Sierra Nature, consider:
- **Prestige** by Maestrooo
- **Impulse** by Archetype
- **Symmetry** by Clean Canvas

---

## Color Settings

Navigate to: **Online Store > Themes > Customize > Theme Settings > Colors**

### Primary Colors

| Setting | Hex Code | Description |
|---------|----------|-------------|
| Primary/Accent | `#2B4C6F` | Navy blue - main brand color |
| Secondary | `#FF9AA2` | Coral - buttons, highlights |
| Background | `#F5F7FA` | Light cream/gray |
| Text | `#3A3A3A` | Dark gray for body text |
| Headings | `#2B4C6F` | Navy blue for headings |

### Button Colors

| Button Type | Background | Text |
|-------------|------------|------|
| Primary | `#2B4C6F` | `#FFFFFF` |
| Secondary | `#FF9AA2` | `#FFFFFF` |
| Outline | transparent | `#2B4C6F` |

### Additional Colors

| Element | Hex Code |
|---------|----------|
| Sale badge | `#FF9AA2` |
| Success/In stock | `#3D5A80` |
| Error | `#E07A5F` |
| Footer background | `#2B4C6F` |
| Footer text | `#F5F7FA` |

---

## Typography Settings

Navigate to: **Online Store > Themes > Customize > Theme Settings > Typography**

### Headings

| Setting | Value |
|---------|-------|
| Font | Poppins |
| Font weight | Semi-bold (600) |
| Letter spacing | Normal |
| Text transform | None |

### Body Text

| Setting | Value |
|---------|-------|
| Font | Poppins |
| Font weight | Regular (400) |
| Base size | 16px |
| Line height | 1.6 |

### Scale Ratios (if available)

| Level | Size |
|-------|------|
| H1 | 3.5rem (56px) |
| H2 | 2.5rem (40px) |
| H3 | 1.875rem (30px) |
| H4 | 1.25rem (20px) |
| Body | 1rem (16px) |
| Small | 0.875rem (14px) |

---

## Logo Settings

Navigate to: **Online Store > Themes > Customize > Header**

### Logo

| Setting | Value |
|---------|-------|
| Image | Upload `WS_Wordmark-with-Star.png` |
| Desktop width | 180px |
| Mobile width | 120px |
| Alt text | "Wander State - Functional Sparkling Teas" |

### Favicon

| Setting | Value |
|---------|-------|
| Image | Upload `WS_Icon.png` |

---

## Header Settings

Navigate to: **Online Store > Themes > Customize > Header**

### Layout

| Setting | Value |
|---------|-------|
| Logo position | Left |
| Menu position | Center or Right |
| Enable sticky header | Yes |
| Show announcement bar | Yes |

### Announcement Bar

| Setting | Value |
|---------|-------|
| Text | "Free Shipping on Orders $50+" |
| Background | `#2B4C6F` (Navy) |
| Text color | `#FFFFFF` (White) |
| Link | /collections/all |

### Navigation Menu

Create a menu in **Online Store > Navigation** called "Main Menu":

```
Main Menu
├── Shop
│   ├── All Products → /collections/all
│   ├── Lemon & Mint → /products/lemon-mint
│   ├── Chamomile & Blackberry → /products/chamomile-blackberry
│   ├── Yuzu & Cucumber → /products/yuzu-cucumber
│   └── Hibiscus & Blood Orange → /products/hibiscus-blood-orange
├── Learn
│   ├── Mushroom Science → /pages/mushroom-science
│   ├── Our Story → /pages/our-story
│   └── FAQ → /pages/faq
├── Community
│   ├── Where We Wander → /pages/where-we-wander
│   └── Partners → /pages/partners
└── Contact → /pages/contact
```

---

## Footer Settings

Navigate to: **Online Store > Themes > Customize > Footer**

### Layout

| Setting | Value |
|---------|-------|
| Background | `#2B4C6F` (Navy) |
| Text color | `#F5F7FA` (Cream) |
| Show payment icons | Yes |
| Show social icons | Yes |

### Footer Menus

Create in **Online Store > Navigation**:

**Footer Menu 1 - Products:**
- All Beverages → /collections/all
- Single Cans → /collections/single-cans
- Multi-Packs → /collections/multi-packs
- Variety Pack → /products/variety-pack

**Footer Menu 2 - Learn:**
- Mushroom Science → /pages/mushroom-science
- Our Story → /pages/our-story
- Ingredients → /pages/ingredients
- FAQ → /pages/faq

**Footer Menu 3 - Support:**
- Contact Us → /pages/contact
- Shipping & Returns → /policies/shipping-policy
- Privacy Policy → /policies/privacy-policy
- Terms of Service → /policies/terms-of-service

### Social Media Links

| Platform | URL |
|----------|-----|
| Instagram | https://instagram.com/drinkwanderstate |
| Facebook | https://facebook.com/drinkwanderstate |
| TikTok | https://tiktok.com/@drinkwanderstate |

### Copyright Text

```
© 2024 WANDER STATE. All rights reserved.

These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
```

---

## Product Settings

Navigate to: **Online Store > Themes > Customize > Products**

### Product Page

| Setting | Value |
|---------|-------|
| Enable sticky add to cart | Yes |
| Show vendor | No |
| Show SKU | No |
| Show quantity selector | Yes |
| Show dynamic checkout buttons | Yes |

### Product Cards

| Setting | Value |
|---------|-------|
| Image ratio | Square (1:1) |
| Show secondary image on hover | Yes |
| Show vendor | No |
| Show rating | Yes (when you have reviews) |
| Enable quick add | Yes |

### Product Badges

| Badge | Color |
|-------|-------|
| Sale | `#FF9AA2` (Coral) |
| Sold out | `#6B7280` (Gray) |
| New (custom) | `#7EC8E3` (Mint) |

---

## Collection Settings

Navigate to: **Online Store > Themes > Customize > Collections**

### Collection Page

| Setting | Value |
|---------|-------|
| Products per row (desktop) | 4 |
| Products per row (mobile) | 2 |
| Products per page | 12 |
| Enable filtering | Yes |
| Enable sorting | Yes |

### Collections to Create

Go to **Products > Collections** and create:

1. **All Products**
   - Automated: All products

2. **Single Cans**
   - Condition: Variant option contains "Single"

3. **Multi-Packs**
   - Condition: Variant option contains "Pack"

4. **By Benefit - Focus**
   - Tags: focus, clarity, lions-mane

5. **By Benefit - Calm**
   - Tags: calm, relaxation, reishi

6. **By Benefit - Energy**
   - Tags: energy, endurance, cordyceps

---

## Cart Settings

Navigate to: **Online Store > Themes > Customize > Cart**

### Cart Type

| Setting | Value |
|---------|-------|
| Cart type | Drawer (recommended) |
| Show vendor | No |
| Enable cart notes | Yes |
| Enable estimated shipping | Yes |

### Cart Upsells (if theme supports)

- Show products from "All Products" collection
- Limit to 2 products

---

## Checkout Settings

Navigate to: **Settings > Checkout**

### Branding

| Setting | Value |
|---------|-------|
| Logo | Upload `WS_Wordmark-with-Star.png` |
| Logo size | Medium |
| Background color | `#F5F7FA` |
| Accent color | `#2B4C6F` |
| Button color | `#2B4C6F` |
| Error color | `#E07A5F` |

### Form Fields

| Setting | Value |
|---------|-------|
| Require full name | First and last name |
| Company name | Optional |
| Address line 2 | Optional |
| Shipping address phone | Required |

---

## Buttons & Borders

### Border Radius (if theme supports)

| Element | Radius |
|---------|--------|
| Buttons | 9999px (pill shape) |
| Input fields | 8px |
| Cards | 16px |
| Images | 8px |

### Shadows (if theme supports)

| Element | Shadow |
|---------|--------|
| Cards | 0 4px 6px rgba(0,0,0,0.1) |
| Hover state | 0 10px 15px rgba(0,0,0,0.1) |

---

## Spacing Settings

### Section Spacing

| Setting | Desktop | Mobile |
|---------|---------|--------|
| Top padding | 80px | 40px |
| Bottom padding | 80px | 40px |

### Content Width

| Setting | Value |
|---------|-------|
| Page width | 1200px |
| Content alignment | Center |

---

## Custom CSS Location

To add the custom CSS file (`theme-custom.css`):

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. In the **Assets** folder, click **Add a new asset**
4. Upload `theme-custom.css`
5. Open **layout/theme.liquid**
6. Add before `</head>`:

```liquid
{{ 'theme-custom.css' | asset_url | stylesheet_tag }}
```

---

## Testing Checklist

After configuring, test these pages:

- [ ] Homepage displays correctly
- [ ] Product pages show all information
- [ ] Collection pages filter/sort correctly
- [ ] Cart drawer opens smoothly
- [ ] Checkout branding is correct
- [ ] Mobile navigation works
- [ ] Footer links are correct
- [ ] Newsletter signup works
- [ ] Colors match brand guidelines
- [ ] Fonts load correctly (Poppins)

---

## Helpful Links

- [Shopify Theme Customization Guide](https://help.shopify.com/en/manual/online-store/themes/theme-structure/theme-settings)
- [Dawn Theme Documentation](https://shopify.dev/themes/tools/dawn)
- [Shopify Color Settings](https://help.shopify.com/en/manual/online-store/themes/theme-structure/theme-features#colors)

# Wander State — Shopify Store Setup Guide

Complete these steps in order to set up your Shopify store.

**Reference Files in this folder:**
- `theme-custom.css` — Custom CSS for brand styling
- `homepage-sections.liquid` — Homepage section templates
- `THEME-SETTINGS.md` — Complete theme configuration guide
- `products_import.csv` — Product data for import
- `email-copy.md` — Email notification copy
- `policy-*.html` — Legal policy templates

---

## 0. THEME CUSTOMIZATION (Match Static Site Design)

### Install custom CSS
1. Go to **Online Store > Themes**
2. Find your active theme and click the **"..." menu** (three dots)
3. Select **Edit code**
4. In the left sidebar, find and click the **Assets** folder
5. Click **Add a new asset**
6. Upload `theme-custom.css` from this folder
7. Open **Layout > theme.liquid**
8. Find the `</head>` tag and add this line just before it:
   ```liquid
   {{ 'theme-custom.css' | asset_url | stylesheet_tag }}
   ```
9. Click **Save**

### Configure theme settings
Follow the detailed instructions in `THEME-SETTINGS.md` to configure:
- Colors (Navy #2B4C6F, Coral #FF9AA2, Cream #F5F7FA)
- Typography (Poppins font family)
- Logo and favicon
- Header and navigation
- Footer layout and links
- Product card styling

### Build homepage sections
Use `homepage-sections.liquid` as reference for:
- Hero banner with mountain background
- Featured products grid
- Content blocks (Yerba Madre style)
- Mushroom science section
- Trust badges
- Newsletter signup

---

---

## 1. PRODUCTS & VARIANTS

### Import products
1. Go to **Shopify Admin > Products > Import**
2. Upload `products_import.csv` from this folder
3. Review the import preview — you should see **5 products** with variants:
   - Lemon & Mint (Single, 4-Pack, 8-Pack)
   - Chamomile & Blackberry (Single, 4-Pack, 8-Pack)
   - Yuzu & Cucumber (Single, 4-Pack, 8-Pack)
   - Hibiscus & Blood Orange (Single, 4-Pack, 8-Pack)
   - Variety Pack (4-Pack, 8-Pack)
4. Click **Import products**

### After import, verify:
- [ ] Each product has clean URLs (handles): `lemon-mint`, `chamomile-blackberry`, etc.
- [ ] SKU format is consistent: `WS-LM-4PK`, `WS-CB-8PK`, etc.
- [ ] Weights are set (important for shipping calculation):
  - Single can: 386g (~0.85 lb)
  - 4-pack: 1588g (~3.5 lb)
  - 8-pack: 3175g (~7 lb)
- [ ] All variants show correct prices
- [ ] Inventory tracking is ON for all variants

### Add product images
Upload your can renders to each product page:
- Use the images from `docs/assets/` (e.g., `Lemon-Mint_Center no white.png`)
- Add at least 1 image per product
- Set alt text on every image

### Collections (optional but recommended)
Create these collections via **Products > Collections**:
- **All Teas** — all 4 single-flavor products
- **Multipacks** — filter by tag or manually add 4-packs and 8-packs
- **Variety Packs** — just the variety pack product

---

## 2. PRICING, PROMOS & ATTRIBUTION

### Discount codes
Go to **Discounts > Create discount**

**Partner discount (when ready):**
- Code: `OA10`
- Type: Percentage
- Value: 10% (adjust as needed)
- Applies to: Entire order
- Minimum requirement: None (or set a minimum order)
- Usage limit: No limit
- Active dates: Set when ready to launch

**Internal testing:**
- Code: `WSTEST100`
- Type: Percentage
- Value: 100%
- Usage limit: 5 total uses
- Note: Delete or deactivate after testing

**Friends & family (optional):**
- Code: `WANDERFAM`
- Type: Percentage
- Value: 20%
- Usage limit: 1 per customer

### Why this matters
- `OA10` lets you track Outdoor Alliance attribution in Shopify reports
- Filter orders by discount code to see partner-driven revenue
- UTM parameters on links (e.g., `?utm_source=outdoor-alliance&utm_medium=partner&utm_campaign=launch`) combined with GA4 give you full-funnel visibility

---

## 3. CHECKOUT, PAYMENTS & TAXES

### Enable Shopify Payments
1. Go to **Settings > Payments**
2. Click **Activate Shopify Payments**
3. Enter your business details, banking info, and tax ID
4. This enables credit card processing with no third-party fees

### Configure sales tax
1. Go to **Settings > Taxes and duties**
2. Click **United States**
3. Shopify auto-calculates tax for most states
4. Verify that **"Charge tax on this product"** is checked on all products (it should be from the CSV import)
5. If you're registered to collect sales tax in specific states, add those registrations here
6. **Important:** Consult your accountant about sales tax nexus — at minimum, register in your home state

### Shipping zones and rates
1. Go to **Settings > Shipping and delivery**
2. Under **Shipping**, click **Manage rates**
3. Create a **Domestic** zone (all 50 US states):

   **Rate 1 — Standard Shipping:**
   - Price: $5.99
   - Condition: Order price is less than $50.00

   **Rate 2 — Free Shipping:**
   - Price: $0.00 (Free)
   - Condition: Order price is $50.00 or more

4. Set transit time: 5–8 business days (or leave blank)

### Address validation
1. Go to **Settings > Checkout**
2. Under **Customer information**, ensure address autocomplete is ON
3. Shopify enables address validation by default — no extra config needed

### Checkout customization
**Do NOT customize checkout visually right now.** Shopify's default checkout converts well. Focus on getting everything functional first.

---

## 4. TRANSACTIONAL EMAIL

### Enable notifications
1. Go to **Settings > Notifications**
2. Verify these are all **enabled** (they should be by default):
   - [ ] Order confirmation
   - [ ] Shipping confirmation
   - [ ] Shipping update
   - [ ] Delivery update

### Customize email copy
For each template, click **Edit** and update the intro/outro text using the copy in `email-copy.md`.

**Order confirmation:**
- Click the template > Edit code or Edit
- Update the subject line and intro paragraph
- Keep the order details table as-is (Shopify handles this)

**Shipping confirmation:**
- Update subject line and intro text
- Tracking info is auto-included

### Abandoned checkout emails
1. Go to **Settings > Checkout**
2. Scroll to **Abandoned checkouts**
3. Select: **Automatically send abandoned checkout emails**
4. Timing: **10 hours** after abandonment (recommended starting point)
5. Send to: **Anyone who abandons checkout**
6. Customize the email using the copy from `email-copy.md`

### Post-purchase follow-up
1. Go to **Marketing > Automations**
2. Create a new automation: **Thank you after first purchase**
3. Set trigger: 3 days after fulfillment
4. Use the post-purchase copy from `email-copy.md`
5. This is optional for launch but valuable for retention

---

## 5. GA4 + ATTRIBUTION

### Create GA4 property
1. Go to https://analytics.google.com
2. Click **Admin** (gear icon)
3. Click **Create > Property**
4. Property name: `Wander State — Shopify`
5. Select your time zone and currency (USD)
6. Click through to create a **Web** data stream
7. Website URL: your Shopify store URL
8. Copy the **Measurement ID** (starts with `G-`)

### Install GA4 in Shopify
1. Go to **Shopify Admin > Online Store > Preferences**
2. Scroll to **Google Analytics**
3. Paste your `G-XXXXXXX` Measurement ID
4. Check: **Use Enhanced Ecommerce** (if shown)

**Alternative (recommended for better data):**
1. Go to **Online Store > Themes > Edit code**
2. Open `theme.liquid`
3. Paste this before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

Replace `G-XXXXXXX` with your actual Measurement ID.

### Configure conversions in GA4
1. In GA4, go to **Admin > Events**
2. Find or create the `purchase` event
3. Toggle it as a **Key Event** (conversion)
4. Also mark as key events:
   - `begin_checkout`
   - `add_to_cart`

### Verify it works
1. Go to **GA4 > Reports > Realtime**
2. Visit your Shopify store in another tab
3. You should see yourself as an active user
4. Place a test order (use `WSTEST100` code) and verify the purchase event fires

### UTM strategy for links
Use consistent UTMs on all external links pointing to your Shopify store:

| Source | Example URL |
|--------|-------------|
| Static site | `?utm_source=website&utm_medium=referral&utm_campaign=launch` |
| Outdoor Alliance | `?utm_source=outdoor-alliance&utm_medium=partner&utm_campaign=oa-launch` |
| Instagram bio | `?utm_source=instagram&utm_medium=social&utm_campaign=bio-link` |
| Email newsletter | `?utm_source=newsletter&utm_medium=email&utm_campaign=launch-announcement` |

---

## 6. LEGAL & TRUST BASICS

### Add policies
1. Go to **Settings > Policies**
2. For each policy, paste the HTML from the corresponding file in this folder:

| Policy | File |
|--------|------|
| Refund policy | `policy-refund.html` |
| Shipping policy | `policy-shipping.html` |
| Privacy policy | `policy-privacy.html` |
| Terms of service | `policy-terms.html` |

3. Click **Save** for each

### Before-launch checklist for policies
- [ ] Replace `[Address — update before launch]` with your real business address
- [ ] Replace `[YOUR STATE]` in Terms of Service with your state
- [ ] Have a lawyer review if possible (not required for soft launch, but recommended before scaling)

### Contact page
1. Go to **Online Store > Pages > Add page**
2. Title: `Contact`
3. Body: Simple text with `info@drinkwanderstate.com` and any other contact info
4. Or use a Shopify contact form template

### Footer links
Make sure your store footer includes links to:
- Refund Policy
- Shipping Policy
- Privacy Policy
- Terms of Service
- Contact

These are auto-linked by most Shopify themes when policies are saved in Settings.

---

## LAUNCH CHECKLIST

Before going live, verify:

- [ ] All 5 products imported with correct prices, weights, SKUs
- [ ] Product images uploaded
- [ ] Shopify Payments activated and bank connected
- [ ] Sales tax configured (at least home state)
- [ ] Shipping zones and rates set ($5.99 under $50, free over $50)
- [ ] Test order placed and received (use WSTEST100)
- [ ] Order confirmation email received and reads correctly
- [ ] Shipping confirmation template customized
- [ ] Abandoned checkout email enabled
- [ ] GA4 installed and purchase event marked as conversion
- [ ] All 4 legal policies published
- [ ] Contact info accessible
- [ ] Discount codes created (OA10, WSTEST100)
- [ ] Delete/deactivate WSTEST100 after testing
- [ ] Password removed from storefront (Settings > Preferences > Password protection OFF)

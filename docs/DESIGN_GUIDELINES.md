# WANDER STATE Design Guidelines

> **Purpose:** This document captures all design decisions, brand guidelines, and creative direction for the Wander State brand. Update this file as design evolves.
>
> **Last Updated:** January 30, 2026

---

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Typography](#typography)
3. [Color Palette](#color-palette)
4. [Layout & Structure](#layout--structure)
5. [Navigation](#navigation)
6. [Content Blocks & Sections](#content-blocks--sections)
7. [Imagery Guidelines](#imagery-guidelines)
8. [UX/UI Patterns](#uxui-patterns)
9. [Design Inspirations](#design-inspirations)
10. [Shopify Implementation Notes](#shopify-implementation-notes)

---

## Brand Overview

**Brand Name:** WANDER STATE
**Product:** Sparkling Mushroom Tea
**Tagline:** Nature's Classics / Functional Mushrooms meets Real Tea
**Brand Personality:** Natural, transparent, wellness-focused, adventurous, premium yet approachable

**Core Values:**
- Radical Transparency
- Organic & Non-GMO
- Functional Wellness
- Quality Certifications

---

## Typography

### Primary Font: Poppins

| Element | Weight | Size | Notes |
|---------|--------|------|-------|
| H1 (Display) | SemiBold (600) | 40px+ | Hero headlines, page titles |
| H2 | SemiBold (600) | 32px | Section headers |
| H3 | SemiBold (600) | 24px | Subsection headers |
| Body | Regular (400) | 16px | Paragraph text |
| Subtitles | Regular (400) | 14-18px | Supporting text |
| Navigation | Medium (500) | 14-16px | Menu items |
| Buttons/CTA | SemiBold (600) | 14-16px | Call-to-action text |

**Font Loading:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
```

---

## Color Palette

### Primary Colors (Blue Theme)

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue (Dark) | #1a365d | Headers, navigation background, footer |
| Navy Blue (Medium) | #2c5282 | Section backgrounds, accents |
| Light Blue | #ebf8ff | Section backgrounds, cards |
| White | #ffffff | Primary background, text on dark |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Coral/Orange | #ed8936 | CTA buttons, highlights, "Shop Now" |
| Forest Green | #38a169 | Success states, nature accents |
| Warm Cream | #fffaf0 | Alternate section backgrounds |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Text | #1a202c | Primary body text |
| Medium Text | #4a5568 | Secondary text, descriptions |
| Light Text | #ffffff | Text on dark backgrounds |

---

## Layout & Structure

### Container
- **Max Width:** 1200px
- **Padding:** 20-40px horizontal on desktop, 16px on mobile
- **Responsive Breakpoints:**
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px

### Section Spacing
- **Between Sections:** 60-100px
- **Within Sections:** 40-60px
- **Card Gaps:** 20-30px

### Grid System
- 12-column grid for desktop
- 2-column for tablet
- Single column for mobile

---

## Navigation

### Header Style
- Fixed/sticky navigation on scroll
- Logo on left, menu centered or right
- CTA button ("Shop Now") highlighted in coral/orange
- White text on navy background
- Hamburger menu on mobile with smooth animation

### Menu Structure (Inspired by Yerba Madre)
```
- Shop
  - All Products
  - Single Cans
  - Multi-Packs
  - Variety Packs
- Learn
  - Why Functional Mushrooms
  - Meet Your Mushrooms
  - The Science
- About
  - Our Story
  - Certifications & Quality
  - FAQ
- Contact
```

### Footer
- Multi-column layout
- Newsletter signup
- Social links
- Quick links to key pages
- Navy blue background

---

## Content Blocks & Sections

### Hero Section
- Full-width imagery or gradient background
- Large headline (H1) with supporting subtitle
- Primary CTA button
- Optional secondary link
- Nature/mushroom imagery integration

### "Why Functional Mushrooms" Block
- Split layout: text on one side, image on other
- Bulleted benefits or short paragraphs
- Link to learn more

### "Meet Your Mushrooms" Block
- Card-based layout (3 columns on desktop)
- Each mushroom type: Lion's Mane, Reishi, Cordyceps
- Icon or image + title + brief description
- Consistent card styling with light blue backgrounds

### Product Features Block
- Icon + text combinations
- Grid layout (3-4 columns)
- Benefits: Organic, Non-GMO, Zero Sugar, 10 Calories

### Testimonials/Social Proof
- Quote cards with customer reviews
- Star ratings if applicable
- Carousel on mobile

### Radical Transparency Section
- Trust-building content
- Certifications display
- Quality standards information
- Light background with centered text

### Certifications Block
- Logo grid of certification badges
- Brief explanations
- Trust indicators

---

## Imagery Guidelines

### Photography Style
- **Nature-focused:** Forest floors, mushrooms in natural settings, outdoor scenes
- **Product shots:** Clean, well-lit, showing can details
- **Lifestyle:** People enjoying outdoors, wellness moments
- **Color treatment:** Warm, natural tones that complement blue brand colors

### Image Specifications
- **Hero images:** 1920x1080px minimum, optimized for web
- **Product images:** 1000x1000px square for Shopify
- **Section backgrounds:** Subtle, don't compete with text
- **Alt text:** Always include descriptive alt text for accessibility

### Mushroom Imagery
- Feature Lion's Mane, Reishi, and Cordyceps
- Natural forest/woodland settings preferred
- Scientific/lab imagery for transparency sections

---

## UX/UI Patterns

### Buttons
```css
/* Primary CTA */
.btn-primary {
  background: #ed8936;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
}

/* Secondary */
.btn-secondary {
  background: transparent;
  border: 2px solid #2c5282;
  color: #2c5282;
}
```

### Cards
- Subtle shadow or border
- Rounded corners (4-8px)
- Consistent padding (20-30px)
- Hover states with slight elevation

### Forms
- Clean, minimal styling
- Clear labels
- Inline validation
- Accessible focus states

### Interactive Elements (Inspired by Yerba Madre)
- Product badges: "New", "Bestseller", "Low Sugar"
- Floating cart icon
- Live search functionality
- Product carousels
- Quiz/matchmaker for product recommendations (future consideration)

---

## Design Inspirations

### Primary Template: Sierra Nature (WordPress/Astra)
**URL:** https://wpastra.com/templates/sierra-nature-02/

**Key Elements to Adopt:**
- Clean, modern layout structure
- Generous white space
- Nature-friendly aesthetic
- Professional typography hierarchy
- Responsive design patterns
- Section-based page structure

### UX/UI Inspiration: Yerba Madre
**URL:** https://yerbamadre.com/

**Key Elements to Adopt:**
- Hierarchical dropdown menu structure
- Product categorization (Cans, Multi-Packs, etc.)
- Product card design with badges and pricing
- Content flow and blocking strategy
- Mobile hamburger menu with smooth animations
- Persistent shopping cart
- Trust-building content integration
- Sustainability/transparency messaging placement

---

## Shopify Implementation Notes

### Theme Recommendations
- Consider themes that support:
  - Customizable sections
  - Mega menus or dropdown navigation
  - Product badges
  - Quick view functionality
  - Newsletter integration

### Key Pages to Create
1. **Homepage** - Hero, featured products, why us, testimonials
2. **Shop/Collections** - All products with filters
3. **Product Pages** - Detailed with benefits, ingredients, reviews
4. **About/Our Story** - Brand narrative
5. **Learn/Education** - Mushroom benefits, science
6. **FAQ** - Common questions
7. **Contact** - Form and info

### Product Organization
- **Collections:**
  - All Products
  - Single Cans
  - Multi-Packs (4-Pack, 8-Pack)
  - Variety Packs
  - By Mushroom Type (Lion's Mane, Reishi, Cordyceps)
  - By Benefit (Focus, Calm, Energy)

### Metafields to Consider
- Mushroom type
- Primary benefits
- Flavor profile
- Caffeine content
- Calorie count

---

## Change Log

| Date | Changes | Author |
|------|---------|--------|
| 2026-01-30 | Initial document created | Claude/User |

---

*This document should be updated whenever design decisions are made or creative direction changes.*

# Wander State — Transactional Email Copy

Use these to customize the email notification templates in:
Shopify Admin > Settings > Notifications

For each template, you can edit the subject line and body intro text.
Keep the Shopify default layout — just update the copy.

---

## 1. Order Confirmation

**Subject line:**
Your Wander State order is confirmed — #{{ order_name }}

**Body intro (paste above the order details table):**

Thanks for your order — you're officially part of the Wander State community.

We're getting your teas ready. You'll receive a shipping confirmation with tracking info once your order is on its way.

**Body outro (paste below order details):**

Questions about your order? Reply to this email or reach us at info@drinkwanderstate.com.

Wander well,
The Wander State Team

---

## 2. Shipping Confirmation

**Subject line:**
Your Wander State order is on its way — #{{ order_name }}

**Body intro:**

Your order has shipped and is headed your way. Here's your tracking info:

**Body outro:**

Delivery typically takes 5–8 business days. If anything looks off, just reply to this email.

Enjoy the journey,
The Wander State Team

---

## 3. Abandoned Checkout

**Subject line:**
You left something behind

**Body:**

Looks like you started an order but didn't finish. Your cart is still waiting:

{{ abandoned_checkout.line_items }}

No pressure — but if you had questions about our teas, our mushrooms, or anything else, we're here: info@drinkwanderstate.com

[Complete your order →]

Wander well,
The Wander State Team

---

## 4. Post-Purchase Thank You (via Shopify Marketing > Automations)

**Timing:** 3 days after delivery

**Subject line:**
How's your first sip?

**Body:**

Hey {{ customer.first_name }},

Your Wander State order should have arrived by now. We hope you're enjoying it.

A few things worth knowing:

- Our teas pair perfectly with the outdoors. Next hike, next walk, next sunset — bring one along.
- Every can supports Outdoor Alliance and the protection of public lands.
- Want to learn more about the mushrooms in your can? Visit drinkwanderstate.com/mushroom-science

If something wasn't right with your order, just reply to this email. We'll make it right.

Thanks for wandering with us,
The Wander State Team

---

## Tone Guidelines

- Warm, direct, confident — not corporate
- Use "we" and "you" — talk like a friend, not a brand
- No exclamation point overload (one per email max)
- No emojis in email body (keep it clean)
- Sign off: "Wander well," or "Enjoy the journey,"
- Always include info@drinkwanderstate.com as a contact

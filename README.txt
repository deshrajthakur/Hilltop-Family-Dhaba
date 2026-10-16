# Hilltop Family Dhaba – Vegetarian Menu & WhatsApp Ordering Website

## Included
- `menu.html` — responsive 100% vegetarian menu page with search and category filters.
- Add-to-cart buttons for each menu item, quantity controls, and live subtotal.
- Checkout form with customer name, phone number, delivery/takeaway choice, delivery address and special instructions.
- WhatsApp order message sent to the restaurant number configured in the page: +91 98053 41073.
- Uses WhatsApp click-to-chat: customers must review the message and press Send. The restaurant must confirm the order; this website does not auto-confirm orders.
- Payment is directly to the restaurant. No online payment is collected.
- Existing logo, restaurant photos, poster, print menu and Google Maps directions are preserved.

## Publish with GitHub Pages
1. Extract the ZIP.
2. Copy `menu.html` and the complete `assets` folder into the root of your existing website repository. Merge the assets folder carefully if it already exists.
3. Add a navigation link such as `<a href="menu.html">Menu & Order</a>` to your existing homepage.
4. Commit and push to GitHub, then check the published `/menu.html` page.

## Important before publishing
- Menu dishes and prices are sample values. Confirm every dish and price with the restaurant before taking real orders.
- Subtotal excludes any delivery fee or taxes; confirm these with customers on WhatsApp.
- The site opens WhatsApp but does not store orders in a database or send them automatically. Orders are submitted only when the customer presses Send in WhatsApp.
- Restaurant WhatsApp is configured as +91 98053 41073. Change `WHATSAPP_NUMBER` in the script if needed (digits only, with country code).

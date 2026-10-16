# Hilltop Family Dhaba Website

A responsive, mobile-friendly multi-page static website for GitHub Pages.

## Pages
- `index.html` — Home
- `menu.html` — Searchable and filterable starter menu
- `gallery.html` — Responsive gallery with tap-to-preview lightbox
- `contact.html` — Contact details and email-app enquiry form
- `style.css` — Responsive design
- `script.js` — Mobile navigation, menu filtering, gallery preview, contact form and business details

## Publish on GitHub Pages (mobile-friendly)
1. Open your repository on GitHub.
2. Upload all files in this folder to the repository root (not the ZIP file itself).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then Save.
6. Wait a few minutes for the Pages URL to become available.

## IMPORTANT: customize business details
Open `script.js` and update:
- `phone`: phone number with country code, e.g. `+919876543210`
- `whatsapp`: digits only with country code, e.g. `919876543210`
- `email`: email address that should receive enquiries
- `address`: exact restaurant address
- `mapsUrl`: optional Google Maps directions link

The contact form uses `mailto:` and opens the visitor's email app. GitHub Pages is static hosting, so it does not receive/store form submissions by itself. For guaranteed form delivery, connect a form service or backend.

The menu items and gallery art are placeholders. Replace with the real menu, prices, logo and restaurant photos before promoting the site.

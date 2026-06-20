# Assessments Unlimited, LLC

A traditional, responsive website for Assessments Unlimited, LLC — a Woman-Owned Small Business providing primary care, veteran evaluations, and wellness services in Columbia, SC.

## Project Structure

```
ASSESSMENT-UNLIMITED-LLC/
├── index.html              # Main homepage
├── assets/
│   ├── css/
│   │   └── style.css       # Custom theme + Bootstrap overrides
│   └── js/
│       └── main.js         # Navbar scroll + mobile menu behavior
├── README.md               # This file
└── Assessments Unlimited.html   # Original self-extracting bundle (kept as backup)
```

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, flexbox, grid, glassmorphism
- **Bootstrap 5** — responsive grid, navbar, utilities (loaded via CDN)
- **Vanilla JavaScript** — no build step, no bundler
- **Google Fonts** — Inter (loaded via CDN)

## Viewing Locally

Because the site uses Bootstrap from a CDN, an internet connection is required for the first load. After that, files are cached.

### Option 1: Open directly
Double-click `index.html` or open it in your browser.

### Option 2: Use a local server (recommended)
If you have Python installed:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

If you use VS Code, the **Live Server** extension is the easiest option.

## Sections

1. **Hero** — headline, CTAs, trust bar, service tags
2. **About** — practice overview and mission statement
3. **Services** — primary care, veterans evaluations, C&P, wellness, consulting
4. **Our Team** — clinician profile with placeholder portrait
5. **Veterans** — dedicated CTA strip for veteran evaluations
6. **Contact** — location, hours, phone, email
7. **Footer** — logo, copyright, quick links

## Customization

- Colors and fonts are controlled by CSS variables in `assets/css/style.css`.
- The provider portrait placeholder can be replaced by dropping an image into the portrait area.
- Contact details are in `index.html`.

## Notes

The original project was a single-file self-extracting bundle that unpacked React, Babel, and assets at runtime in the browser. This version replaces that with a conventional static-site structure for easier maintenance, better performance, and modern responsive behavior.

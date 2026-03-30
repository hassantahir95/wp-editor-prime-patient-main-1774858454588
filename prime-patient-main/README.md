# Prime Patient Main WordPress Theme

Production-ready WordPress theme for **Turnkey Consult** - Predictable Bookings for Plastic Surgeons.

Converted from Lovable/React to WordPress with full-width layout, Tailwind CSS, and premium landing page sections.

## Features

- ✅ Full-width responsive layout
- ✅ Tailwind CSS with custom design system
- ✅ Scroll reveal animations
- ✅ Interactive FAQ accordion
- ✅ Glassmorphism effects
- ✅ Custom gradient animations
- ✅ Lucide icons as inline SVG
- ✅ Single-page landing design
- ✅ SEO-friendly structure

## Installation

1. **Upload the theme:**
   - Upload the `prime-patient-main` folder to `/wp-content/themes/`
   - Or zip the folder and upload via WordPress admin

2. **Install dependencies and build CSS:**
   ```bash
   cd wp-content/themes/prime-patient-main
   npm install
   npm run build:css
   ```

3. **Activate the theme:**
   - Go to Appearance > Themes in WordPress admin
   - Activate "prime-patient-main"

4. **Add images:**
   - Add the following images to `assets/images/`:
     - `hero-parallax.jpg` - Hero section background
     - `proof-parallax.jpg` - Proof/Results section background
     - `system-parallax.jpg` - System section background
     - `why-parallax.jpg` - Why Choose section background
     - `qualification-parallax.jpg` - Qualification section background
   - Recommended size: 1920x1080px or larger
   - Use high-quality images related to medical/surgical practice

## Theme Structure

```
prime-patient-main/
├── style.css              # WordPress theme header
├── functions.php          # Theme functions and setup
├── index.php              # Fallback template
├── front-page.php         # Homepage template
├── header.php             # Header template
├── footer.php             # Footer template
├── inc/
│   └── icons.php          # Lucide icons as inline SVG
├── template-parts/
│   └── sections/          # Landing page sections
│       ├── hero.php
│       ├── pain.php
│       ├── proof.php
│       ├── system.php
│       ├── process.php
│       ├── benefits.php
│       ├── results.php
│       ├── why-choose.php
│       ├── qualification.php
│       └── final-cta.php
├── assets/
│   ├── css/
│   │   ├── input.css      # Tailwind source
│   │   └── style.css      # Compiled CSS (generated)
│   ├── js/
│   │   └── main.js        # JavaScript interactions
│   └── images/            # Image assets
├── tailwind.config.js     # Tailwind configuration
├── package.json           # NPM dependencies
└── README.md              # This file
```

## Customization

### Colors

Edit CSS variables in `assets/css/input.css`:

```css
:root {
  --accent: 192 100% 56%;     /* Cyan accent color */
  --navy: 219 71% 14%;        /* Navy blue */
  --foreground: 219 71% 14%;  /* Text color */
  /* ... more variables ... */
}
```

### Content

Edit section content in `template-parts/sections/*.php` files.

### Fonts

The theme uses:
- **Cinzel** (serif) for headings
- **Montserrat** (sans-serif) for body text

Change in `functions.php` if needed.

## Development

### Watch CSS changes:
```bash
npm run watch:css
```

### Build CSS for production:
```bash
npm run build:css
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- **Design:** Converted from Lovable/React project
- **Icons:** Lucide Icons
- **Fonts:** Google Fonts (Cinzel, Montserrat)
- **CSS Framework:** Tailwind CSS

## License

GPL v2 or later

## Support

For support, contact Radiant Edge Marketing.

---

**Version:** 1.0.0  
**Author:** Radiant Edge Marketing  
**Text Domain:** prime-patient-main

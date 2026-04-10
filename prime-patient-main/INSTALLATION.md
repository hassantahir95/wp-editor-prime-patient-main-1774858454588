# Installation & Setup Guide

## Quick Start

1. **Upload Theme to WordPress**
   ```bash
   # Option A: Upload via FTP/SFTP
   Upload the entire 'prime-patient-main' folder to:
   /wp-content/themes/prime-patient-main
   
   # Option B: Create ZIP and upload via WordPress admin
   zip -r prime-patient-main.zip prime-patient-main/
   # Then upload via Appearance > Themes > Add New > Upload Theme
   ```

2. **Activate Theme**
   - Go to WordPress Admin > Appearance > Themes
   - Find "prime-patient-main"
   - Click "Activate"
   - The theme will automatically create a homepage

3. **Add Images (IMPORTANT)**
   
   The theme requires 5 background images. Add these to:
   `/wp-content/themes/prime-patient-main/assets/images/`
   
   Required images:
   - `hero-parallax.jpg` - Hero section background (medical/surgical theme)
   - `proof-parallax.jpg` - Results section background
   - `system-parallax.jpg` - System/Process background
   - `why-parallax.jpg` - Why Choose section background
   - `qualification-parallax.jpg` - FAQ section background
   
   **Recommended specs:**
   - Size: 1920x1080px or larger
   - Format: JPG (optimized for web)
   - Theme: Professional medical/surgical imagery
   - Quality: High resolution, not pixelated
   
   **Image suggestions:**
   - Modern medical facility interiors
   - Professional consultation rooms
   - Abstract medical/technology backgrounds
   - Elegant, clean, professional aesthetics

4. **Verify Installation**
   - Visit your homepage
   - All sections should display correctly
   - Scroll animations should work
   - FAQ accordion should be interactive
   - CTA buttons should be styled correctly

## Troubleshooting

### CSS Not Loading
If styles don't appear:
```bash
cd /wp-content/themes/prime-patient-main
npm install
npm run build:css
```

### Images Not Showing
- Check file names match exactly (case-sensitive)
- Verify files are in `assets/images/` folder
- Check file permissions (644 for files, 755 for folders)

### Animations Not Working
- Clear browser cache
- Check JavaScript console for errors
- Ensure `main.js` is loading (check page source)

### Homepage Not Showing
- Go to Settings > Reading
- Ensure "A static page" is selected
- "Homepage" should be set to the auto-created page

## Customization

### Change Colors
Edit `/assets/css/input.css` and rebuild:
```css
:root {
  --accent: 192 100% 56%;  /* Change this */
}
```
Then run: `npm run build:css`

### Edit Content
All content is in `/template-parts/sections/*.php`
- `hero.php` - Hero section
- `pain.php` - Problem section
- `proof.php` - Results/proof
- `system.php` - System overview
- `process.php` - How it works
- `benefits.php` - Benefits list
- `results.php` - Statistics
- `why-choose.php` - Comparison table
- `qualification.php` - Qualification + FAQ
- `final-cta.php` - Final CTA + Footer

### Add/Remove Sections
Edit `/front-page.php` and comment out or add sections:
```php
get_template_part('template-parts/sections/hero');
// get_template_part('template-parts/sections/pain'); // Commented out
```

## Development Mode

For active development:
```bash
cd /wp-content/themes/prime-patient-main
npm run watch:css
```
This watches for CSS changes and rebuilds automatically.

## Production Checklist

Before going live:
- ✅ All images added and optimized
- ✅ CSS built with `npm run build:css`
- ✅ Test on mobile devices
- ✅ Check all CTA buttons work
- ✅ Verify FAQ accordion functions
- ✅ Test scroll animations
- ✅ Check browser compatibility
- ✅ Run performance audit
- ✅ Optimize images (compress JPGs)
- ✅ Enable caching plugin
- ✅ Test contact form (if added)

## Support

For issues or questions:
- Check README.md for theme structure
- Review code comments in PHP files
- Contact: Radiant Edge Marketing

## Technical Requirements

- WordPress 5.0+
- PHP 7.4+
- Node.js 14+ (for CSS building)
- Modern browser support

## File Permissions

Recommended permissions:
- Folders: 755
- PHP files: 644
- CSS/JS files: 644
- Images: 644

## Security Notes

- Theme disables comments (not needed for landing page)
- Removes unnecessary WordPress meta tags
- Uses proper escaping for all output
- Nonces not needed (no forms in base theme)

## Performance Tips

1. **Optimize Images:**
   - Use JPG for photos
   - Compress before upload
   - Consider WebP format
   - Recommended: TinyPNG or ImageOptim

2. **Enable Caching:**
   - Install WP Super Cache or W3 Total Cache
   - Enable browser caching
   - Use CDN if available

3. **Minification:**
   - CSS is already minified
   - Consider minifying HTML output
   - Use plugin like Autoptimize

4. **Lazy Loading:**
   - WordPress 5.5+ has native lazy loading
   - Background images load immediately (needed for parallax)

## Next Steps

After installation:
1. Add your images
2. Customize colors if needed
3. Update CTA button actions in `main.js`
4. Add contact form plugin if needed
5. Set up analytics
6. Configure SEO plugin (Yoast/Rank Math)
7. Test thoroughly
8. Launch! 🚀

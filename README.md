# Portfolio Website - HTML/CSS/JavaScript Version

This is a converted version of your React portfolio website to vanilla HTML, CSS, and JavaScript. The website maintains all the original content while being SEO-friendly and fully responsive.

## 🚀 Features

- **Fully Responsive Design** - Works on all devices and screen sizes
- **SEO Optimized** - Proper meta tags, semantic HTML, and structured content
- **Accessibility** - Skip links, proper ARIA labels, and keyboard navigation
- **Modern Animations** - Smooth transitions, hover effects, and scroll animations
- **Performance Optimized** - Efficient CSS and JavaScript with minimal dependencies
- **Cross-browser Compatible** - Works on all modern browsers

## 📁 File Structure

```
html-code/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ How to Use

### 1. Basic Setup
1. Download all files to your web server or local directory
2. Open `index.html` in a web browser
3. The website should work immediately with all functionality

### 2. Customization

#### Personal Information
Edit `index.html` to update:
- Your name (replace "Your Name" throughout the file)
- Email address
- Phone number
- LinkedIn profile URL
- GitHub username
- Education details
- About me text

#### Styling
Modify `styles.css` to change:
- Colors (update CSS variables in `:root`)
- Fonts (change the Google Fonts import and CSS variables)
- Layout spacing and sizing
- Animations and transitions

#### Functionality
Update `script.js` to modify:
- Skills lists
- Animation behaviors
- Interactive features

### 3. Deployment

#### Local Development
- Use a local web server (e.g., Live Server in VS Code)
- Or simply open `index.html` in a browser

#### Web Hosting
- Upload all files to your web hosting provider
- Ensure the server supports HTML, CSS, and JavaScript
- Update meta tags with your actual domain

#### GitHub Pages
1. Create a new repository
2. Upload these files to the repository
3. Enable GitHub Pages in repository settings
4. Your portfolio will be available at `https://username.github.io/repository-name`

## 🎨 Customization Guide

### Colors
The website uses CSS custom properties for easy color customization:

```css
:root {
  --brand: hsl(258, 85%, 60%);        /* Primary brand color */
  --background: hsl(0, 0%, 100%);     /* Page background */
  --foreground: hsl(222.2, 84%, 4.9%); /* Text color */
  /* ... more colors */
}
```

### Fonts
Change the font by updating the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update the CSS variable:

```css
:root {
  --font-sans: 'YourFont', ui-sans-serif, system-ui, ...;
}
```

### Skills and Languages
Update the skills in `script.js`:

```javascript
const technicalSkills = [
    "Your Skill 1", "Your Skill 2", "Your Skill 3"
    // ... add your skills
];

const softSkills = [
    { label: "Your Soft Skill", icon: "✨" }
    // ... add your soft skills
];

const languages = ["Language 1", "Language 2"];
```

## 🔧 Technical Details

### CSS Features
- CSS Custom Properties (CSS Variables)
- CSS Grid and Flexbox layouts
- CSS Animations and Transitions
- Media Queries for responsiveness
- Dark mode support (system preference)

### JavaScript Features
- ES6+ syntax
- Intersection Observer API for animations
- Event delegation and performance optimization
- Mobile menu functionality
- Smooth scrolling navigation
- Dynamic content population

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1400px

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify CSS/JS**: Compress files for production
3. **Enable Gzip**: Configure server compression
4. **Use CDN**: Serve fonts and external resources from CDNs
5. **Lazy Loading**: Implement for images if adding more content

## 🔍 SEO Features

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Fast loading times
- Mobile-friendly design

## 🎯 Accessibility Features

- Skip to content links
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Semantic HTML elements
- Alt text for images (when added)
- High contrast ratios

## 📝 Adding New Sections

To add new sections:

1. **HTML**: Add new `<section>` elements in `index.html`
2. **CSS**: Add corresponding styles in `styles.css`
3. **JavaScript**: Add any interactive functionality in `script.js`

Example new section:

```html
<section id="projects" class="projects">
  <div class="container">
    <h2 class="section-title">Projects</h2>
    <!-- Your content here -->
  </div>
</section>
```

## 🐛 Troubleshooting

### Common Issues

1. **Fonts not loading**: Check internet connection and Google Fonts availability
2. **Animations not working**: Ensure JavaScript is enabled
3. **Mobile menu not working**: Check for JavaScript errors in console
4. **Styles not applying**: Verify CSS file path and syntax

### Debug Mode
Open browser developer tools (F12) to:
- Check for JavaScript errors
- Inspect CSS styles
- Test responsive design
- Verify accessibility

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are in the same directory
3. Ensure your web server supports the file types
4. Test in different browsers

## 📄 License

This code is provided as-is for your portfolio use. Feel free to modify and customize as needed.

---

**Happy coding! 🎉**

Your portfolio website is now ready to showcase your skills and experience to the world! 
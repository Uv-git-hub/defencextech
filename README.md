Defendxtech Website
A comprehensive cybersecurity services website combining the layout structure from Sattrix.com with Defendxtech's branding and visual style.

Features
Design Elements
Dark Theme: Professional dark background (#050816) with cyan accents (#3ec4c8)
Animated Network Background: Interactive particle network animation using Canvas API
Responsive Design: Fully responsive across all devices (desktop, tablet, mobile)
Sections Included
Top Bar: Contact information and tagline
Header/Navigation: Sticky header with dropdown menus
Hero Section: Main hero with typing effect and stats
Achievement Banner: Splunk partnership announcement
About Section: Company overview and mission
Services Section: 4 main service categories with detailed lists
Managed Services
Professional Services
Assessment Services
Expertise
CTA Banners: Multiple call-to-action sections throughout
Benefits Section: 6 key benefits with icons
Detailed Benefits: 6 comprehensive benefit explanations
How We Work: 8-step process timeline
Why It Works: 5 key differentiators
Industry Expertise: 6 industry sectors
Testimonials: Client testimonial slider
FAQ Section: Expandable accordion with 5 questions
Contact Section: Contact form and information
Footer: Multi-column footer with links and info
Interactive Features
Mobile-responsive navigation with hamburger menu
FAQ accordion (click to expand/collapse)
Smooth scrolling to anchor links
Contact form with validation
Scroll animations (elements fade in on scroll)
Network particle animation background
Typing effect on hero title
Technology Stack
HTML5: Semantic markup
CSS3: Modern styling with custom properties, Grid, and Flexbox
TypeScript: Type-safe JavaScript for all interactions
Vite: Build tool and dev server
Bun: Package manager
Color Scheme
--primary-color: #3ec4c8 (Cyan)

--secondary-color: #00a8b5 (Teal)

--accent-color: #f97316 (Orange)

--dark-bg: #050816 (Dark Blue)

--dark-card: #0d1425 (Card Background)

--dark-surface: #1a2332 (Surface)

--text-primary: #c1c6d1 (Light Gray)

--text-secondary: #8892a6 (Medium Gray)

--border-color: #1f4a4a (Dark Cyan)
File Structure
defendxtech/
├── index.html          # Main HTML structure
├── src/
│   ├── main.ts        # TypeScript for interactions
│   └── styles.css     # All styling
├── package.json
└── README.md
Contact Information
Email: b.pandey@defendxtech.com
Phone: +91-7405963678
Location: India (UTC+4)
Address: 28, Damubhai colony, Anjali cross roads, Bhattha, Ahmedabad - 380007
Development
Local Development
bun install

bun run dev
Build for Production
bun run build
Preview Production Build
bun run preview
Browser Compatibility
Chrome/Edge (latest)
Firefox (latest)
Safari (latest)
Mobile browsers
Key Differences from Original Sites
From Defendxtech.com (Kept)
✅ Dark theme with network animation background ✅ Cyan/teal color scheme ✅ Minimalist, modern aesthetic ✅ Logo and branding

From Sattrix.com (Adopted)
✅ Comprehensive multi-section layout ✅ Services breakdown into 4 categories ✅ Benefits and "How We Work" sections ✅ Industry expertise showcase ✅ Testimonials and FAQ ✅ Detailed footer with multiple columns ✅ Call-to-action banners throughout

Customization
To Change Colors
Edit the CSS variables in src/styles.css:

:root {

  --primary-color: #3ec4c8;

  --accent-color: #f97316;

  /* ... etc */

}
To Add More Services
Edit the services section in index.html and add more service-category divs.

To Modify Network Animation
Adjust parameters in src/main.ts:

const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);

const maxDistance = 150; // Connection distance
License
© 2025 Defendxtech — Built for the future.
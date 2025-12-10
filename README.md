# IAC 2026 - Industry–Academia Conclave Website

A production-ready, fully responsive multi-page website for the Industry–Academia Conclave (IAC) 2026, organized by the Career Development Centre (CDC), IITRAM.

## Event Details

- **Event**: Industry–Academia Conclave (IAC) 2026
- **Theme**: "Bridging Innovation and Industry"
- **Dates**: 23–24 January 2026
- **Venue**: IITRAM, Ahmedabad
- **Expected Participants**: ~250 students from engineering colleges across Gujarat

## Features

- **Multi-Page Architecture**: Organized content across different routes for better navigation
- **Modern, Custom Design**: Clean, professional design that doesn't look AI-generated or template-based
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **React Router Navigation**: Seamless page transitions with active link indicators
- **Interactive Components**: Day-toggle schedule, hover effects, and micro-interactions
- **Performance Optimized**: Built with React 18 and Vite for fast loading
- **Accessibility**: Semantic HTML, keyboard navigation, and proper ARIA labels

## Tech Stack

- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Component-scoped styling
- **Google Fonts** - Sora (headings) + Inter (body text)

## Project Structure

```
IAC/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Highlights.jsx
│   │   ├── Highlights.css
│   │   ├── Schedule.jsx
│   │   ├── Schedule.css
│   │   ├── StudentsBenefits.jsx
│   │   ├── StudentsBenefits.css
│   │   ├── CompanyBenefits.jsx
│   │   ├── CompanyBenefits.css
│   │   ├── StallsAndSponsors.jsx
│   │   ├── StallsAndSponsors.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── SchedulePage.jsx
│   │   ├── SchedulePage.css
│   │   ├── StudentsPage.jsx
│   │   ├── StudentsPage.css
│   │   ├── PartnersPage.jsx
│   │   ├── PartnersPage.css
│   │   ├── ContactPage.jsx
│   │   └── ContactPage.css
│   ├── data/
│   │   ├── schedule.js
│   │   ├── benefits.js
│   │   └── sponsors.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd d:\IAC
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Sections

### Pages (Routes)

1. **Home** (`/`) - Landing page with:
   - Hero section with event details
   - About section with objectives
   - Highlights overview
   - Quick links to other pages

2. **Schedule** (`/schedule`) - Detailed two-day event schedule with interactive day tabs

3. **For Students** (`/students`) - Student benefits and registration CTA

4. **Partners** (`/partners`) - Corporate benefits, stalls, and sponsorship packages

5. **Contact** (`/contact`) - Contact information and inquiry form

## Customization

### Updating Content

All content is stored in data files for easy updates:

- **Schedule**: `src/data/schedule.js`
- **Benefits**: `src/data/benefits.js`
- **Sponsors/Stalls**: `src/data/sponsors.js`

### Changing Colors

The color scheme uses a consistent blue theme. To change:

- Primary Blue: `#2563eb` (search and replace throughout CSS files)
- Dark Navy: `#0f172a`
- Gray Scale: Tailwind-inspired slate colors

### Fonts

The site uses:
- **Sora** for headings (bold, modern)
- **Inter** for body text (readable, professional)

To change fonts, update the Google Fonts link in `index.html` and the font-family declarations in CSS.

## Design Philosophy

This website is designed to:
- Look professional and trustworthy (university + tech event aesthetic)
- Feel custom-built, not template-based
- Use subtle, tasteful animations
- Maintain clean hierarchy and spacing
- Be easily scannable and navigable
- Provide seamless multi-page navigation experience

## Navigation Structure

The website uses React Router for client-side routing with the following pages:

- **/** - Home/Landing page
- **/schedule** - Event schedule
- **/students** - Student benefits
- **/partners** - Partnership opportunities
- **/contact** - Contact information

All pages feature:
- Consistent header and footer
- Active route highlighting in navigation
- Automatic scroll-to-top on page change
- Mobile-responsive menu

## Content Overview

### Home Page
- **Hero Section**: Event branding, dates (23-24 Jan 2026), venue (IITRAM, Ahmedabad)
- **About Section**: Event vision, objectives, and focus areas
- **Highlights**: 6 key features (Keynote Talks, Panels, Pitch Competition, Project Expo, Corporate Stalls, Cultural Evening)
- **Quick Links**: Navigation cards to other pages

### Schedule Page
- Interactive two-day schedule with tab switching
- **Day 1** (23 Jan): Innovation, Industry & Integration theme
  - Inauguration, keynotes, sponsor sessions, pitch round 1, panel on smart cities
- **Day 2** (24 Jan): Entrepreneurship, Collaboration & Future Vision theme
  - Future innovation lectures, entrepreneur panels, pitch finals, project expo, cultural event, closing ceremony

### Students Page
- **6 Key Benefits**:
  1. Industry Exposure - Real-world insights from professionals
  2. Skill Development - Learn from experts (AI, EV, Mechatronics, etc.)
  3. Career Guidance - HR interactions, hiring processes
  4. Networking - Connect with companies, entrepreneurs, innovation hubs
  5. Recognition & Incentives - Certificates, prizes, project visibility
  6. Entrepreneurship Insight - Pitch platform with investors
- Registration call-to-action

### Partners Page
- **Company Benefits**:
  1. Talent Access - Direct student recruitment
  2. Brand Visibility - Event promotion and digital presence
  3. CSR & Outreach - Academic-industry initiatives
  4. Startup Collaboration - Early-stage innovation discovery
  5. Networking - Connect with government agencies and collaborators

- **Corporate Stalls** (One Day):
  - Small Stall: ₹799 (1 desk, banner slot)
  - Large Stall: ₹999 (1 desk, standee, brochure space)
  - Premium Stall: ₹1,299 (Larger booth, 10-min talk slot)

- **Sponsorship Packages**:
  - Platinum: ₹1,00,000 (Main-stage logo, 20-min keynote, 5 VIP passes, felicitation)
  - Gold: ₹75,000 (Banner logos, 10-min session, 3 VIP passes, event kit brochures)
  - Silver: ₹50,000 (Poster/digital logos, brochure inserts, stage acknowledgements)

### Contact Page
- Email: cdc@iitram.ac.in (placeholder)
- Phone: +91-XXXXXXXXXX (placeholder)
- Address: IITRAM, Ahmedabad, Gujarat
- Registration interest form/CTA

## Event Details

### Core Objectives
1. Facilitate industry exposure through keynotes and panel discussions
2. Create networking opportunities with industry leaders, HRs, and startup founders
3. Encourage student innovation via idea pitches and project showcases
4. Enable collaborations with ecosystems like GIFT City, MSME, iCreate

### Target Audience
- **Students**: ~250 participants from engineering colleges across Gujarat
- **Companies**: Recruiters, HR teams, startup founders
- **Industry Leaders**: Speakers, panelists, mentors
- **Innovation Hubs**: GIFT City, MSME, iCreate, and others

### Event Highlights
- **Keynote Sessions**: Industry 4.0, Innovation, Engineering Expectations
- **Panel Discussions**: Smart Cities (GIFT City case study), Entrepreneurship journeys
- **Pitch Your Idea**: Two-round startup competition with investor exposure
- **Student Project Expo**: Showcase of innovative projects
- **Technical Sessions**: AI, EV, Mechatronics, Smart Infrastructure
- **Networking Sessions**: Lunch breaks, mixers, photo sessions
- **Cultural Evening**: Performances and entertainment

## Design Philosophy

This website is designed to:
- Look professional and trustworthy (university + tech event aesthetic)
- Feel custom-built, not template-based
- Use subtle, tasteful animations
- Maintain clean hierarchy and spacing
- Be easily scannable and navigable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

### File Organization
- **Components** (`src/components/`): Reusable UI components used across pages
- **Pages** (`src/pages/`): Route-specific page components
- **Data** (`src/data/`): Content configuration files for easy updates

### Styling Approach
- Custom CSS with no external UI libraries
- Consistent spacing system (multiples of 4px and 8px)
- Mobile-first responsive design
- CSS transitions for smooth interactions
- Custom color palette:
  - Primary Blue: `#2563eb`
  - Dark Navy: `#0f172a`
  - Light backgrounds: `#f8fafc`, `#f1f5f9`
  - Text colors: Slate color scale

### Font System
- **Headings**: Sora (600, 700 weights)
- **Body**: Inter (400, 500, 600 weights)
- Google Fonts preconnect for performance

### Key Features Implementation
- **React Router**: Client-side routing with Link components
- **Active Navigation**: useLocation hook for active route highlighting
- **Responsive Menu**: Mobile hamburger menu with state management
- **Scroll Management**: Auto-scroll to top on route change
- **Icon System**: Inline SVG icons for minimal dependencies

## Performance Optimization

- Vite for fast development and optimized builds
- Code splitting via React Router
- Google Fonts preconnect and preload
- Minimal dependencies (React, React Router, Vite only)
- Optimized images and assets
- CSS-only animations (no heavy libraries)

## Accessibility Features

- Semantic HTML structure (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Sufficient color contrast ratios
- Alt text ready for images (when added)

## Future Enhancements

- Add registration form integration
- Implement actual brochure download
- Add speaker profiles section
- Include past event gallery
- Integrate with backend for dynamic content

## Future Enhancements

### Planned Features
- Add registration form integration with backend
- Implement actual brochure download (PDF generation)
- Add speaker/guest profiles section with photos
- Include past event gallery (if applicable)
- Integrate with backend API for dynamic content
- Add email subscription for event updates
- Implement social media sharing features
- Add countdown timer to event date
- Create admin panel for content management
- Add testimonials from past participants
- Implement live schedule updates during event
- Add photo gallery from the event (post-event)

### Technical Improvements
- Add meta tags for better SEO
- Implement Open Graph tags for social sharing
- Add structured data (JSON-LD) for search engines
- Set up analytics tracking (Google Analytics/Plausible)
- Implement lazy loading for images
- Add service worker for offline capability
- Set up automated deployment pipeline
- Add unit and integration tests
- Implement error boundary components
- Add loading states for async operations

## Deployment Guide

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

### Deployment Options

#### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy with one click

#### Option 2: Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add `_redirects` file for SPA routing:
   ```
   /*    /index.html   200
   ```

#### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/iac-2026",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/iac-2026/',
     plugins: [react()],
   })
   ```
4. Run: `npm run deploy`

#### Option 4: Traditional Hosting (cPanel, etc.)
1. Run `npm run build`
2. Upload contents of `dist/` folder to server
3. Configure server for SPA routing (rewrite all routes to index.html)

## Environment Variables

Currently, the project doesn't use environment variables. For future backend integration:

Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=cdc@iitram.ac.in
```

Access in code:
```js
const apiUrl = import.meta.env.VITE_API_URL;
```

## Contributing

### Code Style
- Use functional components with hooks
- Keep components focused and single-purpose
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing file structure and naming conventions

### Making Changes
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly on mobile and desktop
4. Commit: `git commit -m "Description of changes"`
5. Push: `git push origin feature/your-feature`
6. Create a pull request

## Troubleshooting

### Development Server Won't Start
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Fails
```bash
# Check for TypeScript errors (if any .ts files)
# Verify all imports are correct
# Check console for specific error messages
```

### Routes Not Working After Deployment
- Ensure server is configured for SPA routing
- Check that base URL is correctly set in vite.config.js
- Verify _redirects or .htaccess file is present

### Styling Issues
- Clear browser cache
- Check CSS specificity conflicts
- Verify CSS file imports
- Check responsive breakpoints

## Project Statistics

- **Total Components**: 11 (Navbar, Footer, Hero, About, Highlights, Schedule, StudentsBenefits, CompanyBenefits, StallsAndSponsors, Contact + pages)
- **Total Pages**: 5 (Home, Schedule, Students, Partners, Contact)
- **Total Routes**: 5
- **Data Files**: 3 (schedule.js, benefits.js, sponsors.js)
- **Lines of Code**: ~2000+ (components + pages + styling)
- **Dependencies**: 3 (react, react-dom, react-router-dom)
- **Dev Dependencies**: 2 (@vitejs/plugin-react, vite)

## License

© 2026 Career Development Centre (CDC), IITRAM

## Contact

For website updates, technical issues, or event queries:
- **Email**: cdc@iitram.ac.in
- **Phone**: +91-XXXXXXXXXX
- **Address**: IITRAM, Ahmedabad, Gujarat, India

### Development Team
- Built for CDC, IITRAM
- Website Version: 2.0 (Multi-page)
- Last Updated: December 2025

### Support
For technical support or feature requests, please create an issue on the GitHub repository or contact the development team.

---

**Built with ❤️ for IAC 2026 | Career Development Centre, IITRAM**

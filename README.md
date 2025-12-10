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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add registration form integration
- Implement actual brochure download
- Add speaker profiles section
- Include past event gallery
- Integrate with backend for dynamic content

## License

© 2026 Career Development Centre (CDC), IITRAM

## Contact

For website updates or issues:
- Email: cdc@iitram.ac.in
- Phone: +91-XXXXXXXXXX

---

Built with ❤️ for IAC 2026

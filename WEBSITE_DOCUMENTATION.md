# Udgam 2026 - Industry–Academia Conclave (IAC) Website Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [Technical Stack](#technical-stack)
3. [Design System](#design-system)
4. [Page-by-Page Breakdown](#page-by-page-breakdown)
5. [Components](#components)
6. [Forms & Registration](#forms--registration)
7. [SEO Implementation](#seo-implementation)
8. [Contact Information](#contact-information)
9. [Deployment](#deployment)

---

## 🎯 Overview

**Event Name:** Udgam 2026 - Industry–Academia Conclave (IAC)  
**Organizer:** Career Development Centre (CDC), IITRAM  
**Dates:** 27-28 February 2026  
**Location:** Institute of Infrastructure Technology Research and Management (IITRAM), Ahmedabad, Gujarat  
**Website URL:** https://udgam-iac.iitram.in  
**Tagline:** "Bridging Innovation and Industry"

### Event Description
Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave featuring keynotes, panel discussions, pitch competitions with ₹40,000 prize pool, and networking with industry leaders from iCreate and SSIP. A two-day event bringing together students, academia, and industry leaders.

---

## 🛠 Technical Stack

### Core Technologies
- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Routing:** React Router DOM 7.10.1
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm

### Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hot-toast": "^2.6.0",
  "react-router-dom": "^7.10.1"
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "vite": "^5.0.8"
}
```

### Hosting & Deployment
- **Platform:** Netlify
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18

---

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Teal/Turquoise (Primary Brand):** `#14b8a6` (teal-500)
- **Light Teal:** `#2dd4bf` (teal-400)
- **Extra Light Teal:** `#ccfbf1` (teal-100)
- **Teal Background:** `#f0fdfa` (teal-50)

#### Neutral Colors
- **Dark Slate:** `#0f172a` (slate-900) - Primary text
- **Medium Slate:** `#475569` (slate-600) - Secondary text
- **Light Slate:** `#64748b` (slate-500) - Tertiary text
- **Border Gray:** `#e2e8f0` (slate-200)
- **Background Gray:** `#f1f5f9` (slate-100)
- **Off-White:** `#fafbfc`

#### Accent Colors
- **Blue Accent:** `#93c5fd` (blue-300)
- **Purple Accent:** `#c4b5fd` (purple-300)

### Typography

#### Font Families
1. **Sora** (Display/Headings)
   - Weights: 600 (Semi-bold), 700 (Bold)
   - Used for: Titles, headings, brand text
   - Source: Google Fonts
   
2. **Inter** (Body/UI)
   - Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
   - Used for: Body text, buttons, navigation
   - Source: Google Fonts

#### Font Sizes
- **Hero Title:** 56px (desktop) → 44px (tablet) → 36px (mobile)
- **Section Title:** 48px (desktop) → 36px (tablet) → 28px (mobile)
- **Hero Subtitle:** 24px (desktop) → 22px (tablet) → 18px (mobile)
- **Body Text:** 17px (desktop) → 16px (tablet) → 15px (mobile)
- **Small Text:** 13-15px
- **Tiny Text:** 11-12px

### Spacing System
- **Container Max Width:** 1400px (navbar), 1200px (content)
- **Section Padding:** 80px (desktop) → 60px (tablet) → 40px (mobile)
- **Container Padding:** 32px (desktop) → 20px (tablet) → 16px (mobile)

### Border Radius
- **Small:** 8px (buttons, inputs)
- **Medium:** 12px (cards, dropdowns)
- **Large:** 16px (major cards)
- **Pill:** 20px (badges)

### Shadows
- **Light:** `0 2px 8px rgba(20, 184, 166, 0.05)`
- **Medium:** `0 4px 12px rgba(20, 184, 166, 0.15)`
- **Heavy:** `0 12px 32px rgba(20, 184, 166, 0.15)`
- **Dropdown:** `0 8px 32px rgba(0, 0, 0, 0.12)`

### Animations & Effects

#### Key Animations
1. **Gradient Shift:** 15s infinite background animation
2. **Text Shine:** 4s infinite gradient text animation
3. **Pulse:** 2s infinite scale animation for badges
4. **Typing Cursor:** 1s blinking animation
5. **Fade In Up:** 0.8s entrance animation
6. **Shimmer:** 3s infinite glow effect

#### Hover Effects
- **Button Lift:** `translateY(-3px)` with enhanced shadow
- **Card Lift:** `translateY(-6px)` with border color change
- **Stat Card:** `translateX(8px) scale(1.02)`

#### Transitions
- **Standard:** `all 0.3s ease`
- **Cubic Bezier:** `0.4, 0, 0.2, 1` for smooth animations

### Responsive Breakpoints
- **Desktop:** > 968px
- **Tablet:** 640px - 968px
- **Mobile:** < 640px
- **Small Mobile:** < 480px

---

## 📄 Page-by-Page Breakdown

### 1. Home Page (`/`)

#### Hero Section
- **Badge:** "Flagship Event by CDC, IITRAM"
- **Title:** "Udgam^IAC 2026" (with superscript IAC)
- **Subtitle:** "Bridging Innovation and Industry"
- **Description:** Animated typing effect describing the event
- **Countdown Timer:** Live countdown to event date
- **Meta Information:**
  - 📅 27–28 February 2026
  - 📍 IITRAM, Ahmedabad
- **CTAs:**
  - "Register Now" → Links to /students
  - "Add to Calendar" → Google Calendar integration
  - "Learn More" → Scrolls to About section

#### Stats Cards
1. **2 Days of Innovation**
   - Keynotes · Panels · Discussions
2. **15+ Industry Speakers**
   - Experts · Mentors · Innovators
3. **∞ Opportunities** (Highlighted)
   - Industry Leaders · Startups · Innovation Hubs

#### About Section
- Event overview and objectives
- Key highlights and benefits

#### Highlights Section
- Major event features
- What makes Udgam unique

#### Quick Links Grid (7 cards)
1. View Schedule
2. For Students
3. For Companies
4. Sponsorship
5. Pitch Your Idea
6. Contact Us
7. FAQs

---

### 2. Schedule Page (`/schedule`)

#### Day 1 - Thursday, 27 February 2026
**Theme:** Innovation, Industry & Integration

| Time | Session | Description |
|------|---------|-------------|
| 09:00 – 09:45 | Inauguration Ceremony | Address by Chairperson, TPO, and Guest of Honour |
| 09:45 – 10:15 | Keynote: The Emerging Gujarat | Innovation and Industry 4.0 |
| 10:30 – 11:15 | Sponsor Sessions | Industry insights and corporate presentations |
| 11:30 – 12:30 | Pitch Your Idea – Round 1 | Student startup pitches – shortlisting for finals |
| 12:30 – 15:30 | Panel Discussion | The Rise of Smart Cities - GIFT City as a Case Study |
| 15:45 – 17:00 | Keynote Session | Expectations of Companies from New-Generation Engineers |

#### Day 2 - Friday, 28 February 2026
**Theme:** Entrepreneurship, Collaboration & Future Vision

| Time | Session | Description |
|------|---------|-------------|
| 09:30 – 10:15 | Lecture Session | Future Innovation - Do companies need AI/ML or Automation? |
| 10:30 – 11:30 | Panel Talk | 2nd & 3rd Generation Entrepreneurs - The Journey Ahead |
| 11:30 – 12:15 | Sponsor Session | Industry presentations and Q&A |
| 12:15 – 16:00 | Pitch Your Idea – Round 2 (Finals) | Final pitches and winner announcement |
| 16:00 – 16:30 | Student Project Expo | Showcase of innovative student projects |
| 16:30 – 17:15 | Cultural Event | Performances and entertainment |
| 17:15 – 18:30 | Closing Ceremony & Mixer | Vote of thanks, networking, photo session |

---

### 3. Speakers Page (`/speakers`)

**Content:** Information about industry speakers and panelists
- Speaker profiles
- Company affiliations
- Session topics

---

### 4. Students Page (`/students`)

#### Registration Information
- **Fee:** ₹50 per student
- **Registration Status:** Open to all students everywhere
- **Important:** No on-spot registration available
- **Registration Link:** https://forms.gle/2FaPhLbwhfW5JGxx7 (Google Form)

#### Student Benefits (6 Key Areas)

1. **Industry Exposure**
   - Learn about real-world projects
   - Upcoming technologies
   - Job-ready skills from professionals

2. **Skill Development**
   - Cutting-edge technologies: AI, EV, Mechatronics, Smart Infrastructure
   - Expert-led sessions

3. **Career Guidance**
   - Panel discussions on hiring processes
   - Internship opportunities
   - Startup career paths

4. **Networking**
   - Connect with top companies
   - Meet entrepreneurs
   - Innovation hubs: GIFT City, MSME, iCreate

5. **Recognition & Incentives**
   - Participation certificates
   - Prizes for best ideas
   - Project visibility

6. **Entrepreneurship Insight**
   - Pitch Your Idea platform
   - Present to investors
   - Startup founder interactions

#### Registration Features
✓ Minimal Fee: Just ₹50 registration  
✓ Open to All: Students from everywhere welcome  
✓ No Walk-ins: Pre-registration required  
✓ Easy Process: Simple online registration

---

### 5. Companies Page (`/companies`)

#### Company Benefits (5 Key Areas)

1. **Brand Visibility**
   - Promotion via event banners and posters
   - CDC's official digital platforms

2. **CSR & Outreach**
   - Contribute to academic–industry skill building
   - Innovation initiatives

3. **Startup Collaboration**
   - Identify early-stage innovations
   - Student-led ideas for funding or mentorship

4. **Networking**
   - Exposure to government agencies (MSME, iCreate, GIFT City)
   - Industrial collaborators

5. **Talent Access**
   - Direct interaction with engineering students
   - Internships and recruitment opportunities

#### Corporate Stall Booking
- **Interest Form:** https://forms.gle/C21fHj3MmK71Q8tU8 (Google Form)
- **Features:**
  - Direct interaction with engineering students
  - Showcase products and conduct activities
  - One-day or two-day stall options
  - Prime location at venue

---

### 6. Sponsorship Page (`/sponsorship`)

#### Sponsorship Packages
Three tiers available: Platinum, Gold, Silver

#### Benefits
- Brand visibility
- Logo placement
- Speaking opportunities
- Stall space
- Marketing materials distribution

#### Interest Form
**URL:** https://forms.gle/dFqcnHw2EYxTnTXm8 (Google Form)

---

### 7. Pitch Your Idea Competition Page (`/pitch-your-idea`)

#### Competition Overview
- **Prize Pool:** ₹40,000
- **Jury:** iCreate and SSIP experts
- **Open to:** Students and companies
- **Registration:** Email to CDC_chair@iitram.ac.in

#### Competition Structure

##### Round 1 – Shortlisting Round (Day 1)
- **Format:** 3–5 minute pitch
- **Q&A:** Optional 1–2 minutes
- **Focus:** Core concept clarity
- **Outcome:** 10–15 finalists selected

##### Round 2 – Final Round (Day 2)
- **Format:** 8–10 minute detailed presentation
- **Q&A:** 5–7 minutes with jury
- **Total Time:** ~15 minutes per team
- **Requirements:**
  - Detailed presentation
  - Demo video/prototype (if available)
  - Feasibility and innovation explanation
  - Business/technical model
  - Implementation roadmap

#### Eligibility
- ✓ Open to all students & companies
- ✓ Individual or team (1-3 members)
- ✓ Cross-collaboration allowed (inter-college, inter-department)
- ✓ One participant per team only
- ✓ All domains welcome: tech, healthcare, education, agriculture, etc.

#### Evaluation Criteria (5 Areas)

1. **Problem Understanding**
   - Clarity in identifying real-world problem

2. **Innovation & Creativity**
   - Uniqueness and originality of solution

3. **Feasibility & Implementation**
   - Technical feasibility and scalability

4. **Impact & Value Proposition**
   - Who benefits and significance of impact

5. **Presentation & Communication**
   - Pitch structure and Q&A handling

#### Timeline
- **Registration Opens:** 25th January 2026
- **Registration Deadline:** 15th February 2026
- **Round 1:** 27 February 2026 (Day 1)
- **Finalists Announcement:** End of Day 1
- **Round 2:** 28 February 2026 (Day 2)
- **Winners Announcement:** Closing Ceremony, Day 2

#### Prizes
- **1st Place:** Cash prize + Trophy + Certificate + Recognition
- **2nd Place:** Cash prize + Trophy + Certificate + Recognition

#### Additional Benefits for Finalists
✓ Participation certificates  
✓ Direct feedback from iCreate and SSIP experts  
✓ Networking with industry leaders and investors  
✓ Feature in Udgam 2026 media and promotional materials

#### FAQs
1. **Can I participate without a prototype?**
   - Yes! Prototypes encouraged but not mandatory

2. **Can inter-college teams participate?**
   - Yes, inter-college and inter-department teams allowed

3. **Slide submission required?**
   - Guidelines shared with registered participants

4. **What kind of ideas?**
   - Tech products, services, social/industrial solutions, startups

5. **Registration fee?**
   - No registration fee for pitch competition

---

### 8. FAQs Page (`/faqs`)

#### 17 Comprehensive FAQs

1. **Who can attend Udgam 2026?**
   - Open to all engineering students from Gujarat colleges

2. **Registration fee for students?**
   - ₹50 per student for event logistics and materials
   - No fee for company representatives

3. **Accommodation for outstation students?**
   - Yes, accommodation available (chargeable)

4. **Certificates provided?**
   - Yes, for all participants attending both days
   - Special recognition for competition winners

5. **Non-IITRAM students can participate?**
   - Absolutely! Open to all Gujarat engineering colleges

6. **Event dates and timings?**
   - 27-28 February 2026
   - Day 1: 9:00 AM - 5:00 PM
   - Day 2: 9:00 AM - 4:00 PM

7. **What to bring?**
   - Student ID card (mandatory)
   - Notebook for notes
   - Business cards (optional)
   - Presentation materials (for pitch participants)
   - Dress code: Smart casual

8. **Company participation/sponsorship?**
   - Sponsorship packages: Platinum, Gold, Silver
   - Corporate stalls available
   - Contact: placement@iitram.ac.in

9. **Pitch Your Idea competition?**
   - Open to students with innovative ideas
   - Round 1: Day 1, Round 2: Day 2
   - Prize pool + mentorship opportunities

10. **How to register?**
    - Registration via Google Forms
    - Contact college placement cell
    - Email: placement@iitram.ac.in

11. **Interaction with companies?**
    - Networking sessions
    - Company stalls
    - Panel discussions
    - One-on-one opportunities
    - 50+ companies expected

12. **Project showcase?**
    - Project Expo zone available
    - Prime exhibition space for selected projects
    - Awards for top projects

13. **Parking available?**
    - Yes, for two-wheelers and four-wheelers
    - Limited capacity - public transport encouraged

14. **Industries represented?**
    - IT, Software, Core Engineering
    - Consulting, Finance, Startups
    - Manufacturing
    - 50+ companies expected

15. **Placement opportunities?**
    - Preliminary screening by companies
    - Resume collection for internships/placements
    - Networking for future opportunities

16. **Attend only one day?**
    - Yes, individual day registration possible
    - Both days recommended for full experience
    - Certificates only for both-day attendees

---

### 9. Contact Page (`/contact`)

#### Primary Contacts (CDC IITRAM)

**Email Contacts:**
1. Prithviraj.Verma.23co@iitram.ac.in
2. rishava.singh.23e@iitram.ac.in
3. harsh.tiwari.22e@iitram.ac.in

**Phone Contacts:**
1. Prithviraj: +91 7697966155
2. Rishava: +91 6201671778
3. Harsh: +91 8978318705

**Location:**
- IITRAM, Ahmedabad, Gujarat
- Google Maps: https://maps.app.goo.gl/gNTFWnMdr3u4fkQ89

#### Contact Form
- **Service:** Formspree (https://formspree.io/f/xyzrvadn)
- **Fields:**
  - Name (required)
  - Email (required)
  - Subject (required)
  - Message (required)
- **Response Time:** 24-48 hours
- **Toast Notifications:** Success/error feedback using react-hot-toast

#### IITRAM General Contact
- **Phone:** (079) 67775488 / 99
- **Email:** office@iitram.ac.in
- **Website:** www.iitram.ac.in

#### Social Media
- **LinkedIn:** https://www.linkedin.com/groups/8314767/
- **YouTube:** https://www.youtube.com/@iitrammaninagar6963

#### Address
Institute of Infrastructure, Technology, Research And Management (IITRAM)  
Near Khokhara Circle, Maninagar (East)  
Ahmedabad, Gujarat, India - 380026

---

## 🧩 Components

### Navigation Components

#### 1. Navbar
**File:** `src/components/Navbar.jsx`

**Features:**
- Fixed position with glassmorphism effect
- Scrolled state with enhanced backdrop blur
- Logo + Brand text ("Udgam 2026" + "CDC – IITRAM")
- "Register Interest" dropdown button
- Mobile menu toggle
- Responsive sidebar navigation

**Register Interest Dropdown (3 options):**
1. **Student Passes**
   - Link: https://forms.gle/hLu8HJxTB27pVaHr5
   - For: College students needing passes

2. **Stall Booking**
   - Link: https://forms.gle/C21fHj3MmK71Q8tU8
   - For: Companies booking exhibition stalls

3. **Sponsorship Interest**
   - Link: https://forms.gle/dFqcnHw2EYxTnTXm8
   - For: Companies interested in sponsorship

**Navigation Links (9 items):**
- Home, Schedule, Speakers, For Students, For Companies, Sponsorship, Pitch Your Idea, FAQs, Contact

**Accessibility:**
- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Escape key to close dropdowns

**Styling:**
- Height: 72px (desktop) → 64px (tablet) → 60px (mobile)
- Background: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(12px)`
- Logo height: 72px (desktop) → 80px (tablet) → 70px (mobile)

#### 2. Footer
**File:** `src/components/Footer.jsx`

**Sections:**
1. **Brand**
   - Udgam 2026
   - CDC, IITRAM
   - Tagline

2. **Quick Links**
   - Home, Schedule, Students, Companies, Pitch Your Idea, Contact

3. **IITRAM Contact**
   - Phone, Email, Website
   - Social media (LinkedIn, YouTube)
   - Note: Separate CDC contact page link

4. **Address**
   - Full IITRAM address

**Footer Bottom:**
- Copyright: © 2026 CDC, IITRAM – IAC 2026
- Disclaimer: Schedule and speakers subject to change

### Content Components

#### 3. Hero
**File:** `src/components/Hero.jsx`

**Key Features:**
- Animated typing effect for description
- Live countdown timer
- Add to Calendar integration
- Responsive stat cards
- Gradient animations

**Animations:**
- Typing speed: 30ms/char (desktop), 20ms/char (mobile)
- Start delay: 1500ms (desktop), 1000ms (mobile)
- Gradient shift, text shine, pulse effects

#### 4. Countdown
**File:** `src/components/Countdown.jsx`

**Display:**
- Days, Hours, Minutes, Seconds
- Real-time updates every second
- Event date: February 27, 2026, 09:00 IST

#### 5. AddToCalendar
**File:** `src/components/AddToCalendar.jsx`

**Integration:** Google Calendar
**Event Details:**
- Title: Udgam 2026 - Industry–Academia Conclave
- Dates: 27-28 February 2026
- Time: 09:00 - 18:30 IST
- Location: IITRAM, Ahmedabad
- Description: Full event details

#### 6. About
**File:** `src/components/About.jsx`

**Content:**
- Event overview
- Mission and vision
- Key objectives

#### 7. Highlights
**File:** `src/components/Highlights.jsx`

**Content:**
- Major event features
- Unique selling points
- What makes Udgam special

#### 8. StudentsBenefits
**File:** `src/components/StudentsBenefits.jsx`

**Display:** 6 benefit cards with icons
- Industry Exposure
- Skill Development
- Career Guidance
- Networking
- Recognition & Incentives
- Entrepreneurship Insight

#### 9. CompanyBenefits
**File:** `src/components/CompanyBenefits.jsx`

**Display:** 5 benefit cards with icons
- Brand Visibility
- CSR & Outreach
- Startup Collaboration
- Networking
- Talent Access

#### 10. StallsAndSponsors
**File:** `src/components/StallsAndSponsors.jsx`

**Props:**
- `showStalls` - Display stall information
- `showSponsorship` - Display sponsorship packages
- `showCTA` - Show call-to-action button

**Content:**
- Stall booking details
- Sponsorship tier information
- Pricing and benefits

#### 11. Contact
**File:** `src/components/Contact.jsx`

**Features:**
- Contact information cards (Email, Phone, Location)
- Contact form with Formspree integration
- Form validation
- Toast notifications
- Accessibility features

#### 12. Toast
**File:** `src/components/Toast.jsx`

**Library:** react-hot-toast
**Usage:** Form submissions, notifications
**Styling:** Custom teal theme

#### 13. SkeletonLoader
**File:** `src/components/SkeletonLoader.jsx`

**Purpose:** Loading states for async content
**Animation:** Shimmer effect

### Utility Components

#### 14. Schedule Component
**File:** `src/components/Schedule.jsx`

**Display:** Two-day schedule with sessions
**Data Source:** `src/data/schedule.js`

#### 15. Speakers Component
**File:** `src/components/Speakers.jsx`

**Display:** Speaker profiles and information
**Data Source:** `src/data/speakers.js`

---

## 📝 Forms & Registration

### Google Forms Integration

#### 1. Student Registration
- **URL:** https://forms.gle/2FaPhLbwhfW5JGxx7
- **Purpose:** Student event registration
- **Fee:** ₹50
- **Page:** Students Page

#### 2. Student Passes (Bulk)
- **URL:** https://forms.gle/hLu8HJxTB27pVaHr5
- **Purpose:** College requesting student passes
- **Location:** Navbar dropdown

#### 3. Company Stall Booking
- **URL:** https://forms.gle/C21fHj3MmK71Q8tU8
- **Purpose:** Corporate stall booking interest
- **Pages:** Companies Page, Navbar dropdown

#### 4. Sponsorship Interest
- **URL:** https://forms.gle/dFqcnHw2EYxTnTXm8
- **Purpose:** Sponsorship package inquiry
- **Pages:** Sponsorship Page, Navbar dropdown

### Formspree Contact Form
- **Endpoint:** https://formspree.io/f/xyzrvadn
- **Method:** POST
- **Fields:** Name, Email, Subject, Message
- **Validation:** HTML5 + custom
- **Feedback:** Toast notifications

### Email Registration
- **Pitch Your Idea:** CDC_chair@iitram.ac.in
- **Subject:** "Pitch Your Idea Registration - Udgam 2026"

---

## 🔍 SEO Implementation

### Meta Tags (index.html)

#### Primary Meta
```html
<title>Udgam 2026 - Industry–Academia Conclave (IAC) | CDC IITRAM</title>
<meta name="description" content="Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave bridging innovation and industry. Join us for two days of keynotes, panel discussions, pitch competitions, and networking. 27-28 February 2026, Ahmedabad, Gujarat." />
<meta name="keywords" content="Udgam, Udgam 2026, Udgam IITRAM, IAC IITRAM, Industry Academia Conclave, IITRAM, CDC IITRAM, Engineering Event Ahmedabad, Innovation Event Gujarat, Entrepreneurship, Career Development, Student Competition, Pitch Your Idea, iCreate, SSIP, Gujarat Engineering Event" />
<meta name="author" content="Career Development Centre (CDC), IITRAM" />
<link rel="canonical" href="https://udgam-iac.iitram.in/" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
<meta name="language" content="English" />
<meta name="geo.region" content="IN-GJ" />
<meta name="geo.placename" content="Ahmedabad" />
```

#### Open Graph (Facebook)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://udgam-iac.iitram.in/" />
<meta property="og:title" content="Udgam 2026 - Industry–Academia Conclave (IAC) | CDC IITRAM" />
<meta property="og:description" content="Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave. Join us for keynotes, panel discussions, pitch competitions, and networking. 27-28 February 2026, Ahmedabad." />
<meta property="og:image" content="https://udgam-iac.iitram.in/iac-2026-cover.png" />
<meta property="og:site_name" content="Udgam 2026 - IAC IITRAM" />
<meta property="og:locale" content="en_IN" />
```

#### Twitter Card
```html
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://udgam-iac.iitram.in/" />
<meta property="twitter:title" content="Udgam 2026 - Industry–Academia Conclave (IAC) | CDC IITRAM" />
<meta property="twitter:description" content="Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave. Join us for keynotes, panel discussions, pitch competitions, and networking. 27-28 February 2026, Ahmedabad." />
<meta property="twitter:image" content="https://udgam-iac.iitram.in/iac-2026-cover.png" />
```

### Structured Data (JSON-LD)

#### 1. Event Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://udgam-iac.iitram.in/#event",
  "name": "Udgam 2026 - Industry–Academia Conclave (IAC)",
  "alternateName": ["Udgam", "Udgam IITRAM", "IAC 2026", "IAC IITRAM"],
  "description": "Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave featuring keynotes, panel discussions, pitch competitions with ₹40,000 prize pool, and networking with industry leaders from iCreate and SSIP.",
  "url": "https://udgam-iac.iitram.in",
  "startDate": "2026-02-27T09:00:00+05:30",
  "endDate": "2026-02-28T18:30:00+05:30",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Institute of Infrastructure Technology Research and Management (IITRAM)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "IITRAM Campus",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380026",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    }
  },
  "image": [
    "https://udgam-iac.iitram.in/iac-2026-cover.png",
    "https://udgam-iac.iitram.in/logo.png"
  ],
  "organizer": {
    "@id": "https://udgam-iac.iitram.in/#organization"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://udgam-iac.iitram.in/students",
    "price": "50",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-01-25"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Industry Leaders and Academic Experts"
  }
}
```

#### 2. Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://udgam-iac.iitram.in/#organization",
  "name": "Career Development Centre (CDC), IITRAM",
  "alternateName": "CDC IITRAM",
  "url": "https://udgam-iac.iitram.in",
  "logo": "https://udgam-iac.iitram.in/logo.png",
  "description": "Career Development Centre at Institute of Infrastructure Technology Research and Management organizing Udgam 2026",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380026",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "placement@iitram.ac.in",
    "contactType": "Event Inquiries"
  }
}
```

#### 3. WebSite Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://udgam-iac.iitram.in/#website",
  "name": "Udgam 2026",
  "alternateName": "IAC IITRAM 2026",
  "url": "https://udgam-iac.iitram.in",
  "description": "Official website for Udgam 2026 - Industry-Academia Conclave by CDC IITRAM",
  "publisher": {
    "@type": "Organization",
    "@id": "https://udgam-iac.iitram.in/#organization",
    "name": "Career Development Centre (CDC), IITRAM"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://udgam-iac.iitram.in/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### Dynamic SEO (React)

**Utility:** `src/utils/seo.js`

**Hooks:**
- `useSEO()` - Updates meta tags per page
- `useStructuredData()` - Injects JSON-LD schemas
- `usePageTitle()` - Updates document title

**Page-Specific SEO:**
Each page has custom:
- Title
- Description
- Keywords
- Canonical URL
- Structured data

### Sitemap
**File:** `public/sitemap.xml`
**URL:** https://udgam-iac.iitram.in/sitemap.xml

**Included Pages:**
- / (Home)
- /schedule
- /speakers
- /students
- /companies
- /sponsorship
- /pitch-your-idea
- /contact
- /faqs

**Priority & Frequency:**
- Home: 1.0, daily
- Main pages: 0.8, weekly
- Secondary: 0.6, monthly

### Robots.txt
**File:** `public/robots.txt`
**URL:** https://udgam-iac.iitram.in/robots.txt

```
User-agent: *
Allow: /
Sitemap: https://udgam-iac.iitram.in/sitemap.xml
Crawl-delay: 0
```

### Google Search Console
**Verification File:** `public/googlefd0d26ae7033efee.html`
**Content:** `google-site-verification: googlefd0d26ae7033efee.html`

### Favicon
**Files:**
- `/logo.png` (285KB) - Main logo
- Multiple sizes: 16x16, 32x32, 180x180
- Apple touch icon
- Shortcut icon

---

## 📞 Contact Information

### Event Organizers (CDC IITRAM)

#### Primary Contacts
1. **Prithviraj Verma**
   - Email: Prithviraj.Verma.23co@iitram.ac.in
   - Phone: +91 7697966155

2. **Rishava Singh**
   - Email: rishava.singh.23e@iitram.ac.in
   - Phone: +91 6201671778

3. **Harsh Tiwari**
   - Email: harsh.tiwari.22e@iitram.ac.in
   - Phone: +91 8978318705

#### General IITRAM Contact
- **Phone:** (079) 67775488 / 99
- **Email:** office@iitram.ac.in
- **Website:** www.iitram.ac.in

#### CDC Specific
- **Email:** placement@iitram.ac.in
- **Email (Pitch Competition):** CDC_chair@iitram.ac.in

### Social Media
- **LinkedIn:** https://www.linkedin.com/groups/8314767/
- **YouTube:** https://www.youtube.com/@iitrammaninagar6963

### Location
**Institute of Infrastructure, Technology, Research And Management (IITRAM)**  
Near Khokhara Circle, Maninagar (East)  
Ahmedabad, Gujarat, India - 380026

**Google Maps:** https://maps.app.goo.gl/gNTFWnMdr3u4fkQ89

**Coordinates:**
- Latitude: 23.0225
- Longitude: 72.5714

---

## 🚀 Deployment

### Platform: Netlify

#### Build Configuration
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Domain
- **Primary:** https://udgam-iac.iitram.in
- **SSL:** Enabled (HTTPS)
- **CDN:** Netlify Edge Network

#### Build Commands
```bash
# Development
npm run dev

# Production Build
npm run build

# Preview Build
npm run preview
```

#### Environment
- Node.js: v18
- npm: Latest
- Build time: ~30-60 seconds

#### Redirects
- SPA routing: All routes → `/index.html` (200)
- File: `public/_redirects`

---

## 🎯 Key Features Summary

### User Experience
✓ Fully responsive design (mobile-first)  
✓ Smooth animations and transitions  
✓ Accessibility features (ARIA, keyboard navigation)  
✓ Fast loading times (Vite optimization)  
✓ Progressive enhancement  
✓ Cross-browser compatibility

### Performance
✓ Hardware-accelerated animations  
✓ Lazy loading where applicable  
✓ Optimized images  
✓ Minimal bundle size  
✓ CDN delivery (Netlify)

### SEO
✓ Comprehensive meta tags  
✓ Structured data (JSON-LD)  
✓ Sitemap and robots.txt  
✓ Canonical URLs  
✓ Google Search Console verified  
✓ Social media optimization (OG, Twitter)

### Accessibility
✓ Semantic HTML  
✓ ARIA labels and roles  
✓ Keyboard navigation  
✓ Focus management  
✓ Screen reader support  
✓ Color contrast compliance

### Forms & Integration
✓ Google Forms for registrations  
✓ Formspree for contact form  
✓ Email integration  
✓ Calendar integration (Google)  
✓ Toast notifications  
✓ Form validation

---

## 📊 Analytics & Tracking

### Google Analytics
**Setup File:** `ANALYTICS_SETUP.html`
- Event tracking
- User behavior analysis
- Conversion tracking

### Potential Tracking Events
- Page views
- Form submissions
- Button clicks
- Registration conversions
- Download actions
- External link clicks

---

## 🔒 Security & Privacy

### HTTPS
- SSL certificate enabled
- Secure data transmission

### Form Security
- Formspree spam protection
- Client-side validation
- CSRF protection (Formspree)

### External Links
- `rel="noopener noreferrer"` on all external links
- Target="_blank" for external navigation

---

## 📱 Mobile Optimization

### Responsive Design
- Mobile-first approach
- Touch-friendly targets (min 44px)
- Optimized font sizes
- Simplified navigation
- Reduced animations on mobile

### Performance
- Faster typing animation on mobile
- Optimized image loading
- Reduced motion support
- Efficient CSS animations

---

## 🎨 Brand Assets

### Logo
- **File:** `/logo.png` (285KB)
- **Format:** PNG with transparency
- **Usage:** Navbar, favicon, social sharing

### Cover Image
- **File:** `/iac-2026-cover.png`
- **Usage:** Social media sharing, OG image
- **Guide:** `public/COVER_IMAGE_GUIDE.md`

### IITRAM Logo
- **File:** `/iitram_logo_only.jpg` (59KB)
- **Format:** JPG

---

## 📝 Content Management

### Data Files
All content stored in `src/data/`:
- `schedule.js` - Event schedule
- `speakers.js` - Speaker information
- `sponsors.js` - Sponsor details
- `faq.js` - FAQ content (17 items)
- `benefits.js` - Student & company benefits

### Easy Updates
To update content:
1. Edit relevant data file
2. Run `npm run build`
3. Deploy to Netlify

---

## 🐛 Known Issues & Limitations

### None Currently Reported
The website is production-ready with no known critical issues.

### Future Enhancements
- Speaker photos and bios
- Sponsor logos display
- Photo gallery from previous events
- Live streaming integration
- Real-time updates during event

---

## 📚 Documentation Files

### Existing Documentation
1. `README.md` - Project overview
2. `DEPLOYMENT.md` - Deployment guide
3. `DOMAIN_UPDATE.md` - Domain configuration
4. `SEO_CANONICAL_ARCHITECTURE.md` - SEO strategy
5. `ANALYTICS_SETUP.html` - Analytics setup
6. `public/COVER_IMAGE_GUIDE.md` - Cover image specs
7. `public/README.md` - Public folder info

---

## 🎓 Educational Value

This website demonstrates:
- Modern React development
- SEO best practices
- Accessibility standards
- Responsive design
- Form integration
- Performance optimization
- Professional UI/UX design
- Structured data implementation
- Analytics integration
- Deployment workflows

---

## 📄 License & Copyright

**Copyright:** © 2026 Career Development Centre (CDC), IITRAM  
**Event:** Industry–Academia Conclave (IAC) 2026  
**Disclaimer:** Website for informational purposes. Actual schedule and speakers subject to change.

---

## 🔄 Version History

### Current Version: 1.0.0
- **Release Date:** January 2026
- **Status:** Production
- **Last Updated:** February 2026

---

## 📞 Support

For technical issues or content updates:
- Contact CDC IITRAM team
- Email: placement@iitram.ac.in
- Refer to Contact Page for full details

---

**Document Created:** February 11, 2026  
**Last Updated:** February 11, 2026  
**Maintained By:** CDC IITRAM Web Team

---

*This documentation provides a complete overview of the Udgam 2026 website, including all pages, components, forms, styling, SEO implementation, and contact information. It serves as a comprehensive reference for understanding the website's structure, content, and functionality.*

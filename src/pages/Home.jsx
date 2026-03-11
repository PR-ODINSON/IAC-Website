
import Hero from '../components/Hero';
import SponsorTicker from '../components/SponsorTicker';
import About from '../components/About';
import Highlights from '../components/Highlights';
import ChiefGuest from '../components/ChiefGuest';
import { speakers } from '../data/speakers';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO, useStructuredData, generateEventSchema, generateOrganizationSchema } from '../utils/seo';
import './Home.css';

const Home = () => {
  usePageTitle('');

  // SEO: Dynamic meta tags for home page
  useSEO({
    title: 'Udgam 2026 - Industry–Academia Conclave (IAC) | CDC IITRAM',
    description: 'Udgam 2026 is CDC IITRAM\'s flagship Industry-Academia Conclave. Join us Feb 27-28, 2026 for keynotes, panel discussions, ₹40,000 pitch competition, and networking with industry leaders.',
    keywords: 'Udgam, Udgam 2026, Udgam IITRAM, IAC IITRAM, Industry Academia Conclave, Engineering Event Ahmedabad, Student Competition Gujarat',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png',
    type: 'website'
  });

  // SEO: Add structured data for rich results in Google
  useStructuredData({
    "@context": "https://schema.org",
    "@graph": [
      generateEventSchema(),
      generateOrganizationSchema(),
      {
        "@type": "WebSite",
        "@id": "https://udgam-iac.iitram.in/#website",
        "name": "Udgam 2026",
        "alternateName": "IAC IITRAM 2026",
        "url": "https://udgam-iac.iitram.in",
        "publisher": {
          "@id": "https://udgam-iac.iitram.in/#organization"
        }
      }
    ]
  });

  // Chief Guest data (hardcoded for now, could be imported from a separate file)
  const chiefGuest = {
    name: "Dr. Sunil R Parekh – D. Litt. (HC)",
    title: "SPoC Sustainability @ Zydus Group and Strategic Advisor @ Jubilant Bhartia Group",
    organisation: "Chief Guest",
    image: "/speakers/Sunil parekh.jpg",
    linkedin: "https://www.linkedin.com/in/sunilrparekh/"
  };

  // Speakers for scroller (exclude chief guest if present)
  const scrollerSpeakers = speakers;

  return (
    <main id="main-content" className="home-page">
      <SponsorTicker />
      <Hero />
      <About />
      <ChiefGuest guest={chiefGuest} />
      {/* Speakers Scroller */}
      <section className="speakers-scroller-section">
        <div className="speakers-scroller-container">
          <div className="speakers-scroller-track">
            {scrollerSpeakers.map((speaker) => (
              <div className="scroller-speaker-card" key={speaker.id}>
                <img src={speaker.image} alt={speaker.name} className="scroller-speaker-img" />
                <div className="scroller-speaker-info">
                  <div className="scroller-speaker-name">{speaker.name}</div>
                  <div className="scroller-speaker-title">{speaker.title}</div>
                  <div className="scroller-speaker-org">{speaker.organisation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Highlights />

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="quick-links-container">
          <div className="section-label">Navigate</div>
          <h2 className="quick-links-title">Explore the Event</h2>
          <p className="quick-links-description">
            Discover everything about the event, from schedules and speakers to participation opportunities and sponsorship details.
          </p>
          <div className="quick-links-grid">
            <Link to="/schedule" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>View Schedule</h3>
              <p>Two-day program details</p>
            </Link>

            <Link to="/students" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>For Students</h3>
              <p>Benefits and opportunities</p>
            </Link>

            <Link to="/companies" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>For Companies</h3>
              <p>Partnership opportunities</p>
            </Link>



            <Link to="/pitch-your-idea" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3>Pitch Your Idea</h3>
              <p>Innovation competition</p>
            </Link>

            <Link to="/contact" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Contact Us</h3>
              <p>Get in touch</p>
            </Link>

            <Link to="/faqs" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>FAQs</h3>
              <p>Get your questions answered</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsorship Enquiry Section */}
      <section className="sponsorship-enquiry-section">
        <div className="sponsorship-enquiry-container">
          <div className="sponsorship-enquiry-content">
            <h2>Want to enquire about sponsorship?</h2>
            <p>Partner with Udgam 2026 and showcase your brand to a targeted audience of industry leaders and students.</p>
            <Link to="/companies" className="enquiry-button">
              Explore Sponsorship Opportunities
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

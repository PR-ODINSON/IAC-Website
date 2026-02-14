import Contact from '../components/Contact';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO } from '../utils/seo';
import './ContactPage.css';

const ContactPage = () => {
  usePageTitle('Contact Us');

  // SEO CRITICAL: Page-specific canonical and meta tags
  useSEO({
    title: 'Contact Us - Get in Touch | Udgam 2026',
    description: 'Have questions about Udgam 2026? Contact CDC IITRAM for inquiries about partnerships, participation, sponsorship, or event details. We\'d love to hear from you.',
    keywords: 'contact udgam, iitram event contact, udgam inquiries, cdc iitram contact',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
  });

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-description">
            Have questions about Udgam 2026? Interested in partnerships or participation?
            We'd love to hear from you.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;

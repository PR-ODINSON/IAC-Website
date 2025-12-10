import Contact from '../components/Contact';
import usePageTitle from '../hooks/usePageTitle';
import './ContactPage.css';

const ContactPage = () => {
  usePageTitle('Contact Us');
  
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-description">
            Have questions about IAC 2026? Interested in partnerships or participation? 
            We'd love to hear from you.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;

import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Partners', path: '/partners' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>IAC 2026</h3>
            <p>Career Development Centre (CDC), IITRAM</p>
            <p className="footer-tagline">Bridging Innovation and Industry</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <div className="footer-nav">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-info">
            <h4>Event Details</h4>
            <p>23–24 January 2026</p>
            <p>IITRAM, Ahmedabad</p>
            <p className="footer-note">250+ Students Expected</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Career Development Centre (CDC), IITRAM – Industry–Academia Conclave (IAC) 2026
          </p>
          <p className="footer-disclaimer">
            Website for informational purposes. Actual schedule and speakers subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

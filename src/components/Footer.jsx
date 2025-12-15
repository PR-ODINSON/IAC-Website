import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Students', path: '/students' },
    { label: 'Partners', path: '/partners' },
    { label: 'Pitch Your Idea', path: '/pitch-your-idea' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Udgam 2026</h3>
            <p>Career Development Centre (CDC)</p>
            <p className="footer-college">IITRAM</p>
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
            <h4>IITRAM Contact</h4>
            <p><strong>Phone:</strong> (079) 67775488 / 99</p>
            <p><strong>Email:</strong> <a href="mailto:office@iitram.ac.in" className="footer-link">office@iitram.ac.in</a></p>
            <p><strong>Website:</strong> <a href="https://www.iitram.ac.in/" target="_blank" rel="noopener noreferrer" className="footer-link">www.iitram.ac.in</a></p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/groups/8314767/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@iitrammaninagar6963" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
            <p className="footer-note" style={{ marginTop: '16px', fontSize: '13px' }}>
              <strong>For CDC/Student queries, visit our</strong> <Link to="/contact" className="footer-link" style={{ color: '#14b8a6', fontWeight: '600' }}>Contact Page</Link>
            </p>
          </div>

          <div className="footer-address">
            <h4>Address</h4>
            <p>Institute of Infrastructure, Technology, Research And Management (IITRAM)</p>
            <p>Near Khokhara Circle, Maninagar (East)</p>
            <p>Ahmedabad, Gujarat, India - 380026</p>
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

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setRegisterDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Keyboard navigation for dropdowns
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (registerDropdownOpen) {
          setRegisterDropdownOpen(false);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [registerDropdownOpen, mobileMenuOpen]);

  const handleRegisterButtonKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setRegisterDropdownOpen(!registerDropdownOpen);
    }
  };

  const handleMenuToggleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Panel Discussion', path: '/panel-discussion' },
    { label: 'Event Highlights', path: '/event-highlights' },
    { label: 'For Students', path: '/students' },
    { label: 'Pitch Your Idea', path: '/pitch-your-idea' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Udgam 2026" className="navbar-logo" />
          <div className="brand-text">
            <span className="brand-main">Udgam 2026</span>
            <span className="brand-sub">CDC – IITRAM</span>
          </div>
        </Link>

        <div className="navbar-actions">
          <div className="register-dropdown-container">
            <button
              className="register-button"
              onClick={() => {
                setRegisterDropdownOpen(!registerDropdownOpen);
                setMobileMenuOpen(false);
              }}
              onKeyDown={handleRegisterButtonKeyDown}
              aria-expanded={registerDropdownOpen}
              aria-haspopup="true"
              aria-label="Register interest dropdown menu"
            >
              Register Interest
              <svg
                className={`dropdown-arrow ${registerDropdownOpen ? 'dropdown-arrow-open' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {registerDropdownOpen && (
              <>
                <div className="register-dropdown" role="menu" aria-label="Registration options">
                  <div className="dropdown-header">
                    <h3 id="dropdown-title">What are you interested in?</h3>
                  </div>
                  <a
                    href="https://forms.gle/hLu8HJxTB27pVaHr5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    role="menuitem"
                    aria-label="Register for student passes"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div>
                      <strong>Student Passes</strong>
                      <span>Need passes for your college students</span>
                    </div>
                  </a>
                  <a
                    href="https://forms.gle/rPZyUvzu7PHoFDHL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    role="menuitem"
                    aria-label="Book a company stall"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <div>
                      <strong>Pitch Your Idea</strong>
                      <span>Present your novel ideas in the event</span>
                    </div>
                  </a>
                  <a
                    href="https://forms.gle/eLRNQHoqgowaUFR17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    role="menuitem"
                    aria-label="Express sponsorship interest"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <div>
                      <strong>Cultural Event</strong>
                      <span>Want to showcase your Cultural Skills</span>
                    </div>
                  </a>
                </div>
                <div
                  className="dropdown-overlay"
                  onClick={() => setRegisterDropdownOpen(false)}
                  aria-hidden="true"
                />
              </>
            )}
          </div>
          <button
            className="menu-toggle"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setRegisterDropdownOpen(false);
            }}
            onKeyDown={handleMenuToggleKeyDown}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <span className="menu-toggle-text">Menu</span>
            <svg
              className={`menu-toggle-icon ${mobileMenuOpen ? 'menu-toggle-icon-open' : ''}`}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <aside
        className={`sidebar-menu ${mobileMenuOpen ? 'sidebar-open' : ''}`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <nav className="sidebar-content" role="menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`sidebar-link ${location.pathname === link.path ? 'sidebar-link-active' : ''}`}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {mobileMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;

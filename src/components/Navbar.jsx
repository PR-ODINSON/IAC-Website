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

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'For Students', path: '/students' },
    { label: 'For Companies', path: '/companies' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Pitch Your Idea', path: '/pitch-your-idea' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-main">Udgam 2026</span>
          <span className="brand-sub">CDC – IITRAM</span>
        </Link>

        <div className="navbar-actions">
          <div className="register-dropdown-container">
            <button 
              className="register-button"
              onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}
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
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {registerDropdownOpen && (
              <>
                <div className="register-dropdown">
                  <div className="dropdown-header">
                    <h3>What are you interested in?</h3>
                  </div>
                  <a 
                    href="https://forms.gle/SoAjwWNzQzCJWLgs6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dropdown-item"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    href="https://forms.gle/C21fHj3MmK71Q8tU8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dropdown-item"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <div>
                      <strong>Stall Booking</strong>
                      <span>For companies to book exhibition stalls</span>
                    </div>
                  </a>
                  <div className="dropdown-item dropdown-item-disabled">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <div>
                      <strong>Sponsorship Interest</strong>
                      <span>Coming soon</span>
                    </div>
                  </div>
                </div>
                <div 
                  className="dropdown-overlay" 
                  onClick={() => setRegisterDropdownOpen(false)}
                />
              </>
            )}
          </div>
          <button 
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </button>
        </div>
      </div>

      <div className={`sidebar-menu ${mobileMenuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`sidebar-link ${location.pathname === link.path ? 'sidebar-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

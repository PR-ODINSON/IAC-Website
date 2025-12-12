import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          <Link to="/contact" className="register-button">
            Register Interest
          </Link>
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

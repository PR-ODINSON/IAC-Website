import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Highlights />
      
      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="quick-links-container">
          <h2 className="quick-links-title">Explore More</h2>
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

            <Link to="/partners" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>Partner With Us</h3>
              <p>Sponsorship opportunities</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

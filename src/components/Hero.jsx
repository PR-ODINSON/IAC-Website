import { Link } from 'react-router-dom';
import Countdown from './Countdown';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Flagship Event by CDC, IITRAM
          </div>
          
          <h1 className="hero-title">
            Udgam
            <span className="hero-year">2026</span>
          </h1>
          
          <p className="hero-subtitle">
            Bridging Innovation and Industry
          </p>
          
          <p className="hero-description">
            CDC IITRAM's flagship initiative connecting students, academia, and industry 
            through thought-provoking keynotes and panel discussions. 
            Join us for two days of innovation, networking, and career opportunities.
          </p>

          <Countdown />
          
          <div className="hero-meta">
            <div className="meta-item">
              <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>20–21 February 2026</span>
            </div>
            <div className="meta-item">
              <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>IITRAM, Ahmedabad</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">
              Register Now
            </Link>
            <a href="#brochure" className="btn-secondary">
              Download Brochure
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Days of Innovation</div>
            <div className="stat-detail">Keynotes · Panels · Discussions</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Industry Speakers</div>
            <div className="stat-detail">Experts · Mentors · Innovators</div>
          </div>
          
          <div className="stat-card stat-card-highlight">
            <div className="stat-number">∞</div>
            <div className="stat-label">Opportunities</div>
            <div className="stat-detail">Industry Leaders · Startups · Innovation Hubs</div>
          </div>
        </div>
      </div>

      <div className="hero-accent"></div>
    </section>
  );
};

export default Hero;

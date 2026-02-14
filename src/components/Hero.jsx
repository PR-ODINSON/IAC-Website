import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import AddToCalendar from './AddToCalendar';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "CDC IITRAM's premier event bringing together students, academia, and industry leaders through keynotes, panel discussions, and networking opportunities. Join us for two days of innovation, collaboration, and career development.";

  useEffect(() => {
    let currentIndex = 0;
    // Faster typing on mobile devices for better UX
    const isMobile = window.innerWidth <= 768;
    const typingSpeed = isMobile ? 20 : 30; // milliseconds per character
    const startDelay = isMobile ? 1000 : 1500; // shorter delay on mobile

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, typingSpeed);

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Flagship Event by CDC, IITRAM
          </div>

          <h1 className="hero-title" aria-label="Udgam 2026 Industry Academia Conclave Event">
            Udgam<sup className="hero-iac">IAC</sup>
            <span className="hero-year">2026</span>
          </h1>

          <p className="hero-subtitle">
            Bridging Innovation and Industry
          </p>

          <p className="hero-description hero-description-animated">
            {displayedText}
            <span className="typing-cursor"></span>
          </p>

          <Countdown />

          <div className="hero-meta">
            <div className="meta-item">
              <svg
                className="meta-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                role="img"
                aria-label="Event dates"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>27–28 February 2026</span>
            </div>
            <div className="meta-item">
              <svg
                className="meta-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                role="img"
                aria-label="Event location"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>IITRAM, Ahmedabad</span>
            </div>
          </div>

          {/* SEO: Improved CTAs with internal linking and calendar integration */}
          <div className="hero-actions">
            <Link
              to="/students"
              className="btn-primary"
              aria-label="Register for Udgam 2026"
            >
              Register Now
            </Link>
            <AddToCalendar variant="secondary" />
            <a
              href="#about"
              className="btn-secondary"
              aria-label="Learn more about Udgam 2026"
            >
              Learn More
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

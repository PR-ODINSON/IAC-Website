import { useState, useEffect } from 'react';
import { speakers } from '../data/speakers';
import SkeletonGrid from './SkeletonLoader';
import './Speakers.css';

const Speakers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="speakers">
      <div className="speakers-container">
        <div className="speakers-header">
          <div className="section-label">Meet Our Experts</div>
          <h2 className="section-title">Speakers & Guests</h2>
          <p className="section-description">
            Learn from industry leaders, academics, and entrepreneurs who are shaping the future 
            of innovation and technology.
          </p>
        </div>

        {loading ? (
          <SkeletonGrid count={4} type="card" />
        ) : (
          <div className="speakers-coming-soon">
            <div className="speakers-announcement">
              <div className="announcement-icon" role="img" aria-label="Speakers announcement">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"></circle>
                  <path strokeWidth="2" d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path strokeWidth="2" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Exciting Lineup Coming Soon</h3>
              <p>
                We're finalizing an exceptional roster of industry leaders, successful entrepreneurs, 
                renowned academics, and innovation experts who will share their insights at Udgam 2026.
              </p>
            </div>
            
            <div className="speaker-categories">
              <div className="category-card">
                <div className="category-icon" role="img" aria-label="Industry leaders">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"></rect>
                    <path strokeWidth="2" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4>Industry Leaders</h4>
                <p>Top executives from Fortune 500 companies and emerging startups</p>
              </div>
              
              <div className="category-card">
                <div className="category-icon" role="img" aria-label="Entrepreneurs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2"></polyline>
                  </svg>
                </div>
                <h4>Entrepreneurs</h4>
                <p>Successful founders sharing their startup journey and insights</p>
              </div>
              
              <div className="category-card">
                <div className="category-icon" role="img" aria-label="Academics">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="2" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path strokeWidth="2" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4>Academics</h4>
                <p>Renowned researchers and educators pioneering new fields</p>
              </div>
              
              <div className="category-card">
                <div className="category-icon" role="img" aria-label="Innovators">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth="2"></polygon>
                  </svg>
                </div>
                <h4>Innovators</h4>
                <p>Tech visionaries driving change in AI, EV, and Smart Cities</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;

import { stallPackages, sponsorshipPackages } from '../data/sponsors';
import { Link } from 'react-router-dom';
import './StallsAndSponsors.css';

const StallsAndSponsors = ({ showStalls = true, showSponsorship = true, showCTA = true }) => {
  return (
    <section id="sponsors" className="stalls-sponsors">
      <div className="stalls-sponsors-container">
        <div className="stalls-sponsors-header">
          <div className="section-label">Partnership Opportunities</div>
          <h2 className="section-title">
            {showStalls && showSponsorship ? 'Stalls & Sponsorship' : showStalls ? 'Corporate Stalls' : 'Sponsorship'}
          </h2>
          <p className="section-description">
            Multiple engagement options for companies to connect with students and 
            showcase their brand at Udgam 2026.
          </p>
        </div>

        {/* Stalls Section */}
        {showStalls && (
          <div className="subsection">
            <h3 className="subsection-title">Corporate Stalls (One Day)</h3>
            <p className="subsection-description">
              Set up your company stall and interact directly with students, showcase products, 
              and conduct on-spot activities.
            </p>
            
            <div className="stalls-grid">
              {stallPackages.map((stall, index) => (
                <div 
                  key={index} 
                  className={`stall-card ${stall.featured ? 'stall-featured' : ''}`}
                >
                  {stall.featured && <div className="featured-badge">Popular</div>}
                  <div className="stall-header">
                    <h4 className="stall-name">{stall.name}</h4>
                    <div className="stall-price">{stall.price}</div>
                    <div className="stall-period">{stall.period}</div>
                  </div>
                  <ul className="stall-features">
                    {stall.features.map((feature, idx) => (
                      <li key={idx} className="stall-feature">
                        <svg className="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sponsorship Section */}
        {showSponsorship && (
          <div className="subsection">
            <h3 className="subsection-title">Sponsorship Packages</h3>
            <p className="subsection-description">
              Comprehensive sponsorship tiers offering brand visibility, speaking opportunities, 
            and exclusive access to Udgam 2026.
          </p>
          
          <div className="sponsors-grid">
            {sponsorshipPackages.map((sponsor, index) => (
              <div 
                key={index} 
                className={`sponsor-card ${sponsor.highlight ? 'sponsor-highlight' : ''}`}
              >
                <div className="sponsor-tier">{sponsor.tier}</div>
                <div className="sponsor-price">{sponsor.price}</div>
                <ul className="sponsor-features">
                  {sponsor.features.map((feature, idx) => (
                    <li key={idx} className="sponsor-feature">
                      <svg className="sponsor-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        )}

        {showCTA && (
        <div className="cta-box">
          <h3 className="cta-title">Ready to Partner?</h3>
          <p className="cta-description">
            Contact us to discuss custom sponsorship packages tailored to your objectives.
          </p>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
        )}
      </div>
    </section>
  );
};

export default StallsAndSponsors;

import Schedule from '../components/Schedule';
import usePageTitle from '../hooks/usePageTitle';
import './SchedulePage.css';

const SchedulePage = () => {
  usePageTitle('Event Schedule');
  
  return (
    <div className="schedule-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Event Schedule</h1>
          <p className="page-hero-description">
            Detailed two-day program featuring keynotes, panel discussions, and networking opportunities.
          </p>
        </div>
      </div>
      
      <div className="coming-soon-section">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          
          <h2 className="coming-soon-title">Schedule Coming Soon</h2>
          <p className="coming-soon-description">
            We're crafting an exceptional two-day program filled with inspiring keynotes, 
            insightful panel discussions, networking sessions, and innovation showcases. 
            Stay tuned for the detailed schedule!
          </p>
          
          <div className="coming-soon-features">
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span>Keynote Sessions</span>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Panel Discussions</span>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Networking Sessions</span>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Innovation Showcase</span>
            </div>
          </div>
          
          <div className="coming-soon-dates">
            <div className="date-box">
              <div className="date-label">Day 1</div>
              <div className="date-value">20 Feb 2026</div>
            </div>
            <div className="date-divider">•</div>
            <div className="date-box">
              <div className="date-label">Day 2</div>
              <div className="date-value">21 Feb 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;

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
      <div style={{ padding: '80px 20px', textAlign: 'center', fontSize: '24px', fontWeight: '600', color: '#14b8a6' }}>
        Will be announced soon!
      </div>
    </div>
  );
};

export default SchedulePage;

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
      <Schedule />
    </div>
  );
};

export default SchedulePage;

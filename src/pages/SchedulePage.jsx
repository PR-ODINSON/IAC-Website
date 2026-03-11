import Schedule from '../components/Schedule';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO } from '../utils/seo';
import './SchedulePage.css';

const SchedulePage = () => {
  usePageTitle('Event Schedule');

  // SEO: Schedule page meta tags
  useSEO({
    title: 'Event Schedule - Udgam 2026 | CDC IITRAM',
    description: 'View the complete 2-day schedule for Udgam 2026. Keynote sessions, panel discussions, pitch competitions, networking events, and innovation showcases on Feb 27-28, 2026 at IITRAM Ahmedabad.',
    keywords: 'udgam schedule, event agenda iitram, udgam 2026 program, conference schedule ahmedabad',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
  });

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

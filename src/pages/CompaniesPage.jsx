import CompanyBenefits from '../components/CompanyBenefits';
import StallsAndSponsors from '../components/StallsAndSponsors';
import usePageTitle from '../hooks/usePageTitle';
import './CompaniesPage.css';

const CompaniesPage = () => {
  usePageTitle('For Companies');
  
  return (
    <div className="companies-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">For Companies</h1>
          <p className="page-hero-description">
            Connect with talented engineering students, enhance brand visibility, and contribute 
            to building the future workforce through strategic partnerships at Udgam 2026.
          </p>
        </div>
      </div>
      <CompanyBenefits />
      <StallsAndSponsors showSponsorship={false} showCTA={false} />
      
      <section className="interest-form-section">
        <div className="interest-form-container">
          <div className="form-header">
            <h2 className="form-title">Interested in Booking a Stall?</h2>
            <p className="form-description">
              Want to set up a corporate stall at Udgam 2026? Express your interest below and 
              our team will reach out to you with available slots, pricing, and booking details.
            </p>
          </div>
          <div className="form-features">
            <div className="form-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Direct interaction with engineering students</span>
            </div>
            <div className="form-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Showcase products and conduct activities</span>
            </div>
            <div className="form-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>One-day or two-day stall options</span>
            </div>
            <div className="form-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Prime location at the venue</span>
            </div>
          </div>
          <a href="https://forms.gle/C21fHj3MmK71Q8tU8" target="_blank" rel="noopener noreferrer" className="form-cta-button">Express Interest for Stall Booking</a>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;

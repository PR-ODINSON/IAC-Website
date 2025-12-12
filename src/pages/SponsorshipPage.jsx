import CompanyBenefits from '../components/CompanyBenefits';
import StallsAndSponsors from '../components/StallsAndSponsors';
import usePageTitle from '../hooks/usePageTitle';
import './SponsorshipPage.css';

const SponsorshipPage = () => {
  usePageTitle('Sponsorship');
  
  return (
    <div className="sponsorship-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Sponsorship</h1>
          <p className="page-hero-description">
            Connect with talented engineering students, enhance brand visibility, and contribute 
            to building the future workforce through various sponsorship opportunities.
          </p>
        </div>
      </div>
      <CompanyBenefits />
      <StallsAndSponsors />
      
      <section className="partnership-cta">
        <div className="partnership-container">
          <h2>Become a Sponsor</h2>
          <p>Explore customized packages and maximize your brand's impact at Udgam 2026.</p>
          <a href="/contact" className="cta-button">Enquire About Sponsorship</a>
        </div>
      </section>
    </div>
  );
};

export default SponsorshipPage;

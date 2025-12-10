import CompanyBenefits from '../components/CompanyBenefits';
import StallsAndSponsors from '../components/StallsAndSponsors';
import usePageTitle from '../hooks/usePageTitle';
import './PartnersPage.css';

const PartnersPage = () => {
  usePageTitle('Partner With Us');
  
  return (
    <div className="partners-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Partner With Us</h1>
          <p className="page-hero-description">
            Connect with 250+ talented engineering students, enhance brand visibility, and contribute 
            to building the future workforce through various partnership opportunities.
          </p>
        </div>
      </div>
      <CompanyBenefits />
      <StallsAndSponsors />
      
      <section className="partnership-cta">
        <div className="partnership-container">
          <h2>Become a Partner</h2>
          <p>Explore customized packages and maximize your brand's impact at IAC 2026.</p>
          <a href="/contact" className="cta-button">Enquire About Sponsorship</a>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;

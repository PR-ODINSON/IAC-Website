import CompanyBenefits from '../components/CompanyBenefits';
import StallsAndSponsors from '../components/StallsAndSponsors';
import './PartnersPage.css';

const PartnersPage = () => {
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
    </div>
  );
};

export default PartnersPage;

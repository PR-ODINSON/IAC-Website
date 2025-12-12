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
            Elevate your brand presence, engage with future talent, and demonstrate your commitment 
            to fostering innovation and academic excellence through exclusive sponsorship opportunities at Udgam 2026.
          </p>
        </div>
      </div>
      <StallsAndSponsors />
    </div>
  );
};

export default SponsorshipPage;

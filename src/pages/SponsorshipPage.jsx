import StallsAndSponsors from '../components/StallsAndSponsors';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO } from '../utils/seo';
import './SponsorshipPage.css';

const SponsorshipPage = () => {
  usePageTitle('Sponsorship');

  // SEO CRITICAL: Page-specific canonical and meta tags
  useSEO({
    title: 'Sponsorship Opportunities - Partner with Us | Udgam 2026',
    description: 'Elevate your brand at Udgam 2026. Exclusive sponsorship packages for IITRAM\'s flagship Industry-Academia Conclave. Engage with future talent and demonstrate commitment to innovation.',
    keywords: 'udgam sponsorship, event sponsorship iitram, brand partnership ahmedabad, corporate sponsorship gujarat',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
  });

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
      <StallsAndSponsors showStalls={false} showSponsorship={true} showCTA={true} />
    </div>
  );
};

export default SponsorshipPage;

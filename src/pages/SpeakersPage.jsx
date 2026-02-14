import Speakers from '../components/Speakers';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO } from '../utils/seo';
import './SpeakersPage.css';

const SpeakersPage = () => {
  usePageTitle('Speakers');

  // SEO CRITICAL: Page-specific canonical and meta tags
  useSEO({
    title: 'Speakers & Guests - Industry Leaders | Udgam 2026',
    description: 'Meet the inspiring speakers at Udgam 2026. Learn from industry leaders, academics, and entrepreneurs shaping the future of innovation and technology at IITRAM Ahmedabad.',
    keywords: 'udgam speakers, industry leaders iitram, keynote speakers ahmedabad, innovation experts gujarat',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
  });

  return (
    <div className="speakers-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Speakers & Guests</h1>
          <p className="page-hero-description">
            Learn from industry leaders, academics, and entrepreneurs who are shaping the future
            of innovation and technology.
          </p>
        </div>
      </div>
      <Speakers />
    </div>
  );
};

export default SpeakersPage;

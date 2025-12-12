import Speakers from '../components/Speakers';
import usePageTitle from '../hooks/usePageTitle';
import './SpeakersPage.css';

const SpeakersPage = () => {
  usePageTitle('Speakers');
  
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

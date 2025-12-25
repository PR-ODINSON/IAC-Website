import FAQ from '../components/FAQ';
import usePageTitle from '../hooks/usePageTitle';
import './FAQPage.css';

const FAQPage = () => {
  usePageTitle('FAQs');
  
  return (
    <div className="faq-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-description">
            Everything you need to know about Udgam 2026. Find answers to common questions 
            about participation, sponsorship, and the event format.
          </p>
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default FAQPage;

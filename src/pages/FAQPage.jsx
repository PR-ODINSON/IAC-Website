import FAQ from '../components/FAQ';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO } from '../utils/seo';
import './FAQPage.css';

const FAQPage = () => {
  usePageTitle('FAQs');

  // SEO CRITICAL: Page-specific canonical and meta tags
  useSEO({
    title: 'Frequently Asked Questions - FAQs | Udgam 2026',
    description: 'Find answers to common questions about Udgam 2026 - registration, participation, sponsorship, event format, and more. Everything you need to know about IITRAM\'s Industry-Academia Conclave.',
    keywords: 'udgam faq, iitram event questions, udgam 2026 answers, iac iitram help',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
  });

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

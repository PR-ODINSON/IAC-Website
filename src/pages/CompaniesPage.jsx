import CompanyBenefits from '../components/CompanyBenefits';
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
      
      <section className="registration-cta">
        <div className="registration-container">
          <h2>Partner With Udgam 2026</h2>
          <p>Explore customized packages and maximize your brand's impact.</p>
          <a href="/contact" className="cta-button">Enquire About Partnership</a>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;

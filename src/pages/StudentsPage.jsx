import StudentsBenefits from '../components/StudentsBenefits';
import './StudentsPage.css';

const StudentsPage = () => {
  return (
    <div className="students-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">For Students</h1>
          <p className="page-hero-description">
            Discover the benefits of attending IAC 2026 — from industry exposure and skill development 
            to networking with leaders and showcasing your innovations.
          </p>
        </div>
      </div>
      <StudentsBenefits />
      
      <section className="registration-cta">
        <div className="registration-container">
          <h2>Ready to Join IAC 2026?</h2>
          <p>Open to all engineering students across Gujarat. Limited seats available.</p>
          <a href="/contact" className="cta-button">Register Your Interest</a>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;

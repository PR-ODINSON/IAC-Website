import StudentsBenefits from '../components/StudentsBenefits';
import usePageTitle from '../hooks/usePageTitle';
import './StudentsPage.css';

const StudentsPage = () => {
  usePageTitle('For Students');
  
  return (
    <div className="students-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">For Students</h1>
          <p className="page-hero-description">
            Discover the benefits of attending Udgam 2026 — from industry exposure and skill development 
            to networking with leaders and showcasing your innovations.
          </p>
        </div>
      </div>
      <StudentsBenefits />
      
      <section className="invite-only-section">
        <div className="invite-container">
          <div className="invite-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Exclusive Event</span>
          </div>
          <h2 className="invite-title">Invite-Only Participation</h2>
          <p className="invite-description">
            Udgam 2026 is an <strong>exclusive, invite-only event</strong>. CDC IITRAM will distribute a limited number of 
            participation passes to select engineering colleges across Gujarat. Students can only attend with these official passes — 
            no on-spot registration will be available.
          </p>
          <div className="invite-features">
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>100% Free</strong> — No registration fees</span>
            </div>
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Invite-Only</strong> — Passes sent to select colleges</span>
            </div>
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>No Walk-ins</strong> — Entry only with official pass</span>
            </div>
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Exclusive Access</strong> — Limited participation</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="registration-cta">
        <div className="registration-container">
          <h2>Want Passes for Your College?</h2>
          <p>
            If you'd like CDC IITRAM to send participation passes to your college, 
            express your interest below. We'll share the registration form soon.
          </p>
          <a href="/contact" className="cta-button">Express Interest</a>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;

import StudentsBenefits from '../components/StudentsBenefits';
import usePageTitle from '../hooks/usePageTitle';
import { useSEO, useStructuredData } from '../utils/seo';
import './StudentsPage.css';

const StudentsPage = () => {
  usePageTitle('For Students');

  // SEO: Page-specific meta tags
  useSEO({
    title: 'For Students - Udgam 2026 | CDC IITRAM',
    description: 'Join Udgam 2026 for industry exposure, skill development, networking with leaders, and pitch competitions. Register now for ₹50 and unlock career opportunities at IITRAM Ahmedabad.',
    keywords: 'student registration udgam, engineering students event, career development iitram, student networking ahmedabad, pitch competition students',
    image: 'https://udgam.iitram.ac.in/iac-2026-cover.png'
  });

  // SEO: Structured data for student registration
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "EducationalEvent",
    "name": "Udgam 2026 - For Students",
    "description": "Student-focused sessions, workshops, and networking opportunities at Udgam 2026",
    "url": "https://udgam.iitram.ac.in/students",
    "isAccessibleForFree": false,
    "offers": {
      "@type": "Offer",
      "price": "50",
      "priceCurrency": "INR",
      "url": "https://udgam.iitram.ac.in/students"
    }
  });

  return (
    <div className="students-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">For Students</h1>
          <p className="page-hero-description">
            Discover the benefits of attending Udgam 2026, from industry exposure and skill development
            to networking with leaders and showcasing your innovations.
          </p>
        </div>
      </div>
      <StudentsBenefits />

      <section className="invite-only-section">
        <div className="invite-container">
          <div className="invite-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Open Registration</span>
          </div>
          <h2 className="invite-title">Registration Now Open</h2>
          <p className="invite-description">
            We are now accepting registrations from <strong>students everywhere</strong>!
            The registration process has changed. Simply fill out the registration form to secure your spot at Udgam 2026.
            No on-spot registration will be available.
          </p>
          <div className="invite-features">
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Minimal Fee:</strong> Just ₹50 registration</span>
            </div>
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Open to All:</strong> Students from everywhere welcome</span>
            </div>
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>No Walk-ins:</strong> Pre-registration required</span>
            </div>
            <div className="invite-feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Easy Process:</strong> Simple online registration</span>
            </div>
          </div>
        </div>
      </section>

      <section className="registration-cta">
        <div className="registration-container">
          <h2>Register for Udgam 2026</h2>
          <p>
            Ready to join us? Fill out the registration form to secure your spot at Udgam 2026.
            Registration fee is just ₹50 per student!
          </p>
          <a href="https://forms.gle/2FaPhLbwhfW5JGxx7" target="_blank" rel="noopener noreferrer" className="cta-button">Register Now</a>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;

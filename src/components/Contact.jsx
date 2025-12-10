import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Contact & Queries</h2>
          <p className="section-description">
            For partnership, sponsorship, and participation queries, reach out to the 
            Career Development Centre (CDC), IITRAM.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-label">Email Us</h3>
                <a href="mailto:cdc@iitram.ac.in" className="info-value">
                  cdc@iitram.ac.in
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-label">Call Us</h3>
                <a href="tel:+91XXXXXXXXXX" className="info-value">
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-label">Visit Us</h3>
                <p className="info-value">
                  IITRAM, Ahmedabad, Gujarat
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3 className="cta-box-title">Register Your Interest</h3>
            <p className="cta-box-description">
              Whether you're a student looking to participate or a company interested in 
              partnering, we'd love to hear from you.
            </p>
            
            <div className="cta-box-options">
              <div className="option-item">
                <svg className="option-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Students: Register for IAC 2026</span>
              </div>
              <div className="option-item">
                <svg className="option-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Companies: Partnership Opportunities</span>
              </div>
            </div>

            <button className="contact-cta-button">
              Send Us Your Query
            </button>

            <p className="contact-note">
              Registrations will open soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

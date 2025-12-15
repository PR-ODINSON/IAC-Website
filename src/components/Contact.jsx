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
                <a href="mailto:Prithviraj.Verma.23co@iitram.ac.in" className="info-value">
                  Prithviraj.Verma.23co@iitram.ac.in
                </a>
                <a href="mailto:rishava.singh.23e@iitram.ac.in" className="info-value" style={{ display: 'block', marginTop: '8px' }}>
                  rishava.singh.23e@iitram.ac.in
                </a>
                <a href="mailto:harsh.tiwari.22e@iitram.ac.in" className="info-value" style={{ display: 'block', marginTop: '8px' }}>
                  harsh.tiwari.22e@iitram.ac.in
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href="tel:+917697966155" className="info-value">
                    Prithviraj: +91 7697966155
                  </a>
                  <a href="tel:+916201671778" className="info-value">
                    Rishava: +91 6201671778
                  </a>
                  <a href="tel:+918978318705" className="info-value">
                    Harsh: +91 8978318705
                  </a>
                </div>
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
                <a href="https://maps.app.goo.gl/gNTFWnMdr3u4fkQ89" target="_blank" rel="noopener noreferrer" className="info-value">
                  IITRAM, Ahmedabad, Gujarat
                </a>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3 className="cta-box-title">Send Us Your Query</h3>
            <p className="cta-box-description">
              Whether you're a student looking to participate or a company interested in 
              partnering, we'd love to hear from you.
            </p>
            
            <form 
              action="https://formspree.io/f/xyzrvadn" 
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="form-input" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-input" 
                  placeholder="your.email@example.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="form-input" 
                  placeholder="What is this regarding?"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  className="form-textarea" 
                  placeholder="Tell us more about your query..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-cta-button">
                Send Message
              </button>

              <p className="contact-note">
                We'll get back to you within 24-48 hours!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

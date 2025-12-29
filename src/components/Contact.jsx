import { useState } from 'react';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');

    try {
      const response = await fetch('https://formspree.io/f/xyzrvadn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll respond within 24-48 hours.', {
          id: loadingToast,
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again or email us directly.', {
        id: loadingToast,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="info-icon" role="img" aria-label="Email icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-label">Email Us</h3>
                <a href="mailto:Prithviraj.Verma.23co@iitram.ac.in" className="info-value" aria-label="Email Prithviraj Verma">
                  Prithviraj.Verma.23co@iitram.ac.in
                </a>
                <a href="mailto:rishava.singh.23e@iitram.ac.in" className="info-value" style={{ display: 'block', marginTop: '8px' }} aria-label="Email Rishava Singh">
                  rishava.singh.23e@iitram.ac.in
                </a>
                <a href="mailto:harsh.tiwari.22e@iitram.ac.in" className="info-value" style={{ display: 'block', marginTop: '8px' }} aria-label="Email Harsh Tiwari">
                  harsh.tiwari.22e@iitram.ac.in
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon" role="img" aria-label="Phone icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-label">Call Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href="tel:+917697966155" className="info-value" aria-label="Call Prithviraj at +91 7697966155">
                    Prithviraj: +91 7697966155
                  </a>
                  <a href="tel:+916201671778" className="info-value" aria-label="Call Rishava at +91 6201671778">
                    Rishava: +91 6201671778
                  </a>
                  <a href="tel:+918978318705" className="info-value" aria-label="Call Harsh at +91 8978318705">
                    Harsh: +91 8978318705
                  </a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon" role="img" aria-label="Location icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-label">Visit Us</h3>
                <a href="https://maps.app.goo.gl/gNTFWnMdr3u4fkQ89" target="_blank" rel="noopener noreferrer" className="info-value" aria-label="View IITRAM location on Google Maps">
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
              onSubmit={handleSubmit}
              className="contact-form"
              noValidate
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="required-mark" aria-label="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="form-input" 
                  placeholder="Enter your full name"
                  required
                  aria-required="true"
                  aria-describedby="name-help"
                  disabled={isSubmitting}
                />
                <span id="name-help" className="sr-only">Enter your full legal name</span>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required-mark" aria-label="required">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-input" 
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  aria-describedby="email-help"
                  disabled={isSubmitting}
                />
                <span id="email-help" className="sr-only">Enter a valid email address where we can reach you</span>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required-mark" aria-label="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="form-input" 
                  placeholder="What is this regarding?"
                  required
                  aria-required="true"
                  aria-describedby="subject-help"
                  disabled={isSubmitting}
                />
                <span id="subject-help" className="sr-only">Brief subject or topic of your message</span>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required-mark" aria-label="required">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  className="form-textarea" 
                  placeholder="Tell us more about your query..."
                  rows="5"
                  required
                  aria-required="true"
                  aria-describedby="message-help"
                  disabled={isSubmitting}
                ></textarea>
                <span id="message-help" className="sr-only">Detailed message explaining your query or request</span>
              </div>

              <button 
                type="submit" 
                className="contact-cta-button"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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

import { useState } from 'react';
import { faqData } from '../data/faq';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="section-label">Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Find answers to common questions about Udgam 2026. Can't find what you're looking for? 
            Feel free to contact us directly.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'faq-item-open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="question-text">{faq.question}</span>
                <svg 
                  className="faq-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              <div 
                id={`faq-answer-${faq.id}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

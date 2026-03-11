import usePageTitle from '../hooks/usePageTitle';
import { useSEO, useStructuredData } from '../utils/seo';
import './PitchYourIdea.css';

const PitchYourIdea = () => {
  usePageTitle('Pitch Your Idea Competition');

  // SEO: Competition-specific meta tags
  useSEO({
    title: 'Pitch Your Idea Competition - ₹40,000 Prize Pool | Udgam 2026',
    description: 'Compete in Udgam 2026 Pitch Competition with ₹40,000 prize pool. Present your innovation to iCreate and SSIP jury. Open to all domains - tech, healthcare, education, agriculture & more.',
    keywords: 'pitch competition udgam, startup competition iitram, innovation contest gujarat, student pitch event, icreate ssip jury, 40000 prize pool',
    image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
  });

  // SEO: Competition structured data for rich results
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Competition",
    "name": "Pitch Your Idea - Udgam 2026",
    "description": "Student pitch competition with ₹40,000 prize pool judged by iCreate and SSIP experts",
    "url": "https://udgam-iac.iitram.in/pitch-your-idea",
    "startDate": "2026-02-27",
    "endDate": "2026-02-28",
    "location": {
      "@type": "Place",
      "name": "IITRAM, Ahmedabad"
    },
    "offers": {
      "@type": "Offer",
      "price": "50",
      "priceCurrency": "INR"
    },
    "award": "₹40,000 Prize Pool - 1st and 2nd Place Winners"
  });

  const evaluationCriteria = [
    {
      title: "Problem Understanding",
      description: "Clarity in identifying and explaining the real-world problem."
    },
    {
      title: "Innovation & Creativity",
      description: "How unique, original, or innovative the solution is."
    },
    {
      title: "Feasibility & Implementation",
      description: "Practicality of execution, technical feasibility, and scalability."
    },
    {
      title: "Impact & Value Proposition",
      description: "Who benefits, what changes, and how significant the impact could be."
    },
    {
      title: "Presentation & Communication",
      description: "Structure of the pitch, clarity of explanation, and ability to answer questions."
    }
  ];

  const faqs = [
    {
      question: "Can I participate if I don't have a prototype yet?",
      answer: "Yes! Prototypes are encouraged but not mandatory. A strong, well-thought-out idea with clear execution plans can still win."
    },
    {
      question: "Can participants from different colleges form a team?",
      answer: "Yes, inter-college and inter-department teams are allowed. We encourage diverse collaborations."
    },
    {
      question: "Do we need to submit our slides in advance?",
      answer: "Specific submission guidelines will be shared with registered participants. Generally, Round 1 requires minimal preparation while Round 2 finalists should prepare detailed presentations."
    },
    {
      question: "What kind of ideas are expected?",
      answer: "We welcome tech-based products, innovative services, solutions to social or industrial problems, and startup concepts across all domains."
    },
    {
      question: "Is there any registration fee for this competition?",
      answer: "No, there is no registration fee for this competition. It is open to all eligible students free of cost."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pitch-page">
      {/* Hero Section */}
      <section className="pitch-hero">
        <div className="pitch-hero-container">
          <div className="pitch-badge">
            Open to students and companies
          </div>
          <h1 className="pitch-hero-title">Pitch Your Idea Competition</h1>
          <p className="pitch-hero-subtitle">
            Showcase your innovation, pitch to industry experts from iCreate and SSIP, and compete for a
            prize pool of ₹40,000 at Udgam 2026.
          </p>
          <p className="pitch-hero-event">
            Part of Industry–Academia Conclave (IAC) 2026 · CDC, IITRAM
          </p>

          <div className="pitch-hero-actions">
            <a
              href="https://forms.gle/rPZyUvzu7PHoFDHL9"
              className="pitch-cta-primary"
            >
              Register Your Idea
            </a>
            <button
              onClick={() => scrollToSection('evaluation')}
              className="pitch-cta-secondary"
            >
              View Evaluation Criteria
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pitch-section pitch-overview">
        <div className="pitch-container">
          <div className="section-label">About the Competition</div>
          <h2 className="section-title">What is "Pitch Your Idea"?</h2>

          <div className="overview-content">
            <p>
              "Pitch Your Idea" is a flagship innovation competition under Udgam 2026, designed to
              provide students and companies with a platform to showcase their entrepreneurial spirit and technical
              ingenuity. This competition brings together aspiring innovators and industry professionals
              in a dynamic environment where ideas meet opportunity.
            </p>
            <p>
              Participants will present their startup idea, technical solution, or innovation in front
              of a distinguished jury panel featuring members from <strong>iCreate (International Centre for Entrepreneurship and Technology)</strong> and
              <strong>SSIP (Student Startup and Innovation Policy)</strong>. These expert judges bring extensive experience in
              evaluating innovations, mentoring startups, and understanding market viability. The competition emphasizes
              real-world problem solving, innovation, and the feasibility of implementation.
            </p>
            <p>
              With a total prize pool of <strong>₹40,000</strong>, this competition offers not just monetary rewards but also
              invaluable feedback from industry experts, networking opportunities, and visibility for your innovation.
              The competition spans <strong>two rounds across both days of Udgam 2026</strong>, giving participants
              multiple opportunities to refine and present their ideas. Whether you're a student with a breakthrough concept
              or a company with an innovative solution, this is your platform to shine.
            </p>
          </div>
        </div>
      </section>

      {/* Competition Structure */}
      <section className="pitch-section pitch-structure">
        <div className="pitch-container">
          <div className="section-label">Competition Format</div>
          <h2 className="section-title">Two-Round Structure</h2>

          <div className="rounds-container">
            <div className="round-card">
              <div className="round-header">
                <div className="round-badge">Day 1</div>
                <h3 className="round-title">Round 1 – Shortlisting Round</h3>
              </div>

              <div className="round-content">
                <p className="round-intro">
                  All registered teams/participants will present their ideas briefly in front of the jury.
                </p>

                <div className="round-details">
                  <h4>Format</h4>
                  <ul>
                    <li>3–5 minute idea pitch covering problem, solution, target users, and impact</li>
                    <li>Optional 1–2 minutes of Q&A, depending on time availability</li>
                    <li>Focus on conveying the core concept clearly and concisely</li>
                  </ul>

                  <h4>Objective</h4>
                  <p>
                    Get an overview of as many ideas as possible and identify the most promising
                    concepts for deeper evaluation.
                  </p>

                  <div className="round-outcome">
                    <svg className="outcome-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>
                      At the end of Round 1, the jury will <strong>shortlist 10–15 finalist teams</strong> based
                      on predefined criteria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="round-card round-card-final">
              <div className="round-header">
                <div className="round-badge round-badge-final">Day 2</div>
                <h3 className="round-title">Round 2 – Final Round</h3>
              </div>

              <div className="round-content">
                <p className="round-intro">
                  Shortlisted finalists will pitch in greater detail with enhanced presentations.
                </p>

                <div className="round-details">
                  <h4>Format & Timing</h4>
                  <ul>
                    <li>8–10 minute detailed presentation</li>
                    <li>5–7 minutes of Q&A session with the jury</li>
                    <li>Total time per team: approximately 15 minutes</li>
                  </ul>

                  <h4>Expectations from Finalists</h4>
                  <ul>
                    <li>Detailed presentation of the idea (problem, solution, unique selling proposition)</li>
                    <li>If available: demo video, basic prototype, or wireframes/mockups</li>
                    <li>Clear explanation of feasibility, innovation, and potential impact</li>
                    <li>Business/technical model and implementation roadmap</li>
                    <li>Extended Q&A session with the jury</li>
                  </ul>

                  <h4>Evaluation</h4>
                  <p>
                    Finalists will be evaluated more deeply across all criteria, and winners will be
                    chosen based on their performance in this round.
                  </p>

                  <div className="round-note">
                    <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>
                      Finalists will be informed about their selection and time slots for Round 2 at
                      the end of Day 1.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="pitch-section pitch-eligibility">
        <div className="pitch-container">
          <div className="section-label">Who Can Participate</div>
          <h2 className="section-title">Eligibility & Team Formation</h2>

          <div className="eligibility-grid">
            <div className="eligibility-card">
              <svg className="eligibility-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3>Open to All Students & Companies</h3>
              <p>Students from IITRAM and other engineering colleges across Gujarat, as well as companies are welcome.</p>
            </div>

            <div className="eligibility-card">
              <svg className="eligibility-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3>Individual or Team</h3>
              <p>Participate individually or form teams of up to 1–3 members.</p>
            </div>

            <div className="eligibility-card">
              <svg className="eligibility-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3>Cross-Collaboration Allowed</h3>
              <p>Inter-college and inter-department teams are encouraged for diverse perspectives.</p>
            </div>
          </div>

          <div className="eligibility-rules">
            <h3>Additional Rules</h3>
            <ul>
              <li>One participant can be part of only one team for this competition</li>
              <li>Ideas can span any domain: tech products, services, social innovations, industrial solutions, startup concepts, healthcare, education, agriculture, and more.</li>
              <li>All ideas should demonstrate practical applicability and innovation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section id="evaluation" className="pitch-section pitch-evaluation">
        <div className="pitch-container">
          <div className="section-label">How You'll Be Judged</div>
          <h2 className="section-title">Evaluation Criteria</h2>

          <p className="evaluation-intro">
            Round 1 uses these criteria in a quick, high-level manner, while Round 2 applies them
            in greater depth with more weightage on each aspect.
          </p>

          <div className="criteria-grid">
            {evaluationCriteria.map((criterion, index) => (
              <div key={index} className="criterion-card">
                <div className="criterion-number">{index + 1}</div>
                <h3 className="criterion-title">{criterion.title}</h3>
                <p className="criterion-description">{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="pitch-section pitch-deliverables">
        <div className="pitch-container">
          <div className="section-label">Preparation Guide</div>
          <h2 className="section-title">What You Need to Prepare</h2>

          <div className="deliverables-grid">
            <div className="deliverable-card">
              <h3 className="deliverable-title">
                <span className="deliverable-round">Round 1</span>
                Initial Pitch
              </h3>

              <ul className="deliverable-list">
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Short pitch (3–5 minutes)
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic explanation of problem, proposed solution, and target beneficiaries
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Optional: Basic slide deck (3–5 slides)
                </li>
              </ul>
            </div>

            <div className="deliverable-card deliverable-card-final">
              <h3 className="deliverable-title">
                <span className="deliverable-round deliverable-round-final">Round 2</span>
                Final Presentation (Finalists)
              </h3>

              <ul className="deliverable-list">
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Refined pitch deck (up to 8–10 slides)
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  If available: Prototype, demo video, or UI mockups/architecture diagrams
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed implementation approach and business/technical model
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Roadmap and next steps
                </li>
              </ul>
            </div>
          </div>

          <p className="deliverables-note">
            <strong>Note:</strong> Prototypes are encouraged but not mandatory – a strong, well-thought-out
            idea can still win.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pitch-section pitch-timeline">
        <div className="pitch-container">
          <div className="section-label">Important Dates</div>
          <h2 className="section-title">Timeline & Key Dates</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Registration Opens</h3>
                <p className="timeline-date">25th January 2026</p>
                <p className="timeline-description">Online registration portal will be opened for all participants.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Registration Deadline</h3>
                <p className="timeline-date">15th February 2026</p>
                <p className="timeline-description">Last date to register your idea for the competition.</p>
              </div>
            </div>

            <div className="timeline-item timeline-item-highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Round 1 – Idea Pitches</h3>
                <p className="timeline-date">27 February 2026 (Day 1 of IAC)</p>
                <p className="timeline-description">All registered participants present their initial pitches.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Finalists Announcement</h3>
                <p className="timeline-date">End of Day 1</p>
                <p className="timeline-description">10–15 finalists will be announced with Round 2 time slots.</p>
              </div>
            </div>

            <div className="timeline-item timeline-item-highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Round 2 – Final Pitches</h3>
                <p className="timeline-date">28 February 2026 (Day 2 of IAC)</p>
                <p className="timeline-description">Finalists present detailed pitches with demos/prototypes.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Winners Announcement</h3>
                <p className="timeline-date">Closing Ceremony – Day 2</p>
                <p className="timeline-description">Winners declared during the Udgam 2026 closing event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="pitch-section pitch-prizes">
        <div className="pitch-container">
          <div className="section-label">What You'll Win</div>
          <h2 className="section-title">Prize Pool: ₹40,000</h2>

          <p className="prizes-intro">
            Winners will receive cash prizes from a total prize pool of ₹40,000, along with trophies,
            certificates, and recognition at Udgam 2026.
          </p>

          <div className="prizes-grid prizes-grid-two">
            <div className="prize-card prize-card-first">
              <div className="prize-rank">1st Place</div>
              <svg className="prize-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="prize-amount">Cash Prize</h3>
              <p>Winner's trophy, certificate, and exclusive recognition at the closing ceremony.</p>
            </div>

            <div className="prize-card prize-card-second">
              <div className="prize-rank">2nd Place</div>
              <svg className="prize-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <h3 className="prize-amount">Cash Prize</h3>
              <p>Runner-up trophy, certificate, and special recognition.</p>
            </div>
          </div>

          <div className="additional-benefits">
            <h3>Additional Benefits for All Finalists</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>Participation certificates for all finalists</span>
              </div>
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Direct feedback from iCreate and SSIP experts</span>
              </div>
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Networking with industry leaders and potential investors</span>
              </div>
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Feature in Udgam 2026 media and promotional materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pitch-section pitch-faq">
        <div className="pitch-container">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.question}</span>
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pitch-cta-section">
        <div className="pitch-cta-container">
          <h2 className="cta-title">Ready to Pitch Your Idea?</h2>
          <p className="cta-description">
            Don't miss this opportunity to showcase your innovation at Udgam 2026.
            Register now and take the first step towards turning your idea into reality.
          </p>
          <a
            href="mailto:CDC_chair@iitram.ac.in?subject=Pitch Your Idea Registration - Udgam 2026"
            className="cta-button"
          >
            Register Your Idea
          </a>
          <p className="cta-contact">
            For queries related to the competition, reach out to the CDC, IITRAM at{' '}
            <a href="mailto:CDC_chair@iitram.ac.in">CDC_chair@iitram.ac.in</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PitchYourIdea;

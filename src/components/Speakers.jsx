import { useState, useEffect } from 'react';
import { speakers } from '../data/speakers';
import SkeletonGrid from './SkeletonLoader';
import './Speakers.css';

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="linkedin-icon"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Speakers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Shuffle speakers array for random order
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const shuffledSpeakers = shuffleArray(speakers);

  return (
    <section className="speakers">
      <div className="speakers-container">
        <div className="speakers-header">
          <div className="section-label">Meet Our Experts</div>
          <h2 className="section-title">Speakers & Guests</h2>
          <p className="section-description">
            Learn from industry leaders, academics, and entrepreneurs who are shaping the future
            of innovation and technology at IAC 2026.
          </p>
        </div>

        {loading ? (
          <SkeletonGrid count={6} type="card" />
        ) : (
          <div className="speakers-grid">
            {shuffledSpeakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card">
                <div className="speaker-image-container">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Speaker';
                    }}
                  />
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="speaker-linkedin-float"
                      aria-label={`${speaker.name}'s LinkedIn profile`}
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
                <div className="speaker-content">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-title">{speaker.title}</p>
                  <p className="speaker-org">{speaker.organisation}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;

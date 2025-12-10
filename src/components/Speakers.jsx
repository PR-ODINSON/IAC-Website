import { speakers } from '../data/speakers';
import './Speakers.css';

const Speakers = () => {
  return (
    <section className="speakers">
      <div className="speakers-container">
        <div className="speakers-header">
          <div className="section-label">Meet Our Experts</div>
          <h2 className="section-title">Speakers & Guests</h2>
          <p className="section-description">
            Learn from industry leaders, academics, and entrepreneurs who are shaping the future 
            of innovation and technology.
          </p>
        </div>

        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-session-badge">
                {speaker.sessionType}
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-org">{speaker.organisation}</p>
              </div>
              <div className="speaker-details">
                <div className="speaker-topic">
                  <svg className="topic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>{speaker.topic}</span>
                </div>
                <div className="speaker-schedule">
                  <span className="schedule-day">{speaker.day}</span>
                  {speaker.time && <span className="schedule-time">{speaker.time}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

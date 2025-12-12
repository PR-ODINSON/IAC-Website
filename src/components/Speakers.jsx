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

        <div style={{ padding: '60px 20px', textAlign: 'center', fontSize: '24px', fontWeight: '600', color: '#14b8a6' }}>
          Will be announced soon!
        </div>
      </div>
    </section>
  );
};

export default Speakers;

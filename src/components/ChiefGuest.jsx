import './ChiefGuest.css';

const ChiefGuest = ({ guest }) => {
  if (!guest) return null;
  return (
    <section className="chief-guest-section">
      <div className="chief-guest-container">
        <div className="chief-guest-image-container">
          <img
            src={guest.image}
            alt={guest.name}
            className="chief-guest-image"
            onError={e => {
              e.target.src = 'https://via.placeholder.com/300x300?text=Chief+Guest';
            }}
          />
        </div>
        <div className="chief-guest-content">
          <div className="section-label">Chief Guest</div>
          <h2 className="chief-guest-name">{guest.name}</h2>
          <p className="chief-guest-title">{guest.title}</p>
          <p className="chief-guest-org">{guest.organisation}</p>
          {guest.linkedin && (
            <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" className="chief-guest-linkedin">
              View LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;

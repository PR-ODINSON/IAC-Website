import './SponsorTicker.css';

const SponsorTicker = () => {
    const staticSponsors = [
        { name: 'iNDEXTb', logo: '/sponsors/indextb.svg', type: 'Title Sponsor' },
        { name: 'GIL', logo: '/sponsors/gil.png', type: 'Powered by' },
        { name: 'Einfochips', logo: '/sponsors/einfochips.png', type: 'Knowledge Partner' },
        { name: 'Krishna Outdoor', logo: '/sponsors/krishna_outdoor.webp', type: 'Outdoor Partner' },
    ];

    const scrollingSponsors = [
        { name: 'FATEH', logo: '/sponsors/Fateh.png', type: 'Associate Sponsor' },
        { name: 'ERFOLG', logo: '/sponsors/ERFOLG Logo.png', type: 'Associate Sponsor' },
        { name: 'METROHM', logo: '/sponsors/Fateh.png', type: 'Associate Sponsor' },
    ];

    // Double the array for seamless infinite scroll
    const scrollingSponsorsList = [...scrollingSponsors, ...scrollingSponsors, ...scrollingSponsors];

    return (
        <div className="sponsor-ticker-section">
            <div className="ticker-label">Our Partners & Sponsors</div>
            <div className="sponsor-combined-container">
                <div className="static-sponsors">
                    {staticSponsors.map((sponsor, index) => (
                        <div key={index} className="ticker-item static-item">
                            <div className={`ticker-image-wrapper ${sponsor.name === 'iNDEXTb' ? 'indextb-logo-wrapper' : ''}`}>
                                <img src={sponsor.logo} alt={sponsor.name} className="ticker-logo" />
                            </div>
                            <div className="ticker-info">
                                <span className="ticker-name">{sponsor.name}</span>
                                <span className="ticker-type">{sponsor.type}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="scrolling-sponsors-container">
                    <div className="ticker-track">
                        {scrollingSponsorsList.map((sponsor, index) => (
                            <div key={index} className="ticker-item">
                                <div className="ticker-image-wrapper">
                                    <img src={sponsor.logo} alt={sponsor.name} className="ticker-logo" />
                                </div>
                                <div className="ticker-info">
                                    <span className="ticker-name">{sponsor.name}</span>
                                    <span className="ticker-type">{sponsor.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorTicker;

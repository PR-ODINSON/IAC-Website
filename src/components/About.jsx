import './About.css';

const About = () => {
  const objectives = [
    "Facilitate industry exposure through talks, panels, and workshops",
    "Create networking opportunities with industry leaders, HRs, and startup founders",
    "Encourage student innovation via idea pitches and project showcases",
    "Enable collaborations with ecosystems like GIFT City, MSME, iCreate, and more"
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="section-label">About the Event</div>
          <h2 className="section-title">IAC 2026</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              The Industry–Academia Conclave (IAC) 2026 is the flagship initiative by the 
              <strong> Career Development Centre (CDC), IITRAM</strong>, designed to create 
              meaningful connections between students, academia, and industry.
            </p>
            
            <p className="about-description">
              Our vision is to bridge the critical skill gap between classroom learning and 
              real-world industry practices. Through IAC 2026, we're creating a platform that 
              focuses on innovation, entrepreneurship, employability, and meaningful collaboration 
              across sectors.
            </p>

            <p className="about-description">
              This two-day conclave brings together industry leaders, startup founders, students, 
              and faculty to explore emerging trends, share insights, and build partnerships that 
              drive innovation forward.
            </p>
          </div>

          <div className="objectives">
            <h3 className="objectives-title">Core Objectives</h3>
            <div className="objectives-list">
              {objectives.map((objective, index) => (
                <div key={index} className="objective-item">
                  <div className="objective-number">{String(index + 1).padStart(2, '0')}</div>
                  <p className="objective-text">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

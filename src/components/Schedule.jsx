import { useState } from 'react';
import { scheduleData } from '../data/schedule';
import './Schedule.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section id="schedule" className="schedule">
      <div className="schedule-container">
        <div className="schedule-header">
          <div className="section-label">Two-Day Program</div>
          <h2 className="section-title">Schedule at a Glance</h2>
        </div>

        <div className="day-tabs">
          <button
            className={`day-tab ${activeDay === 'day1' ? 'day-tab-active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            <span className="tab-day">Day 1</span>
            <span className="tab-date">{scheduleData.day1.date}</span>
          </button>
          <button
            className={`day-tab ${activeDay === 'day2' ? 'day-tab-active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            <span className="tab-day">Day 2</span>
            <span className="tab-date">{scheduleData.day2.date}</span>
          </button>
        </div>

        <div className="schedule-content">
          <div className="schedule-theme">
            <span className="theme-label">Theme:</span>
            <span className="theme-text">{scheduleData[activeDay].theme}</span>
          </div>

          <div className="sessions-list">
            {scheduleData[activeDay].sessions.map((session, index) => (
              <div key={index} className="session-item">
                <div className="session-time">
                  <span className="time-text">{session.time}</span>
                </div>
                <div className="session-content">
                  <div className="session-connector"></div>
                  <h3 className="session-title">{session.title}</h3>
                  <p className="session-description">{session.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  // Countdown calculates days remaining automatically — no static numbers.
  const targetDate = new Date('2026-02-20T09:00:00+05:30').getTime();
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="countdown">
        <div className="countdown-message">Event is now live!</div>
      </div>
    );
  }

  return (
    <div className="countdown" role="timer" aria-live="polite" aria-atomic="true">
      <div className="countdown-label">Event Starts In</div>
      <div className="countdown-timer" aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}>
        <div className="time-unit">
          <span className="time-value" aria-hidden="true">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="time-label">Days</span>
        </div>
        <span className="time-separator" aria-hidden="true">:</span>
        <div className="time-unit">
          <span className="time-value" aria-hidden="true">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="time-label">Hours</span>
        </div>
        <span className="time-separator" aria-hidden="true">:</span>
        <div className="time-unit">
          <span className="time-value" aria-hidden="true">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="time-label">Minutes</span>
        </div>
        <span className="time-separator" aria-hidden="true">:</span>
        <div className="time-unit">
          <span className="time-value" aria-hidden="true">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

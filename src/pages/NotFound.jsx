import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-button">
          <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
        <div className="not-found-links">
          <p>You might be looking for:</p>
          <div className="quick-links">
            <Link to="/schedule">Event Schedule</Link>
            <Link to="/students">For Students</Link>
            <Link to="/partners">Partnership Opportunities</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

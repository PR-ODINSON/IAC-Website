import { generateGoogleCalendarLink, trackEvent } from '../utils/seo';
import './AddToCalendar.css';

/**
 * Add to Calendar Button Component
 * SEO/Engagement: Increases user interaction and event attendance
 */
const AddToCalendar = ({ variant = 'primary', className = '' }) => {
    const handleAddToCalendar = () => {
        // Track analytics event
        trackEvent('add_to_calendar_click', {
            event_category: 'engagement',
            event_label: 'Udgam 2026'
        });

        // Open Google Calendar
        window.open(generateGoogleCalendarLink(), '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleAddToCalendar}
            className={`add-to-calendar-btn add-to-calendar-${variant} ${className}`}
            aria-label="Add Udgam 2026 to Google Calendar"
        >
            <svg
                className="calendar-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
            <span>Add to Calendar</span>
        </button>
    );
};

export default AddToCalendar;

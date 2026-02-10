// SEO utility for dynamic meta tags and structured data
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Hook - Updates meta tags dynamically per page
 * Improves CTR and social sharing
 */
export const useSEO = ({ title, description, keywords, image, type = 'website' }) => {
    const location = useLocation();

    useEffect(() => {
        // Update title
        if (title) {
            document.title = title.includes('|') ? title : `${title} | Udgam 2026`;
        }

        // Update or create meta tags
        const updateMetaTag = (property, content, isProperty = false) => {
            if (!content) return;

            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Standard meta tags
        updateMetaTag('description', description);
        if (keywords) updateMetaTag('keywords', keywords);

        // Open Graph tags for social sharing
        const fullUrl = `https://udgam.iitram.ac.in${location.pathname}`;
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:type', type, true);
        if (image) updateMetaTag('og:image', image, true);

        // Twitter Card tags
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        if (image) updateMetaTag('twitter:image', image, true);

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', fullUrl);

    }, [title, description, keywords, image, type, location.pathname]);
};

/**
 * Add structured data (JSON-LD) to page
 * Critical for Google Rich Results
 */
export const useStructuredData = (data) => {
    useEffect(() => {
        const scriptId = 'structured-data';
        let script = document.getElementById(scriptId);

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }

        script.textContent = JSON.stringify(data);

        return () => {
            // Clean up on unmount
            const existingScript = document.getElementById(scriptId);
            if (existingScript && existingScript !== script) {
                existingScript.remove();
            }
        };
    }, [data]);
};

/**
 * Generate Event Schema for Google Rich Results
 */
export const generateEventSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Udgam 2026 - Industry–Academia Conclave",
    "alternateName": ["Udgam", "Udgam IITRAM", "IAC 2026", "IAC IITRAM"],
    "description": "Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave featuring keynotes, panel discussions, pitch competitions with ₹40,000 prize pool, and networking with industry leaders from iCreate and SSIP.",
    "startDate": "2026-02-27T09:00:00+05:30",
    "endDate": "2026-02-28T18:30:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
        "@type": "Place",
        "name": "Institute of Infrastructure Technology Research and Management (IITRAM)",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "IITRAM Campus",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "380026",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.0225",
            "longitude": "72.5714"
        }
    },
    "image": [
        "https://udgam.iitram.ac.in/iac-2026-cover.png",
        "https://udgam.iitram.ac.in/logo.png"
    ],
    "organizer": {
        "@type": "Organization",
        "name": "Career Development Centre (CDC), IITRAM",
        "url": "https://iitram.ac.in",
        "logo": "https://udgam.iitram.ac.in/logo.png"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://udgam.iitram.ac.in/students",
        "price": "50",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-25"
    },
    "performer": {
        "@type": "PerformingGroup",
        "name": "Industry Leaders and Academic Experts"
    },
    "url": "https://udgam.iitram.ac.in"
});

/**
 * Generate Organization Schema
 */
export const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Career Development Centre (CDC), IITRAM",
    "alternateName": "CDC IITRAM",
    "url": "https://udgam.iitram.ac.in",
    "logo": "https://udgam.iitram.ac.in/logo.png",
    "description": "Career Development Centre at Institute of Infrastructure Technology Research and Management",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "placement@iitram.ac.in",
        "contactType": "Event Inquiries"
    }
});

/**
 * Track analytics events (Google Analytics)
 * TODO: Replace 'G-XXXXXXXXXX' with actual GA4 measurement ID
 */
export const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

/**
 * Add to Google Calendar helper
 * Improves engagement and conversions
 */
export const generateGoogleCalendarLink = () => {
    const event = {
        text: 'Udgam 2026 - Industry–Academia Conclave',
        dates: '20260227T090000/20260228T183000',
        details: 'Join Udgam 2026 at IITRAM for keynotes, panel discussions, pitch competitions, and networking. Register at https://udgam.iitram.ac.in/students',
        location: 'IITRAM Campus, Ahmedabad, Gujarat 380026',
        ctz: 'Asia/Kolkata'
    };

    const params = new URLSearchParams(event);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()}`;
};

export default useSEO;

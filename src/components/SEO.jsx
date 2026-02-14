import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const location = useLocation();
    const baseUrl = 'https://udgam-iac.iitram.in';

    // Ensure the canonical URL is absolute and cleans double slashes if any (though unlikely with this logic)
    const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

    const defaultTitle = 'Udgam 2026 - Industry–Academia Conclave (IAC) | CDC IITRAM';
    const defaultDescription = "Udgam 2026 is CDC IITRAM's flagship Industry-Academia Conclave bridging innovation and industry. Join us for two days of keynotes, panel discussions, pitch competitions, and networking.";
    const defaultImage = `${baseUrl}/iac-2026-cover.png`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | Udgam 2026` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Canonical Tag - The most critical part for this task */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;

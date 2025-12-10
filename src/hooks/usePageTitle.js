import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | IAC 2026` : 'IAC 2026 - Industry–Academia Conclave | CDC IITRAM';
    
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export const useAutoPageTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    const titles = {
      '/': 'IAC 2026 - Industry–Academia Conclave | CDC IITRAM',
      '/schedule': 'Event Schedule',
      '/students': 'For Students',
      '/partners': 'Partners & Sponsors',
      '/contact': 'Contact Us',
      '/speakers': 'Speakers & Guests'
    };
    
    const title = titles[location.pathname] || 'Page Not Found';
    document.title = title.includes('|') ? title : `${title} | IAC 2026`;
  }, [location.pathname]);
};

export default usePageTitle;

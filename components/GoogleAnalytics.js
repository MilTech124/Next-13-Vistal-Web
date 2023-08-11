import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Wysłanie informacji o zmianie strony do Google Analytics
      window.gtag('config', 'G-CL17C3F05K', {
        page_path: url,
      });
    };

    // Dodanie nasłuchiwania na zmiany strony
    router.events.on('routeChangeComplete', handleRouteChange);

    // Czyszczenie nasłuchiwania przy odmontowywaniu komponentu
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;

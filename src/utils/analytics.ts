declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.log('GA_MEASUREMENT_ID not found in environment variables');
    return;
  }

  // Create script tag for Google Analytics
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Create script tag for gtag configuration
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);

  console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, parameters);
};

export const trackPageView = (page_title: string, page_location?: string) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title,
    page_location: page_location || window.location.href,
  });
};
/**
 * Google Analytics 4 (GA4) Utility Helpers
 * Stream: design system himu
 * Measurement ID: G-02V3ZNFL0V
 */

export const GA_MEASUREMENT_ID = 'G-02V3ZNFL0V';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track custom events in Google Analytics 4
 * @param eventName The name of the event (e.g. 'button_click', 'component_interaction')
 * @param params Additional event parameters
 */
export function trackGAEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track page views manually in Google Analytics 4
 * @param pageTitle Optional page title
 * @param pageLocation Optional full page URL
 */
export function trackGAPageView(pageTitle?: string, pageLocation?: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle || document.title,
      page_location: pageLocation || window.location.href,
      page_path: window.location.pathname + window.location.search + window.location.hash
    });
  }
}

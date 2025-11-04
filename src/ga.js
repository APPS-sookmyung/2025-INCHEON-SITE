const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-7VH88YQVVD';

export function sendPageView(path, title) {
  if (!window.gtag || !GA_ID) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
}

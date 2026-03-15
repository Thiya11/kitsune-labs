import { useEffect } from 'react';

/**
 * Custom hook to manage SEO metadata for each page.
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} [options.canonical] - Optional canonical link
 */
const useSEO = ({ title, description, canonical }) => {
  useEffect(() => {
    // Set Title
    const baseTitle = 'kitsunechaos Lab';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Explore creative experiments and tools in the kitsunechaos Lab.');
    }

    // Set Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical && canonical) {
      linkCanonical.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
};

export default useSEO;

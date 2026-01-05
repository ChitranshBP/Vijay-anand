import { useEffect } from 'react';
import pagesMeta from '../data/seo';

const SEO = ({ page, title, description }) => {
  useEffect(() => {
    let seoData = null;

    if (title && description) {
      seoData = { metaTitle: title, metaDescription: description };
    } else {
      seoData = pagesMeta.find(meta => meta.page === page);
    }

    if (seoData) {
      // Set document title
      document.title = seoData.metaTitle;

      // Set or update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.metaDescription);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = seoData.metaDescription;
        document.head.appendChild(metaDescription);
      }

      // Set or update og:title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seoData.metaTitle);
      } else {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.content = seoData.metaTitle;
        document.head.appendChild(ogTitle);
      }

      // Set or update og:description
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seoData.metaDescription);
      } else {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.content = seoData.metaDescription;
        document.head.appendChild(ogDescription);
      }

      // Set or update twitter:title
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', seoData.metaTitle);
      } else {
        twitterTitle = document.createElement('meta');
        twitterTitle.name = 'twitter:title';
        twitterTitle.content = seoData.metaTitle;
        document.head.appendChild(twitterTitle);
      }

      // Set or update twitter:description
      let twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', seoData.metaDescription);
      } else {
        twitterDescription = document.createElement('meta');
        twitterDescription.name = 'twitter:description';
        twitterDescription.content = seoData.metaDescription;
        document.head.appendChild(twitterDescription);
      }
    }
  }, [page, title, description]);

  return null;
};

export default SEO;

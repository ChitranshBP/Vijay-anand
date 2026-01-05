import React, { useMemo } from 'react';
import HyderabadConditionTemplate from '../../templates/HyderabadConditionTemplate';
import HydrabadPages from '../../data/seo-hydrebad';
import { FaProcedures, FaXRay, FaDna, FaPills } from 'react-icons/fa';

/**
 * Wrapper component to dynamically render Hyderabad Condition Pages
 * based on the provided page name.
 */
const HyderabadConditionPage = ({ pageName }) => {
    // Memoize the config generation to prevent unnecessary re-renders
    const config = useMemo(() => {
        const pageData = HydrabadPages.find(p => p.pageName === pageName);

        if (!pageData) {
            return null;
        }

        // Helper to get image path (slug-based matching)
        const getConditionImage = (name) => {
            const map = {
                "Bone Cancer": "bone-cancer.webp",
                "Brain Tumor": "brain-tumour.webp",
                "Breast Cancer": "breast-cancer-condition.webp",
                "Cervical Cancer": "Cervical-cancer.webp",
                "Colorectal Cancer": "Colorectal-cancer.webp",
                "Eye Cancer": "eye-cancer.webp",
                "Eyelid Cancer": "eye-lid-cancer.webp",
                "Kidney Cancer": "kidney-cancer.webp",
                "Liver Cancer": "liver-cancer.webp",
                "Lung Cancer": "lung-cancer.webp",
                "Melanoma": "Uveal-Melanoma.webp",
                "Oral Cancer": "oral-cancer.webp",
                "Ovarian Cancer": "ovarian-cancer.webp",
                "Pancreatic Cancer": "pancreatic-cancer.webp",
                "Prostate Cancer": "prostate-cancer.webp",
                "Soft Tissue Sarcoma": "soft-tissue-sarcoma.webp",
                "Thyroid Cancer": "thyroid-cancer.webp",
            };
            const fileName = map[name] || "cancer-care.jpg";
            // Use absolute path from public
            return `/assets/condiotion-images/${fileName}`;
        }

        return {
            conditionName: pageData.pageName,
            keyword: pageData.keywords && pageData.keywords.length > 0 ? pageData.keywords[0] : `${pageData.pageName} treatment in Hyderabad`,

            // Pass SEO overrides directly
            metaTitle: pageData.metaTitle,
            metaDescription: pageData.metaDescription,
            seoPage: null, // We are providing direct overrides

            heroImage: "/assets/vijay-snand-hero.png",
            conditionImage: getConditionImage(pageData.pageName),
            description: pageData.metaDescription,

            overview: `Dr. Vijay Anand Reddy is a leading expert in ${pageData.pageName} treatment in Hyderabad. With over 30 years of experience, he provides comprehensive care using state-of-the-art technology and personalized treatment plans designed to achieve the best possible outcomes for patients.`,

            treatments: [
                { title: "Advanced Surgery", desc: "Minimally invasive surgical options for faster recovery.", icon: <FaProcedures /> },
                { title: "Radiation Therapy", desc: "Precise radiation delivery using IMRT and IGRT.", icon: <FaXRay /> },
                { title: "Chemotherapy", desc: "Targeted drug therapies to eliminate cancer cells.", icon: <FaPills /> },
                { title: "Immunotherapy", desc: "Boosting the body's immune system to fight cancer.", icon: <FaDna /> }
            ],

            facilities: [
                { title: "Diagnostic Imaging", desc: "Latest PET-CT and MRI scans for accurate staging." },
                { title: "Day Care Chemo", desc: "Comfortable ambulatory chemotherapy suites." },
                { title: "24/7 Emergency", desc: "Round-the-clock support for any complications." }
            ],

            whyChoose: [
                "30+ Years of Oncology Experience",
                "World-Class Apollo Cancer Centre Facilities",
                "Personalized Multidisciplinary Care",
                "High Success Rates and Patient Satisfaction"
            ],

            faqs: [
                { question: `What is the best treatment for ${pageData.pageName} in Hyderabad?`, answer: `The best treatment depends on the stage and type of cancer. Dr. Vijay Anand Reddy offers personalized plans at Apollo Cancer Centres Hyderabad, which may include surgery, radiation, or chemotherapy.` },
                { question: `Why choose Dr. Vijay Anand Reddy for ${pageData.pageName}?`, answer: `He is one of Hyderabad's most experienced oncologists with a track record of successful treatments and compassionate care.` },
                { question: `Is ${pageData.pageName} treatment covered by insurance?`, answer: `Yes, most major insurance plans are accepted at Apollo Cancer Centres Hyderabad. Our team can assist with the paperwork.` }
            ],

            quoteId: 1
        };
    }, [pageName]);

    if (!config) {
        return <div className="p-20 text-center">Page not found: {pageName}</div>;
    }

    return <HyderabadConditionTemplate config={config} />;
};

export default HyderabadConditionPage;

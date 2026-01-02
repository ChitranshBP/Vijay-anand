# Hyderabad-Targeted Page Templates

This directory contains three reusable templates for creating Hyderabad-focused condition, specialty, and treatment pages. All templates are optimized for local SEO targeting Hyderabad, Telangana, and specifically Apollo Cancer Centres in Jubilee Hills.

## Templates

1. **HyderabadConditionTemplate.jsx** - For cancer condition pages (e.g., Breast Cancer, Lung Cancer)
2. **HyderabadSpecialtyTemplate.jsx** - For specialty pages (e.g., Radiation Oncology, Surgical Oncology)
3. **HyderabadTreatmentTemplate.jsx** - For treatment modality pages (e.g., Proton Therapy, IMRT)

## Key Features

All templates include:
- ✅ Hyderabad-specific keywords and location targeting
- ✅ Apollo Cancer Centres, Jubilee Hills branding
- ✅ Google Rating showcase section
- ✅ WhatsApp appointment booking widget
- ✅ Video testimonials section
- ✅ Patient reviews integration
- ✅ Doctor profile section (Dr. Vijay Anand Reddy)
- ✅ FAQ section
- ✅ CTA buttons for appointment booking
- ✅ Responsive design with Tailwind CSS
- ✅ Framer Motion animations

---

## 1. Condition Template Usage

### Example: Breast Cancer Treatment in Hyderabad

```jsx
import React from 'react';
import HyderabadConditionTemplate from '../templates/HyderabadConditionTemplate';
import { FaMicroscope, FaProcedures, FiTarget, FaDna, FiShield, FaHandHoldingHeart } from 'react-icons/fa';

const BreastCancerHyderabadPage = () => {
    const config = {
        conditionName: "Breast Cancer",
        keyword: "breast cancer treatment in Hyderabad",
        heroImage: "/assets/condition-images/breast-cancer-hyderabad.webp",
        conditionImage: "/assets/condition-images/breast-cancer-detail.webp",
        seoPage: "Breast Cancer Hyderabad",
        quoteId: 1,

        description: "Looking for the best breast cancer treatment in Hyderabad? Dr. Vijay Anand Reddy at Apollo Cancer Centres, Jubilee Hills offers advanced radiation therapy, precision surgery, and comprehensive cancer care with proven success rates.",

        overview: "Breast cancer is one of the most common cancers affecting women in Hyderabad and Telangana. Dr. Vijay Anand Reddy, based at Apollo Cancer Centres in Jubilee Hills, Hyderabad, offers comprehensive breast cancer treatment including advanced diagnostics, minimally invasive surgery, precision radiation therapy (IMRT, IGRT), chemotherapy, hormone therapy, and targeted therapy tailored to each patient's unique cancer type and stage.",

        treatments: [
            {
                title: "Advanced Diagnostics",
                desc: "3D mammography & MRI",
                icon: <FaMicroscope size={24} />
            },
            {
                title: "Minimally Invasive Surgery",
                desc: "Breast-conserving options",
                icon: <FaProcedures size={24} />
            },
            {
                title: "Precision Radiation",
                desc: "IMRT & IGRT therapy",
                icon: <FiTarget size={24} />
            },
            {
                title: "Targeted Therapy",
                desc: "Personalized treatment",
                icon: <FaDna size={24} />
            },
            {
                title: "Fewer Side Effects",
                desc: "Better tolerance",
                icon: <FiShield size={24} />
            },
            {
                title: "Holistic Care",
                desc: "Complete support",
                icon: <FaHandHoldingHeart size={24} />
            }
        ],

        facilities: [
            {
                title: "Advanced Diagnostics in Hyderabad",
                desc: "3D digital mammography, breast MRI, molecular imaging available at Apollo Jubilee Hills"
            },
            {
                title: "Minimally Invasive Surgery",
                desc: "Breast-conserving lumpectomy, sentinel lymph node biopsy at Apollo Hyderabad"
            },
            {
                title: "Precision Radiation Therapy",
                desc: "IMRT, IGRT, SBRT with real-time imaging at our Jubilee Hills center"
            },
            {
                title: "Targeted Therapy",
                desc: "HER2-targeted therapies, hormone therapy available in Hyderabad"
            },
            {
                title: "Genetic Testing",
                desc: "BRCA1/2 testing and comprehensive genomic profiling in Hyderabad"
            },
            {
                title: "Supportive Care",
                desc: "Counseling, nutrition support, survivorship programs at Apollo Hyderabad"
            }
        ],

        whyChoose: [
            "Best breast cancer treatment doctor in Hyderabad with 30+ years experience",
            "Apollo Cancer Centres, Jubilee Hills - Hyderabad's premier cancer facility",
            "Advanced radiation therapy (IMRT, IGRT, SBRT) available in Hyderabad",
            "Personalized treatment plans by Hyderabad's leading oncologist",
            "Proven track record with 90%+ early detection success in Hyderabad",
            "Affordable breast cancer treatment compared to other metro cities",
            "Easily accessible location in Jubilee Hills, Hyderabad"
        ],

        faqs: [
            {
                question: "What is the cost of breast cancer treatment in Hyderabad?",
                answer: "Breast cancer treatment in Hyderabad is significantly more affordable than in other metros and Western countries, typically 60-70% lower. The exact cost at Apollo Cancer Centres, Jubilee Hills depends on the stage of cancer, treatment modality, and duration. Dr. Vijay Anand Reddy's clinic offers transparent pricing and treatment packages for breast cancer treatment in Hyderabad."
            },
            {
                question: "Where is Dr. Vijay Anand Reddy's clinic located in Hyderabad?",
                answer: "Dr. Vijay Anand Reddy practices at Apollo Cancer Centres, Jubilee Hills, Hyderabad. The center is easily accessible from all parts of Hyderabad and offers state-of-the-art facilities for breast cancer treatment."
            },
            {
                question: "Why choose Hyderabad for breast cancer treatment?",
                answer: "Hyderabad has emerged as a leading destination for cancer care in India, offering world-class facilities at Apollo Cancer Centres, Jubilee Hills. With Dr. Vijay Anand Reddy's expertise, advanced technology, and affordable costs, Hyderabad is the ideal choice for breast cancer treatment."
            },
            {
                question: "What is the success rate of breast cancer treatment in Hyderabad?",
                answer: "Breast cancer treatment at Apollo Hyderabad has excellent success rates, with early-stage breast cancer having a 90%+ survival rate. Dr. Vijay Anand Reddy has successfully treated over 10,000 breast cancer patients in Hyderabad with advanced radiation oncology techniques."
            }
        ]
    };

    return <HyderabadConditionTemplate config={config} />;
};

export default BreastCancerHyderabadPage;
```

---

## 2. Specialty Template Usage

### Example: Radiation Oncology in Hyderabad

```jsx
import React from 'react';
import HyderabadSpecialtyTemplate from '../templates/HyderabadSpecialtyTemplate';
import { FaMicroscope, FaProcedures, FiTarget, FaDna } from 'react-icons/fa';

const RadiationOncologyHyderabadPage = () => {
    const config = {
        specialtyName: "Radiation Oncology",
        keyword: "radiation oncology in Hyderabad",
        heroImage: "/assets/specialty-images/radiation-oncology-hyderabad.webp",
        quoteId: 39,

        description: "Looking for the best radiation oncology services in Hyderabad? Dr. Vijay Anand Reddy at Apollo Cancer Centres, Jubilee Hills offers world-class radiation therapy using Proton Therapy, CyberKnife, and Tomotherapy.",

        detailedDescription: "Apollo Cancer Centres, Jubilee Hills, Hyderabad offers the most comprehensive radiation oncology services in the city. Under the leadership of Dr. Vijay Anand Reddy, we provide cutting-edge radiation therapy with advanced technologies and personalized treatment protocols.",

        technologies: [
            {
                title: "Proton Therapy",
                desc: "First in South Asia",
                icon: <FaMicroscope size={24} />
            },
            {
                title: "CyberKnife",
                desc: "Robotic Radiosurgery",
                icon: <FaProcedures size={24} />
            },
            {
                title: "Tomotherapy",
                desc: "360° Radiation",
                icon: <FiTarget size={24} />
            },
            {
                title: "TrueBeam STx",
                desc: "Fast & Precise",
                icon: <FaDna size={24} />
            }
        ],

        expertise: [
            "30+ Years in Hyderabad",
            "Director, Apollo Hyderabad",
            "10,000+ Cases in Hyderabad",
            "International Recognition"
        ],

        conditions: [
            {
                name: "Breast Cancer",
                desc: "Advanced IMRT & IGRT for breast cancer patients in Hyderabad"
            },
            {
                name: "Lung Cancer",
                desc: "Precision SBRT for lung tumors at Apollo Jubilee Hills"
            },
            {
                name: "Prostate Cancer",
                desc: "Image-guided radiation therapy available in Hyderabad"
            },
            {
                name: "Head & Neck Cancer",
                desc: "Organ preservation protocols at Apollo Hyderabad"
            },
            {
                name: "Brain Tumors",
                desc: "SRS/SRT using CyberKnife in Hyderabad"
            },
            {
                name: "Pediatric Cancers",
                desc: "Proton therapy for children at Apollo Hyderabad"
            }
        ],

        whyChoose: [
            "Hyderabad's first and only Proton Therapy center",
            "Apollo Cancer Centres, Jubilee Hills - state-of-the-art facility",
            "30+ years of radiation oncology experience in Hyderabad",
            "Most advanced radiation technologies in Telangana",
            "Cost-effective compared to Bangalore, Mumbai, or international centers",
            "Multidisciplinary tumor board at Apollo Hyderabad",
            "Easily accessible from all areas of Hyderabad"
        ],

        faqs: [
            {
                question: "What radiation therapy technologies are available in Hyderabad?",
                answer: "Apollo Cancer Centres, Jubilee Hills, Hyderabad offers Proton Therapy, CyberKnife, Tomotherapy, TrueBeam STx, IMRT, IGRT, and SBRT - the most comprehensive range of radiation oncology technologies in Hyderabad and Telangana."
            },
            {
                question: "Where is the Proton Therapy center in Hyderabad?",
                answer: "The Proton Therapy center is located at Apollo Cancer Centres, Jubilee Hills, Hyderabad. It is the first and only Proton Therapy facility in South Asia, led by Dr. Vijay Anand Reddy."
            },
            {
                question: "How much does radiation therapy cost in Hyderabad?",
                answer: "Radiation therapy costs in Hyderabad are significantly lower than in Western countries and even other Indian metros. Apollo Hyderabad offers transparent pricing and treatment packages. Contact Dr. Vijay Anand Reddy's clinic for specific cost estimates."
            }
        ]
    };

    return <HyderabadSpecialtyTemplate config={config} />;
};

export default RadiationOncologyHyderabadPage;
```

---

## 3. Treatment Template Usage

### Example: Proton Therapy in Hyderabad

```jsx
import React from 'react';
import HyderabadTreatmentTemplate from '../templates/HyderabadTreatmentTemplate';
import { FaMicroscope, FiTarget, FiShield, FaHandHoldingHeart } from 'react-icons/fa';

const ProtonTherapyHyderabadPage = () => {
    const config = {
        treatmentName: "Proton Therapy",
        keyword: "proton therapy in Hyderabad",
        heroImage: "/assets/treatment-images/proton-therapy-hyderabad.webp",
        treatmentImage: "/assets/treatment-images/proton-therapy-detail.webp",
        quoteId: 15,

        description: "Experience the most advanced proton therapy in Hyderabad at Apollo Cancer Centres, Jubilee Hills. Dr. Vijay Anand Reddy offers India's first Proton Therapy center with Pencil Beam Scanning technology for precise cancer treatment.",

        overview: "Proton Therapy is the most advanced form of radiation therapy available in Hyderabad. Apollo Cancer Centres, Jubilee Hills is proud to host South Asia's first Proton Therapy center, led by Dr. Vijay Anand Reddy. Proton therapy delivers radiation with sub-millimeter precision, sparing healthy tissues and minimizing side effects - a game-changer for cancer treatment in Hyderabad.",

        benefits: [
            {
                title: "Precision Targeting",
                desc: "Bragg Peak accuracy",
                icon: <FiTarget size={24} />
            },
            {
                title: "Minimal Side Effects",
                desc: "Spares healthy tissue",
                icon: <FiShield size={24} />
            },
            {
                title: "Pediatric Friendly",
                desc: "Ideal for children",
                icon: <FaHandHoldingHeart size={24} />
            },
            {
                title: "Advanced Technology",
                desc: "Pencil Beam Scanning",
                icon: <FaMicroscope size={24} />
            }
        ],

        processSteps: [
            {
                step: "01",
                title: "Consultation & Imaging",
                desc: "Comprehensive evaluation and CT simulation at Apollo Hyderabad",
                image: "https://img.freepik.com/free-photo/doctor-patient-discussing-medical-report_1421-66.jpg"
            },
            {
                step: "02",
                title: "Treatment Planning",
                desc: "Physicists create precise proton beam plan in Hyderabad",
                image: "https://img.freepik.com/free-photo/doctor-analyzing-x-ray-scan_1421-67.jpg"
            },
            {
                step: "03",
                title: "Proton Therapy Delivery",
                desc: "Painless treatment sessions at Apollo Jubilee Hills",
                image: "https://img.freepik.com/free-photo/medical-team-meeting_1421-68.jpg"
            },
            {
                step: "04",
                title: "Follow-up Care",
                desc: "Regular monitoring by Dr. Reddy's team in Hyderabad",
                image: "https://img.freepik.com/free-photo/surgeons-operating-room_1421-69.jpg"
            }
        ],

        idealFor: [
            "Pediatric brain tumors (children in Hyderabad & Telangana)",
            "Skull base tumors requiring precision in Hyderabad",
            "Eye cancers (ocular melanoma, retinoblastoma) in Hyderabad",
            "Prostate cancer patients seeking minimal side effects",
            "Head and neck cancers requiring organ preservation",
            "Spinal cord tumors treated in Hyderabad"
        ],

        advantages: [
            "South Asia's first Proton Therapy center located in Hyderabad",
            "Led by Dr. Vijay Anand Reddy with international training",
            "Apollo Cancer Centres, Jubilee Hills - state-of-the-art facility",
            "70% cost savings compared to USA/Europe for Hyderabad patients",
            "No need to travel abroad - world-class proton therapy in Hyderabad",
            "Comprehensive cancer care under one roof at Apollo Hyderabad",
            "Easy accessibility from all parts of Hyderabad and Telangana"
        ],

        faqs: [
            {
                question: "Where is Proton Therapy available in Hyderabad?",
                answer: "Proton Therapy is available exclusively at Apollo Cancer Centres, Jubilee Hills, Hyderabad. It is the first and only Proton Therapy center in South Asia, led by Dr. Vijay Anand Reddy."
            },
            {
                question: "How much does Proton Therapy cost in Hyderabad?",
                answer: "Proton Therapy in Hyderabad costs approximately 60-70% less than in the USA or Europe. Apollo Hyderabad offers transparent pricing. Contact Dr. Vijay Anand Reddy's clinic for detailed cost estimates for proton therapy in Hyderabad."
            },
            {
                question: "Is Proton Therapy better than regular radiation in Hyderabad?",
                answer: "Yes, Proton Therapy offers superior precision and fewer side effects compared to conventional radiation. It's especially beneficial for pediatric cancers, brain tumors, and tumors near critical organs. Apollo Hyderabad's Proton Therapy center is equipped with the latest Pencil Beam Scanning technology."
            },
            {
                question: "Who can benefit from Proton Therapy in Hyderabad?",
                answer: "Patients with pediatric cancers, brain tumors, eye cancers, prostate cancer, head and neck cancers, and spinal tumors can benefit from Proton Therapy at Apollo Hyderabad. Dr. Vijay Anand Reddy evaluates each case to determine if proton therapy is the best option."
            }
        ]
    };

    return <HyderabadTreatmentTemplate config={config} />;
};

export default ProtonTherapyHyderabadPage;
```

---

## Configuration Parameters

### Common to All Templates:
- `heroImage` - Main hero section background image
- `description` - SEO-optimized description with Hyderabad keywords
- `keyword` - Primary keyword for the page
- `quoteId` - ID for survivor quote to display
- `faqs` - Array of FAQ objects with question and answer

### Condition Template Specific:
- `conditionName` - Name of the cancer condition
- `conditionImage` - Detail section image
- `overview` - Detailed condition overview
- `treatments` - Treatment options available
- `facilities` - Apollo Hyderabad facilities
- `whyChoose` - Reasons to choose Hyderabad
- `seoPage` - SEO component page identifier

### Specialty Template Specific:
- `specialtyName` - Name of the specialty
- `detailedDescription` - Detailed specialty description
- `technologies` - Available technologies
- `expertise` - Doctor's expertise areas
- `conditions` - Conditions treated
- `whyChoose` - Reasons to choose Hyderabad

### Treatment Template Specific:
- `treatmentName` - Name of the treatment
- `treatmentImage` - Detail section image
- `overview` - Detailed treatment overview
- `benefits` - Treatment benefits
- `processSteps` - Treatment process steps
- `idealFor` - Ideal candidates
- `advantages` - Hyderabad-specific advantages

---

## SEO Optimization

All templates include:
- Hyderabad, Jubilee Hills, and Telangana keywords
- Apollo Cancer Centres branding
- Dr. Vijay Anand Reddy mentions
- Local trust signals (Google ratings, reviews)
- Location-specific CTAs
- Structured data markup ready

---

## Next Steps

When you have specific keywords for your pages, simply:
1. Copy the appropriate template example
2. Replace the configuration with your keyword-specific content
3. Add appropriate images to the assets folder
4. Deploy the new page

All templates are fully responsive, SEO-optimized, and ready for Hyderabad-focused cancer treatment marketing.

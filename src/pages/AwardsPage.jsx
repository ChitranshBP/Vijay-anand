import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// Attach your images in the 'image' field for each award
const awards = [
  // 🏆 Awards WITH images (12 only)
  {
    title: "Clinical Pioneer Award",
    date: "5th February 2025",
    event: "Apollo Hospitals, Chennai",
    image: "assets/awards/ISOO-2024-Oration.png",
    description: `Deeply humbled and honoured to receive the Clinical Pioneer Award on Apollo Founder's Day. A heartfelt thanks to our Chairman Sir and the Reddy family for recognizing my patient care and Apollo mission dedication.`
  },
  {
    title: "ISOO 2024 Oration",
    date: "6th December 2024",
    event: "International Society of Ocular Oncology, Goa",
    image: "assets/awards/AROICON-2024-Gold-Medal – Best-Scientific-Paper.png",
    description: `Awarded the prestigious ISOO 2024 Oration for contributions to ocular oncology.`
  },
  {
    title: "Dr. B. D. Gupta Memorial Oration Award",
    date: "30th November 2019",
    event: "41st AROICON, Ahmedabad, INDIA",
    image: "assets/awards/dr-b.d-gupta.png",
    description: `For outstanding contribution in the field of Radiation Oncology.`
  },
  {
    title: "Excellence Award",
    date: "11th August 2019",
    event: "Lions Club International in association with Apollo Hospitals",
    image: "assets/awards/Lions-Club-International-Excellence-Award.png",
    description: `For extraordinary service and contribution to the field of Oncology.`
  },

  {
    title: "AOS Achievement Award",
    date: "January 2018",
    event: "American Academy of Ophthalmology Society, CA, USA",
    image: "assets/awards/AOS-Achievement-Award.png",
    description: `For long-term contributions to ophthalmic science.`
  },
  {
    title: "Legend in the Field of Oncology",
    date: "28th February 2017",
    event: "Times Healthcare Achievers Awards, Hyderabad",
    image: "assets/awards/timesHealthcare-award.png",
    description: `Recognized as “The Legend in the Field of Oncology” at the Times Healthcare Achievers Awards.`
  },
  {
    title: "Achievement Award",
    date: "2013",
    event: "American Academy of Ophthalmology",
    image: "assets/awards/american.png",
    description: `For many years of distinguished service in the programs of the society.`
  },
  {
    title: "Best Scientific Paper Award",
    date: "1996",
    event: "AROICON 1996, Aurangabad, INDIA",
    image: "assets/awards/Best-Scientific-Paper.png",
    description: `Awarded at the XVIII National Conference of AROI with Dr. K. A. Dinshaw.`
  },
  {
    title: "Young Scientist Award",
    date: "1996",
    event: "Indo-American Cancer Congress, New York, USA",
    image: "assets/awards/Young-Scientist-Award.png",
    description: `Young Scientist Award with Dr. Kalluri Subrahmanyam & Dr. Chitti R. Moorthy.`
  },
  {
    title: "Nargis Dutt Memorial Foundation Award",
    date: "1995",
    event: "Nargis Dutt Memorial Foundation, New York, USA",
    image: "assets/awards/Nargis-Dutt-Memorial-Foundation-Award.png",
    description: `Awarded with Dr. Dattetreyudu Nori at New York Hospital.`
  },
  {
    title: "International Cancer Research Technology Transfer Award",
    date: "1992",
    event: "UICC, Geneva, Switzerland",
    image: "assets/awards/International-Cancer-Research-Technology-Transfer-Award.png",
    description: `With Dr. Margarett Spittle at the Meyerstein Institute of Oncology.`
  },
    {
    title: "Best Scientific Poster Award",
    date: "29th November 2009",
    event: "AROICON 2009, Hyderabad, INDIA",
        image: "assets/awards/Young-Investigators-Award.png",

    description: `Histopathology of Retinoblastoma after primary Chemotherapy.`
  },

  // 🏅 Awards WITHOUT images (rest of them)
    {
    title: "Gold Medal – BOA FOCUS 2018",
    date: "25th August 2018",
    event: "Bombay Ophthalmologists Association, Mumbai",
    description: `For exemplary work at the FOCUS 2018 conference.`
  },
  {
    title: "Gold Medal – Best Scientific Paper",
    date: "1st December 2024",
    event: "AROICON 2024, Mangaluru, INDIA",
    description: `Prospective open-label study on patient-reported toxicities & QOL in SBRT Prostate for Non-Metastatic Prostate Cancer.`
  },
  {
    title: "Gold Medal – Best Scientific Paper",
    date: "4th December 2022",
    event: "AROICON 2022, New Delhi, INDIA",
    description: `Feasibility study on extreme hypofractionation in post-operative breast cancer.`
  },
  {
    title: "Best Scientific Paper Award",
    date: "2015",
    event: "AROICON 2015, Lucknow, INDIA",
    description: `Prospective study of neurocognitive function, QOL, and local control in brain metastases treated with SRS.`
  },
  {
    title: "Best Scientific Paper Award",
    date: "2014",
    event: "AROICON 2014, Imphal, INDIA",
    description: `Prospective observational feasibility study of hypofractionated radiotherapy for localized prostate cancer.`
  },
  {
    title: "Best Scientific Paper Award",
    date: "29th November 2009",
    event: "AROICON 2009, Hyderabad, INDIA",
    description: `Ruthenium 106 Plaque Brachytherapy: Indications and Outcome in Ocular Tumors.`
  },
  {
    title: "Best Scientific Poster Award",
    date: "29th November 2009",
    event: "AROICON 2009, Hyderabad, INDIA",
    description: `Histopathology of Retinoblastoma after primary Chemotherapy.`
  },
  {
    title: "Best Poster Award",
    date: "2008",
    event: "American Academy of Ophthalmology, Atlanta, USA",
    description: `Recognized for outstanding poster presentation in ophthalmology.`
  },
  {
    title: "Young Investigators Award",
    date: "2001",
    event: "Eli Lilly & Company, New Delhi, INDIA",
    description: `For early-career innovation in cancer research.`
  },
  {
    title: "International Cancer Research Technology Transfer Award",
    date: "1998",
    event: "UICC, Geneva, Switzerland",
    description: `For contributions to international cancer research technology transfer.`
  }
];




const felicitations = [
"On Doctor’s Day 2013, received special felicitation from Apollo Hospitals, Hyderabad, for extensive social service for poor and needy cancer patients via CURE Foundation."];


const AwardsPage = () => {
  const [awardsRef, awardsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [felicitationRef, felicitationInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero/Title Section */}
      <section className="pt-32 pb-12 bg-medical-blue/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-5">

            <SafeIcon icon={FiAward} className="w-10 h-10 text-medical-blue mx-auto mb-2" />
            <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">Awards & Recognition</h1>
            <p className="text-lg text-gray-700">
              Celebrating milestones in scientific research, patient care and international innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={awardsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {awards.map((award, i) =>
            <motion.div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={awardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.07 }}>

                {award.image &&
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img
                  src={award.image}
                  alt={award.title}
                  className="h-full w-full object-cover object-top"
                  style={{ maxHeight: '16rem' }}
                  loading="lazy" />

                  </div>
              }
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-semibold text-medical-dark mb-2">{award.title}</h3>
                  <div className="text-sm text-medical-blue font-medium mb-1">{award.event}</div>
                  <div className="text-xs text-gray-500 mb-2">{award.date}</div>
                  <p className="text-gray-700 text-sm">{award.description}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      {/* Felicitations */}
   <section ref={felicitationRef} className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={felicitationInView ? "visible" : "hidden"}
      className="text-center">

      <h2 className="text-2xl md:text-3xl font-bold text-medical-dark mb-4">
        Felicitations & Social Service
      </h2>

      <p className="mt-5 mb-10 text-gray-700">
            Dr. Reddy’s work has been spread across urban, semi urban and rural areas. He has been felicitated at various educational institutes, organizations and at Indian Medical Association at Hyderabad, Mahbubnagar, Karimnagar, Nizamabad, Vizag and Warangal.
      </p>

      {/* Static Image */}
      <img 
        src="assets/awards/BOA-Gold-Medal.png" 
        alt="Felicitations" 
        className="mx-auto mb-6 rounded-2xl shadow-md w-full max-w-md"
      />

      <div className="text-lg text-gray-700 space-y-4 max-w-3xl mx-auto">
        {felicitations.map((item, i) => (
          <p key={i} className="mb-2">{item}</p>
        ))}
      </div>
    </motion.div>
  </div>
</section>
      <Footer />
    </div>);

};

export default AwardsPage;
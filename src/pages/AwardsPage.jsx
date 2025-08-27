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
    image: "assets/awards/AROICON-2022-Gold-Medal – Best-Scientific-Paper.png",
    description: `Awarded the prestigious ISOO 2024 Oration for contributions to ocular oncology.`
  },
  {
    title: "AROICON 2024 Gold Medal – Best Scientific Paper",
    date: "1st December 2024",
    event: "AROICON 2024, Mangaluru, INDIA",
    image: "assets/awards/AROICON-2024-Gold-Medal – Best-Scientific-Paper.png",
    description: `For a study on SBRT Prostate for Non Metastatic Prostate Cancer – focus on acute toxicities & QOL.`
  },
  {
    title: "AROICON 2022 Gold Medal – Best Scientific Paper",
    date: "4th December 2022",
    event: "AROICON 2022, New Delhi, INDIA",
    image: "assets/awards/AROICON-2022-Gold-Medal – Best-Scientific-Paper.png",
    description: `For feasibility study on extreme hypofractionation in post operative breast cancer.`
  },
  {
    title: "Lions Club International Excellence Award",
    date: "11th August 2019",
    event: "Lions Club International",
    image: "assets/awards/Lions-Club-International-Excellence-Award.png",
    description: `Awarded for extraordinary service and contribution to the field of Oncology.`
  },
  {
    title: "BOA Gold Medal",
    date: "25th August 2018",
    event: "Bombay Ophthalmologists Association – FOCUS 2018, Mumbai",
    image: "assets/awards/BOA-Gold-Medal.png",
    description: `For exemplary work at the FOCUS conference.`
  },
  {
    title: "AOS Achievement Award",
    date: "January 2018",
    event: "American Academy of Ophthalmology Society, CA, USA",
    image: "assets/awards/AOS-Achievement-Award.png",
    description: `Prestigious award for long-term contributions to ophthalmic science.`
  },
  {
    title: "Legend in the Field of Oncology",
    date: "28th Feb 2017",
    event: "Times Healthcare Achievers Awards, Hyderabad",
    image: "assets/awards/American-Academy-of-Ophthalmology – Best-Poster-Award.png",
    description: `Recognized as “The Legend in the Field of Oncology” at the Times Healthcare Achievers Awards.`
  },
  {
    title: "AROICON – Best Scientific Paper Awards",
    date: "2009, 2015, 2014, 1996",
    event: "AROICON Annual Conferences, India",
    image: "assets/awards/AROICON – Best-Scientific-Paper & Poster-Awards.png",
    description: `Multiple best paper and best poster awards for pathbreaking clinical studies and innovations.`
  },
    {
    title: "AROICON – Best Poster Award",
    date: "2009",
    event: "AROICON Annual Conferences, India",
    image: "assets/awards/Young-Investigators-Award.png",
    description: `Histopathology of Retinoblastoma after primary Chemotherapy `
  },
  {
    title: "American Academy of Ophthalmology – Best Poster Award",
    date: "2008",
    event: "AAO, Atlanta, GA, USA",
    image: "assets/awards/American-Academy-of-Ophthalmology – Best-Poster-Award.png",
    description: `For outstanding scientific poster presentations.`
  },
  {
    title: "Young Investigators Award",
    date: "2001",
    event: "Eli Lilly & Company, USA, New Delhi",
    image: "assets/awards/Young-Investigators-Award.png",
    description: "Recognized for early-career innovation in cancer research."
  },
  {
    title: "International Cancer Research Technology Transfer Award",
    date: "1998, 1992",
    event: "UICC, Geneva, Switzerland",
    image: "assets/awards/International-Cancer-Research-Technology-Transfer-Award.png",
    description: `Recognized for significant contributions to international cancer research technology transfer.`
  },
  {
    title: "Young Scientist Award",
    date: "1996",
    event: "Indo-American Cancer Congress, New York, USA",
    image: "assets/awards/Young-Scientist-Award.png",
    description: `Young Scientist Award for trailblazing research, with Dr. Kalluri Subrahmanyam & Dr. Chitti R. Moorthy.`
  },
  {
    title: "Nargis Dutt Memorial Foundation Award",
    date: "1995",
    event: "Nargis Dutt Memorial Foundation, New York, USA",
    image: "assets/awards/Nargis-Dutt-Memorial-Foundation-Award.png",
    description: `For service and research in oncology, bestowed by Dr. Dattetreyudu Nori.`
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
                  className="h-full w-full object-cover object-center"
                  style={{ maxHeight: '12rem' }}
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
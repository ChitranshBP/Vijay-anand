import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteSection from '../components/QuoteSection';
import survivorQuotes from '../data/quotes';

const familyPhoto = "assets/family/vijay-family.jpg"; // Main family photo URL
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};
const housePhotos = [
  // "assets/family/house-1.jpg",
  "assets/family/house-2.jpg",
  "assets/family/house-3.jpg",
  "assets/family/house-4.jpg",
  "assets/family/house-5.jpg",
  "assets/family/house-6.jpg",
  "assets/family/house-7.jpg",
  "assets/family/house-8.jpg",
  "assets/family/house-9.jpg",
  "assets/family/house-10.jpg",
  "assets/family/house-11.jpg",
  "assets/family/house-12.jpg",
  "assets/family/house-13.jpg",
]; // 14 house photos URLs

const FamilyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (src) => {
    setActiveImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <>
    <Header/>
      <section className="pt-32 mt-12 pb-12 bg-medical-blue/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-5">

            <SafeIcon icon={FiUsers} className="w-10 h-10 text-medical-blue mx-auto mb-2" />
            <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">The Reddy Family</h1>
            <p className="text-lg text-gray-700">
        A journey of togetherness, traditions, and values that bring our family closer across generations.
            </p>
          </motion.div>
        </div>
      </section>
    <div className="container mx-auto p-8  text-gray-900 font-sans">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
  {/* Left side - Image */}
  <section
    aria-label="Main family photo"
    className="cursor-pointer flex-shrink-0"
  >
    <img
      src={familyPhoto}
      alt="Reddy Family"
      onClick={() => openModal(familyPhoto)}
      className="rounded-lg shadow-lg max-h-96 object-cover hover:opacity-90 transition-opacity duration-300"
    />
  </section>

  {/* Right side - Content */}
  <header className="text-left">
    {/* <h1 className="text-4xl font-bold text-[#9B528F] mb-4">The Reddy Family</h1> */}
    <p className="text-lg leading-relaxed text-gray-700">
      Dr. Reddy is blissfully married to his college sweetheart Dr. Shashikala (1983), 
      an academic stalwart serving for years as the Professor of Microbiology at Osmania 
      Medical College and elevated to the post of the Principal of Osmania Group of Institutions. 
      Together, they made Mr. P. Vijay Vishal Reddy (1984) who established himself as an experienced 
      serial entrepreneur in India and the UK.
      <br /><br />
      Shortly after, arrived Dr. P. Vijay Karan Reddy (1987), who gracefully exceeds his father's 
      expectations in becoming a renowned Radiation Oncologist himself. Dr. Karan is married to 
      Dr. Aashna Reddy (2016), a young and promising Dermatologist and together they bring the 
      most intriguing ball of cheerfulness into the family, Ms. Anaika Karan Reddy (2020).
    </p>
  </header>
</div>


 


  <section aria-label="House photos gallery" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
    {housePhotos.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`House photo ${idx + 1}`}
        onClick={() => openModal(src)}
        className="rounded-md shadow-md cursor-pointer object-cover h-40 w-full hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    ))}
  </section>

<section className="bg-purple-100 p-6 rounded-md mx-auto max-w-lg">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Left side: Image */}
    <div className="flex-shrink-0">
      <img
        src="assets/family/house-1.jpg" 
        alt="Residence"
        className="w-48 h-48 object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Right side: Content */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-semibold mb-4 text-[#9B528F]">Residence</h2>
      <address className="not-italic text-gray-800 leading-relaxed mb-4 text-base">
        Indraprasta, Plot No. 54A, Road No. 8, Site II Film Nagar,<br />
        Hyderabad 500 096,<br />
        Telangana, India.
      </address>
      <p className="text-[#9B528F] space-y-1 text-base">
        <a href="mailto:cancercare@drvijayanandreddy.com" className="underline hover:text-[#9B528F] block">
          cancercare@drvijayanandreddy.com
        </a>
        <a href="mailto:drvareddy_p@apollohospitals.com" className="underline hover:text-[#9B528F] block">
          drvareddy_p@apollohospitals.com
        </a>
      </p>
    </div>
  </div>
</section>

  {modalOpen && (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <button
        onClick={closeModal}
        aria-label="Close modal"
        className="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none"
      >
        &times;
      </button>
      <img
        src={activeImage}
        alt="Enlarged view"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )}
</div>
<QuoteSection quoteId={58} quotes={survivorQuotes} />
<Footer/>
    </>


  );
};

export default FamilyPage;

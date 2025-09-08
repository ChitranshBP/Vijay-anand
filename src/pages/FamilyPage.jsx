import React, { useState } from 'react';

const familyPhoto = "/images/family_main.jpg"; // Main family photo URL

const housePhotos = [
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/house3.jpg",
  "/images/house4.jpg",
  "/images/house5.jpg",
  "/images/house6.jpg",
  "/images/house7.jpg",
  "/images/house8.jpg",
  "/images/house9.jpg",
  "/images/house10.jpg",
  "/images/house11.jpg",
  "/images/house12.jpg",
  "/images/house13.jpg",
  "/images/house14.jpg",
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
    <div className="container mx-auto p-8 bg-gray-50 text-gray-900 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">The Reddy Family</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          Dr. Reddy is blissfully married to his college sweetheart Dr. Shashikala (1983), an academic stalwart serving for years as the Professor of Microbiology at Osmania Medical College and elevated to the post of the Principal of Osmania Group of Institutions. Together, they made Mr. P. Vijay Vishal Reddy (1984) who established himself as an experienced serial entrepreneur in India and the UK.<br /><br />
          Shortly after, arrived Dr. P. Vijay Karan Reddy (1987), who gracefully exceeds his father's expectations in becoming a renowned Radiation Oncologist himself. Dr. Karan is married to Dr. Aashna Reddy (2016), a young and promising Dermatologist and together they bring the most intriguing ball of cheerfulness into the family, Ms. Anaika Karan Reddy (2020).
        </p>
      </header>

      <section aria-label="Main family photo" className="mb-10 cursor-pointer flex justify-center">
        <img
          src={familyPhoto}
          alt="Reddy Family"
          onClick={() => openModal(familyPhoto)}
          className="rounded-lg shadow-lg max-h-96 object-cover hover:opacity-90 transition-opacity duration-300"
        />
      </section>

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

      <section className="bg-blue-100 p-6 rounded-md text-center mx-auto max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Residence</h2>
        <address className="not-italic text-gray-800 leading-relaxed mb-4 text-base">
          Indraprasta, Plot No. 54A, Road No. 8, Site II Film Nagar,<br />
          Hyderabad 500 096,<br />
          Telangana, India.
        </address>
        <p className="text-blue-900 space-y-1 text-base">
          <a href="mailto:cancercare@drvijayanandreddy.com" className="underline hover:text-blue-700 block">cancercare@drvijayanandreddy.com</a>
          <a href="mailto:drvareddy_p@apollohospitals.com" className="underline hover:text-blue-700 block">drvareddy_p@apollohospitals.com</a>
        </p>
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
  );
};

export default FamilyPage;

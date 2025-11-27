import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiUser } from 'react-icons/fi';

const PhotoTestimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetched from TestimonialsPage - showing first 10 photos for homepage
  const patientGallery = [
    { image: "assets/testimonials/test-new-1.jpg" },
    { image: "assets/testimonials/test-new-2.jpg" },
    { image: "assets/testimonials/IMG_0638.webp" },
    { image: "assets/testimonials/IMG_0639.webp" },
    { image: "assets/testimonials/IMG_0640.webp" },
    { image: "assets/testimonials/IMG_0641.webp" },
    { image: "assets/testimonials/IMG_0642.webp" },
    { image: "assets/testimonials/IMG_0643.webp" },
    { image: "assets/testimonials/IMG_0644.webp" },
    { image: "assets/testimonials/IMG_1818.webp" },
  ];

  const openModal = (patient) => {
    setSelectedImage(patient);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Patient Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moments of hope, healing, and happiness with our patients and their families.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {patientGallery.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
              onClick={() => openModal(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(p)}
              aria-label={`Open large view for patient photo ${i + 1}`}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={`Patient testimonial ${i + 1}`}
                  className="w-full h-48 object-cover object-center transform transition-transform duration-200 ease-in-out hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-100 h-48">
                  <FiUser className="text-medical-blue w-12 h-12" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/testimonials"
            className="inline-block bg-medical-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-medical-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Patient Photos
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
            onClick={closeModal}
            onKeyDown={(e) => e.key === "Escape" && closeModal()}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] p-6 overflow-auto mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-medical-blue text-3xl z-10"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX />
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedImage.image}
                  alt="Patient testimonial"
                  className="rounded-lg max-h-[70vh] object-contain mb-4"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoTestimonials;

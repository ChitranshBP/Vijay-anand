import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
// import { gallery } from "./gallery_urls_full";
import {pageImages} from "./page_images_converted"

// Transform gallery data from gallery_urls_full.js
// Images with size dimensions (e.g., -300x198) are thumbnails
// Images without dimensions or with just the name are full images
const transformGalleryData = (pageImages) => {
  return pageImages.map(section => {
    const images = section.images || [];
    const imageGroups = {};

    // Group images by base name
    images.forEach(url => {
      const filename = url.split('/').pop();
      // Extract base name without dimensions
      const baseNameMatch = filename.match(/^(.+?)(?:-\d+x\d+)?(\.[^.]+)$/);
      if (baseNameMatch) {
        const baseName = baseNameMatch[1] + baseNameMatch[2];
        if (!imageGroups[baseName]) {
          imageGroups[baseName] = { thumbnails: [], full: [] };
        }

        // Check if it's a thumbnail (has dimensions like -300x198)
        if (filename.match(/-\d+x\d+\./)) {
          imageGroups[baseName].thumbnails.push(url);
        } else {
          imageGroups[baseName].full.push(url);
        }
      }
    });

    // Create thumbnail-full image pairs
    const transformedImages = [];
    Object.values(imageGroups).forEach((group) => {
      const fullImage = group.full[0] || group.thumbnails[group.thumbnails.length - 1];
      const thumbnail = group.thumbnails[0] || fullImage;

      if (fullImage) {
        transformedImages.push({
          thumbnail,
          fullImage
        });
      }
    });

    return {
      title: section.title,
      images: transformedImages
    };
  });
};

const gallerySections = transformGalleryData(pageImages);

const PrintGalleryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (sectionIdx, imgIdx) => {
    setCurrentSection(sectionIdx);
    setCurrentIndex(imgIdx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : gallerySections[currentSection].images.length - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev < gallerySections[currentSection].images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="min-h-screen mt-12 bg-white flex flex-col">
      <Header />

      {gallerySections.map((section, sectionIdx) => (
        <section key={sectionIdx} className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-medical-dark mb-6 text-center">
            {section.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {section.images.map((image, imgIdx) => (
              <button
                key={imgIdx}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer focus:outline-medical-blue"
                onClick={() => openModal(sectionIdx, imgIdx)}
              >
                <img
                  src={image.thumbnail}
                  alt={`${section.title} - clipping ${imgIdx + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>
      ))}

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <FiX />
          </button>
          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            onClick={prevImage}
          >
            <FiChevronLeft />
          </button>

          <img
            src={gallerySections[currentSection].images[currentIndex].fullImage}
            alt="Large view"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            onClick={nextImage}
          >
            <FiChevronRight />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PrintGalleryPage;

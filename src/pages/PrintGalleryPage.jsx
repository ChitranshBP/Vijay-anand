import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiChevronLeft, FiChevronRight, FiX, FiImage } from "react-icons/fi";
import { pageImages } from "./page_images_converted";
import { printGalleryImages } from "./print_gallery_images_converted";

// Transform gallery data
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

const digitalGallerySections = transformGalleryData(pageImages);
const printGallerySections = transformGalleryData(printGalleryImages);

const PrintGalleryPage = () => {
  const [activeTab, setActiveTab] = useState("print"); // "print" or "digital"
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallerySections = activeTab === "print" ? printGallerySections : digitalGallerySections;

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
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] pt-44  pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 medical-gradient"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-medical-blue/10 text-medical-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FiImage className="w-4 h-4 mr-2" />
              Media Coverage & Events
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight">
              Gallery
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of media coverage, events, and cancer awareness initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("print")}
              className={`px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 ${
                activeTab === "print"
                  ? "border-medical-blue text-medical-blue"
                  : "border-transparent text-gray-600 hover:text-medical-blue hover:border-gray-300"
              }`}
            >
              Print Gallery
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 ${
                activeTab === "digital"
                  ? "border-medical-blue text-medical-blue"
                  : "border-transparent text-gray-600 hover:text-medical-blue hover:border-gray-300"
              }`}
            >
              Digital Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="flex-grow">
        {gallerySections.map((section, sectionIdx) => (
          <section key={sectionIdx} className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-8 text-center">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {section.images.map((image, imgIdx) => (
                <button
                  key={imgIdx}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer focus:outline-medical-blue hover:shadow-xl transition-shadow duration-300"
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
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <FiX />
          </button>
          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
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
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
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

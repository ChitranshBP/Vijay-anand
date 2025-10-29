import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cancerClinics } from "./cancerClinics";
import { FiChevronLeft, FiChevronRight, FiCalendar, FiX } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CancerClinicDetailPage = () => {
  const { clinicId } = useParams();
  const clinic = cancerClinics.find((c) => c.id === clinicId);
  const [modalIdx, setModalIdx] = useState(null);
  const [currentBannerIdx, setCurrentBannerIdx] = useState(0);

  if (!clinic)
    return (
      <div className="p-32 text-center text-medical-dark text-xl font-semibold">
        Clinic not found.
      </div>
    );

  const currentPhotos = clinic.photos || [];

  const openModal = (idx) => {
    setModalIdx(idx);
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b mt-28 from-gray-50 to-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-medical-blue transition">Home</Link>
              <span>/</span>
              <Link to="/cancer-clinics" className="hover:text-medical-blue transition">Cancer Clinics</Link>
              <span>/</span>
              <span className="text-medical-dark font-medium">{clinic.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner Carousel */}
{clinic.banners && clinic.banners.length > 0 ? (
<div className="relative w-full h-[70vh] overflow-hidden group">
  {/* Banner Images */}
  {clinic.banners.map((banner, idx) => (
    <div
      key={idx}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center 20%',
      }}
      className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-700 ${
        idx === currentBannerIdx ? 'opacity-100' : 'opacity-0'
      }`}
    />
  ))}

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
        {clinic.title}
      </h1>
      {clinic.date && (
        <div className="flex items-center gap-2 text-white/90 text-lg">
          <FiCalendar className="w-5 h-5" />
          <span className="font-medium">
            {new Date(clinic.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      )}
    </div>
  </div>

  {/* Navigation Buttons - Only show if multiple banners */}
  {clinic.banners.length > 1 && (
    <>
      <button
        onClick={() => setCurrentBannerIdx((currentBannerIdx - 1 + clinic.banners.length) % clinic.banners.length)}
        aria-label="Previous banner"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100"
      >
        <FiChevronLeft className="text-medical-blue w-8 h-8" />
      </button>
      <button
        onClick={() => setCurrentBannerIdx((currentBannerIdx + 1) % clinic.banners.length)}
        aria-label="Next banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100"
      >
        <FiChevronRight className="text-medical-blue w-8 h-8" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {clinic.banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBannerIdx(idx)}
            aria-label={`Go to banner ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentBannerIdx
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </>
  )}
</div>
) : (
  <div className="relative w-full h-[40vh] bg-gradient-to-br from-medical-blue to-blue-700 overflow-hidden">
    <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
          {clinic.title}
        </h1>
        {clinic.date && (
          <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
            <FiCalendar className="w-5 h-5" />
            <span className="font-medium">
              {new Date(clinic.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  </div>
)}

        {/* Clinic Description */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-6 border-b-4 border-medical-blue inline-block pb-2">
              About This Clinic
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
              {clinic.description}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        {currentPhotos.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-medical-dark mb-8 text-center">
                Clinic Gallery
              </h2>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(idx)}
                  >
                    <img
                      src={photo}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-sm">View Full Size</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Photo Modal */}
        {modalIdx !== null && currentPhotos.length > 0 && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setModalIdx(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex items-center justify-center">
                <img
                  src={currentPhotos[modalIdx]}
                  alt={`Clinic photo enlarged`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Navigation Buttons */}
              {currentPhotos.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalIdx((modalIdx - 1 + currentPhotos.length) % currentPhotos.length)
                    }
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110"
                  >
                    <FiChevronLeft className="text-medical-blue w-8 h-8" />
                  </button>
                  <button
                    onClick={() =>
                      setModalIdx((modalIdx + 1) % currentPhotos.length)
                    }
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110"
                  >
                    <FiChevronRight className="text-medical-blue w-8 h-8" />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={() => setModalIdx(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-xl hover:scale-110"
              >
                <FiX className="text-medical-dark w-6 h-6" />
              </button>

              {/* Photo Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                {modalIdx + 1} / {currentPhotos.length}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CancerClinicDetailPage;

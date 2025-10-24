import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "./events";
import { FiChevronLeft, FiChevronRight, FiCalendar, FiX } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);
  const [modalIdx, setModalIdx] = useState(null);
  const [activeTab, setActiveTab] = useState("print");
  const [currentGallerySource, setCurrentGallerySource] = useState("print");

  if (!event)
    return (
      <div className="p-32 text-center text-medical-dark text-xl font-semibold">
        Event not found.
      </div>
    );

  // Check if event has gallery with tabs or just photos
  const hasGalleryTabs = event.gallery && typeof event.gallery === 'object' && (event.gallery.print || event.gallery.digital);
  const simplePhotos = event.photos || [];

  // Get current photos based on tab selection
  const getCurrentPhotos = () => {
    if (hasGalleryTabs) {
      return activeTab === "print" ? (event.gallery.print || []) : (event.gallery.digital || []);
    }
    return simplePhotos;
  };

  const currentPhotos = getCurrentPhotos();

  const openModal = (idx, source) => {
    setModalIdx(idx);
    setCurrentGallerySource(source);
  };

  const getModalPhotos = () => {
    if (hasGalleryTabs) {
      return currentGallerySource === "print" ? (event.gallery.print || []) : (event.gallery.digital || []);
    }
    return simplePhotos;
  };

  const modalPhotos = getModalPhotos();

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b  from-gray-50 to-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-medical-blue transition">Home</Link>
              <span>/</span>
              <Link to="/events" className="hover:text-medical-blue transition">Events</Link>
              <span>/</span>
              <span className="text-medical-dark font-medium">{event.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <div
            style={{ backgroundImage: `url(${event.banners[0]})` }}
            className="absolute inset-0 bg-cover  bg-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
                {event.title}
              </h1>
              {event.date && (
                <div className="flex items-center gap-2 text-white/90 text-lg">
                  <FiCalendar className="w-5 h-5" />
                  <span className="font-medium">
                    {new Date(event.date).toLocaleDateString('en-US', {
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

        {/* Event Description */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-6 border-b-4 border-medical-blue inline-block pb-2">
              About This Event
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        {(currentPhotos.length > 0 || hasGalleryTabs) && (
          <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-medical-dark mb-8 text-center">
                Event Gallery
              </h2>

              {/* Tabs for Print/Digital (if gallery has tabs) */}
              {hasGalleryTabs && (
                <div className="flex justify-center mb-8">
                  <div className="inline-flex rounded-lg bg-gray-100 p-1">
                    {event.gallery.print && (
                      <button
                        onClick={() => setActiveTab("print")}
                        className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                          activeTab === "print"
                            ? "bg-medical-blue text-white shadow-md"
                            : "text-gray-600 hover:text-medical-dark"
                        }`}
                      >
                        Print Media
                      </button>
                    )}
                    {event.gallery.digital && (
                      <button
                        onClick={() => setActiveTab("digital")}
                        className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                          activeTab === "digital"
                            ? "bg-medical-blue text-white shadow-md"
                            : "text-gray-600 hover:text-medical-dark"
                        }`}
                      >
                        Digital Media
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Photo Grid */}
              {currentPhotos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentPhotos.map((photo, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      onClick={() => openModal(idx, activeTab)}
                    >
                      <img
                        src={photo}
                        alt={`${activeTab} photo ${idx + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-semibold text-sm">View Full Size</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">No photos available in this category.</p>
              )}
            </div>
          </section>
        )}

        {/* Photo Modal */}
        {modalIdx !== null && modalPhotos.length > 0 && (
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
                  src={modalPhotos[modalIdx]}
                  alt={`Event photo enlarged`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Navigation Buttons */}
              {modalPhotos.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalIdx((modalIdx - 1 + modalPhotos.length) % modalPhotos.length)
                    }
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110"
                  >
                    <FiChevronLeft className="text-medical-blue w-8 h-8" />
                  </button>
                  <button
                    onClick={() =>
                      setModalIdx((modalIdx + 1) % modalPhotos.length)
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
                {modalIdx + 1} / {modalPhotos.length}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EventDetailPage;

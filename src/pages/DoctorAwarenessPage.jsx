import React, { useState } from 'react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteSection from '../components/QuoteSection';
import survivorQuotes from '../../public/assets/quotes';

const videos = [
  "-p-iSRQ2Q3M",
  "3-vYVBLcymc",
  "43BZ_zJaCic",
  "6IhA7eBQdok",
  "AM2OpsmQlOA",
  "bx_3xqmjN6E",
  "cJqB7BJnEpA",
  "fK6-R6bFZS8",
  "ghGhuNyegh8",
  "JSOOg2GDS4I",
  "JzqqHLi7098",
  "kB4U67tiQLA",
  "KdLVuQaeAHw",
  "Kyhtlr2kyMs",
  "LIEt0PNL4Ss",
  "LNkQZGJ61ZI",
  "LxlfTaVyZlI",
  "N63ud9sPcks",
  "nrp-tyWqofA",
  "nrX6RbnurzM",
  "o_k5Km80vuk",
  "PwW-C8PpoJU",
  "S6w5qPEbgwI",
  "senX4PBijuU",
  "svTp1xH840o",
  "T7GVgJjNUoQ",
  "tF_qKCOSL4s",
  "tHs_KLKuBbw",
  "tueNCxI1IjE",
  "txcWu_E72Eg",
  "U5lMee47rRU",
  "ugvDtjZrXxE",
  "V1eUMbztdUM",
  "VTBuy0C0X14",
  "vytiPIeSkCs",
  "ZyMfsjqR9iE"
];


const YOUTUBE_CHANNEL_LINK = "https://www.youtube.com/channel/CHANNEL_ID"; // update this

const DoctorAwarenessTalks = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalVideoId, setModalVideoId] = useState(null);

  const displayedVideos = showAll ? videos : videos.slice(0, 9);

  const openModal = (videoId) => {
    setModalVideoId(videoId);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalVideoId(null);
    document.body.style.overflow = 'auto';
  };

  return (

    <>
  <Header />
    <div className="min-h-screen mt-24 bg-white flex flex-col">

      {/* Hero with breadcrumb */}
      <section className="pt-28 pb-14 bg-medical-blue/10 text-center">
        <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Doctor Awareness Talks</h1>
        <nav className="text-medical-blue font-medium text-lg flex justify-center gap-2">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <span className="text-medical-dark font-semibold">Awareness Talks</span>
        </nav>
      </section>

      {/* Videos grid */}
      <main className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVideos.map(videoId => (
            <div
              key={videoId}
              onClick={() => openModal(videoId)}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              role="button"
              tabIndex={0}
              aria-label="Open video"
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openModal(videoId)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video thumbnail"
                loading="lazy"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black bg-opacity-50 rounded-full p-4">
                  <FiPlay className="text-white w-10 h-10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More button */}
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-medical-blue text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-medical-dark transition"
            >
              View More Videos
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href={YOUTUBE_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-medical-blue text-white font-bold text-lg px-9 py-4 rounded-full shadow hover:bg-medical-dark transition"
          >
            Visit Our YouTube Channel
            <FiArrowRight className="w-6 h-6" />
          </a>
        </div>
      </main>

      {/* Modal */}
      {modalVideoId && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white text-4xl font-bold hover:text-red-500 focus:outline-none"
              aria-label="Close video modal"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              title="Doctor Awareness Talk Video"
              className="rounded"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
    <QuoteSection quoteId={67} quotes={survivorQuotes} />
    <Footer />
    </>
    
  );
};

export default DoctorAwarenessTalks;

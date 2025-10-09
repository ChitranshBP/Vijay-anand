import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "./events";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);
  const [modalIdx, setModalIdx] = useState(null);

  if (!event)
    return (
      <div className="p-32 text-center text-medical-dark text-xl font-semibold">
        Event not found.
      </div>
    );

  return (
    <>
    <Header/>
     <div className="bg-gray-50 mt-24 min-h-screen pb-24">
      {/* Full width top banner */}
      <div
        style={{ backgroundImage: `url(${event.banners[0]})` }}
        className="w-full h-[60vh] bg-cover bg-center relative shadow-lg"
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {event.title}
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 pt-12 mb-14 text-center">
        <p className="text-medical-dark text-lg leading-relaxed whitespace-pre-wrap">
          {event.description}
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-medical-blue mb-8 text-center">
          Event Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {event.photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt={`Event photo ${idx + 1}`}
              className="w-full h-44 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
              loading="lazy"
              onClick={() => setModalIdx(idx)}
            />
          ))}
        </div>
      </section>

      {/* Photo Modal */}
      {modalIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setModalIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={event.photos[modalIdx]}
              alt={`Event photo enlarged`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            {event.photos.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setModalIdx((modalIdx - 1 + event.photos.length) % event.photos.length)
                  }
                  aria-label="Previous photo"
                  className="absolute left-5 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-90 transition"
                >
                  <FiChevronLeft className="text-medical-blue w-7 h-7" />
                </button>
                <button
                  onClick={() =>
                    setModalIdx((modalIdx + 1) % event.photos.length)
                  }
                  aria-label="Next photo"
                  className="absolute right-5 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-90 transition"
                >
                  <FiChevronRight className="text-medical-blue w-7 h-7" />
                </button>
              </>
            )}
            <button
              onClick={() => setModalIdx(null)}
              aria-label="Close photo"
              className="absolute top-6 right-6 bg-white bg-opacity-80 rounded-full px-4 py-2 text-lg font-bold hover:bg-opacity-90 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
   
  );
};

export default EventDetailPage;

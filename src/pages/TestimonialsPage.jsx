import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiUser, FiX } from "react-icons/fi";
import Test from "../components/Test"

const patientGallery = [
  { image: "assets/testimonials/IMG_0638.webp" },
  { image: "assets/testimonials/IMG_0639.webp" },
  { image: "assets/testimonials/IMG_0640.webp" },
  { image: "assets/testimonials/IMG_0641.webp" },
  { image: "assets/testimonials/IMG_0642.webp" },
  { image: "assets/testimonials/IMG_0643.webp" },
  { image: "assets/testimonials/IMG_0644.webp" },
  { image: "assets/testimonials/IMG_1818.webp" },
  { image: "assets/testimonials/IMG_2093.webp" },
  { image: "assets/testimonials/IMG_2096.webp" },
  { image: "assets/testimonials/IMG_2098.webp" },
  { image: "assets/testimonials/IMG_2099.webp" },
  { image: "assets/testimonials/IMG_8069.webp" },
  { image: "assets/testimonials/IMG_8070.webp" },
  { image: "assets/testimonials/IMG_8073.webp" },
  { image: "assets/testimonials/IMG_8074.webp" },
  { image: "assets/testimonials/IMG_8076.webp" },
  { image: "assets/testimonials/IMG_8079.webp" },
  { image: "assets/testimonials/IMG_9318.webp" },
  { image: "assets/testimonials/IMG_9479.webp" },
  { image: "assets/testimonials/IMG_9488.webp" },
  { image: "assets/testimonials/IMG_9490.webp" },
  { image: "assets/testimonials/IMG_9491.webp" },
  { image: "assets/testimonials/IMG_9492.webp" },
  { image: "assets/testimonials/IMG_9493.webp" },
  { image: "assets/testimonials/IMG_9497.webp" },
  { image: "assets/testimonials/IMG_9502.webp" },
  { image: "assets/testimonials/IMG_9509.webp" },
  { image: "assets/testimonials/IMG_9510.webp" },
  { image: "assets/testimonials/IMG_9518.webp" },
];

const youtubeTestimonials = [
  {
    id: "ugvDtjZrXxE",
    thumbnail: "https://img.youtube.com/vi/ugvDtjZrXxE/hqdefault.jpg",
    title: "Talk by a cancer survivor | Happy Patient | Best Cancer/ Radiation oncology doctor in india",
  },
  {
    id: "hefT59hk4Tk",
    thumbnail: "https://img.youtube.com/vi/hefT59hk4Tk/hqdefault.jpg",
    title: "What do my patients think about my treatment?",
  },
  {
    id: "_fQ1-kAPh64",
    thumbnail: "https://img.youtube.com/vi/_fQ1-kAPh64/hqdefault.jpg",
    title: "Stage 3 Breast Cancer",
  },
  {
    id: "MaWOvdr6RDw",
    thumbnail: "https://img.youtube.com/vi/MaWOvdr6RDw/hqdefault.jpg",
    title: "Cervical Cancer Treatment",
  },
  {
    id: "532AAKNrSb4",
    thumbnail: "https://img.youtube.com/vi/532AAKNrSb4/hqdefault.jpg",
    title: "Vocal Cord Radiation Treatment",
  },
  {
    id: "C_qQ8O6LnS0",
    thumbnail: "https://img.youtube.com/vi/C_qQ8O6LnS0/hqdefault.jpg",
    title: "I am a survivor",
  },
  {
    id: "EpnMFGogu4g",
    thumbnail: "https://img.youtube.com/vi/EpnMFGogu4g/hqdefault.jpg",
    title: "Mr Naresh Chand Goel recalls his experience with Breast Cancer & Esophagus Cancer.",
  },
  {
    id: "_O3k6TzS1NE",
    thumbnail: "https://img.youtube.com/vi/_O3k6TzS1NE/hqdefault.jpg",
    title: "Mr Gopal Rao talks about his experience with Oral Cancer.",
  },
  {
    id: "Fctiw6Lqhd0",
    thumbnail: "https://img.youtube.com/vi/Fctiw6Lqhd0/hqdefault.jpg",
    title: "Sunitha Kumari shares her experience with cancer.",
  },
  {
    id: "8DqwIx_2sek",
    thumbnail: "https://img.youtube.com/vi/8DqwIx_2sek/hqdefault.jpg",
    title: "Ms. Sravanthy is full of praise for Dr. Reddy's treatment.",
  },
  {
    id: "hvNsBe1vxUM",
    thumbnail: "https://img.youtube.com/vi/hvNsBe1vxUM/hqdefault.jpg",
    title: "Ms. Bramara speaks about her diagnosis of Breast Cancer.",
  },
  {
    id: "WBs7btOnJt0",
    thumbnail: "https://img.youtube.com/vi/WBs7btOnJt0/hqdefault.jpg",
    title: "A patient's brother talks about her cancer experience.",
  },
  {
    id: "pbILSeAS32w",
    thumbnail: "https://img.youtube.com/vi/pbILSeAS32w/hqdefault.jpg",
    title: "B. C Jain, 64 years, Tongue Cancer",
  },
  {
    id: "0FGKF2_dWtY",
    thumbnail: "https://img.youtube.com/vi/0FGKF2_dWtY/hqdefault.jpg",
    title: "J. Nageswara Rao, 70 years, Ca Esophagus",
  },
  {
    id: "dQBfT-0xEKU",
    thumbnail: "https://img.youtube.com/vi/dQBfT-0xEKU/hqdefault.jpg",
    title: "Keshav Rao P. Patve, Oral Cancer",
  },
];


const IMAGES_PER_PAGE = 10;
const VIDEOS_PER_PAGE = 3;
const TestimonialPage = () => {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [videoPage, setVideoPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const visibleVideos = youtubeTestimonials.slice(0, videoPage * VIDEOS_PER_PAGE);

  const loadMoreVideos = () => {
    setVideoPage((prev) => Math.min(prev + 1, Math.ceil(youtubeTestimonials.length / VIDEOS_PER_PAGE)));
  };




  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (modalOpen) setModalOpen(false);
        if (selectedVideo) setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen, selectedVideo]);

  const openModal = (patient) => {
    setSelectedImage(patient);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  const openVideo = (id) => setSelectedVideo(id);
  const closeVideo = () => setSelectedVideo(null);

  const loadMoreImages = () => {
    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, patientGallery.length));
  };

  const visibleImages = patientGallery.slice(0, visibleCount);

  return (
    
    <div className=" mt-12 min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-10 text-center bg-medical-blue/10">
        <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">Patient Testimonials</h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          Real stories, real recovery. Hear directly from patients and their families about their journey to healing and hope, guided by Dr. Vijay Anand Reddy.
        </p>
      </section>
<Test/>
      {/* Patient Gallery with Pagination */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-medical-dark mb-10 text-center">Patient Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {visibleImages.map((p, i) => (
              <div
                key={i}
                className="relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openModal(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(p)}
                aria-label={`Open large view for ${p.name}`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover object-center transform transition-transform duration-200 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-gray-100 h-40">
                    <FiUser className="text-medical-blue w-12 h-12" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-1 rounded-b-lg select-none opacity-0 hover:opacity-100 transition-opacity duration-200">
                  {p.name}
                </div>
              </div>
            ))}
          </div>
          {visibleCount < patientGallery.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMoreImages}
                className="px-6 py-3 rounded-lg bg-medical-blue text-white font-semibold hover:bg-medical-dark transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          onClick={closeModal}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
        >
          <div
            className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-medical-blue text-3xl"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FiX />
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="rounded-lg max-h-[70vh] object-contain mb-4"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-medical-dark mb-2">{selectedImage.name}</h3>
              {selectedImage.quote && (
                <p className="text-gray-700 text-center text-lg italic">{`"${selectedImage.quote}"`}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* YouTube Testimonials Section (unchanged, place below the gallery) */}
  <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-medical-dark mb-8 text-center">
            Watch Our Patient Stories
          </h2>

          {!selectedVideo ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {visibleVideos.map((video) => (
                  <button
                    key={video.id}
                    className="relative rounded-lg overflow-hidden shadow-lg bg-white focus:outline-none transition hover:scale-105"
                    onClick={() => openVideo(video.id)}
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-56 object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white opacity-90" fill="none" viewBox="0 0 68 48">
                        <rect width="68" height="48" rx="8" fill="#000" fillOpacity="0.5" />
                        <path d="M45 24L27 34V14l18 10z" fill="#fff" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-base font-bold px-4 py-2">
                      {video.title}
                    </div>
                  </button>
                ))}
              </div>

              {visibleVideos.length < youtubeTestimonials.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={loadMoreVideos}
                    className="px-6 py-3 rounded-lg bg-medical-blue text-white font-semibold hover:bg-medical-dark transition"
                  >
                    Load More Videos
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Patient Testimonial Video"
                  className="w-full h-full"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                onClick={closeVideo}
                className="bg-medical-blue text-white px-6 py-2 rounded font-semibold hover:bg-medical-dark transition"
              >
                Back to Gallery
              </button>
            </div>
          )}
        </div>
      </section>
      {/*...YouTube testimonials code here... */}

      <Footer />
    </div>
  );
};

export default TestimonialPage;

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const photos = [
  "assets/cure-foundation/cure-1.png",
  "assets/cure-foundation/cure-2.jpg",
  "assets/cure-foundation/cure-3.jpg"
];

const EVENT_LINK = "http://www.curefoundationindia.com"; // Replace with actual Cure Foundation link


const Carousel = ({ images, interval = 5000 }) => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(
        () => setCurrent((c) => (c + 1) % images.length),
        interval
      );
      return () => clearTimeout(timer);
    }, [current, images.length, interval]);
  
    const prevSlide = () =>
      setCurrent((c) => (c - 1 + images.length) % images.length);
  
    const nextSlide = () =>
      setCurrent((c) => (c + 1) % images.length);
  
    return (
      <div className="relative w-full h-80 md:h-[500px] overflow-hidden shadow-md">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`CURE Foundation banner ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            loading="lazy"
          />
        ))}
  
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20 transition"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20 transition"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-7 h-7" />
        </button>
  
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full border border-white transition ${
                current === i ? "bg-medical-blue" : "bg-white opacity-70"
              }`}
            />
          ))}
        </div>
  
        {/* Overlay Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">CURE Foundation</h1>
          <p className="text-lg md:text-xl font-semibold text-white">
            Cancer Awareness, Prevention & Care
          </p>
        </div>
      </div>
    );
  };

const CureFoundationPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />

    {/* Hero Section */}
    <section className="pt-20">
      <Carousel images={photos} />
    </section>

    {/* Breadcrumb Section */}
    {/* <nav className="bg-gray-100 py-3 px-6 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="hover:text-medical-blue">Home</a>
          </li>
          <li>/</li>
          <li className="text-medical-blue font-semibold">CURE Foundation</li>
        </ol>
      </div>
    </nav> */}

    {/* Content Section */}
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-xl border border-blue-100 py-10 px-8 md:px-12 text-lg leading-relaxed text-medical-dark">
          
          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">About CURE Foundation</h3>
            <p>
              CURE Foundation is a spirited initiative to create consciousness on{" "}
              <span className="font-semibold text-medical-blue">cancer prevention, early detection, cure & rehabilitation</span>{" "}
              especially for the needful. In addition to spreading awareness for the benefit of society, 
              the Foundation has so far made available quality cancer treatment, both free and subsidized, 
              to more than <span className="font-semibold">1100+ needy patients</span>, and engaged in numerous rehabilitation, research and education programs. 
              CURE is a <span className="font-semibold">non-profit organization</span>.
            </p>
          </div>

          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">Cancer Awareness & Education</h3>
            <p>
              Furthermore, CURE will educate both doctors and patients about symptoms and clinical signs of cancer 
              in order to make the proverbial{" "}
              <span className="font-semibold">“nipping in the bud”</span> of cancer a reality.
            </p>
          </div>

          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">Global Network & Multidisciplinary Care</h3>
            <p>
              The CURE Foundation network includes specialists in reputed hospitals all over the world, 
              allowing impoverished patients access they would not have otherwise attained. 
              The foundation can put together the world’s best technologies, techniques, and experts to serve this cause. 
              CURE promises to convene a{" "}
              <span className="font-semibold">multi-modality Tumor Board</span>, 
              in which specialists from all oncologic branches will come together to ensure 
              that each patient receives unbiased opinions regarding treatment.
            </p>
          </div>

          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">Commitment to Research & Innovation</h3>
            <p>
              Undoubtedly, the future of oncology lies in research, so CURE Foundation will undertake 
              active scientific and clinical research.
            </p>
          </div>

          <div className="border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">Knowledge Sharing & Medical Fraternity Support</h3>
            <p>
              Because knowledge grows by sharing, CURE Foundation will also promote scientific exchange and the spread of knowledge 
              by organizing conferences, seminars, and workshops. The foundation will endeavour to update the medical fraternity 
              with the latest techniques and provide a comprehensive databank to help doctors dispel the ambiguity inherent in diagnosing and treating cancer.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-12 bg-medical-blue">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Support CURE Foundation
          </h2>
          <p className="text-white/90 mb-2 md:mb-0">
            Join the mission or learn more at the official CURE Foundation website.
          </p>
        </div>
        <a
          href={EVENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white text-medical-blue text-lg font-bold rounded-2xl shadow-md hover:bg-blue-50 hover:scale-105 transition"
        >
          Visit CURE Foundation
          <FiArrowRightCircle className="w-7 h-7" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default CureFoundationPage;

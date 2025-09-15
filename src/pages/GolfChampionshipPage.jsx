import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiArrowRightCircle,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

const photos = [
  "assets/golf-championship/golf-1.jpg",
  "assets/golf-championship/golf-2.jpg",
  "assets/golf-championship/golf-3.png"
];

const EVENT_LINK = "https://www.cancercrusadersgolf.com/";

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
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-b-3xl shadow-md">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Cancer Crusaders Golf banner ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 rounded-b-3xl ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          loading="lazy"
        />
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white px-4 z-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Cancer Crusaders Golf Championship
        </h1>
        <p className="text-lg md:text-xl font-semibold">
          by Cure Foundation
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-30 transition"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-30 transition"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-7 h-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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
    </div>
  );
};

const GolfChampionshipPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />

    {/* Hero Section with Banner */}
    <section className="pt-20">
      <Carousel images={photos} />
    </section>

    {/* Content Section */}
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-xl border border-blue-100 py-10 px-8 md:px-12 text-lg leading-relaxed text-medical-dark">
          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">About the Event</h3>
            <p>
              Cancer Crusaders Golf Championship is a{" "}
              <span className="font-semibold text-medical-blue">
                fundraiser and awareness initiative
              </span>{" "}
              by Cure Foundation. Through this event, we intend to{" "}
              <span className="font-semibold">
                raise money and spread cancer awareness
              </span>{" "}
              in the society through extensive participation from ace golfers,
              outstanding sports persons, celebrity figures, and opinion leaders.
            </p>
          </div>

          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">Community Impact</h3>
            <p>
              This will be a remarkable day as the leaders of the community set
              an impactful example through participation and declare support to
              this virtuous cause. It will be a fulfilling day of social service
              along with great fun.
            </p>
          </div>

          <div className="mb-8 border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">Player Appreciation</h3>
            <p>
              Needless to say, as our token of appreciation, each player is
              guaranteed{" "}
              <span className="font-semibold">three prizes</span> and an equal
              number of goodies!
            </p>
          </div>

          <div className="border-l-4 border-medical-blue pl-4">
            <h3 className="text-2xl font-semibold mb-3">
              Walk of Life & Celebration
            </h3>
            <p>
              Besides the tournament, we promise you a{" "}
              <span className="font-semibold">fun filled ‘Walk of Life’</span>,
              followed by cocktail and dinner that will take place at Novotel
              Hyderabad Convention Centre. The Walk of Life itself is a custom
              designed format lasting about 40 minutes, designed to entertain
              and give celebrities an opportunity to take a shot at the game.
              Our aim is to create a fun, yet unique environment where
              celebrities get to interact among themselves and with the audience
              and golfers.
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
            Support the Cause
          </h2>
          <p className="text-white/90 mb-2 md:mb-0">
            Join the championship or learn more at the Cure Foundation official
            website.
          </p>
        </div>
        <a
          href={EVENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white text-medical-blue text-lg font-bold rounded-2xl shadow-md hover:bg-blue-50 hover:scale-105 transition"
        >
          Visit Cure Foundation
          <FiArrowRightCircle className="w-7 h-7" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default GolfChampionshipPage;

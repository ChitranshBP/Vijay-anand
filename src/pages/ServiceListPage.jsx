import React from "react";
import { services } from "./services";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ServiceListPage = () => {

  return (
    <>
     <Header/>
     <div className="bg-gray-50 mt-20 min-h-screen py-16">
      {/* Page Header */}
<section
  className="bg-medical-blue/10 py-12 px-4 sm:px-6 lg:px-8"
  aria-labelledby="cancer-oncology-services"
>
  <div className="max-w-5xl mx-auto text-center">
    <h2
      id="cancer-oncology-services"
      className="text-4xl md:text-5xl font-extrabold text-medical-dark mb-4 animate-fade-in"
    >
      Our Cancer & Oncology Services
    </h2>
    <p className="text-medical-blue font-medium text-lg md:text-xl max-w-2xl mx-auto animate-fade-in delay-200">
      Explore advanced treatments, state-of-the-art technologies, and compassionate care for every type and stage.
    </p>
  </div>
</section>

      {/* Responsive Card Grid */}
      <div className="container mt-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {Object.values(services).map(({ id, title, bannerImage, summary }) => (
          <a
            key={id}
            href={`/services/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white border border-blue-100 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer overflow-hidden focus:outline-medical-blue block"
            aria-label={`View details about ${title}`}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                src={bannerImage}
                alt={`Banner for ${title}`}
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col justify-between min-h-[180px]">
              <h2 className="text-2xl font-bold text-medical-dark mb-2">
                {title}
              </h2>
              <p className="text-gray-600 mb-5 line-clamp-3">{summary}</p>
              <span className="flex items-center gap-2 text-medical-blue font-semibold mt-auto group-hover:underline">
                Learn More <FiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
    <Footer />
    </>
   
  );
};

export default ServiceListPage;

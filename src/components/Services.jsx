import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiTarget, FiShield, FiHeart, FiActivity, FiBrain, FiEye, FiSun } = FiIcons;

const Services = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
  {
    id: "pancreaticCancer",
    icon: FiActivity,
    title: "Pancreatic Cancer",
    description: "Personalized treatments with expert team and unmatched experience for advanced pancreatic cancer care",
    image: "assets/services/Pancreatic-Cancer.jpg",
    features: ["Whipple Procedure", "Chemotherapy Protocols", "Precision Radiation", "Palliative Care"]
  },
  {
    id: "adrenalCancer",
    icon: FiShield,
    title: "Adrenal Cancer",
    description: "Expert diagnosis and personalized treatment using latest medical advances for adrenal tumors",
    image: "assets/services/Adrenal-Cancer.jpg",
    features: ["Advanced Imaging", "Surgical Treatment", "Targeted Therapies", "Hormone Management"]
  },
  {
    id: "protonTherapy",
    icon: FiZap,
    title: "Proton Therapy",
    description: "Effective targeted cancer treatment with minimized side effects, especially for tumors near vital organs",
    image: "assets/services/proton-therapy.jpeg",
    features: ["High Precision Radiation", "Minimal Side Effects", "Pediatric Cancer Care", "Organ Preservation"]
  },
  {
    id: "radiationOncology",
    icon: FiTarget,
    title: "Radiation Oncology",
    description: "Precise, technologically advanced cancer treatment with expert clinical support in Hyderabad",
    image: "assets/services/radiation-vijay.jpg",
    features: ["IMRT/IGRT", "External Beam Therapy", "Brachytherapy", "Stereotactic Radiosurgery"]
  },
  {
    id: "throatCancer",
    icon: FiBrain,
    title: "Throat Cancer",
    description: "Expert diagnosis, advanced surgery and radiation, plus holistic support for optimal outcomes",
    image: "assets/services/throat-cancer.webp",
    features: ["Minimally Invasive Surgery", "Targeted Radiation", "Speech Rehabilitation", "Swallowing Therapy"]
  }];


  return (
    <section id="services" className="py-14 medical-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Comprehensive Cancer Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art treatments and compassionate care across all cancer specialties, 
            tailored to each patient's unique needs and circumstances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg card-hover group overflow-hidden">

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-medical-blue" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-medical-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) =>
                <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-medical-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                )}
                </ul>

                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="text-medical-blue font-semibold hover:text-medical-purple transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-medical-dark mb-4">
              Need a Consultation?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized treatment recommendations from Dr. Vijay Anand Reddy and his expert team.
            </p>
            <a
              href="#contact"
              className="inline-block bg-medical-blue text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default Services;
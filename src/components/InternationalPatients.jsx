import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe } = FiIcons;

const InternationalPatients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const globalStats = [
  { number: "45+", label: "Countries", description: "Patients from across the globe" },
  { number: "3,200+", label: "International Patients", description: "Successfully treated" },
  { number: "96%", label: "Success Rate", description: "International patient outcomes" },
  { number: "24/7", label: "Global Support", description: "International patient care" }];


  const countries = [
  { name: "United States", flag: "🇺🇸", patients: "450+", testimonial: "World-class care in India" },
  { name: "United Kingdom", flag: "🇬🇧", patients: "320+", testimonial: "Exceptional expertise" },
  { name: "Canada", flag: "🇨🇦", patients: "280+", testimonial: "Best decision ever made" },
  { name: "Australia", flag: "🇦🇺", patients: "240+", testimonial: "Outstanding treatment" },
  { name: "Germany", flag: "🇩🇪", patients: "190+", testimonial: "Highly recommended" },
  { name: "UAE", flag: "🇦🇪", patients: "380+", testimonial: "Trust and excellence" },
  { name: "Singapore", flag: "🇸🇬", patients: "150+", testimonial: "Professional care" },
  { name: "Japan", flag: "🇯🇵", patients: "120+", testimonial: "Advanced technology" }];


  return (
    <section id="international-patients" className="py-14 medical-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2" />
            Trusted by Patients Worldwide
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Global Recognition &
            <span className="text-medical-blue block">International Patient Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Patients from over 45 countries trust Dr. Vijay Anand Reddy for world-class cancer treatment, 
            combining advanced technology with compassionate care at international standards.
          </p>
        </motion.div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {globalStats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg card-hover border border-blue-100">

              <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, type: "spring" }}
              className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">

                {stat.number}
              </motion.div>
              <h3 className="text-xl font-bold text-medical-dark mb-3">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          )}
        </div>

        {/* Countries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-16">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-medical-dark mb-4">
              Patients from Around the World
            </h3>
            <p className="text-gray-600 text-lg">
              International patients choose Dr. Reddy for his expertise and India's advanced healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-medical-light p-6 rounded-xl hover:shadow-md transition-all duration-300 text-center">

                <div className="text-4xl mb-3">{country.flag}</div>
                <h4 className="font-bold text-medical-dark mb-2">{country.name}</h4>
                <div className="text-2xl font-bold text-medical-blue mb-2">{country.patients}</div>
                <p className="text-gray-600 text-sm italic">"{country.testimonial}"</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Global Community</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Experience world-class cancer care that has made Dr. Vijay Anand Reddy the trusted choice 
              for international patients seeking the best treatment outcomes.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg flex items-center space-x-2 mx-auto">
              <SafeIcon icon={FiGlobe} className="w-5 h-5" />
              <span>Contact International Patient Services</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default InternationalPatients;
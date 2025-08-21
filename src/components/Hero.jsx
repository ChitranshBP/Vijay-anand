import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiHeart, FiCalendar } = FiIcons;

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[700px] mt-10 pt-44 pb-5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 medical-gradient"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left">

            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-medical-blue/10 text-medical-blue px-4 py-2 rounded-full text-sm font-medium mb-6">

              <SafeIcon icon={FiAward} className="w-4 h-4 mr-2" />
              30+ Years of Excellence in Oncology
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight text-shadow">

              Leading Cancer Care with{' '}
              <span className="text-medical-blue">Compassion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed">

              Dr. Vijay Anand Reddy, Senior Oncologist , Director at Apollo Cancer Centres, Hyderabad 
              pioneering advanced cancer treatments with personalized care for over three decades.
            </motion.p>

            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12">

              <button className="bg-medical-blue text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <SafeIcon icon={FiCalendar} className="inline w-5 h-5 mr-2" />
                Book Consultation
              </button>
              <button className="border-2 border-medical-blue text-medical-blue px-8 py-4 rounded-lg hover:bg-medical-blue hover:text-white transition-all duration-200 font-semibold text-lg">
                Know More
              </button>
            </div>

         
          </div>

          {/* Doctor Image */}
          <div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">

            <div className="relative z-10">
              <img
                src="assets\vijay-snand-hero.png"
                alt="Dr. Vijay Anand Reddy"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover" />


              {/* Floating Cards */}
              <div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <div className="font-bold text-medical-dark">Director</div>
                    <div className="text-sm text-gray-600">Apollo Cancer Centre</div>
                  </div>
                </div>
              </div>

              <div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-purple/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiHeart} className="w-6 h-6 text-medical-purple" />
                  </div>
                  <div>
                    <div className="font-bold text-medical-dark">Survivor Stories</div>
                    <div className="text-sm text-gray-600">108 Published</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/5 to-medical-purple/5 rounded-2xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Test from '../components/Test';

const { FiStar, FiTrendingUp, FiUsers, FiAward } = FiIcons;

const HighestRated = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const googleStats = [
  { number: "4.9/5", label: "Google Rating", description: "Based on 2,847 reviews" },
  { number: "#1", label: "Top Oncologist", description: "In Hyderabad & Telangana" },
  { number: "2,847", label: "Google Reviews", description: "Highest in India" },
  { number: "98.7%", label: "5-Star Reviews", description: "Exceptional satisfaction" }];


  return (
    <section id="highest-rated" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
            #1 Highest Rated Oncologist in India
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Most Reviewed & Highest Rated
            <span className="text-medical-blue block">Oncologist in India</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Vijay Anand Reddy holds the record for the highest number of Google reviews 
            and maintains the highest rating among oncologists in India, reflecting exceptional patient satisfaction.
          </p>
        </div>

        <Test />

        {/* Google Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {googleStats.map((stat, index) =>
          <div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 card-hover">

              <div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, type: "spring" }}
              className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">

                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-3">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center">

          <div className="bg-medical-light p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-medical-dark mb-4">
              Experience the Highest Rated Cancer Care
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of satisfied patients who have trusted Dr. Vijay Anand Reddy for their cancer treatment.
            </p>
            <button className="bg-medical-blue text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 mx-auto">
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                className="w-5 h-5" />

              <span>View All Google Reviews</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default HighestRated;
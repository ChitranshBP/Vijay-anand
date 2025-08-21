import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiTrendingUp, FiAward, FiHeart, FiClock, FiGlobe, FiShield, FiStar, FiBrain } = FiIcons;

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const mainStats = [
  {
    icon: FiUsers,
    number: "10,000+",
    label: "Patients Treated",
    description: "Successfully treated patients across all cancer types"
  },
  {
    icon: FiTrendingUp,
    number: "95%",
    label: "Success Rate",
    description: "5-year survival rate improvement"
  },
  {
    icon: FiClock,
    number: "30+",
    label: "Years Experience",
    description: "Decades of expertise in oncology"
  },
  {
    icon: FiStar,
    number: "98%",
    label: "Patient Satisfaction",
    description: "Patients recommend Dr. Reddy"
  }];


  const treatmentStats = [
  { label: "Radiation Therapy Cases", value: "5,000+", growth: "+15%" },
  { label: "Surgical Procedures", value: "3,200+", growth: "+12%" },
  { label: "Chemotherapy Treatments", value: "4,800+", growth: "+18%" },
  { label: "Follow-up Consultations", value: "15,000+", growth: "+20%" },
  { label: "Clinical Research Papers", value: "150+", growth: "+8%" },
  { label: "International Conferences", value: "75+", growth: "+10%" }];


  const specialtyStats = [
  {
    icon: FiBrain,
    specialty: "Brain & CNS Tumors",
    cases: "850+",
    successRate: "92%"
  },
  {
    icon: FiHeart,
    specialty: "Breast Cancer",
    cases: "1,200+",
    successRate: "96%"
  },
  {
    icon: FiShield,
    specialty: "Lung Cancer",
    cases: "900+",
    successRate: "88%"
  },
  {
    icon: FiGlobe,
    specialty: "Head & Neck Cancer",
    cases: "750+",
    successRate: "94%"
  }];


  return (
    <section id="stats" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Patient Success Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in outstanding patient outcomes, 
            high satisfaction rates, and successful treatment statistics.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) =>
          <div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-8 bg-medical-light rounded-2xl card-hover">

              <div className="w-20 h-20 bg-medical-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={stat.icon} className="w-10 h-10 text-medical-blue" />
              </div>
              
              <div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, type: "spring" }}
              className="text-4xl md:text-5xl font-bold text-medical-blue mb-2">

                {stat.number}
              </div>
              
              <h3 className="text-xl font-bold text-medical-dark mb-3">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          )}
        </div>

        {/* Treatment Statistics */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-medical-blue to-medical-purple p-8 md:p-12 rounded-2xl text-white mb-16">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Treatment Volume & Growth</h3>
            <p className="text-blue-100 text-lg">
              Comprehensive treatment statistics showing consistent growth and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentStats.map((stat, index) =>
            <div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">

                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg">{stat.label}</h4>
                  <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold">
                    {stat.growth}
                  </span>
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            )}
          </div>
        </div>

        {/* Specialty Success Rates */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-medical-dark mb-4">
              Specialty Success Rates
            </h3>
            <p className="text-gray-600 text-lg">
              Outstanding outcomes across different cancer specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialtyStats.map((specialty, index) =>
            <div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="p-6 border-2 border-gray-100 rounded-2xl hover:border-medical-blue transition-all duration-300 group">

                <div className="w-16 h-16 bg-medical-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-medical-blue transition-all duration-300">
                  <SafeIcon icon={specialty.icon} className="w-8 h-8 text-medical-blue group-hover:text-white" />
                </div>
                
                <h4 className="font-bold text-medical-dark mb-4 text-center">{specialty.specialty}</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cases Treated:</span>
                    <span className="font-bold text-medical-blue">{specialty.cases}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-bold text-green-600">{specialty.successRate}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div
                  initial={{ width: 0 }}
                  animate={inView ? { width: specialty.successRate } : {}}
                  transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                  className="bg-gradient-to-r from-medical-blue to-medical-purple h-2 rounded-full">
                </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 text-center">

          <div className="bg-medical-light p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-medical-dark mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Be part of our growing community of cancer survivors. 
              Start your healing journey with Dr. Vijay Anand Reddy today.
            </p>
            <button className="bg-medical-blue text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default Stats;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiClock, FiHeart, FiTrendingUp, FiGlobe, FiShield, FiStar } = FiIcons;

const WhyChoose = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reasons = [
  {
    icon: FiAward,
    title: "30+ Years Experience",
    description: "Three decades of excellence in radiation oncology and cancer treatment",
    stat: "30+"
  },
  {
    icon: FiUsers,
    title: "20,000+ Patients Treated",
    description: "Successfully treated thousands of patients with various cancer types",
    stat: "20K+"
  },
  {
    icon: FiTrendingUp,
    title: "95% Success Rate",
    description: "Exceptional treatment outcomes with industry-leading success rates",
    stat: "95%"
  },
  {
    icon: FiHeart,
    title: "Compassionate Care",
    description: "Patient-centered approach with emotional support throughout treatment",
    stat: "24/7"
  },
  {
    icon: FiGlobe,
    title: "International Recognition",
    description: "Global certifications and recognition from leading medical institutions",
    stat: "Global"
  },
  {
    icon: FiShield,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and cutting-edge treatment modalities",
    stat: "Latest"
  }];


  const testimonialHighlights = [
  {
    icon: FiStar,
    title: "Patient Satisfaction",
    value: "98%",
    description: "Patients recommend Dr. Reddy"
  },
  {
    icon: FiClock,
    title: "Treatment Success",
    value: "95%",
    description: "5-year survival rate improvement"
  },
  {
    icon: FiHeart,
    title: "Quality of Life",
    value: "90%",
    description: "Patients report improved quality of life"
  }];


  return (
    <section id="why-choose" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Why Choose Dr. Vijay Anand Reddy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of patients and families for exceptional cancer care, 
            advanced treatments, and compassionate support throughout the healing journey.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) =>
          <div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-medical-light p-8 rounded-2xl card-hover group text-center">

              <div className="relative mb-6">
                <div className="w-20 h-20 bg-medical-blue/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-medical-blue transition-all duration-300">
                  <SafeIcon icon={reason.icon} className="w-10 h-10 text-medical-blue group-hover:text-white" />
                </div>
                {/* <div className="absolute -top-2 -right-2 bg-medical-blue text-white text-xs font-bold px-2 py-1 rounded-full">
                {reason.stat}
                </div> */}
              </div>
              
              <h3 className="text-xl font-bold text-medical-dark mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          )}
        </div>

        {/* Testimonial Highlights */}
        {/* <div
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="bg-gradient-to-r from-medical-blue to-medical-purple p-8 md:p-12 rounded-2xl text-white"
                     >
                      <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Patient Outcomes & Satisfaction</h3>
                        <p className="text-blue-100 text-lg">
                          Our commitment to excellence is reflected in our outstanding patient outcomes
                        </p>
                      </div>
                       <div className="grid md:grid-cols-3 gap-8">
                        {testimonialHighlights.map((highlight, index) => (
                          <div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                            className="text-center"
                          >
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <SafeIcon icon={highlight.icon} className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold mb-2">{highlight.value}</div>
                            <div className="text-lg font-semibold mb-2">{highlight.title}</div>
                            <div className="text-blue-100">{highlight.description}</div>
                          </div>
                        ))}
                      </div>
                     </div> */
        }

        {/* Call to Action */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-medical-dark mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of patients who have trusted Dr. Vijay Anand Reddy for their cancer care. 
              Schedule your consultation today and take the first step towards recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-medical-blue text-white px-8 py-4 rounded-lg  transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Consultation
              </button>
             <a
                href="tel:+919676720002"
                className="inline-block border-2 border-medical-blue text-medical-blue px-8 py-4 rounded-lg hover:bg-medical-blue hover:text-white transition-all duration-200 font-semibold text-lg">

  Call +91-9676720002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WhyChoose;
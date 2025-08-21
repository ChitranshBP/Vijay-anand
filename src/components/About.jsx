import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiBookOpen, FiGlobe, FiTrendingUp } = FiIcons;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const qualifications = [
  "MD (Radiation Oncology)",
  "DNB (Radiation Oncology)",
  "European Certification in Medical Oncology (ESMO)",
  "FUICC (UK), FNDM (USA), FUICC (AUS)",
  "Sr. Consultant Oncologist",
  "Prof. & Head, Dept. of Radiation Oncology",
  "Director"];


  const achievements = [
  {
    icon: FiUser,
    title: "Director",
    description: "Apollo Cancer Centres, Hyderabad"
  },
  {
    icon: FiBookOpen,
    title: "Author",
    description: "108 Stories of Victory Over Cancer"
  },
  {
    icon: FiGlobe,
    title: "Former President",
    description: "AROI (Association of Radiation Oncologists of India)"
  },
  {
    icon: FiTrendingUp,
    title: "Pioneer",
    description: "Advanced Cancer Treatment Techniques"
  }];


  return (
    <section id="about" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            About Dr. Vijay Anand Reddy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished oncologist with over three decades of experience, dedicated to providing world-class cancer care with compassion and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch"> {/* Changed from items-center to items-stretch */}

  {/* Doctor Profile Image */}
  <div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full">

    <div className="relative h-full">
      <img
                src="assets/vijay-anand-about.jpg"
                alt="Dr. Vijay Anand Reddy with 'I Am A Survivor' Book - 108 Stories of Victory Over Cancer"
                className="w-full h-full rounded-2xl shadow-2xl object-cover" />


      {/* Overlay Card */}
     <div className="hidden md:block absolute bottom-2 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold text-medical-dark mb-2">
    "I Am A Survivor" Book Author
  </h3>
  <p className="text-gray-600">
    Sharing hope through 108 inspiring cancer survivor stories
  </p>
              </div>
    </div>
  </div>

          {/* Content */}
          <div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8">

            {/* Qualifications */}
            <div>
              <h3 className="text-2xl font-bold text-medical-dark mb-4">Qualifications & Expertise</h3>
              <div className="space-y-3">
                {qualifications.map((qual, index) =>
                <div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3">

                    <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                    <span className="text-gray-700">{qual}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Key Achievements */}
            {/* <div>
                          <h3 className="text-2xl font-bold text-medical-dark mb-6">Key Achievements</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                              <div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                className="bg-medical-light p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                              >
                                <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                                  <SafeIcon icon={achievement.icon} className="w-6 h-6 text-medical-blue" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-2">{achievement.title}</h4>
                                <p className="text-gray-600 text-sm">{achievement.description}</p>
                              </div>
                            ))}
                          </div>
                         </div> */}

            {/* Mission Statement */}
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-medical-blue to-medical-purple p-6 rounded-xl text-white">

              <h4 className="text-xl font-bold mb-3">Our Mission</h4>
              <p className="leading-relaxed">
                "To provide world-class cancer care with cutting-edge technology, personalized treatment plans, and unwavering compassion, giving every patient the best chance at recovery and a fulfilling life."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default About;
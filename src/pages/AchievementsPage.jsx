/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const {
  FiAward, FiUsers, FiHeart, FiTrendingUp, FiTarget, FiShield,
  FiStar, FiCheckCircle, FiArrowRight, FiPhone
} = FiIcons;

const AchievementsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [innovationRef, innovationInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [recognitionRef, recognitionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [approachRef, approachInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [futureRef, futureInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const achievements = [
  {
    icon: FiTrendingUp,
    title: "Stereotactic Radiosurgery Leader",
    description: "Performed the highest number of SRS procedures in India, giving renewed hope to patients with brain tumors and metastases."
  },
  {
    icon: FiAward,
    title: "Pioneer in Prostate Cancer Therapy",
    description: "Introduced short-course radiation therapy for prostate cancer to India—faster, just as effective, and minimally disruptive."
  },
  {
    icon: FiUsers,
    title: "Trainer & Educator",
    description: "Led India’s first international IMRT training in Hyderabad, bringing global standards to the local oncology community."
  }];


  const recognitions = [
  "Only Indian investigator in a landmark global Phase III chemo–radiation trial for lung cancer.",
  "Featured speaker at countless international cancer conferences and trials.",
  "Honored with the prestigious P.S. Ghatge Memorial Oration for revolutionary contributions to medicine.",
  "Recognized as a respected authority and mentor by national and international medical communities."];


  const approaches = [
  {
    icon: FiTarget,
    title: "Highly Personalized Treatment",
    description: "Each care plan is tailored to individual needs—combining technology, precision, and patient lifestyle."
  },
  {
    icon: FiHeart,
    title: "Whole-Person Healing",
    description: "Care that includes not only advanced therapy but also emotional support, nutritional guidance, and rehabilitation planning."
  },
  {
    icon: FiShield,
    title: "Empathy & Trust",
    description: "An open, supportive environment where patients and their loved ones always feel heard and cared for."
  }];


  const whyChoosePoints = [
  "The highest number of stereotactic radiosurgeries in India",
  "Introduced short-course radiation for prostate cancer",
  "Global leadership in clinical trials",
  "Patient-first, technology-driven care",
  "Mentor to emerging oncologists"];


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
 <section ref={heroRef} className="pt-32 pb-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT SIDE - TEXT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center bg-medical-blue/10 px-6 py-3 rounded-full mb-8"
        >
          <SafeIcon icon={FiAward} className="w-5 h-5 text-medical-blue mr-2" />
          <span className="text-medical-blue font-semibold">
            Best Radiation Oncologist in India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight"
        >
          Dr. Vijay Anand Reddy
          <span className="block text-medical-blue mt-2">
            India’s Most Trusted Cancer Specialist
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed"
        >
      When patients search for the best oncologist in India, Dr. Vijay Anand Reddy’s name stands out. A pioneer in radiation oncology, he has decades of experience, introduced advanced therapies, and is known for blending technology with compassion to deliver exceptional cancer care.
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE - IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={heroInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-center"
      >
        <img
          src="assets\vijay-snand-hero.png" // <-- update with correct image path
          alt="Dr. Vijay Anand Reddy"
          className="rounded-2xl shadow-lg max-h-[500px] object-cover"
        />
      </motion.div>
    </div>
  </div>
</section>


      {/* Innovation-Driven Cancer Care */}
      <section ref={innovationRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={innovationInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                Innovation-Driven <span className="block text-medical-blue">Cancer Care</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Reddy’s clinical journey is a story of constant innovation. Renowned as the Best Radiation Oncologist in India, he introduced revolutionary treatments like Stereotactic Radiosurgery (SRS), IMRT, and hypofractionated radiotherapy, fundamentally changing cancer care. These highly targeted treatments maximize cancer cell destruction while protecting surrounding healthy tissue.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Stereotactic Radiosurgery (SRS) for maximum precision</p>
            </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Advanced IMRT and hypofractionated radiotherapy protocols</p>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Customizing radiation duration, invasiveness, and side effects for each patient</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-medical-dark mb-6">Excellence in Treatment</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-medical-blue pl-6">
                  <h4 className="font-semibold text-medical-dark mb-2">Leading-Edge Technology</h4>
                  <p className="text-gray-600">Access to the latest radiotherapy advances: SRS, IMRT, and more.</p>
                </div>
                <div className="border-l-4 border-medical-blue pl-6">
                  <h4 className="font-semibold text-medical-dark mb-2">Personalized Innovation</h4>
                  <p className="text-gray-600">Every protocol customized for safety, speed, and minimal disruption.</p>
                </div>
                <div className="border-l-4 border-medical-blue pl-6">
                  <h4 className="font-semibold text-medical-dark mb-2">Superior Outcomes</h4>
                  <p className="text-gray-600">Best-in-class results, fewer side effects, and improved life quality for patients.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unparalleled Achievements */}
      <section ref={achievementsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
              Unparalleled Achievements By
              <span className="block text-medical-blue">Best Oncologist in India</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Reddy’s list of “firsts” and record-breaking performance explains why so many seek his care.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {achievements.map((item, index) =>
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <SafeIcon icon={item.icon} className="w-10 h-10 text-medical-blue mb-4" />
                <h3 className="text-xl font-bold text-medical-dark mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Recognized Nationally and Internationally */}
      <section ref={recognitionRef} className="py-16 bg-medical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={recognitionInView ? "visible" : "hidden"}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recognized Nationally and
              <span className="block text-medical-blue">Internationally</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Dr. Vijay Anand Reddy is a globally recognized leader, earning accolades and respect for his innovation, research, and dedication.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={recognitionInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {recognitions.map((recognition, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={recognitionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg border border-gray-700">

                <SafeIcon icon={FiStar} className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                <p className="text-gray-300">{recognition}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Holistic and Patient-Centric Approach */}
      <section ref={approachRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
              A Holistic and
              <span className="block text-medical-blue">Patient-Centric Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Reddy believes cancer care is much more than just technology—it’s about healing the person, not just treating the tumor. Every patient benefits from total care that includes emotional support, nutrition, and rehabilitation planning.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8">

            {approaches.map((approach, index) =>
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-8 border border-gray-200 rounded-lg">

                <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={approach.icon} className="w-8 h-8 text-medical-blue" />
                </div>
                <h3 className="text-xl font-bold text-medical-dark mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Leading the Future */}
      <section ref={futureRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={futureInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-medical-dark mb-6">Leading the Future</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-medical-blue" />
                    <span className="text-gray-700">Mentoring and educating India’s next generation of cancer specialists</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 text-medical-blue" />
                    <span className="text-gray-700">Establishing centers of excellence for accessible advanced treatment</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-medical-blue" />
                    <span className="text-gray-700">Pioneering innovations like intra-coronary radiotherapy and new brain metastasis techniques</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                Shaping the Future of
                <span className="block text-medical-blue">Radiation Oncology in India</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Vijay Anand Reddy is driven by a vision: world-class, state-of-the-art cancer care for all Indians—no matter where they live or their financial background.
              </p>
              <p className="text-gray-600 mb-8">
                Through research, teaching, and innovation, he continues to shape the next era of cancer care in India.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-medical-blue/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 text-medical-blue" />
                  <span className="text-medical-blue font-semibold">Training Next Generation</span>
                </div>
                <div className="flex items-center space-x-2 bg-medical-blue/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-medical-blue" />
                  <span className="text-medical-blue font-semibold">Research Leadership</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Dr. Vijay Anand Reddy */}
      <section ref={whyChooseRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
              Why Choose
              <span className="block text-medical-blue">Dr. Vijay Anand Reddy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For those seeking the Best oncologist in India, Dr. Vijay Anand Reddy offers the rarest blend of clinical brilliance, proven experience, and deeply compassionate patient care.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {whyChoosePoints.map((point, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">

                <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                <p className="text-gray-700">{point}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for the Most Trusted Radiation Oncologist in India?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Choose experience. Choose innovation. Choose <b>Dr. Vijay Anand Reddy</b> – the name India trusts for cancer care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-medical-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Book Consultation</span>
              </button>
              <a
                href="tel:+919676720002"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2">

                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>+91-9676720002</span>
              </a>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-4 text-sm opacity-75">
              <SafeIcon icon={FiCheckCircle} className="w-4 h-4" />
              <span>24/7 Emergency Support</span>
              <span>•</span>
              <SafeIcon icon={FiShield} className="w-4 h-4" />
              <span>Confidential Consultation</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default AchievementsPage;
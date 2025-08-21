import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiCalendar } = FiIcons;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'consultation'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
  {
    icon: FiPhone,
    title: "Phone",
    details: ["+91-9676720002"],
    action: "Call Now",
    link: "tel:+919676720002"
  },
  {
    icon: FiMail,
    title: "Email",
    details: ["cancercare@drvijayanandreddy.com"],
    action: "Send Email",
    link: "mailto:cancercare@drvijayanandreddy.com"
  },
  {
    icon: FiMapPin,
    title: "Location",
    details: ["Apollo Cancer Centre", "Jubilee Hills, Hyderabad"],
    action: "Get Directions",
    link: "https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830"
  }];


  const appointmentTypes = [
  { value: 'consultation', label: 'Initial Consultation' },
  { value: 'follow-up', label: 'Follow-up Appointment' },
  { value: 'second-opinion', label: 'Second Opinion' },
  { value: 'emergency', label: 'Emergency Consultation' }];


  return (
    <section id="contact" className="py-14 bg-white ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4 sm:mb-6">
        Get in Touch
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Ready to start your healing journey? Contact Dr. Vijay Anand Reddy's team to schedule your consultation or get answers to your questions.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10 sm:gap-12">
      {/* Contact Information */}
     <div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8">

  <div>
    <h3 className="text-lg sm:text-2xl font-bold text-medical-dark mb-3 sm:mb-6">
      Contact Information
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">
      We're here to help you every step of the way. Reach out to us through any of the following channels.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:gap-6">
    {contactInfo.map((info, index) =>
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-medical-light p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300">

        <div className="flex items-start space-x-4 sm:space-x-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <SafeIcon icon={info.icon} className="w-5 h-5 sm:w-6 sm:h-6 text-medical-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-medical-dark text-base sm:text-lg mb-1">{info.title}</h4>
            {info.details.map((detail, idx) =>
                    <p key={idx} className="text-gray-600 text-sm sm:text-base break-words">
                {detail}
              </p>
                    )}
            {info.link ?
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-block text-medical-blue font-semibold text-sm hover:text-medical-purple mt-2 transition-colors">

                {info.action} →
              </a> :

                    <span className="text-medical-blue font-semibold text-sm opacity-60 cursor-default mt-2 block">
                {info.action} →
              </span>
                    }
          </div>
        </div>
      </div>
              )}
  </div>
          </div>


      {/* Contact Form */}
          <div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:col-span-2 px-4 sm:px-6">

  <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
    <h3 className="text-xl sm:text-2xl font-bold text-medical-dark mb-6">
      Request an Appointment
    </h3>

    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <div className="relative">
            <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                        placeholder="Enter your full name" />

          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <div className="relative">
            <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                        placeholder="Enter your email" />

          </div>
        </div>
      </div>

      {/* Phone & Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <div className="relative">
            <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                        placeholder="+91 XXXXX XXXXX" />

          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Appointment Type</label>
          <div className="relative">
            <SafeIcon icon={FiCalendar} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue/20 appearance-none">

              {appointmentTypes.map((type) =>
                        <option key={type.value} value={type.value}>
                  {type.label}
                </option>
                        )}
            </select>
          </div>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
        <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                    placeholder="Brief subject of your inquiry" />

      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
        <div className="relative">
          <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
          <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue/20 resize-none"
                      placeholder="Please describe your condition, symptoms, or questions...">
                    </textarea>
        </div>
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-3">
        <input
                    type="checkbox"
                    id="consent"
                    required
                    className="w-5 h-5 text-medical-blue border-gray-300 rounded focus:ring-medical-blue focus:ring-2 mt-1" />

        <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
          I consent to the collection and processing of my personal data for the purpose of scheduling an appointment and providing medical consultation.
        </label>
      </div>

      {/* Submit */}
      <button
                  type="submit"
                  className="w-full bg-medical-blue text-white py-3 px-6 rounded-lg font-semibold text-base sm:text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2">

        <SafeIcon icon={FiSend} className="w-5 h-5" />
        <span>Send Message</span>
      </button>
    </form>
  </div>
          </div>

    </div>

    {/* Map Section */}
    <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16">

      <div className="bg-medical-light p-6 sm:p-8 rounded-2xl">
        <h3 className="text-xl sm:text-2xl font-bold text-medical-dark mb-6 text-center">
          Visit Our Cancer Centre
        </h3>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 space-y-4">
            <div>
              <h4 className="font-bold text-medical-dark mb-2">Apollo Cancer Centre</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Road No. 72, Opp. Bharatiya Vidya Bhavan,<br />
                Film Nagar, Jubilee Hills,<br />
                Hyderabad, Telangana 500096
              </p>
            </div>
      
            <button className="bg-medical-blue text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold text-sm sm:text-base">
              Get Directions
            </button>
          </div>

              <div className="w-full lg:col-span-2">
                <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d144505.05386313668!2d78.412148!3d17.414722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c8d6de4619%3A0x181979dd13dd8cfe!2sDr%20Vijay%20Anand%20Reddy%20-%20Best%20Oncologist%20in%20Hyderabad%2C%20India%20%7C%20Best%20Cancer%20Specialist%20in%20Hyderabad%20-%20Apollo%20Hospitals!5e1!3m2!1sen!2sus!4v1754484598634!5m2!1sen!2sus"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr Vijay Anand Reddy - Apollo Cancer Centre Location">
                  </iframe>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
    </section>);


};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
const { FiPhone, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiAward, FiHeart } = FiIcons;

const Footer = () => {

  const quickLinks = [
    { name: 'Know the Doctor', href: '/journey' },
    { name: 'Expertise', href: '/services' },
    { name: "Doctor's Awareness Talks", href: '/doctor-speaks' },
    { name: 'Patient Testimonials', href: '/testimonials' },
    { name: 'Community Services', href: '/cure-2' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const aboutLinks = [
    { name: 'My Journey', href: '/journey' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Awards & Recognition', href: '/awards' },
    { name: 'Publications', href: '/publications' },
    { name: 'Books', href: '/books' },
    { name: 'Professional Associations', href: '/professional-association' },
    { name: 'Presentations', href: '/presentations' },
    { name: 'Media Gallery', href: '/print-gallery' },
    { name: 'My Family', href: '/family' }
  ];

  const services = [
    { name: 'Pancreatic Cancer', href: '/services/pancreatic-cancer' },
    { name: 'Adrenal Cancer', href: '/services/adrenal-cancer' },
    { name: 'Proton Therapy', href: '/services/proton-therapy' },
    { name: 'Radiation Oncology', href: '/services/radiation-oncology' },
    { name: 'Throat Cancer', href: '/services/throat-cancer' },
    { name: 'Eye Cancer', href: '/services/eye-cancer' },
    { name: 'View All Services', href: '/services' }
  ];

  const resources = [
    { name: 'Cancer Awareness Lectures', href: '/awareness-lectures' },
    { name: 'Doctor Awareness Talks', href: '/doctor-speaks' },
    { name: 'Conferences & Seminars', href: '/conference' },
    { name: 'Cancer Survivors Stories', href: '/survivors' },
    { name: 'Cancer Clinics', href: '/cancer-clinics' },
    { name: 'Events & Programs', href: '/events' },
    { name: 'Video Gallery', href: '/video-gallery' },
    { name: 'Photo Gallery', href: '/print-gallery' },
    { name: 'Patient Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-and-conditions' },
    { name: 'Medical Disclaimer', href: '/medical-disclaimer' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: 'https://www.facebook.com/drvijayanandreddy', name: 'Facebook' },
    { icon: FiTwitter, href: 'https://x.com/Dr_VijayReddy', name: 'Twitter' },
    { icon: FiYoutube, href: 'https://www.youtube.com/@VijayAnandReddyPalkonda/', name: 'Youtube' },
    { icon: FiInstagram, href: 'https://www.instagram.com/drvijayanandreddy', name: 'Instagram' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/drvijayanandreddy', name: 'LinkedIn' }
  ];


  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-medical-dark to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-6 gap-8 mb-6">
          {/* About Section with Logo - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <img
                src="/assets/var-white-logo.png"
                alt="Dr. Palkonda Vijay Anand Reddy - MD Radiation Oncology, Director Apollo Cancer Centres"
                className="h-28 w-auto object-contain "
                onError={(e) => {
                  if (e.target.src.includes('/assets/')) {
                    e.target.src = 'assets/var-white-logo.png';
                  } else {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }
                }} />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed text-base max-w-md">
              Leading cancer care with over 30 years of experience in radiation oncology.
              Providing compassionate, evidence-based treatment and hope to thousands of
              patients through advanced technologies like Proton Therapy and Brachytherapy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-medical-blue">30+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-medical-blue">10K+</div>
                <div className="text-xs text-gray-400">Patients Treated</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-medical-blue">100+</div>
                <div className="text-xs text-gray-400">Publications</div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect With Us</h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-medical-blue transition-all duration-300 shadow-lg hover:shadow-medical-blue/50"
                  >
                    <SafeIcon icon={social.icon} className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
              About
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-medical-blue transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-medical-blue transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-medical-blue transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-medical-blue transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-medical-blue transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-medical-blue transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
              Get In Touch
            </h4>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              {/* Phone */}
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Call Us</div>
                  <a href="tel:+919676720002" className="text-gray-300 hover:text-medical-blue transition-colors duration-200 font-medium text-sm">
                    +91-9676720002
                  </a>
                </div>
              </div>

              {/* Address with Map Link */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Visit Us</div>
                  <a
                    href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-medical-blue transition-colors duration-200 text-sm"
                  >
                    <span className="font-medium">Apollo Cancer Centre</span><br />
                    <span>Jubilee Hills, Hyderabad</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
              <div className="flex items-center space-x-2 mb-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-medical-blue" />
                <span className="font-semibold text-white text-sm">Office Hours</span>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span className="font-semibold text-white">9 AM - 6 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-700/50 pt-5 mt-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-12 text-center">
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiAward} className="w-8 h-8 text-medical-blue" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">Award-Winning</div>
                <div className="text-xs text-gray-400">Excellence in Oncology</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-medical-blue" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">Patient-Centered</div>
                <div className="text-xs text-gray-400">Compassionate Care</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar with Gradient Border */}
      <div className="relative border-t border-gray-700/50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-medical-blue to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Dr. Palkonda Vijay Anand Reddy. All rights reserved. | Built with care for cancer patients.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-medical-blue text-sm transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;
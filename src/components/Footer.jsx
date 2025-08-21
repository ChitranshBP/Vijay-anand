import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
const { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } = FiIcons;

const Footer = () => {
  const quickLinks = [
  { name: 'Know the Doctor', href: '#' },
  { name: 'Expertise', href: '#' },
  { name: 'Doctor’s Awareness Talks', href: '#' },
  { name: 'Patients Testimonials', href: '#' },
  { name: 'Community Services', href: '#' },
  { name: 'Contact Us', href: '#' }];


  const services = [
  { name: 'Radiation Therapy', href: '#' },
  { name: 'Medical Oncology', href: '#' },
  { name: 'Surgical Oncology', href: '#' },
  { name: 'Immunotherapy', href: '#' },
  { name: 'Palliative Care', href: '#' },
  { name: 'Cancer Screening', href: '#' }];


  const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '/' },
  { name: 'Medical Disclaimer', href: '/' },
  { name: 'Cookie Policy', href: '/' }];


  const socialLinks = [
  { icon: FiFacebook, href: 'https://www.facebook.com/drvijayanandreddy', name: 'Facebook' },
  { icon: FiTwitter, href: 'https://x.com/Dr_VijayReddy', name: 'Twitter' },
  { icon: FiYoutube, href: 'https://www.youtube.com/@VijayAnandReddyPalkonda/', name: 'Youtube' },
  { icon: FiInstagram, href: 'https://www.instagram.com/drvijayanandreddy', name: 'Instagram' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/drvijayanandreddy', name: 'LinkedIn' }];


  return (
    <footer className="bg-medical-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* About Section with Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="assets\Dr.vijay-anand-reddy-logo.png"
                alt="Dr. Palkonda Vijay Anand Reddy - MD Radiation Oncology, Director Apollo Cancer Centres"
                className="h-24 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} />

              {/* Fallback text logo (hidden by default) */}
              <div className="hidden items-center space-x-3">
                <img
                  src="assets\Dr.vijay-anand-reddy-logo.png"
                  alt="Dr. Vijay Anand Reddy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-medical-blue" />

                <div>
                  <h3 className="text-xl font-bold">Dr. Vijay Anand Reddy</h3>
                  <p className="text-gray-300 text-sm">Radiation Oncologist</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading cancer care with over 30 years of experience, providing compassionate 
              treatment and hope to thousands of patients.
            </p>

            {/* Contact Info */}


            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) =>
              <a
                key={index}
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-medical-blue transition-colors duration-200">

                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) =>
              <li key={index}>
                  <a
                  href={link.href}
                  className="text-gray-300 hover:text-medical-blue transition-colors duration-200">

                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) =>
              <li key={index}>
                  <a
                  href={service.href}
                  className="text-gray-300 hover:text-medical-blue transition-colors duration-200">

                    {service.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact & Hours</h4>
            
            {/* Office Hours */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-medical-blue" />
                <span className="font-semibold">Office Hours</span>
              </div>
              <div className="text-gray-300 space-y-1 text-sm">
                <div>Monday - Saturday: 9:00 AM - 6:00 PM</div>
          
                <div className="text-red-300 font-semibold">24/7 Emergency Care</div>
              </div>
            </div>

                        {/* Contact Info */}
         <div className="space-y-3">
  {/* Phone */}
  <div className="flex items-center space-x-3">
    <SafeIcon icon={FiPhone} className="w-5 h-5 text-medical-blue" />
    <a href="tel:+919676720002" className="text-gray-300 hover:text-medical-blue transition">
      +91-9676720002
    </a>
  </div>

  {/* Email */}
  {/* <div className="flex items-center space-x-3">
                                                                                                                                                                <SafeIcon icon={FiMail} className="w-5 h-5 text-medical-blue" />
                                                                                                                                                                <a href="mailto:cancercare@drvijayanandreddy.com" className="text-gray-300 hover:text-medical-blue transition">
                                                                                                                                                                  cancercare@drvijayanandreddy.com
                                                                                                                                                                </a>
                                                                                                                                                               </div> */}

  {/* Address with Map Link */}
  <div className="flex items-start space-x-3">
    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-medical-blue mt-1" />
    <a
                  href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-medical-blue transition">

      Apollo Cancer Centre<br />
      Jubilee Hills, Hyderabad
    </a>
  </div>
            </div>

            {/* Emergency Contact */}
      {/* <div className="bg-red-600/20 border border-red-500/30 p-4 rounded-lg">
                                                                                           <h5 className="font-bold text-red-300 mb-2">Emergency Contact</h5>
                                                                                           <p className="text-red-200 text-sm mb-2">For urgent medical emergencies</p>
                                                                                           <a
                                                                                           href="tel:+919676720002"
                                                                                           className="text-red-300 font-bold hover:text-red-100 transition"
                                                                                           aria-label="Call emergency contact number"
                                                                                           >
                                                                                           +91-9676720002
                                                                                           </a>
                                                                                           </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Dr. Palkonda Vijay Anand Reddy. All rights reserved. | Built with care for cancer patients.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) =>
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-medical-blue text-sm transition-colors duration-200">

                  {link.name}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;
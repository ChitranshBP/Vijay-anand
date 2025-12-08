import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiChevronDown, FiChevronRight, FiAlertCircle, FiActivity, FiAward, FiArrowRight } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  {
    name: 'Know the Doctor',
    href: '#',
    dropdown: [
      { name: 'Journey', href: '/journey' },
      { name: 'Achievements', href: '/achievements' },
      { name: 'Awards', href: '/awards' },
      { name: 'Professional Association', href: '/professional-association' },
      {
        name: 'Research',
        href: '#',
        submenu: [
          { name: 'Books', href: '/books' },
          { name: 'Publications', href: '/publications' },
         { name: 'Presentations', href: '/presentations' },
                  { name: 'Cancer Cl', href: '/cancer-clinics' },


        ],
      },
      { name: 'Conferences Organized', href: '/conference' },
      { name: 'Awareness Talks', href: '/awareness-lectures' },
      { name: 'Family', href: '/family' },
      {
        name: 'Hobbies',
        href: '#',
        submenu: [
          { name: 'Golf', href: '/ccgc-2' },
        ],
      },
    ],
  },
  {
    name: 'Expertise',
    href: '#',
    dropdown: [
      { name: 'Our Services', href: '/services' },
      { name: 'Know About Cancer', href: '/service/pancreatic-cancer' },
      { name: 'Instructions to Patients', href: '/services/patient-instructions' },
      {
        name: 'Conditions',
        href: '/conditions',
        submenu: [
          { name: 'Breast Cancer', href: '/conditions/breast-cancer' },
          { name: 'Lung Cancer', href: '/conditions/lung-cancer' },
          { name: 'Prostate Cancer', href: '/conditions/prostate-cancer' },
          { name: 'Cervical Cancer', href: '/conditions/cervical-cancer' },
          { name: 'Ovarian Cancer', href: '/conditions/ovarian-cancer' },
          { name: 'Colorectal Cancer', href: '/conditions/colorectal-cancer' },
          { name: 'Liver Cancer', href: '/conditions/liver-cancer' },
          { name: 'Kidney Cancer', href: '/conditions/kidney-cancer' },
          { name: 'Pancreatic Cancer', href: '/conditions/pancreatic-cancer' },
          { name: 'Thyroid Cancer', href: '/conditions/thyroid-cancer' },
          { name: 'Eye Cancer', href: '/conditions/eye-cancer' },
          { name: 'Retinoblastoma', href: '/conditions/retinoblastoma' },
          { name: 'Uveal Melanoma', href: '/conditions/uveal-melanoma' },
          { name: 'Eyelid Cancer', href: '/conditions/eyelid-cancer' },
          { name: 'Brain / CNS Tumors', href: '/conditions/brain-cns-tumors' },
          { name: 'Bone Cancer / Osteosarcoma', href: '/conditions/bone-cancer-osteosarcoma' },
          { name: 'Soft Tissue Sarcoma', href: '/conditions/soft-tissue-sarcoma' },
          { name: 'Pediatric Cancers', href: '/conditions/pediatric-cancers' },
          { name: 'Oral Cancer', href: '/conditions/oral-cancer' },
          { name: 'Head & Neck Sub-Conditions', href: '/conditions/head-neck-sub-conditions' },
        ],
      },
      {
        name: 'Treatment',
        href: '/treatment',
        submenu: [
          { name: 'Chemotherapy', href: '/treatment/chemotherapy' },
          { name: 'Immunotherapy', href: '/treatment/immunotherapy' },
          { name: 'Targeted Therapy', href: '/treatment/targeted-therapy' },
          { name: 'Hormone Therapy', href: '/treatment/hormone-therapy' },
          { name: 'Biological Therapy', href: '/treatment/biological-therapy' },
          { name: 'Precision Oncology', href: '/treatment/precision-oncology' },
          { name: 'External Beam Radiation', href: '/treatment/external-beam-radiation' },
          { name: 'IMRT', href: '/treatment/imrt' },
          { name: 'IGRT', href: '/treatment/igrt' },
          { name: 'SRS', href: '/treatment/srs' },
          { name: 'SBRT', href: '/treatment/sbrt' },
          { name: 'Brachytherapy', href: '/treatment/brachytherapy' },
          { name: 'Tomotherapy', href: '/treatment/tomotherapy' },
          { name: 'Proton Therapy', href: '/treatment/proton-therapy' },
          { name: 'Combined Modality Therapy', href: '/treatment/combined-modality-therapy' },
          { name: 'Supportive Oncology Care', href: '/treatment/supportive-oncology-care' },
        ],
      },
      {
        name: 'Specialties',
        href: '/specialty',
        submenu: [
          { name: 'Radiation Oncology', href: '/specialty/radiation-oncology' },
          { name: 'Medical Oncology', href: '/specialty/medical-oncology' },
          { name: 'Surgical Oncology', href: '/specialty/surgical-oncology' },
          { name: 'Hemato-Oncology', href: '/specialty/hemato-oncology' },
          { name: 'Breast Oncology', href: '/specialty/breast-oncology' },
          { name: 'Head & Neck Oncology', href: '/specialty/head-neck-oncology' },
          { name: 'Thoracic Oncology', href: '/specialty/thoracic-oncology' },
          { name: 'Gastrointestinal Oncology', href: '/specialty/gastrointestinal-oncology' },
          { name: 'Gynecologic Oncology', href: '/specialty/gynecologic-oncology' },
          { name: 'Uro-Oncology', href: '/specialty/uro-oncology' },
          { name: 'Ocular Oncology', href: '/specialty/ocular-oncology' },
          { name: 'Pediatric Oncology', href: '/specialty/pediatric-oncology' },
          { name: 'Neuro-Oncology', href: '/specialty/neuro-oncology' },
        ],
      },
    ],
  },
  {
    name: "Doctor's Awareness Talks",
    href: '/doctor-speaks',
  },
  {
    name: "Patient's Testimonials",
    href: '/testimonials',
  },
  {
    name: 'Community Services',
    href: '#',
    dropdown: [
      // { name: 'Cancer Clinics', href: '/cancer-clinics' },
      { name: 'Awareness Programs', href: '/events' },
      { name: 'I Am a Survivor', href: '/survivors' },
      { name: 'Cure Foundation', href: '/cure-2' },
      { name: 'CCGC', href: '/ccgc-2' },
    ],
  },
  {
    name: 'Media',
    href: '#',
    dropdown: [
      { name: 'Blog & Newsletter', href: 'https://drvijayanandreddy.com/blog/' },
      { name: 'Print & Digital Gallery', href: '/print-gallery' },
      { name: 'Video Gallery', href: '/video-gallery' },
    ],
  },
];



  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubMouseEnter = (index) => {
    setActiveSubDropdown(index);
  };

  const handleSubMouseLeave = () => {
    setActiveSubDropdown(null);
  };

  const toggleMobileDropdown = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
    if (mobileActiveDropdown !== index) {
      setMobileActiveSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (parentIndex, submenuIndex) => {
    const key = parentIndex + '-' + submenuIndex;
    setMobileActiveSubmenu(mobileActiveSubmenu === key ? null : key);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  const submenuVariants = {
    hidden: {
      opacity: 0,
      x: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.15
      }
    }
  };

  const headerClasses = isScrolled ?
  'bg-white/95 backdrop-blur-sm shadow-lg' :
  'bg-white';

  return (
    <>
      {/* Top Bar - Fixed */}
      <div className="fixed top-0 w-full bg-medical-blue text-white py-2 px-4 text-sm z-[60]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Phone */}
            <a href="tel:+919676720002" className="flex items-center space-x-2 hover:text-white transition">
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span>+91-9676720002</span>
            </a>

            {/* Email */}
            <a
              href="mailto:cancercare@drvijayanandreddy.com"
              className="hidden md:flex items-center space-x-2 hover:text-white transition">

              <SafeIcon icon={FiMail} className="w-4 h-4" />
              <span>cancercare@drvijayanandreddy.com</span>
            </a>
          </div>

          {/* Location */}
          <a
            href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 hover:text-white transition">

            <SafeIcon icon={FiMapPin} className="w-4 h-4" />
            <span>Apollo Cancer Centre, Hyderabad</span>
          </a>
        </div>
      </div>

      {/* Main Header - Fixed */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={'fixed w-full z-[50] transition-all duration-300 ' + headerClasses}
        style={{ top: '36px' }}>

        {/* Add a container with better responsive handling */}
        <div className="w-full">
        <div className="max-w-full 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-4 xl:px-6 2xl:px-8">
          <div className="flex justify-between items-center py-2 sm:py-3 lg:py-0 min-h-14 sm:min-h-16 gap-1">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
<a href="/" className="cursor-pointer">
<img
  src="/assets/var-logo-final.png"
  alt="Dr. Palkonda Vijay Anand Reddy - MD Radiation Oncology, Director Apollo Cancer Centres"
  className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-32"
  style={{ maxWidth: '320px' }}
  onError={(e) => {
    if (e.target.src.includes('/assets/')) {
      e.target.src = 'assets/var-logo-final.png';
    } else if (e.target.src.includes('assets/Dr.vijay')) {
      e.target.src = './assets/var-logo-final.png';
    } else {
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'flex';
    }
  }}
/>
</a>
              {/* Fallback text logo (always ready as backup) */}
              <div className="flex items-center space-x-2 flex-shrink-0" style={{ display: 'none' }}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-medical-blue flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  DR
                </div>
                <div>
                  <h1 className="text-sm sm:text-base lg:text-lg font-bold text-medical-dark">Dr. Vijay Anand Reddy</h1>
                  <p className="text-xs text-gray-600">Radiation Oncologist</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center justify-end flex-1 space-x-0.5 xl:space-x-1 2xl:space-x-2 flex-shrink-0 min-w-0">
              {navItems.map((item, index) =>
                <div
                  key={item.name}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}>

                  <a
                    href={item.href}
                    className="flex items-center px-1.5 xl:px-2 2xl:px-3 py-2 text-gray-700 hover:text-medical-blue font-medium transition-colors duration-200 whitespace-nowrap text-xs xl:text-sm 2xl:text-base leading-tight">

                    <span className="truncate">{item.name}</span>
                    {item.dropdown &&
                    <SafeIcon
                      icon={FiChevronDown}
                      className={'ml-0.5 xl:ml-1 w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 flex-shrink-0 ' + (activeDropdown === index ? 'rotate-180' : '')} />

                    }
                  </a>

                  {/* Dropdown Menu / Mega Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      item.name === 'Expertise' ? (
                        // Mega Menu for Expertise
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="fixed top-[120px] left-[20%] -translate-x-1/2 w-[92vw] max-w-5xl bg-white rounded-xl shadow-2xl border border-gray-100 py-8 px-10 z-[100] backdrop-blur-sm"
                          style={{
                            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)'
                          }}>

                          <div className="grid grid-cols-3 gap-12">
                            {/* Column 1: Conditions */}
                            <div className="group">
                              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-medical-blue/20">
                                <div className="w-8 h-8 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                                  <SafeIcon icon={FiAlertCircle} className="w-4 h-4 text-medical-blue" />
                                </div>
                                <h3 className="text-base font-bold text-medical-dark tracking-wide">Conditions</h3>
                              </div>
                              <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-3 custom-scrollbar">
                                {item.dropdown.find(d => d.name === 'Conditions')?.submenu?.map((subItem, idx) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2.5 text-gray-700 hover:text-medical-blue hover:bg-medical-blue/5 rounded-lg transition-all duration-200 text-sm font-medium hover:translate-x-1 hover:shadow-sm"
                                    style={{ animationDelay: `${idx * 20}ms` }}>
                                    <span className="flex items-center gap-2">
                                      <SafeIcon icon={FiArrowRight} className="w-3 h-3 text-medical-blue/60" />
                                      {subItem.name}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Treatment */}
                            <div className="group">
                              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-medical-blue/20">
                                <div className="w-8 h-8 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                                  <SafeIcon icon={FiActivity} className="w-4 h-4 text-medical-blue" />
                                </div>
                                <h3 className="text-base font-bold text-medical-dark tracking-wide">Treatment</h3>
                              </div>
                              <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-3 custom-scrollbar">
                                {item.dropdown.find(d => d.name === 'Treatment')?.submenu?.map((subItem, idx) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2.5 text-gray-700 hover:text-medical-blue hover:bg-medical-blue/5 rounded-lg transition-all duration-200 text-sm font-medium hover:translate-x-1 hover:shadow-sm"
                                    style={{ animationDelay: `${idx * 20}ms` }}>
                                    <span className="flex items-center gap-2">
                                      <SafeIcon icon={FiArrowRight} className="w-3 h-3 text-medical-blue/60" />
                                      {subItem.name}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Specialties */}
                            <div className="group">
                              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-medical-blue/20">
                                <div className="w-8 h-8 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                                  <SafeIcon icon={FiAward} className="w-4 h-4 text-medical-blue" />
                                </div>
                                <h3 className="text-base font-bold text-medical-dark tracking-wide">Specialties</h3>
                              </div>
                              <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-3 custom-scrollbar">
                                {item.dropdown.find(d => d.name === 'Specialties')?.submenu?.map((subItem, idx) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2.5 text-gray-700 hover:text-medical-blue hover:bg-medical-blue/5 rounded-lg transition-all duration-200 text-sm font-medium hover:translate-x-1 hover:shadow-sm"
                                    style={{ animationDelay: `${idx * 20}ms` }}>
                                    <span className="flex items-center gap-2">
                                      <SafeIcon icon={FiArrowRight} className="w-3 h-3 text-medical-blue/60" />
                                      {subItem.name}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Custom Scrollbar Styles */}
                          <style jsx>{`
                            .custom-scrollbar::-webkit-scrollbar {
                              width: 6px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                              background: #e5e7eb;
                              border-radius: 10px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                              background: #9ca3af;
                              border-radius: 10px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                              background: #6b7280;
                            }
                          `}</style>
                        </motion.div>
                      ) : (
                        // Standard Dropdown for other nav items
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 top-full mt-1 w-64 xl:w-72 2xl:w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[100]"
                          style={{
                            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                          }}>

                          {item.dropdown.map((dropdownItem, dropdownIndex) =>
                            <div
                              key={dropdownItem.name}
                              className="relative"
                              onMouseEnter={() => dropdownItem.submenu && handleSubMouseEnter(dropdownIndex)}
                              onMouseLeave={handleSubMouseLeave}>

                              <a
                                href={dropdownItem.href}
                                className="flex items-center justify-between px-4 py-2.5 text-gray-700 hover:text-medical-blue hover:bg-gray-50 transition-colors duration-150 text-sm">

                                <span className="truncate pr-2 leading-tight">{dropdownItem.name}</span>
                                {dropdownItem.submenu &&
                                  <SafeIcon icon={FiChevronRight} className="w-4 h-4 flex-shrink-0 text-gray-400" />
                                }
                              </a>

                              {/* Submenu (Sub-submenu) */}
                              <AnimatePresence>
                                {dropdownItem.submenu && activeSubDropdown === dropdownIndex &&
                                  <motion.div
                                    variants={submenuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute left-full top-0 ml-1 w-52 xl:w-60 2xl:w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[120]"
                                    style={{
                                      boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -3px rgba(0, 0, 0, 0.1)'
                                    }}>

                                    {dropdownItem.submenu.map((subItem) =>
                                      <a
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block px-4 py-2.5 text-gray-700 hover:text-medical-blue hover:bg-gray-50 transition-colors duration-150 text-sm leading-tight">

                                        {subItem.name}
                                      </a>
                                    )}
                                  </motion.div>
                                }
                              </AnimatePresence>
                            </div>
                          )}
                        </motion.div>
                      )
                    )}
                  </AnimatePresence>
                </div>
                )}
              <a
                href="/contact"
                className="bg-medical-blue text-white px-2.5 xl:px-3 2xl:px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium ml-1 xl:ml-2 2xl:ml-3 text-xs xl:text-sm 2xl:text-base whitespace-nowrap flex-shrink-0">
                Book Appointment
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 rounded-md text-gray-700 hover:text-medical-blue flex-shrink-0">

              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-200 z-[45]">

              <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
                {navItems.map((item, index) =>
              <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <a
                    href={item.href}
                    className="block text-gray-700 hover:text-medical-blue font-medium py-2 flex-1"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}>

                        {item.name}
                      </a>
                      {item.dropdown &&
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="p-2 text-gray-700 hover:text-medical-blue">

                          <SafeIcon
                      icon={FiChevronDown}
                      className={'w-4 h-4 transition-transform duration-200 ' + (mobileActiveDropdown === index ? 'rotate-180' : '')} />

                        </button>
                  }
                    </div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && mobileActiveDropdown === index &&
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-1">

                          {item.dropdown.map((dropdownItem, dropdownIndex) =>
                    <div key={dropdownItem.name}>
                              <div className="flex items-center justify-between">
                                <a
                          href={dropdownItem.href}
                          className="block text-gray-600 hover:text-medical-blue py-2 text-sm flex-1"
                          onClick={() => !dropdownItem.submenu && setIsMenuOpen(false)}>

                                  {dropdownItem.name}
                                </a>
                                {dropdownItem.submenu &&
                        <button
                          onClick={() => toggleMobileSubmenu(index, dropdownIndex)}
                          className="p-1 text-gray-600 hover:text-medical-blue">

                                    <SafeIcon
                            icon={FiChevronDown}
                            className={'w-3 h-3 transition-transform duration-200 ' + (mobileActiveSubmenu === index + '-' + dropdownIndex ? 'rotate-180' : '')} />

                                  </button>
                        }
                              </div>
                              
                              {/* Mobile Submenu */}
                              <AnimatePresence>
                                {dropdownItem.submenu && mobileActiveSubmenu === index + '-' + dropdownIndex &&
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1">

                                    {dropdownItem.submenu.map((subItem) =>
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-500 hover:text-medical-blue py-1 text-xs"
                            onClick={() => setIsMenuOpen(false)}>

                                        {subItem.name}
                                      </a>
                          )}
                                  </motion.div>
                        }
                              </AnimatePresence>
                            </div>
                    )}
                        </motion.div>
                  }
                    </AnimatePresence>
                  </div>
              )}
                <a
                href="/contact"
                className="block w-full bg-medical-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}>

                  Book Appointment
                </a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </motion.header>


<div className='md:h-4'></div>

    </>);

};

export default Header;
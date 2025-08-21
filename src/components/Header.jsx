import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiChevronDown, FiChevronRight } = FiIcons;

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
  { name: 'Home', href: '#' },
  {
    name: 'Know the Doctor',
    href: '#',
    dropdown: [
    { name: 'Journey', href: '/journey' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Awards', href: '/awards' },
    { name: 'Awards', href: '#awards' },
    { name: 'Professional Association', href: '#professional-association' },
    {
      name: 'Research',
      href: '#research',
      submenu: [
      { name: 'Books', href: '#books' },
      { name: 'Publications & Presentations', href: '#publications' }]

    },
    { name: 'Conferences Organized', href: '#conferences-organized' },
    { name: 'Awareness Talks', href: '#awareness-talks' },
    {
      name: 'Conferences',
      href: '#conferences',
      submenu: [
      { name: 'Cancer CI', href: '#cancer-ci' },
      { name: 'Short CV', href: '#short-cv' },
      { name: 'Detailed CV', href: '#detailed-cv' }]

    },
    {
      name: 'CV',
      href: '#cv',
      submenu: [
      { name: 'Cancer CI', href: '#cancer-ci' },
      { name: 'Short CV', href: '#short-cv' },
      { name: 'Detailed CV', href: '#detailed-cv' }]

    },
    { name: 'Family', href: '#family' },
    {
      name: 'Hobbies',
      href: '#hobbies',
      submenu: [
      { name: 'Golf', href: '#golf' }]

    }]

  },
  {
    name: 'Expertise',
    href: '#',
    dropdown: [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Know About Cancer', href: '#know-about-cancer' },
    { name: 'Instructions to Patients', href: '#instructions-to-patients' }]

  },
  {
    name: 'Doctor\'s Awareness Talks',
    href: '#',
    dropdown: [
    { name: 'All Cancer Awareness Videos', href: '#awareness-videos' },
    { name: 'Video Gallery', href: '#video-gallery' },
    { name: 'YouTube Channel', href: '#youtube-channel' }]

  },
  {
    name: 'Patient\'s Testimonials',
    href: '#',
    dropdown: [
    { name: 'Client Testimonials', href: '#client-testimonials' },
    { name: 'Healing through Compassion: Patient Interactions', href: '#patient-interactions' },
    { name: 'Patient\'s Talk', href: '#patients-talk' }]

  },
  {
    name: 'Community Services',
    href: '#',
    dropdown: [
    { name: 'Awareness Programs (2025 to Previous)', href: '#awareness-programs' },
    { name: 'I Am a Survivor', href: '#survivor-stories' },
    { name: 'Cure Foundation', href: '#cure-foundation' },
    { name: 'CCGC', href: '#ccgc' }]

  },
  {
    name: 'Media',
    href: '#',
    dropdown: [
    { name: 'Blog & Newsletter', href: '#blog' },
    { name: 'Print & Digital Gallery', href: '#print-gallery' },
    { name: 'Video Gallery', href: '#video-gallery' }]

  },
  { name: 'Contact', href: '#contact' }];


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
          <div className="flex justify-between items-center py-2 sm:py-3 lg:py-3 min-h-14 sm:min-h-16 gap-1">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                  src="/assets/Dr.vijay-anand-reddy-logo.png"
                  alt="Dr. Palkonda Vijay Anand Reddy - MD Radiation Oncology, Director Apollo Cancer Centres"
                  className="h-10 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
                  style={{ maxWidth: '180px' }}
                  onError={(e) => {
                    // Try alternative paths
                    if (e.target.src.includes('/assets/')) {
                      e.target.src = 'assets/Dr.vijay-anand-reddy-logo.png';
                    } else if (e.target.src.includes('assets/Dr.vijay')) {
                      e.target.src = './assets/Dr.vijay-anand-reddy-logo.png';
                    } else {
                      // If all attempts fail, show fallback
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }} />

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

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index &&
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
                    }
                  </AnimatePresence>
                </div>
                )}
              <button className="bg-medical-blue text-white px-2.5 xl:px-3 2xl:px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium ml-1 xl:ml-2 2xl:ml-3 text-xs xl:text-sm 2xl:text-base whitespace-nowrap flex-shrink-0">
                Book Appointment
              </button>
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
                <button
                className="w-full bg-medical-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}>

                  Book Appointment
                </button>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </motion.header>
    </>);

};

export default Header;
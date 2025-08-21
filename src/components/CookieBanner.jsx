import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiShield, FiSettings } = FiIcons;

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setCookiePreferences(essentialOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (type) => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
  {
    key: 'essential',
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    required: true
  },
  {
    key: 'analytics',
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    required: false
  },
  {
    key: 'marketing',
    title: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements and track ad performance.',
    required: false
  },
  {
    key: 'functional',
    title: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    required: false
  }];


  return (
    <AnimatePresence>
      {showBanner &&
      <div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-medical-blue shadow-2xl">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {!showSettings ?
          // Main Cookie Banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-medical-dark mb-2">
                      We Value Your Privacy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use cookies to enhance your browsing experience, provide personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                      You can manage your preferences or learn more in our{' '}
                      <a href="/privacy" className="text-medical-blue hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                onClick={() => setShowSettings(true)}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-medical-blue hover:text-medical-blue transition-all duration-200 font-medium">

                    <SafeIcon icon={FiSettings} className="w-4 h-4" />
                    <span>Manage Preferences</span>
                  </button>
                  
                  <button
                onClick={handleRejectAll}
                className="px-6 py-3 border-2 border-medical-blue text-medical-blue rounded-lg hover:bg-medical-blue hover:text-white transition-all duration-200 font-medium">

                    Reject All
                  </button>
                  
                  <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-medical-blue text-white rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium shadow-lg">

                    Accept All
                  </button>
                </div>
              </div> :

          // Cookie Settings Panel
          <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-medical-dark">Cookie Preferences</h3>
                  <button
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">

                    <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {cookieTypes.map((cookie) =>
              <div key={cookie.key} className="bg-medical-light p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-medical-dark">{cookie.title}</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                      type="checkbox"
                      checked={cookiePreferences[cookie.key]}
                      onChange={() => togglePreference(cookie.key)}
                      disabled={cookie.required}
                      className="sr-only peer" />

                          <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-medical-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                    cookiePreferences[cookie.key] ? 'peer-checked:bg-medical-blue' : ''} ${
                    cookie.required ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                        </label>
                      </div>
                      <p className="text-gray-600 text-sm">{cookie.description}</p>
                      {cookie.required &&
                <p className="text-xs text-medical-blue mt-2 font-medium">Required</p>
                }
                    </div>
              )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                onClick={handleRejectAll}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-medical-blue hover:text-medical-blue transition-all duration-200 font-medium">

                    Reject All
                  </button>
                  
                  <button
                onClick={handleSavePreferences}
                className="px-6 py-3 bg-medical-blue text-white rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium shadow-lg">

                    Save Preferences
                  </button>
                </div>
              </div>
          }
          </div>
        </div>
      }
    </AnimatePresence>);

};

export default CookieBanner;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiHeart, FiUser, FiChevronLeft, FiChevronRight, FiQuote } = FiIcons;

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: "Priya Sharma",
    age: 45,
    condition: "Breast Cancer Survivor",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    rating: 5,
    quote: "Dr. Reddy not only saved my life but gave me hope when I had none. His compassionate approach and expertise made all the difference in my journey to recovery.",
    treatment: "Radiation Therapy + Chemotherapy",
    location: "Hyderabad"
  },
  {
    name: "Rajesh Kumar",
    age: 58,
    condition: "Lung Cancer Survivor",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    rating: 5,
    quote: "The personalized treatment plan Dr. Reddy created for me was exactly what I needed. Today, I'm cancer-free and living life to the fullest. Eternally grateful!",
    treatment: "IMRT + Targeted Therapy",
    location: "Secunderabad"
  },
  {
    name: "Lakshmi Devi",
    age: 62,
    condition: "Head & Neck Cancer Survivor",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    rating: 5,
    quote: "Dr. Reddy's team provided exceptional care throughout my treatment. The advanced technology and caring staff made my recovery smooth and successful.",
    treatment: "Stereotactic Radiosurgery",
    location: "Hyderabad"
  },
  {
    name: "Vikram Reddy",
    age: 52,
    condition: "Brain Tumor Survivor",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    rating: 5,
    quote: "The precision and care with which Dr. Reddy handled my brain tumor treatment was remarkable. I'm back to my normal life, thanks to his expertise.",
    treatment: "Gamma Knife Radiosurgery",
    location: "Hyderabad"
  },
  {
    name: "Sunitha Rao",
    age: 48,
    condition: "Cervical Cancer Survivor",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    rating: 5,
    quote: "Dr. Reddy's holistic approach to cancer treatment addressed not just the disease but also my emotional well-being. I felt supported every step of the way.",
    treatment: "Brachytherapy + External Radiation",
    location: "Hyderabad"
  }];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-14 medical-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have overcome cancer with Dr. Vijay Anand Reddy's 
            expert care and compassionate treatment.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden">

          {/* Background Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <SafeIcon icon={FiQuote} className="w-24 h-24 text-medical-blue" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* Patient Image & Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto lg:mx-0 shadow-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                    alt="Google Reviews"
                    className="w-16 h-16 object-contain" />

                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHeart} className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-medical-dark mb-2">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-gray-600 mb-2">
                Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
              </p>
              <p className="text-medical-blue font-semibold mb-4">
                {testimonials[currentTestimonial].condition}
              </p>

              {/* Rating */}
              <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) =>
                <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                )}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="bg-medical-light p-4 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Treatment Received:</div>
                <div className="font-semibold text-medical-blue">
                  {testimonials[currentTestimonial].treatment}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">

              <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial ? 'bg-medical-blue' : 'bg-gray-300'}`
                } />

              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">

              <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default Testimonials;
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import HighestRated from '../components/HighestRated';
import InternationalPatients from '../components/InternationalPatients';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import Test from '../components/Test';
import FinalTest from '../components/FinalTest';
import VideoTestimonials from '../components/VideoTestimonials';
import PhotoTestimonials from '../components/PhotoTestimonials';


const HomePage = () => {
  return (
    <div className="min-h-screen  bg-white">
 
      <Header />
    
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      {/* <HighestRated /> */}
      <Awards />
      {/* <Test /> */}
      {/* <Testimonials/> */}
        <FinalTest/>
      <PhotoTestimonials />
      <VideoTestimonials />
      <Blog />
      <Contact />
      <Footer />
      <CookieBanner />
      
    </div>);

};

export default HomePage;
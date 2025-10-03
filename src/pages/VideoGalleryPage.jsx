import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VideoGallery = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://wdg.fouita.com/widgets/0x1df9b8.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
    <div className="min-h-screen mt-12 bg-white flex flex-col">
    
      {/* Hero Section */}
      <section className="pt-32 pb-10 text-center bg-medical-blue/10">
        <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">Video Gallery</h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg px-4">
          Explore the latest videos and updates from our YouTube Channel.
        </p>
      </section>

      {/* Video Widget Section */}
      <section className="flex-grow w-full max-w-6xl mx-auto px-6 py-12">
        <div 
          data-key="Vijay Anand Youtube Channel Feed" 
          className="ft" 
          id="ftklks1c3"
          style={{ minHeight: '600px' }}
        ></div>
      </section>
 
    </div>
    <Footer />
    </>
  );
};

export default VideoGallery;

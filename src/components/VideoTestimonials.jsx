import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { youtubeTestimonials as allVideos } from '../data/testimonials';

const VideoTestimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedVideo, setSelectedVideo] = useState(null);

  // Show first 6 videos for homepage
  const youtubeTestimonials = allVideos.slice(0, 6);

  const openVideo = (id) => setSelectedVideo(id);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Patient Video Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our patients about their journey to recovery and the care they received.
          </p>
        </div>

        {!selectedVideo ? (
          <>
            {/* Mobile: Slider, Desktop: Grid */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7">
              <div className="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
                {youtubeTestimonials.map((video, index) => (
                  <motion.button
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative rounded-lg overflow-hidden shadow-lg bg-white focus:outline-none transition hover:scale-105 min-w-[80vw] md:min-w-0 snap-start"
                    onClick={() => openVideo(video.id)}
                    aria-label={`Play ${video.title}`}
                  >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-90" fill="none" viewBox="0 0 68 48">
                      <rect width="68" height="48" rx="8" fill="#000" fillOpacity="0.5" />
                      <path d="M45 24L27 34V14l18 10z" fill="#fff" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium px-4 py-3">
                    {video.title}
                  </div>
                </motion.button>
              ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="/testimonials"
                className="inline-block bg-medical-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-medical-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View All Video Testimonials
              </a>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video mb-6 rounded-lg overflow-hidden shadow-2xl"
            >
              <iframe
                title="Patient Testimonial Video"
                className="w-full h-full"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            <button
              onClick={closeVideo}
              className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-medical-dark transition-colors duration-200"
            >
              Back to Videos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;

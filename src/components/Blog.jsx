import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiCalendar, FiUser, FiArrowRight, FiHeart, FiShield, FiBrain } = FiIcons;

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const blogPosts = [
  {
    id: 1,
    title: "Early Detection: The Key to Successful Cancer Treatment",
    excerpt: "Understanding the importance of regular screenings and recognizing early warning signs can significantly improve treatment outcomes and survival rates.",
    image: "assets/key-to-early.png",
    category: "Prevention",
    readTime: "5 min read",
    date: "Dec 15, 2023",
    icon: FiShield
  },
  {
    id: 2,
    title: "Advanced Radiation Therapy: IMRT and IGRT Explained",
    excerpt: "Learn about the latest advancements in radiation therapy techniques that offer more precise treatment with fewer side effects.",
    image: "assets/Advanced-Radiation-Therapy.png",
    category: "Treatment",
    readTime: "7 min read",
    date: "Dec 12, 2023",
    icon: FiBrain
  },
  {
    id: 3,
    title: "Nutrition During Cancer Treatment: A Complete Guide",
    excerpt: "Essential nutritional guidelines to help maintain strength and support your body's healing process during cancer treatment.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&crop=center",
    category: "Wellness",
    readTime: "6 min read",
    date: "Dec 10, 2023",
    icon: FiHeart
  }];


  const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Prevention", count: 1 },
  { name: "Treatment", count: 1 },
  { name: "Wellness", count: 1 }];


  return (
    <section id="blog" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Patient Education & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights on cancer prevention, treatment options, 
            and wellness tips from Dr. Vijay Anand Reddy and our expert medical team.
          </p>
        </div>

        {/* Category Filter */}
        {/* <div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex flex-wrap justify-center gap-4 mb-12"
                     >
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                            index === 0 
                              ? 'bg-medical-blue text-white shadow-lg' 
                              : 'bg-medical-light text-gray-700 hover:bg-medical-blue hover:text-white'
                          }`}
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                     </div> */}

        {/* Featured Post */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-medical-blue to-medical-purple rounded-2xl overflow-hidden shadow-2xl mb-12">

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={blogPosts[0].icon} className="w-6 h-6 text-white" />
                </div>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Article
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center space-x-6 mb-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>Dr. Vijay Anand Reddy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <button className="bg-white text-medical-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg flex items-center space-x-2">
                <span>Read Full Article</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Blog Grid - Only 3 Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) =>
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">

              <div className="relative">
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute top-4 left-4">
                  <span className="bg-medical-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-medical-dark mb-3 line-clamp-2 group-hover:text-medical-blue transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="text-medical-blue font-semibold hover:text-medical-purple transition-colors duration-200 flex items-center space-x-2">
                  <span>Read More</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

};

export default Blog;
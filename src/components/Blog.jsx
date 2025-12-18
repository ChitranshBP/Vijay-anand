import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "How Is Cancer Caused? | Causes, Risk Factors & Prevention Guide",
      excerpt: "That is a question that cuts straight to the heart of what",
      image: "assets/home-img/blogs/blog-1.webp",
      category: "Blog",
      readTime: "5 min read",
      date: "Recent",
      url: "https://drvijayanandreddy.com/blog/"
    },
    {
      id: 2,
      title: "Top 10 Cancer Specialist Doctor in India",
      excerpt: "Choosing the right cancer specialist is one of the most important decisions",
      image: "assets/home-img/blogs/blog-2.webp",
      category: "Blog",
      readTime: "5 min read",
      date: "Recent",
      url: "https://drvijayanandreddy.com/blog/"
    },
    {
      id: 3,
      title: "Can Stage 2 Lung Cancer Be Cured {Expert Guide}",
      excerpt: "When faced with a Stage 2 lung cancer diagnosis, the immediate and",
      image: "assets/home-img/blogs/blog-3.webp",
      category: "Blog",
      readTime: "5 min read",
      date: "Recent",
      url: "https://drvijayanandreddy.com/blog/"
    }
  ]);

  useEffect(() => {
    fetch('https://drvijayanandreddy.com/wp-json/wp/v2/posts?per_page=3&_embed')
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(posts => {
        const formattedBlogs = posts.map((post, index) => {
          // Extract featured image
          let image = `assets/home-img/blogs/blog-${index + 1}.webp`;
          if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            image = post._embedded['wp:featuredmedia'][0].source_url || image;
          }

          // Extract excerpt and remove HTML tags
          let excerpt = post.excerpt?.rendered || "";
          excerpt = excerpt.replace(/<[^>]*>/g, '').trim();
          excerpt = excerpt.substring(0, 80) + (excerpt.length > 80 ? "" : "");

          return {
            id: post.id,
            title: post.title?.rendered || "Untitled Post",
            excerpt: excerpt || "Explore this article for valuable insights on cancer care and treatment.",
            image,
            category: "Blog",
            readTime: "5 min read",
            date: new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }) || "Recent",
            url: post.link || "https://drvijayanandreddy.com/blog/"
          };
        });

        if (formattedBlogs.length > 0) {
          setBlogPosts(formattedBlogs);
        }
      })
      .catch(error => {
        console.error("Error fetching blog posts:", error);
        // Keep fallback static blogs
      });
  }, []);


  return (
    <section id="blog" className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4">
            Blogs
          </h2>
        </motion.div>

        {/* Blog Cards - Mobile: Slider, Desktop: Grid */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:md:gap-8">
          <div className="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group min-w-[80vw] md:min-w-0 snap-start"
              >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Container - White Background */}
                <div className="bg-white p-5 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-medical-blue transition-colors duration-200">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-medical-blue font-semibold text-sm hover:text-medical-purple">
                    Read More
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://drvijayanandreddy.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-medical-blue  text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>View All Blogs</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

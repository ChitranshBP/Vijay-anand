import React, { useState, useEffect } from 'react';
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

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Early Detection: The Key to Successful Cancer Treatment",
      excerpt: "Understanding the importance of regular screenings and recognizing early warning signs can significantly improve treatment outcomes and survival rates.",
      image: "assets/key-to-early.png",
      category: "Prevention",
      readTime: "5 min read",
      date: "Dec 15, 2023",
      url: "https://drvijayanandreddy.com/blog/",
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
      url: "https://drvijayanandreddy.com/blog/",
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
      url: "https://drvijayanandreddy.com/blog/",
      icon: FiHeart
    }
  ]);

  const [loadingBlogs, setLoadingBlogs] = useState(false);

  useEffect(() => {
    setLoadingBlogs(true);

    fetch("https://drvijayanandreddy.com/blog/")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then(htmlString => {
        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");

        const formattedBlogs = [];

        // First try: Look for article elements
        let postElements = doc.querySelectorAll("article");

        // Second try: Look for h2/h3 with anchor tags (blog post titles)
        if (postElements.length === 0) {
          const titleLinks = doc.querySelectorAll("h2 a, h3 a");

          titleLinks.forEach((link, index) => {
            if (index >= 3) return; // Only take first 3 posts

            const title = link.textContent?.trim() || "Untitled Post";
            const url = link.href || "https://drvijayanandreddy.com/blog/";

            // Try to find the parent container to get excerpt and image
            let container = link.closest("div");
            while (container && !container.querySelector("img") && container.parentElement) {
              container = container.parentElement;
            }

            // Extract excerpt - look for p tags near the title
            let excerpt = "";
            if (container) {
              const paragraphs = container.querySelectorAll("p");
              for (let p of paragraphs) {
                const text = p.textContent?.trim();
                if (text && text.length > 20 && !text.includes("Read More")) {
                  excerpt = text;
                  break;
                }
              }
            }

            // Extract image
            let image = "assets/home-img/blogs/default-blog.webp";
            if (container) {
              const imgEl = container.querySelector("img");
              if (imgEl && imgEl.src) {
                image = imgEl.src;
              }
            }

            formattedBlogs.push({
              id: index + 1,
              title,
              excerpt: excerpt ? (excerpt.substring(0, 150) + (excerpt.length > 150 ? "..." : "")) : "Explore this article for valuable insights on cancer care and treatment.",
              image,
              category: "Blog",
              readTime: "5 min read",
              date: "Recent",
              url,
              icon: index === 0 ? FiShield : (index === 1 ? FiBrain : FiHeart)
            });
          });
        } else {
          // Process article elements
          postElements.forEach((post, index) => {
            if (index >= 3) return; // Only take first 3 posts

            const titleEl = post.querySelector("h1, h2, h3, .title, .entry-title");
            const title = titleEl?.textContent?.trim() || "Untitled Post";

            const linkEl = titleEl?.querySelector("a") || post.querySelector("a");
            const url = linkEl?.href || "https://drvijayanandreddy.com/blog/";

            const excerptEl = post.querySelector("p, .excerpt, .entry-summary");
            let excerpt = excerptEl?.textContent?.trim() || "";

            const imgEl = post.querySelector("img");
            const image = imgEl?.src || "assets/home-img/blogs/default-blog.webp";

            const dateEl = post.querySelector("time, .date, .published");
            const date = dateEl?.textContent?.trim() || "Recent";

            formattedBlogs.push({
              id: index + 1,
              title,
              excerpt: excerpt ? (excerpt.substring(0, 150) + (excerpt.length > 150 ? "..." : "")) : "Explore this article for valuable insights on cancer care and treatment.",
              image,
              category: "Blog",
              readTime: "5 min read",
              date,
              url,
              icon: index === 0 ? FiShield : (index === 1 ? FiBrain : FiHeart)
            });
          });
        }

        if (formattedBlogs.length > 0) {
          setBlogPosts(formattedBlogs);
        }
        setLoadingBlogs(false);
      })
      .catch(error => {
        console.error("Error fetching/parsing blog HTML:", error);
        // Keep fallback static blogs
        setLoadingBlogs(false);
      });
  }, []);


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
              <a
                href={blogPosts[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-medical-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg">
                <span>Read Full Article</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </a>
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
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-medical-blue font-semibold hover:text-medical-purple transition-colors duration-200">
                  <span>Read More</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

};

export default Blog;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiMessageSquare, FiMail, FiMapPin, FiShield, FiTarget, FiTrendingUp, FiUsers, FiArrowRight, FiBookOpen, FiChevronLeft, FiChevronRight, FiFileText, FiHome, FiGlobe } from 'react-icons/fi';
import { FaHospital, FaProcedures, FaUsers, FaHandHoldingHeart, FaMicroscope, FaXRay, FaDna, FaPills } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Test from '../components/Test';
import QuoteSection from '../components/QuoteSection';
import survivorQuotes from '../data/quotes';
import { youtubeTestimonials } from '../data/testimonials';

/**
 * Hyderabad-focused Treatment Page Template
 *
 * @param {Object} config - Page configuration object
 * @param {string} config.treatmentName - Name of the treatment (e.g., "Proton Therapy")
 * @param {string} config.keyword - Main SEO keyword (e.g., "proton therapy in Hyderabad")
 * @param {string} config.heroImage - Path to hero section image
 * @param {string} config.treatmentImage - Path to treatment detail image
 * @param {string} config.description - Brief description of the treatment
 * @param {string} config.overview - Detailed overview of the treatment
 * @param {Array} config.benefits - Array of benefits with {title, desc, icon}
 * @param {Array} config.processSteps - Array of treatment process steps with {step, title, desc, image}
 * @param {Array} config.idealFor - Array of ideal candidates or conditions
 * @param {Array} config.advantages - Array of treatment advantages in Hyderabad
 * @param {Array} config.faqs - Array of FAQ objects with {question, answer}
 * @param {number} config.quoteId - ID for survivor quote
 */
const HyderabadTreatmentTemplate = ({ config }) => {
    const videos = youtubeTestimonials.slice(0, 6).map((video, index) => ({
        id: index + 1,
        title: video.title,
        videoId: video.id,
        thumbnail: video.thumbnail
    }));

    const [openFaq, setOpenFaq] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        const existingScript = document.querySelector('script[src*="wacrs.com"]');
        if (existingScript) return;

        const script = document.createElement('script');
        script.src = 'https://app.wacrs.com/install-widget/bundle.js?key=484b0ca7-463d-4440-80be-d5486f4218a8';
        script.defer = true;
        script.id = 'wacrs-widget-script';
        script.setAttribute('data-active', '');
        script.setAttribute('data-widget-type', 'group');
        script.setAttribute('data-person', '87189a5a-e9a7-41af-b814-23d00163f7b8');
        document.body.appendChild(script);

        return () => {
            const scriptToRemove = document.getElementById('wacrs-widget-script');
            if (scriptToRemove && document.body.contains(scriptToRemove)) {
                document.body.removeChild(scriptToRemove);
            }
            const container = document.getElementById('whatapp-people-widget-87189a5a-e9a7-41af-b814-23d00163f7b8');
            if (container) container.innerHTML = '';
        };
    }, []);

    const stats = [
        { label: "Years of Experience", value: "30+", icon: <FiClock /> },
        { label: "Successful Treatments", value: "10000+", icon: <FiActivity /> },
        { label: "Happy Patients", value: "20000+", icon: <FiUserCheck /> },
        { label: "Awards Won", value: "50+", icon: <FiAward /> },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={config.heroImage}
                        alt={`${config.treatmentName} in Hyderabad`}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/60 to-cyan-50/70"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center mt-10 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Advanced Cancer Treatment in Hyderabad
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Best <span className="text-medical-blue">{config.treatmentName} in Hyderabad</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {config.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">95%+</div>
                                    <p className="text-xs text-gray-600">Success Rate</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">Apollo Hyderabad</div>
                                    <p className="text-xs text-gray-600">Jubilee Hills</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#book-appointment" className="px-8 py-4 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2">
                                    <FiCalendar /> Book Appointment
                                </a>
                                <a href="tel:+919676720002" className="px-8 py-4 bg-white text-medical-blue border border-medical-blue/30 rounded-lg font-semibold hover:bg-medical-light transition shadow-sm flex items-center justify-center gap-2">
                                    <FiPhone /> Call +91-9676720002
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div id="book-appointment">
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    #whatapp-people-widget-87189a5a-e9a7-41af-b814-23d00163f7b8 > div:nth-child(n+2) {
                                        display: none !important;
                                    }
                                `}} />
                                <div className="min-h-[400px]">
                                    <div data-active id="whatapp-people-widget-87189a5a-e9a7-41af-b814-23d00163f7b8"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Google Rating Section */}
            <section className="py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
                <div className="absolute inset-0 backdrop-blur-3xl bg-white/40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl p-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0"
                            >
                                <img
                                    src="/assets/3-best-best-business-of-2023.png"
                                    alt="3 Best Rated Business of 2023"
                                    className="h-24 md:h-28 w-auto object-contain"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            </motion.div>
                            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50">
                                    <svg className="w-12 h-12" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-3xl font-bold text-medical-dark">4.9</span>
                                    </div>
                                    <p className="text-gray-600 text-sm font-medium">Google Rating</p>
                                </div>
                            </motion.div>
                            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-medical-dark"
                            >
                                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-medical-blue to-medical-purple bg-clip-text text-transparent">2,500+</div>
                                <p className="text-gray-600 text-sm font-medium">Verified Reviews</p>
                            </motion.div>
                            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-medical-dark"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <FiCheckCircle className="text-green-500" size={24} />
                                    <span className="text-2xl font-bold">Hyderabad's Most Trusted</span>
                                </div>
                                <p className="text-gray-600 text-sm font-medium">{config.treatmentName} Center</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <a href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-medical-blue to-medical-purple text-white rounded-lg font-bold hover:shadow-xl transition-all shadow-lg">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    Read Reviews
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 bg-medical-blue text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl mb-2 flex justify-center opacity-80">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                                <div className="text-blue-100 text-sm uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Treatment Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            World-Class {config.treatmentName} in Hyderabad
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Experience cutting-edge {config.keyword} with advanced technology and proven success rates at Apollo Cancer Centres, Jubilee Hills, Hyderabad.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaUsers className="text-medical-blue" /> About {config.treatmentName}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {config.overview}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                {config.benefits.map((benefit, idx) => (
                                    <div key={idx} className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                        <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1">{benefit.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-medical-dark">{benefit.title}</h4>
                                            <p className="text-sm text-gray-500">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src={config.treatmentImage}
                                alt={`${config.treatmentName} in Hyderabad`}
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Schedule Your Consultation at Apollo Hyderabad
                        </h3>
                        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Get expert guidance on {config.keyword}. Book a personalized consultation with Dr. Vijay Anand Reddy at our Jubilee Hills center today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#book-appointment" className="px-8 py-4 bg-white text-medical-blue rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                                <FiCalendar /> Book Consultation Now
                            </a>
                            <a href="tel:+919676720002" className="px-8 py-4 bg-medical-dark text-white border-2 border-white rounded-lg font-semibold hover:bg-medical-purple transition flex items-center justify-center gap-2">
                                <FiPhone /> Call +91-9676720002
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Doctor Section */}
            <section className="pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/vijay-anand-about.jpg"
                                    alt="Dr. Vijay Anand Reddy - Best Cancer Doctor in Hyderabad"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                    <h3 className="text-2xl font-bold">Dr. Vijay Anand Reddy</h3>
                                    <p className="opacity-90">Director, Apollo Cancer Centres Hyderabad</p>
                                </div>
                            </div>
                        </motion.div>

                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Hyderabad's Leading Cancer Specialist
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                About Dr. Vijay Anand Reddy
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Dr. Vijay Anand Reddy is Hyderabad's most trusted radiation oncologist with over 30 years of experience. As the Director of Apollo Cancer Centres, Hyderabad, he has pioneered advanced cancer treatment techniques in the city.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Based in Jubilee Hills, Hyderabad, Dr. Reddy's clinic offers the best {config.keyword} with cutting-edge technology, making him the first choice for patients seeking world-class cancer treatment in Hyderabad.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiAward size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">30+ Years in Hyderabad</h4>
                                        <p className="text-xs text-gray-500">Pioneer in the City</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiMapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Jubilee Hills Location</h4>
                                        <p className="text-xs text-gray-500">Easily Accessible</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiUsers size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">10,000+ Patients Treated</h4>
                                        <p className="text-xs text-gray-500">Across Hyderabad & Telangana</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiTrendingUp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Advanced Technology</h4>
                                        <p className="text-xs text-gray-500">Latest Equipment</p>
                                    </div>
                                </div>
                            </div>

                            <a href="/achievements" className="inline-flex items-center gap-2 text-medical-blue font-semibold hover:gap-3 transition-all">
                                Read Full Profile <FiArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <QuoteSection quoteId={config.quoteId} quotes={survivorQuotes} />

            {/* Treatment Process */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Our {config.treatmentName} Process in Hyderabad
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            A systematic, precision-driven approach to {config.treatmentName} at Apollo Cancer Centres, Jubilee Hills, Hyderabad.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {config.processSteps.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-medical-blue relative overflow-hidden group">
                                <div className="relative h-40 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                    <div className="absolute top-3 right-3 bg-medical-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">{item.step}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-medical-dark mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal For Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Who Can Benefit from {config.treatmentName} in Hyderabad?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            {config.treatmentName} is particularly effective for specific cancer types and situations. Find out if you're an ideal candidate for this treatment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {config.idealFor.map((item, idx) => (
                            <div key={idx} className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="flex items-start gap-3">
                                    <FiCheckCircle className="text-medical-blue flex-shrink-0 mt-1" size={20} />
                                    <p className="text-gray-700 font-medium">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Hyderabad */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Why Choose Hyderabad for {config.treatmentName}?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Hyderabad offers world-class cancer treatment facilities at Apollo Cancer Centres, Jubilee Hills, with significant cost advantages compared to international destinations.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ul className="space-y-4">
                            {config.advantages.map((advantage, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium bg-white p-4 rounded-lg shadow-sm">
                                    <FiCheckCircle className="text-medical-blue flex-shrink-0" size={20} />
                                    {advantage}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-18 mt-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Patient Reviews & Ratings
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark mb-4">
                                Hyderabad's Most Reviewed <span className="text-medical-blue">{config.treatmentName} Center</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Trusted by thousands of patients across Hyderabad and Telangana for exceptional cancer care.
                            </p>
                        </motion.div>
                    </div>
                    <Test />
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Success Stories from Hyderabad
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Hear from our patients about their successful treatment journey at Apollo Hyderabad.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="relative aspect-video bg-black">
                            {currentVideo ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${currentVideo.videoId}?rel=0`}
                                    title={currentVideo.title}
                                    className="w-full h-full"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="flex items-center justify-center h-full text-white">Loading...</div>
                            )}
                        </div>

                        <div className="relative p-6 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0">
                                    <FiChevronLeft size={24} />
                                </button>
                                <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    {videos.map((video) => (
                                        <div
                                            key={video.id}
                                            onClick={() => setCurrentVideo(video)}
                                            className={`flex-shrink-0 w-64 cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300 ${currentVideo?.id === video.id ? 'border-red-600 ring-2 ring-red-100' : 'border-transparent hover:border-gray-200'}`}
                                        >
                                            <div className="relative aspect-video">
                                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                    <div className={`w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform ${currentVideo?.id === video.id ? 'opacity-0' : 'opacity-100'}`}>
                                                        <FiPlay size={20} fill="currentColor" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 bg-gray-50">
                                                <h4 className={`text-sm font-semibold line-clamp-2 ${currentVideo?.id === video.id ? 'text-red-600' : 'text-gray-800'}`}>
                                                    {video.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0">
                                    <FiChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-14">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 mb-6 text-center">
                            Common questions about {config.keyword} at Apollo Cancer Centres, Hyderabad.
                        </p>
                        <div className="space-y-4">
                            {config.faqs.map((faq, index) => (
                                <div key={index} className="bg-medical-light rounded-xl shadow-sm overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                                    >
                                        <span className="font-bold text-gray-800">{faq.question}</span>
                                        {openFaq === index ? <FiChevronUp className="text-medical-blue" /> : <FiChevronDown className="text-gray-400" />}
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HyderabadTreatmentTemplate;

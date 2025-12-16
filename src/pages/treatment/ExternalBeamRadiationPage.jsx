import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiAlertCircle, FiInfo, FiXCircle, FiHeart, FiShield, FiTarget, FiTrendingUp, FiUsers, FiZap, FiX, FiArrowRight, FiBookOpen, FiChevronLeft, FiChevronRight, FiFileText, FiHome, FiGlobe } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaUsers, FaProcedures, FaHandHoldingHeart, FaStethoscope, FaNotesMedical, FaMicroscope, FaXRay, FaSyringe, FaHeartbeat, FaLungs, FaDna, FaFlask, FaPills } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Test from '../../components/Test';

const ExternalBeamRadiationPage = () => {
    const videos = [
        { id: 1, title: "Talk by a cancer survivor | Happy Patient", videoId: "ugvDtjZrXxE", thumbnail: "https://img.youtube.com/vi/ugvDtjZrXxE/hqdefault.jpg" },
        { id: 2, title: "What do my patients think about my treatment?", videoId: "hefT59hk4Tk", thumbnail: "https://img.youtube.com/vi/hefT59hk4Tk/hqdefault.jpg" },
        { id: 3, title: "Stage 3 Breast Cancer - Patient Testimonial", videoId: "_fQ1-kAPh64", thumbnail: "https://img.youtube.com/vi/_fQ1-kAPh64/hqdefault.jpg" },
        { id: 4, title: "Cervical Cancer Treatment Success", videoId: "MaWOvdr6RDw", thumbnail: "https://img.youtube.com/vi/MaWOvdr6RDw/hqdefault.jpg" },
        { id: 5, title: "Vocal Cord Radiation Treatment", videoId: "532AAKNrSb4", thumbnail: "https://img.youtube.com/vi/532AAKNrSb4/hqdefault.jpg" },
        { id: 6, title: "I am a survivor - Patient Story", videoId: "C_qQ8O6LnS0", thumbnail: "https://img.youtube.com/vi/C_qQ8O6LnS0/hqdefault.jpg" },
    ];

    const [openFaq, setOpenFaq] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
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

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    // Load WhatsApp widget script
    useEffect(() => {
        const existingScript = document.querySelector('script[src*="wacrs.com"]');
        if (existingScript) {
            return;
        }

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
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    const stats = [
        { label: "Years of Experience", value: "30+", icon: <FiClock /> },
        { label: "Successful Treatments", value: "10000+", icon: <FiActivity /> },
        { label: "Happy Patients", value: "20000+", icon: <FiUserCheck /> },
        { label: "Awards Won", value: "50+", icon: <FiAward /> },
    ];

    const faqs = [
        {
            question: "What is the external beam radiation therapy cost in India?",
            answer: "External Beam Radiation Therapy cost in India is significantly more affordable than Western countries, typically ranging from ₹1-5 lakhs per cycle depending on the drug type and cancer stage. The total external beam radiation therapy cost in India can vary from ₹5-30 lakhs for a complete treatment course. Dr. Vijay Anand Reddy provides transparent pricing and works with insurance providers to make treatment accessible."
        },
        {
            question: "How effective is external beam radiation therapy for cancer treatment?",
            answer: "External Beam Radiation Therapy has shown remarkable success rates, particularly for melanoma, lung cancer, kidney cancer, and lymphoma. Success rates vary by cancer type but can reach 40-60% for certain cancers. Dr. Vijay Anand Reddy uses the latest external beam radiation therapy protocols to maximize treatment outcomes."
        },
        {
            question: "What are the side effects of external beam radiation therapy?",
            answer: "External Beam Radiation Therapy typically causes fewer side effects than chemotherapy. Common side effects include fatigue, skin reactions, flu-like symptoms, and immune-related inflammation. Dr. Reddy's team provides comprehensive management of side effects with supportive care medicines."
        },
        {
            question: "Which cancers can be treated with external beam radiation therapy in India?",
            answer: "External Beam Radiation Therapy is effective for melanoma, non-small cell lung cancer, kidney cancer, bladder cancer, head and neck cancers, Hodgkin lymphoma, and certain types of breast and colon cancer. Dr. Vijay Anand Reddy evaluates each patient's biomarkers to determine external beam radiation therapy eligibility."
        },
        {
            question: "How long does external beam radiation therapy treatment take?",
            answer: "External Beam Radiation Therapy is typically administered every 2-6 weeks for 6 months to 2 years, depending on cancer type and response. Each infusion takes 30 minutes to a few hours. Dr. Reddy creates personalized treatment schedules based on individual patient needs and cancer characteristics."
        },
        {
            question: "Who is the best external beam radiation therapy doctor in India?",
            answer: "Dr. Vijay Anand Reddy is recognized as one of the best external beam radiation therapy doctors in India, with over 30 years of experience in medical oncology. His expertise in checkpoint inhibitors, CAR-T cell therapy, and personalized external beam radiation therapy protocols makes him the preferred choice for cancer external beam radiation therapy treatment."
        },
        {
            question: "Can external beam radiation therapy cure cancer?",
            answer: "External Beam Radiation Therapy can lead to long-term remission and even cure in some patients, especially with melanoma and certain blood cancers. Response rates vary by cancer type. Dr. Vijay Anand Reddy evaluates each patient's cancer characteristics and biomarkers to determine the likelihood of successful external beam radiation therapy response."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                        alt="Medical Background"
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
                                Advanced Cancer External Beam Radiation Therapy
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Best <span className="text-medical-blue">External Beam Radiation Therapy Cost</span> in India
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Seeking affordable <strong>external beam radiation therapy cost in India</strong>? Dr. Vijay Anand Reddy offers cutting-edge external beam radiation therapy treatment with the latest photon and electron beams at Apollo Cancer Centres Hyderabad. Get world-class cancer care at 60-70% lower cost than Western countries.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">70%</div>
                                    <p className="text-xs text-gray-600">Cost Savings vs USA</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                    <p className="text-xs text-gray-600">Years Experience</p>
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

            {/* Google Rating Highlight Section */}
            <section className="py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
                <div className="absolute inset-0 backdrop-blur-3xl bg-white/40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl p-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                            {/* Best Business Award Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex-shrink-0"
                            >
                                <img
                                    src="/assets/3-best-best-business-of-2023.png"
                                    alt="3 Best Rated Business of 2023"
                                    className="h-24 md:h-28 w-auto object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </motion.div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                            {/* Google Logo & Rating */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
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

                            {/* Divider */}
                            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                            {/* Reviews Count */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-medical-dark"
                            >
                                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-medical-blue to-medical-purple bg-clip-text text-transparent">2,500+</div>
                                <p className="text-gray-600 text-sm font-medium">Verified Patient Reviews</p>
                            </motion.div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                            {/* Trust Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-medical-dark"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <FiCheckCircle className="text-green-500" size={24} />
                                    <span className="text-2xl font-bold">Most Trusted</span>
                                </div>
                                <p className="text-gray-600 text-sm font-medium">Oncology Expert in India</p>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Advanced External Beam Radiation Therapy Cancer Treatment in India</h2>
                        <p className="text-gray-600 text-lg">
                            Experience cutting-edge external beam radiation therapy with the latest checkpoint inhibitors, CAR-T cell therapy, and personalized protocols. Dr. Vijay Anand Reddy offers the best external beam radiation therapy cost in India with proven outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaUsers className="text-medical-blue" /> Overview
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                External Beam Radiation Therapy harnesses your body's high-energy radiation to destroy cancer cells. Dr. Vijay Anand Reddy, a leading <strong>external beam radiation therapy specialist in India</strong>, offers advanced checkpoint inhibitors (anti-PD-1, anti-PD-L1, anti-CTLA-4), CAR-T cell therapy, and cancer vaccines tailored to each patient's unique cancer type and biomarker profile.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiUsers size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Immune Activation</h4>
                                        <p className="text-sm text-gray-500">Unleashes immune system</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiTarget size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Precision Targeting</h4>
                                        <p className="text-sm text-gray-500">Specific cancer markers</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaDna size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Biomarker Testing</h4>
                                        <p className="text-sm text-gray-500">PD-L1, TMB, MSI testing</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiShield size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Fewer Side Effects</h4>
                                        <p className="text-sm text-gray-500">Better tolerance</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaHeartbeat size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Long-term Control</h4>
                                        <p className="text-sm text-gray-500">Durable responses</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiActivity size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Quality of Life</h4>
                                        <p className="text-sm text-gray-500">Maintained throughout</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="/assets/treatments/radiation-oncology.webp"
                                alt="External Beam Radiation Therapy Treatment in India"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Cost Breakdown Section */}
                    <div className="mt-12 bg-medical-light p-8 rounded-2xl border border-medical-blue/20">
                        <h3 className="text-2xl font-bold text-medical-dark mb-6 text-center">External Beam Radiation Therapy Cost in India - Transparent Pricing</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Per Cycle Cost</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">₹1-5 Lakhs</div>
                                <p className="text-sm text-gray-600">Varies by drug type</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Complete Course</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">₹5-30 Lakhs</div>
                                <p className="text-sm text-gray-600">Full treatment duration</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Cost Savings</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">60-70%</div>
                                <p className="text-sm text-gray-600">Lower than USA/UK</p>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mt-6">
                            <strong>Note:</strong> Exact external beam radiation therapy cost in India depends on cancer type, drug selection, biomarker status, and treatment duration. Contact us for personalized cost estimate.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Schedule Your External Beam Radiation Therapy Consultation with Dr. Vijay Anand Reddy
                        </h3>
                        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Get expert guidance on advanced external beam radiation therapy treatment in India. Book a personalized consultation to discuss your cancer treatment options and customized care plan.
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
                                    alt="Dr. Vijay Anand Reddy - Best External Beam Radiation Therapy Doctor in India"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                    <h3 className="text-2xl font-bold">Dr. Vijay Anand Reddy</h3>
                                    <p className="opacity-90">Director, Apollo Cancer Centres</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Meet the Expert
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                About Dr. Vijay Anand Reddy
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Dr. Vijay Anand Reddy is a distinguished oncologist with over 30 years of experience in providing world-class cancer care. As the Director of Apollo Cancer Centres, Hyderabad, he has pioneered advanced external beam radiation therapy protocols and personalized cancer treatment approaches in India.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                He is renowned for his expertise in external beam radiation therapy, checkpoint inhibitors, and CAR-T cell therapy. His commitment to personalized patient care, use of latest external beam radiation therapy drugs, and evidence-based medicine has earned him recognition as one of India's leading external beam radiation therapy specialists.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiAward size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">International Recognition</h4>
                                        <p className="text-xs text-gray-500">Global Awards & Honors</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiBookOpen size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Published Author</h4>
                                        <p className="text-xs text-gray-500">"I Am A Survivor"</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiUsers size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Patient-Centered</h4>
                                        <p className="text-xs text-gray-500">Compassionate Care</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <FiTrendingUp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Innovator</h4>
                                        <p className="text-xs text-gray-500">Advanced Protocols</p>
                                    </div>
                                </div>
                            </div>

                            <a href="/achievements" className="inline-flex items-center gap-2 text-medical-blue font-semibold hover:gap-3 transition-all">
                                Read Full Profile <FiArrowRight />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Treatment Process */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our External Beam Radiation Therapy Treatment Process</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            A systematic, patient-centric approach to external beam radiation therapy treatment. Dr. Vijay Anand Reddy and his team follow a comprehensive 4-step process for optimal cancer treatment outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Biomarker Testing", desc: "Comprehensive PD-L1, TMB, MSI testing.", image: "https://img.freepik.com/free-photo/doctor-patient-discussing-medical-report_1421-66.jpg" },
                            { step: "02", title: "Treatment Planning", desc: "Personalized external beam radiation therapy protocol.", image: "https://img.freepik.com/free-photo/doctor-analyzing-x-ray-scan_1421-67.jpg" },
                            { step: "03", title: "Infusion & Monitoring", desc: "Safe drug delivery with monitoring.", image: "https://img.freepik.com/free-photo/medical-team-meeting_1421-68.jpg" },
                            { step: "04", title: "Follow-up Care", desc: "Regular monitoring and response assessment.", image: "https://img.freepik.com/free-photo/surgeons-operating-room_1421-69.jpg" }
                        ].map((item, idx) => (
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

                    {/* CTA - Start Treatment */}
                    <div className="mt-12 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-medical-blue max-w-4xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-medical-dark mb-4">
                                Begin Your External Beam Radiation Therapy Treatment Journey Today
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                Don't wait to start your journey to recovery. Dr. Vijay Anand Reddy and our expert team are ready to provide you with the best external beam radiation therapy cancer treatment in India with world-class care.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#book-appointment" className="px-8 py-4 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2">
                                    <FiCalendar /> Schedule Appointment
                                </a>
                                <a href="tel:+919676720002" className="px-8 py-4 bg-white text-medical-blue border-2 border-medical-blue rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2">
                                    <FiPhone /> Call +91-9676720002
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apollo Hospital External Beam Radiation Therapy Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">External Beam Radiation Therapy at Apollo Cancer Centres India</h2>
                        <p className="text-gray-600 text-lg">
                            State-of-the-art external beam radiation therapy infrastructure with world-class facilities, latest drugs, expert care, and the best external beam radiation therapy doctor in India - Dr. Vijay Anand Reddy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaHospital className="text-medical-blue" /> About Apollo External Beam Radiation Therapy Center
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Apollo Cancer Centres is equipped with India's most advanced external beam radiation therapy facilities, offering comprehensive cancer treatment with the latest checkpoint inhibitors, CAR-T cell therapy, and cancer vaccines. Under the leadership of Dr. Vijay Anand Reddy, our center provides world-class external beam radiation therapy care.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our external beam radiation therapy program combines evidence-based medicine with a multidisciplinary team approach, ensuring each patient receives personalized treatment plans tailored to their specific biomarker profile and cancer type.
                            </p>
                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20">
                                <h4 className="font-bold text-medical-dark mb-3 flex items-center gap-2">
                                    <FiCheckCircle className="text-medical-blue" /> Key Highlights
                                </h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Latest external beam radiation therapy drugs (Pembrolizumab, Nivolumab, Atezolizumab)
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Comprehensive biomarker testing (PD-L1, TMB, MSI)
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        CAR-T cell therapy capabilities
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        24/7 immune-related adverse event management
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                                alt="Apollo Cancer Centre External Beam Radiation Therapy Facility"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Advanced Facilities Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-medical-dark mb-8 text-center">Advanced External Beam Radiation Therapy Facilities & Equipment</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaPills className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Latest External Beam Radiation Therapy Drugs</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Access to newest checkpoint inhibitors including Pembrolizumab (Keytruda), Nivolumab (Opdivo), Atezolizumab (Tecentriq), and CAR-T cell therapies approved internationally.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaMicroscope className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Biomarker Testing Lab</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Advanced laboratory for PD-L1 expression, tumor mutational burden (TMB), microsatellite instability (MSI), and comprehensive genomic profiling.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaSyringe className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Infusion Centers</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Dedicated external beam radiation therapy infusion centers with comfortable recliners, trained nurses, and strict safety protocols for drug administration.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaNotesMedical className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Immune Toxicity Management</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Specialized team for managing immune-related adverse events with immediate access to immunosuppressive medications and supportive care.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaHeartbeat className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Patient Monitoring Systems</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Real-time monitoring during external beam radiation therapy infusions with immediate intervention capabilities for any immune-related reactions.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaDna className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Precision Medicine Lab</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Next-generation sequencing and liquid biopsy facilities to identify optimal external beam radiation therapy candidates and monitor treatment response.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Treatment Approach */}
                    <div className="mt-12 bg-medical-light p-8 rounded-2xl border border-medical-blue/20">
                        <h3 className="text-2xl font-bold text-medical-dark mb-6 text-center">Our Comprehensive Treatment Approach</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiTarget className="text-medical-blue" /> Biomarker-Driven Selection
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Every external beam radiation therapy plan is based on comprehensive biomarker testing including PD-L1 expression, TMB, MSI status, and tumor-infiltrating lymphocytes to identify best responders.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiUsers className="text-medical-blue" /> Multidisciplinary Team
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Our tumor board includes medical oncologists, immunologists, pathologists, radiologists, and support staff who collaborate for comprehensive external beam radiation therapy care.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiShield className="text-medical-blue" /> Safety Protocols
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Strict protocols for immune-related adverse event management with immediate access to immunosuppressive medications and specialist consultations.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiHeart className="text-medical-blue" /> Holistic Support
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Beyond medical treatment, we provide counseling, nutrition support, lifestyle guidance, and rehabilitation services for complete patient well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                Why Choose Dr. Vijay Anand Reddy?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                As a pioneer in external beam radiation therapy in India, Dr. Vijay Anand Reddy brings world-class expertise in photon and electron beams. His dedication to evidence-based medicine and patient outcomes makes him the preferred choice for external beam radiation therapy treatment.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Best external beam radiation therapy doctor in India with 30+ years experience",
                                    "Expertise in latest checkpoint inhibitors and CAR-T therapy",
                                    "Access to cutting-edge biomarker testing technologies",
                                    "Multidisciplinary team for comprehensive care",
                                    "Proven track record with high success rates",
                                    "Affordable external beam radiation therapy treatment costs in India"
                                ].map((reason, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <FiCheckCircle className="text-medical-blue flex-shrink-0" size={20} />
                                        {reason}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-medical-blue/10 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition border border-medical-blue/20">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiClock size={28} /></div>
                                <div className="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                <h4 className="font-bold text-medical-dark text-sm">Years Experience</h4>
                            </div>
                            <div className="bg-medical-blue/15 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition border border-medical-blue/30">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiActivity size={28} /></div>
                                <div className="text-3xl font-bold text-medical-blue mb-1">10k+</div>
                                <h4 className="font-bold text-medical-dark text-sm">Cases Treated</h4>
                            </div>
                            <div className="bg-medical-blue/20 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition border border-medical-blue/40">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiHeart size={28} /></div>
                                <div className="text-3xl font-bold text-medical-blue mb-1">24/7</div>
                                <h4 className="font-bold text-medical-dark text-sm">Support</h4>
                            </div>
                            <div className="bg-medical-blue/25 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition border border-medical-blue/50">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiUsers size={28} /></div>
                                <div className="text-3xl font-bold text-medical-blue mb-1">95%</div>
                                <h4 className="font-bold text-medical-dark text-sm">Success Rate</h4>
                            </div>
                        </div>
                    </div>

                    {/* CTA - Expert Care */}
                    <div className="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Experience World-Class External Beam Radiation Therapy Treatment in India
                        </h3>
                        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of patients who have trusted Dr. Vijay Anand Reddy, the best external beam radiation therapy doctor in India, for advanced cancer treatment with proven results and compassionate care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#book-appointment" className="px-8 py-4 bg-white text-medical-blue rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2 text-lg">
                                <FiCalendar /> Book Your Consultation
                            </a>
                            <a href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-medical-blue border-2 border-white rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2">
                                <FiMapPin /> Visit Our Center
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* International Patients Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Global Care
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            International Patient Services
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We provide comprehensive support for international patients seeking affordable and high-quality external beam radiation therapy treatment in India.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                icon: <FiMessageSquare size={32} />,
                                title: "Online Consultation",
                                desc: "Initial video consultation to discuss external beam radiation therapy options before travel."
                            },
                            {
                                icon: <FiFileText size={32} />,
                                title: "Visa Assistance",
                                desc: "Medical visa invitation letters and complete travel documentation support."
                            },
                            {
                                icon: <FiHome size={32} />,
                                title: "Accommodation",
                                desc: "Assistance with comfortable stay options near the hospital during treatment."
                            },
                            {
                                icon: <FiGlobe size={32} />,
                                title: "Interpreter Services",
                                desc: "Language support to ensure clear communication throughout treatment journey."
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition group">
                                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-medical-blue mb-4 shadow-sm group-hover:scale-110 transition">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-medical-dark mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-medical-blue rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-white max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Plan Your Treatment Journey</h3>
                                <p className="text-blue-100 text-lg mb-6">
                                    Our dedicated International Patient Care team is available 24/7 to assist with treatment planning, cost estimates, and travel arrangements for external beam radiation therapy in India.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        <FiCheckCircle className="text-green-400" /> <span>Priority Appointments</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        <FiCheckCircle className="text-green-400" /> <span>Airport Transfers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <a href="https://wa.me/919676720002" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-medical-blue rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                                    <FiMessageSquare /> Chat on WhatsApp
                                </a>
                                <a href="mailto:cancercare@drvijayanandreddy.com" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center gap-2">
                                    <FiMail /> Email Medical Reports
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Most Reviewed & Highest Rated Section */}
            <section className="py-18 mt-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                ⭐ Patient Reviews & Ratings
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark mb-4">
                                Most Reviewed & Highest Rated <span className="text-medical-blue">External Beam Radiation Therapy Doctor in India</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Dr. Vijay Anand Reddy has earned the trust of thousands of cancer patients through exceptional care, advanced external beam radiation therapy treatments, and outstanding clinical outcomes.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-blue"
                        >
                            <div className="text-4xl font-bold text-medical-blue mb-2">4.9/5</div>
                            <p className="text-gray-600 font-semibold">Average Rating</p>
                            <p className="text-xs text-gray-500 mt-1">Based on 2,500+ reviews</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-purple"
                        >
                            <div className="text-4xl font-bold text-medical-purple mb-2">2,500+</div>
                            <p className="text-gray-600 font-semibold">Patient Reviews</p>
                            <p className="text-xs text-gray-500 mt-1">Verified testimonials</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-blue"
                        >
                            <div className="text-4xl font-bold text-medical-blue mb-2">98%</div>
                            <p className="text-gray-600 font-semibold">Recommendation Rate</p>
                            <p className="text-xs text-gray-500 mt-1">Would recommend to others</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-purple"
                        >
                            <div className="text-4xl font-bold text-medical-purple mb-2">#1</div>
                            <p className="text-gray-600 font-semibold">Ranked in India</p>
                            <p className="text-xs text-gray-500 mt-1">For External Beam Radiation Therapy</p>
                        </motion.div>
                    </div>

                    <Test />
                </div>
            </section>

            {/* Patient Video Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Patient Stories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Video Testimonials
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Hear from our patients about their successful treatment journey with Dr. Vijay Anand Reddy.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Main Video Player */}
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
                                <div className="flex items-center justify-center h-full text-white">
                                    Loading...
                                </div>
                            )}
                        </div>

                        {/* Video Thumbnails Navigation */}
                        <div className="relative p-6 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => scroll('left')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Previous videos"
                                >
                                    <FiChevronLeft size={24} />
                                </button>

                                <div
                                    ref={scrollContainerRef}
                                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    {videos.map((video) => (
                                        <div
                                            key={video.id}
                                            onClick={() => setCurrentVideo(video)}
                                            className={`flex-shrink-0 w-64 cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300 ${currentVideo?.id === video.id
                                                ? 'border-red-600 ring-2 ring-red-100'
                                                : 'border-transparent hover:border-gray-200'
                                                }`}
                                        >
                                            <div className="relative aspect-video">
                                                <img
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                    <div className={`w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform ${currentVideo?.id === video.id ? 'opacity-0' : 'opacity-100'}`}>
                                                        <FiPlay size={20} fill="currentColor" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 bg-gray-50 h-full">
                                                <h4 className={`text-sm font-semibold line-clamp-2 ${currentVideo?.id === video.id ? 'text-red-600' : 'text-gray-800'}`}>
                                                    {video.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => scroll('right')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Next videos"
                                >
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">Frequently Asked Questions</h2>
                        <p className="text-gray-600 mb-6 text-center">
                            Get answers to common questions about treatment, costs, and what to expect from your treatment journey.
                        </p>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
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

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={closeVideoModal}
                >
                    <div
                        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition"
                        >
                            <FiXCircle size={24} />
                        </button>
                        <div className="aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="p-6 bg-white">
                            <h3 className="text-xl font-bold text-medical-dark">{selectedVideo.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ExternalBeamRadiationPage;

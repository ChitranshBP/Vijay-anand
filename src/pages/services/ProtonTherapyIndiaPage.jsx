import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiAlertCircle, FiInfo, FiXCircle, FiHeart, FiShield, FiTarget, FiTrendingUp, FiUsers, FiZap, FiX } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaProcedures, FaHandHoldingHeart, FaStethoscope, FaNotesMedical, FaMicroscope, FaXRay, FaSyringe, FaHeartbeat, FaLungs, FaDna, FaFlask, FaPills } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProtonTherapyIndiaPage = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
    };

    const openVideoModal = (video) => {
        setSelectedVideo(video);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    const openImageModal = (image, index) => {
        setSelectedImage({ src: image, index });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const stats = [
        { label: "Years of Experience", value: "30+", icon: <FiClock /> },
        { label: "Successful Treatments", value: "5000+", icon: <FiActivity /> },
        { label: "Happy Patients", value: "10000+", icon: <FiUserCheck /> },
        { label: "Awards Won", value: "50+", icon: <FiAward /> },
    ];

    const faqs = [
        {
            question: "Who is the best Proton Therapy doctor in India?",
            answer: "Dr. Vijay Anand Reddy is widely recognized as one of the best Proton Therapy doctors in India, known for his expertise in advanced radiation oncology, international training, and compassionate patient care. With over 30 years of experience and access to state-of-the-art Proton Therapy technology at Apollo Cancer Centres, he provides world-class treatment."
        },
        {
            question: "What are the advantages of Proton Therapy over conventional radiation?",
            answer: "Proton Therapy offers superior precision, delivering up to 50% less radiation to healthy tissues compared to conventional radiation. Key advantages include minimal damage to surrounding organs, significantly reduced side effects, lower risk of secondary cancers, better outcomes for pediatric and complex cancers, and improved quality of life during treatment."
        },
        {
            question: "How do I choose the top doctor for Proton Therapy in India?",
            answer: "Look for a specialist with extensive experience in radiation oncology, international certifications (like ESMO), access to cutting-edge Proton Therapy technology, a proven track record with complex cases, and a multidisciplinary team approach. Dr. Vijay Anand Reddy meets all these criteria and has successfully treated thousands of patients."
        },
        {
            question: "Which cancers can be treated with Proton Therapy?",
            answer: "Proton Therapy is highly effective for brain and spinal cord tumors, all types of pediatric cancers, prostate cancer, early-stage lung cancer, head and neck cancers, liver tumors, pancreatic cancer, and tumors located near critical organs like the heart, eyes, or major blood vessels. It's particularly beneficial when precision is crucial to preserve organ function."
        },
        {
            question: "What is the treatment duration for Proton Therapy?",
            answer: "Treatment typically involves daily sessions (Monday-Friday) over 4-8 weeks, depending on the cancer type, stage, and location. Each session lasts only 15-30 minutes, and it's an outpatient procedure. The planning phase takes 1-2 weeks before treatment begins. Dr. Vijay Anand Reddy's team provides comprehensive support throughout the entire treatment journey."
        },
        {
            question: "Is Proton Therapy safe for children?",
            answer: "Yes, Proton Therapy is considered the gold standard for treating pediatric cancers. Because children's bodies are still developing, minimizing radiation exposure to healthy tissues is critical. Proton Therapy reduces the risk of long-term side effects, secondary cancers, and developmental issues, making it the preferred choice for childhood cancers."
        },
        {
            question: "How soon can I start Proton Therapy treatment?",
            answer: "After your initial consultation with Dr. Vijay Anand Reddy, the treatment planning process takes 1-2 weeks, which includes detailed imaging, simulation, and creating a customized treatment plan. Once planning is complete, treatment can begin immediately. We prioritize urgent cases and work efficiently to start treatment as soon as medically appropriate."
        }
    ];

    const videos = [
        { id: 1, title: "Talk by a cancer survivor | Happy Patient", videoId: "ugvDtjZrXxE", thumbnail: "https://img.youtube.com/vi/ugvDtjZrXxE/hqdefault.jpg" },
        { id: 2, title: "What do my patients think about my treatment?", videoId: "hefT59hk4Tk", thumbnail: "https://img.youtube.com/vi/hefT59hk4Tk/hqdefault.jpg" },
        { id: 3, title: "Stage 3 Breast Cancer - Patient Testimonial", videoId: "_fQ1-kAPh64", thumbnail: "https://img.youtube.com/vi/_fQ1-kAPh64/hqdefault.jpg" },
        { id: 4, title: "Cervical Cancer Treatment Success", videoId: "MaWOvdr6RDw", thumbnail: "https://img.youtube.com/vi/MaWOvdr6RDw/hqdefault.jpg" },
        { id: 5, title: "Vocal Cord Radiation Treatment", videoId: "532AAKNrSb4", thumbnail: "https://img.youtube.com/vi/532AAKNrSb4/hqdefault.jpg" },
        { id: 6, title: "I am a survivor - Patient Story", videoId: "C_qQ8O6LnS0", thumbnail: "https://img.youtube.com/vi/C_qQ8O6LnS0/hqdefault.jpg" },
    ];

    const galleryImages = [
        "/assets/uploads/uploads/2022/11/1-1.png",
        "/assets/uploads/uploads/2022/11/2-2.png",
        "/assets/uploads/uploads/2022/11/3-2.png",
        "/assets/uploads/uploads/2022/11/4-2.png",
        "assets/testimonials/test-new-1.jpg",
        "assets/testimonials/test-new-2.jpg",
        "assets/testimonials/IMG_0638.webp",
        "assets/testimonials/IMG_0639.webp",
        "assets/testimonials/IMG_0640.webp",
        "assets/testimonials/IMG_0641.webp",
        "assets/testimonials/IMG_0642.webp",
        "assets/testimonials/IMG_0643.webp",
        "assets/testimonials/IMG_0644.webp",
        "assets/testimonials/IMG_1818.webp",
        "assets/testimonials/IMG_2093.webp",
        "assets/testimonials/IMG_2096.webp",
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-medical-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Advanced Radiation Oncology in India
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Best <span className="text-medical-blue">Proton Therapy Doctor</span> in India
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Seeking the <strong>top doctor for Proton Therapy in India</strong>? Dr. Vijay Anand Reddy offers internationally acclaimed expertise in precision radiation therapy, cutting-edge technology, and personalized care plans for superior clinical outcomes.
                            </p>

                            <div className="bg-medical-light p-6 rounded-xl mb-6 border border-medical-blue/20">
                                <h3 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiCheckCircle className="text-medical-blue" /> Why Choose Proton Therapy?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>50% Less Radiation</strong> to healthy tissues compared to conventional therapy</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Ideal for Pediatric Cancers</strong> - Reduces long-term side effects in children</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Treats Complex Tumors</strong> near critical organs like brain, spine, and heart</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Better Quality of Life</strong> during and after treatment</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">95%</div>
                                    <p className="text-xs text-gray-600">Tumor Control Rate</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                    <p className="text-xs text-gray-600">Years Experience</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#book-appointment" className="px-8 py-4 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2" aria-label="Book Proton Therapy Appointment">
                                    <FiCalendar /> Book Appointment
                                </a>
                                <a href="tel:+919676720002" className="px-8 py-4 bg-white text-medical-blue border border-medical-blue/30 rounded-lg font-semibold hover:bg-medical-light transition shadow-sm flex items-center justify-center gap-2" aria-label="Call for Proton Therapy">
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
                            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg">
                                        <FiCalendar className="text-medical-blue text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-medical-dark">Book an Appointment</h3>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <div className="relative">
                                            <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <div className="relative">
                                            <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <div className="relative">
                                            <FiPhone className="absolute left-3 top-3.5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                        <div className="relative">
                                            <FiMessageSquare className="absolute left-3 top-3.5 text-gray-400" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                                placeholder="Tell us about your condition..."
                                                rows="4"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-medical-blue text-white py-3 rounded-lg font-bold hover:bg-medical-purple transition flex items-center justify-center gap-2 shadow-lg">
                                        <FiSend /> Request Consultation
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Dr. Vijay Anand Reddy's Proton Therapy Achievements */}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Advanced Proton Therapy Cancer Treatment in India</h2>
                        <p className="text-gray-600 text-lg">
                            Experience cutting-edge precision radiation therapy that targets cancer cells with pinpoint accuracy while protecting healthy tissue. Dr. Vijay Anand Reddy offers the most advanced Proton Therapy treatment in India.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaUserMd className="text-medical-blue" /> Overview
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Proton Therapy is a cutting-edge form of radiation treatment that uses proton beams instead of X-rays. Dr. Vijay Anand Reddy, a leading <strong>Proton Therapy doctor in India</strong>, specializes in delivering precise radiation doses to tumors while minimizing exposure to surrounding healthy tissues, making it ideal for complex and pediatric cancers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiTarget size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Precision Targeting</h4>
                                        <p className="text-sm text-gray-500">Pinpoint accuracy to tumors.</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaHeartbeat size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Tissue Sparing</h4>
                                        <p className="text-sm text-gray-500">Protects healthy organs.</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiUsers size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Pediatric Care</h4>
                                        <p className="text-sm text-gray-500">Safe for children's cancers.</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiShield size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Fewer Side Effects</h4>
                                        <p className="text-sm text-gray-500">Reduced complications.</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaDna size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Complex Tumors</h4>
                                        <p className="text-sm text-gray-500">Treats difficult locations.</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiActivity size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Better Outcomes</h4>
                                        <p className="text-sm text-gray-500">Improved survival rates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://i.ibb.co/hJZmK2Qq/Gemini-Generated-Image-n4qu4yn4qu4yn4qu.png"
                                alt="Proton Therapy Treatment in India"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* CTA Section - Schedule Proton Therapy Consultation */}
                    <div className="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Schedule Your Proton Therapy Consultation with Dr. Vijay Anand Reddy
                        </h3>
                        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Get expert guidance on advanced Proton Therapy treatment in India. Book a personalized consultation to discuss your cancer treatment options and customized care plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#book-appointment" className="px-8 py-4 bg-white text-medical-blue rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2" aria-label="Book Proton Therapy Consultation">
                                <FiCalendar /> Book Consultation Now
                            </a>
                            <a href="tel:+919676720002" className="px-8 py-4 bg-medical-dark text-white border-2 border-white rounded-lg font-semibold hover:bg-medical-purple transition flex items-center justify-center gap-2" aria-label="Call for Proton Therapy Information">
                                <FiPhone /> Call +91-9676720002
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indications and Benefits */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Indications */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-2">
                                <FiAlertCircle className="text-medical-blue" /> Cancer Types Treated
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Brain and spinal cord tumors",
                                    "Pediatric cancers (all types)",
                                    "Prostate cancer",
                                    "Lung cancer (early stage)",
                                    "Head and neck cancers",
                                    "Liver and pancreatic tumors"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-2">
                                <FaStethoscope className="text-green-600" /> Key Benefits
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Minimal damage to healthy tissue",
                                    "Reduced risk of secondary cancers",
                                    "Better quality of life during treatment",
                                    "Suitable for tumors near vital organs",
                                    "Lower radiation dose to surrounding areas",
                                    "Outpatient treatment with quick recovery"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA - Ask Questions About Proton Therapy */}
                    <div className="mt-12 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-medical-blue/20 max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-medical-dark mb-4">
                                Have Questions About Proton Therapy Treatment in India?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our expert team led by Dr. Vijay Anand Reddy is here to answer all your questions about Proton Therapy and help you understand if this advanced radiation treatment is right for your cancer care.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#book-appointment" className="px-8 py-3 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2" aria-label="Get Free Proton Therapy Consultation">
                                    <FiMessageSquare /> Get Free Consultation
                                </a>
                                <a href="mailto:cancercare@drvijayanandreddy.com" className="px-8 py-3 bg-white text-medical-blue border border-medical-blue rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2" aria-label="Email for Proton Therapy Information">
                                    <FiMail /> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Time, Dos and Donts */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Treatment Duration */}
                        <div className="lg:col-span-1 bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-medical-dark mb-4 flex items-center gap-2">
                                <FiClock className="text-blue-600" /> Treatment Duration
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Session Length</h4>
                                    <p className="text-sm text-gray-600">15-30 minutes per session.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Treatment Course</h4>
                                    <p className="text-sm text-gray-600">Daily sessions for 4-8 weeks.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Planning Phase</h4>
                                    <p className="text-sm text-gray-600">1-2 weeks for simulation and planning.</p>
                                </div>
                            </div>
                        </div>

                        {/* Dos */}
                        <div className="lg:col-span-1 bg-green-50 p-8 rounded-2xl border border-green-100">
                            <h3 className="text-xl font-bold text-medical-dark mb-4 flex items-center gap-2">
                                <FiCheckCircle className="text-green-600" /> Do's
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Maintain good hydration and nutrition.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Get adequate rest and sleep.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Follow skin care instructions carefully.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Attend all scheduled appointments.
                                </li>
                            </ul>
                        </div>

                        {/* Donts */}
                        <div className="lg:col-span-1 bg-red-50 p-8 rounded-2xl border border-red-100">
                            <h3 className="text-xl font-bold text-medical-dark mb-4 flex items-center gap-2">
                                <FiXCircle className="text-red-600" /> Don'ts
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Expose treated area to direct sunlight.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Use harsh soaps or lotions on skin.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Skip meals or become dehydrated.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Ignore side effects or symptoms.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Process - Proton Therapy Steps */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Proton Therapy Treatment Process</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            A systematic, patient-centric approach to Proton Therapy treatment. Dr. Vijay Anand Reddy and his team follow a comprehensive 4-step process for optimal cancer treatment outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "Comprehensive evaluation and eligibility assessment.", image: "https://img.freepik.com/free-photo/doctor-patient-discussing-medical-report_1421-66.jpg" },
                            { step: "02", title: "Simulation", desc: "CT/MRI scans for precise treatment planning.", image: "https://img.freepik.com/free-photo/doctor-analyzing-x-ray-scan_1421-67.jpg" },
                            { step: "03", title: "Planning", desc: "Customized radiation dose and beam angles.", image: "https://img.freepik.com/free-photo/medical-team-meeting_1421-68.jpg" },
                            { step: "04", title: "Treatment", desc: "Daily proton beam therapy sessions.", image: "https://img.freepik.com/free-photo/surgeons-operating-room_1421-69.jpg" }
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
                                Begin Your Proton Therapy Treatment Journey Today
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                Don't wait to start your journey to recovery. Dr. Vijay Anand Reddy and our expert team are ready to provide you with the best Proton Therapy cancer treatment in India with world-class care and advanced technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#book-appointment" className="px-8 py-4 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2" aria-label="Schedule Proton Therapy Appointment">
                                    <FiCalendar /> Schedule Appointment
                                </a>
                                <a href="tel:+919676720002" className="px-8 py-4 bg-white text-medical-blue border-2 border-medical-blue rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2" aria-label="Call for Proton Therapy Consultation">
                                    <FiPhone /> Call +91-9676720002
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apollo Hospital Proton Therapy Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Proton Therapy at Apollo Cancer Centres India</h2>
                        <p className="text-gray-600 text-lg">
                            State-of-the-art Proton Therapy infrastructure with world-class technology, expert care, and the best Proton Therapy doctor in India - Dr. Vijay Anand Reddy. Experience advanced cancer treatment with cutting-edge equipment and personalized care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaHospital className="text-medical-blue" /> About Apollo Proton Therapy
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Apollo Cancer Centres is equipped with India's most advanced Proton Therapy technology, offering precision radiation treatment that was previously available only in select centers worldwide. Under the leadership of Dr. Vijay Anand Reddy, our center provides comprehensive cancer care with cutting-edge infrastructure.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our Proton Therapy program combines advanced technology with a multidisciplinary team approach, ensuring each patient receives personalized treatment plans tailored to their specific cancer type and stage.
                            </p>
                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20">
                                <h4 className="font-bold text-medical-dark mb-3 flex items-center gap-2">
                                    <FiCheckCircle className="text-medical-blue" /> Key Highlights
                                </h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        First comprehensive Proton Therapy center in the region
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        International standard protocols and safety measures
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Dedicated pediatric oncology program
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        24/7 patient support and monitoring
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://i.ibb.co/VWNDWW8T/Gemini-Generated-Image-f7s7frf7s7frf7s7.png"
                                alt="Apollo Cancer Centre Proton Therapy Facility"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Advanced Instruments Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-medical-dark mb-8 text-center">Advanced Proton Therapy Equipment</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaMicroscope className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Pencil Beam Scanning</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Ultra-precise proton beam delivery system that paints the tumor with radiation layer by layer, minimizing exposure to healthy tissue.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaXRay className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Image-Guided Positioning</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Advanced CT and X-ray imaging systems ensure precise patient positioning before each treatment session for maximum accuracy.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaDna className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Gantry System</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    360-degree rotating gantry allows proton beams to target tumors from any angle, optimizing treatment delivery.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaFlask className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Cyclotron Accelerator</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    High-energy particle accelerator that generates proton beams at speeds up to 60% the speed of light for effective tumor treatment.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaNotesMedical className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Treatment Planning System</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Sophisticated software creates 3D treatment plans, calculating optimal beam angles and doses for each patient's unique anatomy.
                                </p>
                            </div>

                            <div className="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div className="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <FaHeartbeat className="text-medical-blue text-2xl" />
                                </div>
                                <h4 className="font-bold text-medical-dark mb-3">Patient Monitoring Systems</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Real-time monitoring equipment tracks patient vitals and positioning throughout treatment, ensuring safety and precision.
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
                                    <FiTarget className="text-medical-blue" /> Precision Medicine
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Every treatment plan is customized based on detailed imaging, tumor characteristics, and patient-specific factors. Our team uses advanced dosimetry to ensure maximum tumor control with minimal side effects.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiUsers className="text-medical-blue" /> Multidisciplinary Care
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Our tumor board includes radiation oncologists, medical oncologists, surgeons, radiologists, and support staff who collaborate to develop the best treatment strategy for each patient.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiShield className="text-medical-blue" /> Quality Assurance
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Rigorous quality control procedures are performed daily to ensure equipment accuracy and treatment consistency, maintaining the highest safety standards.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiHeart className="text-medical-blue" /> Patient-Centered Care
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Beyond medical treatment, we provide comprehensive support services including counseling, nutrition guidance, and rehabilitation to ensure holistic patient well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                Why Choose Dr. Vijay Anand Reddy?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                As a pioneer in radiation oncology in India, Dr. Vijay Anand Reddy brings world-class expertise in Proton Therapy. His dedication to precision medicine and patient outcomes makes him the preferred choice for advanced cancer treatment.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Best Proton Therapy doctor in India with 30+ years experience",
                                    "Expertise in precision radiation oncology",
                                    "Access to cutting-edge Proton Therapy technology",
                                    "Multidisciplinary team approach",
                                    "State-of-the-art infrastructure at Apollo Cancer Centres"
                                ].map((reason, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <FiCheckCircle className="text-medical-blue flex-shrink-0" size={20} />
                                        {reason}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-blue-100 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition border border-blue-200">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiClock size={28} /></div>
                                <div className="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                <h4 className="font-bold text-medical-dark text-sm">Years Experience</h4>
                            </div>
                            <div className="bg-green-100 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition border border-green-200">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600 text-2xl font-bold shadow-md"><FiActivity size={28} /></div>
                                <div className="text-3xl font-bold text-green-600 mb-1">5k+</div>
                                <h4 className="font-bold text-medical-dark text-sm">Treatments Done</h4>
                            </div>
                            <div className="bg-purple-100 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition border border-purple-200">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-600 text-2xl font-bold shadow-md"><FiHeart size={28} /></div>
                                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                                <h4 className="font-bold text-medical-dark text-sm">Support</h4>
                            </div>
                            <div className="bg-orange-100 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition border border-orange-200">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-600 text-2xl font-bold shadow-md"><FiUsers size={28} /></div>
                                <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                                <h4 className="font-bold text-medical-dark text-sm">Care</h4>
                            </div>
                        </div>
                    </div>

                    {/* CTA - Expert Care */}
                    <div className="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Experience World-Class Proton Therapy Treatment in India
                        </h3>
                        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of patients who have trusted Dr. Vijay Anand Reddy, the best Proton Therapy doctor in India, for advanced cancer treatment with proven results and compassionate care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#book-appointment" className="px-8 py-4 bg-white text-medical-blue rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2 text-lg" aria-label="Book Proton Therapy Consultation">
                                <FiCalendar /> Book Your Consultation
                            </a>
                            <a href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-medical-blue border-2 border-white rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2" aria-label="Visit Apollo Cancer Centre">
                                <FiMapPin /> Visit Our Center
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Most Reviewed & Highest Rated Oncologist Section */}
            <section className="py-16 bg-white">
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
                                Most Reviewed & Highest Rated <span className="text-medical-blue">Proton Therapy Doctor in India</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Dr. Vijay Anand Reddy has earned the trust of thousands of cancer patients through exceptional care, advanced Proton Therapy treatments, and outstanding clinical outcomes. As the best Proton Therapy doctor in India, he consistently delivers world-class radiation oncology care.
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
                            <p className="text-xs text-gray-500 mt-1">For Proton Therapy</p>
                        </motion.div>
                    </div>

                    {/* Written Testimonials */}
                    <div className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-medical-dark text-center mb-8">
                            What Our Patients Say
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    name: "Rajesh Kumar",
                                    location: "Delhi",
                                    rating: 5,
                                    date: "November 2024",
                                    review: "Dr. Vijay Anand Reddy is truly exceptional. His expertise in Proton Therapy saved my son's life. The precision and care with which he handled the treatment was remarkable. The entire team at Apollo was supportive throughout our journey. Highly recommended!",
                                    treatment: "Pediatric Brain Tumor"
                                },
                                {
                                    name: "Priya Sharma",
                                    location: "Mumbai",
                                    rating: 5,
                                    date: "October 2024",
                                    review: "I was diagnosed with prostate cancer and was very anxious about the treatment. Dr. Reddy explained everything in detail and recommended Proton Therapy. The treatment was painless, and I experienced minimal side effects. I'm cancer-free now and forever grateful!",
                                    treatment: "Prostate Cancer"
                                },
                                {
                                    name: "Amit Patel",
                                    location: "Bangalore",
                                    rating: 5,
                                    date: "September 2024",
                                    review: "Best oncologist in India! Dr. Vijay Anand Reddy's knowledge and experience are unmatched. He treated my lung cancer with Proton Therapy, and the results exceeded our expectations. His compassionate approach made a difficult journey much easier.",
                                    treatment: "Lung Cancer"
                                },
                                {
                                    name: "Sunita Reddy",
                                    location: "Hyderabad",
                                    rating: 5,
                                    date: "August 2024",
                                    review: "Dr. Reddy is a blessing for cancer patients. His expertise in advanced radiation therapy is world-class. The Proton Therapy facility at Apollo is state-of-the-art. I received excellent care and am now in complete remission. Thank you, Dr. Reddy!",
                                    treatment: "Head & Neck Cancer"
                                },
                                {
                                    name: "Vikram Singh",
                                    location: "Pune",
                                    rating: 5,
                                    date: "July 2024",
                                    review: "After consulting multiple doctors, I chose Dr. Vijay Anand Reddy for my pancreatic cancer treatment. His personalized approach and cutting-edge Proton Therapy made all the difference. The tumor has significantly reduced, and I'm feeling much better.",
                                    treatment: "Pancreatic Cancer"
                                },
                                {
                                    name: "Meera Iyer",
                                    location: "Chennai",
                                    rating: 5,
                                    date: "June 2024",
                                    review: "Dr. Reddy is not just a doctor but a true healer. His expertise, combined with the advanced Proton Therapy technology, gave us hope when we had none. My daughter is now cancer-free and living a normal life. We are eternally grateful!",
                                    treatment: "Pediatric Cancer"
                                }
                            ].map((testimonial, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-medical-blue"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h4 className="font-bold text-medical-dark text-lg">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                                <FiMapPin size={14} /> {testimonial.location}
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-lg">⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-medical-blue/10 text-medical-blue text-xs font-semibold rounded-full">
                                            {testimonial.treatment}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-4 italic">
                                        "{testimonial.review}"
                                    </p>
                                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Happy Patient Gallery */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Happy Proton Therapy Patient Gallery</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Moments of hope, healing, and happiness with our patients who have successfully overcome cancer through advanced Proton Therapy treatment with Dr. Vijay Anand Reddy, India's leading radiation oncologist.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer relative group"
                                onClick={() => openImageModal(img, idx)}
                            >
                                <img src={img} alt={`Proton Therapy Patient Success Story ${idx + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <span className="text-white text-sm font-semibold">View Photo</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="/testimonials"
                            className="inline-block bg-medical-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-medical-purple transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            View All Patient Photos
                        </a>
                    </div>
                </div>
            </section>

            {/* Video Testimonials - Proton Therapy Success Stories */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Proton Therapy Patient Video Testimonials</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Watch real patient success stories and experiences with Dr. Vijay Anand Reddy's Proton Therapy treatment. Hear directly from cancer survivors about their journey to recovery.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="bg-medical-light rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                                onClick={() => openVideoModal(video)}
                            >
                                <div className="relative aspect-video">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center pl-1 text-medical-blue shadow-xl group-hover:scale-110 transition">
                                            <FiPlay size={24} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-medical-dark">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ and Form Section - Proton Therapy Information */}
            <section id="book-appointment" className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Side: FAQs */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8">Frequently Asked Questions About Proton Therapy</h2>
                            <p className="text-gray-600 mb-6">
                                Get answers to common questions about Proton Therapy treatment, costs, eligibility, and what to expect from India's best Proton Therapy doctor, Dr. Vijay Anand Reddy.
                            </p>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
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

                        {/* Right Side: Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-fit sticky top-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-medical-blue/10 p-3 rounded-lg">
                                    <FiCalendar className="text-medical-blue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-medical-dark">Book an Appointment</h3>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <FiPhone className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-3 top-3.5 text-gray-400" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none"
                                            placeholder="Tell us about your condition..."
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-medical-blue text-white py-3 rounded-lg font-bold hover:bg-medical-purple transition flex items-center justify-center gap-2 shadow-lg">
                                    <FiSend /> Request Consultation
                                </button>
                            </form>
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
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
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

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-5xl max-h-[90vh]">
                        <button
                            onClick={closeImageModal}
                            className="absolute -top-12 right-0 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition"
                        >
                            <FiXCircle size={28} />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={`Patient Gallery ${selectedImage.index + 1}`}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="text-center mt-4 text-white font-semibold">
                            Image {selectedImage.index + 1} of {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ProtonTherapyIndiaPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiAlertCircle, FiInfo, FiXCircle, FiHeart, FiShield, FiTarget, FiTrendingUp, FiUsers, FiZap, FiX } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaProcedures, FaHandHoldingHeart, FaStethoscope, FaNotesMedical, FaMicroscope, FaXRay, FaSyringe, FaHeartbeat, FaLungs, FaDna, FaFlask, FaPills } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdrenalCancerIndiaPage = () => {
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
        { label: "Successful Surgeries", value: "5000+", icon: <FiActivity /> },
        { label: "Happy Patients", value: "10000+", icon: <FiUserCheck /> },
        { label: "Awards Won", value: "50+", icon: <FiAward /> },
    ];

    const faqs = [
        {
            question: "Who is the best Adrenal Cancer doctor in India?",
            answer: "Dr. Vijay Anand Reddy is widely recognized as one of the best Adrenal Cancer doctors in India, known for his expertise in advanced oncology treatments, international training, and compassionate patient care. With over 30 years of experience and access to state-of-the-art technology at Apollo Cancer Centres, he provides world-class treatment."
        },
        {
            question: "What are the advanced treatments available for Adrenal Cancer in India?",
            answer: "India offers world-class treatments including adrenalectomy (complete surgical removal), minimally invasive laparoscopic surgery, robotic-assisted surgery, targeted molecular therapy, hormone replacement therapy, and advanced radiation therapy. Dr. Vijay Anand Reddy utilizes these advanced protocols and personalized treatment plans for the best outcomes."
        },
        {
            question: "How do I choose the top doctor for Adrenal Cancer in India?",
            answer: "Look for a specialist with extensive experience in adrenal surgeries, international certifications (like ESMO), expertise in minimally invasive techniques, access to advanced technology including robotic surgery, and a multidisciplinary team approach. Dr. Vijay Anand Reddy meets all these criteria and has successfully treated thousands of patients."
        },
        {
            question: "Is adrenal cancer curable?",
            answer: "If detected early (Stage I or II), adrenal cancer is treatable and potentially curable with complete surgical removal followed by adjuvant therapies. Advanced treatments including minimally invasive surgery, targeted therapy, and hormone management have significantly improved survival rates. Even in advanced stages, treatment can extend life and improve quality of life."
        },
        {
            question: "What is the recovery time after adrenal cancer surgery?",
            answer: "Recovery from adrenal cancer surgery varies by approach. Minimally invasive laparoscopic surgery typically involves a hospital stay of 3-5 days and 2-4 weeks for full recovery. Open surgery may require 5-7 days hospitalization and 6-8 weeks for complete recovery. Dr. Vijay Anand Reddy's team provides comprehensive post-operative care, hormone management, and rehabilitation to optimize recovery."
        },
        {
            question: "What are the symptoms of adrenal cancer?",
            answer: "Adrenal cancer symptoms include abdominal pain or fullness, unexplained weight changes, high blood pressure, excessive hair growth or skin changes (in women), muscle weakness, hormonal imbalances (Cushing's syndrome symptoms), and in some cases, no symptoms at all. Early detection through imaging is crucial for better outcomes."
        },
        {
            question: "How soon can I start adrenal cancer treatment?",
            answer: "After your initial consultation with Dr. Vijay Anand Reddy, diagnostic tests including CT/MRI scans and hormone level testing typically take 1-2 weeks. Once the treatment plan is finalized, surgery or other treatments can begin immediately. We prioritize urgent cases and work efficiently to start treatment as soon as medically appropriate."
        }
    ];

    const videos = [
        { id: 1, title: "Adrenal Cancer Success Story", videoId: "dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
        { id: 2, title: "Advanced Treatment Options", videoId: "dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
        { id: 3, title: "Patient Testimonial", videoId: "dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
    ];

    const galleryImages = [
        "/assets/uploads/uploads/2022/11/1-1.png",
        "/assets/uploads/uploads/2022/11/2-2.png",
        "/assets/uploads/uploads/2022/11/3-2.png",
        "/assets/uploads/uploads/2022/11/4-2.png",
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-medical-light to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                World-Class Oncology in India
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Best <span className="text-medical-blue">Adrenal Cancer Doctor</span> in India
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Seeking the <strong>top doctor for Adrenal Cancer in India</strong>? Dr. Vijay Anand Reddy offers internationally acclaimed expertise, advanced minimally invasive surgeries, and personalized care plans for superior clinical outcomes.
                            </p>

                            <div className="bg-medical-light p-6 rounded-xl mb-6 border border-medical-blue/20">
                                <h3 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                                    <FiCheckCircle className="text-medical-blue" /> Why Choose Our Adrenal Cancer Treatment?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Minimally Invasive Surgery</strong> - Laparoscopic and robotic adrenalectomy</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Hormone Management</strong> - Expert endocrine care and monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Targeted Therapy</strong> - Personalized molecular treatment approaches</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <FiCheckCircle className="text-medical-blue mt-1 flex-shrink-0" size={18} />
                                        <span className="text-sm"><strong>Faster Recovery</strong> - Advanced techniques for quicker healing</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">5000+</div>
                                    <p className="text-xs text-gray-600">Successful Surgeries</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                    <p className="text-xs text-gray-600">Years Experience</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#book-appointment" className="px-8 py-4 bg-medical-blue text-white rounded-full font-semibold hover:bg-medical-purple transition shadow-lg flex items-center justify-center gap-2">
                                    <FiCalendar /> Book Appointment
                                </a>
                                <a href="tel:+919876543210" className="px-8 py-4 bg-white text-medical-blue border border-medical-blue/30 rounded-full font-semibold hover:bg-medical-light transition shadow-sm flex items-center justify-center gap-2">
                                    <FiPhone /> Call Now
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://drvijayanandreddy.com/wp-content/uploads/2024/01/Dr.-Vijay-Anand-Reddy.jpg"
                                    alt="Best Adrenal Cancer Doctor in India - Dr. Vijay Anand Reddy"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-medical-dark/90 to-transparent p-6">
                                    <p className="text-white font-bold text-xl">Dr. Vijay Anand Reddy</p>
                                    <p className="text-blue-200">Director & Senior Oncologist</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 bg-gradient-to-r from-medical-blue to-medical-purple text-white">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Advanced Adrenal Cancer Treatment</h2>
                        <p className="text-gray-600 text-lg">
                            Comprehensive care combining surgical precision, systemic therapy, and compassionate support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaUserMd className="text-medical-blue" /> Overview
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Adrenal cancer is a rare malignancy arising in the adrenal glands. It requires highly specialized care due to the gland's critical hormonal functions. Dr. Vijay Anand Reddy, an <strong>Adrenal Cancer doctor in India</strong>, specializes in treating both functional and non-functional adrenal tumors using the latest global protocols.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiActivity size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Adrenalectomy</h4>
                                        <p className="text-sm text-gray-500">Complete gland removal.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg border border-purple-100 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-purple/10 p-3 rounded-lg text-medical-purple mt-1"><FaProcedures size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Laparoscopic Surgery</h4>
                                        <p className="text-sm text-gray-500">Minimally invasive approach.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg border border-green-100 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-green-500/10 p-3 rounded-lg text-green-600 mt-1"><FaDna size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Targeted Therapy</h4>
                                        <p className="text-sm text-gray-500">Personalized drug treatment.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg border border-orange-100 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-orange-500/10 p-3 rounded-lg text-orange-600 mt-1"><FaHeartbeat size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Hormone Therapy</h4>
                                        <p className="text-sm text-gray-500">Managing hormone levels.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-lg border border-indigo-100 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-600 mt-1"><FaXRay size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Radiation Therapy</h4>
                                        <p className="text-sm text-gray-500">Precision tumor targeting.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-pink-50 to-white p-4 rounded-lg border border-pink-100 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-pink-500/10 p-3 rounded-lg text-pink-600 mt-1"><FaPills size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Chemotherapy</h4>
                                        <p className="text-sm text-gray-500">Systemic cancer treatment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=900"
                                alt="Adrenal Cancer Treatment in India"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Causes and Symptoms */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Causes */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-2">
                                <FiAlertCircle className="text-red-500" /> Risk Factors & Causes
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Genetic syndromes (Li-Fraumeni, Beckwith-Wiedemann)",
                                    "Family history of adrenal tumors",
                                    "Rare hereditary conditions",
                                    "Age (more common in children and adults over 40)",
                                    "Previous radiation exposure",
                                    "Certain genetic mutations"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Symptoms */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-2">
                                <FaStethoscope className="text-medical-blue" /> Common Symptoms
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Abdominal pain or fullness",
                                    "High blood pressure (hypertension)",
                                    "Unexplained weight loss or gain",
                                    "Excessive hair growth or skin changes",
                                    "Muscle weakness and fatigue",
                                    "Hormonal imbalances (Cushing's syndrome symptoms)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
                                    <h4 className="font-semibold text-gray-900">Surgery</h4>
                                    <p className="text-sm text-gray-600">2-4 hours procedure, 3-7 days hospital stay.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Chemotherapy</h4>
                                    <p className="text-sm text-gray-600">Cycles over 3-6 months.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Radiation</h4>
                                    <p className="text-sm text-gray-600">4-6 weeks of daily sessions.</p>
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
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Monitor blood pressure regularly.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Take prescribed hormone medications.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Follow a balanced, low-sodium diet.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Attend all follow-up appointments.
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
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Ignore sudden blood pressure changes.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Skip hormone replacement therapy.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Consume excessive salt or caffeine.
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm">
                                    <FiXCircle className="text-red-500 mt-1 flex-shrink-0" /> Self-medicate without doctor's advice.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Process */}
            <section className="py-14 bg-gradient-to-br from-medical-light via-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Treatment Process</h2>
                        <p className="text-gray-600">A systematic, patient-centric approach to cancer care.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "In-depth evaluation with Dr. Vijay Anand Reddy.", image: "https://img.freepik.com/free-photo/doctor-patient-discussing-medical-report_1421-66.jpg" },
                            { step: "02", title: "Diagnosis", desc: "CT/MRI scans and hormone level testing.", image: "https://img.freepik.com/free-photo/doctor-analyzing-x-ray-scan_1421-67.jpg" },
                            { step: "03", title: "Tumor Board", desc: "Multidisciplinary team discussion for best plan.", image: "https://img.freepik.com/free-photo/medical-team-meeting_1421-68.jpg" },
                            { step: "04", title: "Treatment", desc: "Execution of surgery, therapy, or medication.", image: "https://img.freepik.com/free-photo/surgeons-operating-room_1421-69.jpg" }
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
                                As a pioneer in oncology in India, Dr. Vijay Anand Reddy brings world-class expertise to your doorstep. His dedication to patient outcomes and quality of life makes him the preferred choice for patients across the nation.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Best Adrenal Cancer doctor in India with 30+ years experience",
                                    "Expertise in minimally invasive Laparoscopic Surgeries",
                                    "Access to latest Clinical Trials & Targeted Therapy",
                                    "Compassionate, holistic care approach",
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
                            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiClock size={28} /></div>
                                <div className="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                <h4 className="font-bold text-medical-dark text-sm">Years Experience</h4>
                            </div>
                            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600 text-2xl font-bold shadow-md"><FiActivity size={28} /></div>
                                <div className="text-3xl font-bold text-green-600 mb-1">5k+</div>
                                <h4 className="font-bold text-medical-dark text-sm">Surgeries Done</h4>
                            </div>
                            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-600 text-2xl font-bold shadow-md"><FiHeart size={28} /></div>
                                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                                <h4 className="font-bold text-medical-dark text-sm">Support</h4>
                            </div>
                            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-600 text-2xl font-bold shadow-md"><FiUsers size={28} /></div>
                                <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                                <h4 className="font-bold text-medical-dark text-sm">Care</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Happy Patient Gallery */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-medical-dark mb-10">Happy Patient Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                                onClick={() => openImageModal(img, idx)}
                            >
                                <img src={img} alt={`Happy Patient ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-medical-dark mb-10">Patient Testimonials</h2>
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

            {/* FAQ and Form Section */}
            <section id="book-appointment" className="py-14 bg-gradient-to-br from-medical-light to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Side: FAQs */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8">Frequently Asked Questions</h2>
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

export default AdrenalCancerIndiaPage;

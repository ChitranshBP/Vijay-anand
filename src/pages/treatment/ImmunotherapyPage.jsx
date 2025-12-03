import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiMessageSquare, FiMapPin, FiHeart, FiShield, FiTarget, FiUsers } from 'react-icons/fi';
import { FaPills, FaHeartbeat, FaDna, FaMicroscope } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ImmunotherapyPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

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

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const stats = [
        { label: "Years of Experience", value: "30+", icon: <FiClock /> },
        { label: "Successful Treatments", value: "10000+", icon: <FiActivity /> },
        { label: "Happy Patients", value: "20000+", icon: <FiUserCheck /> },
        { label: "Awards Won", value: "50+", icon: <FiAward /> },
    ];

    const faqs = [
        {
            question: "What is the immunotherapy cost in India?",
            answer: "Immunotherapy cost in India is significantly more affordable than Western countries, typically ranging from ₹1-5 lakhs per cycle depending on the drug type and cancer stage. The total immunotherapy cost in India can vary from ₹5-30 lakhs for a complete treatment course. Dr. Vijay Anand Reddy provides transparent pricing and works with insurance providers to make treatment accessible."
        },
        {
            question: "How effective is immunotherapy for cancer treatment?",
            answer: "Immunotherapy has shown remarkable success rates, particularly for melanoma, lung cancer, kidney cancer, and lymphoma. Success rates vary by cancer type but can reach 40-60% for certain cancers. Dr. Vijay Anand Reddy uses the latest immunotherapy protocols to maximize treatment outcomes."
        },
        {
            question: "What are the side effects of immunotherapy?",
            answer: "Immunotherapy typically causes fewer side effects than chemotherapy. Common side effects include fatigue, skin reactions, flu-like symptoms, and immune-related inflammation. Dr. Reddy's team provides comprehensive management of side effects with supportive care medicines."
        },
        {
            question: "Which cancers can be treated with immunotherapy in India?",
            answer: "Immunotherapy is effective for melanoma, non-small cell lung cancer, kidney cancer, bladder cancer, head and neck cancers, Hodgkin lymphoma, and certain types of breast and colon cancer. Dr. Vijay Anand Reddy evaluates each patient's biomarkers to determine immunotherapy eligibility."
        },
        {
            question: "How long does immunotherapy treatment take?",
            answer: "Immunotherapy is typically administered every 2-6 weeks for 6 months to 2 years, depending on cancer type and response. Each infusion takes 30 minutes to a few hours. Dr. Reddy creates personalized treatment schedules based on individual patient needs and cancer characteristics."
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
                                Advanced Cancer Immunotherapy
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Best <span className="text-medical-blue">Immunotherapy Cost</span> in India
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Seeking affordable <strong>immunotherapy cost in India</strong>? Dr. Vijay Anand Reddy offers cutting-edge immunotherapy treatment with the latest drugs at Apollo Cancer Centres Hyderabad. Get world-class cancer care at 60-70% lower cost than Western countries.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">60%</div>
                                    <p className="text-xs text-gray-600">Cost Savings vs USA</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">95%</div>
                                    <p className="text-xs text-gray-600">Patient Satisfaction</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Advanced Immunotherapy Cancer Treatment in India</h2>
                        <p className="text-gray-600 text-lg">
                            Experience cutting-edge immunotherapy with affordable costs. Dr. Vijay Anand Reddy offers the best immunotherapy cost in India with world-class outcomes and comprehensive care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaDna className="text-medical-blue" /> What is Immunotherapy?
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Immunotherapy harnesses your body's immune system to fight cancer. Unlike chemotherapy, it targets cancer cells specifically while preserving healthy tissue. With <strong>immunotherapy cost in India</strong> being 60-70% lower than Western countries, patients worldwide choose India for affordable, high-quality treatment.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaHeartbeat size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Targeted Action</h4>
                                        <p className="text-sm text-gray-500">Attacks only cancer cells</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaShield size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Fewer Side Effects</h4>
                                        <p className="text-sm text-gray-500">Better tolerability</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaMicroscope size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Latest Drugs</h4>
                                        <p className="text-sm text-gray-500">FDA approved agents</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaPills size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Long-term Control</h4>
                                        <p className="text-sm text-gray-500">Durable responses</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                                alt="Immunotherapy Treatment in India"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Cost Breakdown Section */}
                    <div className="mt-12 bg-medical-light p-8 rounded-2xl border border-medical-blue/20">
                        <h3 className="text-2xl font-bold text-medical-dark mb-6 text-center">Immunotherapy Cost in India - Transparent Pricing</h3>
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
                            <strong>Note:</strong> Exact immunotherapy cost in India depends on cancer type, drug selection, and treatment duration. Contact us for personalized cost estimate.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">Frequently Asked Questions About Immunotherapy</h2>
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
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ImmunotherapyPage;

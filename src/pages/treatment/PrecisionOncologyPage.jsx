import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiTarget, FiUsers } from 'react-icons/fi';
import { FaDna, FaMicroscope } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrecisionOncologyPage = () => {
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
            question: "What is precision oncology in India?",
            answer: "Precision oncology in India uses advanced genomic testing and molecular profiling to identify specific mutations in your cancer. Dr. Vijay Anand Reddy uses next-generation sequencing (NGS) and comprehensive biomarker testing at Apollo Cancer Centres Hyderabad to create personalized treatment plans targeting your cancer's unique genetic makeup."
        },
        {
            question: "How much does precision oncology cost in India?",
            answer: "Precision oncology in India costs ₹50,000-2 lakhs for genomic testing and ₹2-30 lakhs for targeted treatments based on test results. India offers 60-70% cost savings compared to Western countries while providing the same advanced testing technologies. Dr. Reddy ensures transparent pricing and insurance coordination."
        },
        {
            question: "What cancers can benefit from precision oncology?",
            answer: "Precision oncology benefits most cancer types including lung, breast, colorectal, ovarian, melanoma, and rare cancers. It's especially valuable for advanced cancers, recurrent cancers, and cases where standard treatments haven't worked. Dr. Vijay Anand Reddy evaluates each patient's suitability for precision medicine approaches."
        },
        {
            question: "How is precision oncology different from traditional treatment?",
            answer: "Precision oncology uses your cancer's genetic profile to select treatments, while traditional oncology uses cancer type and stage. This personalized approach leads to better outcomes and fewer side effects. Dr. Reddy combines genomic insights with his 30+ years of experience for optimal treatment selection."
        },
        {
            question: "What tests are involved in precision oncology?",
            answer: "Precision oncology involves next-generation sequencing (NGS), liquid biopsies, immunohistochemistry, FISH testing, and PD-L1 expression analysis. Dr. Vijay Anand Reddy has access to comprehensive molecular profiling labs at Apollo Cancer Centres and works with international partners for advanced genomic testing."
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
                                Genomic-Guided Cancer Care
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Advanced <span className="text-medical-blue">Precision Oncology</span> in India
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Experience cutting-edge <strong>precision oncology in India</strong> with Dr. Vijay Anand Reddy. Using advanced genomic testing and molecular profiling at Apollo Cancer Centres Hyderabad, we create personalized treatment plans targeting your cancer's unique genetic mutations at 60-70% lower cost than Western countries.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">70%</div>
                                    <p className="text-xs text-gray-600">Cost Savings vs USA</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">98%</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Precision Oncology - Personalized Cancer Treatment in India</h2>
                        <p className="text-gray-600 text-lg">
                            Dr. Vijay Anand Reddy offers advanced precision oncology using genomic profiling, molecular testing, and targeted therapies for superior cancer outcomes at affordable costs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaDna className="text-medical-blue" /> What is Precision Oncology?
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                <strong>Precision oncology in India</strong> analyzes your tumor's genetic mutations, protein expression, and molecular characteristics to select the most effective treatments. Using next-generation sequencing and comprehensive biomarker testing, we identify targetable alterations and match you with FDA-approved precision therapies at 60-70% lower cost than Western countries.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaDna size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Genomic Testing</h4>
                                        <p className="text-sm text-gray-500">NGS & molecular profiling</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiTarget size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Targeted Treatment</h4>
                                        <p className="text-sm text-gray-500">Mutation-specific drugs</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FaMicroscope size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Biomarker Analysis</h4>
                                        <p className="text-sm text-gray-500">Comprehensive testing</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiUsers size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Personalized Care</h4>
                                        <p className="text-sm text-gray-500">Tailored to your tumor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                                alt="Precision Oncology in India"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Cost Breakdown Section */}
                    <div className="mt-12 bg-medical-light p-8 rounded-2xl border border-medical-blue/20">
                        <h3 className="text-2xl font-bold text-medical-dark mb-6 text-center">Precision Oncology Cost in India - Transparent Pricing</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Genomic Testing</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">₹50K-2L</div>
                                <p className="text-sm text-gray-600">NGS & molecular profiling</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Targeted Treatment</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">₹2-30 Lakhs</div>
                                <p className="text-sm text-gray-600">Based on test results</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Cost Savings</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">60-70%</div>
                                <p className="text-sm text-gray-600">Lower than USA/UK</p>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mt-6">
                            <strong>Note:</strong> Exact precision oncology cost depends on testing panel, mutations found, and treatment selection. Contact us for personalized estimate.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">Frequently Asked Questions About Precision Oncology</h2>
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

export default PrecisionOncologyPage;

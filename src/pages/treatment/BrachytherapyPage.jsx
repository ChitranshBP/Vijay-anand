import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiTarget, FiZap } from 'react-icons/fi';
import { FaBrain, FaRadiation } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BrachytherapyPage = () => {
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
            question: "What is Brachytherapy cost in India?",
            answer: "Brachytherapy treatment in Hyderabad delivers extremely focused, high-dose radiation to brain and spine tumors in 1-5 sessions with submillimeter accuracy. Dr. Vijay Anand Reddy, with specialized SRS fellowship training from Germany, uses advanced systems at Apollo Cancer Centres for brain metastases, AVMs, acoustic neuromas, meningiomas, and spinal tumors."
        },
        {
            question: "How much does SRS treatment cost in Hyderabad?",
            answer: "Brachytherapy cost in India costs ₹1.5-4 lakhs, significantly more affordable than Western countries (70% lower cost). The cost includes advanced imaging, precise planning, and single or few-session delivery. Dr. Reddy provides transparent pricing and works with insurance providers for SRS procedures."
        },
        {
            question: "What conditions can SRS treat?",
            answer: "SRS treats brain metastases, acoustic neuromas, meningiomas, pituitary adenomas, arteriovenous malformations (AVMs), trigeminal neuralgia, and select spinal tumors. Dr. Vijay Anand Reddy has extensive SRS experience from his fellowship at Klinikum Frankfurt, Germany and treats hundreds of SRS cases annually with excellent outcomes."
        },
        {
            question: "Is SRS really surgery without a knife?",
            answer: "Yes, SRS delivers radiation with surgical precision but without incisions. Multiple beams converge on the target with submillimeter accuracy, delivering ablative doses while sparing surrounding brain tissue. Dr. Reddy uses frameless image-guided SRS for comfortable, non-invasive treatment with no hospitalization required."
        },
        {
            question: "How long does SRS treatment take?",
            answer: "Each SRS session takes 30-90 minutes including imaging and setup, with actual radiation delivery lasting 15-45 minutes. Most tumors are treated in a single session, though some require 2-5 sessions. Dr. Vijay Anand Reddy creates personalized SRS plans based on tumor size, location, and prior treatments."
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
                                Non-Invasive Brain Radiosurgery
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Advanced <span className="text-medical-blue">SRS Treatment</span> in Hyderabad
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Experience cutting-edge <strong>Brachytherapy cost in India</strong> with Dr. Vijay Anand Reddy at Apollo Cancer Centres. With specialized fellowship training from Germany, we deliver submillimeter-accurate stereotactic radiosurgery for brain and spine tumors at 70% lower cost than Western countries.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">70%</div>
                                    <p className="text-xs text-gray-600">Cost Savings vs USA</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div className="text-3xl font-bold text-medical-blue mb-1">Direct</div>
                                    <p className="text-xs text-gray-600">Treatment Accuracy</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Advanced SRS Treatment in Hyderabad</h2>
                        <p className="text-gray-600 text-lg">
                            Dr. Vijay Anand Reddy delivers state-of-the-art Stereotactic Radiosurgery with specialized fellowship training from Germany for brain and spine tumor treatment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <FaBrain className="text-medical-blue" /> What is SRS Treatment?
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                <strong>Brachytherapy cost in India</strong> uses highly focused radiation beams that converge on brain or spine tumors with submillimeter precision. Despite the name "radiosurgery," no incision is made. Dr. Vijay Anand Reddy completed specialized SRS fellowship training at Klinikum Frankfurt, Germany and uses frameless image-guided systems for comfortable, accurate treatment. With 70% cost savings, Hyderabad offers world-class SRS technology.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiTarget size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Submillimeter Precision</h4>
                                        <p className="text-sm text-gray-500">Direct accuracy</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiZap size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Single Session</h4>
                                        <p className="text-sm text-gray-500">Most cases 1-5 days</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiCheckCircle size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">No Incisions</h4>
                                        <p className="text-sm text-gray-500">Non-invasive procedure</p>
                                    </div>
                                </div>
                                <div className="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div className="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><FiActivity size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-medical-dark">Outpatient Care</h4>
                                        <p className="text-sm text-gray-500">Same day discharge</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                                alt="SRS Treatment in Hyderabad"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Cost Breakdown Section */}
                    <div className="mt-12 bg-medical-light p-8 rounded-2xl border border-medical-blue/20">
                        <h3 className="text-2xl font-bold text-medical-dark mb-6 text-center">SRS Treatment Cost in Hyderabad - Transparent Pricing</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Single Session SRS</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">₹1-2L</div>
                                <p className="text-sm text-gray-600">Single tumor treatment</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Complex Cases</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">₹2-3L</div>
                                <p className="text-sm text-gray-600">Multiple targets, AVMs</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-medical-dark mb-3">Cost Savings</h4>
                                <div className="text-3xl font-bold text-medical-blue mb-2">70%</div>
                                <p className="text-sm text-gray-600">Lower than USA/UK</p>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mt-6">
                            <strong>Note:</strong> Exact SRS treatment cost depends on tumor size, location, number of targets, and fractionation. Contact us for personalized estimate.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-14 bg-medical-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">Frequently Asked Questions About SRS</h2>
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

export default BrachytherapyPage;

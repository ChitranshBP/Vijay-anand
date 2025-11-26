import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiUserCheck, FiClock, FiAward, FiPlay, FiChevronDown, FiChevronUp, FiPhone, FiCalendar, FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaProcedures, FaHandHoldingHeart } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PancreaticCancerPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
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

  const stats = [
    { label: "Years of Experience", value: "30+", icon: <FiClock /> },
    { label: "Successful Surgeries", value: "5000+", icon: <FiActivity /> },
    { label: "Happy Patients", value: "10000+", icon: <FiUserCheck /> },
    { label: "Awards Won", value: "50+", icon: <FiAward /> },
  ];

  const faqs = [
    {
      question: "Who is the best Pancreatic Cancer doctor in Secunderabad?",
      answer: "Dr. Vijay Anand Reddy is widely recognized as one of the best Pancreatic Cancer doctors in Secunderabad, known for his expertise in advanced oncology treatments and compassionate patient care."
    },
    {
      question: "What are the early signs of pancreatic cancer?",
      answer: "Early signs may include jaundice (yellowing of skin and eyes), abdominal pain, unexplained weight loss, loss of appetite, and digestive problems. Consulting a top doctor for Pancreatic Cancer in Secunderabad is crucial for early detection."
    },
    {
      question: "What treatment options are available for pancreatic cancer?",
      answer: "Treatment options include surgery (Whipple procedure), chemotherapy, radiation therapy, and targeted therapy. Dr. Vijay Anand Reddy creates personalized treatment plans based on the stage and location of the cancer."
    },
    {
      question: "Why choose Dr. Vijay Anand Reddy for pancreatic cancer treatment?",
      answer: "With over 30 years of experience, Dr. Vijay Anand Reddy is a top doctor for Pancreatic Cancer in Secunderabad. He utilizes state-of-the-art technology and a multidisciplinary approach to ensure the best possible outcomes for his patients."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our clinic directly or using the contact form on this website. We prioritize prompt consultations for cancer patients."
    }
  ];

  const videos = [
    { id: 1, title: "Patient Success Story 1", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }, // Placeholder
    { id: 2, title: "Patient Success Story 2", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }, // Placeholder
    { id: 3, title: "Doctor's Talk on Pancreatic Cancer", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }, // Placeholder
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-medical-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                Leading Oncology Care
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                Best <span className="text-medical-blue">Pancreatic Cancer Doctor</span> in Secunderabad
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expert care, advanced treatments, and a compassionate approach. Dr. Vijay Anand Reddy is the top doctor for Pancreatic Cancer in Secunderabad, dedicated to fighting cancer with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact-form" className="px-8 py-4 bg-medical-blue text-white rounded-full font-semibold hover:bg-medical-purple transition shadow-lg flex items-center justify-center gap-2">
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
                  alt="Best Pancreatic Cancer Doctor in Secunderabad - Dr. Vijay Anand Reddy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-medical-dark/90 to-transparent p-6">
                  <p className="text-white font-bold text-xl">Dr. Vijay Anand Reddy</p>
                  <p className="text-blue-200">Director & Senior Oncologist</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="font-bold text-medical-dark">98% Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-medical-blue text-white">
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

      {/* About Doctor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative">
              <img
                src="/assets/vijay-anand-about.jpg"
                alt="Dr. Vijay Anand Reddy - Top Pancreatic Cancer Doctor"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hidden md:block">
                <h3 className="text-xl font-bold text-medical-dark mb-1">"I Am A Survivor"</h3>
                <p className="text-gray-600 text-sm">Author of 108 Stories of Victory Over Cancer</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">About Dr. Vijay Anand Reddy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Vijay Anand Reddy is a distinguished oncologist with over three decades of experience, dedicated to providing world-class cancer care. As the Director of Apollo Cancer Centres, Hyderabad, he has been at the forefront of introducing advanced radiation oncology techniques in India.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                His compassionate approach and expertise make him the <strong>best Pancreatic Cancer doctor in Secunderabad</strong>. He believes in treating not just the disease but the patient as a whole, ensuring emotional support along with medical excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                  <span className="text-gray-700 font-medium">MD (Radiation Oncology)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                  <span className="text-gray-700 font-medium">DNB (Radiation Oncology)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                  <span className="text-gray-700 font-medium">ESMO Certified (Europe)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                  <span className="text-gray-700 font-medium">FUICC (UK), FNDM (USA)</span>
                </div>
              </div>

              <a href="#contact-form" className="inline-flex items-center gap-2 text-medical-blue font-bold hover:text-medical-purple transition">
                Schedule Consultation <FiChevronDown className="rotate-[-90deg]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Treatment Section */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Comprehensive Pancreatic Cancer Care</h2>
            <p className="text-gray-600 text-lg">
              Understanding the disease is the first step towards cure. We provide detailed insights and advanced treatment protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                <FaUserMd className="text-medical-blue" /> About Pancreatic Cancer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pancreatic cancer begins in the tissues of your pancreas — an organ in your abdomen that lies behind the lower part of your stomach. It is crucial to consult a <strong>Pancreatic Cancer doctor in Secunderabad</strong> early for better prognosis. The pancreas releases enzymes that aid digestion and produces hormones that help manage your blood sugar.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Most pancreatic cancers begin in the cells that line the ducts of the pancreas. This type of cancer is called pancreatic adenocarcinoma or pancreatic exocrine cancer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 shadow-sm">
                  <div className="bg-medical-blue/10 p-2 rounded text-medical-blue mt-1"><FiActivity /></div>
                  <div>
                    <h4 className="font-bold text-medical-dark">Advanced Diagnostics</h4>
                    <p className="text-sm text-gray-500">Precise staging and detection.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 shadow-sm">
                  <div className="bg-medical-blue/10 p-2 rounded text-medical-blue mt-1"><FaProcedures /></div>
                  <div>
                    <h4 className="font-bold text-medical-dark">Minimally Invasive</h4>
                    <p className="text-sm text-gray-500">Laparoscopic surgical options.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 shadow-sm">
                  <div className="bg-medical-blue/10 p-2 rounded text-medical-blue mt-1"><FaHandHoldingHeart /></div>
                  <div>
                    <h4 className="font-bold text-medical-dark">Palliative Care</h4>
                    <p className="text-sm text-gray-500">Improving quality of life.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 shadow-sm">
                  <div className="bg-medical-blue/10 p-2 rounded text-medical-blue mt-1"><FaHospital /></div>
                  <div>
                    <h4 className="font-bold text-medical-dark">Holistic Approach</h4>
                    <p className="text-sm text-gray-500">Mind, body, and spirit care.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/doctor-explaining-diagnosis-patient_23-2148962345.jpg?w=900"
                alt="Pancreatic Cancer Treatment Consultation"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-10 -right-10 w-2/3 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hidden lg:block">
                <h4 className="font-bold text-medical-dark mb-2">Why Early Detection Matters?</h4>
                <p className="text-sm text-gray-600">Early diagnosis significantly improves survival rates. Regular checkups with a specialist are recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Treatment Process</h2>
            <p className="text-gray-600">A systematic approach to ensure the best care for every patient.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Detailed evaluation with Dr. Vijay Anand Reddy." },
              { step: "02", title: "Diagnosis", desc: "Advanced imaging and biopsy to confirm stage." },
              { step: "03", title: "Treatment Plan", desc: "Customized plan involving surgery, chemo, or radiation." },
              { step: "04", title: "Recovery", desc: "Post-treatment care and regular follow-ups." }
            ].map((item, idx) => (
              <div key={idx} className="bg-medical-light p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-medical-blue relative overflow-hidden group">
                <div className="text-6xl font-bold text-gray-200 absolute -right-4 -top-4 group-hover:text-medical-blue/20 transition">{item.step}</div>
                <h3 className="text-xl font-bold text-medical-dark mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                Why Choose Dr. Vijay Anand Reddy?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Choosing the right specialist is the most critical decision in your cancer journey. Dr. Vijay Anand Reddy combines decades of experience with a compassionate touch.
              </p>
              <ul className="space-y-4">
                {[
                  "Top Doctor for Pancreatic Cancer in Secunderabad",
                  "Over 30 Years of Oncological Excellence",
                  "State-of-the-art Radiation & Surgical Facilities",
                  "Personalized Patient-Centric Care Plans",
                  "Affordable and Transparent Treatment Costs"
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    {reason}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href="#contact-form" className="inline-flex items-center gap-2 text-medical-blue font-bold hover:text-medical-purple transition">
                  Schedule a Visit <FiChevronDown className="rotate-[-90deg]" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <div className="bg-medical-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-medical-blue text-2xl font-bold">30+</div>
                <h4 className="font-bold text-medical-dark">Years Experience</h4>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center translate-y-8 shadow-sm">
                <div className="bg-medical-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl font-bold">5k+</div>
                <h4 className="font-bold text-medical-dark">Surgeries Done</h4>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <div className="bg-medical-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 text-2xl font-bold">24/7</div>
                <h4 className="font-bold text-medical-dark">Emergency Care</h4>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center translate-y-8 shadow-sm">
                <div className="bg-medical-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 text-2xl font-bold">100%</div>
                <h4 className="font-bold text-medical-dark">Commitment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Patient Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-medical-dark mb-12">Happy Patient Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                <img src={img} alt={`Happy Patient ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-medical-dark mb-12">Patient Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-medical-dark mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-medical-light rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition"
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
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-medical-light">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-medical-blue p-10 text-white flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Have questions about pancreatic cancer treatment? Fill out the form and our team will get back to you shortly.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Phone</p>
                      <p className="font-bold text-lg">+91 96767 20002</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <p className="font-bold text-lg">cancercare@drvijayanandreddy.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <FiMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Location</p>
                      <p className="font-bold text-lg">Apollo Cancer Centre, Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-medical-dark mb-6">Request Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        placeholder="How can we help you?"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-medical-blue text-white py-3 rounded-lg font-bold hover:bg-medical-purple transition flex items-center justify-center gap-2">
                    <FiSend /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PancreaticCancerPage;

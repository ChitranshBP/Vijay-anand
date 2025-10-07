import React, { useState } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqs = [
  { q: "What is the survival rate for pancreatic cancer?", a: "Survival rates depend on stage, patient health, and treatment response." },
  { q: "How long is the recovery period after pancreatic cancer surgery?", a: "Recovery ranges from weeks to months depending on surgery and health." },
  { q: "Are there any side effects of pancreatic cancer treatment?", a: "Side effects may include fatigue, nausea, digestive issues, and surgical risks." },
  { q: "Can pancreatic cancer recur after treatment?", a: "Yes. Continued monitoring is essential." },
  { q: "Is chemotherapy always required after surgery?", a: "It depends on stage, diagnosis, and treatment plan." },
];

const testimonials = [
  "Dr. Reddy provided the best possible treatment for my cancer. The care and support at his clinic is truly best in India.",
  "The team’s expertise and compassion at Dr. Reddy’s clinic made a difficult time much easier.",
  "Dr. Reddy’s treatment expertise and supportive staff made my journey through treatment in India smoother than expected.",
];

const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Success in Surgery", value: "90%+" },
  { label: "Patients Treated", value: "20,000+" },
];

const PancreaticCancerPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [testIdx, setTestIdx] = useState(0);

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', treatment: '' });
  // Basic validation errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.phone) errs.phone = "Phone number is required";
    if (!formData.treatment) errs.treatment = "Please select a treatment type";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Handle submission logic here (e.g., send API request)
    alert("Thank you for your inquiry, " + formData.name + "!");
    setFormData({ name: '', email: '', phone: '', treatment: '' });
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 font-sans text-medical-dark flex flex-col">
      <Header />

      <main className="container max-w-7xl mx-auto px-6 pt-32 flex flex-col lg:flex-row gap-10 relative">
        {/* Main Content */}
        <section className="flex-1">
          {/* Hero Section */}
          <section className="bg-medical-blue/10 py-10 rounded-xl px-6 text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Pancreatic Cancer</h1>
            <p className="text-medical-blue font-semibold text-xl mb-3">Advanced Care & Compassionate Support, Hyderabad</p>
            <p className="text-gray-700 max-w-xl mx-auto mb-0">
              Personalized treatments. Expert team. Unmatched experience.
            </p>
          </section>

          {/* Main Text Content */}
          <article className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold border-l-4 border-medical-blue pl-4 mb-5">Understanding Pancreatic Cancer</h2>
              <p className="mb-6 leading-relaxed">
                Pancreatic cancer begins in the tissues of your pancreas, an organ in your abdomen that lies behind the lower part of your stomach. The pancreas plays a vital role in digestion by producing enzymes that help break down foods and also secretes hormones that help regulate blood sugar levels.
              </p>

              <h3 className="text-2xl font-semibold text-medical-blue mb-2">What is Pancreatic Cancer?</h3>
              <p className="mb-6 leading-relaxed">
                Pancreatic cancer begins in the tissues of your pancreas, an organ in your abdomen that lies behind the lower part of your stomach.
              </p>

              <h3 className="text-2xl font-semibold text-medical-blue mb-2">Types of Pancreatic Cancer</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Adenocarcinoma:</strong> Most pancreatic cancers are classified as adenocarcinomas, beginning in the cells that line the ducts of the pancreas.</li>
                <li><strong>Neuroendocrine Tumors:</strong> These are less common and can be benign or malignant. They start in the hormone-producing cells of the pancreas.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-medical-blue mb-2">Treatment Approach</h3>
              <ul className="list-disc list-inside mb-8 space-y-2">
                <li><strong>Diagnosis and Staging:</strong> Advanced imaging, biopsies, and blood tests to accurately stage pancreatic cancer.</li>
                <li><strong>Multidisciplinary Treatment:</strong> Collaboration with gastroenterologists, surgeons, and radiation oncologists for holistic care.</li>
                <li><strong>Surgical Options:</strong> Expertise in complex surgeries like the Whipple procedure for resectable pancreatic cancer.</li>
                <li><strong>Chemotherapy and Radiation Therapy:</strong> State-of-the-art chemotherapy and precision radiation therapy for local and systemic treatment.</li>
                <li><strong>Palliative Care:</strong> Focus on symptom relief and improved quality of life for advanced-stage patients.</li>
                <li><strong>Research and Trials:</strong> Access to latest clinical trials and emerging treatments for pancreatic cancer.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-medical-blue mb-2">Why Choose Dr. Vijay Anand Reddy?</h3>
              <ul className="list-disc list-inside mb-8 space-y-2">
                <li><strong>Renowned Oncologist:</strong> Vast experience treating all stages of pancreatic cancer.</li>
                <li><strong>Patient-Centric Care:</strong> Individualized treatment plans prioritizing patient’s needs and preferences.</li>
                <li><strong>Advanced Technology:</strong> Utilizing cutting-edge diagnostics and treatment methods.</li>
                <li><strong>Comprehensive Support:</strong> From diagnosis to follow-up care.</li>
                <li><strong>Cost Transparency:</strong> Clear communication about treatment costs.</li>
              </ul>
            </section>

            {/* Testimonials */}
            <section className="mb-16 max-w-3xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center text-medical-dark">Patient's Testimonials</h2>
              <div className="relative bg-medical-blue/10 rounded-xl p-8 shadow-md">
                <p className="italic text-medical-dark text-lg min-h-[56px] select-none text-center mb-6">{testimonials[testIdx]}</p>
                <div className="flex justify-center gap-8">
                  <button
                    onClick={() => setTestIdx(testIdx === 0 ? testimonials.length - 1 : testIdx - 1)}
                    aria-label="Previous testimonial"
                    className="p-3 hover:bg-medical-blue/20 rounded-full"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setTestIdx(testIdx === testimonials.length - 1 ? 0 : testIdx + 1)}
                    aria-label="Next testimonial"
                    className="p-3 hover:bg-medical-blue/20 rounded-full"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </section>

            {/* FAQ Accordion */}
            <section className="mb-24 max-w-3xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-medical-dark text-center">Frequently Asked Questions</h2>
              <div className="bg-white rounded-xl shadow divide-y divide-blue-100">
                {faqs.map((faq, i) => (
                  <FaqItem
                    key={i}
                    isOpen={faqOpen === i}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    question={faq.q}
                    answer={faq.a}
                  />
                ))}
              </div>
            </section>
          </article>
        </section>

        {/* Sticky Form for Desktop */}
        <aside className="hidden mt-5 lg:block lg:w-96 sticky top-32 self-start h-fit p-6 bg-white rounded-xl shadow-lg border border-blue-100 max-h-[calc(100vh-88px)]">
          <h3 className="text-2xl font-bold mb-6 text-medical-dark">Request a Consultation</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <label className="flex flex-col text-gray-700 font-semibold">
              Name
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-semibold">
              Email
              <input
                type="email"
                placeholder="example@mail.com"
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-semibold">
              Phone Number
              <input
                type="tel"
                placeholder="+91 12345 67890"
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-semibold">
              Type of Treatment
              <select
                required
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
              >
                <option value="" disabled selected>
                  Select Treatment Type
                </option>
                <option value="surgery">Surgery</option>
                <option value="chemotherapy">Chemotherapy</option>
                <option value="radiation">Radiation Therapy</option>
                <option value="palliative">Palliative Care</option>
                <option value="research">Research/Trials</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-medical-blue text-white py-3 rounded-md font-semibold hover:bg-medical-dark transition"
            >
              Submit
            </button>
          </form>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div>
    <button
      className={`w-full py-6 px-5 text-left flex justify-between items-center focus:outline-none ${
        isOpen ? 'bg-blue-50' : 'hover:bg-blue-100'
      }`}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-medical-blue">{question}</span>
      <FiChevronDown
        className={`w-5 h-5 text-medical-blue transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    {isOpen && <div className="mt-3 px-5 pb-6 text-gray-700">{answer}</div>}
  </div>
);

export default PancreaticCancerPage;

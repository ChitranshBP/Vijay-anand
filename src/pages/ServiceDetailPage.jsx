import React, { useState } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

const ServiceDetailPage = ({ service }) => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [testIdx, setTestIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: ''
  });
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
    alert(`Thank you for your inquiry, ${formData.name}!`);
    setFormData({ name: '', email: '', phone: '', treatment: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!service) {
    return <div className="p-12 text-center">Service not found.</div>;
  }

  return (
    <div className="min-h-screen mt-10 bg-gray-50 font-sans text-medical-dark flex flex-col">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 pt-32 flex flex-col lg:flex-row gap-10 relative">

        {/* Main Content */}
        <section className="flex-1">
          <section className="bg-medical-blue/10 py-10 rounded-xl px-6 text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-extrabold text-medical-dark mb-4">{service.title}</h1>
            <p className="text-medical-blue font-semibold text-xl mb-3">{service.intro}</p>
            <p className="text-gray-700 max-w-xl mx-auto mb-0">{service.summary}</p>
          </section>

          {/* Stats */}
          {service.stats && (
            <section className="max-w-4xl mx-auto mb-12 flex justify-around gap-6">
              {service.stats.map(({ label, value }, idx) => (
                <div key={idx} className="bg-white shadow-md rounded-xl px-6 py-8 flex flex-col items-center w-40">
                  <span className="text-4xl font-extrabold text-medical-blue">{value}</span>
                  <span className="mt-2 text-md font-semibold text-medical-dark">{label}</span>
                </div>
              ))}
            </section>
          )}

          {/* Content Sections */}
          <article className="max-w-4xl mx-auto">

            {service.contentSections.map((section, idx) => (
              <section key={idx} className="mb-12">
                <h2 className="text-3xl font-bold border-l-4 border-medical-blue pl-4 mb-5">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p className="mb-6 leading-relaxed" key={i}>{p}</p>
                ))}
                {section.listItems && (
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    {section.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* About Doctor */}
            {service.aboutDoctor && (
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold border-l-4 border-medical-blue pl-4 mb-5">About Dr. Vijay Anand Reddy</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.aboutDoctor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* PreOp */}
            {service.preOpDetails && (
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold border-l-4 border-medical-blue pl-4 mb-5">Details of Pre-Op for Pancreatic Cancer Treatment</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {service.preOpDetails.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* During Procedure */}
            {service.duringProcedure && (
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold border-l-4 border-medical-blue pl-4 mb-5">Details During the Procedure</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {service.duringProcedure.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Post Procedure */}
            {service.postProcedure && (
              <section className="mb-24 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold border-l-4 border-medical-blue pl-4 mb-5">Details of Post-Procedure for Pancreatic Cancer</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {service.postProcedure.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Testimonials */}
            {service.testimonials?.length > 0 && (
              <section className="mb-16 max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-medical-dark">Patient's Testimonials</h2>
                <div className="relative bg-medical-blue/10 rounded-xl p-8 shadow-md">
                  <p className="italic text-medical-dark text-lg min-h-[56px] select-none text-center mb-6">{service.testimonials[testIdx]}</p>
                  <div className="flex justify-center gap-8">
                    <button
                      onClick={() => setTestIdx(testIdx === 0 ? service.testimonials.length - 1 : testIdx - 1)}
                      aria-label="Previous testimonial"
                      className="p-3 hover:bg-medical-blue/20 rounded-full"
                    >
                      <FiChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setTestIdx(testIdx === service.testimonials.length - 1 ? 0 : testIdx + 1)}
                      aria-label="Next testimonial"
                      className="p-3 hover:bg-medical-blue/20 rounded-full"
                    >
                      <FiChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* FAQ Accordion */}
            {service.faqs?.length > 0 && (
              <section className="mb-24 max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-medical-dark text-center">Frequently Asked Questions</h2>
                <div className="bg-white rounded-xl shadow divide-y divide-blue-100">
                  {service.faqs.map((faq, i) => (
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
            )}
          </article>
        </section>

        {/* Sticky Form */}
        <aside className="hidden lg:block lg:w-96 sticky top-44 self-start h-fit p-6 bg-white rounded-xl shadow-lg border border-blue-100 max-h-[calc(100vh-88px)]">
          <h3 className="text-2xl font-bold mb-6 text-medical-dark">Request a Consultation</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col text-gray-700 font-semibold">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
                required
              />
              {errors.name && <span className="text-red-600 text-sm mt-1">{errors.name}</span>}
            </label>
            <label className="flex flex-col text-gray-700 font-semibold">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
                required
              />
              {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
            </label>
            <label className="flex flex-col text-gray-700 font-semibold">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 12345 67890"
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
                required
              />
              {errors.phone && <span className="text-red-600 text-sm mt-1">{errors.phone}</span>}
            </label>
            <label className="flex flex-col text-gray-700 font-semibold">
              Type of Treatment
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
                className="mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:outline-none px-3 py-2"
              >
                <option value="" disabled>
                  Select Treatment Type
                </option>
                <option value="surgery">Surgery</option>
                <option value="chemotherapy">Chemotherapy</option>
                <option value="radiation">Radiation Therapy</option>
                <option value="palliative">Palliative Care</option>
                <option value="research">Research/Trials</option>
              </select>
              {errors.treatment && <span className="text-red-600 text-sm mt-1">{errors.treatment}</span>}
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

export default ServiceDetailPage;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';


const ContactUs = () => (
  <div className="mt-12 min-h-screen bg-white flex flex-col">
    <Header />

    {/* Hero Section */}
    <section className="pt-32 pb-8 bg-medical-blue/5 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-3">Contact Us</h1>
      <p className="max-w-xl mx-auto text-gray-700 text-lg">
        We’re here to help you. Schedule a consultation, ask a question, or simply say hello.
      </p>
    </section>

      

    {/* Main Content */}
    <section className="flex-1 bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">

        {/* Form Side */}
        <div className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col justify-center">
          <form className="space-y-6">
            <div>
              <label className="block text-medical-dark font-semibold mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-medical-dark font-semibold mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-medical-dark font-semibold mb-1" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white"
                autoComplete="tel"
                pattern="[0-9]{10,15}"
                placeholder="e.g., +91-9000080000"
              />
            </div>
            <div>
              <label className="block text-medical-dark font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-medical-blue text-white font-bold hover:bg-medical-dark transition"
            >
              Send Message
            </button>
            <p className="text-gray-500 text-xs pt-2 text-center">We respect your privacy. Your details are never shared.</p>
          </form>
        </div>

        {/* Right Side: Let's Connect + Map */}
        <div className="flex flex-col gap-8">
          {/* Let's Connect Box */}
          <div className="rounded-xl bg-white shadow-md p-8 flex flex-col items-start mb-2">
            <h2 className="text-2xl font-bold mb-2 text-medical-dark">Let's Connect</h2>
            <p className="text-gray-700 mb-4 max-w-lg">
              Whether you’re an existing patient, a family member, or a healthcare professional — reach out, and our team will be delighted to assist you.
            </p>
            <div className="flex flex-col gap-3 text-medical-dark w-full">
              <a href="tel:+919676720002" className="flex items-center gap-2 hover:underline">
                <FiPhone /> +91-9676720002
              </a>
              <a href="mailto:cancercare@drvijayanandreddy.com" className="flex items-center gap-2 hover:underline">
                <FiMail />cancercare@drvijayanandreddy.com
              </a>
              <span className="flex items-center gap-2">
                <FiMapPin /> Apollo Cancer Center, Hyderabad, India
              </span>
            </div>
            <div className="flex gap-5 mt-5">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram className="w-6 h-6 text-medical-blue hover:text-blue-700" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook className="w-6 h-6 text-medical-blue hover:text-blue-700" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="w-6 h-6 text-medical-blue hover:text-blue-700" />
              </a>
            </div>
          </div>
          {/* Map Box */}
          <div className="rounded-lg shadow-md w-full h-64 overflow-hidden">
      <iframe
  title="Apollo Cancer Centre Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9362473193!2d78.41015217577959!3d17.41484690201227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cf2ac35539%3A0x87682b53a99a8ea1!2sApollo%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1757494001423!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: "16rem" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full"
/>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ContactUs;

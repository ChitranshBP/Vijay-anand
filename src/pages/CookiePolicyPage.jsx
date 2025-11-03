import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CookiePolicyPage = () => (
    <>
<Header/>

      <div className="min-h-screen mt-24 bg-gray-50 pb-24">
    {/* Hero */}
    <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
      <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Cookie Policy</h1>
      <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
        Learn about how we use cookies and similar technologies on our website.
      </p>
    </div>

    {/* Content */}
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how you use our website and improve your browsing experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
        <p className="mb-3">
          We use cookies for several purposes, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To remember your preferences and settings</li>
          <li>To understand how you interact with our website</li>
          <li>To improve website functionality and user experience</li>
          <li>To analyze website traffic and performance</li>
          <li>To provide personalized content and services</li>
          <li>To ensure the security and integrity of our website</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are essential for the website to work.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received. This helps us improve the performance and functionality of our website.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. These cookies help us analyze data about website traffic and improve our website to better meet user needs.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
        <p className="mb-3">
          In addition to our own cookies, we may use third-party cookies from trusted partners such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Analytics - to analyze website traffic and user behavior</li>
          <li>Social media platforms - to enable social sharing features</li>
          <li>Embedded content providers - for videos or maps</li>
        </ul>
        <p className="mt-3">
          These third parties may collect information about your online activities over time and across different websites. We do not control these third-party cookies and recommend reviewing their privacy policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
        <p className="mb-3">
          You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through:
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Browser Settings</h3>
          <p className="mb-2">
            Most web browsers allow you to control cookies through their settings. You can set your browser to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Block all cookies</li>
            <li>Accept only certain cookies</li>
            <li>Delete cookies when you close your browser</li>
            <li>Alert you when a website tries to place a cookie</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Cookie Banner</h3>
          <p>
            When you first visit our website, you will see a cookie banner that allows you to accept or customize your cookie preferences.
          </p>
        </div>

        <p className="mt-3 text-sm italic">
          Please note that blocking or deleting cookies may impact your experience on our website and limit the functionality of certain features.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. How to Control Cookies in Your Browser</h2>
        <p className="mb-3">
          Here are links to cookie management instructions for popular browsers:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
          <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li><strong>Microsoft Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Do Not Track Signals</h2>
        <p>
          Some browsers include a Do Not Track (DNT) feature that signals to websites that you do not want your online activities tracked. Our website currently does not respond to DNT signals, as there is no industry standard for how websites should respond to such signals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Updates to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We encourage you to review this policy periodically. The date of the last update will be indicated at the top of the policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie Policy, please contact us through the contact information provided on our Contact page.
        </p>
      </section>
    </div>
  </div>

   <Footer />
    </>
);

export default CookiePolicyPage;

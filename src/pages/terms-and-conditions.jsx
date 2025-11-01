import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TermsAndConditionsPage = () => (
    <>

<Header/>


      <div className="min-h-screen mt-24 bg-gray-50 pb-24">
    {/* Hero */}
    <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
      <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Terms &amp; Conditions</h1>
      <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
        Please read these terms and conditions carefully before using our website.
      </p>
    </div>

    {/* Content */}
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Website Content</h2>
        <p>
          The content on this website is for informational and educational purposes only and does not constitute medical advice. We strive to maintain accurate and up-to-date information, but we do not guarantee its completeness or correctness.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Use of Information</h2>
        <p>
          Any reliance you place on the information provided by this website is strictly at your own risk. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
        <p>
          All content, graphics, logos, and images on this website are the property of the site owner unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. External Links</h2>
        <p>
          This website may contain links to external websites that are not provided or maintained by or in any way affiliated with our site. We do not guarantee the accuracy, relevance, or completeness of any information on these external websites.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any damages arising out of or in connection with your use of this website. This includes, without limitation, direct or indirect damages, loss of data, income or profit, or claims of third parties.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page and are effective immediately.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms and Conditions, please contact us via the methods provided on our Contact page.
        </p>
      </section>
    </div>
  </div>

   <Footer />
    </>

);

export default TermsAndConditionsPage;

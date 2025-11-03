import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivacyPolicyPage = () => (
    <>
<Header/>

      <div className="min-h-screen mt-24 bg-gray-50 pb-24">
    {/* Hero */}
    <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
      <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Privacy Policy</h1>
      <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
        Your privacy is important to us. Learn how we collect, use, and protect your information.
      </p>
    </div>

    {/* Content */}
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="mb-3">
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fill out contact forms or appointment request forms</li>
          <li>Subscribe to our newsletter or updates</li>
          <li>Communicate with us via email or phone</li>
          <li>Use our website and interact with its features</li>
        </ul>
        <p className="mt-3">
          This information may include your name, email address, phone number, and any other details you choose to provide.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
        <p className="mb-3">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your inquiries and provide requested services</li>
          <li>To schedule and confirm appointments</li>
          <li>To send you updates, newsletters, and relevant healthcare information</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations and protect our rights</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
        <p className="mb-3">
          We respect your privacy and will never sell, rent, or share your personal information with third parties for marketing purposes without your consent. We may share your information only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>With healthcare professionals involved in your care (with your consent)</li>
          <li>With service providers who assist us in operating our website</li>
          <li>When required by law or to protect our legal rights</li>
          <li>In connection with a business transaction (merger, sale, or acquisition)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of certain features on our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
        <p className="mb-3">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of receiving marketing communications</li>
          <li>Withdraw your consent at any time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with the effective date. We encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us through the contact information provided on our Contact page.
        </p>
      </section>
    </div>
  </div>

   <Footer />
    </>
);

export default PrivacyPolicyPage;

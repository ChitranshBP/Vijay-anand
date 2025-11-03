import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MedicalDisclaimerPage = () => (
    <>
<Header/>

      <div className="min-h-screen mt-24 bg-gray-50 pb-24">
    {/* Hero */}
    <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
      <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Medical Disclaimer</h1>
      <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
        Important information about the medical content on this website.
      </p>
    </div>

    {/* Content */}
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. General Information Only</h2>
        <p>
          The information provided on this website is for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. The content on this website should not be used as a basis for diagnosing or treating any health condition.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Not Medical Advice</h2>
        <p>
          The content on this website, including text, graphics, images, and other material, does not constitute medical advice and should not be relied upon as such. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or treatment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. No Doctor-Patient Relationship</h2>
        <p>
          Use of this website and the information contained herein does not create a doctor-patient relationship between you and Dr. Vijay Anand Reddy or any healthcare provider associated with this website. A doctor-patient relationship is established only through an in-person consultation and examination.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Consult Your Healthcare Provider</h2>
        <p className="mb-3">
          Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
        </p>
        <p>
          The information provided is not intended to replace a one-on-one relationship with a qualified healthcare professional and is not intended as medical advice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Accuracy and Updates</h2>
        <p>
          While we strive to provide accurate and up-to-date information, medical knowledge and treatment guidelines are constantly evolving. We make no representations or warranties about the accuracy, reliability, completeness, or timeliness of the content on this website. Information may be changed or updated without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Individual Results May Vary</h2>
        <p>
          Treatment outcomes and results described on this website are based on general medical practices and individual patient experiences. Your results may vary depending on your specific medical condition, overall health, treatment adherence, and other factors. Past results do not guarantee future outcomes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Testimonials and Case Studies</h2>
        <p>
          Patient testimonials and case studies presented on this website represent individual experiences and outcomes. These should not be considered as guarantees of similar results for all patients. Every patient's situation is unique, and treatment outcomes depend on many factors including diagnosis, stage of disease, and individual health conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. External Links</h2>
        <p>
          This website may contain links to external websites or resources. We are not responsible for the content, accuracy, or opinions expressed on these external sites. The inclusion of any link does not imply endorsement by Dr. Vijay Anand Reddy or this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
        <p>
          By using this website, you acknowledge that the website owner, Dr. Vijay Anand Reddy, and any associated healthcare providers shall not be liable for any damages, whether direct, indirect, incidental, or consequential, arising from the use of or reliance on information provided on this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">10. Medical Emergency</h2>
        <p className="font-semibold text-red-600 mb-3">
          IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL YOUR LOCAL EMERGENCY NUMBER (SUCH AS 108 OR 112 IN INDIA) IMMEDIATELY.
        </p>
        <p>
          Do not use this website or email to communicate urgent medical needs. In case of emergency, contact emergency services or visit the nearest emergency department.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">11. Acknowledgment</h2>
        <p>
          By continuing to use this website, you acknowledge that you have read and understood this Medical Disclaimer and agree to its terms. If you do not agree with this disclaimer, please discontinue use of this website immediately.
        </p>
      </section>
    </div>
  </div>

   <Footer />
    </>
);

export default MedicalDisclaimerPage;

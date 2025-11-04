import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TermsAndConditionsPage = () => (
  <>
    <Header />

    <div className="min-h-screen mt-24 bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
        <h1 className="text-5xl font-extrabold text-medical-dark mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
          Please read these terms and conditions carefully before using Our Service.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark leading-relaxed">
        <p className="text-right text-sm text-gray-500 mb-8">
          Last updated: November 30, 2022
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interpretation and Definitions</h2>

          <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
          <p className="mb-4">
            The words of which the initial letter is capitalized have meanings defined
            under the following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-xl font-semibold mb-2">Definitions</h3>
          <p className="mb-4">
            For the purposes of these Terms and Conditions:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Affiliate</strong> means an entity that controls, is controlled by or is under
              common control with a party, where “control” means ownership of 50% or more of the
              shares, equity interest or other securities entitled to vote for election of directors
              or other managing authority.
            </li>
            <li><strong>Country</strong> refers to: Telangana, India</li>
            <li><strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our”) refers to Dr Vijay Anand Reddy.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Terms and Conditions</strong> (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><strong>Third-party Social Media Service</strong> means any services or content provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li><strong>Website</strong> refers to Dr Vijay Anand Reddy, accessible from <a href="https://drvijayanandreddy.com/" className="text-medical-blue underline">https://drvijayanandreddy.com/</a></li>
            <li><strong>You</strong> means the individual or entity using the Service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Acknowledgment</h2>
          <p className="mb-4">
            These are the Terms and Conditions governing the use of this Service and the agreement
            that operates between You and the Company. These Terms set out the rights and
            obligations of all users regarding the use of the Service.
          </p>
          <p className="mb-4">
            Your access to and use of the Service is conditioned on Your acceptance of and
            compliance with these Terms. By accessing or using the Service You agree to be bound by
            them. If You disagree with any part of these Terms, You may not access the Service.
          </p>
          <p className="mb-4">
            You represent that you are over the age of 18. The Company does not permit those under
            18 to use the Service.
          </p>
          <p>
            Your use of the Service is also conditioned on Your acceptance of and compliance with
            Our Privacy Policy, which describes how We collect, use, and disclose Your personal
            information. Please read it carefully before using Our Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Links to Other Websites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party websites or services that are not owned or
            controlled by the Company. We have no control over, and assume no responsibility for, the
            content, privacy policies, or practices of any third-party websites or services.
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy policies of any
            third-party websites or services that You visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p>
            We may terminate or suspend Your access immediately, without prior notice or liability,
            for any reason whatsoever, including without limitation if You breach these Terms and
            Conditions. Upon termination, Your right to use the Service will cease immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            Notwithstanding any damages that You might incur, the entire liability of the Company
            and its suppliers shall be limited to the amount actually paid by You through the
            Service or 100 USD if You haven’t purchased anything through the Service.
          </p>
          <p>
            To the maximum extent permitted by law, the Company shall not be liable for any special,
            incidental, indirect, or consequential damages, including loss of profits, data, or
            business interruption, even if advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">“AS IS” and “AS AVAILABLE” Disclaimer</h2>
          <p className="mb-4">
            The Service is provided “AS IS” and “AS AVAILABLE” without warranty of any kind. The
            Company disclaims all warranties, express or implied, including merchantability,
            fitness for a particular purpose, title, and non-infringement.
          </p>
          <p>
            Some jurisdictions do not allow certain exclusions, so some limitations may not apply to
            You.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p>
            The laws of Telangana, India, excluding its conflicts of law rules, shall govern these
            Terms and Your use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disputes Resolution</h2>
          <p>
            If You have any concern or dispute about the Service, You agree to first try to resolve
            the dispute informally by contacting the Company.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Severability and Waiver</h2>

          <h3 className="text-xl font-semibold mb-2">Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is held to be unenforceable, that provision will be
            modified to achieve its purpose to the greatest extent possible, and the remaining
            provisions will remain in full effect.
          </p>

          <h3 className="text-xl font-semibold mb-2">Waiver</h3>
          <p>
            The failure to exercise a right or require performance of an obligation under these
            Terms shall not affect a party’s ability to do so at any time thereafter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to These Terms and Conditions</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is
            material, We will provide reasonable notice prior to the new terms taking effect. By
            continuing to use Our Service after changes become effective, You agree to be bound by
            the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, You can contact us by email
            at{" "}
            <a
              href="mailto:cancercare@drvijayanandreddy.com"
              className="text-medical-blue underline"
            >
              cancercare@drvijayanandreddy.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>

    <Footer />
  </>
);

export default TermsAndConditionsPage;

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivacyPolicyPage = () => (
  <>
    <Header />

    <div className="min-h-screen mt-24 bg-gray-50 pb-24">
      {/* Hero */}
      <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
        <h1 className="text-5xl font-extrabold text-medical-dark mb-4">
          Privacy Policy
        </h1>
        <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark leading-relaxed">
        <section className="mb-8">
          <p className="mb-4">
            Your privacy is important to us. It is <strong>Dr Vijay Anand Reddy’s</strong> policy to respect your privacy regarding any information we may collect from you across our website, Dr Vijay Anand Reddy, and other sites we own and operate.
          </p>
          <p className="mb-4">
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <p className="mb-4">
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
          </p>
          <p className="mb-4">
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
          </p>
          <p className="mb-4">
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <p className="mb-4">
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        <section>
          <h2 className="text-3xl font-bold mb-4">Cookie Policy for Dr Vijay Anand Reddy</h2>
          <p className="mb-4">
            This is the Cookie Policy for <strong>Dr Vijay Anand Reddy</strong>, accessible from our website URL.
          </p>

          <h3 className="text-2xl font-semibold mb-2">What Are Cookies</h3>
          <p className="mb-4">
            As is common practice with almost all professional websites, this site uses cookies — small files downloaded to your computer — to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We’ll also explain how you can prevent these cookies from being stored, though disabling cookies may affect certain site functionality.
          </p>

          <h3 className="text-2xl font-semibold mb-2">How We Use Cookies</h3>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below. Unfortunately, there are no industry-standard options for disabling cookies without completely disabling functionality and features they add to this site. It is recommended that you leave all cookies enabled unless you are certain you do not need them.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Disabling Cookies</h3>
          <p className="mb-4">
            You can prevent cookies from being set by adjusting your browser settings (see your browser Help for instructions). Please note that disabling cookies will affect the functionality of this and many other websites you visit.
          </p>

          <h3 className="text-2xl font-semibold mb-2">The Cookies We Set</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Account related cookies:</strong> Used for managing the signup process and general administration. These are usually deleted when you log out.</li>
            <li><strong>Login related cookies:</strong> Allow us to remember when you are logged in so you don’t have to log in every time you visit a new page.</li>
            <li><strong>Email newsletters cookies:</strong> Used to remember if you are already registered and whether to show certain notifications.</li>
            <li><strong>Orders processing cookies:</strong> Essential to ensure that your order is remembered between pages for proper processing.</li>
            <li><strong>Surveys cookies:</strong> Used for user surveys and questionnaires to provide you with relevant results and experiences.</li>
            <li><strong>Forms cookies:</strong> May store your user details for future correspondence when submitting forms.</li>
            <li><strong>Site preferences cookies:</strong> Allow us to remember your preferences to enhance your site experience.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Third Party Cookies</h3>
          <p className="mb-4">
            In some cases, we also use cookies provided by trusted third parties. For example:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We use <strong>Google Analytics</strong> to help us understand how you use our site and improve your experience. These cookies may track things like how long you spend on the site and the pages you visit. For more information, see the official Google Analytics page.</li>
            <li>From time to time, we test new features and make changes to site delivery. These cookies ensure a consistent experience for users.</li>
            <li>We also use <strong>social media plugins</strong> that allow you to connect with your social networks. These may set cookies through our site to enhance your profile or contribute to data they hold.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">More Information</h3>
          <p className="mb-4">
            Hopefully this has clarified things for you. If you’re unsure whether you need cookies, it’s safer to leave them enabled in case they interact with features you use on our site.
          </p>
          <p>This policy is effective as of <strong>November 2022</strong>.</p>
        </section>
      </div>
    </div>

    <Footer />
  </>
);

export default PrivacyPolicyPage;

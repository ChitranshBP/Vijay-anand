import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CookiePolicyPage = () => (
  <>
    <Header />

    <div className="min-h-screen mt-24 bg-gray-50 pb-24">
      {/* Hero */}
      <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
        <h1 className="text-5xl font-extrabold text-medical-dark mb-4">
          Privacy & Cookie Policy
        </h1>
        <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
          Learn how we collect, use, and protect your personal information and cookies.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12 text-medical-dark space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. It is Dr Vijay Anand Reddy’s policy to respect
            your privacy regarding any information we may collect from you across our website,
            Dr Vijay Anand Reddy, and other sites we own and operate.
          </p>

          <p className="mb-4">
            We only ask for personal information when we truly need it to provide a service to
            you. We collect it by fair and lawful means, with your knowledge and consent. We also
            let you know why we’re collecting it and how it will be used.
          </p>

          <p className="mb-4">
            We only retain collected information for as long as necessary to provide you with
            your requested service. What data we store, we’ll protect within commercially
            acceptable means to prevent loss and theft, as well as unauthorised access,
            disclosure, copying, use or modification.
          </p>

          <p className="mb-4">
            We don’t share any personally identifying information publicly or with third-parties,
            except when required to by law.
          </p>

          <p className="mb-4">
            Our website may link to external sites that are not operated by us. Please be aware
            that we have no control over the content and practices of these sites, and cannot
            accept responsibility or liability for their respective privacy policies.
          </p>

          <p className="mb-4">
            You are free to refuse our request for your personal information, with the
            understanding that we may be unable to provide you with some of your desired services.
          </p>

          <p className="mb-4">
            Your continued use of our website will be regarded as acceptance of our practices
            around privacy and personal information. If you have any questions about how we handle
            user data and personal information, feel free to contact us.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Cookie Policy for Dr Vijay Anand Reddy</h2>
          <p className="mb-4">
            This is the Cookie Policy for Dr Vijay Anand Reddy, accessible from the website URL.
          </p>

          <h3 className="text-2xl font-semibold mb-2">What Are Cookies</h3>
          <p className="mb-4">
            As is common practice with almost all professional websites, this site uses cookies,
            which are tiny files that are downloaded to your computer to improve your experience.
            This page describes what information they gather, how we use it, and why we sometimes
            need to store these cookies. We will also share how you can prevent these cookies from
            being stored—however, this may downgrade or ‘break’ certain elements of the site’s
            functionality.
          </p>

          <h3 className="text-2xl font-semibold mb-2">How We Use Cookies</h3>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases
            there are no industry standard options for disabling cookies without completely
            disabling the functionality and features they add to this site. It is recommended that
            you leave on all cookies if you are not sure whether you need them or not in case they
            are used to provide a service that you use.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Disabling Cookies</h3>
          <p className="mb-4">
            You can prevent the setting of cookies by adjusting the settings on your browser (see
            your browser Help for how to do this). Be aware that disabling cookies will affect the
            functionality of this and many other websites that you visit. Therefore, it is
            recommended that you do not disable cookies.
          </p>

          <h3 className="text-2xl font-semibold mb-2">The Cookies We Set</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account related cookies:</strong> Used for signup process and general
              administration.
            </li>
            <li>
              <strong>Login related cookies:</strong> Remember when you are logged in to prevent
              repeated logins.
            </li>
            <li>
              <strong>Email newsletters related cookies:</strong> Remember if you’re already
              registered and manage relevant notifications.
            </li>
            <li>
              <strong>Orders processing related cookies:</strong> Ensure that your order is
              remembered between pages.
            </li>
            <li>
              <strong>Surveys related cookies:</strong> Used to remember participation and provide
              accurate results.
            </li>
            <li>
              <strong>Forms related cookies:</strong> Remember your details for future
              correspondence.
            </li>
            <li>
              <strong>Site preferences cookies:</strong> Store your preferences for site behavior.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2 mt-6">Third Party Cookies</h3>
          <p className="mb-4">
            In some special cases, we also use cookies provided by trusted third parties.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> Used to understand how you use the site and help
              improve your experience.
            </li>
            <li>
              <strong>Third-party analytics:</strong> Track and measure usage of the site to
              improve our content and performance.
            </li>
            <li>
              <strong>Testing new features:</strong> Used to ensure consistent user experience
              during feature testing.
            </li>
            <li>
              <strong>E-commerce tracking:</strong> Helps us understand purchase behavior for
              better pricing and offers.
            </li>
            <li>
              <strong>Social media cookies:</strong> Allow integration with platforms such as
              Facebook, Instagram, and others for sharing and engagement features.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2 mt-6">More Information</h3>
          <p>
            Hopefully that has clarified things for you. If there is something that you aren’t sure
            whether you need or not, it’s usually safer to leave cookies enabled in case it
            interacts with one of the features you use on our site.
          </p>

          <p className="mt-4 text-sm italic">
            This policy is effective as of Nov 2022.
          </p>
        </section>
      </div>
    </div>

    <Footer />
  </>
);

export default CookiePolicyPage;

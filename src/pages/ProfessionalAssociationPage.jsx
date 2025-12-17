import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiUsers, FiStar, FiCheckCircle, FiAward } from "react-icons/fi";
import QuoteSection from "../components/QuoteSection";
import survivorQuotes from "../data/quotes";

const leadershipRoles = [
  "Advisory Committee member for Global Access to Cancer Care Foundation (GACCF), USA",
  "Chair, Association of Radiation Oncologists of India (AROI) (Past)",
  "President of Association of Radiation Oncologists of India (AROI) (Past)",
  "President of Association of Radiation Oncologists of India (AROI), Telangana Chapter (Past)",
  "President of Association of Radiation Oncologists of India (AROI), AP Chapter (Past)",
  "Chairman, Indian College of Radiation Oncology (ICRO), INDIA (Past)",
];

const memberships = [
  "Member of International American Brachytherapy Society (ABS)",
  "Full Member of American Society of Clinical Oncology (ASCO)",
  "Full Member of American Society for Radiation Oncology (ASTRO)",
  "Permanent Member of European Society of Medical Oncology (ESMO)",
  "Permanent Member of “Union for International Cancer Control”, UICC, Geneva",
  "Member of Indian College of Radiation Oncology (ICRO)",
  "Member of Indian Society of Oncology (ISO)",
  "Member of Civil Assistant Surgeon’s Association, Andhra Pradesh",
  "Member of Indian Medical Association (IMA)",
  "Member of Indian Co-operative Oncology Network (ICON)",
  "Member of Indian Brachytherapy Society (IBS)",
];

const ProfessionalAssociationPage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Header />

    {/* Page Hero */}
    <section className="pt-32 mt-10 pb-10 text-center bg-medical-blue/10">
      <FiUsers className="mx-auto w-14 h-14 text-medical-blue mb-2" />
      <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-2">
        Professional Associations & Leadership
      </h1>
      <p className="max-w-xl mx-auto text-gray-700 text-lg">
        Trusted to lead, serve, and inspire at the highest levels in global oncology and medical communities.
      </p>
    </section>

    {/* Leadership Roles */}
    <section className="py-14 bg-white shadow-lg rounded-3xl max-w-5xl mx-auto my-12 px-8">
      <div className="flex items-center gap-4 mb-8 border-b-4 border-medical-blue pb-4">
        <FiStar className="text-medical-blue w-8 h-8 drop-shadow" />
        <h2 className="text-3xl font-bold text-medical-dark select-none">Leadership & Advisory Roles</h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {leadershipRoles.map((role, i) => (
          <li
            key={i}
            className="flex items-start gap-4 cursor-pointer hover:bg-medical-blue/10 rounded-xl p-3 transition"
            tabIndex={0}
            role="button"
            aria-label={`Leadership role: ${role}`}
          >
            <FiAward className="flex-shrink-0 mt-1 text-amber-500 w-6 h-6 drop-shadow" />
            <span className="text-lg text-medical-dark leading-relaxed">{role}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Memberships */}
    <section className="py-14 bg-white max-w-5xl mx-auto rounded-3xl my-12 px-8 shadow-md">
      <div className="flex items-center gap-4 mb-8 border-b-4 border-medical-blue pb-4">
        <FiCheckCircle className="text-medical-blue w-8 h-8 drop-shadow" />
        <h2 className="text-3xl font-bold text-medical-dark select-none">Professional Memberships</h2>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-medical-dark text-lg">
        {memberships.map((member, i) => (
          <li
            key={i}
            className="flex items-start gap-4 cursor-pointer hover:bg-medical-blue/20 rounded-lg p-3 transition"
            tabIndex={0}
            role="button"
            aria-label={`Membership: ${member}`}
          >
            <FiCheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-medical-blue drop-shadow" />
            <span>{member}</span>
          </li>
        ))}
      </ul>
    </section>

    <QuoteSection quoteId={61} quotes={survivorQuotes} />

    <Footer />
  </div>
);

export default ProfessionalAssociationPage;

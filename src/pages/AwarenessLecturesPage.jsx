import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiMic, FiCalendar } from "react-icons/fi";

const lectures = [
  {
    title: "Paradigm Shift in Cancer Management",
    venue: "Southern Sector Conference cum CME, CH, CRPF, Hyderabad",
    date: "June 12, 2014",
  },
  {
    title: "Cancer is Curable! – believe it!",
    venue: "IAS Officers Wives Association, Hyderabad",
    date: "March 26, 2014",
  },
  {
    title: "We can prevent and cure Cancer",
    venue: "CME at Vizag Steel Plant Commemoration Day, Visakhapatnam",
    date: "December 27, 2013",
  },
  {
    title: "Cancer Awareness",
    venue: "BHEL, Bhopal",
    date: "October 23, 2013",
  },
  {
    title: "Overview of the Management of Common Cancers",
    venue: "Shadan Inst. of Medical Sciences, Hyderabad",
    date: "May 2, 2013",
  },
  {
    title: "Before & after Cancer",
    venue: "TATA Consultancy Services, Hyderabad",
    date: "February 19, 2013",
  },
  {
    title: "Cancer Awareness",
    venue: "GE Energy – Hyderabad Technology Center, HITEC City, Hyderabad",
    date: "October 18, 2012",
  },
  {
    title: "Cancer – Prevention, Detection & Treatment",
    venue:
      "International Advanced Research Centre for Powder Metallurgy & New Materials (ARCI), Hyderabad",
    date: "March 21, 2012",
  },
  {
    title: "Cancer in Women",
    venue: "St. Ann’s College for Women, Mehdipatnam, Hyderabad",
    date: "October 25, 2011",
  },
  {
    title: "Cancer in Women",
    venue:
      "CME at Padma Vibhushan Nawab Mehdi Nawaz Jung Clinic & Charitable Trust, Darulshifa, Hyderabad",
    date: "October 23, 2011",
  },
  {
    title: "Yes, you can prevent Cancer in Women",
    venue: "GE-Energy, Hyderabad Technology Center, Hitec City, Hyderabad",
    date: "March 8, 2010",
  },
];

const AwarenessLecturesPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />

    {/* Page Hero */}
    <section className="pt-32 mt-10 pb-10 text-center bg-medical-blue/10">
      <FiMic className="mx-auto w-12 h-12 text-medical-blue mb-2" />
      <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">
        Awareness Lectures
      </h1>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg">
        Inspiring hope and spreading knowledge – A timeline of impactful awareness lectures delivered to educate, empower, and save lives.
      </p>
    </section>

    {/* Timeline Section */}
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <ul className="relative border-l-2 border-medical-blue/20">
          {lectures.map((lec, i) => (
            <li key={i} className="mb-10 ml-6 group">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-medical-blue/90 group-hover:bg-medical-dark transition-colors border-4 border-white ring-0">
                <FiMic className="h-4 w-4 text-white" />
              </span>
              <div className="ml-2">
                <div className="flex gap-2 items-center mb-1">
                  <FiCalendar className="w-4 h-4 text-medical-blue/80" />
                  <span className="text-sm text-medical-blue/80 font-medium">{lec.date}</span>
                </div>
                <h3 className="text-lg font-bold text-medical-dark">{lec.title}</h3>
                <div className="text-gray-700">{lec.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Footer />
  </div>
);

export default AwarenessLecturesPage;

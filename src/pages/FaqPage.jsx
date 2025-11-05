import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Replace this array with your 20 FAQs!
const faqData = [
  {
    question: "Who is the best doctor to consult for cancer treatment in Hyderabad?",
    answer: "The Best Oncologist in Hyderabad, Dr. Vijay Anand Reddy, provides comprehensive cancer care using advanced treatments like Proton Therapy, Tomotherapy, and Brachytherapy. His expertise in precision oncology ensures accurate targeting, minimal side effects, and improved outcomes for patients battling various types of cancer."
  },
  {
    question: "What kind of treatments does a cancer specialist provide?",
    answer: "A Cancer Specialist in Hyderabad offers personalized treatments such as chemotherapy, radiation therapy, targeted therapy, and immunotherapy. These approaches are tailored to each cancer type, ensuring effective disease control, better survival rates, and improved quality of life for patients."
  },
  {
    question: "How can a medical oncologist help in cancer management?",
    answer: "A Medical Oncologist in Hyderabad specializes in diagnosing and treating cancer through systemic therapies like chemotherapy, hormone therapy, and targeted drugs. They focus on controlling cancer growth, reducing symptoms, and improving overall health during and after treatment."
  },
  {
    question: "What makes radiation therapy important in cancer treatment?",
    answer: "The Best Radiation Oncologist in Hyderabad uses advanced methods such as 3D Conformal Radiotherapy and Stereotactic Radiosurgery. These high-precision techniques deliver focused radiation to tumors, protecting healthy tissues and reducing side effects while maximizing treatment effectiveness."
  },
  {
    question: "Is Proton Therapy available for patients in Hyderabad?",
    answer: "Yes, Proton Therapy in Hyderabad is available at leading cancer centers. It delivers targeted radiation that stops precisely at the tumor, protecting healthy organs and tissues. This therapy is ideal for brain, head, neck, and pediatric cancers, ensuring safer and more effective results."
  },
  {
    question: "How does Brachytherapy work in cancer care?",
    answer: "Brachytherapy in Hyderabad is a precise radiation treatment where radioactive sources are placed inside or near the tumor. This technique offers localized therapy with fewer side effects and shorter recovery times, making it highly effective for gynecological and prostate cancers."
  },
  {
    question: "What are the benefits of Advanced Brachytherapy?",
    answer: "Advanced Brachytherapy Treatment in Hyderabad provides superior precision and control by delivering radiation directly to the tumor. It minimizes harm to nearby tissues, reduces treatment duration, and ensures high success rates, especially in prostate, cervical, and oral cancers."
  },
  {
    question: "Can throat cancer be treated successfully?",
    answer: "Yes, Throat Cancer Treatment in Hyderabad combines Proton Therapy, radiation, and chemotherapy to achieve excellent results. These advanced methods not only target tumors accurately but also preserve essential functions like speech and swallowing for better recovery."
  },
  {
    question: "What are the treatment options for prostate cancer?",
    answer: "Prostate Cancer Treatment in Hyderabad includes radiation therapy, hormone therapy, and advanced image-guided techniques. These targeted treatments provide precision, minimize side effects, and ensure effective tumor control while maintaining quality of life."
  },
  {
    question: "Is there a cure for liver cancer?",
    answer: "Liver Cancer Treatment in Hyderabad involves targeted therapies, radiation, and surgery. By combining modern medical techniques and imaging, oncologists offer personalized care that enhances liver function and improves survival outcomes in complex cancer cases."
  },
  {
    question: "What is the best way to treat lung cancer?",
    answer: "Lung Cancer Treatment in Hyderabad uses advanced technologies like Tomotherapy and Proton Therapy for accurate radiation delivery. These therapies help shrink tumors, relieve symptoms, and preserve lung function with minimal side effects for patients."
  },
  {
    question: "Can pancreatic cancer be treated with modern therapies?",
    answer: "Yes, Pancreatic Cancer Treatment in Hyderabad includes chemotherapy, radiation, and targeted drug therapy. Under the care of experienced oncologists, these treatments are tailored to slow disease progression and enhance long-term survival rates."
  },
  {
    question: "What type of radiation therapy gives the best results?",
    answer: "3D Conformal Radiotherapy in Hyderabad is a modern technique that shapes radiation beams to match the tumor’s size and position. This precision approach minimizes radiation exposure to healthy organs while improving cancer control and treatment success."
  },
  {
    question: "How does Tomotherapy differ from traditional radiation?",
    answer: "Tomotherapy in Hyderabad merges imaging and radiation delivery for maximum precision. It allows oncologists to monitor tumors in real time and adjust treatment accordingly, reducing damage to healthy tissues and enhancing effectiveness in complex cancers."
  },
  {
    question: "What are the latest radiation technologies available?",
    answer: "Advanced Radiation Techniques in Hyderabad include Proton Therapy, Brachytherapy, and Stereotactic Radiosurgery. These innovations enable targeted treatment, faster recovery, and higher cure rates for cancers located near vital organs or sensitive areas."
  },
  {
    question: "Is Proton Treatment different from Proton Therapy?",
    answer: "Proton Treatment in Hyderabad is an advanced form of Proton Therapy that uses protons to deliver precise radiation doses. It is highly effective for treating tumors near vital organs, significantly reducing long-term complications and improving outcomes."
  },
  {
    question: "Can osteosarcoma be treated successfully?",
    answer: "Yes, Osteosarcoma Treatment in Hyderabad combines surgery, chemotherapy, and radiation therapy. With advancements in precision oncology, patients benefit from better limb preservation, improved recovery, and higher survival rates in bone cancers."
  },
  {
    question: "What are the options for esophageal cancer patients?",
    answer: "Esophageal Cancer Treatment in Hyderabad includes surgery, chemotherapy, and radiation to control tumor growth. These therapies help improve swallowing, relieve symptoms, and enhance quality of life for patients with advanced-stage cancers."
  },
  {
    question: "Is thyroid cancer curable?",
    answer: "Yes, Thyroid Cancer Treatment in Hyderabad can lead to complete recovery with early diagnosis. Treatments like surgery, radioactive iodine, and radiation therapy are highly effective and guided by experienced oncologists for the best outcomes."
  },
  {
    question: "Can adrenal cancer be managed effectively?",
    answer: "Adrenal Cancer Treatment in Hyderabad involves surgery, radiation, and hormonal therapy. Early detection and expert care ensure effective disease control, symptom relief, and improved long-term prognosis for patients."
  },
  {
    question: "What treatments are available for gynecological cancers?",
    answer: "Gynaecological Cancer Treatment in Hyderabad includes radiation, Brachytherapy, and minimally invasive surgeries. These treatments are tailored to manage cervical, ovarian, and uterine cancers while ensuring quick recovery and minimal side effects."
  },
  {
    question: "How is bladder cancer treated?",
    answer: "Bladder Cancer Treatment in Hyderabad involves surgery, immunotherapy, and radiation. Advanced medical techniques help preserve bladder function and significantly improve long-term treatment success for patients."
  },
  {
    question: "Can eye cancer be treated using radiation?",
    answer: "Yes, Eye Cancer Treatment in Hyderabad uses Proton Therapy and targeted radiation techniques to treat tumors effectively. These advanced methods help preserve vision and reduce damage to surrounding eye structures."
  },
  {
    question: "Where can I find an experienced oncologist in Secunderabad?",
    answer: "You can consult Dr. Vijay Anand Reddy, the Best Oncologist in Secunderabad, who offers expert diagnosis and advanced treatments. His compassionate approach and use of modern cancer technologies ensure safe and effective care."
  },
  {
    question: "Who is the leading oncologist in India for complex cancer cases?",
    answer: "Dr. Vijay Anand Reddy, regarded as the Best Oncologist in India, is known for his expertise in Proton Therapy, Brachytherapy, and advanced radiation oncology. He provides comprehensive, evidence-based cancer care to patients across India."
  }
];


const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (

    <>
    <Header/>
      <div className="min-h-screen mt-16 bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="w-full pt-28 pb-10 bg-medical-blue/10 text-center shadow-sm mb-12">
        <h1 className="text-5xl font-extrabold text-medical-dark mb-4">Frequently Asked Questions</h1>
        <p className="text-medical-blue text-lg font-medium max-w-xl mx-auto">
          Answers to common questions related to our website, services, and policies.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg px-4 sm:px-8 py-8">
        {faqData.map((faq, idx) => (
          <div key={faq.question} className="border-b border-blue-50">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center py-6 px-2 text-left focus:outline-none"
              aria-expanded={openIdx === idx}
              aria-controls={`faq-${idx}`}
            >
              <span className="font-semibold text-medical-blue text-lg">{faq.question}</span>
              <FiChevronDown
                className={`w-6 h-6 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
              />
            </button>
            {openIdx === idx && (
              <div id={`faq-${idx}`} className="pb-6 px-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default FAQPage;

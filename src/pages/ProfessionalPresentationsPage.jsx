import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiCalendar, FiMic } from "react-icons/fi";

const presentations = [


  {
    title: "Invited as a Moderator for the Session on “Head & Neck”",
    event: "XXII Annual TMC Radiotherapy Practicum & 1st TMC – IBA Proton Therapy Practicum conference, Mumbai",
    date: "September 12-13, 2025",
  },
  {
    title: "Invited as a Guest Faculty for the Gunilla C Bentel Oration on “The Meaning of Life is to give Life a Meaning”",
    event: "ARTTICON 2025 conference, Hyderabad",
    date: "September 12-14, 2025",
  },
  {
    title: "Invited as a Moderator for the Session on “My Most Difficult Case”",
    event: "4th Edition of EyeCAN Conference, Hyderabad",
    date: "July 27, 2025",
  },
  {
    title: "Invited as a Presenter for the Session on “Retinoblastoma Multidiscipline team meeting (RB MDT)”",
    event: "ISOO Virtual 2025 – Virtual meeting",
    date: "July 26, 2025",
  },
  {
    title: "Invited as a Chairperson for the Session on “Academic Session – Head & Neck”",
    event: "Best of ASCO India 2025 conference, Chandigarh",
    date: "June 27-29, 2025",
  },
  {
    title: "Invited as an Expert Panel for the Session on “Leveraging the Role of Immunotherapy in Resectable Locally Advanced Head and Neck Squamous Cell Cancers”",
    event: "MSD Group Input meeting, Mumbai",
    date: "June 14, 2025",
  },
  {
    title: "Invited as a Chairperson for the Session on “Therapeutic Monitoring”",
    event: "Precision Oncology Leadership Summit (POLeS) 2025 conference, Mumbai",
    date: "April 5-6, 2025",
  },
  {
    title: "Invited as a Chairperson for the Session on “Cases 8: Orbital Tumors”",
    event: "International Society of Ocular Oncology (ISOO) 2024, Goa",
    date: "December 3-7, 2024",
  },
  {
    title: "Invited as an Orator for the Session on “Orations 3, Keynote Lecture and ISOO 2024 Orations”",
    event: "International Society of Ocular Oncology (ISOO) 2024, Goa",
    date: "December 3-7, 2024",
  },
  {
    title: "Invited as an Expert Panelist for the Session on “Cases 6 : Ocular Surface Tumors”",
    event: "International Society of Ocular Oncology (ISOO) 2024, Goa",
    date: "December 3-7, 2024",
  },
  {
    title: "Invited as an Expert Panelist for the Session on “Papers 10 Retinoblastoma 5”",
    event: "International Society of Ocular Oncology (ISOO) 2024, Goa",
    date: "December 3-7, 2024",
  },
  {
    title: "Invited as a Chairperson for the YROC Session for panel discussion on “Next-Gen Sequencing and precision Oncology: Perceptions and Barriers”",
    event: "AROICON 2024, Mangaluru",
    date: "November 28 – December 1, 2024",
  },
  {
    title: "Invited as a Chairperson for the Key Note 2 address on “Probabilistic radiotherapy planning: from Black and White to the Fifty shades of Grey”",
    event: "AROICON 2024, Mangaluru",
    date: "November 28 – December 1, 2024",
  },
  {
    title: "Invited as a Chairperson for the Session on “Uro Oncology”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as a Panelist for the Session on “Uro Oncology”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as a Chairperson for the Panel discussion on “Systemic therapy in HCC : myths and facts”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as a Chairperson for the Session on “Precision Radiotherapy & Palliative Care”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as Expert comments for the Topic on “Expert comments and applicability of Precision oncology care in Indian setting”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as a Chairperson for the Session on “Precision Oncology”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as a Moderator for Debate for the Session on “Proton for all”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as Lead Discussant for the Session on “Meet the Professor Session”",
    event: "Apollo Cancer Conclave 2024, Mumbai",
    date: "November 8-10, 2024",
  },
  {
    title: "Invited as a Chairperson for the Session on “Sarcomas”",
    event: "13th National Conference on Teenage and Young Adult Cancer (TYACAN) 2024, Hyderabad",
    date: "September 21-22, 2024",
  },
  {
    title: "Invited as a Moderator for the Topic on “Guidelines in Management of Prostate Cancer”",
    event: "Therapeutics in Management of Prostate Cancer – Cipla Oncology Webinar – Virtual meeting",
    date: "August 29, 2024",
  },
  {
    title: "Invited as a Guest Faculty for the Topic on “Role of Oncologist in Eyelid and Orbital Tumors”",
    event: "Cutting Edge 2024, Hyderabad",
    date: "July 27-28, 2024",
  },
  {
    title: "Invited as a Guest Faculty for the Topic on “Is Intravenous Chemotherapy still relevant in Retinoblastoma”",
    event: "International Symposium on “What is new in Retinoblastoma in 2024?”, Hyderabad",
    date: "May 12, 2024",
  },
  {
    title: "Invited as a Chairperson for the Topic on “Proton therapy for other Pediatric Malignant Brain Tumors”",
    event: "4th Apollo Annual Proton Practicum, Chennai",
    date: "May 10-12, 2024",
  },
  {
    title: "Invited as a Judge for the Session on “RadioTherapy Finals”",
    event: "50th Indian Cooperative Oncology Network (ICON) Conference, Hyderabad",
    date: "March 15-17, 2024",
  },
  {
    title: "Invited as a Guest Faculty for the Topic on “Lung Cancer: Signs & Symptoms, Risk Factors, Management and Patient Perspectives”",
    event: "CME on Lung Cancer Awareness – Virtual meeting",
    date: "February 16, 2024",
  },
  {
    title: "Invited as a Guest Faculty for the Topic on “Chemotherapy and Radiotherapy in Orbital Disorders”",
    event: "iFocus Oculoplasty module, Hyderabad – Virtual meeting",
    date: "February 14, 2024",
  },
  {
    title: "Invited as an Expert Panelist and Discussant for the Session on “Eyelid and Ocular Surface Tumors”",
    event: "ISOO 2024 – Virtual Conference",
    date: "January 6-7, 2024",
  },
  {
    title: "Invited as a Moderator for the Session on “Upper GI”",
    event: "3rd Indian Cancer Congress 2023, Mumbai",
    date: "November 2-5, 2023",
  },
  {
    title: "Invited as a Chairperson for the Session on “Sarcoma 2 (ICC Keynote – 21)”",
    event: "3rd Indian Cancer Congress 2023, Mumbai",
    date: "November 2-5, 2023",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Radiotherapy, Chemotherapy and Target Therapy in Ocular Surface, Eyelid, Intraocular and Orbital Tumors”",
    event: "33rd Annual Conference of the Oculoplastics Association of India (OPAI), Hyderabad",
    date: "October 20-22, 2023",
  },
  {
    title: "Invited as a Chairperson for the Session on “CNS”",
    event: "Best of ASCO India 2023 Conference, Pune",
    date: "June 23-25, 2023",
  },
  {
    title: "Invited as an Abstract Presenter for the Abstract Topic on “Prostate Irradiation in men with de novo, low-volume, metastatic, castration, - sensitive prostate cancer (mCSPC)”",
    event: "Best of ASCO India 2023 Conference, Pune",
    date: "June 23-25, 2023",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Essentials of Radiotherapy and Chemotherapy for an Ophthalmologist”",
    event: "iFocus Online Webinar, Hyderabad – Virtual meeting",
    date: "June 2, 2023",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Therapeutic Wonders in Oncology”",
    event: "CME in Apollo Knowledge Series, Hanumakonda",
    date: "April 19, 2023",
  },
  {
    title: "Invited as a Chairperson for the Session on “Early Breast Cancer”",
    event: "AROICON 2022 Conference, New Delhi",
    date: "December 1-4, 2022",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Radiotherapy in Breast Cancer in 2022”",
    event: "ONCOLOGY 2022, Kottayam",
    date: "October 14-16, 2022",
  },
  {
    title: "Invited as a Panelist for the Panel Discussion on “Optimizing the Treatment Sequencing in HER2-ve Early Breast Cancer”",
    event: "Perspective, Evolution & Advances in HER2 Negative BRCA Mutated Breast Cancer Conference, New Delhi",
    date: "June 10, 2022",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Orbital and Metastatic Retinoblastoma – Is there hope in 2022?”",
    event: "AIOS Retinoblastoma International Symposium 2022 – Virtual meeting",
    date: "May 7, 2022",
  },
  {
    title: "Invited as a Chairperson for the topic on “Seed Implant in Carcinoma Prostate: Indian Scenario”",
    event: "RADONC Conclave – Prostate Cancer (National meet) – Virtual meeting",
    date: "February 26, 2022",
  },
  {
    title: "Invited as a Chairperson for the Mylan Advisory Board meeting “Role of Bevacizumab in GBM (Glioblastoma Multiforme)”",
    event: "Mylan Advisory Board Meeting",
    date: "February 10, 2022",
  },
  {
    title: "Invited as a Guest Faculty for the CME on “New Developments in the Field of Cancer”",
    event: "CME on Apollo Knowledge Series – Virtual meeting",
    date: "February 4, 2022",
  },
  {
    title: "Invited as a Chairperson for the Session on “ISMPO ESMO Lung Symposium”",
    event: "Indian Society of Medical and Pediatric Oncology (ISMPO) – Virtual meeting",
    date: "January 28, 2022",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Radiation Therapy for Cancer Oropharynx”",
    event: "National Webinar Series – MasterClass on Head and Neck Cancer – Virtual meeting",
    date: "January 26, 2022",
  },
  {
    title: "Invited as a Panelist for the Panel Discussion on “Update on Management of Medulloblastoma”",
    event: "24th Annual Pediatric Hematology-Oncology Conference (PHOCON – 2021) – Virtual meeting",
    date: "December 10-11, 2021",
  },
  {
    title: "Invited as a Chairperson for the Session on “Expanding the Field of Precision Immune Oncology”",
    event: "Virtual Conference",
    date: "August 27-28, 2021",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Freedom from Cancer – Proton therapy, Tomotherapy & True Beam”",
    event: "Apollo’s Facebook Live Session – Virtual meeting",
    date: "August 20, 2021",
  },
  {
    title: "Invited as a Chairperson for the Panel discussion on “Challenges in Management of mCSPC”",
    event: "All India Connect – Virtual meeting",
    date: "August 14, 2021",
  },
  {
    title: "Invited as a Guest Faculty & Chairperson for the Session on “Ocular Oncology - What is New?” for the topic on “Cutting Edge Radiotherapy Techniques in Ocular Oncology”",
    event: "Vision 2021 – 6th Annual meeting of the Telangana Ophthalmological Society – Virtual conference",
    date: "August 7-8, 2021",
  },
  {
    title: "Invited as a Panelist for the Panel discussion on “Case Based panel discussion on navigating treatment pathways in recurrent metastatic Head & Neck Cancer”",
    event: "Multi-disciplinary Symposium on Head & Neck Cancer – Virtual meeting organized by Bengal Oncology Foundation",
    date: "August 7-8, 2021",
  },
  {
    title: "Invited as a Chairperson for the Panel discussion on “Case Based Discussion – Optimal Management of ES - SCLC”",
    event: "AstraZeneca Session in 4th Masterclass in Lung Cancer – Virtual meeting",
    date: "August 6, 2021",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Role of PSMA in Prostate Cancer - Imaging to Treatment”",
    event: "RADONC Conclave – Prostate Cancer National meet – Virtual conference",
    date: "July 30, 2021",
  },
  {
    title: "Invited as a Medical Expert for the “Case discussion on Medico Legal Scenario”",
    event: "Medico Legal Webinar Series organized by Cipla Oncology – Virtual Conference",
    date: "June 11, 2021",
  },
  {
    title: "Invited as a Panelist for the “Case based Panel Discussion”",
    event: "LDRT Webinar Topic - Immunomodulatory Low Dose Lung Radiation for Patients with Covid 19 Pneumonia – Virtual meeting",
    date: "May 22, 2021",
  },
  {
    title: "Invited as a Chairperson for the topic on “Clinical Rationale, Evidence, Dosimetry & Potential of Proton Beam therapy”",
    event: "1st Apollo Proton Practicum – Virtual Conference",
    date: "May 15-16, 2021",
  },
  {
    title: "Invited as a Panelist for a Member of Panel for 4 case Presentations",
    event: "Retinoblastoma Today – A Global Perspective Conference – Virtual meeting, Hyderabad",
    date: "May 2, 2021",
  },
  {
    title: "Invited as a Chairperson for the topic on “Metastatic Prostate Cancer”",
    event: "Apollo Prostate Cancer Update: High Risk and Low Volume Metastatic Disease – Virtual meeting",
    date: "April 30, 2021",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “New Innovations in Radiation therapy for Lung Cancer”",
    event: "2nd Mid-term ISCOCON – Virtual conference",
    date: "April 3-4, 2021",
  },
  {
    title: "Invited as a Guest Faculty for the topic on “Role of Optimal RT delivery in Stage III NSCLC”",
    event: "Webinar on Lung Cancer Conclave – Virtual conference",
    date: "March 27, 2021",
  },
  {
    title: "Invited as a Panelist for the Pentagon Panel Discussion on “5 Pillars of MDT in early Lung Cancer”",
    event: "ICON – Indian cooperative Oncology Network – Virtual meeting",
    date: "March 13, 2021",
  },

  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"COVID Vaccine for Cancer Patients - Consensus of Indian Doctors\"",
    event: "Webinar",
    date: "February 19, 2021",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Optical Management of ES-SCLC - Case based Discussion\"",
    event: "Immunotherapy Combination Approaches for Metastatic Non-Small Cell Lung Cancer virtual meeting",
    date: "February 11, 2021",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Around Covid-19 & Moving beyond Covid-19\"",
    event: "Addressing Cancer Care barriers in India, a Clinicians perspective: Roche Pharma India virtual meeting",
    date: "February 10, 2021",
  },
  {
    title:
      "Invited as a Guest Faculty for Dr. LH Hiranandani Oration on \"Transoral Robotic Surgery: From Inception to Standard of Care in 15 years\"",
    event: "Foundation for Head & Neck Oncology (FHNO) virtual meeting",
    date: "December 12, 2020",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Case Based Discussion - Management of Stage III NSCLC Patients with Newer Advances\"",
    event: "4th Multidisciplinary Lung Cancer Management Course virtual meeting",
    date: "December 6, 2020",
  },
  {
    title:
      "Invited as a Chairperson for the Topics on \"Actual Algorithm in Advanced Metastatic Adenocarcinoma Pancreas & Can we maximize management of Locally Advanced Pancreatic Adenocarcinoma\"",
    event: "Indian Gastrointestinal Cancers Symposium 2020 virtual meeting",
    date: "August 28, 2020",
  },
  {
    title:
      "Invited as a Chairperson for the Theme on \"Science of Today - Hope for Tomorrow\"",
    event: "Best of ASTRO India virtual meeting",
    date: "August August, 15",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Practical Consensus GI Oncology Guidelines - Aspects Critical for Asia\"",
    event: "Oncology Chakravyuh GI Cancers virtual meeting",
    date: "July 24, 2020",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Breast\"",
    event: "Best of ASCO India 2020 virtual meeting",
    date: "June 25, 2020",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"New Interventions in Head & Neck Cancers\"",
    event: "3rd Annual Review",
    date: "June 20, 2020",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Lung\"",
    event: "Webinar",
    date: "May 28, 2020",
  },
  {
    title:
      "Invited as a Chairperson for the Webinar on Recent Advances in Advanced NSCLC and Melanoma Management virtual meeting on May 26, 2020",
    event: "",
    date: "May 26, 2020",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Multidisciplinary approach in the Management of Locally advanced Stage III - NSCLC\"",
    event: "41st AROICON - 2019, Ahmedabad",
    date: "November 28, 2019",
  },
  {
    title:
      "Invited as a Judge for the Session on \"Neurological Debate\"",
    event: "41st AROICON - 2019, Ahmedabad",
    date: "November 28, 2019",
  },
  {
    title:
      "Invited as an Orator for \"Prof. BD Gupta Oration\"",
    event: "41st AROICON - 2019, Ahmedabad",
    date: "November 28, 2019",
  },
  {
    title:
      "Invited as a Chairperson for the topic on \"Changing Landscapes in Management of GI & HPB Malignancies\"",
    event: "Gastro ONCOCON - 2019, Visakhapatnam",
    date: "November 24, 2019",
  },
  {
    title:
      "\"Role of RT in the management of Locally Advanced GE Junction Cancers\"",
    event: "Gastro ONCOCON - 2019, Visakhapatnam",
    date: "November 24, 2019",
  },
  {
    title:
      "Invited as a Participant for \"H&N DMG Guideline Group\"",
    event: "NCG Academic meeting, Tata Memorial Hospital, Mumbai",
    date: "September September, 26",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Panel Discussion\"",
    event: "Gastronomy - 2019, Hyderabad",
    date: "September 7, 2019",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Key Publications on Specific Adjuvant / Neoadjuvant therapies\"",
    event: "2nd Annual Review",
    date: "August August, 10",
  },
  {
    title:
      "Invited for Boehringer Ingelheim India Pvt. Ltd. Advisory Board meeting on \"Real World Data in Clinical Practice with reference to RealGido Study and Role of Afatinib in appropriate sequencing of TKIs is the management of Advanced Metastatic Lung Cancer\"",
    event: "Hotel Taj Deccan, Hyderabad",
    date: "August 3, 2019",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Localized & Locally Advanced Prostate Cancer\"",
    event: "2nd Comprehensive Update in the Management of Genito-Urinary Malignancies, \"Wisdom of Waves\", Tata, Mumbai",
    date: "July 20, 2019",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Muscle Invasive Bladder Cancer\"",
    event: "2nd Comprehensive Update in the Management of Genito-Urinary Malignancies, \"Wisdom of Waves\", Tata, Mumbai",
    date: "July 20, 2019",
  },
  {
    title:
      "Invited as a Chairperson for the Topic & Panel Discussion on \"Impact of modern Proton beam therapy in improving survival and survivorship\"",
    event: "Twin Cities Oncology CME Meet - \"Proton therapy in Clinical Practice\", Hyderabad",
    date: "July 6, 2019",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Sarcoma\"",
    event: "Best of ASCO India - 2019, Mumbai",
    date: "June 28, 2019",
  },
  {
    title:
      "Invited for an Expert advice",
    event: "Optimizing Supportive Care in Oncology (OSCO), Organized by Dr. Reddy's Laboratories Ltd., Hyderabad",
    date: "May 23, 2019",
  },
  {
    title:
      "\"Proton Beam therapy\"",
    event: "5th Mid Term Conference of Oculoplastic Association of India (OPAI), Chennai",
    date: "April 28, 2019",
  },
  {
    title:
      "\"SRS vs WBRT in Brain Metastasis\"",
    event: "11th Annual Conference of ISNOCON - 2019, Bhopal",
    date: "April 4, 2019",
  },
  {
    title:
      "Invited as a Panelist for \"At what stage should we consider CGP?\"",
    event: "Roche Initiated Medical Education Program, Hyderabad",
    date: "April 4, 2019",
  },
  {
    title:
      "Invited as a Panelist for \"Panel Discussion: Management Strategies in Inoperable Stage III Disease\" Session on \"Stage III Disease: Complexities and Underpinnings\"",
    event: "RGCON - 2019, New Delhi",
    date: "February 8, 2019",
  },
  {
    title:
      "Invited for Mylan Advisory meeting on \"Ovarian Cancer & Bevacizumab\"",
    event: "Apollo Cancer Conclave - 2019, Chennai",
    date: "January 25, 2019",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Breast Oncology\"",
    event: "Apollo Cancer Conclave - 2019, Chennai",
    date: "January 25, 2019",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Breast Oncology\"",
    event: "Apollo Cancer Conclave - 2019, Chennai",
    date: "January 25, 2019",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Thoracic Oncology\"",
    event: "Apollo Cancer Conclave - 2019, Chennai",
    date: "January 25, 2019",
  },
  {
    title:
      "Moderator for the Session on \"East Meets West - Learning from Each other\"",
    event: "Apollo Cancer Conclave - 2019, Chennai",
    date: "January 25, 2019",
  },
  {
    title:
      "Moderator for the Session on \"High Tech RT\"",
    event: "Apollo Cancer Conclave - 2019, Chennai",
    date: "January 25, 2019",
  },
  {
    title:
      "\"HIV-An Oncopartner\"",
    event: "XXII IAMM TAPC Annual Conference - 2019, Hyderabad",
    date: "January 19, 2019",
  },
  {
    title:
      "Invited as a Chairperson for \"CME on Breast Cancer\"",
    event: "Twin Cities Oncology meeting organized by Pfizer Oncology, Hyderabad",
    date: "December 14, 2018",
  },
  {
    title:
      "Invited as a Chairperson for an Industry Symposium \"Redefining the Management of locally Advanced Head & Neck Cancer\"",
    event: "AROICON - 2018, Trivandrum",
    date: "November 29, 2018",
  },
  {
    title:
      "\"Role of Brachytherapy in Orbital tumours\"",
    event: "AROICON - 2018, Trivandrum",
    date: "November 29, 2018",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"ISMPO-ESMO Joint Symposium - Cost benefit Analysis in Emerging Economic Regions\"",
    event: "ISMPOCON - 2018, Jaipur",
    date: "November 16, 2018",
  },
  {
    title:
      "Invited as a Chairperson",
    event: "1st International Proton Therapy Educational Program, Chennai",
    date: "November 2, 2018",
  },
  {
    title:
      "\"Innovations in the Management of Ophthalmic Tumors\"",
    event: "UPAROICON - 2018, Varanasi",
    date: "October 13, 2018",
  },
  {
    title:
      "\"Clinical Session: Stereotactic Radiotherapy for Brain Metastasis\"",
    event: "ESTRO School - AROI Teaching Course, Rajahmundry",
    date: "October 7, 2018",
  },
  {
    title:
      "\"Management of Orbital tumors\"",
    event: "Oncology - 2018, Cochin",
    date: "September 28, 2018",
  },
  {
    title:
      "\"Retinoblastoma-They Live and See - Recent trends in the management of",
    event: "",
    date: "",
  },
  {
    title:
      "Retinoblastoma\"",
    event: "3rd Annual FARO Meeting, Jakarta, Indonesia",
    date: "September September, 6",
  },
  {
    title:
      "\"Management of Malignant Lacrimal Gland tumors\"",
    event: "EYECAN - 2018, LV Prasad Eye Inst., Hyderabad",
    date: "September 2, 2018",
  },
  {
    title:
      "\"Key Note Address: What new can I offer to an ocular oncologist in 2018 - Paradigm changes in radiotherapy and target therapy\"",
    event: "Oculoplasty Sessions for BOA Focus 2018, Mumbai",
    date: "August 25, 2018",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Management of Laryngopharyngeal Cancer\"",
    event: "8th ENT Conclave, Hyderabad",
    date: "August 18, 2018",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Radiation Oncology Ecosystem for T2-T3 Centres and Beyond\"",
    event: "Varian Oncology Summit, New Delhi",
    date: "August 3, 2018",
  },
  {
    title:
      "\"Journey from Radiotherapy to Radiation Oncology - AROI Perspective\"",
    event: "Varian Oncology Summit, New Delhi",
    date: "August 3, 2018",
  },
  {
    title:
      "Invited as a Chairperson for \"Abstracts in Head & Neck Cancer\"",
    event: "Best of ASCO, New Delhi",
    date: "July 28, 2018",
  },
  {
    title:
      "Invited as a Chairperson for \"Recent Advances in Breast Cancer as discussed during ASCO - 2018\" for the Session on \"HER 2-ve Breast Cancer & HER 2+ve Breast Cancer\"",
    event: "‘Smile Stone' meeting organized by Dr. Reddy's Laboratories Ltd., Hyderabad",
    date: "July 19, 2018",
  },
  {
    title:
      "\"Liver SBRT - The Indian Perspective and Experience\"",
    event: "Controversies in Clinical Oncology, Kolkata. Org. by Tata Medical Centre, Kolkata",
    date: "July 6, 2018",
  },
  {
    title:
      "\"Imaging and Contouring Demonstration\"",
    event: "AROI-ICRO SUN PG Teaching Program, Hyderabad",
    date: "June 23, 2018",
  },
  {
    title:
      "Invited as a Chairperson for \"Expert Group meeting in MBC (Tokyo)\"",
    event: "Kyoto Breast Cancer Consensus Conference, Kyoto, Japan",
    date: "May 17, 2018",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Genito-Urinary\"",
    event: "Best of ASTRO India - 2018, New Delhi",
    date: "May 5, 2018",
  },
  {
    title:
      "Moderator for the Debate on \"IMC irradiation in high risk group disease (pN1 or pN0 with intermediate risk disease): Do we really need it?\"",
    event: "22nd Annual Conference",
    date: "March 9, 2018",
  },
  {
    title:
      "\"Advancement of Radiotherapy in Breast Cancer - An Overview\"",
    event: "22nd Annual Conference",
    date: "March 9, 2018",
  },
  {
    title:
      "\"Recent Advances in Gynae-Onco\" CME on Breast Diseases and Oncoplastic Surgery, organized by Apollo Cancer Institute in association with OGSH, Hyderabad on February 28, 2018",
    event: "",
    date: "February 28, 2018",
  },
  {
    title:
      "\"What is current Role of RT in Management of RB\"",
    event: "Evidence Based Management of Caners in India, EBM 2018, Mumbai",
    date: "February 23, 2018",
  },
  {
    title:
      "Invited as a Chairperson for \"Dr. Gangadhara Rao memorial Oration\"",
    event: "AP AROICON - 2018, SVIMS, Tirupati",
    date: "February 10, 2018",
  },
  {
    title:
      "\"Clinical Session: Stereotactic Radiotherapy for Brain metastases\"",
    event: "ESTRO School - AROI Teaching Course 2017, Medanta The Medicity, Gurugram",
    date: "December 3, 2017",
  },
  {
    title:
      "\"Pediatric Tumors - Radiation in Orbital Tumors\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Speaker \"FOR\" the Debate in \"RT is treatment of choice for Organ Confined Prostate Cancer\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the DR. K. A. DINSHAW - AROI ORATION on \"Global issues in Radiation therapy and disparities in Cervical Cancer treatment\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the FARO Session on \"Advanced Technology\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for \"Rangiprasad Oration\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Panelist for the \"Marrying Muse and Medicine\" Session on \"Fiction Creative Writers - Medical Writers Forum\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Panelist for the Session on \"Are all Apples the same?\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Bio-similars: Importance of Process and Quantity\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for P.K. Haldar Oration",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the \"Crystal Ball of Gastric Cancer (Shaping a new Paradigm in the management of Advanced Gastric Cancer)\" by Eli Lilly Oncology",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for ICC Oration \"Failures, Success & Hope in Head and Neck Cancer\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Psycho-oncology Symposium: Quality of Life issues in Cancer\"",
    event: "2nd Indian Cancer Congress, Bangalore",
    date: "November 8, 2017",
  },
  {
    title:
      "Invited as a Speaker \"FOR\" the Debate in \"Uterine Cancer Session\", \"Optimum Adjuvant treatment in Advanced Endometrial Cancer\"",
    event: "25th Annual Conference of Association of Gynecologic Oncologists of India (AGOI) & 15th Annual Conference of Women's Cancer Initiative - Tata Memorial Hospital (WCI-TMH), Mumbai",
    date: "October 27, 2017",
  },
  {
    title:
      "Invited as a Panelist for the \"Management of Neck Session\"",
    event: "FHNO - 2017, Mumbai",
    date: "September 15, 2017",
  },
  {
    title:
      "Invited as a Panelist for the \"Gynecological Session\"",
    event: "Best of ASCO - 2017, Chandigarh",
    date: "July 14, 2017",
  },
  {
    title:
      "Invited as a Panelist for the \"Lung Session\"",
    event: "Best of ASCO - 2017, Chandigarh",
    date: "July 14, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the Panel discussion on \"Opening the Lid for Bevacizumab in Gynecological Malignancies\" CME Organized by Intas Oncology, Hyderabad on July 12, 2017",
    event: "",
    date: "July 12, 2017",
  },
  {
    title:
      "Invited as a Chairperson for the Session on \"Expert talk in NSCLC\" CME Organized by Novartis Oncology, Hyderabad on June 13, 2017",
    event: "",
    date: "June 13, 2017",
  },
  {
    title:
      "\"Radiotherapy in Retinoblastoma\"",
    event: "Retinoblastoma Networking Workshop, LVPEI, Hyderabad",
    date: "June 10, 2017",
  },
  {
    title:
      "\"Breast\"",
    event: "Best of ASTRO - 2017, Vizag",
    date: "May May, 13",
  },
  {
    title:
      "\"Bilateral Breast using TomoTherapy\"",
    event: "Accuray User's Meeting, Bangalore",
    date: "April April, 22",
  },
  {
    title:
      "\"Re-irradiation - When and how to?\" Session on \"Novel therapies - Part III - Molecular Neuro-Oncology - Resistance and re-treatment\"",
    event: "9th annual Conference of Indian Society of Neuro-Oncology (ISNOCON - 2017), Bangalore",
    date: "January 10, 2017",
  },
  {
    title:
      "\"Crossfire: Surgery vs Radiotherapy for high risk early Prostate Cancer\"",
    event: "First Prostate Cancer Symposium - PRiSM 2016 organized by Dr. Reddy's Laboratories Ltd., Hyderabad",
    date: "December 17, 2016",
  },
  {
    title:
      "\"Optimal treatment for oligo brain metastasis: Role of SRS\" Session on \"CNS - Debate (Debator - 1 in favour of SRS)\"",
    event: "39th AROICON - 2016, Bhubaneshwar",
    date: "November 24, 2016",
  },
  {
    title:
      "\"Plaque Brachytherapy for Ocular Tumor\" Session on \"Paediatrics Oncology\"",
    event: "39th AROICON - 2016, Bhubaneshwar",
    date: "November 24, 2016",
  },
  {
    title:
      "\"Ocular Brachytherapy\"",
    event: "AROICON - 2016, TN-PY Chapter, Chennai",
    date: "October October, 15",
  },
  {
    title:
      "\"Cancer Management - Paradigm Shift\"",
    event: "Recent Advances in Surgical Procedures, Dubai - UAE",
    date: "September 30, 2016",
  },
  {
    title:
      "\"Organ Preservation Protocols - our experience\"",
    event: "FHNO South-East Zonal CME",
    date: "September 3, 2016",
  },
  {
    title:
      "\"Brachytherapy in Ophthalmic Tumors\"",
    event: "6th Annual Conference of IBSCON - 2016, Hyatt Regency, Chennai",
    date: "August August, 27",
  },
  {
    title:
      "\"Radiotherapy in Elderly Breast Cancer\" Session on \"Breast Cancer in Elderly: Coming of Age\"",
    event: "Navigating Clinical Conundrums in Breast Cancer, Mumbai",
    date: "August August, 20",
  },
  {
    title:
      "\"Overall Scenario of Cancer in India & Prevention & Cure\" Session on \"Cancer Prevention & A Healthy Lifestyle\"",
    event: "CII Young Indians, Hyderabad",
    date: "July 28, 2016",
  },
  {
    title:
      "Invited as a Perspective for \"Hard Talk - Perspective in adopting new data\" Session on \"Irradiating the axilla- Why exchange one toxicity for another especially when prognostication is at stake?\"",
    event: "Controversies in Clinical Oncology, TMH, Kolkata",
    date: "July 22, 2016",
  },
  {
    title:
      "\"New Technology - Does it have an impact in the management of Gynaec Cancers - Cost vs benefit\"",
    event: "CME",
    date: "July 16, 2016",
  },
  {
    title:
      "Invited as a Panelist for the Panel discussion on \"Case Based Discussion in Rare Solid Tumors\"",
    event: "3rd Mid Term National Conference of Pediatric Hematology Oncology, Hyderabad",
    date: "July July, 9",
  },
  {
    title:
      "\"Role of Radiation Oncologist in the Management of Ophthalmic Tumors\",",
    event: "EYE CANcer - 2016, LVPEI, Hyderabad",
    date: "July 9, 2016",
  },
  {
    title:
      "Moderator for the Panel Discussion on \"Lung Cancer - Non-small Cell / Small Cell / Other\"",
    event: "Best of ASCO - 2016, HICC, Hyderabad",
    date: "July July, 1",
  },
  {
    title:
      "Moderator for the Session on \"Each Expert Group Propose Recommendations\"",
    event: "CME",
    date: "June 18, 2016",
  },
  {
    title:
      "\"Cancer Management - A Paradigm Shift\", CME Program on Post Thrombotic Syndrome and Varicose Vein Ulcer Management organized by Apollo Hospitals, Hyderabad in association with IMA, East",
    event: "Hyderabad",
    date: "April 24, 2016",
  },
  {
    title:
      "Moderator for the Panel Discussion \"Decision Making for Adjuvant Radiation\" Session on \"Breast Cancer 1: Early Breast Cancer\"",
    event: "12th International Conference of Asian Clinical Oncology Society (ACOS), New Delhi",
    date: "April 8, 2016",
  },
  {
    title:
      "Invited as a Chairperson for \"Direction of Current Neuro-oncology Research\"",
    event: "ISNOCON - 2016, Hyderabad",
    date: "April 1, 2016",
  },
  {
    title:
      "Invited as a Panelist for the ‘Head and Neck Cancer' Session on \"Therapeutic Decision Making in Borderline and locally advanced HNSCC\"",
    event: "34th ICON (Joint Conference of Indian Cooperative Oncology Network and Molecular Oncology Society, Hyderabad",
    date: "March 11, 2016",
  },
  {
    title:
      "Invited as a Panelist for the Lunch Symposium on \"Challenges in delivery of chemoradiation in Lung Cancer\"",
    event: "34th ICON (Joint Conference of Indian Cooperative Oncology Network and Molecular Oncology Society, Hyderabad",
    date: "March 11, 2016",
  },
  {
    title:
      "\"Did the higher accuracy in treatment delivery translate into noticeable Clinical Improvements?\"",
    event: "AROI - West Bengal Annual State Conference, Kolkata",
    date: "February February, 20",
  },
  {
    title:
      "\"Cancer Management - Paradigm Shift\"",
    event: "Indian Medical Association (IMA) CME, Hyderabad",
    date: "February 13, 2016",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Nanotechnology based Paclitaxel in Clinical Practice\"",
    event: "SUN Oncology BEVETEX Symposium, Hyderabad",
    date: "January 2, 2016",
  },
  {
    title:
      "\"Cancer Management - Paradigm Shift\"",
    event: "Apollo - NATA International CME, Hyderabad",
    date: "December 27, 2015",
  },
  {
    title:
      "\"IMRT & IGRT for Pelvic Abdomen Cancer: IMRT & IGRT in the treatment of Prostate Cancer and the role of Hypofractionation\"",
    event: "ESTRO-AROI Teaching Course, Max Hospital, New Delhi",
    date: "December December, 6",
  },
  {
    title:
      "\"Debate - The house believes that Elective Paraaotic Lymph Node Radiotherapy is warranted in Pelvic Node Positive Cancer Cervix?\"",
    event: "AROICON 2015, Lucknow",
    date: "November 26, 2014",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Advanced / Metastatic Head & Neck Squamous Cell Carcinoma. Indian Problem - Searching for Solutions\"",
    event: "Joint ISMPO ISO Conference, Mumbai",
    date: "November November, 6",
  },
  {
    title:
      "Invited as a Panelist for the Consensus Panel on \"The Gulmarg Declaration\"",
    event: "The Gulmarg Declaration, Gulmarg, Kashimir",
    date: "October 10, 2015",
  },
  {
    title:
      "Moderator for the Panel Discussion \"Standard radiotherapy techniques in LABC\"",
    event: "The Gulmarg Declaration, Gulmarg, Kashimir",
    date: "October 10, 2015",
  },
  {
    title:
      "\"What is new in Radiotherapy for the Tumors of the Eye and Adnexa\"",
    event: "Dakshin Nethra Oculoplasty and Oncology Program, Tirupati",
    date: "September September, 11",
  },
  {
    title:
      "\"Ocular Plaque Brachytherapy\"",
    event: "5th Annual Conference of Indian Brachytherapy Society - 2015 (IBSCON - 2015), Kolkata",
    date: "August August, 28",
  },
  {
    title:
      "\"Cancer - Can we get better results\"",
    event: "CME Program",
    date: "August 2, 2015",
  },
  {
    title:
      "\"Concept of Tumor Board & Advances in Radiation Oncology\"",
    event: "CME Program",
    date: "July 25, 2015",
  },
  {
    title:
      "\"Cancer - Can we get Better Results?\"",
    event: "CME Program",
    date: "July 24, 2015",
  },
  {
    title:
      "\"Malignant Orbital Tumors\"",
    event: "20th ICRO PG Teaching Course",
    date: "July July, 18",
  },
  {
    title:
      "\"Retinoblastoma\"",
    event: "20th ICRO PG Teaching Course",
    date: "July July, 18",
  },
  {
    title:
      "Invited as a Chairperson for \"Breast Molecular Oncology\"",
    event: "Best of ASCO - 2015, Hyderabad",
    date: "June June, 26",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Lung Cancer\"",
    event: "Best of ASCO - 2015, Hyderabad",
    date: "June June, 26",
  },
  {
    title:
      "Invited as a Panelist for R. Anuradha Memorial Oration \"Past, Present and Future of Cancer Care in India\"",
    event: "Pink Chain Cancer Conclave - 2015, New Delhi",
    date: "June 25, 2015",
  },
  {
    title:
      "\"Role of Chemo & Radiotherapy in Oral Cancer Management & Advances in Radiation Oncology\" at CME Program on Oral Cancers",
    event: "Sri Sai Dental College, Vikarabad",
    date: "June 19, 2015",
  },
  {
    title:
      "Invited as a Chairperson",
    event: "CME",
    date: "June 13, 2015",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Radiation Oncology Updates on early Breast Cancer\"",
    event: "3rd Edition of Update",
    date: "May 16, 2015",
  },
  {
    title:
      "\"Ophthalmic & Ocular tumors and its implications on Eye\"",
    event: "Ocular Implications of Systemic Diseases - Workshop, Hyderabad",
    date: "May 4, 2015",
  },
  {
    title:
      "\"Breast Cancer\"",
    event: "First Best of ASTRO, Mumbai",
    date: "May May, 2",
  },
  {
    title:
      "\"External Beam Radiation Therapy: Basic principles\"",
    event: "Ophthalmic Oncology: An Interactive Course, Mumbai",
    date: "March March, 28",
  },
  {
    title:
      "Invited as a Panelist for - IASO ABSI Session on \"Locally Advanced and Large Operable Breast Cancer (LABC and LOBC)\"",
    event: "ASICON - 2014, Mumbai",
    date: "December 29, 2014",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Management of Extremity Soft Tissue Sarcomas\"",
    event: "ASICON - 2014, Mumbai",
    date: "December 29, 2014",
  },
  {
    title:
      "\"Evolving role of Chemo & Radiation in Organ preservation in the Management of Oral Cancer\"",
    event: "1st Telangana State Dental Conference, Warangal",
    date: "December December, 12",
  },
  {
    title:
      "\"Adjuvant therapy in Resectable Lung Cancer - Viewpoint\"",
    event: "9th SFO, 2014 (International Conference of SAARC Federation of Oncologists), Gurgaon",
    date: "November November, 28",
  },
  {
    title:
      "\"Stage III-Overview of Lung Cancer Management\"",
    event: "AROICON - 2014, Imphal",
    date: "November November, 6",
  },
  {
    title:
      "\"Ocular Brachytherapy\"",
    event: "AROICON - 2014, Imphal",
    date: "November November, 6",
  },
  {
    title:
      "Invited as a Chairperson for Rangi Prasad Oration \"Redefining targets in the practice of Oncology - Indian Perspective\"",
    event: "AROICON - 2014, Imphal",
    date: "November November, 6",
  },
  {
    title:
      "Invited as a Chairperson",
    event: "AROI - ESTRO Teaching Course: Advanced Technologies, Chennai",
    date: "October October, 19",
  },
  {
    title:
      "Invited as a Chairperson for \"Current Concepts in Treatment of Breast Cancer\"",
    event: "Advances in Breast Cancer - 2014, Goa",
    date: "October October, 10",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Hypofractionated / APBI (IORT & Brachytherapy)\"",
    event: "Advances in Breast Cancer - 2014, Goa",
    date: "October October, 10",
  },
  {
    title:
      "\"What's New in Oncology\" CME organized in association with IMA & FOGSI, Mahabubnagar on October 8, 2014",
    event: "",
    date: "October 8, 2014",
  },
  {
    title:
      "\"Radiotherapy for tumors of the eye and adnexa\"",
    event: "Asia Pacific Society of Ophthalmic Oncology and Pathology (APSOPRS), New Delhi",
    date: "September 26, 2014",
  },
  {
    title:
      "\"Debate - Management of T3N+ Hypopharyngeal cancers - For Radical Chemo RT\"",
    event: "28th Annual National Conference of the Indian Association of Surgical Oncology - NATCON IASO 2014, Chennai",
    date: "September September, 18",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Locally advanced oral cancers\"",
    event: "28th Annual National Conference of the Indian Association of Surgical Oncology - NATCON IASO 2014, Chennai",
    date: "September September, 18",
  },
  {
    title:
      "Moderator for the Debate \"Our knowledge about SBRT, its biology, mechanism and its effects is still preliminary\"",
    event: "2nd \"Fortis Radiation Oncology Annual Conference",
    date: "August August, 30",
  },
  {
    title:
      "\"Spinal SBRT - Planning, contouring and outcomes\"",
    event: "2nd \"Fortis Radiation Oncology Annual Conference",
    date: "August August, 30",
  },
  {
    title:
      "\"Post RT effects & Role of Gynaecologists\" at CME on Gyn. Malignancies",
    event: "Apollo Cancer Hospital, Hyderabad",
    date: "August 5, 2014",
  },
  {
    title:
      "\"What dose of Radiotherapy is optimal - How much is too much?\"",
    event: "17th ICRO PG Teaching Course \"Treatment of Lung Cancer\", Kolkata",
    date: "July July, 12",
  },
  {
    title:
      "\"Paradigm Shift in Cancer Management\" CME",
    event: "Apollo Hospitals, Kurnool",
    date: "June 29, 2014",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Head & Neck Cancer\"",
    event: "Best of ASCO - 2014, Hyderabad",
    date: "June 27, 2014",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Lunch Symposium (Pfizer)\"",
    event: "Best of ASCO - 2014, Hyderabad",
    date: "June 27, 2014",
  },
  {
    title:
      "\"Stereotactic Radiosurgery - Quality of Life\"",
    event: "Indo-Global Healthcare Summit & Expo 2014: Otorhinolaryngology, Hyderabad",
    date: "June 20, 2014",
  },
  {
    title:
      "Moderator for the Panel Discussion \"Management of Oral Cancers\" Live Demo \"Technological Evolution in Radiotherapy for Oral Cancers\"",
    event: "IDA Continuing Dental Education Program, Hyderabad",
    date: "June 14, 2014",
  },
  {
    title:
      "\"Treatment of Retinoblastoma\"",
    event: "Retinoblastoma Awareness Week - 2014, Hyderabad",
    date: "May 14, 2014",
  },
  {
    title:
      "\"What is new in Cancer\" CME",
    event: "Bhilai",
    date: "May 10, 2014",
  },
  {
    title:
      "\"IMRT in Head & Neck Cancer\"",
    event: "16th ICRO PG Teaching Course \"Radiotherapy Planning",
    date: "April April, 26",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion in the GSK Symposium \"Updates in the therapy of metastatic colorectal carcinoma: Focus on Panitumumab\"",
    event: "30th ICON, Ahmedabad",
    date: "April 4, 2014",
  },
  {
    title:
      "\"Radiation for NSCLC: An underutilized modality in Locally Advanced NSCLC\"",
    event: "30th ICON, Ahmedabad",
    date: "April 4, 2014",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Head & Neck (HN II)\"",
    event: "Apollo Cancer Conclave - 2014, Chennai",
    date: "February 7, 2014",
  },
  {
    title:
      "Moderator for the Panel Discussion \"High Tech Radiation (RA III)\"",
    event: "Apollo Cancer Conclave - 2014, Chennai",
    date: "February 7, 2014",
  },
  {
    title:
      "Moderator for the Session \"Brain\"",
    event: "2nd Young Radiation Oncologist Conference (YROC), Visakhapatnam",
    date: "January January, 4",
  },
  {
    title:
      "\"What's new in Cancer\" CME",
    event: "Vizag Steel Plant Commemoration Day, Visakhapatnam",
    date: "December 27, 2013",
  },
  {
    title:
      "\"Paradigm Shift in Cancer Management\" CME",
    event: "Nanded",
    date: "December 7, 2013",
  },
  {
    title:
      "Invited as a Speaker \"Against\" the motion in \"Debate in Head and Neck session\", \"NACT and CCRT is better than concurrent CCRT in HNC\"",
    event: "1st Indian Cancer Congress, New Delhi",
    date: "November 21, 2013",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Case capsules on Laryngeal cancer\"",
    event: "1st Indian Cancer Congress, New Delhi",
    date: "November 21, 2013",
  },
  {
    title:
      "\"Dose escalation in locally advanced NSCLC : Biological & Technical aspects\"",
    event: "1st Indian Cancer Congress, New Delhi",
    date: "November 21, 2013",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Obesity, Diabetes and Cancer - The Unholy Nexus\" CME on \"Beneath and Beyond Sugar\" An evidence-based, pragmatic-approach to tackle the many facts of Diabetes and its complications, Hyderabad on November 10, 2013",
    event: "",
    date: "November 10, 2013",
  },
  {
    title:
      "Case Discussion on \"Nasopharyngeal Carcinoma\"",
    event: "Joint EHNS-ESMO-ESTRO Multidisciplinary Teaching Course",
    date: "October 27, 2013",
  },
  {
    title:
      "\"SBRT for Early Lung Cancer\"",
    event: "Association of Oncologists of NE India (AONEI) CME Program, Imphal",
    date: "August 31, 2013",
  },
  {
    title:
      "\"Management of Locally advanced Laryngeal Cancers\"",
    event: "Masters Course in H&N Oncology, Bangalore",
    date: "August August, 9",
  },
  {
    title:
      "\"Adjuvant and Neo-adjuvant therapy\"",
    event: "Hepato-Cellular Carcinoma - New Hopes for Cure: CME Program",
    date: "August 4, 2013",
  },
  {
    title:
      "\"Advances in the Management of Head & Neck Cancers\" at The Association of Otolaryngologists of India (AOI), Hyderabad Branch Clinical meeting",
    event: "Govt. ENT Hospital, Hyderabad",
    date: "July 31, 2013",
  },
  {
    title:
      "\"Concurrent Chemo Radiation in Locally advanced Laryngeal & Hypopharyngeal Cancers\"",
    event: "III Eurasian Head & Neck Cancer Forum (EASHNO - 2013), St. Petersburg, Russia",
    date: "July 25, 2013",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"What is the Best way to treat locally advanced Larynx/Hypopharynx?\"",
    event: "III Eurasian Head & Neck Cancer Forum (EASHNO - 2013), St. Petersburg, Russia",
    date: "July 25, 2013",
  },
  {
    title:
      "Invited as a Chairperson for \"Advances in Radiotherapy\"",
    event: "III Eurasian Head & Neck Cancer Forum (EASHNO - 2013), St. Petersburg, Russia",
    date: "July 25, 2013",
  },
  {
    title:
      "Moderator for the Panel Discussion \"Breast Cancer\"",
    event: "Best of ASCO - 2013, Mumbai",
    date: "June 28, 2013",
  },
  {
    title:
      "\"Radiation Oncology\" CME",
    event: "Apollo Cancer Hospitals, Hyderabad",
    date: "June 13, 2013",
  },
  {
    title:
      "Invited as a Panelist for the Panel Discussion on \"Radiotherapy issues in Early Breast Cancer\"",
    event: "13th St. Gallens Breast Cancer Conference, Mumbai",
    date: "",
  },
  {
    title:
      "\"Sequencing of Chemotherapy and Radiotherapy\"",
    event: "14th ICRO PG Teaching Course \"Concurrent Chemotherapy - Guidelines and Evidence\", Patna",
    date: "April April, 27",
  },
  {
    title:
      "Invited as a Panelist for the Satellite Symposium on Targeted Therapy in Ovarian Cancer \"Relapsed Ovarian Cancer\"",
    event: "Global Oncology Summit - 2013, Hyderabad",
    date: "March 28, 2013",
  },
  {
    title:
      "\"What's Hot in Chemotherapy and Radiotherapy\"",
    event: "Confluence: An update",
    date: "March March, 23",
  },
  {
    title:
      "\"Frameless SRS in Brain Metastasis - Apollo Experience\"",
    event: "ASNO - 2013, Mumbai",
    date: "March 21, 2013",
  },
  {
    title:
      "\"What's new in Oncology\" at CME",
    event: "Apollo Medical Centre, Muscat",
    date: "January 26, 2013",
  },
  {
    title:
      "CNS Case Session \"Head & Neck Cancers\"",
    event: "Scientific Symposium: Second Conference",
    date: "December 22, 2012",
  },
  {
    title:
      "Invited as a Panelist for the Session \"New options for patients progressing after first-line Chemotherapy\"",
    event: "Trivandrum Oncology Club Meeting, Trivandrum",
    date: "December 14, 2012",
  },
  {
    title:
      "\"Management of Orbital Tumors\"",
    event: "Trivandrum Oncology Club Meeting, Trivandrum",
    date: "December 14, 2012",
  },
  {
    title:
      "Moderator in \"DEBATE: Radiotherapy today is being driven more by Technology rather than Evidence\"",
    event: "AROICON - 2012, Kolkata",
    date: "November 29, 2012",
  },
  {
    title:
      "\"Lung Cancer\" at ICRO Workshop on Target Volume Delineation",
    event: "AROICON - 2012, Kolkata",
    date: "November 29, 2012",
  },
  {
    title:
      "Uddhav Memorial Lecture on \"Radiation in Head & Neck Oncology\"",
    event: "44th Annual State ENT Conference, Nanded",
    date: "November 2, 2012",
  },
  {
    title:
      "\"Malignancy in Pregnancy\"",
    event: "MAATRIKA - 2012 \"A Journey through Pregnancy and Beyond\", Hyderabad",
    date: "November November, 3",
  },
  {
    title:
      "\"Frameless Radiosurgeries\"",
    event: "Apollo National CME Oncology, Kolkata",
    date: "August 17, 2012",
  },
  {
    title:
      "Moderator for the Panel Discussion \"Case Capsule on Radiation Oncology\"",
    event: "National Seminar of Breast Cancer Foundation - India, Patna",
    date: "August August, 4",
  },
  {
    title:
      "\"Preventive Strategies for Cancer Cervix - Focus on HPV Vaccine\"",
    event: "XIV A.P. State Congress of OBGYN, KIMS, Narketpally, Nalgonda Dist",
    date: "July July, 7",
  },
  {
    title:
      "Invited as a Panelist for the Session \"Abstract - 14 Randomized Phase III trial of regorafenib in patients with metastatic and/or unresectable gastrointestinal stromal tumor (GIST) progressing despite prior treatment with at least imatinib (IM) and sunitinib (SU): GRID trial\"",
    event: "Best of ASCO, Jaipur",
    date: "June June, 23",
  },
  {
    title:
      "Moderator for the Breakfast Symposium on Oesophageal & Lung Cancer Session \"Nimotuzumab in combination with Chemo-radiotherapy: Promising Clinical outcomes in Oesophageal Cancer from a Phase II Cuban study\"",
    event: "Best of ASCO, Jaipur",
    date: "June June, 23",
  },
  {
    title:
      "\"Targeted Therapy in Head & Neck Cancers\"",
    event: "Best of ASCO, Jaipur",
    date: "June June, 23",
  },
  {
    title:
      "Presented an Abstract \"Demographics, treatment, and outcome of Retinoblastoma: A large series with protocol-based Management\"",
    event: "American Society of Clinical Oncology (ASCO) - 2012, Chicago, Illinois, USA",
    date: "June 1, 2012",
  },
  {
    title:
      "\"Overcome Toxicity hurdle to have desired response from systemic therapy in SCLC\"",
    event: "ONCOLOGY - 2012: International Conference",
    date: "May 4, 2012",
  },
  {
    title:
      "\"Role of SRS/SRT in Brain Tumors\"",
    event: "Neuro-Onco Summit 2012 \"Newer Insights & Challenges in Neuro-Oncology\", Jaipur",
    date: "April 8, 2012",
  },
  {
    title:
      "\"What's new in oncology\" at CME",
    event: "Indian Medical Association (IMA), Karimnagar Branch, Karimnagar",
    date: "March 16, 2012",
  },
  {
    title:
      "\"What's new in oncology\" at CME",
    event: "Indian Medical Association (IMA), Warangal Branch, Warangal",
    date: "February 26, 2012",
  },
  {
    title:
      "\"Latest Trends in Oncology\"",
    event: "9th SPG Conference & Exposition",
    date: "February 16, 2012",
  },
  {
    title:
      "\"Current Chemotherapy Protocols\"",
    event: "FUSION - 2012, Hyderabad",
    date: "February 12, 2012",
  },
  {
    title:
      "\"Radiotherapy - Accurate, Safe and Effective\"",
    event: "FUSION - 2012, Hyderabad",
    date: "February 12, 2012",
  },
  {
    title:
      "Uddhav Memorial Symposium on Cancer Cancer \"Neo adjuvant treatment\"",
    event: "26th AMOGS Conference - 2012, hosted by the Nanded Obst. & Gyn. Society, Nanded",
    date: "January 6, 2012",
  },
  {
    title:
      "\"Head & Neck Malignancies\"",
    event: "Association of Surgeon's of India (ASI), Warangal Branch, Warangal",
    date: "December 17, 2011",
  },
  {
    title:
      "\"Head & Neck Symposium: A New look at Induction Chemotherapy in Locally advanced Head & Neck Cancer\"",
    event: "33rd AROICON - 2011, Jaipur",
    date: "November 24, 2011",
  },
  {
    title:
      "\"Latest Advances in Radiation for Oral Cancers\"",
    event: "Panineeya Institute of Dental Sciences, Hyderabad",
    date: "October 19, 2011",
  },
  {
    title:
      "\"Role of NACT in Oral Cancers\"",
    event: "11th Foundation of Head & Neck Oncology (FHNO) & 2nd Asian Society of Head & Neck Oncology Meeting, Goa",
    date: "October 5, 2011",
  },
  {
    title:
      "\"The New Techniques in RT\"",
    event: "Visakhapatnam Stell Plant, Visakhapatnam",
    date: "September 20, 2011",
  },
  {
    title:
      "\"Pediatric Ocular Malignancies - Role of Radiotherapy\"",
    event: "Radiotherapy Update - 2011, Maharashtra State Chapter Meeting - AROI, Pune",
    date: "August August, 13",
  },
  {
    title:
      "\"Newer Treatment Modalities in Oncology\"",
    event: "Central Government Health Scheme (CGHS), Hyderabad",
    date: "August 4, 2011",
  },
  {
    title:
      "\"Update in NSCLC Management\"",
    event: "Chest Hospital, Hyderabad",
    date: "August 3, 2011",
  },
  {
    title:
      "\"Locally advanced Laryngeal - Hypopharyngeal Ca. - Surgery vs Chemo-Radiation\"",
    event: "ENT Hospital, Koti, Hyderabad",
    date: "May 26, 2011",
  },
  {
    title:
      "\"Management of Metastases Renal Cell Carcinoma\"",
    event: "Hyderabad Urological Society (HUS) meeting",
    date: "May 18, 2011",
  },
  {
    title:
      "\"Management of Head & Neck Cancers\"",
    event: "Head & Neck Cancers Zonal CME - 2011, Kakatiya Medical College, Warangal",
    date: "May 8, 2011",
  },
  {
    title:
      "\"Targeted therapy in Non Small Cell Lung Cancer\"",
    event: "BHEL, Hyderabad",
    date: "April 26, 2011",
  },
  {
    title:
      "\"1st Indian Experience with Shaped Beam Radio-Surgery of Cranial and Spinal Lesions on Novalis Tx with ExacTrac Robotic Couch\"",
    event: "3rd Asia Pacific RT User Meeting, Hongkong",
    date: "March 11, 2011",
  },
  {
    title:
      "\"Ru-106 Plaque Brachytherapy for Ocular Tumors: Clinical Results\"",
    event: "IBt-BEBIG International Brachytherapy HDR User Group Meeting, Pattaya, Thailand",
    date: "February 18, 2011",
  },
  {
    title:
      "\"The New Radiation Technology and Techniques - Does it matter in Gyn. Cancer\"",
    event: "All India Congress of Obstetrics & Gynecology, Hyderabad",
    date: "January 5, 2011",
  },
  {
    title:
      "\"Concepts in Chemotherapy and Radiation\"",
    event: "Eye Opener Ocular Oncology Course by Jerry Shields, LVPEI, Hyderabad",
    date: "December December, 4",
  },
  {
    title:
      "\"IMRT\"",
    event: "32nd National Conference of AROICON - 2010, Patna",
    date: "November 25, 2010",
  },
  {
    title:
      "\"NCCN Guidelines in Management of Breast Cancer\" at",
    event: "32nd National Conference of AROICON - 2010, Patna",
    date: "November 25, 2010",
  },
  {
    title:
      "\"Patient Selection & Management in LAHNC - Real World Focus\" at Head & Neck Cancer Expert Forum for the 2nd ENCEF Live Webcast",
    event: "ENCEF.com, Mumbai",
    date: "November 4, 2010",
  },
  {
    title:
      "\"Role of Paclitaxel in Head & Neck Cancer\"",
    event: "AROI-TN & Pondicherry Chapter, CME, Vellore",
    date: "October October, 8",
  },
  {
    title:
      "\"Latest developments in treatment of Gynaec Malignancies\"",
    event: "Gandhi Hospital, Hyderabad",
    date: "September 21, 2010",
  },
  {
    title:
      "\"Recent Advances in Radiotherapy in Management of Head & Neck Cancers\"",
    event: "The Association of Otolaryngologists of India, Hyd. Branch, Govt. ENT Hospital, Koti, Hyderabad",
    date: "June 29, 2010",
  },
  {
    title:
      "\"Ruthenium 106 Plaque Brachytherapy: Indications and Outcome in Ocular Tumors\" at 4th World Congress of International Federation of Head & Neck Oncologic Societies (IFHNOS) - 2010",
    event: "Seoul, Korea",
    date: "June 15, 2010",
  },
  {
    title:
      "\"Retinoblastoma: Diagnosis and Management\"",
    event: "ICRO - 2010, CME, Vellore",
    date: "May May, 8",
  },
  {
    title:
      "\"Brain Tumors\"",
    event: "Advances in Oncology - 2010 based",
    date: "May 8, 2010",
  },
  {
    title:
      "\"Management of Oral Cancers - Role of Chemotherapy and Radiation therapy\"",
    event: "Kamineni Inst. of Dental Sciences, Narketpally",
    date: "March 24, 2010",
  },
  {
    title:
      "\"Management of Advanced Lung Cancer\" at Ask'10 - International Conference on Trends & Treatments in Head, Neck & Thoracic Cancer",
    event: "Gurgaon, New Delhi",
    date: "March March, 6",
  },
  {
    title:
      "\"Prevent, Detect & Arrest Cancer!\" at 8th Biennial International Conference & Exhibition on Petroleum Geophysics",
    event: "HICC, Hyderabad",
    date: "February 1, 2010",
  },
  {
    title:
      "\"Histopathology of Retinoblastoma after primary Chemotherapy\"",
    event: "AROICON - 2009, Hyderabad",
    date: "November 26, 2009",
  },
  {
    title:
      "\"Ruthenium 106 Plaque Brachytherapy: Indications and Outcome in Ocular Tumors\"",
    event: "AROICON - 2009, Hyderabad",
    date: "November 26, 2009",
  },
  {
    title:
      "\"Cervical Cancer Screening: Role of serotyping of HPV as bridge of Cytopathology and molecular typing?\"",
    event: "AROICON - 2009, Hyderabad",
    date: "November 26, 2009",
  },
  {
    title:
      "\"HPV for Cervical Cancer Screening: Is the era of the molecular Pap Smear upon us?\"",
    event: "AROICON - 2009, Hyderabad",
    date: "November 26, 2009",
  },
  {
    title:
      "\"Retinoblastoma - The Paradigm shift in Management\"",
    event: "ONCOLOGY - 2009, International Conference",
    date: "April 23, 2009",
  },
  {
    title:
      "\"Radiotherapy and Chemotherapy as applicable for Ophthalmology\"",
    event: "LVPEI, Hyderabad",
    date: "March 21, 2009",
  },
  {
    title:
      "\"IMRT in Early Breast Cancer\"",
    event: "XIII Annual National Conference of Breast Cancer Foundation - India (BRECON) - 2009, Madurai",
    date: "March March, 7",
  },
  {
    title:
      "\"Non Surgical Management of Oral Cancer\" Oral Cancer A Multispeciality Conclave CME",
    event: "S.B. Patil Dental College, Bidar",
    date: "February 15, 2009",
  },
  {
    title:
      "\"Breast Cancer\"",
    event: "ONCOCON - 2009, ISO/ISMPO Biennial Conference, Chennai",
    date: "February 13, 2009",
  },
  {
    title:
      "\"Organ Preservation in Head & Neck Cancers\" CME Programme on Head & Neck Cancer, Visakhapatnam on February 1, 2009",
    event: "",
    date: "February 1, 2009",
  },
  {
    title:
      "\"PET-CT for Diagnosis & Staging in Oncology\"",
    event: "Recent Advances in Molecular Imaging and Radiation Oncology (RAMIRO) - 2009, Bangalore",
    date: "January January, 18",
  },
  {
    title:
      "\"CT+RT in Stage - III NSCLC\" at Apollo Gleneagles PET-CT Center CME Programme on Lung Cancer",
    event: "Taj Banjara, Hyderabad",
    date: "January 4, 2009",
  },
  {
    title:
      "\"Adjuvant therapy for Stage - II NSCLC\"",
    event: "APLCC - 2008, Hyderabad",
    date: "December 5, 2008",
  },
  {
    title:
      "\"Statistics on Cancer Survival - an encouragement to all\"",
    event: "APLCC - 2008, Hyderabad",
    date: "December 5, 2008",
  },
  {
    title:
      "\"IMRT in cervical cancer-a new approach\"",
    event: "17th Annual Conference of the Association of Gynecologic Oncologists of India (AGOICON) - 2008, Gandhi Medical College, Hyderabad",
    date: "November 28, 2008",
  },
  {
    title:
      "\"Retinoblastoma & Orbital Tumors\"",
    event: "AROICON - 2008, Mumbai",
    date: "November 27, 2008",
  },
  {
    title:
      "\"Organ & Function Preservation in Cancer Management\"",
    event: "ICON, Salalah OMAN - 2008, Salalah",
    date: "August 19, 2008",
  },
  {
    title:
      "\"PET-CT Scan - Impact on Diagnosis & Therapy in Oncology\"",
    event: "ICON, Salalah OMAN - 2008, Salalah",
    date: "August 19, 2008",
  },
  {
    title:
      "\"Gynecological Malignancies\"",
    event: "Post ASCO - 2008 Update, Chennai",
    date: "July 20, 2008",
  },
  {
    title:
      "\"Breakthroughs in the Management of Cancer Cervix\"",
    event: "10th APCOG - 2008 hosted by Obst & Gyn Society, Nellore",
    date: "July 13, 2008",
  },
  {
    title:
      "\"Case Presentation on Breast Cancer - Medcases (Inflammatory Breast Carcinoma)\"",
    event: "Best of ASCO - 2008 Update, New Delhi",
    date: "July July, 12",
  },
  {
    title:
      "\"Conformal Radiotherapy in Ca. Prostate\" at ICRO Teaching Session on Prostate Cancer",
    event: "Gokula Curie Cancer Center, Bangalore",
    date: "June June, 7",
  },
  {
    title:
      "\"Demographics, clinical profile, management and outcome of Retinoblastoma\"",
    event: "ASCO - 2008, Chicago, Illinois, USA",
    date: "May 30, 2008",
  },
  {
    title:
      "\"Laryngeal Preservation Management on Cancer of the Larynx\" in Award Paper Session",
    event: "CANCER CI - 2008, Taj Krishna, Hyderabad",
    date: "February February, 9",
  },
  {
    title:
      "\"Radiation Therapy in Pediatric Eye Tumors\" in Award Paper Session",
    event: "CANCER CI - 2008, Taj Krishna, Hyderabad",
    date: "February February, 9",
  },
  {
    title:
      "\"Role of Chemotherapy and Radiation in Orbital and Adnexal Tumors\"",
    event: "Cutting Edge - 2007, LV Prasad Eye Institute, Hyderabad",
    date: "December 13, 2007",
  },
  {
    title:
      "\"Invasive Ca. Bladder: Cystectomy Vs Radiotherapy\"",
    event: "Andhra Pradesh Society of Getino-Urinary Surgeons (AP-SOGUS) - 2007, 19th Annual Conference, Rajahmundry",
    date: "November November, 24",
  },
  {
    title:
      "\"Demographics, Clinical Profile, Management and Outcome of Retinoblastoma in a Tertiary Care Center in Southern India\"",
    event: "39th Congress of the International Society of Pediatric Oncology (SIOP) - 2007, National Center of Performing Arts (NCPA), Mumbai",
    date: "October 29, 2007",
  },
  {
    title:
      "\"Recent Advances in Radiation Oncology\"",
    event: "I.M.A., A.P.CON - 2007, 49th Annual Conference of IMA, AP State, Nizamabad",
    date: "September 29, 2007",
  },
  {
    title:
      "\"CT Vs PET-CT Guided Tumor Volume Delineation\"",
    event: "Association of Medical Physicists of India, AP-Chapter (AMPIAPCON) - 2007, NIMS, Hyderabad",
    date: "July 15, 2007",
  },
  {
    title:
      "\"GTN\"",
    event: "APCOG - 2007, 9th AP State Conference of Obst. & Gyn., Karimnagar",
    date: "July 14, 2007",
  },
  {
    title:
      "\"Image guided planning in conformal RT and IMRT\" at ICRO Teaching Session on Head & Neck Cancer",
    event: "IPGMER, Kolkata",
    date: "May May, 26",
  },
  {
    title:
      "\"Concurrent Chemotherapy in Locally advanced Head & Neck - Larynx Preservation\" at ICRO Teaching Session on Head & Neck Cancer",
    event: "IPGMER, Kolkata",
    date: "May May, 26",
  },
  {
    title:
      "\"Impact to PET-CT Guided Tumor Volume delineation in IMRT Planning\" at ICRO Teaching Session on Head & Neck Cancer",
    event: "IPGMER, Kolkata",
    date: "May May, 26",
  },
  {
    title:
      "\"Cervical Cancer Screening\" & \"Gestational Trophoblastic Neoplasia\"",
    event: "Nellore Obst. & Gyn. Society (NOGSI), Nellore",
    date: "February 18, 2007",
  },
  {
    title:
      "\"Retinoblastoma in Older Children\" at SUNAYANA - 2007, 65th Annual Conference of All India Ophthalmological Society",
    event: "Hyderabad",
    date: "February 1, 2007",
  },
  {
    title:
      "\"Clinical Profile and Treatment outcome of Orbital Rhabdomyosarcoma - Experience of an Ocular Oncology Center\" at SUNAYANA - 2007, 65th Annual Conference of All India Ophthalmological Society",
    event: "Hyderabad",
    date: "February 1, 2007",
  },
  {
    title:
      "\"Periocular Carboplatin in Advanced Intraocular Retinoblastoma\" at SUNAYANA - 2007, 65th Annual Conference of All India Ophthalmological Society",
    event: "Hyderabad",
    date: "February 1, 2007",
  },
  {
    title:
      "\"Molecular Imaging its Impact in Oncology\" at B2B2K5, 2nd Annual Translational Research Conference",
    event: "Visakhapatnam",
    date: "January 20, 2007",
  },
  {
    title:
      "\"HPV Virus and Cervical Neoplasia\"",
    event: "4th Marathwada Regional Conference of Obst. & Gynecologists (MRCOG), Nanded",
    date: "November 24, 2006",
  },
  {
    title:
      "\"Gestational Trophoblastic Neoplasia\"",
    event: "4th Marathwada Regional Conference of Obst. & Gynecologists (MRCOG), Nanded",
    date: "November 24, 2006",
  },
  {
    title:
      "\"Common Cancer Care Guidelines\"",
    event: "Indian Medical Hall, Sultan Bazar, Hyderabad",
    date: "November 12, 2006",
  },
  {
    title:
      "\"Cancer Cervix with HPV\" at 8th APCOG 2006, Vijayawada Obstetric & Gynecological Society",
    event: "Vijayawada",
    date: "September 9, 2006",
  },
  {
    title:
      "\"Chemo-radiation for organ preservation in advanced Laryngo-pharyngeal Cancers\"",
    event: "CANCER CI - 2006 TAJ Krishna, Hyderabad",
    date: "February February, 11",
  },
  {
    title:
      "\"Ocular Brachytherapy\" at AROICON - 2005 (Association of Radiation Oncologists of India), 27th National Annual Conference arranged",
    event: "Gujarat Cancer & Research Institute, Ahmedabad",
    date: "December 1, 2005",
  },
  {
    title:
      "\"Common Cancer Care Guidelines\"",
    event: "P.S. Ghatge Memorial Oration Indian Medical Association, Hyderabad",
    date: "",
  },
  {
    title:
      "Invited as a Panelist for the Session \"Geriatric Malignancies (Lung Cancer)\"",
    event: "Tata Memorial Hospital, Mumbai",
    date: "October 14, 2005",
  },
  {
    title:
      "\"Management of Cancer in Women\" at OUMeGA, Osmania University Medical Graduates Annual Meet 2005",
    event: "Birmingham, UK",
    date: "July July, 16",
  },
  {
    title:
      "\"Plaque Brachytherapy for Ocular Tumors\" at 1st International Translational Research Conference, B2B2K5, CCMB",
    event: "Hyderabad March 19 - 20, 2005",
    date: "",
  },
  {
    title:
      "\"Rhuthenium Brachytherapy in Ocular Tumors\"",
    event: "International Seminor",
    date: "February 5, 2005",
  },
  {
    title:
      "\"Plaque Brachytherapy in Diffuse Choroidal Hemangioma\"",
    event: "Annual Meeting of the All India Ophthalmic Society, Bhubaneswar - January 2005",
    date: "",
  },
  {
    title:
      "\"Adenoid Cystic Carcinoma of the Lacrimal Gland\"",
    event: "Annual Meeting of the All India Ophthalmic Society, Bhubaneswar - January 2005",
    date: "",
  },
  {
    title:
      "\"Subconjunctival Carboplatin in the treatment of Retinoblastoma\"",
    event: "Annual Meeting of the All India Ophthalmic Society, Bhubaneswar - January 2005",
    date: "",
  },
  {
    title:
      "\"Adenoid Cystic Carcinoma of the Lacrimal Gland: Management and outcome\"",
    event: "American Society of Ophthalmic Plastic and Reconstructive Surgery Meeting - October 2004",
    date: "",
  },
  {
    title:
      "\"Concurrent Chemo-Radiotherapy in Ca. Esophagus\"",
    event: "40th Annual American Society of Clinical Oncology (ASCO), New Orleans, LA, USA",
    date: "June 5, 2004",
  },
  {
    title:
      "\"External Beam Radiotherapy in Orbital Tumors - Current Concepts\"",
    event: "XI International Congress of Ocular Oncology (ICOO - 2004), Hyderabad",
    date: "January 23, 2004",
  },
  {
    title:
      "\"Management of Retinoblastoma with Orbital Extension\"",
    event: "Annual Meeting of the American Academy of Ophthalmology, Anaheim, CA, USA - November 2003",
    date: "",
  },
  {
    title:
      "\"Prognosis factors in stage - I Uterine Cancer\"",
    event: "CANCER CI - 2003, Hyderabad",
    date: "August August, 23",
  },
  {
    title:
      "Presented a paper on \"Concurrent Chemo-radiation in locally advanced Laryngo-Pharyngeal Cancer & Larynx preservation\"",
    event: "American Society of Clinical Oncology (ASCO), Chicago, USA",
    date: "",
  },
  {
    title:
      "\"A phase II trial of Bi-weekly Decetaxel as Radiosensitizer in unresectable Non-Small cell Lung Ca.\"",
    event: "1st SAARC Conference of Clinical Oncology, Bangladesh",
    date: "March 8, 2001",
  },
  {
    title:
      "\"Ultrasound guided conformal Brachytherapy in Early Prostate Cancer\"",
    event: "International Conference of Radiation Oncology, Melbourne, Australia",
    date: "",
  },
  {
    title:
      "\"Concurrent Chemoradiation in locally advanced NSC Lung Cancer\"",
    event: "World Lung Cancer Conference, Tokyo, Japan",
    date: "November 11, 2000",
  },
  {
    title:
      "\"Lower Uterine segment involvement in Stage I Endometrial Carcinoma - An independent prognostic factor?\" in Award Paper Session",
    event: "XXI Annual National Conference of Association of Radiation Oncologists of India, Calcutta - December 1999",
    date: "",
  },
  {
    title:
      "A Prospective randomized study of the role of combination of Interferon and Radiation therapy in the management of locally advanced Carcinoma Cervix - Stage III B\" in Award Session",
    event: "XX Annual National Conference of Association of Radiation Oncologists of India, Cuttack - December 1998",
    date: "",
  },
  {
    title:
      "\"Ultrasound guided transperineal interstitial implant for localized Prostate Cancer\" Presented in Annual Conference of A.P. Society of Genito Urinary Surgeons - November 1998",
    event: "",
    date: "",
  },
  {
    title:
      "\"Radical Radiotherapy in Early stage Retinoblastoma with preservation of vision\" in Award Paper Session",
    event: "XIX Annual National Conference of Association of Radiation Oncologists of India, Indore - December 1997",
    date: "",
  },
  {
    title:
      "\"Chemo-Radiation in Advanced Laryngo-pharyngeal tumors for Laryngeal preservation\" in Award paper session",
    event: "XIX Annual National Conference of Association of Radiation Oncologists in India, Indore - December 1997",
    date: "",
  },
  {
    title:
      "\"A prospective randomized study of the role of combination of interferon and radiation therapy in the management of locally advanced Carcinoma Cervix\", a preliminary report",
    event: "ICRO 1997 - International congress of Radiation Oncology, Beijing, China",
    date: "June 5, 1997",
  },
  {
    title:
      "\"An experience with low dose rate Intraluminal Brachytherapy following Concurrent Chemoradiation in non-metastatic Carcinoma Esophagus\"",
    event: "IX Biennial Conference of the Indian Society of Medical and Pediatric Oncologists, Madurai - February 1997",
    date: "",
  },
  {
    title:
      "\"A Prospective randomized study of the role of combination of Interferon and Radiation therapy in the management of locally advanced Carcinoma Cervix - Stage III B - A Preliminary Report\" in Award Paper Session",
    event: "XVIII Annual National Conference of Association of Radiation Oncologists of India, Aurangabad - December 1996",
    date: "",
  },
  {
    title:
      "\"Concurrent Chemo-Radiotherapy and Intraluminal Radiotherapy in Non-Metastatic Ca. Esophagus\"",
    event: "XVIII Annual National Conference of Association of Radiation Ocologists of India",
    date: "December 12, 1996",
  },
  {
    title:
      "\"Larynx preservation - Chemo-Radiation in Advanced Laryngeal Cancer\"",
    event: "Update in Head & Neck Oncology, Hyderabad - February 1996",
    date: "",
  },
  {
    title:
      "\"Lower Uterine Segment Involvement in Stage I Cancer of Body Uterus - An Independent Prognostic Factor\"",
    event: "Annual Conference of AROI, Madras - September 1995",
    date: "",
  },
  {
    title:
      "\"Interstitial Brachytherapy in Biliary Duct Carcinoma\"",
    event: "Update in Oncology - 1995, The New York Hospital, Medical Center of Queens, NY, USA",
    date: "",
  },
  {
    title:
      "\"Permanent Implantation of Palledium in Prostatic Cancer - Long term results\"",
    event: "Update in Oncology - 1995, The New York Hospital, Medical Center of Queens, NY, USA",
    date: "",
  },
  {
    title:
      "\"Bone Marrow recovery patterns following HBI\"",
    event: "UICC Cancer Congress, New Delhi - November 1994",
    date: "",
  },
  {
    title:
      "\"Long time survival of patients with Metastatic Gestational Trophoblastic Neoplasia\"",
    event: "XIV Annual National Conference of Association of Radiation Oncologists of India",
    date: "January 27, 1993",
  },
  {
    title:
      "\"Certain Observations on the effect of HBI on haematological system and its recovery\"",
    event: "XIV Annual National Conference of Association of Radiation Oncologists of India",
    date: "January 27, 1993",
  },
  {
    title:
      "\"A hypopharyngeal carcinoma in a year old child - a rare case report\"",
    event: "XIV Annual National Conference of Association of Radiation Oncologists of India",
    date: "January 27, 1993",
  },
  {
    title:
      "\"Stage IV Metastatic Choriocarcinoma - Long term survivals\"",
    event: "XIV Annual National Conference of Association of Radiation Oncologists of India",
    date: "January 27, 1993",
  },
  {
    title:
      "\"Effects of HBI on Hematological System\"",
    event: "XIV Annual National Conference of Association of Radiation Oncologists of India",
    date: "January 27, 1993",
  },
  {
    title:
      "\"Assessment of Pain-Pain Score\"",
    event: "XIII Annual National Conference of Association of Radiation Oncologists of India - February 1992",
    date: "",
  },
  {
    title:
      "\"Role of HBI in Multiple Bone Metastases\"",
    event: "XIII Annual National Conference of Association of Radiation Oncologists of India - February 1992",
    date: "",
  },
  {
    title:
      "\"Multifocal Osteosarcoma\"",
    event: "XLIII Annual Congress of Radiology & Imaging - January 1990",
    date: "",
  }
];


const ITEMS_PER_PAGE = 20;

const ProfessionalPresentationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!searchTerm) return presentations;
    const lowerSearch = searchTerm.toLowerCase();
    return presentations.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerSearch) ||
        p.event.toLowerCase().includes(lowerSearch) ||
        p.date.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
    <Header />
 <div className="min-h-screen bg-white flex flex-col">
  {/* Hero / Header Section */}
  <section className="pt-20 md:pt-24 mt-12 md:mt-16 pb-8 bg-medical-blue/10 text-center px-4">
    <FiMic className="mx-auto w-12 h-12 md:w-14 md:h-14 text-medical-blue mb-3" />
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-medical-dark mb-2">
      Professional Presentations & Panels
    </h1>
    <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
      A curated timeline of lectures, discussions, and expert panels showcasing
      thought leadership and clinical expertise.
    </p>
  </section>

  {/* Main Content */}
  <main className="w-full max-w-6xl mx-auto px-3 sm:px-4 pb-16 pt-6 flex flex-col">
    {/* Search Bar */}
    <div className="mb-6 flex flex-col sm:flex-row sm:justify-end">
      <input
        type="search"
        aria-label="Search presentations"
        placeholder="Search presentations..."
        className="w-full sm:w-auto sm:max-w-md border border-gray-300 rounded shadow-sm px-4 py-2 text-sm sm:text-base focus:outline-medical-blue"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
      />
    </div>

    {/* Timeline List */}
    <ul className="space-y-6">
      {paginated.map((item, idx) => (
        <li
          key={idx}
          className="border-l-4 border-medical-blue pl-6 relative group"
        >
          <div className="absolute -left-3 top-1.5 flex items-center justify-center w-6 h-6 bg-medical-blue rounded-full shadow-md ring-4 ring-white group-hover:ring-medical-dark transition">
            <FiMic className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-medical-dark mb-1">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">{item.event}</p>
            <time className="text-xs sm:text-sm text-medical-blue font-semibold mt-1 block">
              {item.date}
            </time>
          </div>
        </li>
      ))}

      {paginated.length === 0 && (
        <li className="text-center text-gray-500 py-12 text-sm sm:text-base">
          No presentations found.
        </li>
      )}
    </ul>

    {/* Pagination */}
    {pageCount > 1 && (
      <nav
        className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        aria-label="Pagination Navigation"
      >
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 text-sm sm:text-base rounded bg-medical-blue text-white disabled:bg-gray-300"
          aria-label="Previous page"
        >
          Previous
        </button>

        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 sm:px-4 py-1 text-sm sm:text-base rounded ${
              page === i + 1
                ? "bg-medical-dark text-white font-bold"
                : "bg-medical-blue text-white hover:bg-medical-dark"
            }`}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === pageCount}
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          className="px-3 py-1 text-sm sm:text-base rounded bg-medical-blue text-white disabled:bg-gray-300"
          aria-label="Next page"
        >
          Next
        </button>
      </nav>
    )}
  </main>
</div>

      <Footer />
    </>
  );
};

export default ProfessionalPresentationsPage;

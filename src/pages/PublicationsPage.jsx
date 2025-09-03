import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

export const publications = [
  {
    id: 1,
    title: "Lag time for diagnosis and treatment in 1120 Retinoblastoma Children: analysis from InPOG-RB-19-01",
    journal: "International Journal of Ophthalmology; August 2025; Vol. 73(8); Pg. 1124-1131.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2025/lag time for diagnosis and treatment in 1120.9.pdf"
  },
  {
    id: 2,
    title: "A prospective feasibility study on extreme hypofractionation in adjuvant radiation of breast cancer in a tertiary cancer center in India",
    journal: "Annals of Oncology Research and Therapy; 2025; Pg: 1-8.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2025/A prospective feasibility study on extreme.pdf"
  },
  {
    id: 3,
    title: "Ruthenium-106 (106Ru) plaque brachytherapy as salvage treatment for retinoblastoma following intravenous chemotherapy",
    journal: "Research Article published in American Brachytherapy Society; Nov 2024; Pg: 1-10.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2009/Ruthenium 106 plaque brachytherapy indications and outcomes in ocular tumors.pdf"
  },
  {
    id: 4,
    title: "Neoadjuvant chemotherapy for advanced eyelidand periocular sebaceous gland carcinoma: a study of 25cases",
    journal: "International Journal of Ophthalmology; August 2024; Vol. 44 (1); Pg. 1-4.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2005/Neoadjuvant Chemo in the Management of Sebaceous Gland Ca.mht"
  },
  {
    id: 5,
    title: "Indocyanine Green‑enhanced transpupillary thermotherapy for Iuxtapapillaryretinal capillary  Hemangioblastoma",
    journal: "Indian Journal of Ophthalmology; August 2024; Vol. 72(8), Pg: 1150-1155.",
    pdf: ""
  },
  {
    id: 6,
    title: "Retinoblastoma Associated with Total Exudative Retinal Detachment Treatment and Outcomes",
    journal: "The Journal of Retinal and Vitreous Diseases; May 2023; Vol. 43(5), Pg: 808-814.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2018/RB in younger versus older children Clinical features and outcom 06-07-2018/retinoblastoma based on age at presentation clinical features and outcome.docx"
  },
  {
    id: 7,
    title: "Brachytherapy training in India: Results from the GEC-ESTRO-India Survey",
    journal: "Research Article published in American Brachytherapy Society; May 2023; Vol. 16(2), Pg: 1-8.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2023/Brachytherapy training in India.pdf"
  },
  {
    id: 8,
    title: "A retrospective analysis of irinotecan and bevacizumab combination therapy in recurrent high-grade glioma and glioblastoma multiforme: Single Institute experience",
    journal: "International Journal of Neuro-Oncology; 2022; Vol. 5(1), Pg: 1-9.",
       pdf: "assets/Publications (Year wise)/Publications (Year wise)/2022/A retrospective analysis.pdf"

  },
  {
    id: 9,
    title: "Primary Macular Retinoblastoma: Clinical Presentation and Treatment Outcomes",
    journal: "Journal of VitreoRetinal Diseases; Aug 2022; Vol. 6(5), Pg: 367-373.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2018/RB in younger versus older children Clinical features and outcom 06-07-2018/retinoblastoma based on age at presentation clinical features and outcome.docx"
  },
  {
    id: 10,
    title: "Does Multimodal Treatment improve Eye and Life Salvage in Adenoid Cystic Carcinoma of the Lacrimal Gland",
    journal: "The American Society of Ophthalmic Plastic and Reconstructive Surgery; 2021.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2013/Adenoid Cystic ca of the lacrimal gland - SNo. 12.pdf"
  },
  {
    id: 11,
    title: "Use of Bevacizumab in Advanced Ovarian Cancer: Consensus from an Expert Panel Oncologists",
    journal: "Indian Journal of Gynecologic Oncology; 2021.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2021/Bevacizumab in Advanced Ovar.pdf"
  },
  {
    id: 12,
    title: "Histopathology",
    journal: "Guided management of Ocular surface squamous neoplasia with corneal stromal or scleral invasion using Ruthenium – 106 Plaque Brachytherapy – British Journal of Ophthalmology, Dec 2021; Vol. 10, Pg: 1-6.",
    pdf: ""
  },
  {
    id: 13,
    title: "Outcomes of Tandem Intravitreal Chemotherapy for Refractory Vitreous Seeds in Retinoblastoma",
    journal: "AIOC 2021 Proceedings.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2011/Outcome of Retinoblastoma with Vitreous Seeds copy.docx"
  },
  {
    id: 14,
    title: "Use of Bevacizumab in Advanced Ovarian Cancer: Consensus from an Expert Panel Oncologists",
    journal: "Indian Journal of Gynecologic Oncology, Feb 2021; Vol. 19(25), Pg: 1-8.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2021/Bevacizumab in Advanced Ovar.pdf"
  },
  {
    id: 15,
    title: "Stereotactic Radiosurgery for Single or Oligometastatic Brain Lesions: A single Institutional Experience",
    journal: "Intl. Journal of Neuro-Oncology, Dec 2020; Vol. 3(2), Pg: 93-97.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/Publications (Year wise)/2020/IntJNeurooncol 3293.pdf"
  },
  {
    id: 16,
    title: "Second Primary Tumors in Retinoblastoma Survivors: A study of 7 Asian Indian patients",
    journal: "International Ophthalmology, Dec 2020; Vol. 40(2), Pg: 3303-3308.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2020/Second primary tumors in retinoblastoma survivors.pdf"
  },
  {
    id: 17,
    title: "Ocular Oncology Practice Guidelines during COVID-19 Pandemic",
    journal: "An Expert Consensus – Indian Journal of Ophthalmology, July 2020; Vol. 68(7), Pg: 1281-1291.",
    pdf: "/assets/Publications (Year wise)/Publications (Year wise)/2020/IJO 2020.pdf"
  },
  {
    id: 18,
    title: "Choosing Wisely for Cancer Care in India",
    journal: "Indian Journal of Surgery, February 2020; Vol. 82(1), Pg: 6-8.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2020/CWI commentary IJS.pdf"
  },
  {
    id: 19,
    title: "Preservation of Retinoblastoma Group E Eyes with Neovascular Glaucoma using Intravenous Chemotherapy: Risk factors and outcomes",
    journal: "British Journal of Ophthalmology, Dec’ 2019; Vol. 103(12), Pg: 1856-1861.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2019/Preservation of Retinoblastoma Group E Eyes.pdf"
  },
  {
    id: 20,
    title: "Presented a Poster on “Selective Ophthalmic Artery Chemotherapy as Primary treatment in advanced Stages of Retinoblastoma : A Prospective Study",
    journal: "European Society of Radiology 2019; Poster No.: C-1856; DOI: 10.26044/ecr2019/C-1856; Pg: 1-13.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2019/Poster - ECR2019_C-1856.pdf"
  },
  {
    id: 21,
    title: "Choosing Wisely India: Ten low-value or harmful practices that should be avoided in Cancer Care",
    journal: "DOI Handbook, March 2019; Pg: 1-6.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2019/Choosing wisely.pdf"
  },
  {
    id: 22,
    title: "Reducing Gender Disparity in Oncologists of India: An opportunity to Address Workforce Challenges",
    journal: "Journal of Clinical Oncology, August 2018; Pg: 1-5.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2018/10.1016@j.clon.2018.08.021.pdf"
  },
  {
    id: 23,
    title: "Utilization of a Web-based Conferencing Platform to improve Global Radiation Oncology Education and Quality",
    journal: "Proof of Principle through implementation in India – International Journal of Radiation Oncology, July 2018; Vol. 103; No. 1; Pg: 276-280.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2018/1-s2.0-S0360301618334606-main.pdf"
  },
  {
    id: 24,
    title: "Eye Salvage in diffuse Anterior Retinoblastoma using Systemic Chemotherapy with Periocular and Intravitreal Topotecan",
    journal: "Journal of American Association for Pediatric Ophthalmology and Strabismus, April 2018; Vol. 22; No. 3.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2018/Eye Salvage.pdf"
  },
  {
    id: 25,
    title: "Melanorrhea: Noncontiguous spread of palpebral Conjunctival Melanoma to the Nasolacrimal Duct",
    journal: "Indian Journal of Ophthalmology, February 2018; Vol. 66; No. 2; Pg. 302-303.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2018/mealnorrhea.pdf"
  },
  {
    id: 26,
    title: "Re-irradiation in Central Nervous System Tumors",
    journal: "Journal of Current Oncology, Jan-June 2018; Vol. 1; Issue. 1; Pg: 40-42.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2018/Sayan Paul - Abstracts/JCurrOncol1140-8478088_233300.pdfar Tumors.pdf"
  },
  {
    id: 27,
    title: "Radiobiology of Re-irradiations",
    journal: "Journal of Current Oncology, Jan-June 2018; Vol. 1; Issue. 1; Pg. 35-39.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2018/Sayan Paul - Abstracts/JCurrOncol1135-8477898_233258.pdfassets/Publications (Year wise)/2012/Orbital Plasmablastic Lymphoma 26-07-2012/Journal of Oncology - Ack. Receipt.doc"
  },
  {
    id: 28,
    title: "Management of Retinoblastoma with Extraocular tumor Extension",
    journal: "Community Eye Health Journal, 2018; Vol. 31; No. 101; Pg. 18-19.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2018/Management of RB with Extraocular Tumor Extension.jpg"
  },
  {
    id: 29,
    title: "Outcomes and Prognostic factors in re-irradiation of Intracranial Gliomas: Single Institution Experience",
    journal: "Annals of Oncology, November 2017; Vol. 28; No. 10.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/Publications (Year wise)/2017/mdx657.010.pdf"
  },
  {
    id: 30,
    title: "Intravitreal Topotecan in the Management of Refractory and Recurrent Vitreous seeds in Retinoblastoma",
    journal: "British Journal of Ophthalmology, August 2017; Vol. 102; No. 4.",
    pdf: ""
  },
  {
    id: 31,
    title: "Aqueous Deficient Dry Eye Syndrome Post Orbital Radiotherapy: A 10-year Retrospective Study",
    journal: "Translational Vision Science & Technology, June 2017; Vol. 6; No. 3; Article 19; Pg. 1-9.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2017/Aqueous Deficient Dry Eye Syndrome Post Orbital Radiotherapy A 10-Year Retrospective Study.pdf"
  },
  {
    id: 32,
    title: "Clinical Presentation and Outcomes of Stage III or Stage IV Retinoblastoma in 80 Asian Indian Patients",
    journal: "Journal of Pediatric Ophthalmology & Strabismus, 2017; Vol. 54; No. 3; Pg: 177-184.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2017/Clinical presentation & Outcomes of Stage III or Stage IV RB in 80 Asian Indian Patients.pdf"
  },
  {
    id: 33,
    title: "Asian Expert Recommendation on Management of Skin and Mucosal effects of Radiation, with or without the addition of Cetuximab or Chemotherapy, in treatment of Head & Neck Squamous Cell Carcinoma",
    journal: "BMC Cancer, 2016; Vol. 16; No. 42; Pg. 1-13.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2016/Asian expert recommendation on management of skin.pdf"
  },
  {
    id: 34,
    title: "The American Brachytherapy Society consensus guidelines for Plaque Brachytherapy of Uveal melanoma and Retinoblastoma",
    journal: "The American Brachytherapy Society - Ophthalmic Oncology Task Force (13) April 2014; Vol. 55; Pg. 1-14.",
    pdf: "public/assets/Publications (Year wise)/Publications (Year wise)/2014/Plaque Brachy Melanoma RB.pdf"
  },
  {
    id: 35,
    title: "Therapy and Lacrimal Drainage System Toxicity: Nasal Localization Studies using Whole body Nuclear Scintigraphy and SPECT-CT",
    journal: "The American Society of Ophthalmic Plastic and Reconstructive Surgery 2014; Vol. XX; No. XX; Pg. 1-4.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2015/Therapy and Lacrimal Drainage System Toxicity.pdf"
  },
  {
    id: 36,
    title: "Ophthalmologic Pathology: SY20-2 What is your Diagnosis?",
    journal: "Royal College of Pathologists of Australia, Taylor & Francis October 2014; Vol. 46 (2); Pg. S30",
    pdf: ""
  },
  {
    id: 37,
    title: "Orbital Alveolar soft-part Sarcoma: Clinico-pathological profiles, management and Outcomes",
    journal: "Journal of Cancer Research and Therapeutics; April-June 2014; Vol. 10; Issue. 2; Pg. 294-298.",
    pdf: ""
  },
  {
    id: 38,
    title: "Management and Outcome of Retinoblastoma with Vitreous Seeds",
    journal: "American Academy of Ophthalmology Feb 2014; Vol. 121 (2); Pg. 517-524",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2011/Outcome of Retinoblastoma with Vitreous Seeds copy.docx"
  },
  {
    id: 39,
    title: "Lacrimal Surgery Glorious past, exciting present era and the audacity of hope for a brilliant future",
    journal: "Saudi Journal of Ophthalmology 2014; Vol. 28; Pg. 1-2.",
    pdf: ""
  },
  {
    id: 40,
    title: "Gene Expression Signature of Putative Cancer Stem Cells in Retinoblastoma Y79 Cell Line",
    journal: "Investigative Ophthalmology & Visual Science 2013; Vol. 54; E-Abstract 3968.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2013/Gene expression signature of putative Cancer Stem Cells in Retinoblastoma Y79 cell line.pdf"
  },
  {
    id: 41,
    title: "Evolution of Response to Carboplatin in Putative Cancer Stem Cells of Retinoblastoma Y79 Cell Line",
    journal: "Investigative Ophthalmology & Visual Science 2013; Vol. 54; E-Abstract 1256.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2013/Evaluation of response to Carboplatin in putative Cancer Stem Cells of Retinoblastoma Y79 cell line.pdf"
  },
  {
    id: 42,
    title: "Distant metastatic Retinoblastoma without Central Nervous system involvement",
    journal: "Indian Journal of Ophthalmology July 2013; Vol. 61(7); Pg. 357-359.",
    pdf: "assets/Publications (Year wise)/Publications (Year wise)/2011/Outcome of Retinoblastoma with Vitreous Seeds copy.docx"
  },
  {
    id: 43,
    title: "Adenoid cystic carcinoma of the lacrimal gland: role of nuclear survivin (BIRC5) as a prognostic marker",
    journal: "Histopathology May 2013; Vol. 62(6); Pg. 840-846.",
    pdf: "assets/Publications (Year wise)/2013/Adenoid Cystic ca of the lacrimal gland - SNo. 12.pdf"
  },
  {
    id: 44,
    title: "Primary Intraocular Malignant Extrarenal Rhabdoid tumor: a Clinicpathological Correlation",
    journal: "Journal of Pediatric Ophthalmology and Strabismus April 2013; Vol. 50; Pg: e18-20.",
    pdf: "assets/Publications (Year wise)/2013/Primary Intraocular Malignant Extrarenal Rhabdoid tumor.pdf"
  },
  {
    id: 45,
    title: "Distant Metastatic Retinoblastoma without Central Nervous System involvement",
    journal: "Indian Journal of Ophthalmology April 2013; PubMed ID - 23548316.",
    pdf: "assets/Publications (Year wise)/2011/Outcome of Retinoblastoma with Vitreous Seeds copy.docx"
  },
  {
    id: 46,
    title: "Optic Nerve Meningeal Hemangiopericytoma: A Clinicopathological Case Report",
    journal: "Survey of Ophthalmology January 2013; pii: S0039-6257(12)00248-2. doi: 10.1016; PubMed ID – 23294915.",
    pdf: ""
  },
  {
    id: 47,
    title: "Radiation Oncology in 21st Century",
    journal: "Changing the Paradigms – Apollo Medicine June 2012; Vol. 9; No. 2; Pg. 115-125.",
    pdf: "assets/Publications (Year wise)/2012/Orbital Plasmablastic Lymphoma 26-07-2012/Journal of Oncology - Ack. Receipt.doc"
  },
  {
    id: 48,
    title: "Orbital Plasmablastic Lymphoma: A Clinico-Pathological Correlation of a rare disease and review of Literature",
    journal: "Clinical Ophthalmology (Auckland, N.Z.) 6: 2012; Pg. 2049-2057.",
    pdf: ""
  },
  {
    id: 49,
    title: "Evaluation of HER-2/neu status in Breast Cancer Specimens using Immunohistochemistry (IHC) & Fluorescence in-situ hybridization (FISH) assay",
    journal: "Indian Journal of Medical Research March 2012; Pg. 312-317.",
    pdf: ""
  },
  {
    id: 50,
    title: "Establishing Human Lacrimal Gland Cultures with Secretory Function",
    journal: "PLoS One. 2012; Vol. 7(1); e29458.",
    pdf: "assets/Publications (Year wise)/2011/Evaluation of Human Lacrimal Gland Cultures (IERG).pdf"
  },
  {
    id: 51,
    title: "High Dose Rate Interstitial Brachytherapy in Carcinoma Eyelid: Can it be a Primary treatment Modality?",
    journal: "Journal of Cancer Research and Therapeutics Oct-Dec 2011; Vol. 7(4); Pg. 498-499.",
    pdf: "assets/Publications (Year wise)/2011/High Dose Rate Interstitial Brachy.pdf"
  },
  {
    id: 52,
    title: "First Indian Experience with Shaped Beam Radiosurgery of Cranial and Spinal Lesions on Novalis-Tx Linear Accelerator with Exac Trac 6D Robotic Couch",
    journal: "10th International Stereotactic Radiosurgery Society Congress “Brain & Body Radiosurgery”, Paris 2011; Pg. 1166.",
    pdf: "assets/Publications (Year wise)/2011/Abstracts & Posters - ISRS 2011, Paris/First Indian Experience with Shaped Beam Radiosurgery (POSTER).pdf"
  },
  {
    id: 53,
    title: "Set-up Accuracy with Frameless Radiosurgery of Intracranial Lesions using Exac Trac 6-D Robotic Couch on Novali-Tx Linear Accelerator",
    journal: "10th International Stereotactic Radiosurgery Society Congress “Brain & Body Radiosurgery”, Paris 2011; Pg. 1147.",
    pdf: "assets/Publications (Year wise)/2011/Abstracts & Posters - ISRS 2011, Paris/Set-up Accuracy with Frameless Radiosurgery (POSTER).pdf"
  },
  {
    id: 54,
    title: "Comparison of Intensity Modulated Stereotactic Radiosurgery with Conventional Stereotactic Conformal Beam Radiosurgery in Vestibular Schwannomas",
    journal: "10th International Stereotactic Radiosurgery Society Congress “Brain & Body Radiosurgery”, Paris 2011; Pg. 1003.",
    pdf: "assets/Publications (Year wise)/2011/Abstracts & Posters - ISRS 2011, Paris/Comparison of Intensity Modulated Stereotactic Radiosurgery (POSTER).pdf"
  },
  {
    id: 55,
    title: "The New Radiation Technology and Techniques",
    journal: "Does it Matter in Gynec Cancer? – Annals of IMA Academy of Medical Specialities 2011; Pg. 49-53.",
    pdf: ""
  },
  {
    id: 56,
    title: "Evaluation of Human Lacrimal Gland Cultures for Secretory Function and Putative Stem Cells",
    journal: "Indian Eye Research Group (IEGR) 2011; Pg. 84.",
    pdf: "assets/Publications (Year wise)/2011/Evaluation of Human Lacrimal Gland Cultures (IERG).pdf"
  },
  {
    id: 57,
    title: "Orbital Retinoblastoma: Where do we go from here?",
    journal: "Journal of Cancer Research and Therapeutics May 2011; Vol. 7(1); Pg. 11-14.",
    pdf: "assets/Publications (Year wise)/2011/Orbital RB - where do we go from here.pdf"
  },
  {
    id: 58,
    title: "Cultivation and Characterization of Human Lacrimal Gland Cells for Potential Clinical Application",
    journal: "Indian Eye Research Group (IERG) 2010; Vol. 1; Pg. 80.",
    pdf: "assets/Publications (Year wise)/2010/Cultivation and Characterization of Human Lacrimal Gland.pdf"
  },
  {
    id: 59,
    title: "Ruthenium 106 Plaque Brachytherapy : Indications and Outcome in Ocular Tumors",
    journal: "Indian Eye Research Group (IERG) 2010; Vol. 1; Pg. 110-111.",
    pdf: "assets/Publications (Year wise)/2009/Ruthenium 106 plaque brachytherapy indications and outcomes in ocular tumors.pdf"
  },
  {
    id: 60,
    title: "Ruthenium 106 Plaque Brachytherapy : Indications and Outcome in Ocular Tumors",
    journal: "Shifting Paradigms in Head and Neck Oncology (IFHNOS) 2010; Vol. 1; Pg. 233",
    pdf: "assets/Publications (Year wise)/2009/Ruthenium 106 plaque brachytherapy indications and outcomes in ocular tumors.pdf"
  },
  {
    id: 61,
    title: "Orbital Retinoblastoma: Present status and future challenges",
    journal: "A review – Saudi Journal of Ophthalmology 2010, Vol. 25(2); Pg. 159-167.",
    pdf: "assets/Publications (Year wise)/2010/Orbital Retinoblastoma.pdf"
  },
  {
    id: 62,
    title: "Largest series of orbital Schwannoma: Clinical manifestations and outcomes (Abs)",
    journal: "Saudi Journal of Ophthalmology 2010; Vol. 24; Pg. 131.",
    pdf: "assets/Publications (Year wise)/2015/CFS - ISOO Presentations/Orbital Rhabdomyosarcoma- Clinical profile and outcome following multimodal management.pdf"
  },
  {
    id: 63,
    title: "Genotype-Phenotype and Clinical Correlation in Retinoblastoma (Abs)",
    journal: "Saudi Journal of Ophthalmology 2010; Vol. 24; Pg. 129.",
    pdf: "assets/Publications (Year wise)/2010/Genotype and phenotype correlation analysis in RB.pdf"
  },
  {
    id: 64,
    title: "RBI Gene Mutations in Ratinoblastoma and its clinical correlation",
    journal: "Saudi Journal of Ophthalmology May 2010; Vol. 24; Pg. 119-123.",
    pdf: "assets/Publications (Year wise)/2010/RB1 gene mutations in retinoblastoma and its clinical correlation.pdf"
  },
  {
    id: 65,
    title: "Ruthenium 106 Plaque Brachytherapy: Indications and Outcomes in Ocular Tumors (Abs)",
    journal: "Saudi Journal of Ophthalmology 2010; Vol. 24; Pg. 121.",
    pdf: "assets/Publications (Year wise)/2009/Ruthenium 106 plaque brachytherapy indications and outcomes in ocular tumors.pdf"
  },
  {
    id: 66,
    title: "A typical presentation of Ciliary body Medulloepithelioma (Abs)",
    journal: "Saudi Journal of Ophthalmology 2010; Vol. 24; Pg. 116.",
    pdf: ""
  },
  {
    id: 67,
    title: "Histopathology of Retinoblastoma after primary Chemotherapy (Abs)",
    journal: "Saudi Journal of Ophthalmology 2010; Vol. 24; Pg. 100.",
    pdf: "assets/Publications (Year wise)/2009/Histopathologic risk factors in Retinoblastoma in India.pdf"
  },
  {
    id: 68,
    title: "Evisceration in unsuspected Intraocular Tumors",
    journal: "Archives of Ophthalmology March 2010; Vol. 128(3); Pg. 372-379.",
    pdf: "assets/Publications (Year wise)/2010/Evisceration in unsuspected Intraocular Tumors.pdf"
  },
  {
    id: 69,
    title: "Histopathologic changes in Uveal melanoma after Ruthenium 106 Brachytherapy",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2) :S98",
    pdf: "assets/Publications (Year wise)/2004/Clinicopathologic findings in Choroidal Melanomas.pdf"
  },
  {
    id: 70,
    title: "Cultivation and characterization of Lacrimal and Salivary Gland Cells for Potential Clinical application",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2) :S98",
    pdf: "assets/Publications (Year wise)/2010/Cultivation and Characterization of Human Lacrimal Gland.pdf"
  },
  {
    id: 71,
    title: "Role of HPV, Cell cycle markers and epigenetic modifications at DNMT3L region in Ocular surface Squamous Neoplasia",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2) :S97",
    pdf: ""
  },
  {
    id: 72,
    title: "HPV for Cervical Cancer Screening: Is the era of the Molecular Pap Smear upon us?",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2) :S97",
    pdf: "assets/Publications (Year wise)/2010/Cervical Cancer Screening - Role of Serotyping.pdf"
  },
  {
    id: 73,
    title: "Ruthenium 106 Plaque Brachytherapy : Indications and outcome in Ocular Tumors",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2):S88-89.",
    pdf: "assets/Publications (Year wise)/2009/Ruthenium 106 plaque brachytherapy indications and outcomes in ocular tumors.pdf"
  },
  {
    id: 74,
    title: "Cervical Cancer Screening: Role of Serotyping of HPV as bridge of Cytopathology and Molecular typing?",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2):S75",
    pdf: "assets/Publications (Year wise)/2010/Cervical Cancer Screening - Role of Serotyping.pdf"
  },
  {
    id: 75,
    title: "Genotype and phenotype correlation analysis in Retinoblastoma",
    journal: "Journal of Cancer Research and Therapeutics 2009; Vol. 5(2):S75",
    pdf: "assets/Publications (Year wise)/2010/Genotype and phenotype correlation analysis in RB.pdf"
  },
  {
    id: 76,
    title: "Sebaceous Carcinoma of the Eyelid Metastasizing to the Lacrimal Sac after 5 years",
    journal: "Orbit (Amsterdam, Netherlands) October 2009; Vol. 28(5); Pg.309-312.",
    pdf: "assets/Publications (Year wise)/2009/Sebaceous Carcinoma of the Eyelid Metastasizing.mht"
  },
  {
    id: 77,
    title: "Histopathology of retinoblastoma after primary chemotherapy",
    journal: "Proceedings of the XIV International Congress of Ocular Oncology, Cambridge 2009; Pg. 296.",
    pdf: "assets/Publications (Year wise)/2009/Histopathologic risk factors in Retinoblastoma in India.pdf"
  },
  {
    id: 78,
    title: "Orbital Schwannoma: Clinical manifestations and outcomes",
    journal: "Proceedings of the XIV International Congress of Ocular Oncology, Cambridge 2009; Pg. 146.",
    pdf: "assets/Publications (Year wise)/2015/CFS - ISOO Presentations/Orbital Rhabdomyosarcoma- Clinical profile and outcome following multimodal management.pdf"
  },
  {
    id: 79,
    title: "Periocular Carboplatin Injection in the management of Retinoblastoma with Diffuse Vitreous Seeds",
    journal: "The International Society of Ocular Oncology ISOO Meetings, Cambridge 2009; Pg. 277.",
    pdf: "assets/Publications (Year wise)/2009/Periocular Carb Inj in the management of RB with Diffuse Vitreous Seeds - ICOO 2009 Abstracts (Pg. 277).pdf"
  },
  {
    id: 80,
    title: "A typical presentation of Ciliary body Medulloepithelioma",
    journal: "Proceedings of the XIV International Congress of Ocular Oncology, Cambridge 2009; Pg. 46.",
    pdf: ""
  },
  {
    id: 81,
    title: "Management of Ophthalmic Tumors",
    journal: "Role of Chemotherapy and Radiation therapy – Surgical Atlas of Orbital Diseases July 2009; Chapter. 25; Pg. 307-318.",
    pdf: "assets/Publications (Year wise)/2009/Atlas - Management of Oph. Tumors.pdf"
  },
  {
    id: 82,
    title: "Histopathologic Risk factors in Retinoblastoma in India",
    journal: "The American Journal of Surgical Pathology May 2009; Vol. 33(5); Pg. 788-798.",
    pdf: "assets/Publications (Year wise)/2009/Histopathologic risk factors in Retinoblastoma in India.pdf"
  },
  {
    id: 83,
    title: "Extramedullary Leukemia in Children presenting with Proptosis",
    journal: "Journal of Hematology & Oncology 2009; Vol. 2; Pg. 4.",
    pdf: "assets/Publications (Year wise)/2009/Extramedullary Leukemia in Children presenting with Proptosis.pdf"
  },
  {
    id: 84,
    title: "Retinoblastoma",
    journal: "Advances in Management – Apollo Medicine Sept. 2008; Vol. 5; No. 3; Pg. 183-189.",
    pdf: "assets/Publications (Year wise)/2010/Orbital Retinoblastoma.pdf"
  },
  {
    id: 85,
    title: "Proptosis as a Manifestation of Acute Myeloid Leukemia",
    journal: "Pediatric Clinics of North India 2008.",
    pdf: ""
  },
  {
    id: 86,
    title: "Clinical Profile and Treatment Outcome of Orbital Rhabdomyosarcoma",
    journal: "Experience of An Ocular Oncology Center – Best Paper of Orbit/Plastic Surgery Session – 1 in AIOC 2007 Proceedings, Pg. 417-418.",
    pdf: "assets/Publications (Year wise)/2018/Outcome of Multimodal Management of Orbital Rhabdomyosarcoma 06-06-2018.pdf"
  },
  {
    id: 87,
    title: "The Role of Subconjunctival Carboplatin in the Treatment of Advanced Cases of Retinoblastoma",
    journal: "A series of First Ten Patients – Best Paper of Pediatric Ophthalmology Session in AIOC 2007 Proceedings, Pg. 36-40.",
    pdf: "assets/Publications (Year wise)/2013/Evaluation of response to Carboplatin in putative Cancer Stem Cells of Retinoblastoma Y79 cell line.pdf"
  },
  {
    id: 88,
    title: "Metastasis to the Eye and Orbit from Renal Cell Carcinoma",
    journal: "A Report of Three Cases and Review of Literature - Survey of Ophthalmology Mar-Apr 2007; Vol. 52(2); Pg. 213-223.",
    pdf: "assets/Publications (Year wise)/2007/Metastasis to the Eye and Orbit from Renal Cell Carcinoma.pdf"
  },
  {
    id: 89,
    title: "Systemic Metastasis Following Hyphema Drainage in an Unsuspected Retinoblastoma",
    journal: "Journal of Pediatric Ophthalmology and Strabismus Mar-Apr 2007; Vol. 44; Pg. 120-123.",
    pdf: "assets/Publications (Year wise)/2007/Systemic Metastasis Following Hyphema Drainage.mht"
  },
  {
    id: 90,
    title: "Orbital Embryonal Rhabdomyosarcoma in association with Neurofibromatosis type 1",
    journal: "Ophthalmic Plastic and Reconstructive Surgery Mar-Apr 2007; Vol. 23(2); Pg. 147-148.",
    pdf: "assets/Publications (Year wise)/2007/Orbital Embryonal Rhabdomyosarcoma in Association.mht"
  },
  {
    id: 91,
    title: "Acute Respiratory Distress Syndrome due to Strongyloides Stercoralis in Non-Hodgkin's Lymphoma",
    journal: "The Indian Journal of Chest Diseases & Allied Sciences Jan-Mar 2006; Vol. 48(1); Pg. 67-69.",
    pdf: "assets/Publications (Year wise)/2006/Acute Respiratory Distress Syndrome.pdf"
  },
  {
    id: 92,
    title: "Ruthenium-106 Plaque Brachytherapy for the treatment of Diffuse Choroidal Haemangioma in Sturge-Weber Syndrome",
    journal: "Indian Journal of Ophthalmology Dec. 2005; Vol. 53(4); Pg. 274-275.",
    pdf: "assets/Publications (Year wise)/2009/Ruthenium 106 plaque brachytherapy indications and outcomes in ocular tumors.pdf"
  },
  {
    id: 93,
    title: "Neoadjuvant Chemotherapy in the Management of Sebaceous Gland Carcinoma of the Eyelid with Regional Lymph Node Metastasis",
    journal: "Ophthalmic Plastic and Reconstructive Surgery July 2005; Vol. 21(4); Pg. 307-309.",
    pdf: "assets/Publications (Year wise)/2005/Neoadjuvant Chemo in the Management of Sebaceous Gland Ca.mht"
  },
  {
    id: 94,
    title: "Concurrent Chemo Radiotherapy followed by Intraluminal Brachytherapy in non-metastatic carcinoma oesophagus",
    journal: "Journal of Clinical Oncology, ASCO Annual Meeting Proceedings, Vol. 22, 14S (July 15 Supplement), 2004 : 4201.",
    pdf: "assets/Publications (Year wise)/1997/Low dose rate Intraluminal Brachytherapy.doc"
  },
  {
    id: 95,
    title: "Clinicopathologic findings in Choroidal Melanomas after failed Transpupillary Thermotherapy",
    journal: "American Journal of Ophthalmology March 2004; Vol. 137(3); Pg. 594-595; author reply 595-596",
    pdf: "assets/Publications (Year wise)/2004/Clinicopathologic findings in Choroidal Melanomas.pdf"
  },
  {
    id: 96,
    title: "Histopathology of Retinoblastoma after Primary Chemotherapy",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 94.",
    pdf: "assets/Publications (Year wise)/2009/Histopathologic risk factors in Retinoblastoma in India.pdf"
  },
  {
    id: 97,
    title: "Retinoblastoma in Older Children",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad, India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 91.",
    pdf: "assets/Publications (Year wise)/2004/Retinoblastoma in Older Children.pdf"
  },
  {
    id: 98,
    title: "Adenoid Cystic Carcinoma of the Lacrimal Gland in Asian-Indian Population",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad, India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 84.",
    pdf: "assets/Publications (Year wise)/2013/Adenoid Cystic ca of the lacrimal gland - SNo. 12.pdf"
  },
  {
    id: 99,
    title: "Management of Orbital Retinoblastoma",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad, India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 51.",
    pdf: "assets/Publications (Year wise)/2010/Orbital Retinoblastoma.pdf"
  },
  {
    id: 100,
    title: "A Typical Presentation of Retinoblastoma",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad, India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 44.",
    pdf: "assets/Publications (Year wise)/2019/Preservation of Retinoblastoma Group E Eyes.pdf"
  },
  {
    id: 101,
    title: "A Case Report of Unknown Orbital Tumor",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad, India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 40.",
    pdf: "assets/Publications (Year wise)/2009/Atlas - Management of Oph. Tumors.pdf"
  },
  {
    id: 102,
    title: "Neoadjuvant Chemotherapy in the Management of Sebaceous Gland Carcinoma",
    journal: "Proceedings of the XI International Congress of Ocular Oncology, Hyderabad, India January 2004; ICOO Secretariat & L.V. Prasad Eye Institute; Pg. 38-39.",
    pdf: "assets/Publications (Year wise)/2005/Neoadjuvant Chemo in the Management of Sebaceous Gland Ca.mht"
  },
  {
    id: 103,
    title: "Thermochemotherapy in hereditary Retinoblastoma",
    journal: "British Journal of Ophthalmology Nov. 2003; Vol. 87(11); Pg. 1432.",
    pdf: "assets/Publications (Year wise)/2003/Thermochemotherapy in hereditary Retinoblastoma.pdf"
  },
  {
    id: 104,
    title: "Retinoblastoma",
    journal: "Asian Journal of Pediatric Practice 2003.",
    pdf: "assets/Publications (Year wise)/2010/Orbital Retinoblastoma.pdf"
  },
  {
    id: 105,
    title: "Retinoblastoma Management",
    journal: "Current Concepts – Chakshu 2003.",
    pdf: "assets/Publications (Year wise)/2004/Retinoblastoma in Older Children.pdf"
  },
  {
    id: 106,
    title: "Current Management of Retinoblastoma",
    journal: "Eye Care 2003; Pg. 15-19.",
    pdf: "assets/Publications (Year wise)/2010/Orbital Retinoblastoma.pdf"
  },
  {
    id: 107,
    title: "Ultrasound guided Conformal Brachytherapy in Prostate Cancer",
    journal: "Journal of Radiotherapy and Oncology, Vol. 58(1) Pg. S109-S110 Proceedings of ISRO – ICRO 2001; 6th International Congress of Radiation Oncology, 30th Jan to 2nd Feb 2001 at Melbourne, Australia.",
    pdf: "assets/Publications (Year wise)/2001/Ultrasound guided Conformal Brachytherapy in Prostate Ca..pdf"
  },
  {
    id: 108,
    title: "Low dose rate Intraluminal Brachytherapy following Concurrent Chemo-radiation in Non-metastatic Carcinoma Oesophagus",
    journal: "Journal of Clinical Radiotherapy and Oncology Jul-Dec 1997; Vol. 12(1-2); Pg. 32-35.",
    pdf: "assets/Publications (Year wise)/1997/Low dose rate Intraluminal Brachytherapy.doc"
  },
  {
    id: 109,
    title: "A prospective randomized study of the role of combination of Interferon and Radiation therapy in the management of locally advanced Carcinoma Cervix (Stage III B)",
    journal: "A Preliminary Report – Journal of Clinical Radiotherapy and Oncology Jul-Dec 1997; Vol. 12(1-2); Pg. 28-31.",
    pdf: ""
  },
  {
    id: 110,
    title: "An experience with low dose rate Intraluminal Brachytherapy following Concurrent Chemo radiation in Non-metastatic Carcinoma Oesophagus",
    journal: "Journal of Clinical Oncology 1997; Vol. 43(2).",
    pdf: "assets/Publications (Year wise)/1997/Low dose rate Intraluminal Brachytherapy.doc"
  },
  {
    id: 111,
    title: "A prospective randomized study of the role of combination of Interferon and Radiation therapy in the management of locally advanced Carcinoma Cervix (Stage III B)",
    journal: "A Preliminary Report – Journal of Clinical Radiotherapy & Oncology 1997; Vol. 43(2).",
    pdf: ""
  },
  {
    id: 112,
    title: "Assessment of Pain in Cancer Patients",
    journal: "Journal of Clinical Radiotherapy & Oncology March 1992; Vol. 7(1); Pg. 4-8.",
    pdf: "assets/Publications (Year wise)/1992/Assessment of pain in cancer patients (1992).htm"
  },
  {
    id: 113,
    title: "Role of HBI in Symptomatic Multiple Bone Metastases",
    journal: "M.D. Thesis A.P. University of Health Sciences, A.P. Feb 1992.",
    pdf: ""
  },
];

const ITEMS_PER_PAGE = 10;

export default function PublicationsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(publications.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = publications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen">
      <h1
        className="text-4xl font-extrabold text-center mb-12 select-none"
        style={{ color: "#9B528F" }}
      >
        Cancer Publications
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {currentItems.map((pub) => (
          <div
            key={pub.id}
            className="bg-white rounded-xl border p-6 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg"
            style={{
              borderColor: "#9B528F",
              boxShadow: "0 4px 6px rgba(155, 82, 143, 0.1)",
            }}
          >
            <div>
              <h2
                className="text-lg font-semibold mb-2 leading-snug"
                style={{ color: "#9B528F" }}
              >
                {pub.title}
              </h2>
              <p className="text-gray-600 text-sm whitespace-pre-line">{pub.journal}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <a
                href={pub.pdf}
                download
                className="inline-flex items-center space-x-2 px-4 py-2 text-white font-medium rounded-lg shadow-sm select-none transition-colors"
                style={{
                  backgroundColor: "#9B528F",
                  boxShadow: "0 2px 6px rgba(155, 82, 143, 0.5)",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#7A3E72")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#9B528F")}
                aria-label={`Download PDF for: ${pub.title}`}
              >
                <FaFilePdf className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="flex justify-center items-center space-x-2 mt-12" aria-label="Pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-semibold ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#9B528F] text-white hover:bg-[#7A3E72]"
          } transition-colors`}
          aria-disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            aria-current={pageNum === currentPage ? "page" : undefined}
            className={`px-4 py-2 rounded-md font-semibold ${
              pageNum === currentPage
                ? "bg-[#9B528F] text-white shadow-lg"
                : "bg-white text-[#9B528F] hover:bg-[#e9dff4]"
            } transition-colors`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md font-semibold ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#9B528F] text-white hover:bg-[#7A3E72]"
          } transition-colors`}
          aria-disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          Next
        </button>
      </nav>
    </div>
  );
}

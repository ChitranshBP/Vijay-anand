import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiUsers } = FiIcons;

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const awards = [
  {
    image: "assets/awards/ISOO-2024-Oration.png",
    title: "Clinical Pioneer Award",
    year: "2025",
    description: "Awarded on Apollo Founder's Day for outstanding patient care and dedication to Apollo mission.",
    category: "Clinical Excellence"
  },
  {
    image: "assets/awards/aerocon-2024.png",
    title: "Gold Medal – Best Scientific Paper",
    year: "2024",
    description: "AROICON 2024 for prospective study on patient-reported toxicities & QOL in SBRT Prostate.",
    category: "Research Excellence"
  },
  {
    image: "assets/awards/AROICON-2024-Gold-Medal – Best-Scientific-Paper.png",
    title: "ISOO 2024 Oration",
    year: "2024",
    description: "International Society of Ocular Oncology, Goa for contributions to ocular oncology.",
    category: "Ophthalmology"
  },
  {
    image: "assets/awards/aerocon-2022.png",
    title: "Gold Medal – Best Scientific Paper",
    year: "2022",
    description: "AROICON 2022 for feasibility study on extreme hypofractionation in post-operative breast cancer.",
    category: "Research Excellence"
  },
  {
    image: "assets/awards/dr-b.d-gupta.png",
    title: "Dr. B. D. Gupta Memorial Oration Award",
    year: "2019",
    description: "41st AROICON, Ahmedabad for outstanding contribution in Radiation Oncology.",
    category: "Oncology Excellence"
  },
  {
    image: "assets/awards/Lions-Club-International-Excellence-Award.png",
    title: "Excellence Award",
    year: "2019",
    description: "Lions Club International in association with Apollo Hospitals for extraordinary service in Oncology.",
    category: "Medical Excellence"
  }];


  const certifications = [
  {
    name: "Stereotactic Radiosurgery Fellowship",
    year: "2010",
    location: "Klinikum Frankfurt (Oder) GmbH, Frankfurt, Germany",
    image: "assets/journey/Stereotactic-Radiosurgery.png"
  },
  {
    name: "Ocular Oncology Fellowship",
    year: "2003",
    location: "Will's Eye Hospital, Philadelphia, USA",
    image: "assets/journey/Ocular-Oncology.png"
  },
  {
    name: "Pediatric Oncology Fellowship",
    year: "2003",
    location: "Children's Hospital of Philadelphia, USA",
    image: "assets/journey/Pediatric-Oncology.png"
  },
  {
    name: "Head & Neck Oncology Fellowship",
    year: "1998",
    location: "Peter McCallum Cancer Institute, Melbourne, Australia",
    image: "assets/journey/Head & Neck-Oncology.png"
  },
  {
    name: "Nargis Dutt Memorial Cancer Foundation Fellowship",
    year: "1995",
    location: "New York Hospital, Medical Centre of Queens, NY, USA",
    image: "assets/journey/The-Nargis-Dutt-Memorial.png"
  },
  {
    name: "Clinical Oncology Fellowship",
    year: "1992",
    location: "Meyerstein Institute of Clinical Oncology, Middlesex Hospital, London",
    image: "assets/journey/The-Clinical-Oncology.png"
  }];


  const memberships = [
  {
    title: "Advisory Committee Member",
    organization: "Global Access to Cancer Care Foundation (GACCF), USA"
  },
  {
    title: "Member",
    organization: "International American Brachytherapy Society (ABS)"
  },
  {
    title: "Full Member",
    organization: "American Society of Clinical Oncology (ASCO)"
  },
  {
    title: "Full Member",
    organization: "American Society for Radiation Oncology (ASTRO)"
  },
  {
    title: "Permanent Member",
    organization: "European Society of Medical Oncology (ESMO)"
  },
  {
    title: "Permanent Member",
    organization: "Union for International Cancer Control (UICC), Geneva"
  }];


  return (
    <section id="awards" className="py-14 medical-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

  <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
    Awards & Recognition
  </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
    Dr. Vijay Anand Reddy's commitment to excellence has been recognized through 
    numerous prestigious awards and international certifications.
  </p>


        </div>

        {/* Awards Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {awards.map((award, index) =>
          <div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg card-hover group overflow-hidden">

      <div className="h-56 bg-gray-200 overflow-hidden">
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-medical-purple/10 text-medical-purple px-3 py-1 rounded-full text-sm font-semibold">
            {award.year}
          </span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) =>
              <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-medical-dark mb-3">{award.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">{award.description}</p>

        <div className="pt-4 border-t border-gray-100">
          <span className="text-sm text-medical-blue font-medium">{award.category}</span>
        </div>
      </div>
    </div>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center mb-16">
  <a
            href="/awards"
            className="inline-block px-6 py-2 border border-medical-blue text-medical-blue rounded-full font-semibold hover:bg-medical-blue hover:text-white transition-all duration-200">

    View More
  </a>
        </div>

        {/* fellowships Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">

  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-medical-dark mb-4">
     Fellowships
    </h3>
    <p className="text-gray-600 text-lg">
      Global recognition through prestigious international medical training programs
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {certifications.map((cert, index) =>
            <div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-gray-50 border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 group">

        <div className="h-40 bg-gray-200 overflow-hidden">
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="text-medical-blue font-bold text-xs mb-2">{cert.year}</div>
          <div className="font-semibold text-medical-dark text-sm mb-2">{cert.name}</div>
          <div className="text-gray-600 text-xs">{cert.location}</div>
        </div>
      </div>
            )}
  </div>

  {/* View More Button */}
  <div className="mt-10 text-center">
    <a
              href="/journey"
              className="inline-block px-6 py-2 border border-medical-blue text-medical-blue rounded-full font-semibold hover:bg-medical-blue hover:text-white transition-all duration-200">

      View More
    </a>
  </div>
        </div>


                    {/* Memberships Section */}

        <div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 mt-10 md:p-12 rounded-2xl shadow-lg">

  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-medical-dark mb-4">
      Memberships
    </h3>
    <p className="text-gray-600 text-lg">
      Active affiliations with leading international oncology societies and committees
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {memberships.map((member, index) =>
            <div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-medical-light rounded-xl hover:bg-medical-blue/5 transition-all duration-200">

        <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <SafeIcon icon={FiUsers} className="w-6 h-6 text-medical-blue" />
        </div>
        <div>
          <div className="font-semibold text-medical-dark text-sm mb-1">{member.title}</div>
          <div className="text-gray-600 text-xs">{member.organization}</div>
        </div>
      </div>
            )}
  </div>

  {/* View More Button */}
  <div className="mt-10 text-center">
    <a
              href="/professional-association"
              className="inline-block px-6 py-2 border border-medical-blue text-medical-blue rounded-full font-semibold hover:bg-medical-blue hover:text-white transition-all duration-200">

      View More
    </a>
  </div>
        </div>

        {/* Featured Achievement */}
        {/* <div
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="mt-16"
                     >
                      <div className="bg-gradient-to-r from-medical-blue to-medical-purple p-8 md:p-12 rounded-2xl text-white text-center">
                        <div className="max-w-4xl mx-auto">
                          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <SafeIcon icon={FiBookOpen} className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4">
                            Author of "I Am A Survivor"
                          </h3>
                          <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                            Dr. Reddy's inspiring book features 108 real stories of cancer survivors, 
                            offering hope and guidance to patients and families facing cancer diagnosis. 
                            This collection has become a beacon of hope for the cancer community.
                          </p>
                          <button className="bg-white text-medical-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg">
                            Read Survivor Stories
                          </button>
                        </div>
                      </div>
                     </div> */}
      </div>
    </section>);

};

export default Awards;
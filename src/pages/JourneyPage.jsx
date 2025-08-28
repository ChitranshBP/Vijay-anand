import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import { FiCompass, FiBook, FiActivity, FiUsers, FiAward, FiHeart } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const timelineItems = [
  {
    icon: FiCompass,
    title: "Early Life",
    content:
      "Born in the humble hamlet of Palamuru, Mehboobnagar, Dr. Vijay Anand Reddy excelled in studies from a young age. Despite hardships, he topped his National Common and SSC exams, scored a perfect 100 in Mathematics, and was a school leader in social values as well as academics. Initially attracted to engineering, he pursued medicine after his father’s encouragement and was active in student leadership and social initiatives, even fundraising during national crises."
  },
  {
    icon: FiBook,
    title: "Medical Education",
    content:
      "Dr. Reddy studied MBBS at Osmania Medical College, aided by scholarships and actively involved in anti-ragging, student leadership, and relief work. Upon graduation, he served as the first Medical Officer at Bhootpur Primary Health Centre, marking the start of his medical service and care for the underprivileged."
  },
  {
    icon: FiActivity,
    title: "Oncology Calling",
    content:
      "Inspired by his uncle, a government oncologist, Dr. Reddy joined the MD (Radiation Therapy) program at Osmania, overcoming concerns about the field’s challenges. He later earned a Clinical Oncology fellowship in London but returned to India after his father’s passing, choosing to serve his homeland rather than take an overseas job."
  }
];

const degrees = [
  { title: "M.B.B.S.", institution: "Osmania Medical College, Hyderabad", year: 1982 },
  { title: "M.D. (Radiation Therapy)", institution: "Osmania Medical College, Hyderabad", year: 1992 },
  { title: "D.N.B. (Oncology)", institution: "—", year: 1993 },
  { title: "ESMO Medical Oncology Board", institution: "Europe", year: 2005 },
  { title: "ESMO Board Recertification", institution: "Europe", year: 2010 }
];

const fellowships = [
  {
    title: "Stereotactic Radiosurgery Fellowship",
    location: "Klinikum Frankfurt (Oder) GmbH, Frankfurt (Oder), Germany",
    supervisor: "Dr. Reinhard E. Wurm",
    month: "March 2010",
    image: "assets/journey/Stereotactic-Radiosurgery.png"
  },
  {
    title: "Ocular Oncology Fellowship",
    location: "Will’s Eye Hospital, Philadelphia, USA",
    supervisor: "Dr. Mr & Mrs. Shields",
    month: "May – June 2003",
    image: "assets/journey/Ocular-Oncology.png"
  },
  {
    title: "Pediatric Oncology Fellowship",
    location: "Children’s Hospital of Philadelphia, USA",
    supervisor: "Dr. Anna Meadows",
    month: "May – June 2003",
    image: "assets/journey/Pediatric-Oncology.png"
  },
  {
    title: "Head & Neck Oncology Fellowship",
    location: "Peter McCallum Cancer Institute, Melbourne, Australia",
    supervisor: "Dr. Lester Peters",
    month: "July – August 1998",
    image: "assets/journey/Head & Neck-Oncology.png"
  },
  {
    title: "Hyperthermia Fellowship",
    location: "New York Medical College, Valhalla, NY, USA",
    supervisor: "Dr. Chitty R. Moorthy",
    month: "1995",
    image: "assets/journey/Hyperthermia-Fellowship.png"
  },
  {
    title: "Nargis Dutt Memorial Cancer Foundation Fellowship",
    location: "New York Hospital, Medical Centre of Queens, NY, USA",
    supervisor: "Dr. Dattetreyudu Nori",
    month: "May – July 1995",
    image: "assets/journey/The-Nargis-Dutt-Memorial.png"
  },
  {
    title: "Head & Neck Brachytherapy Observership",
    location: "Memorial Sloan Kettering Cancer Centre, New York, USA",
    supervisor: "Dr. Louise Harrison",
    month: "June 1995",
    image: "assets/journey/Head & Neck-Brachytherapy.png"
  },
  {
    title: "Clinical Oncology Fellowship",
    location: "Meyerstein Institute of Clinical Oncology, Middlesex Hospital, London",
    supervisor: "—",
    month: "July – Sept 1992",
    image: "assets/journey/The-Clinical-Oncology.png"
  },
  // No images for the following
  {
    title: "Clinical Oncology Observership",
    location: "Christie Hospital, Manchester, UK",
    supervisor: "—",
    month: "Sept 1992"
  },
  {
    title: "Clinical Oncology Fellowship",
    location: "Adyar Cancer Institute, Chennai, India",
    supervisor: "—",
    month: "Jan 1990"
  },
  {
    title: "Medical Oncology Fellowship",
    location: "Nizam Institute of Medical Sciences, Hyderabad, India",
    supervisor: "—",
    month: "Sept 1990"
  },
  {
    title: "Radiation Oncology Fellowship",
    location: "Tata Memorial Hospital, Bombay, India",
    supervisor: "—",
    month: "March 1990"
  }
];


const JourneyPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [eduRef, eduInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [fellowsRef, fellowsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [givebackRef, givebackInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 bg-medical-blue/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <SafeIcon icon={FiCompass} className="w-10 h-10 text-medical-blue mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">A Journey of Dedication and Excellence</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From the fields of Palamuru to global centers of cancer innovation, Dr. Vijay Anand Reddy’s story is one of grit, compassion and trailblazing achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline of Early Life, Medical Education, Oncology Calling */}
<section ref={timelineRef} className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Image */}
    <motion.div
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate={timelineInView ? "visible" : "hidden"}
    >
      <img
        src="assets/journey/Early-Life.png"
        alt="Dr. Vijay Anand Reddy's Journey"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>

    {/* Right Timeline */}
    <motion.div
      className="relative space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate={timelineInView ? "visible" : "hidden"}
    >
      {/* Vertical line down the side */}
      <div className="absolute top-0 bottom-0 left-6 w-1 bg-medical-blue/30 rounded-full" />

      {timelineItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative flex gap-6 pl-16"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.2 }}
        >
          {/* Circle Marker */}
          <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center 
                         rounded-full bg-medical-blue text-white shadow-lg">
            <SafeIcon icon={item.icon} className="w-6 h-6" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-medical-dark mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {item.content}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Degrees */}
      <section ref={eduRef} className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={eduInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl font-bold text-medical-dark mb-4 flex items-center gap-3">
              <SafeIcon icon={FiBook} className="w-6 h-6 text-medical-blue" />
              Degrees
            </h2>
            <ul className="grid grid-cols-1 gap-3">
              {degrees.map((d, i) => (
                <li key={i} className="bg-white rounded border px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-semibold text-medical-dark">{d.title}</span>
                  <span className="text-gray-700 text-sm sm:text-base">{d.institution}</span>
                  <span className="text-medical-blue text-xs font-medium">{d.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Fellowships */}
      <section ref={fellowsRef} className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={fellowsInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl font-bold text-medical-dark mb-7 flex items-center gap-3">
              <SafeIcon icon={FiAward} className="w-6 h-6 text-medical-blue" />
              Fellowships & International Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fellowships.map((f, i) => (
                <div key={i} className="bg-gray-50 border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  {f.image && (
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col p-4">
                    <span className="text-medical-blue text-xs mb-1">{f.month}</span>
                    <h3 className="text-lg font-semibold text-medical-dark mb-1">{f.title}</h3>
                    <span className="text-gray-700 text-sm">{f.location}</span>
                    {f.supervisor && <span className="text-gray-500 text-xs mt-1">Mentor: {f.supervisor}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Giving Back */}
      <section ref={givebackRef} className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={givebackInView ? "visible" : "hidden"}
          >
            <SafeIcon icon={FiHeart} className="w-10 h-10 text-medical-blue mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-medical-dark mb-2">Giving Back</h2>
            <p className="text-gray-800 text-lg">
              Dr. Reddy’s career reflects a lifelong commitment to service over self. His work began with offering health care in underserved areas—often spending his own resources to improve local facilities—and continues with major philanthropic initiatives today. For him, medicine has always meant giving back to society.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JourneyPage;

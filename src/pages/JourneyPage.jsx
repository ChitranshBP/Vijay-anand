import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiChevronRight, FiAward, FiGlobe, FiHeart, FiBookOpen, FiUsers, FiPhone } = FiIcons;

const JourneyPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fellowship data with images
  const fellowships = [
  {
    title: "SRS Fellowship (2010)",
    description: "Klinikum Frankfurt, Germany - March 2010",
    image: "https://images.unsplash.com/photo-1676286168358-9b4ce60384d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Ocular Oncology (2003)",
    description: "Wills Eye Hospital, Philadelphia - May-June 2003",
    image: "https://images.unsplash.com/photo-1676288507025-e0f001be9926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Pediatric Oncology (2003)",
    description: "Children's Hospital, Philadelphia - May-June 2003",
    image: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Head & Neck Oncology (1998)",
    description: "Peter MacCallum Institute, Melbourne - July-August 1998",
    image: "https://images.unsplash.com/photo-1645610755512-486b51d86f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Hyperthermia Fellowship (1995)",
    description: "New York Medical College, 1995",
    image: "https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHw1fHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Nargis Dutt Fellowship (Mid-1990s)",
    description: "Brachytherapy Observership, New York",
    image: "https://images.unsplash.com/photo-1600344247837-155758c193bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHw2fHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Clinical Oncology Fellowship (1992)",
    description: "Middlesex Hospital, London",
    image: "https://images.unsplash.com/photo-1642345999308-a9226c78b9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHw3fHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  },
  {
    title: "Christie Hospital Observership (1992)",
    description: "Manchester, United Kingdom",
    image: "https://images.unsplash.com/photo-1654138641985-fe5a85c0af60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHw4fHxtZWRpY2FsJTIwZmVsbG93c2hpcCUyMGRvY3RvcnMlMjB3b3JraW5nJTIwaW4lMjBob3NwaXRhbHxlbnwwfHx8fDE3NTU3NjIzNTV8MA&ixlib=rb-4.1.0&q=80&w=200"
  }];


  const remainingFellowships = [
  {
    title: "Early Fellowships (1990)",
    description: "Chennai & Tata Memorial Hospital"
  }];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-medical-blue hover:text-medical-dark transition-colors">
              Home
            </a>
            <SafeIcon icon={FiChevronRight} className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Know the Doctor</span>
            <SafeIcon icon={FiChevronRight} className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Journey</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner/Opening Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-br from-medical-blue via-blue-600 to-blue-800 text-white py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">

            The Journey of Dr. Vijay Anand Reddy
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">

            From Humble Beginnings to Global Oncology Leader
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">

            A story of personal drive, academic brilliance, and unwavering commitment to serving 
            humanity through medicine. Discover how a young boy from rural India became one of 
            the world's most respected oncologists, touching thousands of lives across continents.
          </motion.p>
        </div>
      </motion.section>

      {/* Early Life Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-medical-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-medical-dark">
                  Humble Beginnings
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Born and raised in the rural town of Palamuru, Mehboobnagar district, 
                  Dr. Vijay Anand Reddy's journey began in an environment where education 
                  was both a privilege and a pathway to transformation.
                </p>
                
                <p>
                  His exceptional academic brilliance shone early when he received a rare 
                  double promotion to 7th grade, a testament to his extraordinary intellectual 
                  capabilities. This was just the beginning of a series of academic achievements 
                  that would define his educational journey.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-medical-dark mb-3">Early Academic Excellence</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <SafeIcon icon={FiAward} className="w-5 h-5 text-medical-blue mr-2 mt-0.5" />
                      <span>Double promotion to 7th grade for exceptional performance</span>
                    </li>
                    <li className="flex items-start">
                      <SafeIcon icon={FiAward} className="w-5 h-5 text-medical-blue mr-2 mt-0.5" />
                      <span>Topped the National Common Entrance Examination</span>
                    </li>
                    <li className="flex items-start">
                      <SafeIcon icon={FiAward} className="w-5 h-5 text-medical-blue mr-2 mt-0.5" />
                      <span>Achieved 100% marks in Mathematics in S.S.C.</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  Beyond academics, young Vijay demonstrated remarkable social awareness and 
                  community involvement. He actively participated in sanitation drives and 
                  medical camps, showing an early inclination toward public health and 
                  community service.
                </p>
                
                <p className="text-medical-blue font-medium">
                  It was during these formative years, witnessing the healthcare challenges 
                  in rural communities, that his inspiration to pursue medicine was born—a 
                  calling that would eventually touch countless lives worldwide.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-medical-blue to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Foundation of Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiBookOpen} className="w-6 h-6 mr-3" />
                    <span>Academic Brilliance from Early Age</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 mr-3" />
                    <span>Community Service Mindset</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiHeart} className="w-6 h-6 mr-3" />
                    <span>Compassion for Healthcare</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Medical Education & Early Leadership */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-medical-blue mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark">
                Medical Education & Early Leadership
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-medical-dark mb-6">MBBS Journey at Osmania Medical College</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Reddy's medical education began at the prestigious Osmania Medical College, 
                  where his academic excellence earned him multiple recognitions and financial support.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-medical-dark mb-3">Academic Achievements & Support</h4>
                  <ul className="space-y-2">
                    <li>• Merit Scholarship recipient</li>
                    <li>• State Aid beneficiary</li>
                    <li>• Nizam's Trust assistance</li>
                  </ul>
                </div>

                <p>
                  His leadership qualities emerged early during his medical school years, where he 
                  served as Joint Secretary, demonstrating his ability to balance academic excellence 
                  with social responsibility.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-medical-dark mb-6">Leadership & Social Impact</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Reddy's commitment to social causes was evident throughout his medical education. 
                  He led several impactful initiatives that showcased his dedication to community welfare.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-medical-blue mb-2">Anti-Ragging Campaign</h5>
                    <p className="text-sm">Led a successful campaign against ragging in medical college, 
                    creating a safer environment for junior students.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-medical-blue mb-2">Post-1971 War Contributions</h5>
                    <p className="text-sm">Actively participated in relief efforts following the 1971 war, 
                    providing medical assistance to affected communities.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-medical-blue mb-2">Flood Relief Efforts</h5>
                    <p className="text-sm">Organized and participated in flood relief operations, 
                    demonstrating early commitment to disaster response.</p>
                  </div>
                </div>

                <div className="bg-medical-blue text-white p-4 rounded-lg mt-6">
                  <h5 className="font-semibold mb-2">First Professional Role</h5>
                  <p className="text-sm">Medical Officer at Bhootpur Primary Health Centre - 
                  where his journey in healthcare service officially began.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Calling in Oncology */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-medical-blue mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark">
                The Calling in Oncology
              </h2>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-medical-dark mb-6">Uncle's Inspiration</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                The pivotal moment in Dr. Reddy's career came through the inspiration of his uncle, 
                who recognized the critical need for specialized cancer care in India. This guidance 
                would prove to be life-changing, directing him toward a field where his compassion 
                and medical expertise could make the greatest impact.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-medical-dark mb-4">The Difficult Choice</h4>
                <p className="text-gray-700 leading-relaxed">
                  Despite the challenges and limited opportunities in oncology at the time, 
                  Dr. Reddy chose to pursue M.D. in Radiation Therapy. This decision required 
                  immense courage, as oncology was still an emerging field in India with 
                  uncertain career prospects.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-medical-dark mb-4">Global vs. Home</h4>
                <p className="text-gray-700 leading-relaxed">
                  Throughout his training, Dr. Reddy faced numerous opportunities to establish 
                  his career abroad. However, his commitment to serving his homeland and its 
                  people remained unwavering, reflecting his deep-rooted values and sense of duty.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-red-800 mb-4">Family Crisis & Life-Changing Decision</h4>
              <p className="text-gray-700 leading-relaxed">
                A family crisis became the defining moment that solidified Dr. Reddy's decision 
                to return home and dedicate his career to serving cancer patients in India. 
                This personal sacrifice demonstrated his character and commitment to family values, 
                ultimately benefiting thousands of patients who would later receive his care.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Academic Qualifications & Global Training */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiGlobe} className="w-8 h-8 text-medical-blue mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark">
                Academic Qualifications & Global Training
              </h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Degrees Section */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-medical-blue mr-3" />
                  Academic Degrees
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-medical-blue pl-4">
                    <h4 className="font-bold text-lg">MBBS (1982)</h4>
                    <p className="text-gray-600">Osmania Medical College, Hyderabad</p>
                  </div>
                  
                  <div className="border-l-4 border-medical-blue pl-4">
                    <h4 className="font-bold text-lg">M.D. Radiation Therapy (1992)</h4>
                    <p className="text-gray-600">Specialized training in Radiation Oncology</p>
                  </div>
                  
                  <div className="border-l-4 border-medical-blue pl-4">
                    <h4 className="font-bold text-lg">D.N.B. Oncology (1993)</h4>
                    <p className="text-gray-600">Diplomate of National Board</p>
                  </div>
                  
                  <div className="border-l-4 border-medical-blue pl-4">
                    <h4 className="font-bold text-lg">ESMO Certifications</h4>
                    <p className="text-gray-600">Certified 2005, Recertified 2010</p>
                    <p className="text-gray-500 text-sm">European Society for Medical Oncology</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fellowships Section */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-medical-dark mb-6 flex items-center">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-medical-blue mr-3" />
                  Fellowships & Observerships
                </h3>
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {/* First 8 Fellowships with Images */}
                  {fellowships.map((fellowship, index) =>
                  <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img
                        src={fellowship.image}
                        alt={fellowship.title}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm" />

                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-medical-blue text-sm mb-1">{fellowship.title}</h4>
                        <p className="text-xs text-gray-700">{fellowship.description}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Remaining Fellowships without Images */}
                  {remainingFellowships.map((fellowship, index) =>
                  <div key={index + fellowships.length} className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-medical-blue">{fellowship.title}</h4>
                      <p className="text-sm text-gray-700">{fellowship.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Giving Back & Legacy */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiUsers} className="w-8 h-8 text-medical-blue mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-medical-dark">
                Giving Back & Legacy
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-medical-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-4">Healthcare Enhancement</h3>
              <p className="text-gray-700">
                Self-funded healthcare infrastructure improvements in Bhootpur, 
                ensuring better medical facilities for rural communities.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-medical-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-4">Philanthropic Initiatives</h3>
              <p className="text-gray-700">
                Ongoing community health programs, medical camps, and educational 
                initiatives that continue to benefit underserved populations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-medical-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiAward} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-4">Community Advocate</h3>
              <p className="text-gray-700">
                Recognized as both a leading oncologist and dedicated community 
                advocate, bridging the gap between advanced medicine and rural healthcare.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-medical-blue to-blue-700 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">A Legacy of Excellence and Compassion</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Dr. Vijay Anand Reddy's journey from a small town in Mehboobnagar to becoming 
              a globally recognized oncologist exemplifies how dedication, education, and 
              unwavering commitment to service can transform not just individual lives, 
              but entire communities. His story continues to inspire the next generation 
              of medical professionals to pursue excellence while never forgetting their 
              roots and responsibilities to society.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer/Call-to-Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-6">
              Explore More About Dr. Vijay Anand Reddy
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Continue discovering the remarkable achievements, expertise, and contributions 
              of Dr. Vijay Anand Reddy in the field of oncology and beyond.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={fadeInUp}>
              <a href="#expertise" className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <SafeIcon icon={FiBookOpen} className="w-12 h-12 text-medical-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-medical-dark mb-2">Expertise</h3>
                <p className="text-gray-600">Discover his specialized knowledge and treatment approaches</p>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a href="#achievements" className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <SafeIcon icon={FiAward} className="w-12 h-12 text-medical-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-medical-dark mb-2">Achievements</h3>
                <p className="text-gray-600">Explore his awards, recognitions, and milestones</p>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a href="#publications" className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <SafeIcon icon={FiGlobe} className="w-12 h-12 text-medical-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-medical-dark mb-2">Publications</h3>
                <p className="text-gray-600">Read his research contributions and scientific papers</p>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-medical-blue text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Speak with a Specialist</h3>
            <p className="text-lg mb-6 text-blue-100">
              Ready to begin your journey toward better health? Connect with Dr. Vijay Anand Reddy 
              and his expert team for personalized cancer care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+919676720002"
                className="bg-white text-medical-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center">

                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                +91-9676720002
              </a>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                Book Appointment
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>);

};

export default JourneyPage;
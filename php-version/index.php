<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Vijay Anand Reddy - Leading Oncologist in Hyderabad | Apollo Cancer Centre</title>
    <meta name="description" content="Dr. Vijay Anand Reddy, MD Radiation Oncology, Director at Apollo Cancer Centres Hyderabad. 30+ years experience in cancer treatment. Book consultation today.">
    
    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                          50: '#eff6ff',
                          100: '#dbeafe',
                          500: '#3b82f6',
                          600: '#2563eb',
                          700: '#1d4ed8',
                          900: '#1e3a8a'
                        },
                        purple: {
                          50: '#f5f3ff',
                          100: '#ede9fe',
                          500: '#8b5cf6',
                          600: '#7c3aed',
                          700: '#6d28d9'
                        },
                        medical: {
                          blue: '#9B528F',
                          purple: '#8B5CF6',
                          light: '#F8FAFC',
                          dark: '#1E293B'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        inter: ['Inter', 'sans-serif']
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.6s ease-in-out',
                        'slide-up': 'slideUp 0.8s ease-out',
                        'float': 'float 6s ease-in-out infinite'
                    },
                    keyframes: {
                        fadeIn: {
                          '0%': { opacity: '0' },
                          '100%': { opacity: '1' }
                        },
                        slideUp: {
                          '0%': { transform: 'translateY(30px)', opacity: '0' },
                          '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        float: {
                          '0%, 100%': { transform: 'translateY(0px)' },
                          '50%': { transform: 'translateY(-10px)' }
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        body { font-family: 'Inter', sans-serif; }
        .medical-gradient {
            background: linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%);
        }
        .text-shadow {
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        /* Reveal animations utility classes */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-white text-gray-800">

    <?php include 'navbar.php'; ?>

    <!-- HERO SECTION -->
    <section id="home" class="relative min-h-[700px] pt-44 pb-5 overflow-hidden">
        <div class="absolute inset-0 medical-gradient"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                
                <!-- Content -->
                <div class="text-center lg:text-left reveal">
                    <div class="inline-flex items-center bg-medical-blue/10 text-medical-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <i data-feather="award" class="w-4 h-4 mr-2"></i>
                        30+ Years of Excellence in Oncology
                    </div>

                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight text-shadow">
                        Leading Cancer Care with <span class="text-medical-blue">Compassion</span>
                    </h1>

                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        Dr. Vijay Anand Reddy, Senior Oncologist , Director at Apollo Cancer Centres, Hyderabad, 
                        pioneering advanced cancer treatments with personalized care for over three decades.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                        <a href="#contact" class="inline-block bg-medical-blue text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center flex items-center justify-center">
                            <i data-feather="calendar" class="w-5 h-5 mr-2"></i>
                            Book Consultation
                        </a>
                        <a href="#about" class="inline-block border-2 border-medical-blue text-medical-blue px-8 py-4 rounded-lg hover:bg-medical-blue hover:text-white transition-all duration-200 font-semibold text-lg text-center">
                            Know More
                        </a>
                    </div>
                </div>

                <!-- Doctor Image -->
                <div class="relative reveal delay-200">
                    <div class="relative z-10">
                        <img src="../public/assets/vijay-snand-hero.png" alt="Dr. Vijay Anand Reddy" class="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover">
                        
                        <!-- Floating Cards -->
                        <div class="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-float">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                                    <i data-feather="users" class="w-6 h-6 text-medical-blue"></i>
                                </div>
                                <div>
                                    <div class="font-bold text-medical-dark">Director</div>
                                    <div class="text-sm text-gray-600">Apollo Cancer Centre</div>
                                </div>
                            </div>
                        </div>

                        <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-float" style="animation-duration: 7s;">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-medical-purple/10 rounded-full flex items-center justify-center">
                                    <i data-feather="heart" class="w-6 h-6 text-medical-purple"></i>
                                </div>
                                <div>
                                    <div class="font-bold text-medical-dark">Survivor Stories</div>
                                    <div class="text-sm text-gray-600">108 Published</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FINAL TEST / GOOGLE RATINGS SECTION (From FinalTest.jsx) -->
    <?php
    $googleStats = [
        ['number' => "4.9/5", 'label' => "Google Rating", 'description' => "Based on 2,847 reviews"],
        ['number' => "#1", 'label' => "Top Oncologist", 'description' => "In India"],
        ['number' => "2,847", 'label' => "Google Reviews", 'description' => "Highest in India"],
        ['number' => "98.7%", 'label' => "5-Star Reviews", 'description' => "Exceptional satisfaction"]
    ];
    ?>
    <section id="highest-rated" class="py-8 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <div class="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i data-feather="star" class="w-4 h-4 mr-2"></i>
            #1 Highest Rated Oncologist in India
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Most Reviewed & Highest Rated
            <span class="text-medical-blue block">Oncologist in India</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Vijay Anand Reddy holds the record for the highest number of Google reviews 
            and maintains the highest rating among oncologists in India, reflecting exceptional patient satisfaction.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <?php foreach($googleStats as $index => $stat): ?>
          <div class="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 card-hover reveal delay-<?= $index * 100 ?>">
              <div class="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                <?= $stat['number'] ?>
              </div>
              <h3 class="text-xl font-bold text-medical-dark mb-3"><?= $stat['label'] ?></h3>
              <p class="text-gray-600"><?= $stat['description'] ?></p>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION (From About.jsx) -->
    <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl md:text-5xl font-bold text-medical-dark mb-6">About Dr. Vijay Anand Reddy</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A distinguished oncologist with over three decades of experience, dedicated to providing world-class cancer care.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-16 items-stretch">
                <!-- Image -->
                <div class="relative h-full reveal">
                    <img src="../public/assets/vijay-anand-about.jpg" alt="Dr. Vijay Anand Reddy" class="w-full h-full rounded-2xl shadow-2xl object-cover">
                    <div class="hidden md:block absolute bottom-2 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                        <h3 class="text-xl font-bold text-medical-dark mb-2">"I Am A Survivor" Book Author</h3>
                        <p class="text-gray-600">Sharing hope through 108 inspiring cancer survivor stories</p>
                    </div>
                </div>

                <!-- Details -->
                <div class="space-y-8 reveal delay-200">
                    <div>
                        <h3 class="text-2xl font-bold text-medical-dark mb-4">Qualifications & Expertise</h3>
                        <div class="space-y-3">
                            <?php 
                            $quals = [
                                "MD (Radiation Oncology)", "DNB (Radiation Oncology)", "European Certification (ESMO)",
                                "FUICC (UK), FNDM (USA), FUICC (AUS)", "Sr. Consultant Oncologist",
                                "Prof. & Head, Dept. of Radiation Oncology", "Director, Apollo Cancer Center, Hyderabad"
                            ];
                            foreach($quals as $q): ?>
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-medical-blue rounded-full"></div>
                                    <span class="text-gray-700"><?= $q ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-medical-blue to-medical-purple p-6 rounded-xl text-white">
                        <h4 class="text-xl font-bold mb-3">Our Mission</h4>
                        <p class="leading-relaxed">"To provide world-class cancer care with cutting-edge technology, personalized treatment plans, and unwavering compassion..."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICES SECTION (From Services.jsx) -->
    <?php
    $services = [
      [
        'id' => "pancreatic-cancer",
        'link' => "/conditions/pancreatic-cancer-in-india",
        'icon' => 'activity',
        'title' => "Pancreatic Cancer",
        'description' => "Personalized treatments with expert team and unmatched experience for advanced pancreatic cancer care",
        'image' => "../public/assets/services/Pancreatic-Cancer.jpg",
        'features' => ["Whipple Procedure", "Chemotherapy Protocols", "Precision Radiation", "Palliative Care"]
      ],
      [
        'id' => "adrenal-cancer",
        'link' => "/adrenal-cancer-treatment-in-india",
        'icon' => 'shield',
        'title' => "Adrenal Cancer",
        'description' => "Expert diagnosis and personalized treatment using latest medical advances for adrenal tumors",
        'image' => "../public/assets/services/Adrenal-Cancer.jpg",
        'features' => ["Advanced Imaging", "Surgical Treatment", "Targeted Therapies", "Hormone Management"]
      ],
      [
        'id' => "proton-therapy",
        'link' => "/treatment/proton-therapy-in-india",
        'icon' => 'zap',
        'title' => "Proton Therapy",
        'description' => "Effective targeted cancer treatment with minimized side effects, especially for tumors near vital organs",
        'image' => "../public/assets/services/proton-therapy.jpeg",
        'features' => ["High Precision Radiation", "Minimal Side Effects", "Pediatric Cancer Care", "Organ Preservation"]
      ],
      [
        'id' => "radiation-oncology",
        'link' => "/specialty/radiation-oncology-in-india",
        'icon' => 'target',
        'title' => "Radiation Oncology",
        'description' => "Precise, technologically advanced cancer treatment with expert clinical support in Hyderabad",
        'image' => "../public/assets/services/radiation-vijay.jpg",
        'features' => ["IMRT/IGRT", "External Beam Therapy", "Brachytherapy", "Stereotactic Radiosurgery"]
      ],
      [
        'id' => "throat-cancer",
        'link' => "/conditions/head-and-neck-cancer-in-india",
        'icon' => 'brain', // Assuming 'brain' maps to something visually approximate or use a custom one
        'title' => "Throat Cancer",
        'description' => "Expert diagnosis, advanced surgery and radiation, plus holistic support for optimal outcomes",
        'image' => "../public/assets/services/throat-cancer.webp",
        'features' => ["Minimally Invasive Surgery", "Targeted Radiation", "Speech Rehabilitation", "Swallowing Therapy"]
      ],
      [
        'id' => "eye-cancer",
        'link' => "/conditions/eye-cancer-in-india",
        'icon' => 'eye',
        'title' => "Eye Cancer",
        'description' => "Comprehensive diagnosis, precise surgical and medical care, and holistic support for eye cancer patients",
        'image' => "../public/assets/services/Eye-Cancer.png",
        'features' => ["Advanced Imaging", "Vision-Preserving Surgery", "Targeted Therapy", "Immunotherapy"]
      ]
    ];
    ?>
    <section id="services" class="py-16 medical-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <h2 class="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Comprehensive Cancer Care Services
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art treatments and compassionate care across all cancer specialties, 
            tailored to each patient's unique needs and circumstances.
          </p>
        </div>

        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
           <div class="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
             <?php foreach($services as $index => $service): ?>
             <div class="bg-white rounded-2xl shadow-lg card-hover group overflow-hidden min-w-[80vw] md:min-w-0 snap-start reveal delay-<?= $index * 100 ?>">
               <div class="relative h-48 overflow-hidden">
                 <img src="<?= $service['image'] ?>" alt="<?= $service['title'] ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 <div class="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                   <i data-feather="<?= $service['icon'] ?>" class="w-6 h-6 text-medical-blue"></i>
                 </div>
               </div>

               <div class="p-6">
                 <h3 class="text-xl font-bold text-medical-dark mb-3"><?= $service['title'] ?></h3>
                 <p class="text-gray-600 mb-4 leading-relaxed text-sm"><?= $service['description'] ?></p>
                 
                 <ul class="space-y-2 mb-4">
                   <?php foreach($service['features'] as $feature): ?>
                   <li class="flex items-center text-sm text-gray-700">
                     <div class="w-1.5 h-1.5 bg-medical-blue rounded-full mr-3"></div>
                     <?= $feature ?>
                   </li>
                   <?php endforeach; ?>
                 </ul>

                 <a href="<?= $service['link'] ?>" class="text-medical-blue font-semibold hover:text-medical-purple transition-colors duration-200 inline-block">
                   Learn More →
                 </a>
               </div>
             </div>
             <?php endforeach; ?>
           </div>
        </div>

        <div class="mt-16 text-center reveal">
           <div class="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
             <h3 class="text-2xl font-bold text-medical-dark mb-4">
               Need a Consultation?
             </h3>
             <p class="text-gray-600 mb-6">
               Get personalized treatment recommendations from Dr. Vijay Anand Reddy and his expert team.
             </p>
             <a href="#contact" class="inline-block bg-medical-blue text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
               Schedule Consultation
             </a>
           </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE SECTION (From WhyChoose.jsx) -->
    <?php
    $reasons = [
      ['icon' => 'award', 'title' => "30+ Years Experience", 'description' => "Three decades of excellence in radiation oncology and cancer treatment"],
      ['icon' => 'users', 'title' => "20,000+ Patients Treated", 'description' => "Successfully treated thousands of patients with various cancer types"],
      ['icon' => 'trending-up', 'title' => "95% Success Rate", 'description' => "Exceptional treatment outcomes with industry-leading success rates"],
      ['icon' => 'heart', 'title' => "Compassionate Care", 'description' => "Patient-centered approach with emotional support throughout treatment"],
      ['icon' => 'globe', 'title' => "International Recognition", 'description' => "Global certifications and recognition from leading medical institutions"],
      ['icon' => 'shield', 'title' => "Advanced Technology", 'description' => "State-of-the-art equipment and cutting-edge treatment modalities"]
    ];
    ?>
    <section id="why-choose" class="py-8 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <h2 class="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Why Choose Dr. Vijay Anand Reddy?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of patients and families for exceptional cancer care, 
            advanced treatments, and compassionate support throughout the healing journey.
          </p>
        </div>

        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 mb-16">
          <div class="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
            <?php foreach($reasons as $index => $reason): ?>
            <div class="bg-medical-light p-8 rounded-2xl card-hover group text-center min-w-[80vw] md:min-w-0 snap-start reveal delay-<?= $index * 100 ?>">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-medical-blue/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-medical-blue transition-all duration-300">
                  <i data-feather="<?= $reason['icon'] ?>" class="w-10 h-10 text-medical-blue group-hover:text-white"></i>
                </div>
              </div>
              
              <h3 class="text-xl font-bold text-medical-dark mb-4"><?= $reason['title'] ?></h3>
              <p class="text-gray-600 leading-relaxed"><?= $reason['description'] ?></p>
            </div>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="mt-16 text-center reveal">
          <div class="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 class="text-2xl font-bold text-medical-dark mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p class="text-gray-600 mb-6 text-lg">
              Join thousands of patients who have trusted Dr. Vijay Anand Reddy for their cancer care. 
              Schedule your consultation today and take the first step towards recovery.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" class="inline-block bg-medical-blue text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                Book Consultation
              </a>
              <a href="tel:+919676720002" class="inline-block border-2 border-medical-blue text-medical-blue px-8 py-4 rounded-lg hover:bg-medical-blue hover:text-white transition-all duration-200 font-semibold text-lg text-center">
                Call +91-9676720002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWARDS SECTION (From Awards.jsx) -->
    <?php
    $awards = [
      [
        'image' => "../public/assets/awards/ISOO-2024-Oration.png",
        'title' => "Clinical Pioneer Award",
        'year' => "2025",
        'description' => "Awarded on Apollo Founder's Day for outstanding patient care and dedication to Apollo mission.",
        'category' => "Clinical Excellence"
      ],
      [
        'image' => "../public/assets/awards/aerocon-2024.png",
        'title' => "Gold Medal – Best Scientific Paper",
        'year' => "2024",
        'description' => "AROICON 2024 for prospective study on patient-reported toxicities & QOL in SBRT Prostate.",
        'category' => "Research Excellence"
      ],
      [
        'image' => "../public/assets/awards/AROICON-2024-Gold-Medal – Best-Scientific-Paper.png",
        'title' => "ISOO 2024 Oration",
        'year' => "2024",
        'description' => "International Society of Ocular Oncology, Goa for contributions to ocular oncology.",
        'category' => "Ophthalmology"
      ],
      // [
      //   'image' => "../public/assets/awards/aerocon-2022.png",
      //   'title' => "Gold Medal – Best Scientific Paper",
      //   'year' => "2022",
      //   'description' => "AROICON 2022 for feasibility study on extreme hypofractionation in post-operative breast cancer.",
      //   'category' => "Research Excellence"
      // ],
      // [
      //   'image' => "../public/assets/awards/dr-b.d-gupta.png",
      //   'title' => "Dr. B. D. Gupta Memorial Oration Award",
      //   'year' => "2019",
      //   'description' => "41st AROICON, Ahmedabad for outstanding contribution in Radiation Oncology.",
      //   'category' => "Oncology Excellence"
      // ],
      // [
      //   'image' => "../public/assets/awards/Lions-Club-International-Excellence-Award.png",
      //   'title' => "Excellence Award",
      //   'year' => "2019",
      //   'description' => "Lions Club International in association with Apollo Hospitals for extraordinary service in Oncology.",
      //   'category' => "Medical Excellence"
      // ]
    ];
    // Note: Only displaying first 3 for brevity as per simplified previous version, but React version seems to show all in slider.
    // For exact match, ideally loop all, but let's stick to the 3 prominent ones from previously for layout consistency in this pass.
    // Actually, user wants EXACT same. Let's include all.
    $awards = [
        [
        'image' => "../public/assets/awards/ISOO-2024-Oration.png",
        'title' => "Clinical Pioneer Award",
        'year' => "2025",
        'description' => "Awarded on Apollo Founder's Day for outstanding patient care and dedication to Apollo mission.",
        'category' => "Clinical Excellence"
        ],
        [
        'image' => "../public/assets/awards/aerocon-2024.png",
        'title' => "Gold Medal – Best Scientific Paper",
        'year' => "2024",
        'description' => "AROICON 2024 for prospective study on patient-reported toxicities & QOL in SBRT Prostate.",
        'category' => "Research Excellence"
        ],
        [
        'image' => "../public/assets/awards/AROICON-2024-Gold-Medal – Best-Scientific-Paper.png",
        'title' => "ISOO 2024 Oration",
        'year' => "2024",
        'description' => "International Society of Ocular Oncology, Goa for contributions to ocular oncology.",
        'category' => "Ophthalmology"
        ],
        [
        'image' => "../public/assets/awards/aerocon-2022.png",
        'title' => "Gold Medal – Best Scientific Paper",
        'year' => "2022",
        'description' => "AROICON 2022 for feasibility study on extreme hypofractionation in post-operative breast cancer.",
        'category' => "Research Excellence"
        ],
        [
        'image' => "../public/assets/awards/dr-b.d-gupta.png",
        'title' => "Dr. B. D. Gupta Memorial Oration Award",
        'year' => "2019",
        'description' => "41st AROICON, Ahmedabad for outstanding contribution in Radiation Oncology.",
        'category' => "Oncology Excellence"
        ],
        [
        'image' => "../public/assets/awards/Lions-Club-International-Excellence-Award.png",
        'title' => "Excellence Award",
        'year' => "2019",
        'description' => "Lions Club International in association with Apollo Hospitals for extraordinary service in Oncology.",
        'category' => "Medical Excellence"
        ]
    ];

    $certifications = [
        ['name' => "Stereotactic Radiosurgery Fellowship", 'year' => "2010", 'location' => "Klinikum Frankfurt (Oder) GmbH, Frankfurt, Germany", 'image' => "../public/assets/journey/Stereotactic-Radiosurgery.png"],
        ['name' => "Ocular Oncology Fellowship", 'year' => "2003", 'location' => "Will's Eye Hospital, Philadelphia, USA", 'image' => "../public/assets/journey/Ocular-Oncology.png"],
        ['name' => "Pediatric Oncology Fellowship", 'year' => "2003", 'location' => "Children's Hospital of Philadelphia, USA", 'image' => "../public/assets/journey/Pediatric-Oncology.png"],
        ['name' => "Head & Neck Oncology Fellowship", 'year' => "1998", 'location' => "Peter McCallum Cancer Institute, Melbourne, Australia", 'image' => "../public/assets/journey/Head & Neck-Oncology.png"],
        ['name' => "Nargis Dutt Memorial Cancer Foundation Fellowship", 'year' => "1995", 'location' => "New York Hospital, Medical Centre of Queens, NY, USA", 'image' => "../public/assets/journey/The-Nargis-Dutt-Memorial.png"],
        ['name' => "Clinical Oncology Fellowship", 'year' => "1992", 'location' => "Meyerstein Institute of Clinical Oncology, Middlesex Hospital, London", 'image' => "../public/assets/journey/The-Clinical-Oncology.png"]
    ];

    $memberships = [
        ['title' => "Advisory Committee Member", 'organization' => "Global Access to Cancer Care Foundation (GACCF), USA"],
        ['title' => "Member", 'organization' => "International American Brachytherapy Society (ABS)"],
        ['title' => "Full Member", 'organization' => "American Society of Clinical Oncology (ASCO)"],
        ['title' => "Full Member", 'organization' => "American Society for Radiation Oncology (ASTRO)"],
        ['title' => "Permanent Member", 'organization' => "European Society of Medical Oncology (ESMO)"],
        ['title' => "Permanent Member", 'organization' => "Union for International Cancer Control (UICC), Geneva"]
    ];
    ?>

    <section id="awards" class="py-16 medical-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <h2 class="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            Awards & Recognition
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Dr. Vijay Anand Reddy's commitment to excellence has been recognized through 
            numerous prestigious awards and international certifications.
          </p>
        </div>

        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 mb-16">
          <div class="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
            <?php foreach($awards as $index => $award): ?>
            <div class="bg-white rounded-2xl shadow-lg card-hover group overflow-hidden min-w-[80vw] md:min-w-0 snap-start reveal delay-<?= $index * 100 ?>">
              <div class="h-56 bg-gray-200 overflow-hidden">
                <img src="<?= $award['image'] ?>" alt="<?= $award['title'] ?>" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" loading="lazy">
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="bg-medical-purple/10 text-medical-purple px-3 py-1 rounded-full text-sm font-semibold">
                    <?= $award['year'] ?>
                  </span>
                  <div class="flex text-yellow-400">
                    <?php for($i=0; $i<5; $i++): ?><i data-feather="star" class="w-4 h-4 fill-current"></i><?php endfor; ?>
                  </div>
                </div>

                <h3 class="text-xl font-bold text-medical-dark mb-3"><?= $award['title'] ?></h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm"><?= $award['description'] ?></p>

                <div class="pt-4 border-t border-gray-100">
                  <span class="text-sm text-medical-blue font-medium"><?= $award['category'] ?></span>
                </div>
              </div>
            </div>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="text-center mb-16 reveal">
          <a href="/awards.php" class="inline-block px-6 py-2 border border-medical-blue text-medical-blue rounded-full font-semibold hover:bg-medical-blue hover:text-white transition-all duration-200">
            View More
          </a>
        </div>

        <!-- Fellowships -->
        <div class="bg-white p-8 md:p-12 rounded-2xl shadow-lg reveal">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-medical-dark mb-4">Fellowships</h3>
                <p class="text-gray-600 text-lg">Global recognition through prestigious international medical training programs</p>
            </div>
            <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                <div class="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
                    <?php foreach($certifications as $cert): ?>
                    <div class="bg-gray-50 border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 group min-w-[80vw] md:min-w-0 snap-start">
                        <div class="h-40 bg-gray-200 overflow-hidden">
                            <img src="<?= $cert['image'] ?>" alt="<?= $cert['name'] ?>" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" loading="lazy">
                        </div>
                        <div class="p-4">
                            <div class="text-medical-blue font-bold text-xs mb-2"><?= $cert['year'] ?></div>
                            <div class="font-semibold text-medical-dark text-sm mb-2"><?= $cert['name'] ?></div>
                            <div class="text-gray-600 text-xs"><?= $cert['location'] ?></div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="mt-10 text-center">
                <a href="/journey.php" class="inline-block px-6 py-2 border border-medical-blue text-medical-blue rounded-full font-semibold hover:bg-medical-blue hover:text-white transition-all duration-200">
                    View More
                </a>
            </div>
        </div>

        <!-- Memberships -->
        <div class="bg-white p-8 mt-10 md:p-12 rounded-2xl shadow-lg reveal">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-medical-dark mb-4">Memberships</h3>
                <p class="text-gray-600 text-lg">Active affiliations with leading international oncology societies and committees</p>
            </div>
            <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                <div class="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 pl-4 pr-8 md:mx-0 md:px-0">
                    <?php foreach($memberships as $member): ?>
                    <div class="flex items-start space-x-4 p-4 bg-medical-light rounded-xl hover:bg-medical-blue/5 transition-all duration-200 min-w-[80vw] md:min-w-0 snap-start">
                        <div class="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i data-feather="users" class="w-6 h-6 text-medical-blue"></i>
                        </div>
                        <div>
                            <div class="font-semibold text-medical-dark text-sm mb-1"><?= $member['title'] ?></div>
                            <div class="text-gray-600 text-xs"><?= $member['organization'] ?></div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="mt-10 text-center">
                <a href="/professional-association.php" class="inline-block px-6 py-2 border border-medical-blue text-medical-blue rounded-full font-semibold hover:bg-medical-blue hover:text-white transition-all duration-200">
                    View More
                </a>
            </div>
        </div>

      </div>
    </section>

    <!-- CONTACT SECTION (From Contact.jsx) -->
    <section id="contact" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-4xl font-bold text-medical-dark mb-4">Get in Touch</h2>
                <p class="text-gray-600">Ready to start your healing journey? Contact us today.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Info -->
                <div class="space-y-6 reveal">
                    <div class="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-medical-blue"><i data-feather="phone"></i></div>
                        <div>
                            <h3 class="font-bold">Phone</h3>
                            <p>+91-9676720002</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-medical-blue"><i data-feather="mail"></i></div>
                        <div>
                            <h3 class="font-bold">Email</h3>
                            <p>cancercare@drvijayanandreddy.com</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-medical-blue"><i data-feather="map-pin"></i></div>
                        <div>
                            <h3 class="font-bold">Location</h3>
                            <p>Apollo Cancer Centre, Jubilee Hills, Hyderabad</p>
                        </div>
                    </div>
                </div>

                <!-- Form -->
                <form class="space-y-4 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 reveal delay-200">
                    <div class="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-blue outline-none">
                        <input type="email" placeholder="Email" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-blue outline-none">
                    </div>
                    <input type="tel" placeholder="Phone Number" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-blue outline-none">
                    <textarea rows="4" placeholder="Message" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-blue outline-none"></textarea>
                    <button class="w-full bg-medical-blue text-white p-4 rounded-lg font-bold hover:bg-blue-700 transition">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <?php include 'footer.php'; ?>

    <!-- Initialize Scripts -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Feather Icons
            feather.replace();

            // Intersection Observer for Reveal on Scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    </script>
</body>
</html>

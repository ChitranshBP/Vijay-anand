<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Achievements - Dr. Vijay Anand Reddy</title>
    
    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 900: '#1e3a8a' },
                        purple: { 50: '#f5f3ff', 100: '#ede9fe', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9' },
                        medical: { blue: '#9B528F', purple: '#8B5CF6', light: '#F8FAFC', dark: '#1E293B' }
                    },
                    fontFamily: { sans: ['Inter', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
                }
            }
        }
    </script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        body { font-family: 'Inter', sans-serif; }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="bg-white text-gray-800">

    <?php include 'navbar.php'; ?>

    <!-- Hero Section -->
    <section class="pt-32 pb-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- LEFT SIDE - TEXT -->
          <div class="reveal">
            <div class="inline-flex items-center bg-medical-blue/10 px-6 py-3 rounded-full mb-8">
              <i data-feather="award" class="w-5 h-5 text-medical-blue mr-2"></i>
              <span class="text-medical-blue font-semibold">
                Best Radiation Oncologist in India
              </span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight">
              Dr. Vijay Anand Reddy
              <span class="block text-medical-blue mt-2">
                India’s Most Trusted Cancer Specialist
              </span>
            </h1>

            <p class="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
          When patients search for the best oncologist in India, Dr. Vijay Anand Reddy’s name stands out. A pioneer in radiation oncology, he has decades of experience, introduced advanced therapies, and is known for blending technology with compassion to deliver exceptional cancer care.
            </p>
          </div>

          <!-- RIGHT SIDE - IMAGE -->
          <div class="flex justify-center reveal delay-200">
            <img
              src="assets/vijay-snand-hero.png" 
              alt="Dr. Vijay Anand Reddy"
              class="rounded-2xl shadow-lg max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Innovation-Driven Cancer Care -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center reveal">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                        Innovation-Driven <span class="block text-medical-blue">Cancer Care</span>
                    </h2>
                    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                        Dr. Reddy’s clinical journey is a story of constant innovation. Renowned as the Best Radiation Oncologist in India, he introduced revolutionary treatments like Stereotactic Radiosurgery (SRS), IMRT, and hypofractionated radiotherapy, fundamentally changing cancer care. These highly targeted treatments maximize cancer cell destruction while protecting surrounding healthy tissue.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1 flex-shrink-0"></i>
                            <p class="text-gray-600">Stereotactic Radiosurgery (SRS) for maximum precision</p>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1 flex-shrink-0"></i>
                            <p class="text-gray-600">Advanced IMRT and hypofractionated radiotherapy protocols</p>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1 flex-shrink-0"></i>
                            <p class="text-gray-600">Customizing radiation duration, invasiveness, and side effects for each patient</p>
                        </div>
                    </div>
                </div>
                <!-- Right Box -->
                <div class="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
                    <h3 class="text-2xl font-bold text-medical-dark mb-6">Excellence in Treatment</h3>
                    <div class="space-y-6">
                        <div class="border-l-4 border-medical-blue pl-6">
                            <h4 class="font-semibold text-medical-dark mb-2">Leading-Edge Technology</h4>
                            <p class="text-gray-600">Access to the latest radiotherapy advances: SRS, IMRT, and more.</p>
                        </div>
                        <div class="border-l-4 border-medical-blue pl-6">
                            <h4 class="font-semibold text-medical-dark mb-2">Personalized Innovation</h4>
                            <p class="text-gray-600">Every protocol customized for safety, speed, and minimal disruption.</p>
                        </div>
                        <div class="border-l-4 border-medical-blue pl-6">
                            <h4 class="font-semibold text-medical-dark mb-2">Superior Outcomes</h4>
                            <p class="text-gray-600">Best-in-class results, fewer side effects, and improved life quality for patients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Unparalleled Achievements -->
    <?php
    $achievements = [
        [
            'icon' => 'trending-up',
            'title' => "Stereotactic Radiosurgery Leader",
            'description' => "Performed the highest number of SRS procedures in India, giving renewed hope to patients with brain tumors and metastases."
        ],
        [
            'icon' => 'award',
            'title' => "Pioneer in Prostate Cancer Therapy",
            'description' => "Introduced short-course radiation therapy for prostate cancer to India—faster, just as effective, and minimally disruptive."
        ],
        [
            'icon' => 'users',
            'title' => "Trainer & Educator",
            'description' => "Led India’s first international IMRT training in Hyderabad, bringing global standards to the local oncology community."
        ]
    ];
    ?>
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                    Unparalleled Achievements By
                    <span class="block text-medical-blue">Best Oncologist in India</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Dr. Reddy’s list of “firsts” and record-breaking performance explains why so many seek his care.
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                <?php foreach($achievements as $item): ?>
                <div class="bg-gray-50 p-8 rounded-lg border border-gray-200">
                    <i data-feather="<?= $item['icon'] ?>" class="w-10 h-10 text-medical-blue mb-4"></i>
                    <h3 class="text-xl font-bold text-medical-dark mb-4"><?= $item['title'] ?></h3>
                    <p class="text-gray-600"><?= $item['description'] ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Milestone Achievement in Ocular Oncology -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                    Milestone Achievement in
                    <span class="block text-medical-blue">Ocular Oncology</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Apollo Cancer Centre, Hyderabad, has emerged as a global Centre of Excellence for eye tumours. 
                    Since establishing our dedicated department in 2003 in collaboration with LV Prasad Eye Institute 
                    and later Centre for Sight, we have become a premier tertiary referral centre for India 
                    and neighbouring countries.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-start reveal">
                <!-- LEFT TEXT -->
                <div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        Over the years, our team has successfully treated and published pioneering work on a wide spectrum 
                        of ocular cancers, including retinoblastoma (RB), melanoma, rhabdomyosarcoma (RMS), 
                        lacrimal gland carcinoma, ocular surface squamous neoplasia (OSSN), optic nerve glioma, 
                        and several rare tumours of the eye and orbit.
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        Our expertise includes advanced procedures such as plaque brachytherapy, 
                        interstitial brachytherapy, intraocular chemotherapy, and intra-arterial chemotherapy.
                    </p>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-start space-x-2">
                            <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1"></i>
                            <span class="text-gray-700">Treatment of over 10,000 cases of retinoblastoma</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1"></i>
                            <span class="text-gray-700">More than 1,000 plaque brachytherapy procedures</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1"></i>
                            <span class="text-gray-700">Over 1,000 ophthalmic intra-arterial chemotherapy procedures</span>
                        </li>
                    </ul>
                    <p class="text-gray-700 leading-relaxed">
                        We are proud to share one unique accomplishment – the world’s only reported case of 
                        interstitial brachytherapy for lacrimal gland carcinoma, successfully performed at our centre. <br />
                        <em>Case highlight: A 33-year-old lady with right orbit lacrimal gland carcinoma underwent 
                        3 cycles of neoadjuvant chemotherapy (Paclitaxel + Cisplatin), followed by excision and 
                        per-operative interstitial brachytherapy.</em>
                    </p>
                </div>

                <!-- RIGHT IMAGES -->
                <div class="grid gap-6">
                    <img
                        src="assets/achievements/achievement-2.jpg"
                        alt="Ocular Oncology Treatment Case 1"
                        class="rounded-lg shadow-lg object-cover w-full"
                    />
                    <img
                        src="assets/achievements/achievement-1.jpg"
                        alt="Ocular Oncology Treatment Case 2"
                        class="rounded-lg shadow-lg object-cover w-full"
                    />
                </div>
            </div>

            <div class="mt-12 text-center reveal">
                <p class="text-gray-600 italic">
                    “We extend our heartfelt gratitude to the management and our oncology team for their 
                    unwavering support and dedication to advancing patient care.”
                </p>
            </div>
        </div>
    </section>

    <!-- Recognized Nationally and Internationally -->
    <?php
    $recognitions = [
        "Only Indian investigator in a landmark global Phase III chemo–radiation trial for lung cancer.",
        "Featured speaker at countless international cancer conferences and trials.",
        "Honored with the prestigious P.S. Ghatge Memorial Oration for revolutionary contributions to medicine.",
        "Recognized as a respected authority and mentor by national and international medical communities."
    ];
    ?>
    <section class="py-16 bg-medical-dark text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Recognized Nationally and
                    <span class="block text-medical-blue">Internationally</span>
                </h2>
                <p class="text-lg text-gray-300 max-w-3xl mx-auto">
                    Dr. Vijay Anand Reddy is a globally recognized leader, earning accolades and respect for his innovation, research, and dedication.
                </p>
            </div>
            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal">
                <?php foreach($recognitions as $recognition): ?>
                <div class="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
                    <i data-feather="star" class="w-5 h-5 text-medical-blue mt-1 flex-shrink-0"></i>
                    <p class="text-gray-300"><?= $recognition ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Holistic and Patient-Centric Approach -->
    <?php
    $approaches = [
        [
            'icon' => 'target',
            'title' => "Highly Personalized Treatment",
            'description' => "Each care plan is tailored to individual needs—combining technology, precision, and patient lifestyle."
        ],
        [
            'icon' => 'heart',
            'title' => "Whole-Person Healing",
            'description' => "Care that includes not only advanced therapy but also emotional support, nutritional guidance, and rehabilitation planning."
        ],
        [
            'icon' => 'shield',
            'title' => "Empathy & Trust",
            'description' => "An open, supportive environment where patients and their loved ones always feel heard and cared for."
        ]
    ];
    ?>
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                    A Holistic and
                    <span class="block text-medical-blue">Patient-Centric Approach</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Dr. Reddy believes cancer care is much more than just technology—it’s about healing the person, not just treating the tumor. Every patient benefits from total care that includes emotional support, nutrition, and rehabilitation planning.
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8 reveal">
                <?php foreach($approaches as $approach): ?>
                <div class="text-center p-8 border border-gray-200 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i data-feather="<?= $approach['icon'] ?>" class="w-8 h-8 text-medical-blue"></i>
                    </div>
                    <h3 class="text-xl font-bold text-medical-dark mb-4"><?= $approach['title'] ?></h3>
                    <p class="text-gray-600 leading-relaxed"><?= $approach['description'] ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Leading the Future -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center reveal">
                <div class="order-2 lg:order-1">
                    <div class="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
                        <h3 class="text-2xl font-bold text-medical-dark mb-6">Leading the Future</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                <i data-feather="trending-up" class="w-5 h-5 text-medical-blue"></i>
                                <span class="text-gray-700">Mentoring and educating India’s next generation of cancer specialists</span>
                            </div>
                            <div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                <i data-feather="target" class="w-5 h-5 text-medical-blue"></i>
                                <span class="text-gray-700">Establishing centers of excellence for accessible advanced treatment</span>
                            </div>
                            <div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                <i data-feather="shield" class="w-5 h-5 text-medical-blue"></i>
                                <span class="text-gray-700">Pioneering innovations like intra-coronary radiotherapy and new brain metastasis techniques</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-1 lg:order-2">
                    <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                        Shaping the Future of
                        <span class="block text-medical-blue">Radiation Oncology in India</span>
                    </h2>
                    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                        Dr. Vijay Anand Reddy is driven by a vision: world-class, state-of-the-art cancer care for all Indians—no matter where they live or their financial background.
                    </p>
                    <p class="text-gray-600 mb-8">
                        Through research, teaching, and innovation, he continues to shape the next era of cancer care in India.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center space-x-2 bg-medical-blue/10 px-4 py-2 rounded-lg">
                            <i data-feather="users" class="w-4 h-4 text-medical-blue"></i>
                            <span class="text-medical-blue font-semibold">Training Next Generation</span>
                        </div>
                        <div class="flex items-center space-x-2 bg-medical-blue/10 px-4 py-2 rounded-lg">
                            <i data-feather="trending-up" class="w-4 h-4 text-medical-blue"></i>
                            <span class="text-medical-blue font-semibold">Research Leadership</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Dr. Vijay Anand Reddy -->
    <?php
    $whyChoosePoints = [
        "The highest number of stereotactic radiosurgeries in India",
        "Introduced short-course radiation for prostate cancer",
        "Global leadership in clinical trials",
        "Patient-first, technology-driven care",
        "Mentor to emerging oncologists"
    ];
    ?>
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                    Why Choose
                    <span class="block text-medical-blue">Dr. Vijay Anand Reddy</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    For those seeking the Best oncologist in India, Dr. Vijay Anand Reddy offers the rarest blend of clinical brilliance, proven experience, and deeply compassionate patient care.
                </p>
            </div>
            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal">
                <?php foreach($whyChoosePoints as $point): ?>
                <div class="flex items-start space-x-3 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                    <i data-feather="check-circle" class="w-5 h-5 text-medical-blue mt-1 flex-shrink-0"></i>
                    <p class="text-gray-700"><?= $point ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-medical-blue text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Looking for the Most Trusted Radiation Oncologist in India?
            </h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Choose experience. Choose innovation. Choose <b>Dr. Vijay Anand Reddy</b> – the name India trusts for cancer care.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact" class="bg-white text-medical-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                    <i data-feather="phone" class="w-5 h-5"></i>
                    <span>Book Consultation</span>
                </a>
                <a href="tel:+919676720002" class="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2">
                    <i data-feather="phone" class="w-5 h-5"></i>
                    <span>+91-9676720002</span>
                </a>
            </div>
            <div class="mt-8 flex justify-center items-center space-x-4 text-sm opacity-75">
                <div class="flex items-center space-x-1">
                    <i data-feather="check-circle" class="w-4 h-4"></i>
                    <span>24/7 Emergency Support</span>
                </div>
                <span>•</span>
                <div class="flex items-center space-x-1">
                    <i data-feather="shield" class="w-4 h-4"></i>
                    <span>Confidential Consultation</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Quote Section -->
    <?php $quoteId = 56; include 'quote_section.php'; ?>

    <?php include 'footer.php'; ?>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            
            // Scroll Reveal Animation
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

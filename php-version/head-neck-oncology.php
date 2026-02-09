<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HeadNeckOncologyPage - Dr. Vijay Anand Reddy</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
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
                        medical: {
                          blue: '#9B528F',
                          purple: '#8B5CF6',
                          light: '#F8FAFC',
                          dark: '#1E293B'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>

    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
</head>
<body class="bg-gray-50">

<?php
$faqs = [
    [
        'question' => "What is radiation oncology?",
        'answer' => "Radiation oncology is a medical specialty that uses high-energy radiation (such as X-rays, gamma rays, protons, or electrons) to shrink tumors and kill cancer cells. It is one of the most effective methods for treating various types of cancer, often used in combination with surgery and chemotherapy. Dr. Vijay Anand Reddy offers the best Head & Neck Oncology in India."
    ],
    [
        'question' => "Which radiation technologies are available at Apollo Cancer Centres?",
        'answer' => "We offer state-of-the-art radiation technologies including Proton Therapy, CyberKnife, Tomotherapy, TrueBeam STx with RapidArc, IMRT (Intensity Modulated Radiation Therapy), IGRT (Image Guided Radiation Therapy), and SBRT (Stereotactic Body Radiation Therapy). These advanced technologies ensure precise targeting of tumors while sparing healthy tissues."
    ],
    [
        'question' => "Why is Dr. Vijay Anand Reddy considered a top Head & Neck Oncologist in India?",
        'answer' => "Dr. Vijay Anand Reddy has over 30 years of experience and is the Director of Apollo Cancer Centres, Hyderabad. He has pioneered many advanced radiation techniques in India and treated over 10,000 patients. His expertise in precision oncology and organ preservation protocols makes him a leader in the field."
    ],
    [
        'question' => "Is radiation therapy painful?",
        'answer' => "No, the actual delivery of radiation is painless, similar to getting an X-ray. Some patients may experience skin irritation or fatigue over the course of treatment, but these side effects are manageable. Dr. Reddy's team ensures patient comfort throughout the treatment journey."
    ],
    [
        'question' => "What makes Apollo the best for Head & Neck Oncology in India?",
        'answer' => "Apollo Cancer Centres provides top-tier Head & Neck Oncology in India, equipped with Proton Therapy and CyberKnife. We follow global protocols, have a multidisciplinary tumor board, and offer comprehensive support services, ensuring world-class care at a fraction of the cost compared to the West."
    ],
    [
        'question' => "How long does a course of radiation therapy take?",
        'answer' => "The duration varies depending on the type and stage of cancer. It can range from a single session (Radiosurgery) to 5-7 weeks of daily treatments (IMRT/IGRT). Dr. Vijay Anand Reddy creates a personalized treatment schedule for every patient."
    ],
    [
        'question' => "What are the side effects of radiation therapy?",
        'answer' => "Side effects depend on the treated area but may include fatigue, skin changes, and temporary loss of appetite. Advanced techniques used by Dr. Reddy, like Proton Therapy and IMRT, significantly minimize these side effects by sparing healthy tissue."
    ],
];
?>
<?php
$stats = [
    ['label' => "Years of Experience", 'value' => "30+", 'icon' => "FiClock"],
    ['label' => "Successful Treatments", 'value' => "10000+", 'icon' => "FiActivity"],
    ['label' => "Happy Patients", 'value' => "20000+", 'icon' => "FiUserCheck"],
    ['label' => "Awards Won", 'value' => "50+", 'icon' => "FiAward"],
];
?>
<?php
$treatmentSteps = [
    ['step' => "01", 'title' => "Simulation & Planning", 'desc' => "CT Simulation to map the tumor accurately.", 'image' => "https://img.freepik.com/free-photo/doctor-patient-discussing-medical-report_1421-66.jpg"],
    ['step' => "02", 'title' => "Dosimetry", 'desc' => "Physicists calculate the precise radiation dose.", 'image' => "https://img.freepik.com/free-photo/doctor-analyzing-x-ray-scan_1421-67.jpg"],
    ['step' => "03", 'title' => "Treatment Delivery", 'desc' => "Painless radiation delivery using advanced machines.", 'image' => "https://img.freepik.com/free-photo/medical-team-meeting_1421-68.jpg"],
    ['step' => "04", 'title' => "Weekly Review", 'desc' => "Regular monitoring by Dr. Reddy during treatment.", 'image' => "https://img.freepik.com/free-photo/surgeons-operating-room_1421-69.jpg"],
];
?>
<?php
$subServices = [
    ['icon' => "FiMessageSquare", 'title' => "Online Consultation", 'desc' => "Initial video consultation to discuss treatment options before travel."],
    ['icon' => "FiFileText", 'title' => "Visa Assistance", 'desc' => "Medical visa invitation letters and complete travel documentation support."],
    ['icon' => "FiHome", 'title' => "Accommodation", 'desc' => "Assistance with comfortable stay options near the hospital during treatment."],
    ['icon' => "FiGlobe", 'title' => "Interpreter Services", 'desc' => "Language support to ensure clear communication throughout treatment journey."],
];
?>
<?php
$whyChoose = [
    "Director of Apollo Cancer Centres & Senior Consultant Head & Neck Oncologist",
    "Pioneered IMRT, IGRT, and Stereotactic Radiosurgery in the region",
    "Specially trained in Proton Therapy and CyberKnife",
    "President of Association of Head & Neck Oncologists of India (Past)",
    "Over 30 years of clinical excellence & 10000+ happy patients",
    "Affordable eye cancer treatment in India",
];
?>
<?php
$videos = [
    [
        'id' => "UbJsIKeP1ps",
        'thumbnail' => "https://img.youtube.com/vi/UbJsIKeP1ps/hqdefault.jpg",
        'title' => "10 ఏళ్లుగా క్యాన్సర్ లేకుండా జీవితం | Breast Cancer Survivor Story | Dr. Vijay Anand Reddy",
    ],
    [
        'id' => "ugvDtjZrXxE",
        'thumbnail' => "https://img.youtube.com/vi/ugvDtjZrXxE/hqdefault.jpg",
        'title' => "Talk by a cancer survivor | Happy Patient | Best Cancer/ Radiation oncology doctor in india",
    ],
    [
        'id' => "hefT59hk4Tk",
        'thumbnail' => "https://img.youtube.com/vi/hefT59hk4Tk/hqdefault.jpg",
        'title' => "What do my patients think about my treatment?",
    ],
    [
        'id' => "_fQ1-kAPh64",
        'thumbnail' => "https://img.youtube.com/vi/_fQ1-kAPh64/hqdefault.jpg",
        'title' => "Stage 3 Breast Cancer",
    ],
    [
        'id' => "MaWOvdr6RDw",
        'thumbnail' => "https://img.youtube.com/vi/MaWOvdr6RDw/hqdefault.jpg",
        'title' => "Cervical Cancer Treatment",
    ],
    [
        'id' => "532AAKNrSb4",
        'thumbnail' => "https://img.youtube.com/vi/532AAKNrSb4/hqdefault.jpg",
        'title' => "Vocal Cord Radiation Treatment",
    ]
];
?>


<div class="min-h-screen bg-white font-sans text-gray-800">
            <?php include 'navbar.php'; ?>

            <!-- Hero Section -->
            <section class="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                <div class="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                        alt="Medical Background"
                        class="w-full h-full object-cover opacity-60"
                    />
                    <div class="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/60 to-cyan-50/70"></div>
                </div>
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="flex flex-col lg:flex-row items-center mt-10 gap-12">
                        <div
                            
                            
                            
                            class="lg:w-1/2 text-center lg:text-left"
                        >
                            <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Advanced Radiation Therapy
                            </span>
                            <h1 class="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Leading <span class="text-medical-blue">Head & Neck Oncology</span> in India
                            </h1>
                            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                                Looking for the best <strong>Head & Neck Oncology in India</strong>? Dr. Vijay Anand Reddy offers precise, effective, and patient-centric radiation therapy using the latest global technologies like Proton Therapy, CyberKnife, and Tomotherapy at Apollo Cancer Centres Hyderabad.
                            </p>

                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div class="text-3xl font-bold text-medical-blue mb-1">90%+</div>
                                    <p class="text-xs text-gray-600">Early Detection Success</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg border border-medical-blue/20 shadow-sm">
                                    <div class="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                    <p class="text-xs text-gray-600">Years Experience</p>
                                </div>
                            </div>

                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#book-appointment" class="px-8 py-4 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2">
                                    <i class="far fa-calendar-alt"></i> Book Appointment
                                </a>
                                <a href="tel:+919676720002" class="px-8 py-4 bg-white text-medical-blue border border-medical-blue/30 rounded-lg font-semibold hover:bg-medical-light transition shadow-sm flex items-center justify-center gap-2">
                                    <i class="fas fa-phone-alt"></i> Call +91-9676720002
                                </a>
                            </div>
                        </div>
                        <div
                            
                            
                            
                            class="lg:w-1/2"
                        >
                            <div id="book-appointment">
                                <style>
                                    #whatapp-people-widget-87189a5a-e9a7-41af-b814-23d00163f7b8 > div:nth-child(n+2) {
                                        display: none !important;
                                    }
                                </style>
                                <div class="min-h-[400px]">
                                    <div data-active id="whatapp-people-widget-87189a5a-e9a7-41af-b814-23d00163f7b8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Google Rating Highlight Section -->
            <section class="py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
                <div class="absolute inset-0 backdrop-blur-3xl bg-white/40"></div>
                <div class="container mx-auto px-4 relative z-10">
                    <div class="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl p-6">
                        <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                            <!-- Best Business Award Image -->
                            <div
                                
                                whileInV
                                
                                
                                class="flex-shrink-0"
                            >
                                <img
                                    src="assets/3-best-best-business-of-2023.png"
                                    alt="3 Best Rated Business of 2023"
                                    class="h-24 md:h-28 w-auto object-contain"
                                    
                                />
                            </div>

                            <!-- Divider -->
                            <div class="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                            <!-- Google Logo & Rating -->
                            <div
                                
                                whileInV
                                
                                
                                class="flex items-center gap-4"
                            >
                                <div class="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50">
                                    <svg class="w-12 h-12" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                    </svg>
                                </div>
                                <div class="text-left">
                                    <div class="flex items-center gap-2 mb-1">
                                        <div class="flex gap-1">
                                            
    <?php for($i=0; $i<5; $i++): ?>
        <svg class="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    <?php endfor; ?>

                                        </div>
                                        <span class="text-3xl font-bold text-medical-dark">4.9</span>
                                    </div>
                                    <p class="text-gray-600 text-sm font-medium">Google Rating</p>
                                </div>
                            </div>

                            <!-- Divider -->
                            <div class="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                            <!-- Reviews Count -->
                            <div
                                
                                whileInV
                                
                                
                                class="text-medical-dark"
                            >
                                <div class="text-4xl font-bold mb-1 bg-gradient-to-r from-medical-blue to-medical-purple bg-clip-text text-transparent">2,500+</div>
                                <p class="text-gray-600 text-sm font-medium">Verified Patient Reviews</p>
                            </div>

                            <!-- Divider -->
                            <div class="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                            <!-- Trust Badge -->
                            <div
                                
                                whileInV
                                
                                
                                class="text-medical-dark"
                            >
                                <div class="flex items-center gap-2 mb-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span class="text-2xl font-bold">Most Trusted</span>
                                </div>
                                <p class="text-gray-600 text-sm font-medium">Head & Neck Oncology Expert</p>
                            </div>

                            <!-- CTA Button -->
                            <div
                                
                                whileInV
                                
                                
                            >
                                <a href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-medical-blue to-medical-purple text-white rounded-lg font-bold hover:shadow-xl transition-all shadow-lg">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    Read Reviews
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Stats Section -->
            <section class="py-10 bg-medical-blue text-white">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        
    <?php foreach ($stats as $stat): ?>
        <div class="text-center">
            <div class="text-4xl mb-2 flex justify-center opacity-80">
                <?php 
                    $iconClass = 'fas fa-star';
                    if(strpos($stat['icon'], 'FiClock') !== false) $iconClass = 'far fa-clock';
                    elseif(strpos($stat['icon'], 'FiActivity') !== false) $iconClass = 'fas fa-chart-line';
                    elseif(strpos($stat['icon'], 'FiUserCheck') !== false) $iconClass = 'fas fa-user-check';
                    elseif(strpos($stat['icon'], 'FiAward') !== false) $iconClass = 'fas fa-award';
                ?>
                <i class="<?= $iconClass ?>"></i>
            </div>
            <div class="text-3xl md:text-4xl font-bold mb-1"><?= $stat['value'] ?></div>
            <div class="text-blue-100 text-sm uppercase tracking-wide"><?= $stat['label'] ?></div>
        </div>
    <?php endforeach; ?>
    
                    </div>
                </div>
            </section>

            <!-- About Treatment Section -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">World-Class Head & Neck Oncology in India</h2>
                        <p class="text-gray-600 text-lg">
                            Experience the pinnacle of cancer care with cutting-edge radiation technologies and the expertise of Dr. Vijay Anand Reddy. For world-class <strong>Head & Neck Oncology in India</strong>, we deliver precise treatments with minimal side effects.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 class="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <i class="fas fa-users"></i> Precision & Innovation
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Head & Neck Oncology has evolved rapidly, offering cures with fewer side effects. Dr. Vijay Anand Reddy utilizes advanced techniques like <strong>Proton Therapy</strong> and <strong>CyberKnife</strong> to target tumors with sub-millimeter accuracy, preserving healthy organs and ensuring a better quality of life for patients.
                            </p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-microscope"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Proton Therapy</h4>
                                        <p class="text-sm text-gray-500">First in South Asia</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-procedures"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">CyberKnife</h4>
                                        <p class="text-sm text-gray-500">Robotic Radiosurgery</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-bullseye"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Tomotherapy</h4>
                                        <p class="text-sm text-gray-500">360° Radiation Delivery</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-dna"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">TrueBeam STx</h4>
                                        <p class="text-sm text-gray-500">Fast & Precise</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-shield-alt"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Fewer Side Effects</h4>
                                        <p class="text-sm text-gray-500">Better tolerance</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-hand-holding-heart"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Holistic Care</h4>
                                        <p class="text-sm text-gray-500">Complete support system</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative h-[500px]">
                            <img
                                src="assets/condiotion-images/head-cancer.webp"
                                alt="Eye Cancer Treatment in India"
                                class="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            Schedule Your Consultation with Dr. Vijay Anand Reddy
                        </h3>
                        <p class="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Get expert guidance on the most advanced radiation treatments. Book a personalized consultation to discuss the best radiotherapy options for your condition with the best Head & Neck Oncology in India.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#book-appointment" class="px-8 py-4 bg-white text-medical-blue rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="far fa-calendar-alt"></i> Book Consultation Now
                            </a>
                            <a href="tel:+919676720002" class="px-8 py-4 bg-medical-dark text-white border-2 border-white rounded-lg font-semibold hover:bg-medical-purple transition flex items-center justify-center gap-2">
                                <i class="fas fa-phone-alt"></i> Call +91-9676720002
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About Doctor Section -->
            <section class="pb-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            
                            whileInV
                            
                            
                            class="relative"
                        >
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="assets/vijay-anand-about.jpg"
                                    alt="Dr. Vijay Anand Reddy - Best Head & Neck Oncologist in India"
                                    class="w-full h-full object-cover"
                                />
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                    <h3 class="text-2xl font-bold">Dr. Vijay Anand Reddy</h3>
                                    <p class="opacity-90">Director, Apollo Cancer Centres</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                Meet the Expert
                            </span>
                            <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                About Dr. Vijay Anand Reddy
                            </h2>
                            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                                Dr. Vijay Anand Reddy is a distinguished <strong>Head & Neck Oncologist</strong> with over 30 years of experience. As the Director of Apollo Cancer Centres, Hyderabad, he has been instrumental in establishing the most comprehensive facility for <strong>Head & Neck Oncology in India</strong>.
                            </p>
                            <p class="text-gray-600 mb-8 leading-relaxed">
                                He is renowned for his expertise in Proton Therapy, CyberKnife, Tomotherapy, and Brachytherapy. His commitment to bringing the latest global technology to India has saved countless lives and preserved the quality of life for thousands of cancer survivors.
                            </p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <i class="fas fa-award"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">International Recognition</h4>
                                        <p class="text-xs text-gray-500">Global Awards & Honors</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Published Author</h4>
                                        <p class="text-xs text-gray-500">"I Am A Survivor"</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Patient-Centered</h4>
                                        <p class="text-xs text-gray-500">Compassionate Care</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Innovator</h4>
                                        <p class="text-xs text-gray-500">Advanced Protocols</p>
                                    </div>
                                </div>
                            </div>

                            <a href="/achievements" class="inline-flex items-center gap-2 text-medical-blue font-semibold hover:gap-3 transition-all">
                                Read Full Profile <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <?php $quoteId = 42; include 'quote_section.php'; ?>

            <!-- Treatment Process -->
            <section class="py-14 bg-medical-light">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Radiation Treatment Process</h2>
                        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                            A systematic, precision-driven approach to cancer treatment. Dr. Vijay Anand Reddy and his team ensure accuracy at every step.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-4 gap-8">
                        
    <?php foreach ($treatmentSteps as $item): ?>
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-medical-blue relative overflow-hidden group">
            <div class="relative h-40 overflow-hidden">
                <img src="<?= $item['image'] ?>" alt="<?= $item['title'] ?>" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div class="absolute top-3 right-3 bg-medical-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"><?= $item['step'] ?></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-medical-dark mb-3"><?= $item['title'] ?></h3>
                <p class="text-gray-600"><?= $item['desc'] ?></p>
            </div>
        </div>
    <?php endforeach; ?>
    
                    </div>

                    <!-- CTA - Start Treatment -->
                    <div class="mt-12 text-center">
                        <div class="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-medical-blue max-w-4xl mx-auto">
                            <h3 class="text-2xl md:text-3xl font-bold text-medical-dark mb-4">
                                Begin Your Treatment Journey Today
                            </h3>
                            <p class="text-gray-600 mb-6 text-lg">
                                Don't wait to start your journey to recovery. Dr. Vijay Anand Reddy and our expert team are ready to provide you with world-class radiation therapy.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#book-appointment" class="px-8 py-4 bg-medical-blue text-white rounded-lg font-semibold hover:bg-medical-dark transition shadow-lg flex items-center justify-center gap-2">
                                    <i class="far fa-calendar-alt"></i> Schedule Appointment
                                </a>
                                <a href="tel:+919676720002" class="px-8 py-4 bg-white text-medical-blue border-2 border-medical-blue rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2">
                                    <i class="fas fa-phone-alt"></i> Call +91-9676720002
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Apollo Hospital Eye Cancer Section -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Advanced Head & Neck Oncology at Apollo Cancer Centres India</h2>
                        <p class="text-gray-600 text-lg">
                            We provide the most advanced <strong>Head & Neck Oncology in India</strong>, offering the full spectrum of radiotherapy services under one roof.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 class="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <i class="far fa-hospital"></i> Center of Excellence
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Apollo Cancer Centres is a pioneer in introducing the latest radiation technologies to India. From being the first to introduce Proton Therapy to equipping our centers with CyberKnife and TrueBeam STx, we ensure our patients have access to the world's best care without traveling abroad.
                            </p>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Our collaborative approach ensures each patient receives a personalized treatment plan focused on cure and functional preservation.
                            </p>
                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20">
                                <h4 class="font-bold text-medical-dark mb-3 flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i> Key Highlights
                                </h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Proton Therapy (Pencil Beam Scanning)
                                    </li>
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        CyberKnife Robotic Radiosurgery
                                    </li>
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Tomotherapy Radixact
                                    </li>
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        TrueBeam STx with RapidArc
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="relative h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                                alt="Advanced Head & Neck Oncology Technology"
                                class="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <!-- Advanced Facilities Section -->
                    <div class="mt-12">
                        <h3 class="text-2xl font-bold text-medical-dark mb-8 text-center">Our Technology Arsenal</h3>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-microscope"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">IMRT / IGRT</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Precise radiation therapy that shapes beams to the tumor, sparing healthy tissue.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-procedures"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">SRS / SBRT</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Highly focused radiation for small tumors, completed in fewer sessions with extreme accuracy.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-x-ray"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">CyberKnife</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Robot-assisted radiosurgery that tracks tumor movement in real-time for moving organs.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-pills"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Brachytherapy</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Internal radiation therapy where a radioactive source is placed inside or near the tumor.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-dna"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Proton Therapy</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Advanced radiation therapy that uses protons to target tumors with Bragg peak precision.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-hand-holding-heart"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Supportive Care</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Counseling, nutrition support, visual rehabilitation, and survivorship programs for complete well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Section -->
            <section class="py-14 bg-medical-light">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row gap-16 items-center">
                        <div class="lg:w-1/2">
                            <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                Why Choose Dr. Vijay Anand Reddy for Head & Neck Oncology?
                            </h2>
                            <p class="text-gray-600 mb-8 text-lg">
                                As a thought leader in radiation oncology, Dr. Vijay Anand Reddy has been instrumental in shaping cancer care in India. His dedication to adopting the latest technology ensures patients receive the best possible treatment.
                            </p>
                            <ul class="space-y-4">
                                
    <?php foreach ($whyChoose as $reason): ?>
        <li class="flex items-center gap-3 text-gray-700 font-medium">
            <i class="fas fa-check-circle text-medical-blue flex-shrink-0"></i>
            <?= $reason ?>
        </li>
    <?php endforeach; ?>
    
                            </ul>
                        </div>
                        <div class="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div class="bg-medical-blue/10 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition border border-medical-blue/20">
                                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><i class="far fa-clock"></i></div>
                                <div class="text-3xl font-bold text-medical-blue mb-1">30+</div>
                                <h4 class="font-bold text-medical-dark text-sm">Years Experience</h4>
                            </div>
                            <div class="bg-medical-blue/15 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition border border-medical-blue/30">
                                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><i class="fas fa-chart-line"></i></div>
                                <div class="text-3xl font-bold text-medical-blue mb-1">10k+</div>
                                <h4 class="font-bold text-medical-dark text-sm">Cases Treated</h4>
                            </div>
                            <div class="bg-medical-blue/20 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition border border-medical-blue/40">
                                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><i class="fas fa-heart"></i></div>
                                <div class="text-3xl font-bold text-medical-blue mb-1">24/7</div>
                                <h4 class="font-bold text-medical-dark text-sm">Support</h4>
                            </div>
                            <div class="bg-medical-blue/25 p-6 rounded-2xl text-center translate-y-8 shadow-md hover:shadow-xl transition border border-medical-blue/50">
                                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><i class="fas fa-users"></i></div>
                                <div class="text-3xl font-bold text-medical-blue mb-1">95%</div>
                                <h4 class="font-bold text-medical-dark text-sm">Success Rate</h4>
                            </div>
                        </div>
                    </div>

                    <!-- CTA - Expert Care -->
                    <div class="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            Experience World-Class Head & Neck Oncology Care
                        </h3>
                        <p class="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of patients who have trusted Dr. Vijay Anand Reddy for advanced radiation therapy with compassionate care.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#book-appointment" class="px-8 py-4 bg-white text-medical-blue rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2 text-lg">
                                <i class="far fa-calendar-alt"></i> Book Your Consultation
                            </a>
                            <a href="https://www.google.com/maps?ll=17.414722,78.412148&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=1736553121756056830" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-white text-medical-blue border-2 border-white rounded-lg font-semibold hover:bg-medical-light transition flex items-center justify-center gap-2">
                                <i class="fas fa-map-marker-alt"></i> Visit Our Center
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- International Patients Section -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Global Care
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            International Patient Services
                        </h2>
                        <p class="text-gray-600 text-lg">
                            We provide comprehensive support for international patients seeking advanced radiation oncology treatment in India.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        
    <?php foreach ($subServices as $service): ?>
        <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition group">
            <div class="bg-white w-14 h-14 rounded-full flex items-center justify-center text-medical-blue mb-4 shadow-sm group-hover:scale-110 transition">
                <?php 
                    $iconClass = 'fas fa-star';
                    if(strpos($service['icon'], 'FiMessageSquare') !== false) $iconClass = 'far fa-comments';
                    elseif(strpos($service['icon'], 'FiFileText') !== false) $iconClass = 'far fa-file-alt';
                    elseif(strpos($service['icon'], 'FiHome') !== false) $iconClass = 'fas fa-home';
                    elseif(strpos($service['icon'], 'FiGlobe') !== false) $iconClass = 'fas fa-globe';
                ?>
                <i class="<?= $iconClass ?> fa-lg"></i>
            </div>
            <h3 class="text-xl font-bold text-medical-dark mb-2"><?= $service['title'] ?></h3>
            <p class="text-gray-600 text-sm"><?= $service['desc'] ?></p>
        </div>
    <?php endforeach; ?>
    
                    </div>

                    <div class="bg-medical-blue rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

                        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div class="text-white max-w-xl">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Plan Your Treatment Journey</h3>
                                <p class="text-blue-100 text-lg mb-6">
                                    Our dedicated International Patient Care team is available 24/7 to assist with treatment planning at India's leading radiation oncology hospital.
                                </p>
                                <div class="flex flex-wrap gap-4">
                                    <div class="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        <i class="fas fa-check-circle"></i> <span>Priority Appointments</span>
                                    </div>
                                    <div class="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        <i class="fas fa-check-circle"></i> <span>Airport Transfers</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4 w-full md:w-auto">
                                <a href="https://wa.me/919676720002" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-white text-medical-blue rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                                    <i class="far fa-comments"></i> Chat on WhatsApp
                                </a>
                                <a href="mailto:cancercare@drvijayanandreddy.com" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center gap-2">
                                    <i class="far fa-envelope"></i> Email Medical Reports
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Most Reviewed & Highest Rated Section -->
            <section class="py-18 mt-10 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-4xl mx-auto mb-12">
                        <div
                            
                            whileInV
                            
                            
                        >
                            <span class="inline-block py-2 px-4 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                ⭐ Patient Reviews & Ratings
                            </span>
                            <h2 class="text-3xl md:text-5xl font-bold text-medical-dark mb-4">
                                Most Reviewed & Highest Rated <span class="text-medical-blue">Head & Neck Oncologist in India</span>
                            </h2>
                            <p class="text-gray-600 text-lg">
                                Dr. Vijay Anand Reddy has earned the trust of thousands of patients through exceptional care, precision treatment, and outstanding clinical outcomes.
                            </p>
                        </div>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div
                            
                            whileInV
                            
                            
                            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-blue"
                        >
                            <div class="text-4xl font-bold text-medical-blue mb-2">4.9/5</div>
                            <p class="text-gray-600 font-semibold">Average Rating</p>
                            <p class="text-xs text-gray-500 mt-1">Based on 2,500+ reviews</p>
                        </div>

                        <div
                            
                            whileInV
                            
                            
                            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-purple"
                        >
                            <div class="text-4xl font-bold text-medical-purple mb-2">2,500+</div>
                            <p class="text-gray-600 font-semibold">Patient Reviews</p>
                            <p class="text-xs text-gray-500 mt-1">Verified testimonials</p>
                        </div>

                        <div
                            
                            whileInV
                            
                            
                            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-blue"
                        >
                            <div class="text-4xl font-bold text-medical-blue mb-2">98%</div>
                            <p class="text-gray-600 font-semibold">Recommendation Rate</p>
                            <p class="text-xs text-gray-500 mt-1">Would recommend to others</p>
                        </div>

                        <div
                            
                            whileInV
                            
                            
                            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center border-t-4 border-medical-purple"
                        >
                            <div class="text-4xl font-bold text-medical-purple mb-2">#1</div>
                            <p class="text-gray-600 font-semibold">Ranked in India</p>
                            <p class="text-xs text-gray-500 mt-1">For Radiation Therapy</p>
                        </div>
                    </div>

                    
<div id="wid_1754467080840" class="my-10 container mx-auto"></div>
<script defer src="https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1754467080840" theme="light" footer="false" widget-type="carousel" token="687a20a3a7ee08492b66abfc" apiurl="https://server.onlinereviews.tech/api/v0.0.9" stats="true" addReview="true" profile-pic="true" review-name="true" positive-stars="false" wl="true" wlndig="https://go.meddyreviews.com/dr-vijay-anand-reddy" lang="us" brandStyle="%7B%22sidebar_background%22%3A%22%236CD79E%22%2C%22sidebar_text%22%3A%22black%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23676767%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(118%2C%20118%2C%20118)%22%2C%22brand_button_active%22%3A%22rgb(88%2C%2088%2C%2088)%22%2C%22brand_main_color_opacity%22%3A%22%236767671a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fmeddyreviews.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.meddyreviews.com%2Ftopbar.png%22%7D"></script>

                </div>
            </section>

            
            <!-- Patient Video Testimonials -->
            <section class="py-16 bg-gray-50" x-data="{ currentVideo: <?php echo htmlspecialchars(json_encode($videos[0])); ?> }">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Patient Stories
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Video Testimonials
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Hear from our patients about their successful bone cancer treatment journey with Dr. Vijay Anand Reddy.
                        </p>
                    </div>

                    <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <!-- Main Video Player -->
                        <div class="relative aspect-video bg-black">
                             <iframe
                                :src="'https://www.youtube.com/embed/' + currentVideo.id + '?rel=0'"
                                :title="currentVideo.title"
                                class="w-full h-full"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <!-- Video Thumbnails Navigation -->
                        <div class="relative p-6 bg-white border-t border-gray-100">
                            <div class="flex items-center gap-4">
                                <button
                                    onclick="document.getElementById('video-scroll-container').scrollBy({left: -200, behavior: 'smooth'})"
                                    class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Previous videos"
                                >
                                    <i class="fas fa-chevron-left"></i>
                                </button>

                                <div
                                    id="video-scroll-container"
                                    class="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
                                    style="scrollbar-width: none; -ms-overflow-style: none;"
                                >
                                    <?php foreach ($videos as $video): ?>
                                        <div
                                            @click="currentVideo = <?php echo htmlspecialchars(json_encode($video)); ?>"
                                            class="flex-shrink-0 w-64 cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300"
                                            :class="currentVideo.id === '<?= $video['id'] ?>' ? 'border-red-600 ring-2 ring-red-100' : 'border-transparent hover:border-gray-200'"
                                        >
                                            <div class="relative aspect-video">
                                                <img
                                                    src="<?= $video['thumbnail'] ?>"
                                                    alt="<?= $video['title'] ?>"
                                                    class="w-full h-full object-cover"
                                                />
                                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                    <div 
                                                        class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform"
                                                        :class="currentVideo.id === '<?= $video['id'] ?>' ? 'opacity-0' : 'opacity-100'"
                                                    >
                                                        <i class="fas fa-play"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-3 bg-gray-50 h-full">
                                                <h4 
                                                    class="text-sm font-semibold line-clamp-2"
                                                    :class="currentVideo.id === '<?= $video['id'] ?>' ? 'text-red-600' : 'text-gray-800'"
                                                >
                                                    <?= $video['title'] ?>
                                                </h4>
                                            </div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>

                                <button
                                    onclick="document.getElementById('video-scroll-container').scrollBy({left: 200, behavior: 'smooth'})"
                                    class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Next videos"
                                >
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- FAQ Section -->
            <section class="py-14">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">Frequently Asked Questions</h2>
                        <p class="text-gray-600 mb-6 text-center">
                            Get answers to common questions about treatment, costs, and what to expect from your treatment journey.
                        </p>
                        <div class="space-y-4">
                            
    <div class="space-y-4">
        <?php foreach ($faqs as $index => $faq): ?>
            <div class="bg-medical-light rounded-xl shadow-sm overflow-hidden" x-data="{ open: false }">
                <button
                    @click="open = !open"
                    class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                    <span class="font-bold text-gray-800"><?= $faq['question'] ?></span>
                    <i class="fas fa-chevron-down" :class="{'rotate-180': open}"></i>
                </button>
                <div x-show="open" class="px-6 pb-6 text-gray-600 animate-fadeIn">
                    <?= $faq['answer'] ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    
                        </div>
                    </div>
                </div>
            </section>

            <!-- Video Modal -->
            
            <?php include 'footer.php'; ?>
        </div>


    <!-- WhatsApp Widget Script -->
    <script defer src="https://app.wacrs.com/install-widget/bundle.js?key=484b0ca7-463d-4440-80be-d5486f4218a8" id="wacrs-widget-script" data-active data-widget-type="group" data-person="87189a5a-e9a7-41af-b814-23d00163f7b8"></script>
    

</body>
</html>

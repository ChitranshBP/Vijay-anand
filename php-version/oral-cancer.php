<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OralCancerPage - Dr. Vijay Anand Reddy</title>
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
        'question' => "What is oral cancer treatment in India?",
        'answer' => "Oral cancer treatment in India encompasses comprehensive care including surgery (mandibulectomy, glossectomy), radiation therapy (IMRT, IGRT), chemotherapy, and targeted therapy. Dr. Vijay Anand Reddy provides world-class oral cancer treatment in India with advanced technologies and personalized care plans at Apollo Cancer Centres, Hyderabad."
    ],
    [
        'question' => "What are the early signs of oral cancer?",
        'answer' => "Early signs include non-healing mouth ulcers, red or white patches in the mouth, difficulty swallowing, or a lump in the neck/cheek. Regular dental check-ups are crucial for early detection. If you notice any of these signs, consult Dr. Vijay Anand Reddy for the best oral cancer treatment in India."
    ],
    [
        'question' => "What types of oral cancer treatment are available in India?",
        'answer' => "India offers comprehensive oral cancer treatment options including advanced surgery, IMRT/IGRT radiation, chemotherapy, and immunotherapy. Dr. Vijay Anand Reddy specializes in advanced head and neck oncology techniques for oral cancer treatment in India."
    ],
    [
        'question' => "Why choose Dr. Vijay Anand Reddy for oral cancer treatment in India?",
        'answer' => "With over 30 years of experience in radiation oncology, Dr. Vijay Anand Reddy offers world-class oral cancer treatment in India. He utilizes cutting-edge technology, personalized treatment plans, and a multidisciplinary approach to ensure the best outcomes for oral cancer patients. His expertise in IMRT, IGRT, and organ-preservation therapies makes him one of India's leading oncologists."
    ],
    [
        'question' => "What is the cost of oral cancer treatment in India?",
        'answer' => "Oral cancer treatment in India is significantly more affordable compared to Western countries, typically 60-70% lower, without compromising on quality. The exact cost depends on the stage of cancer, treatment modality, and duration. Dr. Reddy's clinic offers transparent pricing and treatment packages for oral cancer treatment in India."
    ],
    [
        'question' => "How long does oral cancer treatment take in India?",
        'answer' => "The duration of oral cancer treatment in India varies based on the stage and type. Surgery may take a few hours, while radiation therapy typically spans 6-7 weeks. Chemotherapy cycles can last 3-6 months. Dr. Vijay Anand Reddy creates customized treatment timelines for each oral cancer patient."
    ],
    [
        'question' => "What is the success rate of oral cancer treatment in India?",
        'answer' => "Oral cancer treatment in India has excellent success rates, with early-stage oral cancer having a 80-90% survival rate and high organ preservation rates. Dr. Vijay Anand Reddy has successfully treated over 10,000 cancer patients with advanced radiation oncology techniques and personalized care, achieving outstanding outcomes comparable to global standards."
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
    ['step' => "01", 'title' => "Consultation & Diagnosis", 'desc' => "Comprehensive evaluation and advanced diagnostic imaging.", 'image' => "https://img.freepik.com/free-photo/doctor-patient-discussing-medical-report_1421-66.jpg"],
    ['step' => "02", 'title' => "Treatment Planning", 'desc' => "Multidisciplinary team creates personalized plan.", 'image' => "https://img.freepik.com/free-photo/doctor-analyzing-x-ray-scan_1421-67.jpg"],
    ['step' => "03", 'title' => "Treatment Delivery", 'desc' => "Surgery, radiation, or chemotherapy with precision.", 'image' => "https://img.freepik.com/free-photo/medical-team-meeting_1421-68.jpg"],
    ['step' => "04", 'title' => "Follow-up Care", 'desc' => "Regular monitoring and survivorship support.", 'image' => "https://img.freepik.com/free-photo/surgeons-operating-room_1421-69.jpg"],
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
                                Advanced Oral Cancer Care
                            </span>
                            <h1 class="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight mb-6">
                                Best <span class="text-medical-blue">Oral Cancer Treatment</span> in India
                            </h1>
                            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                                Seeking world-class <strong>oral cancer treatment in India</strong>? Dr. Vijay Anand Reddy offers advanced radiation oncology, precision surgery, and comprehensive cancer care at Apollo Cancer Centres Hyderabad. Get expert treatment with the latest IMRT, IGRT, and organ-preserving techniques.
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
            </section >

            <!-- Google Rating Highlight Section -->
            < section class="py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative" >
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
                                <p class="text-gray-600 text-sm font-medium">Oral Cancer Doctor in India</p>
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
            </section >

            <!-- Stats Section -->
            < section class="py-10 bg-medical-blue text-white" >
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
            </section >

            <!-- About Treatment Section -->
            < section class="py-16 bg-white" >
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Comprehensive Oral Cancer Treatment in India</h2>
                        <p class="text-gray-600 text-lg">
                            Experience cutting-edge oral cancer treatment in India with advanced radiation oncology, precision surgery, and personalized care. Dr. Vijay Anand Reddy offers the best outcomes with proven success rates.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 class="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <i class="fas fa-users"></i> Overview
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Oral cancer develops in the tissues of the mouth or throat. Dr. Vijay Anand Reddy, a leading specialist in <strong>oral cancer treatment in India</strong>, offers comprehensive care including advanced diagnostics, surgery, radiation therapy, and chemotherapy tailored to each patient's unique cancer type and stage.
                            </p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-microscope"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Advanced Diagnostics</h4>
                                        <p class="text-sm text-gray-500">Biopsy, MRI & PET CT</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-procedures"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Minimally Invasive</h4>
                                        <p class="text-sm text-gray-500">Organ-preserving surgery</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-bullseye"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Precision Radiation</h4>
                                        <p class="text-sm text-gray-500">IMRT & IGRT</p>
                                    </div>
                                </div>
                                <div class="bg-medical-light p-4 rounded-lg border border-medical-blue/20 flex items-start gap-3 shadow-sm hover:shadow-lg transition">
                                    <div class="bg-medical-blue/10 p-3 rounded-lg text-medical-blue mt-1"><i class="fas fa-dna"></i></div>
                                    <div>
                                        <h4 class="font-bold text-medical-dark">Targeted Therapy</h4>
                                        <p class="text-sm text-gray-500">Personalized treatment</p>
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

                        <div class="relative h-full min-h-[400px]">
                            <img
                                src="assets/condiotion-images/oral-cancer.webp"
                                alt="Oral Cancer Treatment in India"
                                class="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            Schedule Your Oral Cancer Consultation with Dr. Vijay Anand Reddy
                        </h3>
                        <p class="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Get expert guidance on the best oral cancer treatment in India. Book a personalized consultation to discuss your treatment options and customized care plan.
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
            </section >

            <!-- About Doctor Section -->
            < section class="pb-16 bg-white" >
                <div class="container mx-auto px-4">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            
                            whileInV
                            
                            
                            class="relative"
                        >
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="assets/vijay-anand-about.jpg"
                                    alt="Dr. Vijay Anand Reddy - Best Oral Cancer Treatment Doctor in India"
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
                                Dr. Vijay Anand Reddy is a distinguished radiation oncologist with over 30 years of experience providing world-class <strong>oral cancer treatment in India</strong>. As the Director of Apollo Cancer Centres, Hyderabad, he has pioneered advanced radiation oncology techniques and personalized treatment approaches for oral cancer patients.
                            </p>
                            <p class="text-gray-600 mb-8 leading-relaxed">
                                He is renowned for his expertise in IMRT, IGRT, and organ-preserving therapies. His commitment to personalized patient care, use of cutting-edge technology, and evidence-based medicine has earned him recognition as one of India's leading oral cancer specialists.
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
                                        <FiUsers size={20} />
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
            </section >

            <!-- Quote Section -->
            <?php $quoteId = 12; include 'quote_section.php'; ?>

            <!-- Treatment Process -->
            < section class="py-14 bg-medical-light" >
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Oral Cancer Treatment Process</h2>
                        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                            A systematic, patient-centric approach to oral cancer treatment in India. Dr. Vijay Anand Reddy and his team follow a comprehensive 4-step process for optimal treatment outcomes.
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
                                Begin Your Oral Cancer Treatment Journey Today
                            </h3>
                            <p class="text-gray-600 mb-6 text-lg">
                                Don't wait to start your journey to recovery. Dr. Vijay Anand Reddy and our expert team are ready to provide you with the best oral cancer treatment in India with world-class care.
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
            </section >

            <!-- Apollo Hospital Eye Cancer Section -->
            < section class="py-16 bg-white" >
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Oral Cancer Treatment at Apollo Cancer Centres India</h2>
                        <p class="text-gray-600 text-lg">
                            State-of-the-art oral cancer treatment infrastructure with world-class facilities, latest technology, expert care, and the best oral cancer doctor in India - Dr. Vijay Anand Reddy.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 class="text-2xl font-bold text-medical-dark mb-6 flex items-center gap-3">
                                <i class="far fa-hospital"></i> About Apollo Oral Cancer Center
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Apollo Cancer Centres is equipped with India's most advanced oral cancer treatment facilities, offering comprehensive cancer care with the latest diagnostic tools, minimally invasive surgery, precision radiation therapy, and targeted treatments. Under the leadership of Dr. Vijay Anand Reddy, our center provides world-class <strong>oral cancer treatment in India</strong>.
                            </p>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Our oral cancer program combines evidence-based medicine with a multidisciplinary team approach, ensuring each patient receives personalized treatment plans tailored to their specific cancer stage, type, and biomarker profile.
                            </p>
                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20">
                                <h4 class="font-bold text-medical-dark mb-3 flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i> Key Highlights
                                </h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Advanced biopsy, MRI and PET-CT imaging
                                    </li>
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Organ-preserving surgery and reconstruction
                                    </li>
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        Advanced radiation therapy (IMRT, IGRT)
                                    </li>
                                    <li class="flex items-start gap-2 text-gray-700 text-sm">
                                        <span class="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                                        24/7 comprehensive patient support and care
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="relative h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                                alt="Apollo Cancer Centre Oral Cancer Treatment Facility"
                                class="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <!-- Advanced Facilities Section -->
                    <div class="mt-12">
                        <h3 class="text-2xl font-bold text-medical-dark mb-8 text-center">Advanced Oral Cancer Treatment Facilities & Equipment</h3>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-microscope"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Advanced Diagnostics</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    High-resolution MRI, CT, PET-CT, and advanced biopsy techniques for accurate diagnosis and staging of oral cancers.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-procedures"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Minimally Invasive Surgery</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Advanced surgical techniques including mandibulectomy, glossectomy, and reconstructive surgery to remove tumors while preserving function and appearance.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-x-ray"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Precision Radiation Therapy</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    IMRT, IGRT, and VMAT to deliver high doses to the tumor while sparing healthy tissue and salivary glands.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-pills"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Targeted Therapy</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Targeted therapies and immunotherapy for specific oral cancer subtypes, improving survival rates in advanced cases.
                                </p>
                            </div>

                            <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition">
                                <div class="bg-medical-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    <i class="fas fa-dna"></i>
                                </div>
                                <h4 class="font-bold text-medical-dark mb-3">Genetic Testing</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Genetic testing for hereditary cancer syndromes to guide personalized treatment and family screening.
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
            </section >

            <!-- Why Choose Section -->
            < section class="py-14 bg-medical-light" >
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row gap-16 items-center">
                        <div class="lg:w-1/2">
                            <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
                                Why Choose Dr. Vijay Anand Reddy for Oral Cancer Treatment?
                            </h2>
                            <p class="text-gray-600 mb-8 text-lg">
                                As a pioneer in oral cancer treatment in India, Dr. Vijay Anand Reddy brings world-class expertise in radiation oncology and comprehensive cancer care. His dedication to evidence-based medicine and patient outcomes makes him the preferred choice for oral cancer treatment.
                            </p>
                            <ul class="space-y-4">
                                {[
                                    "Best oral cancer treatment doctor in India with 30+ years experience",
                                    "Expertise in advanced radiation therapy (IMRT, IGRT)",
                                    "Personalized treatment plans for every patient",
                                    "Multidisciplinary team for comprehensive care",
                                    "Proven track record with 90%+ early detection success",
                                    "Affordable eye cancer treatment in India"
                                ].map((reason, idx) => (
                                    <li  class="flex items-center gap-3 text-gray-700 font-medium">
                                        <i class="fas fa-check-circle"></i>
                                        {reason}
                                    </li>
                                ))}
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
                                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-medical-blue text-2xl font-bold shadow-md"><FiUsers size={28} /></div>
                                <div class="text-3xl font-bold text-medical-blue mb-1">95%</div>
                                <h4 class="font-bold text-medical-dark text-sm">Success Rate</h4>
                            </div>
                        </div>
                    </div>

                    <!-- CTA - Expert Care -->
                    <div class="mt-12 bg-medical-blue p-8 rounded-2xl shadow-xl text-center border-2 border-medical-blue">
                        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            Experience World-Class Eye Cancer Treatment in India
                        </h3>
                        <p class="text-white text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of patients who have trusted Dr. Vijay Anand Reddy, the best eye cancer treatment doctor in India, for advanced cancer treatment with proven results and compassionate care.
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
            </section >

            <!-- International Patients Section -->
            < section class="py-16 bg-white" >
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Global Care
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            International Patient Services
                        </h2>
                        <p class="text-gray-600 text-lg">
                            We provide comprehensive support for international patients seeking affordable and high-quality eye cancer treatment in India.
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
                                    Our dedicated International Patient Care team is available 24/7 to assist with treatment planning, cost estimates, and travel arrangements for eye cancer treatment in India.
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
            </section >

            <!-- Most Reviewed & Highest Rated Section -->
            < section class="py-18 mt-10 bg-white" >
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-4xl mx-auto mb-12">
                        <div
                            
                            whileInV
                            
                            
                        >
                            <span class="inline-block py-2 px-4 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                                ⭐ Patient Reviews & Ratings
                            </span>
                            <h2 class="text-3xl md:text-5xl font-bold text-medical-dark mb-4">
                                Most Reviewed & Highest Rated <span class="text-medical-blue">Eye Cancer Treatment Doctor in India</span>
                            </h2>
                            <p class="text-gray-600 text-lg">
                                Dr. Vijay Anand Reddy has earned the trust of thousands of eye cancer patients through exceptional care, advanced treatment techniques, and outstanding clinical outcomes.
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
                            <p class="text-xs text-gray-500 mt-1">For Eye Cancer Treatment</p>
                        </div>
                    </div>

                    
<div id="wid_1754467080840" class="my-10 container mx-auto"></div>
<script defer src="https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1754467080840" theme="light" footer="false" widget-type="carousel" token="687a20a3a7ee08492b66abfc" apiurl="https://server.onlinereviews.tech/api/v0.0.9" stats="true" addReview="true" profile-pic="true" review-name="true" positive-stars="false" wl="true" wlndig="https://go.meddyreviews.com/dr-vijay-anand-reddy" lang="us" brandStyle="%7B%22sidebar_background%22%3A%22%236CD79E%22%2C%22sidebar_text%22%3A%22black%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23676767%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(118%2C%20118%2C%20118)%22%2C%22brand_button_active%22%3A%22rgb(88%2C%2088%2C%2088)%22%2C%22brand_main_color_opacity%22%3A%22%236767671a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fmeddyreviews.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.meddyreviews.com%2Ftopbar.png%22%7D"></script>

                </div>
            </section >

            <!-- Patient Video Testimonials -->
            < section class="py-16 bg-gray-50" >
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Patient Stories
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Video Testimonials
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Hear from our patients about their successful eye cancer treatment journey with Dr. Vijay Anand Reddy.
                        </p>
                    </div>

                    <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <!-- Main Video Player -->
                        <div class="relative aspect-video bg-black">
                            {currentVideo ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${currentVideo.videoId}?rel=0`}
                                    title={currentVideo.title}
                                    class="w-full h-full"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div class="flex items-center justify-center h-full text-white">
                                    Loading...
                                </div>
                            )}
                        </div>

                        <!-- Video Thumbnails Navigation -->
                        <div class="relative p-6 bg-white border-t border-gray-100">
                            <div class="flex items-center gap-4">
                                <button
                                    
                                    class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Previous videos"
                                >
                                    <i class="fas fa-chevron-left"></i>
                                </button>

                                <div
                                    ref={scrollContainerRef}
                                    class="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
                                    style=" scrollbar-width: none; ms-overflow-style: none "
                                >
                                    {videos.map((video) => (
                                        <div
                                            
                                            
                                            class={`flex-shrink-0 w-64 cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300 ${currentVideo?.id === video.id
                                                ? 'border-red-600 ring-2 ring-red-100'
                                                : 'border-transparent hover:border-gray-200'
                                                }`}
                                        >
                                            <div class="relative aspect-video">
                                                <img
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    class="w-full h-full object-cover"
                                                />
                                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                    <div class={`w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform ${currentVideo?.id === video.id ? 'opacity-0' : 'opacity-100'}`}>
                                                        <i class="fas fa-play"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-3 bg-gray-50 h-full">
                                                <h4 class={`text-sm font-semibold line-clamp-2 ${currentVideo?.id === video.id ? 'text-red-600' : 'text-gray-800'}`}>
                                                    {video.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    
                                    class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Next videos"
                                >
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <!-- FAQ Section -->
            < section class="py-14" >
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-8 text-center">Frequently Asked Questions</h2>
                        <p class="text-gray-600 mb-6 text-center">
                            Get answers to common questions about eye cancer treatment, costs, success rates, and what to expect from India's best eye cancer treatment doctor, Dr. Vijay Anand Reddy.
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
            </section >

            <!-- Video Modal -->
            {
                selectedVideo && (
                    <div
                        class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        
                    >
                        <div
                            class="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                            
                        >
                            <button
                                
                                class="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition"
                            >
                                <i class="fas fa-times-circle"></i>
                            </button>
                            <div class="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    class="w-full h-full"
                                ></iframe>
                            </div>
                            <div class="p-6 bg-white">
                                <h3 class="text-xl font-bold text-medical-dark">{selectedVideo.title}</h3>
                            </div>
                        </div>
                    </div>
                )
            }

            <?php include 'footer.php'; ?>
        </div >
    


    <!-- WhatsApp Widget Script -->
    <script defer src="https://app.wacrs.com/install-widget/bundle.js?key=484b0ca7-463d-4440-80be-d5486f4218a8" id="wacrs-widget-script" data-active data-widget-type="group" data-person="87189a5a-e9a7-41af-b814-23d00163f7b8"></script>
    

</body>
</html>

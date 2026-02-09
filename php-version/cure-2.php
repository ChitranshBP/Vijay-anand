<?php
include 'navbar.php';

// Data
$photos = [
    "assets/cure-foundation/cure-1.png",
    "assets/cure-foundation/cure-2.jpg",
    "assets/cure-foundation/cure-3.jpg"
];
$EVENT_LINK = "http://www.curefoundationindia.com";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CURE Foundation - Dr. Vijay Anand Reddy</title>
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
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-white flex flex-col min-h-screen">

    <!-- Hero Section with Carousel -->
    <section class="pt-20">
        <div class="relative w-full h-80 md:h-[500px] overflow-hidden shadow-md group" id="carousel">
            <?php foreach ($photos as $index => $src): ?>
                <img 
                    src="<?= $src ?>" 
                    alt="CURE Foundation banner <?= $index + 1 ?>" 
                    class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 carousel-slide <?= $index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0' ?>"
                    data-index="<?= $index ?>"
                >
            <?php endforeach; ?>

            <!-- Overlay Text -->
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white px-4 z-10">
                <h1 class="text-4xl md:text-5xl font-bold mb-3">CURE Foundation</h1>
                <p class="text-lg md:text-xl font-semibold text-white">
                    Cancer Awareness, Prevention & Care
                </p>
            </div>

            <!-- Navigation Arrows -->
            <button onclick="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20 transition" aria-label="Previous slide">
                <i data-feather="chevron-left" class="w-7 h-7"></i>
            </button>
            <button onclick="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20 transition" aria-label="Next slide">
                <i data-feather="chevron-right" class="w-7 h-7"></i>
            </button>

            <!-- Dots -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <?php foreach ($photos as $index => $src): ?>
                    <button 
                        onclick="goToSlide(<?= $index ?>)" 
                        aria-label="Go to slide <?= $index + 1 ?>"
                        class="w-3 h-3 rounded-full border border-white transition carousel-dot <?= $index === 0 ? 'bg-medical-blue' : 'bg-white opacity-70' ?>"
                        id="dot-<?= $index ?>"
                    ></button>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    <section class="py-10 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="bg-white rounded-xl shadow-xl border border-blue-100 py-10 px-8 md:px-12 text-lg leading-relaxed text-medical-dark">
                
                <div class="mb-8 border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">About CURE Foundation</h3>
                    <p>
                        CURE Foundation is a spirited initiative to create consciousness on 
                        <span class="font-semibold text-medical-blue">cancer prevention, early detection, cure & rehabilitation</span> 
                        especially for the needful. In addition to spreading awareness for the benefit of society, 
                        the Foundation has so far made available quality cancer treatment, both free and subsidized, 
                        to more than <span class="font-semibold">1100+ needy patients</span>, and engaged in numerous rehabilitation, research and education programs. 
                        CURE is a <span class="font-semibold">non-profit organization</span>.
                    </p>
                </div>

                <div class="mb-8 border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Cancer Awareness & Education</h3>
                    <p>
                        Furthermore, CURE will educate both doctors and patients about symptoms and clinical signs of cancer 
                        in order to make the proverbial 
                        <span class="font-semibold">“nipping in the bud”</span> of cancer a reality.
                    </p>
                </div>

                <div class="mb-8 border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Global Network & Multidisciplinary Care</h3>
                    <p>
                        The CURE Foundation network includes specialists in reputed hospitals all over the world, 
                        allowing impoverished patients access they would not have otherwise attained. 
                        The foundation can put together the world’s best technologies, techniques, and experts to serve this cause. 
                        CURE promises to convene a 
                        <span class="font-semibold">multi-modality Tumor Board</span>, 
                        in which specialists from all oncologic branches will come together to ensure 
                        that each patient receives unbiased opinions regarding treatment.
                    </p>
                </div>

                <div class="mb-8 border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Commitment to Research & Innovation</h3>
                    <p>
                        Undoubtedly, the future of oncology lies in research, so CURE Foundation will undertake 
                        active scientific and clinical research.
                    </p>
                </div>

                <div class="border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Knowledge Sharing & Medical Fraternity Support</h3>
                    <p>
                        Because knowledge grows by sharing, CURE Foundation will also promote scientific exchange and the spread of knowledge 
                        by organizing conferences, seminars, and workshops. The foundation will endeavour to update the medical fraternity 
                        with the latest techniques and provide a comprehensive databank to help doctors dispel the ambiguity inherent in diagnosing and treating cancer.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-12 bg-medical-blue">
        <div class="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            <div>
                <h2 class="text-2xl md:text-3xl font-bold mb-2 text-white">
                    Support CURE Foundation
                </h2>
                <p class="text-white/90 mb-2 md:mb-0">
                    Join the mission or learn more at the official CURE Foundation website.
                </p>
            </div>
            <a 
                href="<?= $EVENT_LINK ?>" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-3 px-8 py-4 bg-white text-medical-blue text-lg font-bold rounded-2xl shadow-md hover:bg-blue-50 hover:scale-105 transition"
            >
                Visit CURE Foundation
                <i data-feather="arrow-right-circle" class="w-7 h-7"></i>
            </a>
        </div>
    </section>

    <?php 
    $quoteId = 54;
    include 'quote_section.php'; 
    ?>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        // Carousel Logic
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const totalSlides = slides.length;
        let slideInterval;

        function updateSlide() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.remove('opacity-0', 'z-0');
                    slide.classList.add('opacity-100', 'z-10');
                } else {
                    slide.classList.remove('opacity-100', 'z-10');
                    slide.classList.add('opacity-0', 'z-0');
                }
            });

            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.remove('bg-white', 'opacity-70');
                    dot.classList.add('bg-medical-blue');
                } else {
                    dot.classList.remove('bg-medical-blue');
                    dot.classList.add('bg-white', 'opacity-70');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide();
            resetTimer();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide();
            resetTimer();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlide();
            resetTimer();
        }

        function startTimer() {
            slideInterval = setInterval(nextSlide, 5000); // 5 seconds
        }

        function resetTimer() {
            clearInterval(slideInterval);
            startTimer();
        }

        // Initialize
        startTimer();
    </script>
</body>
</html>

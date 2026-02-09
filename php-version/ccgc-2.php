<?php
include 'navbar.php';

// Data
$photos = [
    "assets/golf-championship/golf-1.jpg",
    "assets/golf-championship/golf-2.jpg",
    "assets/golf-championship/golf-3.png"
];
$EVENT_LINK = "https://www.cancercrusadersgolf.com/";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cancer Crusaders Golf Championship - Dr. Vijay Anand Reddy</title>
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
        <div class="relative w-full h-96 md:h-[600px] overflow-hidden rounded-b-3xl shadow-md group" id="carousel">
            <?php foreach ($photos as $index => $src): ?>
                <img 
                    src="<?= $src ?>" 
                    alt="Cancer Crusaders Golf banner <?= $index + 1 ?>" 
                    class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 rounded-b-3xl carousel-slide <?= $index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0' ?>"
                    data-index="<?= $index ?>"
                >
            <?php endforeach; ?>

            <!-- Overlay Text -->
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white px-4 z-20">
                <h1 class="text-4xl md:text-5xl font-bold mb-3">
                    Cancer Crusaders Golf Championship
                </h1>
                <p class="text-lg md:text-xl font-semibold">
                    by Cure Foundation
                </p>
            </div>

            <!-- Navigation Arrows -->
            <button onclick="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-30 transition" aria-label="Previous slide">
                <i data-feather="chevron-left" class="w-7 h-7"></i>
            </button>
            <button onclick="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-30 transition" aria-label="Next slide">
                <i data-feather="chevron-right" class="w-7 h-7"></i>
            </button>

            <!-- Dots -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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
                    <h3 class="text-2xl font-semibold mb-3">About the Event</h3>
                    <p>
                        Cancer Crusaders Golf Championship is a 
                        <span class="font-semibold text-medical-blue">fundraiser and awareness initiative</span> 
                        by Cure Foundation. Through this event, we intend to 
                        <span class="font-semibold">raise money and spread cancer awareness</span> 
                        in the society through extensive participation from ace golfers,
                        outstanding sports persons, celebrity figures, and opinion leaders.
                    </p>
                </div>

                <div class="mb-8 border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Community Impact</h3>
                    <p>
                        This will be a remarkable day as the leaders of the community set
                        an impactful example through participation and declare support to
                        this virtuous cause. It will be a fulfilling day of social service
                        along with great fun.
                    </p>
                </div>

                <div class="mb-8 border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Player Appreciation</h3>
                    <p>
                        Needless to say, as our token of appreciation, each player is
                        guaranteed 
                        <span class="font-semibold">three prizes</span> and an equal
                        number of goodies!
                    </p>
                </div>

                <div class="border-l-4 border-medical-blue pl-4">
                    <h3 class="text-2xl font-semibold mb-3">Walk of Life & Celebration</h3>
                    <p>
                        Besides the tournament, we promise you a 
                        <span class="font-semibold">fun filled ‘Walk of Life’</span>,
                        followed by cocktail and dinner that will take place at Novotel
                        Hyderabad Convention Centre. The Walk of Life itself is a custom
                        designed format lasting about 40 minutes, designed to entertain
                        and give celebrities an opportunity to take a shot at the game.
                        Our aim is to create a fun, yet unique environment where
                        celebrities get to interact among themselves and with the audience
                        and golfers.
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
                    Support the Cause
                </h2>
                <p class="text-white/90 mb-2 md:mb-0">
                    Join the championship or learn more at the Cure Foundation official website.
                </p>
            </div>
            <a 
                href="<?= $EVENT_LINK ?>" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-3 px-8 py-4 bg-white text-medical-blue text-lg font-bold rounded-2xl shadow-md hover:bg-blue-50 hover:scale-105 transition"
            >
                Visit Cancer Crusaders Golf Championship
                <i data-feather="arrow-right-circle" class="w-7 h-7"></i>
            </a>
        </div>
    </section>

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

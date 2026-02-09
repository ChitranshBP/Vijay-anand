<?php
include 'navbar.php';

// Data
$familyPhoto = "assets/family/vijay-family.jpg";
$housePhotos = [
    "assets/family/house-2.jpg",
    "assets/family/house-3.jpg",
    "assets/family/house-4.jpg",
    "assets/family/house-5.jpg",
    "assets/family/house-6.jpg",
    "assets/family/house-7.jpg",
    "assets/family/house-8.jpg",
    "assets/family/house-9.jpg",
    "assets/family/house-10.jpg",
    "assets/family/house-11.jpg",
    "assets/family/house-12.jpg",
    "assets/family/house-13.jpg",
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Reddy Family - Dr. Vijay Anand Reddy</title>
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
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="bg-white flex flex-col min-h-screen">

    <!-- Hero Section -->
    <section class="pt-32 mt-12 pb-12 bg-medical-blue/10">
        <div class="max-w-4xl mx-auto px-4 text-center reveal">
            <div class="mx-auto w-10 h-10 text-medical-blue mb-2 flex items-center justify-center">
                <i data-feather="users" class="w-full h-full"></i>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-medical-dark mb-4">The Reddy Family</h1>
            <p class="text-lg text-gray-700">
                A journey of togetherness, traditions, and values that bring our family closer across generations.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto p-8 text-gray-900 font-sans">
        
        <!-- Family Intro -->
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 reveal">
            <!-- Left side - Image -->
            <section aria-label="Main family photo" class="flex-shrink-0 cursor-pointer w-full md:w-auto">
                <img 
                    src="<?= $familyPhoto ?>" 
                    alt="Reddy Family" 
                    onclick="openModal('<?= $familyPhoto ?>')"
                    class="rounded-lg shadow-lg w-full md:max-h-96 object-cover hover:opacity-90 transition-opacity duration-300"
                >
            </section>

            <!-- Right side - Content -->
            <header class="text-left">
                <p class="text-lg leading-relaxed text-gray-700">
                    Dr. Reddy is blissfully married to his college sweetheart Dr. Shashikala (1983), 
                    an academic stalwart serving for years as the Professor of Microbiology at Osmania 
                    Medical College and elevated to the post of the Principal of Osmania Group of Institutions. 
                    Together, they made Mr. P. Vijay Vishal Reddy (1984) who established himself as an experienced 
                    serial entrepreneur in India and the UK.
                    <br /><br />
                    Shortly after, arrived Dr. P. Vijay Karan Reddy (1987), who gracefully exceeds his father's 
                    expectations in becoming a renowned Radiation Oncologist himself. Dr. Karan is married to 
                    Dr. Aashna Reddy (2016), a young and promising Dermatologist and together they bring the 
                    most intriguing ball of cheerfulness into the family, Ms. Anaika Karan Reddy (2020).
                </p>
            </header>
        </div>

        <!-- House Photos Gallery -->
        <section aria-label="House photos gallery" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            <?php foreach ($housePhotos as $index => $src): ?>
                <div class="reveal">
                    <img 
                        src="<?= $src ?>" 
                        alt="House photo <?= $index + 1 ?>" 
                        onclick="openModal('<?= $src ?>')"
                        class="rounded-md shadow-md cursor-pointer object-cover h-40 w-full hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    >
                </div>
            <?php endforeach; ?>
        </section>

        <!-- Residence Section -->
        <section class="bg-purple-100 p-6 rounded-md mx-auto max-w-lg reveal">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                <!-- Left side: Image -->
                <div class="flex-shrink-0">
                    <img 
                        src="assets/family/house-1.jpg" 
                        alt="Residence" 
                        class="w-48 h-48 object-cover rounded-lg shadow-md"
                    >
                </div>

                <!-- Right side: Content -->
                <div class="text-center md:text-left">
                    <h2 class="text-2xl font-semibold mb-4 text-medical-blue">Residence</h2>
                    <address class="not-italic text-gray-800 leading-relaxed mb-4 text-base">
                        Indraprasta, Plot No. 54A, Road No. 8, Site II Film Nagar,<br />
                        Hyderabad 500 096,<br />
                        Telangana, India.
                    </address>
                    <p class="text-medical-blue space-y-1 text-base">
                        <a href="mailto:cancercare@drvijayanandreddy.com" class="underline hover:text-medical-blue block">
                            cancercare@drvijayanandreddy.com
                        </a>
                        <a href="mailto:drvareddy_p@apollohospitals.com" class="underline hover:text-medical-blue block">
                            drvareddy_p@apollohospitals.com
                        </a>
                    </p>
                </div>
            </div>
        </section>

    </div>

    <!-- Image Modal -->
    <div id="image-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden" role="dialog" aria-modal="true" onclick="closeModal()">
        <button onclick="closeModal()" aria-label="Close modal" class="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none">&times;</button>
        <img id="modal-img" src="" alt="Enlarged view" class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl" onclick="event.stopPropagation()">
    </div>

    <?php 
    $quoteId = 58;
    include 'quote_section.php'; 
    ?>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        function openModal(src) {
            document.getElementById('modal-img').src = src;
            document.getElementById('image-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('image-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });

        // Scroll Reveal Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    </script>
</body>
</html>

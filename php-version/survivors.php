<?php
include 'navbar.php';
include 'survivors_data.php'; 

// Sort survivors by date (latest first)
usort($survivors, function($a, $b) {
    $dateA = isset($a['date']) ? strtotime($a['date']) : 0;
    $dateB = isset($b['date']) ? strtotime($b['date']) : 0;
    return $dateB - $dateA;
});

$survivorId = isset($_GET['id']) ? $_GET['id'] : null;
$currentSurvivor = null;

if ($survivorId) {
    foreach ($survivors as $s) {
        if ($s['id'] === $survivorId) {
            $currentSurvivor = $s;
            break;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $currentSurvivor ? htmlspecialchars($currentSurvivor['title'] ?? $currentSurvivor['name']) : 'I Am a Survivor' ?> - Dr. Vijay Anand Reddy</title>
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
<body class="bg-gray-50 flex flex-col min-h-screen">

    <?php if ($currentSurvivor): ?>
        <!-- ================= DETAIL VIEW ================= -->
        
        <!-- Breadcrumb -->
        <div class="bg-white border-b border-gray-200 mt-28"> <!-- Adjusted margin-top for fixed navbar -->
            <div class="max-w-7xl mx-auto px-6 py-4">
                <nav class="flex items-center gap-2 text-sm text-gray-600">
                    <a href="index.php" class="hover:text-medical-blue transition">Home</a>
                    <span>/</span>
                    <a href="survivors.php" class="hover:text-medical-blue transition">I Am a Survivor</a>
                    <span>/</span>
                    <span class="text-medical-dark font-medium"><?= htmlspecialchars($currentSurvivor['name'] ?? $currentSurvivor['title']) ?></span>
                </nav>
            </div>
        </div>

        <!-- Hero Banner / Carousel -->
        <?php if (!empty($currentSurvivor['banners'])): ?>
            <div class="relative w-full h-[70vh] overflow-hidden group bg-gray-900" id="banner-carousel">
                <?php foreach ($currentSurvivor['banners'] as $idx => $banner): ?>
                    <div
                        class="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-700 banner-slide <?= $idx === 0 ? 'opacity-100' : 'opacity-0' ?>"
                        style="background-image: url('<?= htmlspecialchars($banner) ?>'); background-position: center 20%;"
                        data-index="<?= $idx ?>"
                    ></div>
                <?php endforeach; ?>

                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                <!-- Content -->
                <div class="absolute inset-0 flex flex-col justify-end pb-16 px-6 pointer-events-none">
                    <div class="max-w-7xl mx-auto w-full">
                        <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
                            <?= htmlspecialchars($currentSurvivor['title'] ?? $currentSurvivor['name']) ?>
                        </h1>
                        <div class="flex flex-wrap items-center gap-4 text-white/90 text-lg">
                            <?php if (!empty($currentSurvivor['date'])): ?>
                                <div class="flex items-center gap-2">
                                    <i data-feather="calendar" class="w-5 h-5"></i>
                                    <span class="font-medium">
                                        <?= date('F j, Y', strtotime($currentSurvivor['date'])) ?>
                                    </span>
                                </div>
                            <?php endif; ?>
                            <?php if (!empty($currentSurvivor['author'])): ?>
                                <div class="flex items-center gap-2">
                                    <i data-feather="user" class="w-5 h-5"></i>
                                    <span class="font-medium"><?= htmlspecialchars($currentSurvivor['author']) ?></span>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>

                <!-- Controls (only if multiple) -->
                <?php if (count($currentSurvivor['banners']) > 1): ?>
                    <button onclick="prevBanner()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100 z-10 cursor-pointer">
                        <i data-feather="chevron-left" class="text-medical-blue w-8 h-8"></i>
                    </button>
                    <button onclick="nextBanner()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100 z-10 cursor-pointer">
                        <i data-feather="chevron-right" class="text-medical-blue w-8 h-8"></i>
                    </button>
                    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        <?php foreach ($currentSurvivor['banners'] as $i => $b): ?>
                            <button onclick="setBanner(<?= $i ?>)" class="dot-indicator w-3 h-3 rounded-full transition-all duration-300 <?= $i === 0 ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75' ?>" id="dot-<?= $i ?>"></button>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php else: ?>
             <!-- Fallback Hero -->
            <div class="relative w-full h-[40vh] bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
                <div class="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                    <div class="max-w-7xl mx-auto w-full">
                         <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
                            <?= htmlspecialchars($currentSurvivor['title'] ?? $currentSurvivor['name']) ?>
                        </h1>
                         <?php if (!empty($currentSurvivor['date'])): ?>
                            <div class="flex items-center justify-center gap-2 text-white/90 text-lg">
                                <i data-feather="calendar" class="w-5 h-5"></i>
                                <span class="font-medium">
                                    <?= date('F j, Y', strtotime($currentSurvivor['date'])) ?>
                                </span>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <!-- Story Content -->
        <section class="max-w-5xl mx-auto px-6 py-16">
            <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 class="text-3xl font-bold text-medical-dark mb-6 border-b-4 border-purple-500 inline-block pb-2">
                    My Journey
                </h2>
                <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap"><?= nl2br(htmlspecialchars($currentSurvivor['description'] ?? $currentSurvivor['story'])) ?></p>
                </div>
            </div>
        </section>

        <!-- Photo Gallery -->
        <?php if (!empty($currentSurvivor['photos'])): ?>
            <section class="max-w-7xl mx-auto px-6 pb-20">
                <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h2 class="text-3xl font-bold text-medical-dark mb-8 text-center">
                        Photo Gallery
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <?php foreach ($currentSurvivor['photos'] as $idx => $photo): ?>
                            <div
                                class="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                onclick="openPhotoModal(<?= $idx ?>)"
                            >
                                <img
                                    src="<?= htmlspecialchars($photo) ?>"
                                    alt="Photo <?= $idx + 1 ?>"
                                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                >
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span class="text-white font-semibold text-sm">View Full Size</span>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <!-- Photo Modal -->
        <div id="photo-modal" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm hidden" onclick="closePhotoModal()">
            <div class="relative max-w-7xl w-full flex flex-col items-center" onclick="event.stopPropagation()">
                <img id="modal-img" src="" alt="Enlarged" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl mb-4">
                
                <button onclick="prevPhoto()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110">
                    <i data-feather="chevron-left" class="text-medical-blue w-8 h-8"></i>
                </button>
                <button onclick="nextPhoto()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110">
                    <i data-feather="chevron-right" class="text-medical-blue w-8 h-8"></i>
                </button>
                <button onclick="closePhotoModal()" class="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-xl hover:scale-110">
                    <i data-feather="x" class="text-medical-dark w-6 h-6"></i>
                </button>

                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium" id="photo-counter">
                    1 / 1
                </div>
            </div>
        </div>

        <?php 
            $quoteId = 60; 
            include 'quote_section.php'; 
        ?>

    <?php else: ?>
        <!-- ================= LIST VIEW ================= -->

        <!-- Hero Section -->
        <section class="pb-10 pt-44 text-center bg-gradient-to-br from-medical-blue/10 to-purple-50">
            <h1 class="text-4xl font-extrabold text-medical-dark mb-2">
                I Am a Survivor
            </h1>
            <p class="text-medical-blue text-lg mb-6">
                Stories of hope, courage, and triumph over cancer
            </p>
        </section>

        <!-- List Grid -->
        <div class="max-w-6xl mt-10 mx-auto px-6 mb-20 flex-grow">
            <?php if (empty($survivors)): ?>
                <div class="text-center py-20">
                     <p class="text-gray-500 text-lg">No survivor stories found. Check back later for inspiring stories.</p>
                </div>
            <?php else: ?>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php foreach ($survivors as $survivor): ?>
                        <div
                            class="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 flex flex-col overflow-hidden"
                            onclick="window.location.href='survivors.php?id=<?= $survivor['id'] ?>'"
                        >
                            <div class="h-48 w-full relative">
                                <?php if (!empty($survivor['banners'])): ?>
                                    <img
                                        src="<?= htmlspecialchars($survivor['banners'][0]) ?>"
                                        alt="<?= htmlspecialchars($survivor['title'] ?? $survivor['name']) ?>"
                                        class="h-full w-full object-cover"
                                        loading="lazy"
                                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                                    >
                                    <!-- Fallback if load fails (hidden by default) -->
                                    <div class="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4 text-white text-center absolute inset-0 hidden">
                                        <h3 class="text-xl font-bold"><?= htmlspecialchars($survivor['title'] ?? $survivor['name']) ?></h3>
                                    </div>
                                <?php else: ?>
                                    <!-- Fallback if no banner -->
                                    <div class="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4 text-white text-center">
                                        <h3 class="text-xl font-bold"><?= htmlspecialchars($survivor['title'] ?? $survivor['name']) ?></h3>
                                    </div>
                                <?php endif; ?>
                            </div>

                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="font-bold text-xl mb-2 text-medical-dark line-clamp-2">
                                    <?= htmlspecialchars($survivor['title'] ?? $survivor['name']) ?>
                                </h3>
                                
                                <?php if (!empty($survivor['date'])): ?>
                                    <p class="text-sm text-medical-blue font-semibold mb-2">
                                        <?= date('F j, Y', strtotime($survivor['date'])) ?>
                                    </p>
                                <?php endif; ?>

                                <p class="text-gray-600 line-clamp-3 flex-1 mb-4">
                                    <?= htmlspecialchars(substr($survivor['description'] ?? $survivor['story'], 0, 200)) ?>...
                                </p>

                                <button class="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition self-start">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>

        <?php 
            $quoteId = 53; 
            include 'quote_section.php'; 
        ?>

    <?php endif; ?>

    <?php include 'footer.php'; ?>

    <!-- JavaScript for Detail View (Modal & Carousel) -->
    <?php if ($currentSurvivor): ?>
    <script>
        feather.replace();

        // --- Banner Carousel Logic ---
        const banners = document.querySelectorAll('.banner-slide');
        let currentBannerIdx = 0;
        const totalBanners = banners.length;

        function updateBanner(idx) {
            banners.forEach((b, i) => {
                if (i === idx) {
                    b.classList.remove('opacity-0');
                    b.classList.add('opacity-100');
                } else {
                    b.classList.remove('opacity-100');
                    b.classList.add('opacity-0');
                }
            });
            
            // Update dots
            const dots = document.querySelectorAll('.dot-indicator');
            dots.forEach((d, i) => {
                if (i === idx) {
                    d.classList.remove('bg-white/50', 'w-3');
                    d.classList.add('bg-white', 'w-8');
                } else {
                    d.classList.remove('bg-white', 'w-8');
                    d.classList.add('bg-white/50', 'w-3');
                }
            });
            currentBannerIdx = idx;
        }

        function nextBanner() {
            if (totalBanners > 1) {
                updateBanner((currentBannerIdx + 1) % totalBanners);
            }
        }

        function prevBanner() {
            if (totalBanners > 1) {
                updateBanner((currentBannerIdx - 1 + totalBanners) % totalBanners);
            }
        }
        
        function setBanner(idx) {
            updateBanner(idx);
        }

        // --- Photo Modal Logic ---
        <?php if (!empty($currentSurvivor['photos'])): ?>
            const photos = <?= json_encode($currentSurvivor['photos']) ?>;
            let currentPhotoIdx = 0;
            const modal = document.getElementById('photo-modal');
            const modalImg = document.getElementById('modal-img');
            const counter = document.getElementById('photo-counter');

            function openPhotoModal(idx) {
                currentPhotoIdx = idx;
                updateModalImage();
                modal.classList.remove('hidden');
            }

            function closePhotoModal() {
                modal.classList.add('hidden');
            }

            function updateModalImage() {
                modalImg.src = photos[currentPhotoIdx];
                counter.innerText = (currentPhotoIdx + 1) + ' / ' + photos.length;
            }

            function nextPhoto() {
                currentPhotoIdx = (currentPhotoIdx + 1) % photos.length;
                updateModalImage();
            }

            function prevPhoto() {
                currentPhotoIdx = (currentPhotoIdx - 1 + photos.length) % photos.length;
                updateModalImage();
            }
        <?php endif; ?>
    </script>
    <?php else: ?>
    <script>
        feather.replace();
    </script>
    <?php endif; ?>

</body>
</html>

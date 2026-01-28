<?php
include 'navbar.php';
include 'events_data.php';

// Sort events by date (latest first)
usort($events, function($a, $b) {
    $dateA = isset($a['date']) ? strtotime($a['date']) : 0;
    $dateB = isset($b['date']) ? strtotime($b['date']) : 0;
    return $dateB - $dateA;
});

$eventId = isset($_GET['id']) ? $_GET['id'] : null;
$currentEvent = null;

if ($eventId) {
    foreach ($events as $e) {
        if ($e['id'] === $eventId) {
            $currentEvent = $e;
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
    <title><?= $currentEvent ? htmlspecialchars($currentEvent['title']) : 'Events & Awareness Programmes' ?> - Dr. Vijay Anand Reddy</title>
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

    <?php if ($currentEvent): ?>
        <!-- ================= DETAIL VIEW ================= -->
        
        <?php
        // Determine gallery structure
        $hasGalleryTabs = false;
        $printPhotos = [];
        $digitalPhotos = [];
        $simplePhotos = [];

        if (isset($currentEvent['gallery'])) {
            if (isset($currentEvent['gallery']['print']) || isset($currentEvent['gallery']['digital'])) {
                $hasGalleryTabs = true;
                $printPhotos = isset($currentEvent['gallery']['print']) ? $currentEvent['gallery']['print'] : [];
                $digitalPhotos = isset($currentEvent['gallery']['digital']) ? $currentEvent['gallery']['digital'] : [];
            } else if (is_array($currentEvent['gallery'])) {
                $simplePhotos = $currentEvent['gallery'];
            }
        } else if (isset($currentEvent['photos'])) {
            $simplePhotos = $currentEvent['photos'];
        }
        
        // Prepare JSON for JS
        $galleryData = [
            'hasTabs' => $hasGalleryTabs,
            'print' => $printPhotos,
            'digital' => $digitalPhotos,
            'simple' => $simplePhotos
        ];
        ?>

        <!-- Breadcrumb -->
        <div class="bg-white border-b border-gray-200 mt-28">
            <div class="max-w-7xl mx-auto px-6 py-4">
                <nav class="flex items-center gap-2 text-sm text-gray-600">
                    <a href="index.php" class="hover:text-medical-blue transition">Home</a>
                    <span>/</span>
                    <a href="events.php" class="hover:text-medical-blue transition">Events</a>
                    <span>/</span>
                    <span class="text-medical-dark font-medium"><?= htmlspecialchars($currentEvent['title']) ?></span>
                </nav>
            </div>
        </div>

        <!-- Hero Banner / Carousel -->
        <?php if (!empty($currentEvent['banners'])): ?>
            <div class="relative w-full h-[70vh] overflow-hidden group bg-gray-900" id="banner-carousel">
                <?php foreach ($currentEvent['banners'] as $idx => $banner): ?>
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
                            <?= htmlspecialchars($currentEvent['title']) ?>
                        </h1>
                        <?php if (!empty($currentEvent['date'])): ?>
                            <div class="flex items-center gap-2 text-white/90 text-lg">
                                <i data-feather="calendar" class="w-5 h-5"></i>
                                <span class="font-medium">
                                    <?= date('F j, Y', strtotime($currentEvent['date'])) ?>
                                </span>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Controls (only if multiple) -->
                <?php if (count($currentEvent['banners']) > 1): ?>
                    <button onclick="prevBanner()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100 z-10 cursor-pointer">
                        <i data-feather="chevron-left" class="text-medical-blue w-8 h-8"></i>
                    </button>
                    <button onclick="nextBanner()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100 z-10 cursor-pointer">
                        <i data-feather="chevron-right" class="text-medical-blue w-8 h-8"></i>
                    </button>
                    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        <?php foreach ($currentEvent['banners'] as $i => $b): ?>
                            <button onclick="setBanner(<?= $i ?>)" class="dot-indicator w-3 h-3 rounded-full transition-all duration-300 <?= $i === 0 ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75' ?>" id="dot-<?= $i ?>"></button>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php else: ?>
            <!-- Fallback Hero -->
            <div class="relative w-full h-[40vh] bg-gradient-to-br from-medical-blue to-blue-700 overflow-hidden">
                <div class="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                    <div class="max-w-7xl mx-auto w-full">
                         <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
                            <?= htmlspecialchars($currentEvent['title']) ?>
                        </h1>
                         <?php if (!empty($currentEvent['date'])): ?>
                            <div class="flex items-center justify-center gap-2 text-white/90 text-lg">
                                <i data-feather="calendar" class="w-5 h-5"></i>
                                <span class="font-medium">
                                    <?= date('F j, Y', strtotime($currentEvent['date'])) ?>
                                </span>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <!-- Description Content -->
        <section class="max-w-5xl mx-auto px-6 py-16">
            <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 class="text-3xl font-bold text-medical-dark mb-6 border-b-4 border-medical-blue inline-block pb-2">
                    About This Event
                </h2>
                <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap"><?= nl2br(htmlspecialchars($currentEvent['description'])) ?></p>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <?php if ($hasGalleryTabs || !empty($simplePhotos)): ?>
            <section class="max-w-7xl mx-auto px-6 pb-20">
                <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h2 class="text-3xl font-bold text-medical-dark mb-8 text-center">
                        Event Gallery
                    </h2>

                    <?php if ($hasGalleryTabs): ?>
                        <div class="flex justify-center mb-8">
                            <div class="inline-flex rounded-lg bg-gray-100 p-1">
                                <?php if (!empty($printPhotos)): ?>
                                    <button
                                        onclick="switchTab('print')"
                                        id="tab-btn-print"
                                        class="px-8 py-3 rounded-lg font-semibold transition-all duration-200 bg-medical-blue text-white shadow-md"
                                    >
                                        Print Media
                                    </button>
                                <?php endif; ?>
                                <?php if (!empty($digitalPhotos)): ?>
                                    <button
                                        onclick="switchTab('digital')"
                                        id="tab-btn-digital"
                                        class="px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-gray-600 hover:text-medical-dark"
                                    >
                                        Digital Media
                                    </button>
                                <?php endif; ?>
                            </div>
                        </div>

                         <div id="gallery-print" class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <?php foreach ($printPhotos as $idx => $photo): ?>
                                <div class="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer" onclick="openPhotoModal(<?= $idx ?>, 'print')">
                                    <img src="<?= htmlspecialchars($photo) ?>" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span class="text-white font-semibold text-sm">View Full Size</span>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <div id="gallery-digital" class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden">
                            <?php foreach ($digitalPhotos as $idx => $photo): ?>
                                <div class="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer" onclick="openPhotoModal(<?= $idx ?>, 'digital')">
                                     <img src="<?= htmlspecialchars($photo) ?>" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span class="text-white font-semibold text-sm">View Full Size</span>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>

                    <?php else: ?>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <?php foreach ($simplePhotos as $idx => $photo): ?>
                                <div class="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer" onclick="openPhotoModal(<?= $idx ?>, 'simple')">
                                    <img src="<?= htmlspecialchars($photo) ?>" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span class="text-white font-semibold text-sm">View Full Size</span>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>

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


    <?php else: ?>
        <!-- ================= LIST VIEW ================= -->

        <!-- Hero Section -->
        <section class="pb-10 pt-44 text-center bg-medical-blue/10">
            <h1 class="text-4xl font-extrabold text-medical-dark mb-2">
                Events & Awareness Programmes
            </h1>
            <p class="text-medical-blue text-lg mb-6">
                Explore all our events and awareness initiatives
            </p>
        </section>

        <!-- List Grid -->
        <div class="max-w-6xl mt-10 mx-auto px-6 mb-20 flex-grow">
            <?php if (empty($events)): ?>
                 <div class="text-center py-20">
                    <p class="text-gray-500 text-lg">No events found. Check back later for updates.</p>
                </div>
            <?php else: ?>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     <?php foreach ($events as $event): ?>
                        <div
                            class="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 flex flex-col overflow-hidden"
                            onclick="window.location.href='events.php?id=<?= $event['id'] ?>'"
                        >
                            <div class="h-48 w-full relative">
                                <?php if (!empty($event['banners'])): ?>
                                    <img
                                        src="<?= htmlspecialchars($event['banners'][0]) ?>"
                                        alt="<?= htmlspecialchars($event['title']) ?>"
                                        class="h-full w-full object-cover"
                                        loading="lazy"
                                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                                    >
                                     <div class="h-full w-full bg-gradient-to-br from-medical-blue to-blue-700 flex items-center justify-center p-4 text-white text-center absolute inset-0 hidden">
                                        <h3 class="text-xl font-bold"><?= htmlspecialchars($event['title']) ?></h3>
                                    </div>
                                <?php else: ?>
                                    <div class="h-full w-full bg-gradient-to-br from-medical-blue to-blue-700 flex items-center justify-center p-4 text-white text-center">
                                        <h3 class="text-xl font-bold"><?= htmlspecialchars($event['title']) ?></h3>
                                    </div>
                                <?php endif; ?>
                            </div>

                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="font-bold text-xl mb-2 text-medical-dark line-clamp-2">
                                    <?= htmlspecialchars($event['title']) ?>
                                </h3>

                                <?php if (!empty($event['date'])): ?>
                                    <p class="text-sm text-medical-blue font-semibold mb-2">
                                        <?= date('F j, Y', strtotime($event['date'])) ?>
                                    </p>
                                <?php endif; ?>

                                <p class="text-gray-600 line-clamp-3 flex-1 mb-4">
                                     <?= htmlspecialchars(substr($event['description'], 0, 150)) ?>...
                                </p>
                                
                                <button class="bg-medical-blue text-white font-medium px-4 py-2 rounded hover:bg-medical-dark transition self-start">
                                    Read More
                                </button>
                            </div>
                        </div>
                     <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    
    <?php endif; ?>

    <?php include 'footer.php'; ?>

    <!-- Scripts -->
    <?php if ($currentEvent): ?>
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
            if (totalBanners > 1) updateBanner((currentBannerIdx + 1) % totalBanners);
        }
        function prevBanner() {
            if (totalBanners > 1) updateBanner((currentBannerIdx - 1 + totalBanners) % totalBanners);
        }
        function setBanner(idx) { updateBanner(idx); }

        // --- Tab Logic ---
        const galleryData = <?= json_encode($galleryData) ?>;
        let activeTab = 'simple'; // 'simple', 'print', 'digital'

        if (galleryData.hasTabs) {
            activeTab = 'print'; // Default to print if tabs exist
        }

        function switchTab(tab) {
            activeTab = tab;
            // Update buttons
            const btnPrint = document.getElementById('tab-btn-print');
            const btnDigital = document.getElementById('tab-btn-digital');
            
            if (tab === 'print') {
                if(btnPrint) {
                    btnPrint.classList.add('bg-medical-blue', 'text-white', 'shadow-md');
                    btnPrint.classList.remove('text-gray-600', 'hover:text-medical-dark');
                }
                if(btnDigital) {
                    btnDigital.classList.remove('bg-medical-blue', 'text-white', 'shadow-md');
                    btnDigital.classList.add('text-gray-600', 'hover:text-medical-dark');
                }
                document.getElementById('gallery-print').classList.remove('hidden');
                document.getElementById('gallery-digital').classList.add('hidden');
            } else {
                if(btnPrint) {
                    btnPrint.classList.remove('bg-medical-blue', 'text-white', 'shadow-md');
                    btnPrint.classList.add('text-gray-600', 'hover:text-medical-dark');
                }
                if(btnDigital) {
                    btnDigital.classList.add('bg-medical-blue', 'text-white', 'shadow-md');
                    btnDigital.classList.remove('text-gray-600', 'hover:text-medical-dark');
                }
                document.getElementById('gallery-print').classList.add('hidden');
                document.getElementById('gallery-digital').classList.remove('hidden');
            }
        }

        // --- Modal Logic ---
        const modal = document.getElementById('photo-modal');
        const modalImg = document.getElementById('modal-img');
        const counter = document.getElementById('photo-counter');
        let currentPhotoIdx = 0;
        let currentPhotos = [];

        function openPhotoModal(idx, source) {
            if (source === 'print') currentPhotos = galleryData.print;
            else if (source === 'digital') currentPhotos = galleryData.digital;
            else currentPhotos = galleryData.simple;

            currentPhotoIdx = idx;
            updateModalImage();
            modal.classList.remove('hidden');
        }

        function closePhotoModal() {
            modal.classList.add('hidden');
        }

        function updateModalImage() {
            if (currentPhotos.length > 0) {
                modalImg.src = currentPhotos[currentPhotoIdx];
                counter.innerText = (currentPhotoIdx + 1) + ' / ' + currentPhotos.length;
            }
        }

        function nextPhoto() {
            if (currentPhotos.length > 0) {
                currentPhotoIdx = (currentPhotoIdx + 1) % currentPhotos.length;
                updateModalImage();
            }
        }

        function prevPhoto() {
             if (currentPhotos.length > 0) {
                currentPhotoIdx = (currentPhotoIdx - 1 + currentPhotos.length) % currentPhotos.length;
                updateModalImage();
             }
        }
    </script>
    <?php else: ?>
    <script>
        feather.replace();
    </script>
    <?php endif; ?>

</body>
</html>

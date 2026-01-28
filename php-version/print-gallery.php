<?php
include 'navbar.php';
include 'print_gallery_data.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Print & Digital Gallery - Dr. Vijay Anand Reddy</title>
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
<body class="bg-white flex flex-col min-h-screen">

    <!-- Hero Section -->
    <section class="relative min-h-[400px] pt-44 pb-16 overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 bg-medical-blue/10"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <div class="inline-flex items-center bg-medical-blue/10 text-medical-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <i data-feather="image" class="w-4 h-4 mr-2"></i>
                    Media Coverage & Events
                </div>

                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight">
                    Gallery
                </h1>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Explore our collection of media coverage, events, and cancer awareness initiatives
                </p>
            </div>
        </div>
    </section>

    <!-- Tabs -->
    <div class="sticky top-20 z-40 bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex border-b border-gray-200">
                <button
                    onclick="switchTab('print')"
                    id="tab-btn-print"
                    class="px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 border-medical-blue text-medical-blue"
                >
                    Print Gallery
                </button>
                <button
                    onclick="switchTab('digital')"
                    id="tab-btn-digital"
                    class="px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 border-transparent text-gray-600 hover:text-medical-blue hover:border-gray-300"
                >
                    Digital Gallery
                </button>
            </div>
        </div>
    </div>

    <!-- Gallery Content -->
    <div class="flex-grow">
        
        <!-- Print Gallery -->
        <div id="gallery-print" class="block">
            <?php foreach ($printGallery as $sectionIdx => $section): ?>
                <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <?php if (!empty($section['title'])): ?>
                        <h2 class="text-3xl font-bold text-medical-dark mb-8 text-center">
                            <?= htmlspecialchars($section['title']) ?>
                        </h2>
                    <?php endif; ?>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <?php foreach ($section['images'] as $imgIdx => $image): ?>
                            <button
                                class="overflow-hidden rounded-lg shadow-md cursor-pointer focus:outline-medical-blue hover:shadow-xl transition-shadow duration-300"
                                onclick="openModal('print', <?= $sectionIdx ?>, <?= $imgIdx ?>)"
                            >
                                <img
                                    src="<?= htmlspecialchars($image['thumbnail']) ?>"
                                    alt="Gallery image"
                                    class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                >
                            </button>
                        <?php endforeach; ?>
                    </div>
                </section>
            <?php endforeach; ?>
        </div>

        <!-- Digital Gallery -->
        <div id="gallery-digital" class="hidden">
            <?php foreach ($digitalGallery as $sectionIdx => $section): ?>
                <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <?php if (!empty($section['title'])): ?>
                        <h2 class="text-3xl font-bold text-medical-dark mb-8 text-center">
                            <?= htmlspecialchars($section['title']) ?>
                        </h2>
                    <?php endif; ?>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <?php foreach ($section['images'] as $imgIdx => $image): ?>
                            <button
                                class="overflow-hidden rounded-lg shadow-md cursor-pointer focus:outline-medical-blue hover:shadow-xl transition-shadow duration-300"
                                onclick="openModal('digital', <?= $sectionIdx ?>, <?= $imgIdx ?>)"
                            >
                                <img
                                    src="<?= htmlspecialchars($image['thumbnail']) ?>"
                                    alt="Gallery image"
                                    class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                >
                            </button>
                        <?php endforeach; ?>
                    </div>
                </section>
            <?php endforeach; ?>
        </div>

    </div>

    <!-- Modal -->
    <div id="image-modal" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden" onclick="closeModal()">
        <button class="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors" onclick="closeModal(event)">
            <i data-feather="x"></i>
        </button>
        <button class="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors" onclick="prevImage(event)">
            <i data-feather="chevron-left"></i>
        </button>

        <img id="modal-image" src="" alt="Large view" class="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg object-contain" onclick="event.stopPropagation()">

        <button class="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors" onclick="nextImage(event)">
            <i data-feather="chevron-right"></i>
        </button>
    </div>

    <?php include 'footer.php'; ?>

    <!-- JSON Data for JS Modal -->
    <script>
        const printGalleryData = <?= json_encode($printGallery) ?>;
        const digitalGalleryData = <?= json_encode($digitalGallery) ?>;
        
        // State
        let currentTab = 'print';
        let currentSectionIdx = 0;
        let currentImgIdx = 0;

        function switchTab(tab) {
            currentTab = tab;
            const printBtn = document.getElementById('tab-btn-print');
            const digitalBtn = document.getElementById('tab-btn-digital');
            const printDiv = document.getElementById('gallery-print');
            const digitalDiv = document.getElementById('gallery-digital');

            if (tab === 'print') {
                printBtn.className = "px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 border-medical-blue text-medical-blue";
                digitalBtn.className = "px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 border-transparent text-gray-600 hover:text-medical-blue hover:border-gray-300";
                printDiv.classList.remove('hidden');
                digitalDiv.classList.add('hidden');
            } else {
                digitalBtn.className = "px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 border-medical-blue text-medical-blue";
                printBtn.className = "px-6 py-4 text-lg font-semibold transition-all duration-200 border-b-2 border-transparent text-gray-600 hover:text-medical-blue hover:border-gray-300";
                digitalDiv.classList.remove('hidden');
                printDiv.classList.add('hidden');
            }
        }

        function openModal(tab, sectionIdx, imgIdx) {
            currentTab = tab; // Ensure tab is synced (though logically implied)
            currentSectionIdx = sectionIdx;
            currentImgIdx = imgIdx;
            updateModalImage();
            document.getElementById('image-modal').classList.remove('hidden');
        }

        function closeModal(e) {
            if (e) e.stopPropagation();
            document.getElementById('image-modal').classList.add('hidden');
        }

        function updateModalImage() {
            const data = currentTab === 'print' ? printGalleryData : digitalGalleryData;
            const section = data[currentSectionIdx];
            if (section && section.images[currentImgIdx]) {
                document.getElementById('modal-image').src = section.images[currentImgIdx].fullImage;
            }
        }

        function nextImage(e) {
            e.stopPropagation();
            const data = currentTab === 'print' ? printGalleryData : digitalGalleryData;
            const section = data[currentSectionIdx];
            
            if (currentImgIdx < section.images.length - 1) {
                currentImgIdx++;
            } else {
                currentImgIdx = 0;
            }
            updateModalImage();
        }

        function prevImage(e) {
            e.stopPropagation();
            const data = currentTab === 'print' ? printGalleryData : digitalGalleryData;
            const section = data[currentSectionIdx];
            
            if (currentImgIdx > 0) {
                currentImgIdx--;
            } else {
                currentImgIdx = section.images.length - 1;
            }
            updateModalImage();
        }

        feather.replace();
    </script>
</body>
</html>

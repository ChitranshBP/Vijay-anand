<?php
include 'navbar.php';
include 'testimonials_data.php';

// Pagination settings (for initial server-side render limit, though we render all and hide via CSS/JS)
$IMAGES_PER_PAGE = 10;
$VIDEOS_PER_PAGE = 3;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patient Testimonials - Dr. Vijay Anand Reddy</title>
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

    <!-- Hero Section -->
    <section class="pt-32 mt-10 pb-10 text-center bg-medical-blue/10">
        <h1 class="text-4xl md:text-5xl font-bold text-medical-dark mb-4">Patient Testimonials</h1>
        <p class="max-w-2xl mx-auto text-gray-700 text-lg px-4">
            Real stories, real recovery. Hear directly from patients and their families about their journey to healing and hope, guided by Dr. Vijay Anand Reddy.
        </p>
    </section>

    <!-- Meddy Reviews Widget -->
    <div id="wid_1754467080840" class="my-10 container mx-auto px-4"></div>
    <script 
        defer 
        src="https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1754467080840"
        theme="light"
        footer="false"
        widget-type="carousel"
        token="687a20a3a7ee08492b66abfc"
        apiurl="https://server.onlinereviews.tech/api/v0.0.9"
        stats="true"
        addReview="true"
        profile-pic="true"
        review-name="true"
        positive-stars="false"
        wl="true"
        wlndig="https://go.meddyreviews.com/dr-vijay-anand-reddy"
        lang="us"
        brandStyle="%7B%22sidebar_background%22%3A%22%236CD79E%22%2C%22sidebar_text%22%3A%22black%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23676767%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(118%2C%20118%2C%20118)%22%2C%22brand_button_active%22%3A%22rgb(88%2C%2088%2C%2088)%22%2C%22brand_main_color_opacity%22%3A%22%236767671a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fmeddyreviews.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.meddyreviews.com%2Ftopbar.png%22%7D"
    ></script>

    <!-- Patient Gallery Section -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-medical-dark mb-10 text-center">Patient Gallery</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" id="gallery-grid">
                <?php foreach ($patientGallery as $index => $item): 
                    $imagePath = "../public/" . $item['image'];
                ?>
                    <div 
                        class="relative cursor-pointer overflow-hidden rounded-lg gallery-item <?= $index >= $IMAGES_PER_PAGE ? 'hidden' : '' ?>"
                        onclick="openImageModal('<?= htmlspecialchars($imagePath) ?>', '<?= htmlspecialchars($item['name'] ?? '') ?>', '<?= htmlspecialchars($item['quote'] ?? '') ?>')"
                        role="button"
                        tabindex="0"
                        onkeydown="if(event.key === 'Enter' || event.key === ' ') openImageModal('<?= htmlspecialchars($imagePath) ?>', '<?= htmlspecialchars($item['name'] ?? '') ?>', '<?= htmlspecialchars($item['quote'] ?? '') ?>')"
                    >
                        <img 
                            src="<?= htmlspecialchars($imagePath) ?>" 
                            alt="<?= htmlspecialchars($item['name'] ?? 'Patient') ?>" 
                            class="w-full h-48 object-cover object-center transform transition-transform duration-200 ease-in-out hover:scale-105"
                            loading="lazy"
                        >
                        <?php if(!empty($item['name'])): ?>
                            <div class="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-1 rounded-b-lg select-none opacity-0 hover:opacity-100 transition-opacity duration-200">
                                <?= htmlspecialchars($item['name']) ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>

            <?php if (count($patientGallery) > $IMAGES_PER_PAGE): ?>
                <div class="flex justify-center mt-10" id="gallery-load-more">
                    <button 
                        onclick="loadMoreImages()" 
                        class="px-6 py-3 rounded-lg bg-medical-blue text-white font-semibold hover:bg-medical-dark transition"
                    >
                        Load More
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- Detailed Image Modal -->
    <div id="image-modal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] hidden" aria-modal="true" role="dialog" onclick="closeImageModal()">
        <div class="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] p-6 overflow-auto" onclick="event.stopPropagation()">
            <button class="absolute top-4 right-4 text-gray-700 hover:text-medical-blue text-3xl" onclick="closeImageModal()" aria-label="Close modal">
                <i data-feather="x"></i>
            </button>
            <div class="flex flex-col items-center">
                <img id="modal-img" src="" alt="" class="rounded-lg max-h-[70vh] object-contain mb-4">
                <h3 id="modal-name" class="text-2xl font-bold text-medical-dark mb-2"></h3>
                <p id="modal-quote" class="text-gray-700 text-center text-lg italic"></p>
            </div>
        </div>
    </div>

    <!-- YouTube Testimonials Section -->
    <section class="py-14 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-medical-dark mb-8 text-center">
                Watch Our Patient Stories
            </h2>

            <!-- Video Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" id="video-grid">
                <?php foreach ($youtubeTestimonials as $index => $video): ?>
                    <button 
                        class="relative rounded-lg overflow-hidden shadow-lg bg-white focus:outline-none transition hover:scale-105 w-full text-left video-item <?= $index >= $VIDEOS_PER_PAGE ? 'hidden' : '' ?>"
                        onclick="openVideoModal('<?= $video['id'] ?>')"
                        aria-label="Play <?= htmlspecialchars($video['title']) ?>"
                    >
                        <img 
                            src="<?= htmlspecialchars($video['thumbnail']) ?>" 
                            alt="<?= htmlspecialchars($video['title']) ?>" 
                            class="w-full h-56 object-cover object-center"
                            loading="lazy"
                        >
                        <div class="absolute inset-0 flex items-center justify-center">
                            <svg class="w-16 h-16 text-white opacity-90" fill="none" viewBox="0 0 68 48">
                                <rect width="68" height="48" rx="8" fill="#000" fill-opacity="0.5" />
                                <path d="M45 24L27 34V14l18 10z" fill="#fff" />
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-base font-bold px-4 py-2">
                            <?= htmlspecialchars($video['title']) ?>
                        </div>
                    </button>
                <?php endforeach; ?>
            </div>

            <?php if (count($youtubeTestimonials) > $VIDEOS_PER_PAGE): ?>
                <div class="flex justify-center mt-10" id="video-load-more">
                    <button 
                        onclick="loadMoreVideos()" 
                        class="px-6 py-3 rounded-lg bg-medical-blue text-white font-semibold hover:bg-medical-dark transition"
                    >
                        Load More Videos
                    </button>
                </div>
            <?php endif; ?>

        </div>
    </section>

    <!-- Video Modal -->
    <div id="video-modal" class="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-6 hidden" role="dialog" aria-modal="true" onclick="closeVideoModal()">
        <div class="relative w-full max-w-4xl aspect-video rounded shadow-lg" onclick="event.stopPropagation()">
            <button class="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-red-500 focus:outline-none" aria-label="Close video modal" onclick="closeVideoModal()">&times;</button>
            <iframe id="video-iframe" title="Patient Testimonial Video" class="w-full h-full rounded" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <?php 
    $quoteId = 59;
    include 'quote_section.php'; 
    ?>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        // Image Gallery Logic
        let visibleImages = <?= $IMAGES_PER_PAGE ?>;
        
        function loadMoreImages() {
            const hiddenImages = document.querySelectorAll('.gallery-item.hidden');
            const toShow = Math.min(hiddenImages.length, <?= $IMAGES_PER_PAGE ?>);
            
            for(let i=0; i<toShow; i++) {
                hiddenImages[i].classList.remove('hidden');
            }
            
            if (document.querySelectorAll('.gallery-item.hidden').length === 0) {
                document.getElementById('gallery-load-more').style.display = 'none';
            }
        }

        function openImageModal(src, name, quote) {
            document.getElementById('modal-img').src = src;
            document.getElementById('modal-name').textContent = name;
            
            const quoteEl = document.getElementById('modal-quote');
            if (quote) {
                quoteEl.textContent = '"' + quote + '"';
                quoteEl.style.display = 'block';
            } else {
                quoteEl.style.display = 'none';
            }
            
            document.getElementById('image-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeImageModal() {
            document.getElementById('image-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Video Gallery Logic
        let videoPage = 1; // Not strictly used for math but conceptual
        const videosPerPage = <?= $VIDEOS_PER_PAGE ?>;

        function loadMoreVideos() {
            const hiddenVideos = document.querySelectorAll('.video-item.hidden');
            // React logic: setVideoPage((prev) => Math.min(prev + 1, ...)); slice(0, videoPage * 3)
            // Essentially show 3 more.
            const toShow = Math.min(hiddenVideos.length, videosPerPage);
            
            for(let i=0; i<toShow; i++) {
                hiddenVideos[i].classList.remove('hidden');
            }
            
            if (document.querySelectorAll('.video-item.hidden').length === 0) {
                document.getElementById('video-load-more').style.display = 'none';
            }
        }

        function openVideoModal(videoId) {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('video-iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeVideoModal() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('video-iframe');
            iframe.src = '';
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close modals on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeImageModal();
                closeVideoModal();
            }
        });
    </script>
</body>
</html>

<?php
include 'navbar.php';
include 'doctor_talks_data.php';

// YouTube Channel Link (from React source)
$YOUTUBE_CHANNEL_LINK = "https://www.youtube.com/channel/TheDrVijayAnandReddy"; 
// Note: React source had placeholder "CHANNEL_ID". 
// I'll stick to the placeholder if the user didn't provide it, 
// BUT "TheDrVijayAnandReddy" is likely the handle. 
// Let's safe-guard and use the one from React exactly for now to be "Exact match", 
// unless I recall the user asking for specific changes. 
// React line 48: const YOUTUBE_CHANNEL_LINK = "https://www.youtube.com/channel/CHANNEL_ID";
// Wait, looking at other pages or general knowledge, usually there's a real link.
// I will check `footer.php` or `index.php` to see if there is a known YT link.
// For now, I will use the one from the file, but maybe verify later.
// Actually, let's use the explicit string found:
$YOUTUBE_CHANNEL_LINK = "https://www.youtube.com/channel/CHANNEL_ID";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Awareness Talks - Dr. Vijay Anand Reddy</title>
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
    <section class="pt-32 mt-10 pb-14 bg-medical-blue/10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-medical-dark mb-4">Doctor Awareness Talks</h1>
        <nav class="text-medical-blue font-medium text-lg flex justify-center gap-2">
            <a href="index.php" class="hover:underline">Home</a>
            <span>/</span>
            <span class="text-medical-dark font-semibold">Awareness Talks</span>
        </nav>
    </section>

    <!-- Main Content -->
    <main class="w-full max-w-7xl mx-auto px-6 py-16 flex-grow">
        
        <!-- Videos Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="video-grid">
            <?php foreach ($videos as $index => $videoId): ?>
                <div 
                    class="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition video-item <?= $index >= 9 ? 'hidden' : '' ?>"
                    onclick="openModal('<?= $videoId ?>')"
                    role="button"
                    tabindex="0"
                    onkeydown="if(event.key === 'Enter' || event.key === ' ') openModal('<?= $videoId ?>')"
                >
                    <img 
                        src="https://img.youtube.com/vi/<?= $videoId ?>/hqdefault.jpg" 
                        alt="Video thumbnail" 
                        loading="lazy" 
                        class="w-full aspect-video object-cover"
                    >
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="bg-black bg-opacity-50 rounded-full p-4">
                            <i data-feather="play" class="text-white w-10 h-10 fill-current"></i>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- View More Button -->
        <?php if (count($videos) > 9): ?>
            <div class="text-center mt-12" id="view-more-container">
                <button 
                    onclick="showAllVideos()" 
                    class="bg-medical-blue text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-medical-dark transition"
                >
                    View More Videos
                </button>
            </div>
        <?php endif; ?>

        <!-- CTA -->
        <div class="text-center mt-20">
            <a 
                href="<?= $YOUTUBE_CHANNEL_LINK ?>" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-3 bg-medical-blue text-white font-bold text-lg px-9 py-4 rounded-full shadow hover:bg-medical-dark transition"
            >
                Visit Our YouTube Channel
                <i data-feather="arrow-right" class="w-6 h-6"></i>
            </a>
        </div>

    </main>

    <!-- Video Modal -->
    <div id="video-modal" class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-6 hidden" role="dialog" aria-modal="true" onclick="closeModal()">
        <div class="relative w-full max-w-4xl aspect-video rounded shadow-lg" onclick="event.stopPropagation()">
            <button 
                class="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-red-500 focus:outline-none" 
                aria-label="Close video modal" 
                onclick="closeModal()"
            >
                &times;
            </button>
            <iframe 
                id="modal-iframe"
                title="Doctor Awareness Talk Video" 
                class="rounded w-full h-full" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
    </div>

    <?php 
    $quoteId = 67;
    include 'quote_section.php'; 
    ?>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        function showAllVideos() {
            const hiddenVideos = document.querySelectorAll('.video-item.hidden');
            hiddenVideos.forEach(el => el.classList.remove('hidden'));
            document.getElementById('view-more-container').style.display = 'none';
        }

        function openModal(videoId) {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            iframe.src = '';
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    </script>
</body>
</html>

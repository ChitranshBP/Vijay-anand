<?php
include 'navbar.php';
include 'video_gallery_data.php';

// Initial display count for server-side SEO (though JS handles "Show More")
// We will output all as hidden and show invalid count via JS, or better:
// Output all videos in HTML but hide those > 12.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Gallery - Dr. Vijay Anand Reddy</title>
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

    <!-- Hero Section -->
    <section class="pt-32 pb-10 text-center bg-medical-blue/10 rounded-b-3xl shadow-inner">
        <h1 class="text-4xl md:text-5xl font-extrabold text-medical-dark mb-3">
            Video Gallery
        </h1>
        <p class="max-w-2xl mx-auto text-gray-700 text-lg">
            Explore our curated collection of awareness and informative videos.
        </p>
    </section>

    <!-- Video Grid -->
    <div class="max-w-7xl mt-12 mb-16 mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="video-grid">
            <?php foreach ($videos as $index => $video): ?>
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer video-item <?= $index >= 12 ? 'hidden' : '' ?>"
                    onclick="openVideoModal('<?= $video['id'] ?>')"
                >
                    <div class="relative aspect-video">
                        <img
                            src="https://img.youtube.com/vi/<?= $video['id'] ?>/hqdefault.jpg"
                            alt="<?= htmlspecialchars($video['title']) ?>"
                            class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        >
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="bg-black/60 rounded-full p-4">
                                <i data-feather="play" class="text-white w-9 h-9 fill-current"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 text-center bg-white">
                        <h3 class="text-lg font-semibold text-medical-dark line-clamp-2">
                            <?= htmlspecialchars($video['title']) ?>
                        </h3>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Show More Button -->
        <div class="text-center mt-16 <?= count($videos) <= 12 ? 'hidden' : '' ?>" id="show-more-container">
            <button
                onclick="loadMoreVideos()"
                class="bg-medical-blue text-white font-semibold text-lg px-10 py-4 rounded-full shadow hover:bg-medical-dark transition"
            >
                Show More
            </button>
        </div>
    </div>

    <!-- Modal Video Popup -->
    <div id="video-modal" class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 hidden" onclick="closeVideoModal()">
        <div class="relative w-full max-w-4xl aspect-video bg-black rounded-xl shadow-xl overflow-hidden" onclick="event.stopPropagation()">
            <iframe
                id="modal-iframe"
                class="w-full h-full"
                src=""
                title="Video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <button
                class="absolute top-3 right-3 text-white bg-black/60 hover:bg-red-600 rounded-full p-2 transition"
                onclick="closeVideoModal()"
            >
                <i data-feather="x" class="w-6 h-6"></i>
            </button>
        </div>
    </div>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        let visibleCount = 12;
        const totalVideos = <?= count($videos) ?>;
        const videosPerPage = 12;

        function loadMoreVideos() {
            const hiddenVideos = document.querySelectorAll('.video-item.hidden');
            let count = 0;
            hiddenVideos.forEach(video => {
                if (count < videosPerPage) {
                    video.classList.remove('hidden');
                    count++;
                }
            });
            visibleCount += count;
            if (visibleCount >= totalVideos) {
                document.getElementById('show-more-container').classList.add('hidden');
            }
        }

        function openVideoModal(videoId) {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
        }

        function closeVideoModal() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            iframe.src = '';
            modal.classList.add('hidden');
        }
    </script>
</body>
</html>

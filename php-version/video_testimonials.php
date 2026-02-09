<?php
$videos = [
    [
        "id" => "UbJsIKeP1ps",
        "thumbnail" => "https://img.youtube.com/vi/UbJsIKeP1ps/hqdefault.jpg",
        "title" => "10 ఏళ్లుగా క్యాన్సర్ లేకుండా జీవితం | Breast Cancer Survivor Story | Dr. Vijay Anand Reddy",
    ],
    [
        "id" => "ugvDtjZrXxE",
        "thumbnail" => "https://img.youtube.com/vi/ugvDtjZrXxE/hqdefault.jpg",
        "title" => "Talk by a cancer survivor | Happy Patient | Best Cancer/ Radiation oncology doctor in india",
    ],
    [
        "id" => "hefT59hk4Tk",
        "thumbnail" => "https://img.youtube.com/vi/hefT59hk4Tk/hqdefault.jpg",
        "title" => "What do my patients think about my treatment?",
    ],
    [
        "id" => "_fQ1-kAPh64",
        "thumbnail" => "https://img.youtube.com/vi/_fQ1-kAPh64/hqdefault.jpg",
        "title" => "Stage 3 Breast Cancer",
    ],
    [
        "id" => "MaWOvdr6RDw",
        "thumbnail" => "https://img.youtube.com/vi/MaWOvdr6RDw/hqdefault.jpg",
        "title" => "Cervical Cancer Treatment",
    ],
    [
        "id" => "532AAKNrSb4",
        "thumbnail" => "https://img.youtube.com/vi/532AAKNrSb4/hqdefault.jpg",
        "title" => "Vocal Cord Radiation Treatment",
    ]
];
$firstVideo = $videos[0];
?>
<!-- Video Testimonials - Interactive Player (matching React version) -->
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                Patient Stories from Hyderabad
            </h2>
            <p class="text-gray-600 text-lg">
                Hear from our patients about their successful treatment journey at Apollo Hyderabad.
            </p>
        </div>

        <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <!-- Main Video Player -->
            <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
                <iframe
                    id="main-video-player"
                    src="https://www.youtube.com/embed/<?= $firstVideo['id'] ?>?rel=0"
                    title="<?= htmlspecialchars($firstVideo['title']) ?>"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <!-- Thumbnail Carousel -->
            <div class="relative p-6 bg-white border-t border-gray-100">
                <div class="flex items-center gap-4">
                    <button onclick="scrollVideos('left')" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <div id="video-scroll-container" class="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2" style="scrollbar-width: none; -ms-overflow-style: none;">
                        <?php foreach ($videos as $index => $video): ?>
                        <div
                            onclick="switchVideo('<?= $video['id'] ?>', this)"
                            class="flex-shrink-0 w-64 cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300 <?= $index === 0 ? 'border-red-600 ring-2 ring-red-100' : 'border-transparent hover:border-gray-200' ?>"
                            data-video-id="<?= $video['id'] ?>"
                        >
                            <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
                                <img src="<?= $video['thumbnail'] ?>" alt="<?= htmlspecialchars($video['title']) ?>" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                    <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform <?= $index === 0 ? 'opacity-0' : 'opacity-100' ?>">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 bg-gray-50">
                                <h4 class="text-sm font-semibold line-clamp-2 <?= $index === 0 ? 'text-red-600' : 'text-gray-800' ?>">
                                    <?= htmlspecialchars($video['title']) ?>
                                </h4>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <button onclick="scrollVideos('right')" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
function scrollVideos(direction) {
    var container = document.getElementById('video-scroll-container');
    var scrollAmount = 300;
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

function switchVideo(videoId, clickedEl) {
    // Update iframe
    var player = document.getElementById('main-video-player');
    player.src = 'https://www.youtube.com/embed/' + videoId + '?rel=0';

    // Update thumbnail borders and styles
    var allThumbnails = document.querySelectorAll('#video-scroll-container > div');
    allThumbnails.forEach(function(thumb) {
        thumb.classList.remove('border-red-600', 'ring-2', 'ring-red-100');
        thumb.classList.add('border-transparent', 'hover:border-gray-200');
        // Reset play button visibility
        var playBtn = thumb.querySelector('.rounded-full.bg-red-600');
        if (playBtn) playBtn.classList.remove('opacity-0');
        playBtn && playBtn.classList.add('opacity-100');
        // Reset title color
        var title = thumb.querySelector('h4');
        if (title) {
            title.classList.remove('text-red-600');
            title.classList.add('text-gray-800');
        }
    });

    // Highlight selected
    clickedEl.classList.remove('border-transparent', 'hover:border-gray-200');
    clickedEl.classList.add('border-red-600', 'ring-2', 'ring-red-100');
    var activePlayBtn = clickedEl.querySelector('.rounded-full.bg-red-600');
    if (activePlayBtn) {
        activePlayBtn.classList.remove('opacity-100');
        activePlayBtn.classList.add('opacity-0');
    }
    var activeTitle = clickedEl.querySelector('h4');
    if (activeTitle) {
        activeTitle.classList.remove('text-gray-800');
        activeTitle.classList.add('text-red-600');
    }
}
</script>

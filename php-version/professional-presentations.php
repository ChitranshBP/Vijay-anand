<?php
include 'navbar.php';
include 'presentations_data.php'; // Defines $presentations array

// --- Search Logic ---
$searchTerm = isset($_GET['search']) ? trim($_GET['search']) : '';
$filteredPresentations = $presentations;

if ($searchTerm) {
    $lowerSearch = strtolower($searchTerm);
    $filteredPresentations = array_filter($presentations, function($p) use ($lowerSearch) {
        return (
            (isset($p['title']) && strpos(strtolower($p['title']), $lowerSearch) !== false) ||
            (isset($p['event']) && strpos(strtolower($p['event']), $lowerSearch) !== false) ||
            (isset($p['date']) && strpos(strtolower($p['date']), $lowerSearch) !== false)
        );
    });
    // Re-index array after filtering
    $filteredPresentations = array_values($filteredPresentations);
}

// --- Pagination Logic ---
$itemsPerPage = 20;
$totalItems = count($filteredPresentations);
$totalPages = ceil($totalItems / $itemsPerPage);

// Current Page
$currentPage = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($currentPage < 1) $currentPage = 1;
if ($currentPage > $totalPages && $totalPages > 0) $currentPage = $totalPages;

// Slice items for current page
$offset = ($currentPage - 1) * $itemsPerPage;
$currentItems = array_slice($filteredPresentations, $offset, $itemsPerPage);

// Helper for pagination links to preserve search query
function getPageLink($page, $search) {
    $link = "?page=$page";
    if ($search) {
        $link .= "&search=" . urlencode($search);
    }
    return $link;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Presentations - Dr. Vijay Anand Reddy</title>
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="bg-white flex flex-col min-h-screen">

    <!-- Hero Section -->
    <section class="pt-20 md:pt-24 mt-12 md:mt-16 pb-8 bg-medical-blue/10 text-center px-4">
        <div class="mx-auto w-12 h-12 md:w-14 md:h-14 text-medical-blue mb-3 flex items-center justify-center">
            <i data-feather="mic" class="w-full h-full"></i>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold text-medical-dark mb-2">
            Professional Presentations & Panels
        </h1>
        <p class="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
            A curated timeline of lectures, discussions, and expert panels showcasing 
            thought leadership and clinical expertise.
        </p>
    </section>

    <!-- Main Content -->
    <main class="w-full max-w-6xl mx-auto px-3 sm:px-4 pb-16 pt-6 flex flex-col flex-grow">
        
        <!-- Search Bar -->
        <div class="mb-6 flex flex-col sm:flex-row sm:justify-end">
            <form action="" method="GET" class="w-full sm:w-auto">
                <div class="relative">
                    <input 
                        type="search" 
                        name="search" 
                        placeholder="Search presentations..." 
                        value="<?= htmlspecialchars($searchTerm) ?>"
                        class="w-full sm:w-[300px] border border-gray-300 rounded shadow-sm px-4 py-2 text-sm sm:text-base focus:outline-medical-blue pr-10"
                    >
                    <button type="submit" class="absolute right-2 top-2.5 text-gray-400 hover:text-medical-blue">
                        <i data-feather="search" class="w-4 h-4"></i>
                    </button>
                    <?php if($searchTerm): ?>
                        <a href="?" class="text-xs text-red-500 absolute -bottom-5 right-0 hover:underline">Clear Search</a>
                    <?php endif; ?>
                </div>
            </form>
        </div>

        <!-- Timeline List -->
        <ul class="space-y-6">
            <?php if (count($currentItems) > 0): ?>
                <?php foreach ($currentItems as $item): ?>
                    <li class="border-l-4 border-medical-blue pl-6 relative group reveal">
                        <div class="absolute -left-3 top-1.5 flex items-center justify-center w-6 h-6 bg-medical-blue rounded-full shadow-md ring-4 ring-white group-hover:ring-medical-dark transition">
                            <i data-feather="mic" class="text-white w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-lg sm:text-xl font-semibold text-medical-dark mb-1">
                                <?= htmlspecialchars($item['title'] ?? '') ?>
                            </h3>
                            <p class="text-sm sm:text-base text-gray-700"><?= htmlspecialchars($item['event'] ?? '') ?></p>
                            <time class="text-xs sm:text-sm text-medical-blue font-semibold mt-1 block">
                                <?= htmlspecialchars($item['date'] ?? '') ?>
                            </time>
                        </div>
                    </li>
                <?php endforeach; ?>
            <?php else: ?>
                <li class="text-center text-gray-500 py-12 text-sm sm:text-base">
                    No presentations found matching "<?= htmlspecialchars($searchTerm) ?>".
                </li>
            <?php endif; ?>
        </ul>

        <!-- Pagination -->
        <?php if ($totalPages > 1): ?>
        <nav class="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3" aria-label="Pagination Navigation">
            <!-- Previous Button -->
            <a href="<?= getPageLink(max(1, $currentPage - 1), $searchTerm) ?>" 
               class="px-3 py-1 text-sm sm:text-base rounded bg-medical-blue text-white <?= $currentPage == 1 ? 'opacity-50 pointer-events-none' : '' ?>">
               Previous
            </a>

            <!-- Page Numbers -->
            <?php
            // Logic to show limited page numbers (e.g. 1 2 ... 5 6 7 ... 20)
            // For simplicity, we'll show simpler window if pages are many
            $range = 2; 
            for ($i = 1; $i <= $totalPages; $i++): 
                if ($i == 1 || $i == $totalPages || ($i >= $currentPage - $range && $i <= $currentPage + $range)):
            ?>
                <a href="<?= getPageLink($i, $searchTerm) ?>" 
                   class="px-3 sm:px-4 py-1 text-sm sm:text-base rounded <?= $i == $currentPage ? 'bg-medical-dark text-white font-bold' : 'bg-medical-blue text-white hover:bg-medical-dark' ?>">
                    <?= $i ?>
                </a>
            <?php elseif (($i == $currentPage - $range - 1) || ($i == $currentPage + $range + 1)): ?>
                <span class="px-2 py-1">...</span>
            <?php endif; endfor; ?>

            <!-- Next Button -->
            <a href="<?= getPageLink(min($totalPages, $currentPage + 1), $searchTerm) ?>" 
               class="px-3 py-1 text-sm sm:text-base rounded bg-medical-blue text-white <?= $currentPage == $totalPages ? 'opacity-50 pointer-events-none' : '' ?>">
               Next
            </a>
        </nav>
        <?php endif; ?>

    </main>

    <?php 
    $quoteId = 62;
    include 'quote_section.php'; 
    ?>
    
    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    </script>
</body>
</html>

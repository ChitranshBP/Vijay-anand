<?php
include 'navbar.php';
include 'conferences_data.php';

// Preview limits matching React constant
$ORGANIZED_PREVIEW = 10;
$PARTICIPATED_PREVIEW = 10;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conferences - Dr. Vijay Anand Reddy</title>
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
    
    <!-- Wrapper to match React Layout exactly -->
    <div class="bg-gray-50 mt-28 min-h-screen pb-10">

        <!-- Hero / Header Section -->
        <header class="bg-medical-blue/10 text-black py-16 shadow mb-12">
            <div class="max-w-4xl mx-auto text-center px-4">
                <h1 class="text-5xl font-extrabold mb-4">Conferences</h1>
                <p class="text-lg font-light mb-3">
                    Leadership & Global Engagement in Oncology Education
                </p>
                <p class="max-w-2xl mx-auto text-md">
                    Dr.Reddy is renowned for holistic leadership, management skills, and a distinct ability to advance cancer medicine by organizing and participating in major national and international conferences.
                </p>
            </div>
        </header>

        <!-- Organized Conferences -->
        <section class="max-w-4xl mx-auto px-4 mb-14 reveal">
            <h2 class="text-2xl font-bold text-[#9B528F] mb-2">Conferences Organized</h2>
            <p class="mb-4 text-gray-700">
                Holistic, eclectic, and widely recognized, Dr. Reddy has organized and led key events that have shaped Indian and global oncology education.
            </p>
            
            <ul id="organized-list" class="space-y-2 mb-2">
                <?php foreach ($organizedList as $index => $event): ?>
                    <li class="bg-white border-l-4 border-[#9B528F] rounded px-4 py-3 shadow-sm item-organized <?= $index >= $ORGANIZED_PREVIEW ? 'hidden' : '' ?>">
                        <?= htmlspecialchars($event) ?>
                    </li>
                <?php endforeach; ?>
            </ul>

            <?php if (count($organizedList) > $ORGANIZED_PREVIEW): ?>
                <button id="btn-organized" onclick="toggleList('organized')" class="group flex items-center text-[#9B528F] font-semibold mt-2 hover:underline focus:outline-none">
                    <span id="text-organized">Show All</span>
                    <i data-feather="chevron-down" id="icon-organized" class="ml-1 transition-transform"></i>
                </button>
            <?php endif; ?>
        </section>

        <!-- Participated Conferences -->
        <section class="max-w-4xl mx-auto px-4 reveal mb-16">
            <h2 class="text-2xl font-bold text-[#9B528F] mb-2">Conferences Participated</h2>
            <p class="mb-4 text-gray-700">
                Regularly invited worldwide, Dr. Reddy contributes to the latest advancements through interactive summits and expert panels.
            </p>
            
            <ul id="participated-list" class="space-y-2">
                <?php foreach ($participatedList as $index => $event): ?>
                    <li class="bg-white border-l-4 border-medical-blue rounded px-4 py-3 shadow-sm item-participated <?= $index >= $PARTICIPATED_PREVIEW ? 'hidden' : '' ?>">
                        <?= htmlspecialchars($event) ?>
                    </li>
                <?php endforeach; ?>
            </ul>

            <?php if (count($participatedList) > $PARTICIPATED_PREVIEW): ?>
                <button id="btn-participated" onclick="toggleList('participated')" class="group flex items-center text-medical-blue font-semibold mt-2 hover:underline focus:outline-none">
                    <span id="text-participated">Show All</span>
                    <i data-feather="chevron-down" id="icon-participated" class="ml-1 transition-transform"></i>
                </button>
            <?php endif; ?>
        </section>

    </div><!-- End Wrapper -->

    <?php 
    $quoteId = 65;
    include 'quote_section.php'; 
    ?>
    
    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

        // Toggle Logic
        function toggleList(type) {
            const items = document.querySelectorAll(`.item-${type}`);
            const textSpan = document.getElementById(`text-${type}`);
            const icon = document.getElementById(`icon-${type}`);
            
            // Check if currently showing hidden items
            // If the first hidden item (index PREVIEW) is actually hidden, then we are in "Show Less" mode (collapsed)
            // Wait, logic:
            // Hidden class present = collapsed. 
            // We want to toggle hidden class on items from index PREVIEW onwards.
            
            const PREVIEW_LIMIT = 10;
            let isExpanded = textSpan.innerText === "Show Less";

            if (isExpanded) {
                // Collapse
                items.forEach((item, index) => {
                    if (index >= PREVIEW_LIMIT) item.classList.add('hidden');
                });
                textSpan.innerText = "Show All";
                icon.innerHTML = feather.icons['chevron-down'].toSvg();
                // Optionally scroll back to top of list? React doesn't usually do this natively unless programmed.
            } else {
                // Expand
                items.forEach(item => item.classList.remove('hidden'));
                textSpan.innerText = "Show Less";
                icon.innerHTML = feather.icons['chevron-up'].toSvg();
            }
        }

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

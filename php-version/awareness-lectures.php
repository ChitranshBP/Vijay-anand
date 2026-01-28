<?php
include 'navbar.php';
include 'awareness_lectures_data.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awareness Lectures - Dr. Vijay Anand Reddy</title>
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

    <!-- Page Hero -->
    <section class="pt-32 mt-10 pb-10 text-center bg-medical-blue/10">
        <div class="mx-auto w-12 h-12 text-medical-blue mb-2 flex items-center justify-center">
            <i data-feather="mic" class="w-full h-full"></i>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-medical-dark mb-4">
            Awareness Lectures
        </h1>
        <p class="max-w-2xl mx-auto text-gray-700 text-lg px-4">
            Inspiring hope and spreading knowledge – A timeline of impactful awareness lectures delivered to educate, empower, and save lives.
        </p>
    </section>

    <!-- Timeline Section -->
    <section class="py-12 bg-white">
        <div class="max-w-3xl mx-auto px-4">
            <ul class="relative border-l-2 border-medical-blue/20">
                <?php foreach ($lectures as $lec): ?>
                    <li class="mb-10 ml-6 group reveal">
                        <span class="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-medical-blue/90 group-hover:bg-medical-dark transition-colors border-4 border-white ring-0">
                            <i data-feather="mic" class="h-3 w-3 text-white"></i>
                        </span>
                        <div class="ml-2">
                            <div class="flex gap-2 items-center mb-1">
                                <i data-feather="calendar" class="w-4 h-4 text-medical-blue/80"></i>
                                <span class="text-sm text-medical-blue/80 font-medium"><?= htmlspecialchars($lec['date']) ?></span>
                            </div>
                            <h3 class="text-lg font-bold text-medical-dark"><?= htmlspecialchars($lec['title']) ?></h3>
                            <div class="text-gray-700"><?= htmlspecialchars($lec['venue']) ?></div>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>

    <?php 
    $quoteId = 66;
    include 'quote_section.php'; 
    ?>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();

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

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Associations - Dr. Vijay Anand Reddy</title>
    
    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 900: '#1e3a8a' },
                        purple: { 50: '#f5f3ff', 100: '#ede9fe', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9' },
                        medical: { blue: '#9B528F', purple: '#8B5CF6', light: '#F8FAFC', dark: '#1E293B' }
                    },
                    fontFamily: { sans: ['Inter', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
                }
            }
        }
    </script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        body { font-family: 'Inter', sans-serif; }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 flex flex-col min-h-screen">

    <?php include 'navbar.php'; ?>

    <!-- Page Hero -->
    <section class="pt-32 mt-10 pb-10 text-center bg-medical-blue/10 reveal">
        <div class="mx-auto w-14 h-14 text-medical-blue mb-2 flex items-center justify-center">
            <i data-feather="users" class="w-14 h-14"></i>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-medical-dark mb-2">
            Professional Associations & Leadership
        </h1>
        <p class="max-w-xl mx-auto text-gray-700 text-lg">
            Trusted to lead, serve, and inspire at the highest levels in global oncology and medical communities.
        </p>
    </section>

    <!-- Leadership Roles -->
    <?php
    $leadershipRoles = [
        "Advisory Committee member for Global Access to Cancer Care Foundation (GACCF), USA",
        "Chair, Association of Radiation Oncologists of India (AROI) (Past)",
        "President of Association of Radiation Oncologists of India (AROI) (Past)",
        "President of Association of Radiation Oncologists of India (AROI), Telangana Chapter (Past)",
        "President of Association of Radiation Oncologists of India (AROI), AP Chapter (Past)",
        "Chairman, Indian College of Radiation Oncology (ICRO), INDIA (Past)",
    ];
    ?>
    <section class="py-14 bg-white shadow-lg rounded-3xl max-w-5xl mx-auto my-12 px-8 reveal delay-100">
        <div class="flex items-center gap-4 mb-8 border-b-4 border-medical-blue pb-4">
            <i data-feather="star" class="text-medical-blue w-8 h-8 drop-shadow"></i>
            <h2 class="text-3xl font-bold text-medical-dark select-none">Leadership & Advisory Roles</h2>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <?php foreach($leadershipRoles as $role): ?>
            <li class="flex items-start gap-4 cursor-pointer hover:bg-medical-blue/10 rounded-xl p-3 transition" tabindex="0" role="button" aria-label="Leadership role: <?= $role ?>">
                <i data-feather="award" class="flex-shrink-0 mt-1 text-amber-500 w-6 h-6 drop-shadow"></i>
                <span class="text-lg text-medical-dark leading-relaxed"><?= $role ?></span>
            </li>
            <?php endforeach; ?>
        </ul>
    </section>

    <!-- Professional Memberships -->
    <?php
    $memberships = [
        "Member of International American Brachytherapy Society (ABS)",
        "Full Member of American Society of Clinical Oncology (ASCO)",
        "Full Member of American Society for Radiation Oncology (ASTRO)",
        "Permanent Member of European Society of Medical Oncology (ESMO)",
        "Permanent Member of “Union for International Cancer Control”, UICC, Geneva",
        "Member of Indian College of Radiation Oncology (ICRO)",
        "Member of Indian Society of Oncology (ISO)",
        "Member of Civil Assistant Surgeon’s Association, Andhra Pradesh",
        "Member of Indian Medical Association (IMA)",
        "Member of Indian Co-operative Oncology Network (ICON)",
        "Member of Indian Brachytherapy Society (IBS)",
    ];
    ?>
    <section class="py-14 bg-white max-w-5xl mx-auto rounded-3xl my-12 px-8 shadow-md reveal delay-200">
        <div class="flex items-center gap-4 mb-8 border-b-4 border-medical-blue pb-4">
             <i data-feather="check-circle" class="text-medical-blue w-8 h-8 drop-shadow"></i>
            <h2 class="text-3xl font-bold text-medical-dark select-none">Professional Memberships</h2>
        </div>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-medical-dark text-lg">
            <?php foreach($memberships as $member): ?>
            <li class="flex items-start gap-4 cursor-pointer hover:bg-medical-blue/20 rounded-lg p-3 transition" tabindex="0" role="button" aria-label="Membership: <?= $member ?>">
                <i data-feather="check-circle" class="flex-shrink-0 w-5 h-5 mt-1 text-medical-blue drop-shadow"></i>
                <span><?= $member ?></span>
            </li>
            <?php endforeach; ?>
        </ul>
    </section>

    <!-- Quote Section -->
    <?php $quoteId = 61; include 'quote_section.php'; ?>

    <?php include 'footer.php'; ?>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
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
        });
    </script>
</body>
</html>

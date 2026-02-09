<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books - Dr. Vijay Anand Reddy</title>
    
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
<body class="bg-[#faf7fc] text-gray-800 flex flex-col min-h-screen font-sans">

    <?php include 'navbar.php'; ?>

    <!-- Main Content -->
    <div class="flex flex-col items-center py-12 mt-28 px-4 flex-grow">
        <header class="max-w-2xl mb-10 text-center reveal">
            <h1 class="text-4xl font-extrabold text-medical-blue mb-3">Books Published by Doctor</h1>
            <p class="text-lg text-[#61375d] opacity-80">
                Modern oncology publications and inspiring survivor stories.
            </p>
        </header>

        <!-- Books Grid -->
        <?php
        $books = [
            [
                'title' => "Retinoblastoma – They Live And See",
                'description' => "Focused on retinoblastoma, this book highlights advances in treatment for young patients, emphasizing early diagnosis and teamwork for life and vision preservation.",
                'cover' => "assets/books/ret-book.jpg",
                'pdfUrl' => "assets/books/retinoblastoma-they-live-and-see-book.pdf"
            ],
            [
                'title' => "Apollo Life: The Oncology Issue",
                'description' => "A resource on oncology, presenting expert perspectives. Covers personalized treatment, diagnosis, supportive care, and latest research for cancer care.",
                'cover' => "assets/books/apoll-book.jpg",
                'pdfUrl' => "assets/books/oncology-issue-book.pdf"
            ],
            [
                'title' => "I AM A SURVIVOR – 108 Stories of Triumph Over Cancer",
                'description' => "Celebrates resilience through 108 survivor stories. Inspires hope and awareness, supporting families and encouraging early detection and treatment.",
                'cover' => "assets/books/i-am-survivor-book.jpeg",
                'pdfUrl' => "assets/books/3-stories-1-book.pdf",
                'buyUrl' => "https://amzn.in/d/afn8ojH"
            ],
            [
                'title' => "I AM A SURVIVOR – 108 Stories of Triumph Over Cancer (Hindi Version)",
                'description' => "Celebrates resilience through 108 survivor stories. Inspires hope and awareness, supporting families and encouraging early detection and treatment.",
                'cover' => "assets/books/Hindi-version.jpg"
            ],
            [
                'title' => "I AM A SURVIVOR – 108 Stories of Triumph Over Cancer (Telugu version)",
                'description' => "Celebrates resilience through 108 survivor stories. Inspires hope and awareness, supporting families and encouraging early detection and treatment.",
                'cover' => "assets/books/telugu-version.jpg"
            ]
        ];
        ?>
        <section class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php foreach($books as $index => $book): ?>
            <div class="bg-white rounded-2xl shadow-lg border border-[#f3e4f0] flex flex-col items-center p-7 reveal delay-<?= $index * 100 ?>">
                <img
                    src="<?= $book['cover'] ?>"
                    alt="<?= $book['title'] . " cover" ?>"
                    class="w-32 h-48 object-cover rounded-xl shadow-md mb-6 bg-[#e7d1e6]"
                />
                <div class="text-lg font-bold text-gray-800 mb-3 text-center"><?= $book['title'] ?></div>
                <div class="text-base text-gray-600 text-center leading-relaxed mb-5 flex-grow"><?= $book['description'] ?></div>
                
                <div class="flex space-x-4 mt-auto">
                    <?php if(isset($book['pdfUrl']) && $book['pdfUrl']): ?>
                    <a
                        href="<?= $book['pdfUrl'] ?>"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-5 py-2 rounded-full border-2 border-medical-blue text-medical-blue font-semibold hover:bg-medical-blue hover:text-white transition"
                    >
                        Read Book
                    </a>
                    <?php endif; ?>
                    
                    <?php if(isset($book['buyUrl']) && $book['buyUrl']): ?>
                    <a
                        href="<?= $book['buyUrl'] ?>"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-5 py-2 rounded-full bg-medical-blue text-white font-semibold hover:bg-[#823a6e] transition"
                    >
                        Buy Online
                    </a>
                    <?php endif; ?>
                </div>
            </div>
            <?php endforeach; ?>
        </section>
    </div>

    <!-- Quote Section -->
    <?php $quoteId = 64; include 'quote_section.php'; ?>

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

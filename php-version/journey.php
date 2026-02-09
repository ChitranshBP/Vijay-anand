<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Journey - Dr. Vijay Anand Reddy</title>
    
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
<body class="bg-white text-gray-800">

    <?php include 'navbar.php'; ?>

    <!-- Hero Section -->
    <section class="pt-32 pb-16 bg-medical-blue/5">
        <div class="max-w-5xl mx-auto px-4 text-center reveal">
            <div class="w-10 h-10 text-medical-blue mx-auto mb-3 flex items-center justify-center">
                <i data-feather="compass" class="w-10 h-10"></i>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-medical-dark mb-4">A Journey of Dedication and Excellence</h1>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
              From the fields of Palamuru to global centers of cancer innovation, Dr. Vijay Anand Reddy’s story is one of grit, compassion and trailblazing achievement.
            </p>
        </div>
    </section>

    <!-- Timeline Section -->
    <?php
    $timelineItems = [
        [
            'icon' => 'compass',
            'title' => "Early Life",
            'content' => "Born in the humble hamlet of Palamuru, Mehboobnagar, Dr. Vijay Anand Reddy excelled in studies from a young age. Despite hardships, he topped his National Common and SSC exams, scored a perfect 100 in Mathematics, and was a school leader in social values as well as academics. Initially attracted to engineering, he pursued medicine after his father’s encouragement and was active in student leadership and social initiatives, even fundraising during national crises."
        ],
        [
            'icon' => 'book',
            'title' => "Medical Education",
            'content' => "Dr. Reddy studied MBBS at Osmania Medical College, aided by scholarships and actively involved in anti-ragging, student leadership, and relief work. Upon graduation, he served as the first Medical Officer at Bhootpur Primary Health Centre, marking the start of his medical service and care for the underprivileged."
        ],
        [
            'icon' => 'activity',
            'title' => "Oncology Calling",
            'content' => "Inspired by his uncle, a government oncologist, Dr. Reddy joined the MD (Radiation Therapy) program at Osmania, overcoming concerns about the field’s challenges. He later earned a Clinical Oncology fellowship in London but returned to India after his father’s passing, choosing to serve his homeland rather than take an overseas job."
        ]
    ];
    ?>
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Image -->
        <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-xl reveal">
          <img
            src="assets/journey/Early-Life.png"
            alt="Dr. Vijay Anand Reddy's Journey"
            class="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <!-- Right Timeline -->
        <div class="relative space-y-10 reveal delay-200">
          <!-- Vertical line -->
          <div class="absolute top-0 bottom-0 left-6 w-1 bg-medical-blue/30 rounded-full"></div>

          <?php foreach($timelineItems as $index => $item): ?>
            <div class="relative flex gap-6 pl-16 reveal delay-<?= $index * 100 ?>">
              <!-- Marker -->
              <div class="absolute left-0 top-1 w-10 h-10 flex items-center justify-center rounded-full bg-medical-blue text-white shadow-lg z-10">
                <i data-feather="<?= $item['icon'] ?>" class="w-5 h-5"></i>
              </div>

              <!-- Content -->
              <div>
                <h2 class="text-2xl font-semibold text-medical-dark mb-2"><?= $item['title'] ?></h2>
                <p class="text-gray-700 text-lg leading-relaxed"><?= $item['content'] ?></p>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <!-- Degrees Section -->
    <?php
    $degrees = [
        ['title' => "M.B.B.S.", 'institution' => "Osmania Medical College, Hyderabad", 'year' => 1983],
        ['title' => "M.D. (Radiation Therapy)", 'institution' => "Osmania Medical College, Hyderabad", 'year' => 1992],
        ['title' => "D.N.B. (Oncology)", 'institution' => "Osmania Medical College, Hyderabad", 'year' => 1993],
        ['title' => "European Certification in Medical Oncology (ESMO)", 'institution' => "Europe", 'year' => 2005],
        ['title' => "Re-certification in European Certification in Medical Oncology (ESMO)", 'institution' => "Europe", 'year' => 2010]
    ];
    ?>
    <section class="py-10 bg-gray-50">
        <div class="max-w-3xl mx-auto px-4 reveal">
            <h2 class="text-2xl font-bold text-medical-dark mb-4 flex items-center gap-3">
                <i data-feather="book" class="w-6 h-6 text-medical-blue"></i>
                Degrees
            </h2>
            <ul class="grid grid-cols-1 gap-3">
                <?php foreach($degrees as $d): ?>
                <li class="bg-white rounded border px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between">
                    <span class="font-semibold text-medical-dark"><?= $d['title'] ?></span>
                    <span class="text-gray-700 text-sm sm:text-base"><?= $d['institution'] ?></span>
                    <span class="text-medical-blue text-xs font-medium"><?= $d['year'] ?></span>
                </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>

    <!-- Fellowships Section -->
    <?php
    $fellowships = [
        [
            'title' => "Stereotactic Radiosurgery Fellowship",
            'location' => "Klinikum Frankfurt (Oder) GmbH, Frankfurt (Oder), Germany",
            'supervisor' => "Dr. Reinhard E. Wurm",
            'month' => "March 2010",
            'image' => "assets/journey/Stereotactic-Radiosurgery.png"
        ],
        [
            'title' => "Ocular Oncology Fellowship",
            'location' => "Will’s Eye Hospital, Philadelphia, USA",
            'supervisor' => "Dr. Mr & Mrs. Shields",
            'month' => "May – June 2003",
            'image' => "assets/journey/Ocular-Oncology.png"
        ],
        [
            'title' => "Pediatric Oncology Fellowship",
            'location' => "Children’s Hospital of Philadelphia, USA",
            'supervisor' => "Dr. Anna Meadows",
            'month' => "May – June 2003",
            'image' => "assets/journey/Pediatric-Oncology.png"
        ],
        [
            'title' => "Head & Neck Oncology Fellowship",
            'location' => "Peter McCallum Cancer Institute, Melbourne, Australia",
            'supervisor' => "Dr. Lester Peters",
            'month' => "July – August 1998",
            'image' => "assets/journey/Head & Neck-Oncology.png"
        ],
        [
            'title' => "Hyperthermia Fellowship",
            'location' => "New York Medical College, Valhalla, NY, USA",
            'supervisor' => "Dr. Chitty R. Moorthy",
            'month' => "May 1995",
            'image' => "assets/journey/Hyperthermia-Fellowship.png"
        ],
        [
            'title' => "Nargis Dutt Memorial Cancer Foundation Fellowship",
            'location' => "New York Hospital, Medical Centre of Queens, NY, USA",
            'supervisor' => "Dr. Dattetreyudu Nori",
            'month' => "June 1995",
            'image' => "assets/journey/The-Nargis-Dutt-Memorial.png"
        ],
        [
            'title' => "Head & Neck Brachytherapy Observership",
            'location' => "Memorial Sloan Kettering Cancer Centre, New York, USA",
            'supervisor' => "Dr. Louise Harrison",
            'month' => "July 1995",
            'image' => "assets/journey/Head & Neck-Brachytherapy.png"
        ],
        [
            'title' => "Clinical Oncology Fellowship",
            'location' => "Meyerstein Institute of Clinical Oncology, Middlesex Hospital, London",
            'supervisor' => "Dr Margaret Spittle",
            'month' => "July – Sept 1992",
            'image' => "assets/journey/The-Clinical-Oncology.png"
        ],
        // No images for the following
        [
            'title' => "Clinical Oncology Observership",
            'location' => "Christie Hospital, Manchester, UK",
            'supervisor' => "Dr Ghattamaneni Hanumantha Rao",
            'month' => "Sept 1992",
            'image' => null
        ],
        [
            'title' => "Clinical Oncology Fellowship",
            'location' => "Adyar Cancer Institute, Chennai, India",
            'supervisor' => "Dr. S. Krishnamurthy",
            'month' => "Jan 1990",
            'image' => null
        ],
        [
            'title' => "Medical Oncology Fellowship",
            'location' => "Nizam Institute of Medical Sciences, Hyderabad, India",
            'supervisor' => "Dr. D. Raghunadha Rao",
            'month' => "Sept 1990",
            'image' => null
        ],
        [
            'title' => "Radiation Oncology Fellowship",
            'location' => "Tata Memorial Hospital, Bombay, India",
            'supervisor' => "Dr. K A Dinshaw",
            'month' => "March 1990",
            'image' => null
        ],
        // Entries previously missing
        [
            'title' => "Assistant Professor",
            'location' => "MNJ Institute of Oncology, Red Hills, Hyderabad",
            'month' => "April 1992 - 1999",
            'image' => null
        ],
        [
            'title' => "Associate Professor of Radiation Oncology",
            'location' => "Kakatiya Medical College, Warangal",
            'month' => "April 1999 - April 2001",
            'image' => null
        ],
        [
            'title' => "Consultant Ocular Oncologist",
            'location' => "L.V. Prasad Eye Institute",
            'month' => "Since 1998",
            'image' => null
        ],
        [
            'title' => "Director & Sr. Consultant",
            'location' => "Apollo Cancer Centers, Hyderabad",
            'month' => "Since April 2002",
            'image' => null
        ]
    ];
    ?>
    <section class="py-14 bg-white">
        <div class="max-w-5xl mx-auto px-4 reveal">
            <h2 class="text-2xl font-bold text-medical-dark mb-7 flex items-center gap-3">
                <i data-feather="award" class="w-6 h-6 text-medical-blue"></i>
                Fellowships & International Training
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php foreach($fellowships as $f): ?>
                <div class="bg-gray-50 border rounded-xl shadow-sm overflow-hidden flex flex-col">
                    <?php if($f['image']): ?>
                    <div class="h-40 bg-gray-200 flex items-center justify-center">
                      <img
                        src="<?= $f['image'] ?>"
                        alt="<?= $f['title'] ?>"
                        class="h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <?php endif; ?>
                    
                    <div class="flex-1 flex flex-col p-4">
                        <span class="text-medical-blue text-xs mb-1"><?= $f['month'] ?></span>
                        <h3 class="text-lg font-semibold text-medical-dark mb-1"><?= $f['title'] ?></h3>
                        <span class="text-gray-700 text-sm"><?= $f['location'] ?></span>
                        <?php if(isset($f['supervisor'])): ?>
                            <span class="text-gray-500 text-xs mt-1">Mentor: <?= $f['supervisor'] ?></span>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Giving Back Section -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-3xl mx-auto px-4 text-center reveal">
            <div class="w-10 h-10 text-medical-blue mx-auto mb-3 flex items-center justify-center">
                <i data-feather="heart" class="w-10 h-10"></i>
            </div>
            <h2 class="text-2xl font-bold text-medical-dark mb-2">Giving Back</h2>
            <p class="text-gray-800 text-lg">
              Dr. Reddy’s career reflects a lifelong commitment to service over self. His work began with offering health care in underserved areas—often spending his own resources to improve local facilities—and continues with major philanthropic initiatives today. For him, medicine has always meant giving back to society.
            </p>
        </div>
    </section>

    <!-- Quote Section -->
    <?php $quoteId = 55; include 'quote_section.php'; ?>

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

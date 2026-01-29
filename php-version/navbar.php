<?php
// Navigation Data
$navItems = [
    [
        'name' => 'Know the Doctor',
        'href' => '#',
        'dropdown' => [
            ['name' => 'Journey', 'href' => 'journey.php'],
            ['name' => 'Achievements', 'href' => 'achievements.php'],
            ['name' => 'Awards', 'href' => 'awards.php'],
            ['name' => 'Professional Association', 'href' => 'professional-association.php'],
            [
                'name' => 'Research',
                'href' => '#',
                'submenu' => [
                    ['name' => 'Books', 'href' => 'books.php'],
                    ['name' => 'Publications', 'href' => 'publications.php'],
                    ['name' => 'Presentations', 'href' => 'professional-presentations.php'],
                    ['name' => 'Cancer Clinics', 'href' => 'cancer-clinics.php'],
                ],
            ],
            ['name' => 'Conferences Organized', 'href' => 'conferences.php'],
            ['name' => 'Awareness Talks', 'href' => 'awareness-lectures.php'],
            ['name' => "Doctor's Awareness Talks", 'href' => 'doctor-speaks.php'],
            ['name' => "Patient's Testimonials", 'href' => 'testimonials.php'],
            ['name' => 'Family', 'href' => 'family.php'],
            [
                'name' => 'Hobbies',
                'href' => '#',
                'submenu' => [
                    ['name' => 'Golf', 'href' => 'ccgc-2.php'],
                ],
            ],
        ],
    ],
    [
        'name' => 'Conditions',
        'href' => '#',
        'dropdown' => [
            ['name' => 'Breast Cancer', 'href' => 'breast-cancer.php'],
            ['name' => 'Lung Cancer', 'href' => 'lung-cancer.php'],
            ['name' => 'Prostate Cancer', 'href' => 'prostate-cancer.php'],
            ['name' => 'Cervical Cancer', 'href' => 'cervical-cancer.php'],
            ['name' => 'Ovarian Cancer', 'href' => 'ovarian-cancer.php'],
            ['name' => 'Colorectal Cancer', 'href' => 'colorectal-cancer.php'],
            ['name' => 'Liver Cancer', 'href' => 'liver-cancer.php'],
            ['name' => 'Kidney Cancer', 'href' => 'kidney-cancer.php'],
            ['name' => 'Pancreatic Cancer', 'href' => 'pancreatic-cancer.php'],
            ['name' => 'Thyroid Cancer', 'href' => 'thyroid-cancer.php'],
            ['name' => 'Eye Cancer', 'href' => 'eye-cancer.php'],
            ['name' => 'Retinoblastoma', 'href' => 'retinoblastoma.php'],
            ['name' => 'Uveal Melanoma', 'href' => 'uveal-melanoma.php'],
            ['name' => 'Eyelid Cancer', 'href' => 'eyelid-cancer.php'],
            ['name' => 'Brain / CNS Tumors', 'href' => 'brain-cnstumors.php'],
            ['name' => 'Bone Cancer / Osteosarcoma', 'href' => 'bone-cancer-osteosarcoma.php'],
            ['name' => 'Soft Tissue Sarcoma', 'href' => 'soft-tissue-sarcoma.php'],
            ['name' => 'Pediatric Cancers', 'href' => 'pediatric-cancers.php'],
            ['name' => 'Oral Cancer', 'href' => 'oral-cancer.php'],
            ['name' => 'Head & Neck Sub-Conditions', 'href' => 'head-neck-sub-conditions.php'],
        ],
    ],
    [
        'name' => 'Specialties',
        'href' => '#',
        'dropdown' => [
            ['name' => 'Radiation Oncology', 'href' => 'radiation-oncology.php'],
            ['name' => 'Medical Oncology', 'href' => 'medical-oncology.php'],
            ['name' => 'Surgical Oncology', 'href' => 'surgical-oncology.php'],
            ['name' => 'Hemato-Oncology', 'href' => 'hemato-oncology.php'],
            ['name' => 'Breast Oncology', 'href' => 'breast-oncology.php'],
            ['name' => 'Head & Neck Oncology', 'href' => 'head-neck-oncology.php'],
            ['name' => 'Thoracic Oncology', 'href' => 'thoracic-oncology.php'],
            ['name' => 'Gastrointestinal Oncology', 'href' => 'gastrointestinal-oncology.php'],
            ['name' => 'Gynecologic Oncology', 'href' => 'gynecologic-oncology.php'],
            ['name' => 'Uro-Oncology', 'href' => 'uro-oncology.php'],
            ['name' => 'Ocular Oncology', 'href' => 'ocular-oncology.php'],
            ['name' => 'Pediatric Oncology', 'href' => 'pediatric-oncology.php'],
            ['name' => 'Neuro-Oncology', 'href' => 'neuro-oncology.php'],
        ],
    ],
    [
        'name' => 'Treatment',
        'href' => '#',
        'dropdown' => [
            ['name' => 'Chemotherapy', 'href' => 'treatment.php?type=chemotherapy'],
            ['name' => 'Immunotherapy', 'href' => 'treatment.php?type=immunotherapy'],
            ['name' => 'Targeted Therapy', 'href' => 'treatment.php?type=targeted-therapy'],
            ['name' => 'Hormone Therapy', 'href' => 'treatment.php?type=hormone-therapy'],
            ['name' => 'Biological Therapy', 'href' => 'treatment.php?type=biological-therapy'],
            ['name' => 'Precision Oncology', 'href' => 'treatment.php?type=precision-oncology'],
            ['name' => 'External Beam Radiation', 'href' => 'treatment.php?type=external-beam-radiation'],
            ['name' => 'IMRT', 'href' => 'treatment.php?type=imrt'],
            ['name' => 'IGRT', 'href' => 'treatment.php?type=igrt'],
            ['name' => 'SRS', 'href' => 'treatment.php?type=srs'],
            ['name' => 'SBRT', 'href' => 'treatment.php?type=sbrt'],
            ['name' => 'Brachytherapy', 'href' => 'treatment.php?type=brachytherapy'],
            ['name' => 'Tomotherapy', 'href' => 'treatment.php?type=tomotherapy'],
            ['name' => 'Proton Therapy', 'href' => 'treatment.php?type=proton-therapy'],
            ['name' => 'Combined Modality Therapy', 'href' => 'treatment.php?type=combined-modality-therapy'],
            ['name' => 'Supportive Oncology Care', 'href' => 'treatment.php?type=supportive-oncology-care'],
        ],
    ],
    [
        'name' => 'Community Services',
        'href' => '#',
        'dropdown' => [
            ['name' => 'Awareness Programs', 'href' => 'events.php'],
            ['name' => 'I Am a Survivor', 'href' => 'survivors.php'],
            ['name' => 'Cure Foundation', 'href' => 'cure-2.php'],
            ['name' => 'CCGC', 'href' => 'ccgc-2.php'],
        ],
    ],
    [
        'name' => 'Media',
        'href' => '#',
        'dropdown' => [
            ['name' => 'Blog & Newsletter', 'href' => 'https://drvijayanandreddy.com/blog/'],
            ['name' => 'Print & Digital Gallery', 'href' => 'print-gallery.php'],
            ['name' => 'Video Gallery', 'href' => 'video-gallery.php'],
        ],
    ],
];

function getMenuIcon($name) {
    $map = [
        'Breast Cancer' => 'heart',
        'Lung Cancer' => 'activity',
        'Prostate Cancer' => 'target',
        'Cervical Cancer' => 'circle',
        'Radiation Oncology' => 'radio',
        'Medical Oncology' => 'alert-circle',
        'Surgical Oncology' => 'crosshair',
        'Hemato-Oncology' => 'droplet',
        'Kidney Cancer' => 'droplet',
        'Eye Cancer' => 'eye',
        'Pediatric Cancers' => 'users',
        'Brain / CNS Tumors' => 'cpu',
        'Bone Cancer / Osteosarcoma' => 'hexagon',
        'IMRT' => 'zap',
        'IGRT' => 'zap',
        'SRS' => 'star',
        'SBRT' => 'star',
        'Immunotherapy' => 'shield',
    ];
    return $map[$name] ?? 'circle';
}
?>

<!-- Top Bar -->
<div class="fixed top-0 w-full bg-medical-blue text-white py-2 px-4 text-sm z-[60]">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div class="flex items-center space-x-6">
            <a href="tel:+919676720002" class="flex items-center space-x-2 hover:text-white transition">
                <i data-feather="phone" class="w-4 h-4"></i>
                <span>+91-9676720002</span>
            </a>
            <a href="mailto:cancercare@drvijayanandreddy.com" class="hidden md:flex items-center space-x-2 hover:text-white transition">
                <i data-feather="mail" class="w-4 h-4"></i>
                <span>cancercare@drvijayanandreddy.com</span>
            </a>
        </div>
        <a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer" class="hidden lg:flex items-center space-x-2 hover:text-white transition">
            <i data-feather="map-pin" class="w-4 h-4"></i>
            <span>Apollo Cancer Centre, Hyderabad</span>
        </a>
    </div>
</div>

<!-- Main Header -->
<header id="main-header" class="fixed w-full z-[50] transition-all duration-300 bg-white shadow-sm" style="top: 36px;">
    <div class="container mx-auto">
        <div class="max-w-full 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-4 xl:px-6 2xl:px-8">
            <div class="flex justify-between items-center py-1 sm:py-1.5 lg:py-0 min-h-12 sm:min-h-14 gap-1">
                
                <!-- Logo -->
                <div class="flex items-center flex-shrink-0">
                    <a href="index.php" class="cursor-pointer">
                        <img src="../public/assets/logo-reddy-FINAL.png" alt="Dr. Vijay Anand Reddy" class="h-16 w-auto object-contain sm:h-18 md:h-20 lg:h-24" style="max-width: 280px;">
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden xl:flex items-center justify-end flex-1 space-x-0.5 xl:space-x-1 2xl:space-x-2 flex-shrink-0 min-w-0 relative">
                    <?php foreach ($navItems as $index => $item): ?>
                        <div class="group relative flex-shrink-0" onmouseenter="openDropdown(this)" onmouseleave="closeDropdown(this)">
                            <a href="<?= $item['href'] ?>" class="flex items-center px-1.5 xl:px-2 2xl:px-3 py-2 text-gray-700 hover:text-medical-blue font-medium transition-colors duration-200 whitespace-nowrap text-xs xl:text-sm 2xl:text-base leading-tight">
                                <span><?= $item['name'] ?></span>
                                <?php if (isset($item['dropdown'])): ?>
                                    <i data-feather="chevron-down" class="ml-0.5 xl:ml-1 w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200"></i>
                                <?php endif; ?>
                            </a>

                            <?php if (isset($item['dropdown'])): ?>
                                <?php if (in_array($item['name'], ['Conditions', 'Specialties', 'Treatment'])): ?>
                                    <!-- Mega Menu -->
                                    <div class="absolute right-0 top-full mt-1 w-[800px] xl:w-[900px] 2xl:w-[1000px] bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[100] hidden group-hover:block left-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" style="right: -20%;">
                                        <div class="grid grid-cols-3 gap-x-6 gap-y-2 px-6">
                                            <?php foreach ($item['dropdown'] as $subItem): ?>
                                                <a href="<?= $subItem['href'] ?>" class="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:text-medical-blue hover:bg-medical-blue/5 transition-all duration-200 text-sm font-medium rounded-lg group">
                                                    <i data-feather="<?= getMenuIcon($subItem['name']) ?>" class="w-5 h-5 text-medical-blue/60 group-hover:text-medical-blue flex-shrink-0 transition-colors"></i>
                                                    <span class="truncate"><?= $subItem['name'] ?></span>
                                                </a>
                                            <?php endforeach; ?>
                                        </div>
                                    </div>
                                <?php else: ?>
                                    <!-- Regular Dropdown -->
                                    <div class="absolute left-0 top-full mt-1 w-64 xl:w-72 2xl:w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[100] hidden group-hover:block transition-opacity duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                        <?php foreach ($item['dropdown'] as $subItem): ?>
                                            <div class="relative group/sub">
                                                <a href="<?= $subItem['href'] ?>" class="flex items-center justify-between px-5 py-3 text-gray-700 hover:text-medical-blue hover:bg-medical-blue/5 transition-all duration-200 text-sm font-medium rounded-lg mx-2">
                                                    <span class="truncate"><?= $subItem['name'] ?></span>
                                                    <?php if (isset($subItem['submenu'])): ?>
                                                        <i data-feather="chevron-right" class="w-4 h-4 text-gray-400"></i>
                                                    <?php endif; ?>
                                                </a>
                                                <?php if (isset($subItem['submenu'])): ?>
                                                    <!-- Sub-submenu -->
                                                    <div class="absolute left-full top-0 ml-2 w-56 xl:w-64 2xl:w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-[120] hidden group-hover/sub:block">
                                                        <?php foreach ($subItem['submenu'] as $subSubItem): ?>
                                                            <a href="<?= $subSubItem['href'] ?>" class="block px-5 py-3 text-gray-700 hover:text-medical-blue hover:bg-medical-blue/5 transition-all duration-200 text-sm leading-tight rounded-lg mx-2">
                                                                <span class="flex items-center gap-2.5">
                                                                    <i data-feather="arrow-right" class="w-3 h-3 text-medical-blue/60"></i>
                                                                    <?= $subSubItem['name'] ?>
                                                                </span>
                                                            </a>
                                                        <?php endforeach; ?>
                                                    </div>
                                                <?php endif; ?>
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>

                    <a href="contact.php" class="bg-medical-blue text-white px-2.5 xl:px-3 2xl:px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium ml-1 xl:ml-2 2xl:ml-3 text-xs xl:text-sm 2xl:text-base whitespace-nowrap flex-shrink-0">
                        Book Appointment
                    </a>
                </nav>

                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="xl:hidden p-2 rounded-md text-gray-700 hover:text-medical-blue flex-shrink-0">
                    <i data-feather="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden xl:hidden bg-white border-t border-gray-200 z-[45]">
        <div class="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            <?php foreach ($navItems as $index => $item): ?>
                <div>
                    <div class="flex items-center justify-between">
                        <a href="<?= $item['href'] ?>" class="block text-gray-700 hover:text-medical-blue font-medium py-2 flex-1">
                            <?= $item['name'] ?>
                        </a>
                        <?php if (isset($item['dropdown'])): ?>
                            <button onclick="toggleMobileDropdown('dropdown-<?= $index ?>')" class="p-2 text-gray-700 hover:text-medical-blue">
                                <i data-feather="chevron-down" class="w-4 h-4 transition-transform duration-200" id="icon-dropdown-<?= $index ?>"></i>
                            </button>
                        <?php endif; ?>
                    </div>
                    <?php if (isset($item['dropdown'])): ?>
                        <div id="dropdown-<?= $index ?>" class="hidden pl-4 space-y-1 bg-gray-50 rounded-lg mt-1">
                            <?php foreach ($item['dropdown'] as $subIdx => $subItem): ?>
                                <div>
                                    <div class="flex items-center justify-between">
                                        <a href="<?= $subItem['href'] ?>" class="block text-gray-600 hover:text-medical-blue py-2 text-sm flex-1">
                                            <?= $subItem['name'] ?>
                                        </a>
                                        <?php if (isset($subItem['submenu'])): ?>
                                            <button onclick="toggleMobileDropdown('submenu-<?= $index ?>-<?= $subIdx ?>')" class="p-1 text-gray-600 hover:text-medical-blue">
                                                <i data-feather="chevron-down" class="w-3 h-3" id="icon-submenu-<?= $index ?>-<?= $subIdx ?>"></i>
                                            </button>
                                        <?php endif; ?>
                                    </div>
                                    <?php if (isset($subItem['submenu'])): ?>
                                        <div id="submenu-<?= $index ?>-<?= $subIdx ?>" class="hidden pl-4 space-y-1 border-l-2 border-gray-200 ml-2">
                                            <?php foreach ($subItem['submenu'] as $subSubItem): ?>
                                                <a href="<?= $subSubItem['href'] ?>" class="block text-gray-500 hover:text-medical-blue py-1 text-xs">
                                                    <?= $subSubItem['name'] ?>
                                                </a>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
            
            <a href="contact.php" class="block w-full bg-medical-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium mt-4 text-center">
                Book Appointment
            </a>
        </div>
    </div>
</header>
<div class="md:h-4"></div>

<script>
    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    function toggleMobileDropdown(id) {
        const el = document.getElementById(id);
        const icon = document.getElementById('icon-' + id);
        el.classList.toggle('hidden');
        if(icon) {
            icon.classList.toggle('rotate-180');
        }
    }

    // Initialize Feather Icons
    document.addEventListener('DOMContentLoaded', () => {
        if(typeof feather !== 'undefined') {
            feather.replace();
        }
    });
</script>

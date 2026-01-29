const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
if (!filePath) {
    console.error('Please provide a file path');
    process.exit(1);
}

const fileName = path.basename(filePath, '.jsx');

function toKebabCase(str) {
    return str
        .replace(/Page$/, '')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase();
}

const outputFileName = toKebabCase(fileName) + '.php';
const outputDir = path.join(__dirname, 'php-version');
const outputPath = path.join(outputDir, outputFileName);

const content = fs.readFileSync(filePath, 'utf8');

// 1. Stats Extraction
const statsMatch = content.match(/const stats = (\[[\s\S]*?\]);/);
let statsPhp = '';
if (statsMatch) {
    const statsStr = statsMatch[1];
    statsPhp = `<?php
$stats = [
`;
    const objects = statsStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const label = (obj.match(/label:\s*"([^"]+)"/) || [])[1];
        const value = (obj.match(/value:\s*"([^"]+)"/) || [])[1];
        const iconMatch = obj.match(/icon:\s*<(\w+)/);
        const icon = iconMatch ? iconMatch[1] : '';
        if (label && value) {
            statsPhp += `    ['label' => "${label}", 'value' => "${value}", 'icon' => "${icon}"],\n`;
        }
    });
    statsPhp += `];
?>`;
}

// 2. FAQs Extraction
const faqsMatch = content.match(/const faqs = (\[[\s\S]*?\]);/);
let faqsPhp = '';
if (faqsMatch) {
    const faqsStr = faqsMatch[1];
    faqsPhp = `<?php
$faqs = [
`;
    // We handle the object parsing a bit loosely
    const objects = faqsStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const q = (obj.match(/question:\s*"([^"]+)"/) || [])[1];
        const a = (obj.match(/answer:\s*"([^"]+)"/) || [])[1];
         if (q && a) {
            faqsPhp += `    [
        'question' => "${q}",
        'answer' => "${a}"
    ],\n`;
        }
    });
    faqsPhp += `];
?>`;
}

// 3. Treatment Steps Extraction
const treatmentStepsMatch = content.match(/\[\s*\{\s*step:\s*"01"[\s\S]*?\]\.map/); 
let treatmentStepsPhp = '';
if (treatmentStepsMatch) {
    const stepsStr = treatmentStepsMatch[0];
    treatmentStepsPhp = `<?php
$treatmentSteps = [
`;
    const objects = stepsStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const step = (obj.match(/step:\s*"([^"]+)"/) || [])[1];
        const title = (obj.match(/title:\s*"([^"]+)"/) || [])[1];
        const desc = (obj.match(/desc:\s*"([^"]+)"/) || [])[1];
        const image = (obj.match(/image:\s*"([^"]+)"/) || [])[1];
        if(step) treatmentStepsPhp += `    ['step' => "${step}", 'title' => "${title}", 'desc' => "${desc}", 'image' => "${image}"],\n`;
    });
    treatmentStepsPhp += `];
?>`;
}

// 4. International Services Extraction
// RELAXED REGEX matching the loop structure
const intServicesMatch = content.match(/\[\s*\{\s*icon:[\s\S]*?\]\.map/);
let intServicesPhp = '';
if (intServicesMatch) {
    const servicesStr = intServicesMatch[0];
    intServicesPhp = `<?php
$subServices = [
`;
    // We need to match objects that have title and desc
    const objects = servicesStr.split('},').map(s => s + '}'); 
    
    objects.forEach(obj => {
        const iconMatch = obj.match(/icon:\s*<(\w+)/);
        const icon = iconMatch ? iconMatch[1] : '';
        const titleMatch = obj.match(/title:\s*"([^"]+)"/);
        const descMatch = obj.match(/desc:\s*"([^"]+)"/);
        
        if(titleMatch && descMatch) {
            intServicesPhp += `    ['icon' => "${icon}", 'title' => "${titleMatch[1]}", 'desc' => "${descMatch[1]}"],\n`;
        }
    });
    intServicesPhp += `];
?>`;
}

// extraction "Why Choose" list
const whyChooseMatch = content.match(/\{\[\s*"Best bone cancer[\s\S]*?\]\.map/);
let whyChoosePhp = '';
if (whyChooseMatch) {
    const listStr = whyChooseMatch[0];
    const items = listStr.match(/"([^"]+)"/g) || [];
    whyChoosePhp = `<?php
$whyChoose = [
`;
    items.forEach(item => {
        const val = item.replace(/"/g, '');
        whyChoosePhp += `    "${val}",\n`;
    });
    whyChoosePhp += `];
?>`;
}


// VIDEO DATA
const videosPhp = `<?php
$videos = [
    [
        'id' => "UbJsIKeP1ps",
        'thumbnail' => "https://img.youtube.com/vi/UbJsIKeP1ps/hqdefault.jpg",
        'title' => "10 ఏళ్లుగా క్యాన్సర్ లేకుండా జీవితం | Breast Cancer Survivor Story | Dr. Vijay Anand Reddy",
    ],
    [
        'id' => "ugvDtjZrXxE",
        'thumbnail' => "https://img.youtube.com/vi/ugvDtjZrXxE/hqdefault.jpg",
        'title' => "Talk by a cancer survivor | Happy Patient | Best Cancer/ Radiation oncology doctor in india",
    ],
    [
        'id' => "hefT59hk4Tk",
        'thumbnail' => "https://img.youtube.com/vi/hefT59hk4Tk/hqdefault.jpg",
        'title' => "What do my patients think about my treatment?",
    ],
    [
        'id' => "_fQ1-kAPh64",
        'thumbnail' => "https://img.youtube.com/vi/_fQ1-kAPh64/hqdefault.jpg",
        'title' => "Stage 3 Breast Cancer",
    ],
    [
        'id' => "MaWOvdr6RDw",
        'thumbnail' => "https://img.youtube.com/vi/MaWOvdr6RDw/hqdefault.jpg",
        'title' => "Cervical Cancer Treatment",
    ],
    [
        'id' => "532AAKNrSb4",
        'thumbnail' => "https://img.youtube.com/vi/532AAKNrSb4/hqdefault.jpg",
        'title' => "Vocal Cord Radiation Treatment",
    ]
];
?>
`;

// WIDGET SCRIPT EXTRACTION
let widgetScript = '';
const widgetMatch = content.match(/script\.src\s*=\s*'([^']+)'.*?script\.id\s*=\s*'([^']+)'.*?script\.setAttribute\('data-person',\s*'([^']+)'\)/s);

// Fallback search if the order is different or flexible
const srcMatch = content.match(/script\.src\s*=\s*'([^']+)'/);
const personMatch = content.match(/script\.setAttribute\('data-person',\s*'([^']+)'\)/);

if (srcMatch && personMatch) {
    widgetScript = `
    <!-- WhatsApp Widget Script -->
    <script defer src="${srcMatch[1]}" id="wacrs-widget-script" data-active data-widget-type="group" data-person="${personMatch[1]}"></script>
    `;
}



// 5. Main Content Extraction
// ROBUST METHOD: Start from the main wrapper div
let plainHtml = '';
const startMarker = '<div className="min-h-screen';
const startIndex = content.indexOf(startMarker);

if (startIndex !== -1) {
    // Find the end of the component
    const endIndex = content.lastIndexOf(');');
    if (endIndex > startIndex) {
        plainHtml = content.substring(startIndex, endIndex);
    } else {
        // Just take everything till end if lastIndexOf fails
        plainHtml = content.substring(startIndex);
        // Trim last curly brace or semicolon if present
        plainHtml = plainHtml.replace(/\s*\}\s*;\s*$/, '');
    }
} else {
    console.error("CRITICAL ERROR: Could not find main div start!");
    process.exit(1);
}


// TRANSFORMATIONS

// 0. Pre-process replacements for Header/Footer to placeholders
plainHtml = plainHtml.replace(/<SEO[^>]*\/>/g, '');
plainHtml = plainHtml.replace(/<Header\s*\/>/g, "<?php include 'navbar.php'; ?>");
plainHtml = plainHtml.replace(/<Footer\s*\/>/g, "<?php include 'footer.php'; ?>");

// 1. Remove Modal Block (Regex truncate method)
const modalRegex = /\{\s*selectedVideo\s*&&/;
const modalMatch = plainHtml.match(modalRegex);
if (modalMatch) {
    plainHtml = plainHtml.substring(0, modalMatch.index);
    if (!plainHtml.includes("include 'footer.php'")) {
        plainHtml += "\n            <?php include 'footer.php'; ?>\n        </div>";
    }
}

// 2. Video Section Replacement - Interactive Alpine Version
const videoSectionStartHtml = `
            <!-- Patient Video Testimonials -->
            <section class="py-16 bg-gray-50" x-data="{ currentVideo: <?php echo htmlspecialchars(json_encode($videos[0])); ?> }">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="inline-block py-1 px-3 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-semibold mb-4">
                            Patient Stories
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
                            Video Testimonials
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Hear from our patients about their successful bone cancer treatment journey with Dr. Vijay Anand Reddy.
                        </p>
                    </div>

                    <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <!-- Main Video Player -->
                        <div class="relative aspect-video bg-black">
                             <iframe
                                :src="'https://www.youtube.com/embed/' + currentVideo.id + '?rel=0'"
                                :title="currentVideo.title"
                                class="w-full h-full"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <!-- Video Thumbnails Navigation -->
                        <div class="relative p-6 bg-white border-t border-gray-100">
                            <div class="flex items-center gap-4">
                                <button
                                    onclick="document.getElementById('video-scroll-container').scrollBy({left: -200, behavior: 'smooth'})"
                                    class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Previous videos"
                                >
                                    <i class="fas fa-chevron-left"></i>
                                </button>

                                <div
                                    id="video-scroll-container"
                                    class="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
                                    style="scrollbar-width: none; -ms-overflow-style: none;"
                                >
                                    <?php foreach ($videos as $video): ?>
                                        <div
                                            @click="currentVideo = <?php echo htmlspecialchars(json_encode($video)); ?>"
                                            class="flex-shrink-0 w-64 cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300"
                                            :class="currentVideo.id === '<?= $video['id'] ?>' ? 'border-red-600 ring-2 ring-red-100' : 'border-transparent hover:border-gray-200'"
                                        >
                                            <div class="relative aspect-video">
                                                <img
                                                    src="<?= $video['thumbnail'] ?>"
                                                    alt="<?= $video['title'] ?>"
                                                    class="w-full h-full object-cover"
                                                />
                                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                    <div 
                                                        class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform"
                                                        :class="currentVideo.id === '<?= $video['id'] ?>' ? 'opacity-0' : 'opacity-100'"
                                                    >
                                                        <i class="fas fa-play"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-3 bg-gray-50 h-full">
                                                <h4 
                                                    class="text-sm font-semibold line-clamp-2"
                                                    :class="currentVideo.id === '<?= $video['id'] ?>' ? 'text-red-600' : 'text-gray-800'"
                                                >
                                                    <?= $video['title'] ?>
                                                </h4>
                                            </div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>

                                <button
                                    onclick="document.getElementById('video-scroll-container').scrollBy({left: 200, behavior: 'smooth'})"
                                    class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition flex-shrink-0"
                                    aria-label="Next videos"
                                >
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
`;

// Targeted Replacement using Component Marker
const videoMarker = "{/* Patient Video Testimonials */}";
const markerIdx = plainHtml.indexOf(videoMarker);

if (markerIdx !== -1) {
    // Find the end of this section (it ends before FAQ section usually, or just look for closing section tag)
    // We assume the video section is the one immediately following the marker
    const sectionStart = plainHtml.indexOf('<section', markerIdx);
    if (sectionStart !== -1) {
        const sectionEnd = plainHtml.indexOf('</section>', sectionStart);
        if (sectionEnd !== -1) {
             const pre = plainHtml.substring(0, markerIdx); // Start replacing FROM the marker
             const post = plainHtml.substring(sectionEnd + 10);
             plainHtml = pre + videoSectionStartHtml + post;
        }
    }
} else {
    // Fallback: Try searching for the title if marker is missing
    const videoHeaderIdx = plainHtml.indexOf('Video Testimonials');
    if (videoHeaderIdx !== -1) {
        const sectionStart = plainHtml.lastIndexOf('<section', videoHeaderIdx);
        const sectionEnd = plainHtml.indexOf('</section>', videoHeaderIdx);
        if (sectionStart !== -1 && sectionEnd !== -1) {
            // Safety check: Don't go back too far. 
            // If the sectionStart is very far from header, it might be wrong.
            // But let's trust the marker logic primarily.
            const pre = plainHtml.substring(0, sectionStart);
            const post = plainHtml.substring(sectionEnd + 10);
            plainHtml = pre + videoSectionStartHtml + post;
        }
    }
}

// 3. Loops (EARLY EXECUTION)

// Stats Loop
const statsLoopRegex = /\{stats\.map\(\(stat, index\) => \(\s*<motion\.div[\s\S]*?<\/motion\.div>\s*\)\)\}/;
if (statsLoopRegex.test(plainHtml)) {
    const loopContent = `
    <?php foreach ($stats as $stat): ?>
        <div class="text-center">
            <div class="text-4xl mb-2 flex justify-center opacity-80">
                <?php 
                    $iconClass = 'fas fa-star';
                    if(strpos($stat['icon'], 'FiClock') !== false) $iconClass = 'far fa-clock';
                    elseif(strpos($stat['icon'], 'FiActivity') !== false) $iconClass = 'fas fa-chart-line';
                    elseif(strpos($stat['icon'], 'FiUserCheck') !== false) $iconClass = 'fas fa-user-check';
                    elseif(strpos($stat['icon'], 'FiAward') !== false) $iconClass = 'fas fa-award';
                ?>
                <i class="<?= $iconClass ?>"></i>
            </div>
            <div class="text-3xl md:text-4xl font-bold mb-1"><?= $stat['value'] ?></div>
            <div class="text-blue-100 text-sm uppercase tracking-wide"><?= $stat['label'] ?></div>
        </div>
    <?php endforeach; ?>
    `;
    plainHtml = plainHtml.replace(statsLoopRegex, loopContent);
}

// FAQs Loop
const faqsLoopRegex = /\{faqs\.map\(\(faq, index\) => \(\s*<div[\s\S]*?<\/div>\s*\)\)\}/;
if (faqsLoopRegex.test(plainHtml)) {
    const loopContent = `
    <div class="space-y-4">
        <?php foreach ($faqs as $index => $faq): ?>
            <div class="bg-medical-light rounded-xl shadow-sm overflow-hidden" x-data="{ open: false }">
                <button
                    @click="open = !open"
                    class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                    <span class="font-bold text-gray-800"><?= $faq['question'] ?></span>
                    <i class="fas fa-chevron-down" :class="{'rotate-180': open}"></i>
                </button>
                <div x-show="open" class="px-6 pb-6 text-gray-600 animate-fadeIn">
                    <?= $faq['answer'] ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    `;
    plainHtml = plainHtml.replace(faqsLoopRegex, loopContent);
}

// Treatment Steps Loop
const treatmentLoopRegex = /\{\[\s*\{\s*step:\s*"01"[\s\S]*?\]\.map\(\(item, idx\) => \(\s*<div[\s\S]*?<\/div>\s*\)\)\}/;
if (treatmentLoopRegex.test(plainHtml)) {
    const loopContent = `
    <?php foreach ($treatmentSteps as $item): ?>
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-medical-blue relative overflow-hidden group">
            <div class="relative h-40 overflow-hidden">
                <img src="<?= $item['image'] ?>" alt="<?= $item['title'] ?>" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div class="absolute top-3 right-3 bg-medical-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"><?= $item['step'] ?></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-medical-dark mb-3"><?= $item['title'] ?></h3>
                <p class="text-gray-600"><?= $item['desc'] ?></p>
            </div>
        </div>
    <?php endforeach; ?>
    `;
    plainHtml = plainHtml.replace(treatmentLoopRegex, loopContent);
}

// International Services Loop
// RELAXED REGEX matching the loop structure
const intServicesLoopRegex = /\{\[\s*\{\s*icon:[\s\S]*?\]\.map\(\(service, idx\) => \(\s*<div[\s\S]*?<\/div>\s*\)\)\}/;
if (intServicesLoopRegex.test(plainHtml)) {
    const loopContent = `
    <?php foreach ($subServices as $service): ?>
        <div class="bg-medical-light p-6 rounded-xl border border-medical-blue/20 hover:shadow-lg transition group">
            <div class="bg-white w-14 h-14 rounded-full flex items-center justify-center text-medical-blue mb-4 shadow-sm group-hover:scale-110 transition">
                <?php 
                    $iconClass = 'fas fa-star';
                    if(strpos($service['icon'], 'FiMessageSquare') !== false) $iconClass = 'far fa-comments';
                    elseif(strpos($service['icon'], 'FiFileText') !== false) $iconClass = 'far fa-file-alt';
                    elseif(strpos($service['icon'], 'FiHome') !== false) $iconClass = 'fas fa-home';
                    elseif(strpos($service['icon'], 'FiGlobe') !== false) $iconClass = 'fas fa-globe';
                ?>
                <i class="<?= $iconClass ?> fa-lg"></i>
            </div>
            <h3 class="text-xl font-bold text-medical-dark mb-2"><?= $service['title'] ?></h3>
            <p class="text-gray-600 text-sm"><?= $service['desc'] ?></p>
        </div>
    <?php endforeach; ?>
    `;
    plainHtml = plainHtml.replace(intServicesLoopRegex, loopContent);
}

// Why Choose Loop
const whyChooseLoopRegex = /\{\[\s*"Best bone cancer[\s\S]*?\]\.map\(\(reason, idx\) => \(\s*<li[\s\S]*?<\/li>\s*\)\)\}/;
if (whyChooseLoopRegex.test(plainHtml)) {
    const loopContent = `
    <?php foreach ($whyChoose as $reason): ?>
        <li class="flex items-center gap-3 text-gray-700 font-medium">
            <i class="fas fa-check-circle text-medical-blue flex-shrink-0"></i>
            <?= $reason ?>
        </li>
    <?php endforeach; ?>
    `;
    plainHtml = plainHtml.replace(whyChooseLoopRegex, loopContent);
}

// Stars Loop
plainHtml = plainHtml.replace(/\{\[1, 2, 3, 4, 5\]\.map\(.*?=> \(\s*<svg[\s\S]*?<\/svg>\s*\)\)\}/, `
    <?php for($i=0; $i<5; $i++): ?>
        <svg class="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    <?php endfor; ?>
`);


// 4. Clean up other Reactisms (AFTER LOOPS)
plainHtml = plainHtml.replace(/style=\{\{([^}]+)\}\}/g, (match, inner) => {
    return 'style="' + inner.replace(/'/g, '').replace(/,/g, ';').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '"';
});
plainHtml = plainHtml.replace(/<style dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/g, '<style>$1</style>');
plainHtml = plainHtml.replace(/<Test\s*\/>/g, `
<div id="wid_1754467080840" class="my-10 container mx-auto"></div>
<script defer src="https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1754467080840" theme="light" footer="false" widget-type="carousel" token="687a20a3a7ee08492b66abfc" apiurl="https://server.onlinereviews.tech/api/v0.0.9" stats="true" addReview="true" profile-pic="true" review-name="true" positive-stars="false" wl="true" wlndig="https://go.meddyreviews.com/dr-vijay-anand-reddy" lang="us" brandStyle="%7B%22sidebar_background%22%3A%22%236CD79E%22%2C%22sidebar_text%22%3A%22black%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23676767%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(118%2C%20118%2C%20118)%22%2C%22brand_button_active%22%3A%22rgb(88%2C%2088%2C%2088)%22%2C%22brand_main_color_opacity%22%3A%22%236767671a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fmeddyreviews.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.meddyreviews.com%2Ftopbar.png%22%7D"></script>
`);
plainHtml = plainHtml.replace(/<QuoteSection quoteId=\{?(\d+)\}?.*?\/>/g, (match, id) => {
    return `<?php $quoteId = ${id}; include 'quote_section.php'; ?>`;
});

// Icon Map replacement
const iconMap = {
    'FiCalendar': 'far fa-calendar-alt',
    'FiPhone': 'fas fa-phone-alt',
    'FiCheckCircle': 'fas fa-check-circle',
    'FaUsers': 'fas fa-users',
    'FaHospital': 'far fa-hospital',
    'FiAward': 'fas fa-award',
    'FiBookOpen': 'fas fa-book-open',
    'FiTrendingUp': 'fas fa-chart-line',
    'FiArrowRight': 'fas fa-arrow-right',
    'FiMessageSquare': 'far fa-comments',
    'FiFileText': 'far fa-file-alt',
    'FiHome': 'fas fa-home',
    'FiGlobe': 'fas fa-globe',
    'FiMapPin': 'fas fa-map-marker-alt',
    'FiActivity': 'fas fa-chart-line',
    'FiUserCheck': 'fas fa-user-check',
    'FiHeart': 'fas fa-heart',
    'FiMail': 'far fa-envelope',
    'FaMicroscope': 'fas fa-microscope',
    'FaProcedures': 'fas fa-procedures',
    'FaXRay': 'fas fa-x-ray',
    'FaPills': 'fas fa-pills',
    'FaDna': 'fas fa-dna',
    'FiShield': 'fas fa-shield-alt',
    'FaHandHoldingHeart': 'fas fa-hand-holding-heart',
    'FiTarget': 'fas fa-bullseye',
    'FaPlay': 'fas fa-play',
    'FiPlay': 'fas fa-play',
    'FiChevronLeft': 'fas fa-chevron-left',
    'FiChevronRight': 'fas fa-chevron-right',
    'FiXCircle': 'fas fa-times-circle',
    'FiClock': 'far fa-clock'
};
Object.keys(iconMap).forEach(key => {
    const regex = new RegExp(`<${key}\\s*[^>]*\\/>`, 'g');
    plainHtml = plainHtml.replace(regex, `<i class="${iconMap[key]}"></i>`);
});

// Fix Asset Paths
plainHtml = plainHtml.replace(/src="\/assets\//g, 'src="/public/assets/');

// Remove React onError handlers (Robust multi-line)
plainHtml = plainHtml.replace(/onError=\{\(e\) => \{\s*e\.target\.style\.display = 'none';\s*\}\}/g, '');
plainHtml = plainHtml.replace(/onError=\{[\s\S]*?\}\}/g, '');
plainHtml = plainHtml.replace(/onError=\{.*?\}/g, '');


// Final basic cleanup
plainHtml = plainHtml.replace(/className=/g, 'class=');
plainHtml = plainHtml.replace(/htmlFor=/g, 'for=');
plainHtml = plainHtml.replace(/\{\/\*([\s\S]*?)\*\/\}/g, '<!--$1-->');
plainHtml = plainHtml.replace(/<motion\.([a-z]+)/g, '<$1');
plainHtml = plainHtml.replace(/<\/motion\.([a-z]+)>/g, '</$1>');
plainHtml = plainHtml.replace(/[a-z]+=\{\{.*?\}\}/g, '');
plainHtml = plainHtml.replace(/initial=\{undefined\}/g, '');
plainHtml = plainHtml.replace(/whileHover=\{.*?\}/g, '');
plainHtml = plainHtml.replace(/whileTap=\{.*?\}/g, '');
plainHtml = plainHtml.replace(/onClick=\{.*?\}/g, '');
plainHtml = plainHtml.replace(/key=\{.*?\}/g, '');

const phpContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${path.basename(filePath, '.jsx')} - Dr. Vijay Anand Reddy</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>

    <!-- Tailwind CSS -->
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
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>

    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
</head>
<body class="bg-gray-50">

${faqsPhp}
${statsPhp}
${treatmentStepsPhp}
${intServicesPhp}
${whyChoosePhp}
${videosPhp}

${plainHtml}

${widgetScript}

</body>
</html>
`;

fs.writeFileSync(outputPath, phpContent);
console.log('Generated ' + outputFileName);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Helper to extract arrays
function extractArray(nameRegex, content) {
    const match = content.match(nameRegex);
    if (match) {
        // Evaluate the string to get object? No, security risk and might fail with imports.
        // We regex parse it.
        // Assume format: [{ key: "val", ... }, ...]
        // We will try to simple-parse it.
        return match[1];
    }
    return null;
}

// 1. Extract Stats
// const stats = [...]
const statsMatch = content.match(/const stats = (\[[\s\S]*?\]);/);
let statsPhp = '';
if (statsMatch) {
    const statsStr = statsMatch[1];
    statsPhp = `<?php
$stats = [
`;
    // Parse objects { label: "...", value: "...", icon: <Fi... /> }
    // Regex for object: \{[\s\S]*?\}
    const objects = statsStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const label = (obj.match(/label:\s*"([^"]+)"/) || [])[1] || '';
        const value = (obj.match(/value:\s*"([^"]+)"/) || [])[1] || '';
        const icon = (obj.match(/icon:\s*<(\w+)/) || [])[1] || '';
        if(label) statsPhp += `    ['label' => "${label}", 'value' => "${value}", 'icon' => "${icon}"],\n`;
    });
    statsPhp += `];
?>`;
}

// 2. Extract FAQs
const faqsMatch = content.match(/const faqs = (\[[\s\S]*?\]);/);
let faqsPhp = '';
if (faqsMatch) {
    const faqsStr = faqsMatch[1];
    faqsPhp = `<?php
$faqs = [
`;
    const objects = faqsStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const q = (obj.match(/question:\s*"([^"]+)"/) || [])[1] || '';
        let a = (obj.match(/answer:\s*"([^"]+)"/) || [])[1] || '';
        // Handle potentially long answers or unescaped quotes?
        // JS quote "..." might contain \" ?
        // We trust the regex for simple cases.
        faqsPhp += `    [
        'question' => "${q}",
        'answer' => "${a}"
    ],\n`;
    });
    faqsPhp += `];
?>`;
}

// 3. Extract Treatment Steps (Inline array)
// Pattern: {[ ... ].map((item, idx) => ( ... ))} inside the section "Treatment Process"
// We look for the array literal `[{ step: "01", ... }]`
const treatmentStepsMatch = content.match(/\[\s*\{\s*step:\s*"01"[\s\S]*?\]\.map/); 
let treatmentStepsPhp = '';
if (treatmentStepsMatch) {
    const stepsStr = treatmentStepsMatch[0].replace('.map', '');
    treatmentStepsPhp = `<?php
$treatmentSteps = [
`;
    const objects = stepsStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const step = (obj.match(/step:\s*"([^"]+)"/) || [])[1] || '';
        const title = (obj.match(/title:\s*"([^"]+)"/) || [])[1] || '';
        const desc = (obj.match(/desc:\s*"([^"]+)"/) || [])[1] || '';
        const image = (obj.match(/image:\s*"([^"]+)"/) || [])[1] || '';
        if(step) treatmentStepsPhp += `    ['step' => "${step}", 'title' => "${title}", 'desc' => "${desc}", 'image' => "${image}"],\n`;
    });
    treatmentStepsPhp += `];
?>`;
}

// 4. Extract International Services (Inline array)
// Pattern: icon: <FiMessageSquare
const intServicesMatch = content.match(/\[\s*\{\s*icon:\s*<FiMessageSquare[\s\S]*?\]\.map/);
let intServicesPhp = '';
if (intServicesMatch) {
    const servicesStr = intServicesMatch[0].replace('.map', '');
    intServicesPhp = `<?php
$subServices = [
`;
    const objects = servicesStr.match(/\{[\s\S]*?\}/g) || [];
    objects.forEach(obj => {
        const icon = (obj.match(/icon:\s*<(\w+)/) || [])[1] || '';
        const title = (obj.match(/title:\s*"([^"]+)"/) || [])[1] || '';
        const desc = (obj.match(/desc:\s*"([^"]+)"/) || [])[1] || '';
        if(title) intServicesPhp += `    ['icon' => "${icon}", 'title' => "${title}", 'desc' => "${desc}"],\n`;
    });
    intServicesPhp += `];
?>`;
}


// 5. Extract Main Content
// Use a more specific regex: `return (<`
let returnMatch = content.match(/return\s*\(\s*<([\s\S]*?)\n\s*\);\s*};/); // This assumes the first tag is <
// If not found, try greedy match from `return (` followed by `<`
if (!returnMatch) {
    const matches = [...content.matchAll(/return\s*\(\s*(<[\s\S]*?)\n\s*\);\s*};/g)];
    // The last one is likely the component return if there are multiple (e.g. hooks)
    // But hooks usually return `cleanup` function not JSX. 
    // The component Return is usually the big one.
    // Let's look for `return (` followed by `div` or `SEO` or `Fragment`.
    // Actually, `indexOf` logic works if we search for `return (` followed by a specific tag.
    // In `BoneCancer...`, it starts with `<div`.
    const startIdx = content.indexOf('return (');
    // We need to ensure it's the component return.
    // Hack: find `return (` that is NOT `return () =>`.
    const componentReturnIdx = content.search(/return\s*\(\s*</); 
    if (componentReturnIdx !== -1) {
       // Find the matching `);` ? Hard to find matching.
       // We can take everything until end of file and trim the last `};`
       let mainPart = content.substring(componentReturnIdx + 8); // after `return (`
       // Remove the last `);` and `};` and `export default`
       mainPart = mainPart.substring(0, mainPart.lastIndexOf(');'));
       plainHtml = mainPart;
    }
} else {
    plainHtml = returnMatch[1];
}

if (!plainHtml) {
    console.error('Could not extract JSX content');
    // Fallback: take everything between `return (` and `export default`
    const s = content.indexOf('return (');
    const e = content.lastIndexOf('export default');
    if(s!==-1 && e!==-1) {
        plainHtml = content.substring(s+8, e);
        // trim last `};` and `);`
        plainHtml = plainHtml.replace(/\s*\)\;\s*\}\;\s*$/, '');
    }
}

// Transformations
plainHtml = plainHtml.replace(/<SEO[^>]*\/>/g, '');
plainHtml = plainHtml.replace(/<Header\s*\/>/g, "<?php include 'navbar.php'; ?>");
plainHtml = plainHtml.replace(/<Footer\s*\/>/g, "<?php include 'footer.php'; ?>");

// Replace <Test />
plainHtml = plainHtml.replace(/<Test\s*\/>/g, `
<div id="wid_1754467080840" class="my-10 container mx-auto"></div>
<script defer src="https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1754467080840" theme="light" footer="false" widget-type="carousel" token="687a20a3a7ee08492b66abfc" apiurl="https://server.onlinereviews.tech/api/v0.0.9" stats="true" addReview="true" profile-pic="true" review-name="true" positive-stars="false" wl="true" wlndig="https://go.meddyreviews.com/dr-vijay-anand-reddy" lang="us" brandStyle="%7B%22sidebar_background%22%3A%22%236CD79E%22%2C%22sidebar_text%22%3A%22black%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23676767%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(118%2C%20118%2C%20118)%22%2C%22brand_button_active%22%3A%22rgb(88%2C%2088%2C%2088)%22%2C%22brand_main_color_opacity%22%3A%22%236767671a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fmeddyreviews.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.meddyreviews.com%2Ftopbar.png%22%7D"></script>
`);

// Replace QuoteSection
plainHtml = plainHtml.replace(/<QuoteSection quoteId=\{?(\d+)\}?.*?\/>/g, (match, id) => {
    return `<?php $quoteId = ${id}; include 'quote_section.php'; ?>`;
});

// Cleanups
plainHtml = plainHtml.replace(/className=/g, 'class=');
plainHtml = plainHtml.replace(/htmlFor=/g, 'for=');
plainHtml = plainHtml.replace(/\{\/\*([\s\S]*?)\*\/\}/g, '<!--$1-->');

// Replace Stats Loop
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

// Replace FAQs Loop
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

// Replace Inline Treatment Steps Loop
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

// Replace Inline International Services Loop
const intServicesLoopRegex = /\{\[\s*\{\s*icon:\s*<FiMessageSquare[\s\S]*?\]\.map\(\(service, idx\) => \(\s*<div[\s\S]*?<\/div>\s*\)\)\}/;
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

plainHtml = plainHtml.replace(/style=\{\{([^}]+)\}\}/g, (match, inner) => {
    return 'style="' + inner.replace(/'/g, '').replace(/,/g, ';').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '"';
});

const phpContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${path.basename(filePath, '.jsx')} - Dr. Vijay Anand Reddy</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'medical-blue': '#1da1f2',
                        'medical-dark': '#1a202c',
                        'medical-light': '#f7fafc',
                        'medical-purple': '#6b46c1'
                    }
                }
            }
        }
    </script>
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

${plainHtml}

</body>
</html>
`;

// Clean up motion components and react fragments
const cleanPhp = phpContent
    .replace(/<motion\.([a-z]+)/g, '<$1')
    .replace(/<\/motion\.([a-z]+)>/g, '</$1>')
    .replace(/initial=\{\{.*?\}\}/g, '')
    .replace(/animate=\{\{.*?\}\}/g, '')
    .replace(/whileInView=\{\{.*?\}\}/g, '')
    .replace(/viewport=\{\{.*?\}\}/g, '')
    .replace(/transition=\{\{.*?\}\}/g, '')
    .replace(/<>\s*/g, '')
    .replace(/<\/>\s*/g, '');

fs.writeFileSync(outputPath, cleanPhp);
console.log('Generated ' + outputFileName);

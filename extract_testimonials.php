<?php
// extract_testimonials.php

$inputFile = 'src/data/testimonials.js';
$outputFile = 'php-version/testimonials_data.php';

if (!file_exists($inputFile)) {
    die("Input file not found: $inputFile\n");
}

$content = file_get_contents($inputFile);

// Extract youtubeTestimonials
// JS: export const youtubeTestimonials = [ ... ];
if (preg_match('/export const youtubeTestimonials = \[\s*(.*?)\s*\];/s', $content, $matches)) {
    $ytContent = $matches[1];
    
    // Parse objects { id: "...", thumbnail: "...", title: "..." },
    // Regex to match objects.
    preg_match_all('/\{(.*?)\}/s', $ytContent, $itemMatches);
    
    $youtubeTestimonials = [];
    foreach ($itemMatches[1] as $itemStr) {
        $item = [];
        if (preg_match('/id:\s*"(.*?)"/s', $itemStr, $m)) $item['id'] = $m[1];
        if (preg_match('/thumbnail:\s*"(.*?)"/s', $itemStr, $m)) $item['thumbnail'] = $m[1];
        if (preg_match('/title:\s*"(.*?)"/s', $itemStr, $m)) $item['title'] = $m[1];
        
        if (!empty($item)) {
            $youtubeTestimonials[] = $item;
        }
    }
} else {
    echo "Warning: Could not extract youtubeTestimonials\n";
    $youtubeTestimonials = [];
}

// Extract patientGallery
// JS: export const patientGallery = [ ... ];
if (preg_match('/export const patientGallery = \[\s*(.*?)\s*\];/s', $content, $matches)) {
    $galleryContent = $matches[1];
    
    // Parse objects { image: "..." },
    preg_match_all('/\{(.*?)\}/s', $galleryContent, $itemMatches);
    
    $patientGallery = [];
    foreach ($itemMatches[1] as $itemStr) {
        $item = [];
        if (preg_match('/image:\s*"(.*?)"/s', $itemStr, $m)) $item['image'] = $m[1];
        // Note: The React file map loop uses `p.name` but the data file only seems to have `image` property in the array shown in view_file.
        // Wait, looking at `src/data/testimonials.js` (Step 649):
        // Lines 87-120: { image: "assets/testimonials/..." },
        // None of them have `name` property.
        // But `TestimonialsPage.jsx` (Step 646) line 99 uses `{p.name}`.
        // And line 89 uses `p.name` as alt text.
        // If data doesn't have name, `p.name` will be undefined.
        // Is there another data source? Or maybe I missed it?
        // Let's look closely at `src/data/testimonials.js` again.
        // It purely lists objects with `image`.
        // So `p.name` will likely be empty.
        // I will preserve `image` property.
        
        if (!empty($item)) {
            // Fix relative path: "assets/..." -> "../public/assets/..." or just keep as is and prepend in PHP.
            // In React it references "assets/testimonials/..." which usually resolves to public/assets/...
            // I'll keep the string as is and handle pathing in PHP.
            $patientGallery[] = $item;
        }
    }
} else {
    echo "Warning: Could not extract patientGallery\n";
    $patientGallery = [];
}


echo "Extracted " . count($youtubeTestimonials) . " youtube testimonials.\n";
echo "Extracted " . count($patientGallery) . " gallery images.\n";

// Generate PHP file
$phpCode = "<?php\n" .
           "\$youtubeTestimonials = " . var_export($youtubeTestimonials, true) . ";\n" .
           "\$patientGallery = " . var_export($patientGallery, true) . ";\n" .
           "?>";

file_put_contents($outputFile, $phpCode);
echo "Saved to $outputFile\n";
?>

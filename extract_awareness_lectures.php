<?php
// extract_awareness_lectures.php

$inputFile = 'src/pages/AwarenessLecturesPage.jsx';
$outputFile = 'php-version/awareness_lectures_data.php';

if (!file_exists($inputFile)) {
    die("Input file not found: $inputFile\n");
}

$content = file_get_contents($inputFile);

// Extract the lectures array content
if (preg_match('/const lectures = \[\s*(.*?)\s*\];/s', $content, $matches)) {
    $arrayContent = $matches[1];
    
    // Parse individual objects
    // Each object matches { ... }
    preg_match_all('/\{(.*?)\}/s', $arrayContent, $itemMatches);
    
    $lectures = [];
    
    foreach ($itemMatches[1] as $itemStr) {
        $lecture = [];
        
        // Extract fields: title, venue, date
        // key: "value" or key: "value",
        // handling potential multiline values if any
        
        if (preg_match('/title:\s*"(.*?)"/s', $itemStr, $m)) $lecture['title'] = $m[1];
        if (preg_match('/venue:\s*"(.*?)"/s', $itemStr, $m)) $lecture['venue'] = trim(preg_replace('/\s+/', ' ', $m[1])); // Clean newlines
        if (preg_match('/date:\s*"(.*?)"/s', $itemStr, $m)) $lecture['date'] = $m[1];
        
        if (!empty($lecture)) {
            $lectures[] = $lecture;
        }
    }
    
    echo "Extracted " . count($lectures) . " lectures.\n";
    
    // Generate PHP file
    $phpCode = "<?php\n\$lectures = " . var_export($lectures, true) . ";\n?>";
    
    file_put_contents($outputFile, $phpCode);
    echo "Saved to $outputFile\n";
    
} else {
    die("Could not find lectures array in $inputFile\n");
}
?>

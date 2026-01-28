<?php
// extract_doctor_talks.php

$inputFile = 'src/pages/DoctorAwarenessPage.jsx';
$outputFile = 'php-version/doctor_talks_data.php';

if (!file_exists($inputFile)) {
    die("Input file not found: $inputFile\n");
}

$content = file_get_contents($inputFile);

// Extract the videos array content
if (preg_match('/const videos = \[\s*(.*?)\s*\];/s', $content, $matches)) {
    $arrayContent = $matches[1];
    
    // Extract strings like "-p-iSRQ2Q3M"
    preg_match_all('/"(.*?)"/', $arrayContent, $videoMatches);
    
    $videos = $videoMatches[1];
    
    echo "Extracted " . count($videos) . " videos.\n";
    
    // Generate PHP file
    $phpCode = "<?php\n\$videos = " . var_export($videos, true) . ";\n?>";
    
    file_put_contents($outputFile, $phpCode);
    echo "Saved to $outputFile\n";
    
} else {
    die("Could not find videos array in $inputFile\n");
}
?>

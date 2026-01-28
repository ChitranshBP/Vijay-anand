<?php
$content = file_get_contents('src/pages/VideoGalleryPage.jsx');
// Extract the videos array using regex
if (preg_match('/const\s+videos\s*=\s*\[(.*?)\]/s', $content, $matches)) {
    $jsonContent = '[' . $matches[1] . ']';
    
    // Cleanup for JSON decoding
    // Remove comments // ...
    $jsonContent = preg_replace('!//.*!', '', $jsonContent);
    // Remove trailing commas
    $jsonContent = preg_replace('/,\s*\]/', ']', $jsonContent);
    $jsonContent = preg_replace('/,\s*}/', '}', $jsonContent); // trailing comma in objects?
    
    $videos = json_decode($jsonContent, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        // Fallback: manually parse if json_decode fails (React JS object keys might not be quoted, but here they seem quoted: "id", "title")
        // Check if keys are quoted. In the file they ARE quoted: { "id": "...", "title": "..." }
        // So json_decode should work if we handle comments and trailing commas.
        
        echo "JSON Decode Error: " . json_last_error_msg() . "\n";
        // Manual cleanup attempt
        $jsonContent = '[' . $matches[1] . ']';
        $jsonContent = preg_replace('!//.*!', '', $jsonContent);
        // Remove trailing comma before ]
        $jsonContent = preg_replace('/,(\s*])/', '$1', $jsonContent);
         // Remove trailing comma before }
        $jsonContent = preg_replace('/,(\s*})/', '$1', $jsonContent);
        
        $videos = json_decode($jsonContent, true);
    }
    
    if ($videos) {
        $output = "<?php\n\$videos = " . var_export($videos, true) . ";\n";
        file_put_contents('php-version/video_gallery_data.php', $output);
        echo "Extracted " . count($videos) . " videos to php-version/video_gallery_data.php\n";
    } else {
        echo "Failed to decode videos array.\nRaw content snippet:\n" . substr($jsonContent, 0, 500) . "\n";
    }
} else {
    echo "Could not find videos array.\n";
}
?>

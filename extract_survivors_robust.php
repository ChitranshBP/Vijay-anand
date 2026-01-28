<?php

$jsFile = 'src/pages/survivors.js';
$content = file_get_contents($jsFile);

// Remove 'export const' to make it just 'const'
$content = str_replace('export const', 'const', $content);

// Remove specific imports if any (e.g. import React...)
// The file has no imports based on my view, but has 'export const survivorCategories'.
// I only care about 'survivors'.
// If I just run the whole file, it will define variables.
// I need to ensure I print 'survivors'.

$jsScript = $content . "\n" . "console.log(JSON.stringify(survivors));";

$tempJsFile = 'temp_survivors_extractor.js';
file_put_contents($tempJsFile, $jsScript);

// Run node
$output = shell_exec("node $tempJsFile");

if (!$output) {
    die("Node execution failed or returned empty.");
}

$data = json_decode($output, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    // Maybe node output has some warnings/errors mixed in?
    // Try to find the JSON array start/end
    if (preg_match('/\[.*\]/s', $output, $matches)) {
        $data = json_decode($matches[0], true);
    }
}

if (!$data) {
     die("JSON decode failed: " . json_last_error_msg() . "\nOutput was: " . substr($output, 0, 100));
}

// Write to PHP file
$phpContent = "<?php\n\$survivors = " . var_export($data, true) . ";\n";
file_put_contents('php-version/survivors_data.php', $phpContent);

echo "Successfully extracted " . count($data) . " survivors to php-version/survivors_data.php\n";

// Cleanup
unlink($tempJsFile);
?>

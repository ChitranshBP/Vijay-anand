<?php

$jsFile = 'src/pages/cancerClinics.js';
$content = file_get_contents($jsFile);

// Remove 'export const' to make it just 'const'
$content = str_replace('export const', 'const', $content);

// Append console log
$jsScript = $content . "\n" . "console.log(JSON.stringify(cancerClinics));";

$tempJsFile = 'temp_clinics_extractor.js';
file_put_contents($tempJsFile, $jsScript);

// Run node
$output = shell_exec("node $tempJsFile");

if (!$output) {
    die("Node execution failed or returned empty.");
}

// Clean output if necessary (sometimes node prints other stuff?)
// Usually clean if we just echo JSON.
$data = json_decode($output, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    if (preg_match('/\[.*\]/s', $output, $matches)) {
        $data = json_decode($matches[0], true);
    }
}

if (!$data) {
     die("JSON decode failed: " . json_last_error_msg());
}

// Fix paths
function fixPaths($item) {
    if (isset($item['banners'])) {
        foreach ($item['banners'] as $k => $v) {
            $item['banners'][$k] = str_replace('/assets/', '../public/assets/', $v);
        }
    }
    if (isset($item['photos'])) {
        foreach ($item['photos'] as $k => $v) {
            $item['photos'][$k] = str_replace('/assets/', '../public/assets/', $v);
        }
    }
    return $item;
}

$data = array_map('fixPaths', $data);

// Write to PHP file
$phpContent = "<?php\n\$cancerClinics = " . var_export($data, true) . ";\n";
file_put_contents('php-version/cancer_clinics_data.php', $phpContent);

echo "Successfully extracted " . count($data) . " clinics to php-version/cancer_clinics_data.php\n";

// Cleanup
unlink($tempJsFile);
?>

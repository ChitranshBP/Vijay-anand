<?php

$jsFile = 'src/pages/events.js';
$content = file_get_contents($jsFile);

// Remove 'export const' to make it just 'const'
$content = str_replace('export const', 'const', $content);

// Append console log
$jsScript = $content . "\n" . "console.log(JSON.stringify(events));";

$tempJsFile = 'temp_events_extractor.js';
file_put_contents($tempJsFile, $jsScript);

// Run node
$output = shell_exec("node $tempJsFile");

if (!$output) {
    die("Node execution failed or returned empty.");
}

// Clean output if necessary
$data = json_decode($output, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    // Try to find the JSON array in the output if there's text before/after
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
    if (isset($item['gallery'])) {
        if (is_array($item['gallery'])) {
            // Check if it's a list of strings or an associative array (object)
            $isAssoc = array_keys($item['gallery']) !== range(0, count($item['gallery']) - 1);
            
            if ($isAssoc) {
                // It's an object with keys like 'print', 'digital'
                foreach ($item['gallery'] as $key => $val) {
                    if (is_array($val)) {
                         foreach ($val as $k => $v) {
                            $item['gallery'][$key][$k] = str_replace('/assets/', '../public/assets/', $v);
                         }
                    }
                }
            } else {
                // Regular array of strings
                foreach ($item['gallery'] as $k => $v) {
                    $item['gallery'][$k] = str_replace('/assets/', '../public/assets/', $v);
                }
            }
        }
    }
    return $item;
}

$data = array_map('fixPaths', $data);

// Write to PHP file
$phpContent = "<?php\n\$events = " . var_export($data, true) . ";\n";
file_put_contents('php-version/events_data.php', $phpContent);

echo "Successfully extracted " . count($data) . " events to php-version/events_data.php\n";

// Cleanup
unlink($tempJsFile);
?>

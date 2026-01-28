<?php
$jsonFile = 'presentations.json';
$content = file_get_contents($jsonFile);

// Check for UTF-16LE BOM
if (substr($content, 0, 2) === "\xFF\xFE") {
    $content = mb_convert_encoding($content, 'UTF-8', 'UTF-16LE');
}

$data = json_decode($content, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    die("Error decoding JSON: " . json_last_error_msg());
}

echo "<?php\n\$presentations = " . var_export($data, true) . ";\n?>";
?>

<?php

function readJsArray($filepath, $varName) {
    $content = file_get_contents($filepath);
    // Remove export const ... = 
    $content = preg_replace('/^export\s+const\s+' . $varName . '\s*=\s*/', '', $content);
    // Remove trailing semicolon
    $content = rtrim(trim($content), ';');
    
    // Attempt json_decode first
    $data = json_decode($content, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        // If strict JSON fails (likely due to trailing commas or comments), try some cleanup
        // Remove comments
        $content = preg_replace('!/\*.*?\*/!s', '', $content); // multi-line comments
        $content = preg_replace('!//.*!', '', $content); // single-line comments
        // Remove trailing commas
        $content = preg_replace('/,\s*([\]}])/m', '$1', $content);
        
        $data = json_decode($content, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            die("Error decoding JSON from $filepath: " . json_last_error_msg());
        }
    }
    return $data;
}

function transformGalleryData($pageImages) {
    $transformed = [];
    
    foreach ($pageImages as $section) {
        $images = $section['images'] ?? [];
        $imageGroups = [];
        
        foreach ($images as $url) {
            $filename = basename($url);
            // Extract base name without dimensions
            if (preg_match('/^(.+?)(?:-\d+x\d+)?(\.[^.]+)$/', $filename, $matches)) {
                $baseName = $matches[1] . $matches[2];
                if (!isset($imageGroups[$baseName])) {
                    $imageGroups[$baseName] = ['thumbnails' => [], 'full' => []];
                }
                
                // Check if thumbnail
                if (preg_match('/-\d+x\d+\./', $filename)) {
                    $imageGroups[$baseName]['thumbnails'][] = $url;
                } else {
                    $imageGroups[$baseName]['full'][] = $url;
                }
            }
        }
        
        $sectionImages = [];
        foreach ($imageGroups as $group) {
            $fullImage = !empty($group['full']) ? $group['full'][0] : (end($group['thumbnails']) ?: null);
            $thumbnail = !empty($group['thumbnails']) ? $group['thumbnails'][0] : $fullImage;
            
            if ($fullImage) {
                // Fix paths: React assets/... -> ../public/assets/...
                $fullImage = str_replace('/assets/', '../public/assets/', $fullImage);
                 // Some paths might not start with /
                if (strpos($fullImage, 'assets/') === 0) {
                     $fullImage = '../public/' . $fullImage;
                }
                 // Handle duplicates if already prefixed
                 $fullImage = str_replace('../public//', '../public/', $fullImage);


                $thumbnail = str_replace('/assets/', '../public/assets/', $thumbnail);
                if (strpos($thumbnail, 'assets/') === 0) {
                     $thumbnail = '../public/' . $thumbnail;
                }
                $thumbnail = str_replace('../public//', '../public/', $thumbnail);

                $sectionImages[] = [
                    'thumbnail' => $thumbnail,
                    'fullImage' => $fullImage
                ];
            }
        }
        
        if (!empty($sectionImages)) {
            $transformed[] = [
                'title' => $section['title'],
                'images' => $sectionImages
            ];
        }
    }
    
    return $transformed;
}

$digitalRaw = readJsArray('src/pages/page_images_converted.js', 'pageImages');
$printRaw = readJsArray('src/pages/print_gallery_images_converted.js', 'printGalleryImages');

$digitalGallery = transformGalleryData($digitalRaw);
$printGallery = transformGalleryData($printRaw);

$output = "<?php\n\n";
$output .= "\$digitalGallery = " . var_export($digitalGallery, true) . ";\n\n";
$output .= "\$printGallery = " . var_export($printGallery, true) . ";\n";

file_put_contents('php-version/print_gallery_data.php', $output);

echo "Data extracted to php-version/print_gallery_data.php\n";
?>

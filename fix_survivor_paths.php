<?php
$file = 'php-version/survivors_data.php';
$content = file_get_contents($file);

// Replace /assets/ with ../public/assets/
// Case 1: '/assets/
$content = str_replace("'/assets/", "'../public/assets/", $content);
// Case 2: "/assets/ (if double quotes used)
$content = str_replace('"/assets/', '"../public/assets/', $content);

file_put_contents($file, $content);
echo "Fixed paths in $file\n";
?>

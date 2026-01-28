<?php
$file = 'php-version/presentations_data.php';
$content = file_get_contents($file);

// Replace \" with "
// Since the file content is PHP code in single quotes, we want to change literals like:
// 'foo \"bar\" baz'  ->  'foo "bar" baz'
// But we must be careful not to break anything else.
// The grep showed specifically `\"`.
$newContent = str_replace('\"', '"', $content);

file_put_contents($file, $newContent);
echo "Cleaned $file\n";
?>

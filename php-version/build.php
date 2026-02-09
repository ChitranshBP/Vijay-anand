<?php
/**
 * Build script: Renders all PHP pages to static HTML for Netlify deployment.
 * Each page is rendered in a separate PHP process to avoid redeclaration issues.
 * Run with: php build.php
 */

$sourceDir = __DIR__;
$distDir = __DIR__ . DIRECTORY_SEPARATOR . 'dist';

// Files that are partials/data (not standalone pages)
$excludeFiles = [
    'navbar.php',
    'footer.php',
    'quote_section.php',
    'testimonials_widget.php',
    'video_testimonials.php',
    'events_data.php',
    'cancer_clinics_data.php',
    'conferences_data.php',
    'doctor_talks_data.php',
    'presentations_data.php',
    'awareness_lectures_data.php',
    'testimonials_data.php',
    'survivors_data.php',
    'print_gallery_data.php',
    'video_gallery_data.php',
    'extract_testimonials.php',
    'build.php',
];

// Clean and create dist directory
if (is_dir($distDir)) {
    $it = new RecursiveDirectoryIterator($distDir, RecursiveDirectoryIterator::SKIP_DOTS);
    $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
    foreach ($files as $file) {
        if ($file->isDir()) {
            rmdir($file->getRealPath());
        } else {
            unlink($file->getRealPath());
        }
    }
    rmdir($distDir);
}
mkdir($distDir, 0755, true);

// Copy assets folder
function copyDir($src, $dst) {
    $dir = opendir($src);
    @mkdir($dst, 0755, true);
    while (($file = readdir($dir)) !== false) {
        if ($file === '.' || $file === '..') continue;
        $srcPath = $src . DIRECTORY_SEPARATOR . $file;
        $dstPath = $dst . DIRECTORY_SEPARATOR . $file;
        if (is_dir($srcPath)) {
            copyDir($srcPath, $dstPath);
        } else {
            copy($srcPath, $dstPath);
        }
    }
    closedir($dir);
}

echo "Copying assets...\n";
if (is_dir($sourceDir . DIRECTORY_SEPARATOR . 'assets')) {
    copyDir($sourceDir . DIRECTORY_SEPARATOR . 'assets', $distDir . DIRECTORY_SEPARATOR . 'assets');
    echo "  Assets copied.\n";
}

// Find all page PHP files
$phpFiles = glob($sourceDir . DIRECTORY_SEPARATOR . '*.php');
$rendered = 0;
$errors = [];

echo "Rendering PHP pages to HTML...\n";
foreach ($phpFiles as $phpFile) {
    $basename = basename($phpFile);

    // Skip partials and data files
    if (in_array($basename, $excludeFiles) || preg_match('/_data\.php$/', $basename)) {
        echo "  Skipping: $basename\n";
        continue;
    }

    $htmlName = preg_replace('/\.php$/', '.html', $basename);

    // Render each page in a separate PHP process to avoid function redeclaration
    $escapedPath = escapeshellarg($phpFile);
    $cmd = "php $escapedPath 2>&1";
    $oldDir = getcwd();
    chdir($sourceDir);
    $html = shell_exec($cmd);
    chdir($oldDir);

    if ($html === null) {
        $errors[] = "$basename: shell_exec returned null";
        echo "  ERROR: $basename\n";
        continue;
    }

    // Replace .php links with .html links
    $html = preg_replace('/href="([^"]*?)\.php(["#])/', 'href="$1.html$2', $html);

    // Write HTML file
    $outPath = $distDir . DIRECTORY_SEPARATOR . $htmlName;
    file_put_contents($outPath, $html);
    $rendered++;
    echo "  Rendered: $basename -> $htmlName\n";
}

// Create _redirects for Netlify (redirect old .php URLs to .html)
$redirects = "# Redirect .php URLs to .html\n";
foreach ($phpFiles as $phpFile) {
    $basename = basename($phpFile);
    if (in_array($basename, $excludeFiles) || preg_match('/_data\.php$/', $basename)) continue;
    $htmlName = preg_replace('/\.php$/', '.html', $basename);
    $redirects .= "/$basename    /$htmlName    301\n";
}
// SPA-style fallback for index
$redirects .= "/    /index.html    200\n";
file_put_contents($distDir . DIRECTORY_SEPARATOR . '_redirects', $redirects);

echo "\n=== Build Complete ===\n";
echo "Rendered: $rendered pages\n";
echo "Output: dist/\n";
if (!empty($errors)) {
    echo "Errors: " . count($errors) . "\n";
    foreach ($errors as $err) echo "  - $err\n";
}

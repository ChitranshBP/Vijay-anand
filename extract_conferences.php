<?php
$content = file_get_contents('src/pages/ConferencesPage.jsx');

// Extract organizedList
// Pattern: const organizedList = [ ... ];
preg_match('/const organizedList = \[\s*([\s\S]*?)\];/', $content, $matchesOrg);
$organizedRaw = $matchesOrg[1] ?? '';

// Extract participatedList
preg_match('/const participatedList = \[\s*([\s\S]*?)\];/', $content, $matchesPart);
$participatedRaw = $matchesPart[1] ?? '';

function parseStringList($raw) {
    // lines are "string", or "string"
    // We can just explode by newline and trim quotes/commas
    $lines = explode("\n", $raw);
    $result = [];
    foreach ($lines as $line) {
        $line = trim($line);
        if (empty($line) || $line === '//') continue;
        
        // Remove leading quote, trailing quote/comma
        // "Value", -> Value
        
        if (preg_match('/^"(.*)",?$/', $line, $m)) {
            $result[] = $m[1];
        }
    }
    return $result;
}

$organized = parseStringList($organizedRaw);
$participated = parseStringList($participatedRaw);

$output = "<?php\n";
$output .= "\$organizedList = " . var_export($organized, true) . ";\n";
$output .= "\$participatedList = " . var_export($participated, true) . ";\n";
$output .= "?>";

file_put_contents('conferences_data.php', $output);
echo "Extracted " . count($organized) . " organized and " . count($participated) . " participated events.\n";
?>

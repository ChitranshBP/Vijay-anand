<?php
$content = file_get_contents('src/pages/ProfessionalPresentationsPage.jsx');
$lines = explode("\n", $content);

$insideArray = false;
$items = [];
$currentItem = [];
$multilineKey = '';
$multilineValue = '';

foreach ($lines as $line) {
    if (strpos($line, 'const presentations = [') !== false) {
        $insideArray = true;
        continue;
    }
    if ($insideArray && trim($line) === '];') {
        $insideArray = false;
        break;
    }

    if (!$insideArray) continue;

    $trimLine = trim($line);
    
    // Check for start of new item
    if ($trimLine === '{') {
        $currentItem = [];
        continue;
    }
    
    // Check for end of item
    if ($trimLine === '},') {
        if (!empty($currentItem)) {
            $items[] = $currentItem;
        }
        $currentItem = [];
        continue;
    }

    // Key-Value parsing
    // Matches: key: "value",
    // Matches: key:
    //          "value",
    if (preg_match('/^([a-z]+):\s*"(.*)"\s*,?$/', $trimLine, $matches)) {
        // Simple case: key: "value",
        $key = $matches[1];
        $val = $matches[2];
        $currentItem[$key] = $val;
    } elseif (preg_match('/^([a-z]+):$/', $trimLine, $matches)) {
        // Multi-line start: key:
        $multilineKey = $matches[1];
        $multilineValue = '';
    } elseif ($multilineKey !== '') {
        // We are reading a multi-line value
        // It ends when we see a comma at the end of the line, usually
        // But JS concatenation: "..." +
        //                       "..."
        
        // Remove quotes and +
        $cleanLine = trim($line);
        $cleanLine = trim($cleanLine, '+');
        $cleanLine = trim($cleanLine); // trim again
        $cleanLine = trim($cleanLine, '"'); // remove surrounding quotes
        $cleanLine = trim($cleanLine, ','); // remove trailing comma if end
        
        $multilineValue .= $cleanLine;

        if (substr(trim($line), -1) === ',' || substr(trim($line), -1) === '}') {
             // End of this key's value (logic is a bit fuzzy here, checking typical formatting)
             // Actually, if the line ends with comma, it's end of property.
             // If line ends with double quote (and maybe comma), it's end.
             
             if (preg_match('/",?$/', trim($line))) {
                 $currentItem[$multilineKey] = $multilineValue;
                 $multilineKey = '';
                 $multilineValue = '';
             }
        }
    }
}

// Save
echo "Parsed " . count($items) . " items.\n";
$phpContent = "<?php\n\$presentations = " . var_export($items, true) . ";\n?>";
file_put_contents('presentations_data.php', $phpContent);
?>

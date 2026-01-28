const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/ProfessionalPresentationsPage.jsx');
const content = fs.readFileSync(filePath, 'utf8');

// Regex to capture the array content
// Assuming it starts with "const presentations = [" and ends with "];" before the component definition
const regex = /const presentations = \[\s*([\s\S]*?)\];/;
const match = content.match(regex);

if (match && match[1]) {
    // We have the array content. Now we need to valid JSON.
    // The keys in the object (title, event, date) might not be quoted.
    // We need to wrap keys in quotes.
    let arrayContent = match[1];
    
    // Simple heuristic to quote keys: key: "value" -> "key": "value"
    // This handles: title:, event:, date:
    arrayContent = arrayContent.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?\s*:/g, '"$2":');
    
    // Also remove trailing commas if any, which are valid in JS but not JSON
    // A simple regex for trailing commas in objects or arrays might be tricky, but let's try
    // arrayContent = arrayContent.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']'); // Basic cleanup
    // Re-evaluating text to object might be unsafe but for this local file it's fine and easier.
    
    try {
        // Construct a string that evaluates to the array
        // We can just use eval in a safe way if we trust the source (we do)
        // actually, since I'm running this locally and I just read the file, direct conversion to json string is better if possible.
        // But eval is the most robust way to handle JS array syntax (likes comments, trailing commas).
        
        const presentations = eval('[' + match[1] + ']');
        console.log(JSON.stringify(presentations, null, 2));
    } catch (e) {
        console.error("Error parsing parsed content:", e);
    }
} else {
    console.error("Could not find presentations array.");
}

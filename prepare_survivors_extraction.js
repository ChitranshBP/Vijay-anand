const fs = require('fs');

// Read the original file
let content = fs.readFileSync('src/pages/survivors.js', 'utf8');

// Remove 'export' keyword to make it standard JS I can eval/require locally if I wanted, 
// but since I'll just run it in this script context, I'll basically eval it or just append logic.
// Actually, 'import' might be used? No imports in that file.

// Replace 'export const' with 'const'
content = content.replace(/export const/g, 'const');

// Append code to log the data
const append = `
console.log(JSON.stringify(survivors));
`;

// Execute logic
// We can use eval, but distinct context is better. 
// I'll just write a temporary file that IS this content + the print statement.
fs.writeFileSync('temp_extract_survivors.js', content + append);

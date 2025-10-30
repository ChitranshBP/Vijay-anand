/**
 * Auto-generate gallery.js from saved Print-Gallery HTML
 * ✅ Works with Elementor structure
 * ✅ Keeps all 34 verified headings
 * ✅ Preserves full WordPress URLs and all image formats
 * ✅ Creates a React-ready export file
 * Run:
 *   npm install jsdom
 *   node build_gallery.js "Print Gallery - Dr Vijay Anand Reddy.html"
 */

import fs from "fs";
import { JSDOM } from "jsdom";

// === Read HTML file ===
const htmlFile = process.argv[2];
if (!htmlFile || !fs.existsSync(htmlFile)) {
  console.error("❌ Error: HTML file not found.\nUsage: node build_gallery.js \"Print Gallery - Dr Vijay Anand Reddy.html\"");
  process.exit(1);
}
const html = fs.readFileSync(htmlFile, "utf8");
const { document } = new JSDOM(html).window;

// === Verified headings ===
const headings = [
  "Raising awareness about Cervical Cancer",
  "‘Ananth’ - the endless spirit! – International Men’s Day – 26 Nov 2023",
  "Cancer Crusaders Golf Championship – 2023 – Pre-tournament Press Meet On Oct 15, 2023",
  "Cancer Survivor‘s Day (Cancer Champions United) – 3 June 2023",
  "World No Tobacco Day: A Global Call to Action against Tobacco – 31 May 2023",
  "“Pedal To Battle” Cyclothon – World Cancer Day – Feb 4, 2023",
  "Prevention and Detection of Breast Cancer – Let’s Start Now! – Oct 29, 2022",
  "Awareness for World No Tobacco Day – The Pioneer – 1 June 2022",
  "Cancer Crusaders Golf Championship – 2022",
  "Awareness for International Childhood Cancer Day – Dr Vijay Anand Reddy",
  "The Racers of the Cancer Awareness Super Car Rally – World Cancer Survivor’s Day 2021",
  "Breast Cancer Article on Andhra Jyothi – 20 Aug 2020",
  "Disha – 11 July 2020",
  "ACC & CCI – 14 Feb 2020",
  "Cancer Crusaders Invitation Cup – 20 Jan 2020",
  "ANAIKA – The Health Awareness Fashion Show – International Women’s Day – 8 Mar 2019",
  "Apollo Cancer Crusaders Invitation Cup – 2019",
  "World Cancer Day – 4 Feb 2019",
  "Cancer Crusaders Invitation Cup – 28 Jan 2018",
  "I AM A SURVIVOR Book Launch – 25 Aug 2017",
  "Cancer Crusaders Invitation Cup – 22 Jan 2017",
  "Cancer Crusaders Invitation Cup – 2015",
  "Cancer Crusaders Invitation Cup – 2014",
  "Cancer Crusaders Invitation Cup – 2013",
  "The Cancer Crusaders Invitation Cup – 2012",
  "Cancer Awareness Flash Mob At Prasad’s – 4 Feb 2012",
  "Cancer Crusaders Invitation Cup – 2011",
  "Cancer Awareness Fashion Show – Nov 2010",
  "Cancer Crusaders Invitation Cup – March 2010",
  "Cancer Awareness Flash Mob – Necklace Road – Feb 2010",
  "The Cancer Crusaders Invitation Cup – 2009",
  "Cancer Awareness Marathon – 2009",
  "Cancer Awareness Event – Jaago Re – 6 Feb 2009",
  "Sarcoma Awareness Month – July 23, 2024"
];

// === Normalizer for fuzzy matching ===
const normalize = (str) =>
  str
    .toLowerCase()
    .replace(/[’‘“”'"–—\-:,!]/g, "")
    .replace(/\s+/g, " ")
    .trim();

// === Collect images under each heading ===
function collectImagesBetween(currentHeading, nextHeading) {
  const images = [];
  let el = currentHeading.nextElementSibling;
  while (el && el !== nextHeading) {
    el.querySelectorAll?.("img").forEach((img) => {
      let src =
        img.getAttribute("src") ||
        img.getAttribute("data-src") ||
        img.getAttribute("data-lazy-src") ||
        "";
      if (src.includes("/wp-content/")) {
        if (src.startsWith("/wp-content/"))
          src = "https://drvijayanandreddy.com" + src;
        images.push(src);
      }
    });
    el = el.nextElementSibling;
  }
  return images;
}

// === Selectors for Elementor-based headings ===
const allHeadingEls = Array.from(
  document.querySelectorAll(`
    h1, h2, h3, h4,
    .elementor-heading-title,
    .elementor-widget-heading h2,
    .elementor-widget-heading h3,
    .elementor-widget-heading .elementor-heading-title
  `)
);

// === Match headings by normalized text ===
const matchedHeadings = allHeadingEls.filter((el) => {
  const text = normalize(el.textContent);
  return headings.some((h) => text.includes(normalize(h).slice(0, 10)));
});

// === Extract gallery data ===
const gallery = [];

for (let i = 0; i < matchedHeadings.length; i++) {
  const title = matchedHeadings[i].textContent.trim();
  const next = matchedHeadings[i + 1] || null;
  const imgs = collectImagesBetween(matchedHeadings[i], next);
  if (imgs.length) gallery.push({ title, images: imgs });
}

// === Handle missing data ===
if (!gallery.length) {
  console.error("❌ Error: No gallery events found in the HTML file.\nMake sure the HTML file is the full saved page (Webpage, Complete).");
  process.exit(1);
}

// === Stats and output ===
const totalImages = gallery.reduce((a, e) => a + e.images.length, 0);
const avg = (totalImages / gallery.length).toFixed(1);

const output = `/**
 * Auto-generated gallery.js
 * Generated: ${new Date().toLocaleString()}
 * Events: ${gallery.length}
 * Total Images: ${totalImages}
 * Avg Images/Event: ${avg}
 * Source: https://drvijayanandreddy.com/print-gallery/
 */
export const gallery = ${JSON.stringify(gallery, null, 2)};
/** End of gallery.js */
`;

fs.writeFileSync("gallery.js", output, "utf8");
console.log(`✅ Created gallery.js with ${gallery.length} events (${totalImages} images, avg ${avg}/event)`);

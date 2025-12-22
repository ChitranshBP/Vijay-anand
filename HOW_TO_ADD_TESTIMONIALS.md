# How to Add New Testimonials

All testimonial videos and photos are now centralized in a single file. When you add a new testimonial here, it will automatically appear across all pages that display testimonials.

## Location
**File:** `src/data/testimonials.js`

## Adding a New Video Testimonial

1. Open `src/data/testimonials.js`
2. Find the `youtubeTestimonials` array
3. Add a new object with the following format:

```javascript
{
  id: "YOUTUBE_VIDEO_ID",
  thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/hqdefault.jpg",
  title: "Your Video Title Here",
}
```

### Example:
```javascript
export const youtubeTestimonials = [
  // ... existing videos ...
  {
    id: "abc123XYZ",  // Get this from the YouTube URL
    thumbnail: "https://img.youtube.com/vi/abc123XYZ/hqdefault.jpg",
    title: "Patient Success Story - Thyroid Cancer",
  },
];
```

## Adding a New Photo Testimonial

1. Open `src/data/testimonials.js`
2. Find the `patientGallery` array
3. Add a new object with the following format:

```javascript
{ image: "assets/testimonials/YOUR_IMAGE_NAME.webp" }
```

### Example:
```javascript
export const patientGallery = [
  // ... existing photos ...
  { image: "assets/testimonials/IMG_NEW_PATIENT.webp" },
];
```

## Where Testimonials Appear

After adding to `testimonials.js`, your new testimonial will automatically show up in:

### Video Testimonials:
- **Homepage** - VideoTestimonials section (first 6 videos)
- **All 20 Condition Pages** - Video testimonials section (first 6 videos)
- **All 17 Treatment Pages** - Video testimonials section (first 6 videos)
- **All 13 Specialty Pages** - Video testimonials section (first 6 videos)
- **Testimonials Page** - All videos with pagination

**Total: 50+ pages automatically updated with one change!** 🎉

### Photo Testimonials:
- **Homepage** - PhotoTestimonials section (first 10 photos)
- **Testimonials Page** - All photos with load more functionality

## No Code Changes Required!

Once you update `src/data/testimonials.js`, all pages will automatically use the updated list. No need to edit individual page files.

## File Structure

```
src/
├── data/
│   └── testimonials.js          ← UPDATE THIS FILE
├── components/
│   ├── VideoTestimonials.jsx    ← Uses first 6 videos
│   └── PhotoTestimonials.jsx    ← Uses first 10 photos
├── pages/
│   ├── TestimonialsPage.jsx     ← Shows all testimonials
│   ├── conditions/              ← All 20 pages use first 6 videos
│   │   ├── BreastCancerPage.jsx
│   │   ├── LungCancerPage.jsx
│   │   └── ... (18 more)
│   ├── treatment/               ← All 17 pages use first 6 videos
│   │   ├── ChemotherapyPage.jsx
│   │   ├── ProtonTherapyPage.jsx
│   │   └── ... (15 more)
│   └── specialty/               ← All 13 pages use first 6 videos
│       ├── RadiationOncologyPage.jsx
│       ├── MedicalOncologyPage.jsx
│       └── ... (11 more)
```

## Tips

1. **Video ID**: The video ID is the part after `v=` in a YouTube URL
   - URL: `https://www.youtube.com/watch?v=abc123XYZ`
   - ID: `abc123XYZ`

2. **Thumbnail**: The thumbnail URL follows the pattern:
   `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`

3. **Image Path**: Make sure to upload your image to `public/assets/testimonials/` first

4. **Order Matters**: The first videos/photos in the array will appear on the homepage and condition pages

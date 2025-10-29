export const survivorCategories = [
  { key: 'all', name: 'All Survivors' },
  { key: 'breast-cancer', name: 'Breast Cancer' },
  { key: 'lung-cancer', name: 'Lung Cancer' },
  { key: 'pediatric', name: 'Pediatric Cancer' },
  { key: 'other', name: 'Other Cancers' },
];

export const survivors = [
  {
    id: 'sample-survivor-1',
    category: 'breast-cancer',
    name: 'Sample Survivor Story',
    cancerType: 'Breast Cancer',
    date: '2024-01-15',
    banners: [
      '/assets/survivors/sample-banner1.jpg',
      '/assets/survivors/sample-banner2.jpg'
    ],
    story: `This is a sample survivor story. Replace this with actual survivor testimonials.

Include their journey, diagnosis, treatment experience, and message of hope.

Key points to cover:
• Diagnosis and initial reaction
• Treatment journey and challenges
• Support from family and medical team
• Recovery and current status
• Message of hope for others`,
    photos: [
      '/assets/survivors/sample-photo1.jpg',
      '/assets/survivors/sample-photo2.jpg',
      '/assets/survivors/sample-photo3.jpg',
    ],
    age: '45',
    location: 'Hyderabad',
    treatmentYear: '2023',
  },
  // Add more survivor stories here
];

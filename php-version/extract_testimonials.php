<?php
// Extracted logic from Testimonials.jsx (Text Reviews)
// This file renders the text testimonial slider

$textTestimonials = [
  [
    "name" => "Uday Pepe",
    "image" => "https://lh3.googleusercontent.com/a/ACg8ocKxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    "rating" => 5,
    "quote" => "One stop for all cancer treatment - doctor holds that crucial communication and support, helping patients and their families understand the diagnosis providing treatment options, prognosis, and how to navigate during treatment. Been to many hospitals across twin cities for mother's treatment and Vijay Anand Reddy sir remains irreplaceable and best one 😊",
    "condition" => "Breast Cancer Survivor"
  ],
  [
    "name" => "Satvinder Saluja",
    "image" => "https://lh3.googleusercontent.com/a/ACg8ocJxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    "rating" => 5,
    "quote" => "Good treatment with Good precision surgery performed everything 💯 % .I will recommend another patient .he was given Good and best treatment for me he look like to God for me .and all doctors and staff very helpful and 👍 good",
    "condition" => "Lung Cancer Survivor"
  ],
  [
    "name" => "Anitha Kesireddy",
    "image" => "https://lh3.googleusercontent.com/a/ACg8ocKxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    "rating" => 5,
    "quote" => "Satisfied with the services.Dr.vijay Anand Reddy sir was excellent Doctor.he was talking like family member.we are happy to take treatment here.thanks to Dr.vijay Anand Reddy sir and sir team Doctors and sir supportive assistant s was good corporate thanks to every one He is very concern for the patient, gives hope and confidence.Our whole family owe to him forever.Thank you very much sir 🙏🙏🙏",
    "condition" => "Head & Neck Cancer Survivor"
  ],
  [
    "name" => "rishika avaldar",
    "image" => "https://lh3.googleusercontent.com/a/ACg8ocJxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    "rating" => 5,
    "quote" => "Very grateful for Dr. Vijay Anand Reddy and team for successfully treating my moms cervical cancer. Their expertise, care and support helped our family through a very difficult time. Couldn’t have asked for better support and treatment.",
    "condition" => "Brain Tumor Survivor"
  ],
  [
    "name" => "kumari daniel",
    "image" => "https://lh3.googleusercontent.com/a/ACg8ocKxVyVZZ1tUG8V5YoQzE5QzE5QzE5QzE5QzE5QzE5QzE5=s96-c",
    "rating" => 5,
    "quote" => "Dr.vijay anand reddy .He is most caring and understanding doctor I have ever met.he really cares about the patient and their health he ever proposes the best solutions for everything he answers simple questions asked by the patient hope he and his family stay safe and happy Thank you",
    "condition" => "Cervical Cancer Survivor"
  ]
];
?>

<section id="testimonials" class="py-8 medical-gradient">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Testimonial Slider Container -->
    <div id="testimonial-slider" class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden reveal">
      
      <!-- Slides -->
      <div class="testimonial-slides relative min-h-[400px]">
        <?php foreach($textTestimonials as $index => $testimonial): ?>
        <div class="testimonial-slide absolute inset-0 transition-opacity duration-500 <?= $index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0' ?>" data-index="<?= $index ?>">
            <div class="grid lg:grid-cols-3 gap-8 items-center h-full">
                <!-- Patient Info -->
                <div class="text-center lg:text-left">
                    <div class="relative inline-block mb-6">
                        <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto lg:mx-0 shadow-lg flex items-center justify-center overflow-hidden">
                            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google Reviews" class="w-16 h-16 object-contain">
                        </div>
                        <div class="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                            <i data-feather="heart" class="w-4 h-4 text-white"></i>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-medical-dark mb-2"><?= $testimonial['name'] ?></h3>
                    <p class="text-medical-blue font-semibold mb-4"><?= $testimonial['condition'] ?></p>

                    <div class="flex justify-center lg:justify-start space-x-1 mb-4">
                        <?php for($i=0; $i<$testimonial['rating']; $i++): ?>
                            <i data-feather="star" class="w-5 h-5 text-yellow-400 fill-current"></i>
                        <?php endfor; ?>
                    </div>
                </div>

                <!-- Quote -->
                <div class="lg:col-span-2">
                    <blockquote class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                        "<?= $testimonial['quote'] ?>"
                    </blockquote>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
      </div>

      <!-- Navigation -->
      <div class="flex justify-center items-center space-x-4 mt-8 md:absolute md:bottom-12 md:right-12 z-20">
        <button onclick="prevTestimonial()" class="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">
            <i data-feather="chevron-left" class="w-6 h-6"></i>
        </button>

        <div class="flex space-x-2">
            <?php foreach($textTestimonials as $i => $t): ?>
            <button onclick="goToTestimonial(<?= $i ?>)" class="w-3 h-3 rounded-full transition-all duration-200 <?= $i === 0 ? 'bg-medical-blue' : 'bg-gray-300' ?> dot-indicator" data-index="<?= $i ?>"></button>
            <?php endforeach; ?>
        </div>

        <button onclick="nextTestimonial()" class="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">
            <i data-feather="chevron-right" class="w-6 h-6"></i>
        </button>
      </div>

    </div>
  </div>
</section>

<script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot-indicator');
    const totalSlides = slides.length;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.remove('opacity-0', 'z-0');
                slide.classList.add('opacity-100', 'z-10');
            } else {
                slide.classList.remove('opacity-100', 'z-10');
                slide.classList.add('opacity-0', 'z-0');
            }
        });

        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-medical-blue');
            } else {
                dot.classList.remove('bg-medical-blue');
                dot.classList.add('bg-gray-300');
            }
        });
        
        // Re-init feather icons if needed (unlikely for static icons but good practice)
        if(typeof feather !== 'undefined') feather.replace();
    }

    function nextTestimonial() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    }

    function prevTestimonial() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlides();
    }

    function goToTestimonial(index) {
        currentSlide = index;
        updateSlides();
    }
    
    // Initialize icons
    if(typeof feather !== 'undefined') feather.replace();
</script>

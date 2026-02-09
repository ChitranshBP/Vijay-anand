<?php
$quickLinks = [
    ['name' => 'Know the Doctor', 'href' => 'journey.php'],
    ['name' => 'Expertise', 'href' => 'services.php'],
    ['name' => "Doctor's Awareness Talks", 'href' => 'doctor-speaks.php'],
    ['name' => 'Patient Testimonials', 'href' => 'testimonials.php'],
    ['name' => 'Community Services', 'href' => 'cure-2.php'],
    ['name' => 'FAQ', 'href' => 'faq.php'],
    ['name' => 'Contact Us', 'href' => 'contact.php']
];

$aboutLinks = [
    ['name' => 'My Journey', 'href' => 'journey.php'],
    ['name' => 'Achievements', 'href' => 'achievements.php'],
    ['name' => 'Awards & Recognition', 'href' => 'awards.php'],
    ['name' => 'Publications', 'href' => 'publications.php'],
    ['name' => 'Books', 'href' => 'books.php'],
    ['name' => 'Professional Associations', 'href' => 'professional-association.php'],
    ['name' => 'Presentations', 'href' => 'presentations.php'],
    ['name' => 'Media Gallery', 'href' => 'print-gallery.php'],
    ['name' => 'My Family', 'href' => 'family.php']
];

$services = [
    ['name' => 'Pancreatic Cancer', 'href' => 'services.php?type=pancreatic-cancer'],
    ['name' => 'Adrenal Cancer', 'href' => 'services.php?type=adrenal-cancer'],
    ['name' => 'Proton Therapy', 'href' => 'services.php?type=proton-therapy'],
    ['name' => 'Radiation Oncology', 'href' => 'services.php?type=radiation-oncology'],
    ['name' => 'Throat Cancer', 'href' => 'services.php?type=throat-cancer'],
    ['name' => 'Eye Cancer', 'href' => 'services.php?type=eye-cancer'],
    ['name' => 'View All Services', 'href' => 'services.php']
];

$resources = [
    ['name' => 'Cancer Awareness Lectures', 'href' => 'awareness-lectures.php'],
    ['name' => 'Doctor Awareness Talks', 'href' => 'doctor-speaks.php'],
    ['name' => 'Conferences & Seminars', 'href' => 'conference.php'],
    ['name' => 'Cancer Survivors Stories', 'href' => 'survivors.php'],
    ['name' => 'Cancer Clinics', 'href' => 'cancer-clinics.php'],
    ['name' => 'Events & Programs', 'href' => 'events.php'],
    ['name' => 'Video Gallery', 'href' => 'video-gallery.php'],
    ['name' => 'Photo Gallery', 'href' => 'print-gallery.php'],
    ['name' => 'Patient Testimonials', 'href' => 'testimonials.php'],
    ['name' => 'FAQ', 'href' => 'faq.php']
];

$legalLinks = [
    ['name' => 'Privacy Policy', 'href' => 'privacy-policy.php'],
    ['name' => 'Terms of Service', 'href' => 'terms-and-conditions.php'],
    ['name' => 'Medical Disclaimer', 'href' => 'medical-disclaimer.php'],
    ['name' => 'Cookie Policy', 'href' => 'cookie-policy.php']
];

$socialLinks = [
    ['icon' => 'facebook', 'href' => 'https://www.facebook.com/drvijayanandreddy', 'name' => 'Facebook'],
    ['icon' => 'twitter', 'href' => 'https://x.com/Dr_VijayReddy', 'name' => 'Twitter'],
    ['icon' => 'youtube', 'href' => 'https://www.youtube.com/@VijayAnandReddyPalkonda/', 'name' => 'Youtube'],
    ['icon' => 'instagram', 'href' => 'https://www.instagram.com/drvijayanandreddy', 'name' => 'Instagram'],
    ['icon' => 'linkedin', 'href' => 'https://www.linkedin.com/in/drvijayanandreddy', 'name' => 'LinkedIn']
];

// Replicating HydrabadPages data from seo-hydrebad.js manually for this example
$hyderabadPages = [
    ['pageName' => 'Bone Cancer'],
    ['pageName' => 'Brain Tumor'],
    ['pageName' => 'Breast Cancer'],
    ['pageName' => 'Cervical Cancer'],
    ['pageName' => 'Colorectal Cancer'],
    ['pageName' => 'Eye Cancer'],
    ['pageName' => 'Eyelid Cancer'],
    ['pageName' => 'Kidney Cancer'],
    ['pageName' => 'Liver Cancer'],
    ['pageName' => 'Lung Cancer'],
    ['pageName' => 'Melanoma'],
    ['pageName' => 'Oral Cancer'],
    ['pageName' => 'Ovarian Cancer'],
    ['pageName' => 'Pancreatic Cancer'],
    ['pageName' => 'Prostate Cancer'],
    ['pageName' => 'Soft Tissue Sarcoma'],
    ['pageName' => 'Thyroid Cancer'],
];
?>

<footer class="relative bg-gradient-to-br from-gray-900 via-medical-dark to-gray-900 text-white overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-medical-blue rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid lg:grid-cols-6 gap-8 mb-6">
            <!-- About Section with Logo - Spans 2 columns -->
            <div class="lg:col-span-2">
                <div class="mb-6">
                    <img src="assets/var-white-logo.png" alt="Dr. Palkonda Vijay Anand Reddy" class="h-28 w-auto object-contain">
                </div>

                <p class="text-gray-300 mb-6 leading-relaxed text-base max-w-md">
                    Leading cancer care with over 30 years of experience in radiation oncology.
                    Providing compassionate, evidence-based treatment and hope to thousands of
                    patients through advanced technologies like Proton Therapy and Brachytherapy.
                </p>

                <!-- Stats -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
                        <div class="text-2xl font-bold text-medical-blue">30+</div>
                        <div class="text-xs text-gray-400">Years Experience</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
                        <div class="text-2xl font-bold text-medical-blue">10K+</div>
                        <div class="text-xs text-gray-400">Patients Treated</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
                        <div class="text-2xl font-bold text-medical-blue">100+</div>
                        <div class="text-xs text-gray-400">Publications</div>
                    </div>
                </div>

                <!-- Social Links -->
                <div>
                    <h5 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect With Us</h5>
                    <div class="flex flex-wrap gap-3">
                        <?php foreach ($socialLinks as $social): ?>
                            <a href="<?= $social['href'] ?>" target="_blank" rel="noopener noreferrer" class="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-medical-blue transition-all duration-300 shadow-lg hover:shadow-medical-blue/50 transform hover:scale-110">
                                <i data-feather="<?= $social['icon'] ?>" class="w-5 h-5"></i>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>

            <!-- About -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-white flex items-center">
                    <span class="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
                    About
                </h4>
                <ul class="space-y-3">
                    <?php foreach ($aboutLinks as $link): ?>
                        <li>
                            <a href="<?= $link['href'] ?>" class="text-gray-300 hover:text-medical-blue transition-all duration-200 flex items-center group text-sm">
                                <span class="w-0 group-hover:w-2 h-0.5 bg-medical-blue transition-all duration-200 mr-0 group-hover:mr-2"></span>
                                <?= $link['name'] ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-white flex items-center">
                    <span class="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
                    Services
                </h4>
                <ul class="space-y-3">
                    <?php foreach ($services as $service): ?>
                        <li>
                            <a href="<?= $service['href'] ?>" class="text-gray-300 hover:text-medical-blue transition-all duration-200 flex items-center group text-sm">
                                <span class="w-0 group-hover:w-2 h-0.5 bg-medical-blue transition-all duration-200 mr-0 group-hover:mr-2"></span>
                                <?= $service['name'] ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Resources -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-white flex items-center">
                    <span class="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
                    Resources
                </h4>
                <ul class="space-y-3">
                    <?php foreach ($resources as $resource): ?>
                        <li>
                            <a href="<?= $resource['href'] ?>" class="text-gray-300 hover:text-medical-blue transition-all duration-200 flex items-center group text-sm">
                                <span class="w-0 group-hover:w-2 h-0.5 bg-medical-blue transition-all duration-200 mr-0 group-hover:mr-2"></span>
                                <?= $resource['name'] ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Contact & Hours -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-white flex items-center">
                    <span class="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
                    Get In Touch
                </h4>

                <div class="space-y-4 mb-6">
                    <!-- Phone -->
                    <div class="flex items-center space-x-3 group">
                        <div class="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                            <i data-feather="phone" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400">Call Us</div>
                            <a href="tel:+919676720002" class="text-gray-300 hover:text-medical-blue transition-colors duration-200 font-medium text-sm">
                                +91-9676720002
                            </a>
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="flex items-start space-x-3 group">
                        <div class="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i data-feather="map-pin" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400 mb-1">Visit Us</div>
                            <a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-medical-blue transition-colors duration-200 text-sm">
                                <span class="font-medium">Apollo Cancer Centre</span><br />
                                <span>Jubilee Hills, Hyderabad</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Office Hours -->
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                    <div class="flex items-center space-x-2 mb-3">
                        <i data-feather="clock" class="w-5 h-5 text-medical-blue"></i>
                        <span class="font-semibold text-white text-sm">Office Hours</span>
                    </div>
                    <div class="text-gray-300 text-sm">
                        <div class="flex justify-between">
                            <span>Mon - Sat</span>
                            <span class="font-semibold text-white">9 AM - 6 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hyderabad Speciality Locations -->
        <div class="border-t border-gray-700/50 pt-8 mt-2 mb-8 bg-gray-800/20 p-4 rounded-xl">
            <div class="flex items-center justify-between cursor-pointer group" onclick="toggleLocations()">
                <h4 class="text-lg font-bold text-white flex items-center select-none">
                    <span class="w-1 h-6 bg-medical-blue mr-3 rounded"></span>
                    Speciality Locations in Hyderabad
                </h4>
                <div id="loc-icon-container" class="p-2 rounded-full bg-gray-700/50 text-gray-400 group-hover:text-white group-hover:bg-medical-blue transition-all duration-300 transform">
                    <i data-feather="chevron-down" id="loc-icon" class="w-5 h-5"></i>
                </div>
            </div>

            <div id="locations-content" class="hidden overflow-hidden transition-all duration-300 ease-in-out">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-4 pt-6">
                    <?php foreach ($hyderabadPages as $page): 
                        $slug = strtolower(str_replace(' ', '-', $page['pageName']));
                    ?>
                        <a href="hyderabad-<?= $slug ?>-treatment.php" class="flex items-start space-x-2 text-gray-400 hover:text-medical-blue transition-colors duration-200 group text-sm">
                            <i data-feather="map-pin" class="w-4 h-4 text-medical-blue flex-shrink-0 mt-0.5"></i>
                            <span class="group-hover:translate-x-1 transition-transform duration-200">
                                <?= $page['pageName'] ?> in Hyderabad
                            </span>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <!-- Trust Indicators -->
        <div class="border-t border-gray-700/50 pt-5 mt-4">
            <div class="flex flex-wrap items-center justify-center gap-12 text-center">
                <div class="flex items-center gap-3">
                    <i data-feather="award" class="w-8 h-8 text-medical-blue"></i>
                    <div class="text-left">
                        <div class="text-sm font-semibold text-white">Award-Winning</div>
                        <div class="text-xs text-gray-400">Excellence in Oncology</div>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <i data-feather="heart" class="w-8 h-8 text-medical-blue"></i>
                    <div class="text-left">
                        <div class="text-sm font-semibold text-white">Patient-Centered</div>
                        <div class="text-xs text-gray-400">Compassionate Care</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="relative border-t border-gray-700/50">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-medical-blue to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="text-gray-400 text-sm text-center md:text-left">
                    © 2025 Dr. Palkonda Vijay Anand Reddy. All rights reserved. | Built with care for cancer patients.
                </div>
                <div class="flex flex-wrap justify-center gap-6">
                    <?php foreach ($legalLinks as $link): ?>
                        <a href="<?= $link['href'] ?>" class="text-gray-400 hover:text-medical-blue text-sm transition-colors duration-200 hover:underline underline-offset-4">
                            <?= $link['name'] ?>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</footer>

<script>
function toggleLocations() {
    const content = document.getElementById('locations-content');
    const icon = document.getElementById('loc-icon');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.replace('feather-chevron-down', 'feather-chevron-up'); // Incorrect way for feather, need re-replace
        // Better way with feather: rotate parent container or re-render
        // Assuming we rely on CSS rotation
        document.getElementById('loc-icon-container').classList.add('rotate-180');
        
    } else {
        content.classList.add('hidden');
        document.getElementById('loc-icon-container').classList.remove('rotate-180');
    }
}
</script>

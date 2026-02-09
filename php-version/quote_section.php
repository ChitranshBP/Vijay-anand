<?php
// Simple quote section matching the React component's design
$quote = [
    "quote" => "Dr. Vijay Anand Reddy gave me a second chance at life. His expertise and the care at Apollo Hyderabad are unmatched.",
    "author" => "Ramesh K.",
    "role" => "Survivor"
];
?>
<section class="py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
    <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto relative text-center">
            <!-- Decorative Quote Marks -->
            <div class="hidden sm:block absolute -top-4 -left-6 text-medical-blue opacity-10 text-6xl font-serif leading-none select-none pointer-events-none">
                "
            </div>
            <div class="hidden sm:block absolute -bottom-4 -right-6 text-medical-blue opacity-10 text-6xl font-serif leading-none select-none pointer-events-none rotate-180">
                "
            </div>
            
            <blockquote class="text-center relative z-10">
                <p class="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-6 italic">
                    <?= $quote['quote'] ?>
                </p>

                <!-- Decorative Divider -->
                <div class="flex items-center justify-center mb-4">
                    <div class="h-px w-10 bg-gradient-to-r from-transparent via-medical-blue to-transparent"></div>
                    <div class="mx-3 w-1.5 h-1.5 rounded-full bg-medical-blue"></div>
                    <div class="h-px w-10 bg-gradient-to-l from-transparent via-medical-blue to-transparent"></div>
                </div>

                <!-- Author Attribution -->
                <footer>
                    <cite class="text-medical-blue font-medium text-base not-italic block mb-1">
                        <?= $quote['author'] ?>
                    </cite>
                    <p class="text-gray-500 text-sm font-light">
                        <?= $quote['role'] ?>
                    </p>
                </footer>
            </blockquote>
        </div>
    </div>
</section>

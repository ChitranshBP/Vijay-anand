<?php
include 'navbar.php';

$success = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // In a real application, you would process the form data (send email, save to DB, etc.)
    // For this conversion, we'll simulate a successful submission.
    $success = true;
}

$socialLinks = [
    ['icon' => 'facebook', 'href' => 'https://www.facebook.com/drvijayanandreddy', 'name' => 'Facebook'],
    ['icon' => 'instagram', 'href' => 'https://www.instagram.com/drvijayanandreddy', 'name' => 'Instagram'],
    ['icon' => 'linkedin', 'href' => 'https://www.linkedin.com/in/drvijayanandreddy', 'name' => 'LinkedIn']
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Dr. Vijay Anand Reddy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: { 
                            50: '#eff6ff', 
                            100: '#dbeafe', 
                            500: '#3b82f6', 
                            600: '#2563eb', 
                            700: '#1d4ed8', 
                            900: '#1e3a8a' 
                        },
                        medical: { 
                            blue: '#9B528F', 
                            purple: '#8B5CF6', 
                            light: '#F8FAFC', 
                            dark: '#1E293B' 
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        inter: ['Inter', 'sans-serif']
                    },
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-white flex flex-col min-h-screen">

    <!-- Hero Section -->
    <section class="pt-32 pb-8 bg-medical-blue/5 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-medical-dark mb-3">Contact Us</h1>
        <p class="max-w-xl mx-auto text-gray-700 text-lg">
            We’re here to help you. Schedule a consultation, ask a question, or simply say hello.
        </p>
    </section>

    <!-- Main Content -->
    <section class="flex-1 bg-white py-12">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">

            <!-- Form Side -->
            <div class="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col justify-center">
                <?php if ($success): ?>
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded relative text-center mb-6">
                        <strong class="font-bold text-xl block mb-2">Thank you!</strong>
                        <span class="block sm:inline">Your message has been sent successfully. We will contact you soon.</span>
                    </div>
                <?php else: ?>
                    <form class="space-y-6" method="POST" action="">
                        <div>
                            <label class="block text-medical-dark font-semibold mb-1" for="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white focus:ring-2 focus:ring-medical-blue/20 transition"
                                autocomplete="name"
                            >
                        </div>
                        <div>
                            <label class="block text-medical-dark font-semibold mb-1" for="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white focus:ring-2 focus:ring-medical-blue/20 transition"
                                autocomplete="email"
                            >
                        </div>
                        <div>
                            <label class="block text-medical-dark font-semibold mb-1" for="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white focus:ring-2 focus:ring-medical-blue/20 transition"
                                autocomplete="tel"
                                pattern="[0-9]{10,15}"
                                placeholder="e.g., +91-9000080000"
                            >
                        </div>
                        <div>
                            <label class="block text-medical-dark font-semibold mb-1" for="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-medical-blue bg-white focus:ring-2 focus:ring-medical-blue/20 transition"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            class="w-full py-3 rounded-lg bg-medical-blue text-white font-bold hover:bg-medical-dark transition shadow-md hover:shadow-lg transform active:scale-95"
                        >
                            Send Message
                        </button>
                        <p class="text-gray-500 text-xs pt-2 text-center">We respect your privacy. Your details are never shared.</p>
                    </form>
                <?php endif; ?>
            </div>

            <!-- Right Side: Let's Connect + Map -->
            <div class="flex flex-col gap-8">
                <!-- Let's Connect Box -->
                <div class="rounded-xl bg-white shadow-md p-8 flex flex-col items-start mb-2">
                    <h2 class="text-2xl font-bold mb-2 text-medical-dark">Let's Connect</h2>
                    <p class="text-gray-700 mb-4 max-w-lg">
                        Whether you’re an existing patient, a family member, or a healthcare professional — reach out, and our team will be delighted to assist you.
                    </p>
                    <div class="flex flex-col gap-3 text-medical-dark w-full">
                        <a href="tel:+919676720002" class="flex items-center gap-2 hover:underline hover:text-medical-blue transition">
                            <i data-feather="phone" class="w-5 h-5"></i> +91-9676720002
                        </a>
                        <a href="mailto:cancercare@drvijayanandreddy.com" class="flex items-center gap-2 hover:underline hover:text-medical-blue transition">
                            <i data-feather="mail" class="w-5 h-5"></i> cancercare@drvijayanandreddy.com
                        </a>
                        <span class="flex items-center gap-2">
                            <i data-feather="map-pin" class="w-5 h-5"></i> Apollo Cancer Center, Hyderabad, India
                        </span>
                    </div>
                    <div class="flex gap-5 mt-5">
                        <?php foreach ($socialLinks as $link): ?>
                            <a href="<?= $link['href'] ?>" target="_blank" rel="noopener noreferrer" aria-label="<?= $link['name'] ?>">
                                <i data-feather="<?= $link['icon'] ?>" class="w-6 h-6 text-medical-blue hover:text-blue-700 transition transform hover:scale-110"></i>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Map Box -->
                <div class="rounded-lg shadow-md w-full h-64 overflow-hidden border border-gray-100">
                    <iframe
                        title="Apollo Cancer Centre Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9362473193!2d78.41015217577959!3d17.41484690201227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cf2ac35539%3A0x87682b53a99a8ea1!2sApollo%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1757494001423!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="w-full h-full"
                    ></iframe>
                </div>
            </div>

        </div>
    </section>

    <?php include 'footer.php'; ?>

    <script>
        feather.replace();
    </script>
</body>
</html>

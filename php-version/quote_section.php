<?php
// Simple helper to get a quote by ID
function getQuote($id) {
    // Data from src/data/quotes.js
    $quotes = [
        55 => [
            'text' => "The human spirit is stronger than anything that can happen to it.",
            'author' => "Prasad Chowdary P."
        ],
        56 => [
            'text' => "Where there is hope, there is faith; where there is faith, miracles happen.",
            'author' => "Prem Kishore Pagadala"
        ],
        61 => [
            'text' => "Worrying doesn’t take away tomorrow’s troubles, it takes away today’s peace.",
            'author' => "Rama Krishna L."
        ],
        63 => [
            'text' => "I cried because I had no shoes until I met a man who had no feet.",
            'author' => "Ramanujam T."
        ],
        64 => [
            'text' => "You can be a victim of cancer or a survivor of cancer. It’s a mindset.",
            'author' => "Dave Pelzer"
        ],
        62 => [
            'text' => "Hope is real.",
            'author' => "Ramanjaneyulu L."
        ],
        65 => [
            'text' => "When you stand and share your story in an empowering way, your story will heal you and somebody else.",
            'author' => "Iyanla Vanzant"
        ],
        66 => [
            'text' => "Hope there’s a day when cancer is just a zodiac sign.",
            'author' => "Samuel Hilel Lal"
        ],
        67 => [
            'text' => "It is ironic how you feel most alive when your heart skips a few beats.",
            'author' => "Saritha Reddy Cheruku"
        ],
        59 => [
            'text' => "Faith or fear—your mind cannot occupy both at the same time.",
            'author' => "Rafath Unnisa"
        ],
        58 => [
            'text' => "I’m thankful for my struggle, because without it, I wouldn’t have stumbled across my strength.",
            'author' => "Radha Kumari Suri"
        ],
        54 => [
            'text' => "Cancer is a word, not a sentence.",
            'author' => "John Diamond"
        ],
    ];

    return $quotes[$id] ?? null;
}

$quoteId = isset($quoteId) ? $quoteId : 55; // Default ID
$pQuote = getQuote($quoteId);

if($pQuote):
?>
<section class="py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center relative reveal">
            <div class="text-5xl text-medical-blue/10 absolute -top-4 -left-6 font-serif select-none">"</div>
            <blockquote class="text-xl md:text-2xl text-gray-800 font-light italic mb-4">
                "<?= $pQuote['text'] ?>"
            </blockquote>
            <div class="text-5xl text-medical-blue/10 absolute -bottom-8 -right-6 font-serif rotate-180 select-none">"</div>
            <footer class="text-medical-blue font-medium">- <?= $pQuote['author'] ?></footer>
        </div>
    </div>
</section>
<?php endif; ?>

const survivorQuotes = [
  {
    id: 1,
    theme: "Transformation",
    name: "Adilakshmi M.",
    quote: "Life is a continuous journey of transformation",
    author: "Sukant Ratnakar"
  },
  {
    id: 2,
    theme: "Life, Teacher, Encouragement",
    name: "Ajanta Sircar",
    quote: "Life itself is your teacher, and you are in a constant state of learning",
    author: "Bruce Lee"
  },
  {
    id: 3,
    theme: "Hope",
    name: "Akshita Chelime",
    quote: "H.O.P.E: Hold On, Pain Ends",
    author: null
  },
  {
    id: 4,
    theme: "Miracle",
    name: "Anil Prasad K.",
    quote: "A miracle is a shift in perception from fear to love",
    author: "Marianne Williamson"
  },
  {
    id: 5,
    theme: "Mind Over Matter",
    name: "Anil Ranjan Taran",
    quote: "Motivate your mind, your body will follow.",
    author: null
  },
  {
    id: 6,
    theme: "Positive Attitude",
    name: "Anuradha L.",
    quote: "A positive attitude gives power over your circumstances instead of your circumstances having power over you.",
    author: null
  },
  {
    id: 7,
    theme: "Instinct, Age",
    name: "Appala Chari S.T.V.",
    quote: "Good instincts usually tell you what to do long before your head has figured it out",
    author: "Michael Burke"
  },
  {
    id: 8,
    theme: "Gratitude",
    name: "Aruna Ramana",
    quote: "You gotta look for the good in the bad, the happy in your sad, the gain in your pain, and what makes you grateful not painful",
    author: "Karen Salmansohn"
  },
  {
    id: 9,
    theme: "Face Your Fear",
    name: "Aruna Telukuntla",
    quote: "FEAR—Forget Everything and Run, or Face Everything and Rise—it’s your choice.",
    author: null
  },
  {
    id: 10,
    theme: "Kind Words, Ability, Vision",
    name: "Bhakti Ghatole",
    quote: "People pay the doctor for his troubles, and for his kindness they still remain in his debt",
    author: "Seneca"
  },
  {
    id: 11,
    theme: "Change in Perception",
    name: "Bhanumathi Y.",
    quote: "There is no hope unmingled with fear, no fear unmingled with hope",
    author: "Baruch Spinoza"
  },
  {
    id: 12,
    theme: "Bright as a Rainbow",
    name: "Bhavana Ratnam",
    quote: "The greater your storm, the brighter your rainbow.",
    author: null
  },
  {
    id: 13,
    theme: "Fighting Cancer",
    name: "Bhoom Rao G.",
    quote: "There is a ‘CAN’ in CANCER because together we CAN beat it.",
    author: null
  },
  {
    id: 14,
    theme: "Healthy Lifestyle",
    name: "Bhramara K.",
    quote: "Every time you eat or drink, you are either feeding disease or fighting it.",
    author: null
  },
  {
    id: 15,
    theme: "Hope",
    name: "Sabina",
    quote: "When you keep hope alive, it will keep you alive.",
    author: null
  },
  {
    id: 16,
    theme: "Miracle",
    name: "Brahmanand Patro J.",
    quote: "The moment you are ready to quit is the moment right before a miracle. Don’t give up!",
    author: null
  },
  {
    id: 17,
    theme: "This Too Shall Pass",
    name: "Chitra",
    quote: "This too shall pass. When things are bad, remember it won’t always be this way. Take one day at a time.",
    author: "Doe Zantamata"
  },
  {
    id: 18,
    theme: "Childhood Cancer",
    name: "Chaya Devi",
    quote: "Sometimes, real superheroes live in the hearts of small children fighting big battles.",
    author: null
  },
  {
    id: 19,
    theme: "Anti-Tobacco",
    name: "Gopal Rao Pamulaparthy",
    quote: "Smoking leaves an unseen scar. It fills your insides with toxins and tar.",
    author: null
  },
  {
    id: 20,
    theme: "Faith",
    name: "Gopala Rao T.V.V.",
    quote: "When you are going through something hard and wonder where God is, remember the teacher is always quiet during a test.",
    author: null
  },
  {
    id: 21,
    theme: "Hope",
    name: "Gopalakrishnaiah Pemmaraju",
    quote: "Sometimes good things fall apart, so better things can fall together.",
    author: null
  },
  {
    id: 22,
    theme: "Step by Step",
    name: "Gunasundari Jasthi",
    quote: "The journey of a thousand miles begins with a single step",
    author: "Lao Tzu"
  },
  {
    id: 23,
    theme: "Anti-Tobacco",
    name: "Jagannath Reddy Gopidi",
    quote: "Cancer cures smoking.",
    author: null
  },
  {
    id: 24,
    theme: "Compassion",
    name: "Jagdish Narain Mehrotra",
    quote: "Cancer is a word, not a sentence",
    author: "John Diamond"
  },
  {
    id: 25,
    theme: "Early Diagnosis",
    name: "Jaya",
    quote: "Early detection is about tuning into what your body is telling you and reacting accordingly.",
    author: null
  },
  {
    id: 26,
    theme: "Tell Your Story",
    name: "Jhansi Lakshmi V.",
    quote: "Share your story to help heal the wounds of others.",
    author: null
  },
  {
    id: 27,
    theme: "Being Alive",
    name: "Kamala",
    quote: "It is so easy to forget how precious it is to be alive.",
    author: null
  },
  {
    id: 28,
    theme: "Self-Belief, Fighting Spirit",
    name: "Kamsamma K.",
    quote: "You may have to fight a battle more than once to win it.",
    author: null
  },
  {
    id: 29,
    theme: "Learning from Kids",
    name: "Karthik",
    quote: "Children with cancer are like candles in the wind—yet they flicker and dazzle those who watch their light.",
    author: null
  },
  {
    id: 30,
    theme: "Family Support",
    name: "Khaja Mohinuddin Basha S.",
    quote: "Sometimes we need someone to simply be there, to hold our hand and say everything will be okay.",
    author: null
  },
  {
    id: 31,
    theme: "Pain",
    name: "Kousalya Devi K.",
    quote: "We must embrace pain and burn it as fuel for our journey.",
    author: null
  },
  {
    id: 32,
    theme: "Health Is a Priority",
    name: "Krishna Rao G.G.",
    quote: "Best protection is early detection.",
    author: null
  },
  {
    id: 33,
    theme: "Healthy Habits",
    name: "Krishnam Raju R.V.R.",
    quote: "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
    author: null
  },
  {
    id: 34,
    theme: "Overcoming Challenges",
    name: "Kumud Gupta",
    quote: "Nothing is permanent in this world. Not even our troubles.",
    author: null
  },
  {
    id: 35,
    theme: "Strength Scar",
    name: "Lakshmi Keerti",
    quote: "Scars are badges for strength and courage. Only survivors wear them.",
    author: null
  },
  {
    id: 36,
    theme: "Courage",
    name: "Laxman Rao V.",
    quote: "The best view comes after the hardest climb.",
    author: null
  },
  {
    id: 37,
    theme: "Cancer Has Taught Me",
    name: "Lopamudra Dey",
    quote: "It is often in the darkest skies that we see the brightest stars.",
    author: null
  },
  {
    id: 38,
    theme: "Lessons from Cancer",
    name: "Madan Lal Gulati",
    quote: "Life is ironic. It takes sadness to know happiness, noise to appreciate silence, and absence to value presence.",
    author: null
  },
  {
    id: 39,
    theme: "Faith",
    name: "Mangayamma A.",
    quote: "Don’t use your energy to worry. Use your energy to believe.",
    author: null
  },
  {
    id: 40,
    theme: "Spread Awareness",
    name: "Manjula J.S.",
    quote: "I don’t want my pain to make me a victim. I want my battle to make me someone else’s hero.",
    author: null
  },
  {
    id: 41,
    theme: "Live Life to the Fullest",
    name: "Mujtaba Hussain",
    quote: "Don’t count the days. Make the days count.",
    author: null
  },
  {
    id: 42,
    theme: "Don’t Worry",
    name: "Muneera Begum N.",
    quote: "Worrying is like sitting on a rocking chair; it gives you something to do but doesn’t take you anywhere.",
    author: null
  },
  {
    id: 43,
    theme: "Compassion, Generosity",
    name: "Naga Sirisha",
    quote: "A kind gesture can reach a wound that only compassion can heal.",
    author: null
  },
  {
    id: 44,
    theme: "True Survivor",
    name: "Narasimha Reddy Banoor",
    quote: "I survived because the fire inside me burned brighter than the fire around me.",
    author: "Narasimha Reddy Banoor"
  },
  {
    id: 45,
    theme: "Share Your Story",
    name: "Narayan Rao V.",
    quote: "Healed people heal people.",
    author: null
  },
  {
    id: 46,
    theme: "Strength, Will Power",
    name: "Naveen Kumar Malka",
    quote: "You never know how strong you are until being strong is the only choice you have.",
    author: null
  },
  {
    id: 47,
    theme: "Strength, Will Power",
    name: "Nighat Imtiyaz",
    quote: "Tough times don’t last, tough people do.",
    author: "Robert Schuller"
  },
  {
    id: 48,
    theme: "Fighting It",
    name: "Nirmal Behari",
    quote: "I have cancer. Cancer doesn’t have me.",
    author: null
  },
  {
    id: 49,
    theme: "Fighting Cancer",
    name: "Niraja",
    quote: "Surviving cancer is not the end of a gruesome story, it is the beginning of a beautiful one.",
    author: null
  },
  {
    id: 50,
    theme: "Faith",
    name: "Padmavathi Devi",
    quote: "The most important thing in illness is never to lose heart.",
    author: "Vladimir Lenin"
  },
  {
    id: 51,
    theme: "Share Your Story",
    name: "Padmavathi M.",
    quote: "Your story is the key that can unlock someone else’s prison.",
    author: null
  },
  {
    id: 52,
    theme: "Hope",
    name: "Prabhu Das R.",
    quote: "Hope is that beautiful place between the way things were and the way things are yet to be.",
    author: null
  },
  {
    id: 53,
    theme: "Fighting Cancer",
    name: "Pradip Kumar Dash",
    quote: "Cancer is not a death sentence, but rather it is a life sentence; it pushes one to live.",
    author: null
  },
  {
    id: 54,
    theme: "Faith",
    name: "Prameela Kumari M.",
    quote: "Faith is taking the first step when you don’t see the whole staircase.",
    author: null
  },
  {
    id: 55,
    theme: "Strength, Will Power",
    name: "Prasad Chowdary P.",
    quote: "The human spirit is stronger than anything that can happen to it.",
    author: null
  },
  {
    id: 56,
    theme: "Hope, Miracle",
    name: "Prem Kishore Pagadala",
    quote: "Where there is hope, there is faith; where there is faith, miracles happen.",
    author: null
  },
  {
    id: 57,
    theme: "Strength, Will Power",
    name: "Pullamma K.",
    quote: "Don’t pray for an easy life; pray for the strength to endure a difficult one.",
    author: "Bruce Lee"
  },
  {
    id: 58,
    theme: "Struggle",
    name: "Radha Kumari Suri",
    quote: "I’m thankful for my struggle, because without it, I wouldn’t have stumbled across my strength.",
    author: null
  },
  {
    id: 59,
    theme: "Fear",
    name: "Rafath Unnisa",
    quote: "Faith or fear—your mind cannot occupy both at the same time.",
    author: null
  },
  {
    id: 60,
    theme: "Childhood Smoking Statistic",
    name: "Rajamallu A.",
    quote: "One out of three smokers begins smoking before the age of fourteen.",
    author: null
  },
  {
    id: 61,
    theme: "Don’t Worry",
    name: "Rama Krishna L.",
    quote: "Worrying doesn’t take away tomorrow’s troubles, it takes away today’s peace.",
    author: null
  },
  {
    id: 62,
    theme: "Hope",
    name: "Ramanjaneyulu L.",
    quote: "Hope is real.",
    author: null
  },
  {
    id: 63,
    theme: "Grateful",
    name: "Ramanujam T.",
    quote: "I cried because I had no shoes until I met a man who had no feet.",
    author: null
  },
  {
    id: 64,
    theme: "Mindset",
    name: "Ravi Sirdeshmukh",
    quote: "You can be a victim of cancer or a survivor of cancer. It’s a mindset.",
    author: "Dave Pelzer"
  },
  {
    id: 65,
    theme: "Share Your Story",
    name: "Rohini Devi D.",
    quote: "When you stand and share your story in an empowering way, your story will heal you and somebody else.",
    author: "Iyanla Vanzant"
  },
  {
    id: 66,
    theme: "Hope",
    name: "Samuel Hilel Lal",
    quote: "Hope there’s a day when cancer is just a zodiac sign.",
    author: null
  },
  {
    id: 67,
    theme: "Feeling Alive",
    name: "Saritha Reddy Cheruku",
    quote: "It is ironic how you feel most alive when your heart skips a few beats.",
    author: null
  },
  {
    id: 68,
    theme: "Courage",
    name: "Sarma",
    quote: "Your illness does not define you, your strength and courage does.",
    author: null
  },
  {
    id: 69,
    theme: "Self-Belief",
    name: "Satyanarayana N.",
    quote: "Remember, you are the most important person in your recovery.",
    author: null
  },
  {
    id: 70,
    theme: "Strength",
    name: "Savithri",
    quote: "I am stronger than this challenge and this challenge is making me even stronger.",
    author: null
  },
  {
    id: 71,
    theme: "Faith",
    name: "Satyavathi T.",
    quote: "Feed your faith and your fears will starve to death.",
    author: null
  },
  {
    id: 72,
    theme: "Self-Pity",
    name: "Satyavati Giri K.",
    quote: "You can be pitiful or powerful, but you can’t be both at the same time.",
    author: "Joyce Meyer"
  },
  {
    id: 73,
    theme: "Gratitude",
    name: "Seetha N.",
    quote: "We often take for granted the very things that most deserve our gratitude.",
    author: "Cynthia Ozick"
  },
  {
    id: 74,
    theme: "Perspective",
    name: "Sharada B.",
    quote: "Life is 10 per cent what happens to you and 90 per cent how you react to it.",
    author: "Charles Swindoll"
  },
  {
    id: 75,
    theme: "Positivity",
    name: "Sharda Devi Garg",
    quote: "Positive energy is contagious. Spread it.",
    author: null
  },
  {
    id: 76,
    theme: "Learn from Children",
    name: "Shilpy Agarwal",
    quote: "Children are happy because they don’t have a file in their mind called ‘All things that could go wrong’.",
    author: null
  },
  {
    id: 77,
    theme: "Believe",
    name: "Surekha",
    quote: "Believe you can and you are halfway there.",
    author: null
  },
  {
    id: 78,
    theme: "Fighting Cancer",
    name: "Shobha Devi Agarwal",
    quote: "Cancer didn’t bring me to my knees, it brought me to my feet.",
    author: "Michael Douglas"
  },
  {
    id: 79,
    theme: "Strength, Will Power",
    name: "Sireesha L.",
    quote: "Keep your head up. God gives His hardest battles to the strongest soldiers.",
    author: null
  },
  {
    id: 80,
    theme: "Kind Words",
    name: "Sravanthy Totapally",
    quote: "The mind and body are not separate. What affects one affects the other.",
    author: null
  },
  {
    id: 81,
    theme: "Fight",
    name: "Sreenivasulu Rangaswamy",
    quote: "When something bad happens you can let it define you, destroy you, or strengthen you.",
    author: null
  },
  {
    id: 82,
    theme: "Triumph",
    name: "Srigodha Kandala",
    quote: "There can be no triumph unless there is a trial.",
    author: null
  },
  {
    id: 83,
    theme: "Act on Symptoms",
    name: "Srinivas Kumar Reddy S.",
    quote: "Symptoms are like stop signs. If we stop, we make good decisions.",
    author: null
  },
  {
    id: 84,
    theme: "Trust",
    name: "Subbayamma Ch.",
    quote: "No matter what lies ahead of me, God is already there.",
    author: null
  },
  {
    id: 85,
    theme: "Support",
    name: "Sudha Ravichandran",
    quote: "We all have an unsuspected reserve of strength inside.",
    author: null
  },
  {
    id: 86,
    theme: "This Too Shall Pass",
    name: "Sudha Volz",
    quote: "Stay strong; it might be stormy now, but it can’t rain forever.",
    author: null
  },
  {
    id: 87,
    theme: "Do Your Best",
    name: "A.P.J. Abdul Kalam",
    quote: "The very best thing you can do for the world is to make the most of yourself.",
    author: null
  },
  {
    id: 88,
    theme: "Live Life Fully",
    name: "Sudheer Reddy Veerareddy",
    quote: "Live each day as if your life has just begun.",
    author: null
  },
  {
    id: 89,
    theme: "Count Your Blessings",
    name: "Shyamala",
    quote: "Someone is praying for the blessings you take for granted.",
    author: null
  },
  {
    id: 90,
    theme: "Overcoming Challenges",
    name: "Sulochana M.",
    quote: "Sometimes overcoming a challenge is as simple as changing the way you think.",
    author: null
  },
  {
    id: 91,
    theme: "Kind Smile, Miracle",
    name: "Suman Banerjee",
    quote: "A gentle word, a kind look, a good-natured smile can work wonders.",
    author: null
  },
  {
    id: 92,
    theme: "Why Me",
    name: "Sunil Kumar",
    quote: "When life puts you in a tough situation, don’t say ‘why me’, say ‘try me’.",
    author: null
  },
  {
    id: 93,
    theme: "Struggle",
    name: "Sunita Rangam",
    quote: "I am thankful for my struggle because without it I wouldn’t have stumbled across my strength.",
    author: null
  },
  {
    id: 94,
    theme: "Overcoming Challenges",
    name: "Suresh G.",
    quote: "Until you are broken, you don’t know what you are made of.",
    author: null
  },
  {
    id: 95,
    theme: "Obstacles",
    name: "Suvarna N.",
    quote: "The human spirit is stronger than anything that can happen to it.",
    author: "C.C. Scott"
  },
  {
    id: 96,
    theme: "Cancer Screening",
    name: "Major V.R.K. Chary",
    quote: "Screen for life; cancer screening sees what you can’t.",
    author: null
  },
  {
    id: 97,
    theme: "Teamwork",
    name: "Vara Prasada Rao K.C.",
    quote: "When ‘I’ is replaced by ‘We’, illness becomes wellness.",
    author: null
  },
  {
    id: 98,
    theme: "Acts of Kindness",
    name: "Varalakshmi M.",
    quote: "The smallest act of kindness is worth more than the grandest intention.",
    author: null
  },
  {
    id: 99,
    theme: "Positive Thoughts",
    name: "Vasanti S.",
    quote: "Thinking positively isn’t expecting the best, but accepting the moment.",
    author: null
  },
  {
    id: 100,
    theme: "Age",
    name: "Venkata Rama Sastry B.",
    quote: "Wrinkles merely indicate where the smiles have been.",
    author: null
  },
  {
    id: 101,
    theme: "Life",
    name: "Venugopal Rao Koneru",
    quote: "The biggest obstacles in our lives are the barriers our mind creates.",
    author: null
  },
  {
    id: 102,
    theme: "Together We Can",
    name: "Victoria Rani A.",
    quote: "I can’t promise to fix all your problems, but I promise you won’t face them alone.",
    author: null
  },
  {
    id: 103,
    theme: "Health Is a Priority",
    name: "Vijaya Lakshmi K.",
    quote: "Make yourself a priority once in a while; it’s not selfish, it’s necessary.",
    author: null
  },
  {
    id: 104,
    theme: "Change Habits",
    name: "Visweswara Rao M.",
    quote: "Life does not get better by chance, it gets better by change.",
    author: null
  },
  {
    id: 105,
    theme: "Strength, Will Power",
    name: "Y.S. Murthy",
    quote: "You have to fight through some bad days to earn the best days of your life.",
    author: null
  },
  {
    id: 106,
    theme: "Live Each Moment",
    name: "Yellaiah Bandi",
    quote: "Enjoy the little things in life; one day you’ll realize they were the big things.",
    author: null
  },
  {
    id: 107,
    theme: "Fear Is a Liar",
    name: "Yogeshwar Sharma",
    quote: "Fears are stories we tell ourselves.",
    author: null
  },
  {
    id: 108,
    theme: "The Struggle of Life",
    name: "Mumtaz Khan",
    quote: "Strong walls shake but will never collapse.",
    author: null
  }
];

export default survivorQuotes;
export type MemoryCategory = 'funny' | 'academic' | 'coordination' | 'emotional' | 'nostalgic';

export interface ClassMemory {
  id: string;
  semester: 1 | 2 | 3;
  date: string;
  category: MemoryCategory;
  categoryLabel: string;
  title: string;
  excerpt: string;
  sender?: string;
  caption: string;
  tanglishQuote?: string;
  reactions: string[];
  tags: string[];
}

export const memories: ClassMemory[] = [
  // SEMESTER 1
  {
    id: 'mem-1-group-genesis',
    semester: 1,
    date: '13 August 2025',
    category: 'nostalgic',
    categoryLabel: 'The Beginning',
    title: 'The Inception & The Group Name War',
    excerpt: 'Infinite loopers, Kinda from python, Jubilee gems, Platinum crew, Gossip gurus, PSG PRODUCTS Loading.. Choose one pah!',
    sender: 'Vishnupriya',
    caption: 'The very first night of college. Classmates immediately brainstormed funny alternatives like "Parama Padi daa" and "Cse payaluga". This was the exact hour 81 strangers began talking.',
    tanglishQuote: 'Athula onnu illa keela potru! 😂',
    reactions: ['😂', '🔥', '❤️'],
    tags: ['First Day', 'Origins', 'Group Creation']
  },
  {
    id: 'mem-1-four-years-welcome',
    semester: 1,
    date: '13 August 2025',
    category: 'emotional',
    categoryLabel: 'Solidarity',
    title: 'The Four-Year Manifesto',
    excerpt: 'Well guys, This is our group for the next 4 years! Feel free to share your thoughts!! May this group be a stress buster. You can use this group if you have doubts also!!! Lets have a fun and chill journey!! 🎉',
    sender: 'Rithik Loganathan',
    caption: 'Hrithik sent this message at 9:04 PM on Day 1. It became the moral backbone of our class for the rest of our journey.',
    tanglishQuote: 'Idhu namma group for the next 4 years! ✨',
    reactions: ['❤️', '🎉', '🤝'],
    tags: ['Manifesto', 'Unity', 'Day 1']
  },
  {
    id: 'mem-1-library-hours',
    semester: 1,
    date: '15 August 2025',
    category: 'funny',
    categoryLabel: 'College Reality',
    title: 'The Great Library Hours Mystery',
    excerpt: 'Does library hour has mandatory attendance? -> Rep inquire to tutor -> "Ithu clg vara maatanga... Bcoz namma irukkuradhu PSG 😂"',
    sender: 'Rithik Loganathan & Class',
    caption: 'Freshers wondering if teachers would substitute library periods like in high school. Hrithik brought the ultimate reality check that PSG culture was unlike anywhere else.',
    tanglishQuote: 'Bcoz namma irukkuradhu PSG 😂',
    reactions: ['😂', '📚', '🫡'],
    tags: ['Library', 'PSG Life', 'Tutor']
  },
  {
    id: 'mem-1-english-books',
    semester: 1,
    date: '20 August 2025',
    category: 'coordination',
    categoryLabel: 'Rep Duty',
    title: 'The ₹550 English Book Bulk Mission',
    excerpt: 'Guys, regarding the english book per copy costs around 550 ₹ ....if you give me the amount (cash/gpay) we can place a bulk order....dm me asap ....we need to place the order before tomorrow evening',
    sender: 'Rithik Loganathan',
    caption: 'Instead of making 81 students battle depot queues or face stockouts, Hrithik and Vishnupriya collected GPay payments and cash in paper bundles with rubber bands, distributing books cleanly after lunch.',
    tanglishQuote: 'A big thanks to everyone for making my job simple!',
    reactions: ['📖', '💰', '🙏🏻'],
    tags: ['English Book', 'Bulk Order', 'GPay']
  },
  {
    id: 'mem-1-tharun-scam',
    semester: 1,
    date: '24 August 2025',
    category: 'funny',
    categoryLabel: 'Pure Comedy',
    title: 'The Tharun Fake Birthday & 81-Photo Family Tree',
    excerpt: 'Group renamed to "HBD Madhushri & HBD Tharun". Tharun: "Edhey birthday va? Enaku birthday illa Aravind deva summa solitan guys... Idhula 81 peroda passport size photo um vechu group dp ah vechurlam (family tree)"',
    sender: 'Tharun, Vishnuvardhan, Class',
    caption: 'Aravind Deva falsely announced Tharun’s birthday, leading to 40 consecutive wishes before Tharun realized he was being celebrated for existing.',
    tanglishQuote: 'Edhey birthday va? Enaku birthday illa da! 😂',
    reactions: ['😂', '🎂', '💀'],
    tags: ['Birthday Scam', 'Tharun', 'Family Tree']
  },
  {
    id: 'mem-1-calculator-auction',
    semester: 1,
    date: '15 October 2025',
    category: 'funny',
    categoryLabel: 'Classroom Banter',
    title: 'The Y201 Chemistry Calculator Auction',
    excerpt: 'Calculator found in chemistry lab... Bidders are welcome base price 50 rupees! -> Bids: 55, 60, 70.2, 30L! Vishnupriya: "Auction venue change panikonga😅!"',
    sender: 'Vishnuvardhan N & Vishnupriya',
    caption: 'When someone forgot their scientific calculator, Y201 Row 1 briefly turned into a Wall Street trading floor with bids skyrocketing into imaginary millions.',
    tanglishQuote: 'Base price 50 rupees... 30 Lakhs SOLD! 🗣️',
    reactions: ['🧮', '💸', '😂'],
    tags: ['Calculator', 'Auction', 'Y201']
  },
  {
    id: 'mem-1-dharunish-champ',
    semester: 1,
    date: '26 September 2025',
    category: 'emotional',
    categoryLabel: 'Class Pride',
    title: 'Dharunish: National Kickboxing Champion (₹1 Lakh)',
    excerpt: 'Guyss, Dharunish vandhu national level kickboxing competition la win pannirkan.... Cash prize 1 Lakh... So, Dharunish avargale.... motha cls kum treat vechirunga!! ❤',
    sender: 'Rithik Loganathan & Class',
    caption: 'Our very own classmate brought national glory back to PSG Tech. The whole chat lit up in genuine pride and demands for treat.',
    tanglishQuote: 'National Champ da namma Dharunish! 🥊🏆',
    reactions: ['🏆', '🥊', '🔥'],
    tags: ['Kickboxing', 'National Winner', 'Treat Epo']
  },
  {
    id: 'mem-1-sivaranjani-catchphrase',
    semester: 1,
    date: '29 September 2025',
    category: 'funny',
    categoryLabel: 'Campus Lore',
    title: 'The Legendary: "How Can I Go With? 👺"',
    excerpt: 'Rithik: "Bro if i tell that to math mam ...She would say HOW CAN I GO WITH?! 👺... Che mam already extra session kekuranga..."',
    sender: 'Rithik Loganathan',
    caption: 'The unforgettable faculty catchphrase that went viral across CSE G1 whenever anyone attempted to cancel or negotiate class timings.',
    tanglishQuote: 'How can Sivaranjani mam go with?! 👺',
    reactions: ['👺', '😂', '📚'],
    tags: ['Faculty Catchphrase', 'Maths Exam', 'Class Lore']
  },

  // SEMESTER 2
  {
    id: 'mem-2-eg-kit-preparation',
    semester: 2,
    date: '20 January 2026',
    category: 'academic',
    categoryLabel: 'Semester 2 Kickoff',
    title: 'Mini-Drafters, A2 Charts & G301 EG Survival',
    excerpt: 'Everyone must come with ur Eg Drafter, A2 sheet chart and other stationaries like (geometry box, roller scale, pencils, eraser, board clip...etc)',
    sender: 'Shahana & Thurika',
    caption: 'Semester 2 introduced Engineering Graphics. Thurika and classmates made sure no one arrived in the drawing hall without proper clips and drafters.',
    tanglishQuote: 'Board clips eduthukonga, illana sir thittuvaaru! 📐',
    reactions: ['📐', '✏️', '📄'],
    tags: ['Engineering Graphics', 'Drafters', 'G301']
  },
  {
    id: 'mem-2-moongil-thottam',
    semester: 2,
    date: '28 February 2026',
    category: 'funny',
    categoryLabel: 'Music & Chaos',
    title: 'Moongil Thottam (Melody Version ft. Sharvesh)',
    excerpt: 'Moongil thottam-Melody version ft. Sharvesh... Tharun: "50 shades of Moongil Thottam ft. Sharvesh will be released soon... Isai Kadavul Sharvesh!"',
    sender: 'Sharvesh, Tharun, Sunil, Prem',
    caption: 'Class Representative Sharvesh’s singing audio was shared in the group, transforming into an instant musical legend and endless affectionate ribbing.',
    tanglishQuote: 'Isai Kadavul Sharvesh 🙏🏻☠️',
    reactions: ['🎤', '🎶', '😭'],
    tags: ['Sharvesh', 'Moongil Thottam', 'Concert']
  },
  {
    id: 'mem-2-ooty-iv',
    semester: 2,
    date: '21 March 2026',
    category: 'nostalgic',
    categoryLabel: 'Industrial Visit',
    title: 'The Ooty Expedition: RAC & Karnataka Garden',
    excerpt: '5:15 AM Assemble at PSG IM Gate -> Radio Astronomy Centre -> Lunch -> Karnataka Garden -> Bus 1 & Bus 2 singing all the way back to Coimbatore.',
    sender: 'Janvi, Adhithya, Mithuna, Sharvesh',
    caption: 'Coordinating 81 students on two buses, handling medical certificates via the PSG Patient App, and creating memories in the Nilgiri hills that will stay forever.',
    tanglishQuote: 'Bus playlist ready-aa? Ooty-ku pogalaam! 🚌⛰️',
    reactions: ['🚌', '🌲', '✨'],
    tags: ['Ooty IV', 'Radio Astronomy', 'Bus Journey']
  },
  {
    id: 'mem-2-april-fools',
    semester: 2,
    date: '1 April 2026',
    category: 'funny',
    categoryLabel: 'Prank of the Year',
    title: 'The Saturday Compensation Class Heart Attack',
    excerpt: 'Sharvesh: "Guys, since this week’s Tuesday and Friday are holidays, compensation classes will be held on April 4th (working Saturday). Attendance is mandatory." Vishnupriya: "April fools ah thambi!?" Rithik: "Pala per saabam unna summa vidathuuu da ☠️"',
    sender: 'Sharvesh, Vishnupriya, Hrithik',
    caption: 'Sharvesh played on everyone’s worst nightmare: giving up the long Good Friday weekend for compensation classes. It worked so well even the former reps panicked.',
    tanglishQuote: 'Dedicated to those planning to go home for Good Friday 😂',
    reactions: ['🤡', '☠️', '🚌'],
    tags: ['April Fools', 'Sharvesh Prank', 'Good Friday']
  },
  {
    id: 'mem-2-rank-celebration',
    semester: 2,
    date: '16 April 2026',
    category: 'emotional',
    categoryLabel: 'Pride of G1',
    title: 'Top of the Department: Subisa & Kalaiarasi',
    excerpt: 'Congrats both of you for securing first rank and second rank 🥳🔥 Kalai..: Thank you!!!!❤️🫂 Subisa: Thank you!!!💜',
    sender: 'Class in unison',
    caption: 'CSE G1 swept the top ranks of the department. Over 40 heartfelt congratulatory messages flooded the group within minutes.',
    tanglishQuote: 'Rank 1 and Rank 2 namma G1 pasanga dhaan! 🏆❤️',
    reactions: ['👑', '🥇', '🥈'],
    tags: ['Rank 1 & 2', 'Academic Pride', 'Excellence']
  },
  {
    id: 'mem-2-ep-survival-warning',
    semester: 2,
    date: '28 May 2026',
    category: 'academic',
    categoryLabel: 'Exam Night',
    title: 'The EP Lab CA2 Survival Code',
    excerpt: 'Guys Tomorrow in the lab exam, whatever you know, write it. Don’t ask Anusha anything. She’ll just say "I don’t know." And Nagasudha mam will also be there.',
    sender: 'Thurika',
    caption: 'The night before the dreaded Engineering Practices lab exam. Pin diagrams, logic gates, shift registers, and Thurika’s blunt, protective tactical advice.',
    tanglishQuote: 'Enna theriyumo adha eluthunga, don\'t ask anything! 🤫',
    reactions: ['⚡', '📝', '🛡️'],
    tags: ['EP Lab', 'Logic Gates', 'Exam Panic']
  },
  {
    id: 'mem-2-sujith-c-code',
    semester: 2,
    date: '26 May 2026',
    category: 'academic',
    categoryLabel: 'Classmate Spirit',
    title: 'The C Lab Exam Confidence Predictor',
    excerpt: '#include <stdio.h>\nRule 1: Keep calm and compile code.\nRule 2: If code runs on first try, check whether it\'s your PC.\nRule 3: One missing semicolon = Full emotional damage.\nConfidence Level: %d%%',
    sender: 'Sujith E',
    caption: 'Classmate Sujith’s signature comedic C programs before lab practicals that kept everyone smiling through debugging tears.',
    tanglishQuote: 'One missing semicolon = Full emotional damage 😂',
    reactions: ['💻', '🎯', '😄'],
    tags: ['C Code', 'Debugging', 'Viva Preparation']
  },

  // SEMESTER 3
  {
    id: 'mem-3-reopening-q301',
    semester: 3,
    date: '3 August 2026',
    category: 'nostalgic',
    categoryLabel: 'Sophomore Year',
    title: 'Entering Second Year & Welcoming Lateral Friends',
    excerpt: 'Classes in Q301. Discrete Structures, OOPS Java, Linear Algebra, COA, Data Structures. Welcoming our new lateral entry friends into the family.',
    sender: 'Abinayasri & Sachin Pranav',
    caption: 'The transition from freshers to seniors. New lateral entry classmates were added and given instant guidance with report formats and notes.',
    tanglishQuote: 'Second year vandhaachu! Q301 is our new home.',
    reactions: ['🎓', '👋', '✨'],
    tags: ['Q301', 'Sem 3 Reopening', 'Lateral Friends']
  },
  {
    id: 'mem-3-dictator-sachin',
    semester: 3,
    date: '26 August 2026',
    category: 'funny',
    categoryLabel: 'Rep Banter',
    title: 'The Legend of "Dictator Sachin"',
    excerpt: 'Sachin changed settings: only admins can send messages (toggled 4 times). Rehaan: "Dictator sachin", Lakshanth: "@~Sachin. M the 🐐🐐"',
    sender: 'Sachin Pranav, Rehaan, Lakshanth',
    caption: 'When Sachin tried to post official Design Thinking Club updates by locking the group, classmates playfully crowned him dictator.',
    tanglishQuote: 'Dictator Sachin the GOAT 🐐😂',
    reactions: ['🐐', '🔒', '🤣'],
    tags: ['Dictator Sachin', 'Admin Lock', 'Banter']
  },
  {
    id: 'mem-3-sept-3-turning-point',
    semester: 3,
    date: '3 September 2026',
    category: 'emotional',
    categoryLabel: 'The Soul of G1',
    title: 'The "Make Him Proud" Turning Point',
    excerpt: 'Hi guys.. Can you kindly spend some time to read this...? Pls ellarum knjm namma sir soldra badi behave panalaama.. for sir\'s sake. He is saying "iniyum complain vandha I will step down"... Let\'s be together and win together. Let\'s prove our new HoD and our tutor He is much more than efficient for us. Let\'s make him proud. ✨',
    sender: 'Abinayasri',
    caption: 'The emotional high-water mark of Semester 3. Abinaya spoke straight from the heart when tutor Veerakumar Sir faced unfair faculty pressure. Deepa, Sachin, Rithik, and the entire class immediately stood in solidarity.',
    tanglishQuote: 'VK sir pasanga da namma... Let\'s make him proud! ✨❤️',
    reactions: ['❤️‍🩹', '🫂', '✨'],
    tags: ['Turning Point', 'Veerakumar Sir', 'Unity']
  },
  {
    id: 'mem-3-central-drive',
    semester: 3,
    date: '7 October 2026',
    category: 'academic',
    categoryLabel: 'Shared Wealth',
    title: 'Centralizing Every Resource on Google Drive',
    excerpt: 'Guys, I have organized most of the materials that have been shared with us into this drive. COA notes will be reorganized according to CO. Let’s keep it useful for everyone.',
    sender: 'Abinayasri & Prithvi',
    caption: 'Eliminating the chaos of missing PDFs. Every lecture slide, question bank, and previous year paper was organized into a public shared drive.',
    tanglishQuote: 'Drive link ready-aa irukku, notes eduthu padinga!',
    reactions: ['📂', '💡', '🙌'],
    tags: ['Google Drive', 'COA Notes', 'Sharing']
  },
  {
    id: 'mem-3-commitcon-hackathon',
    semester: 3,
    date: '9 October 2026',
    category: 'coordination',
    categoryLabel: 'Hackathon Rush',
    title: 'Commitcon 2026: 40+ G1 Hackers Mobilized',
    excerpt: 'GitHub Campus Club under CSEA presents COMMITCON. 40+ students from CSE G1 registered, and reps coordinated hardware splitters, projectors, and attendance exemptions.',
    sender: 'Sachin Pranav & Abinayasri',
    caption: 'Demonstrating that G1 was no longer just attending class — we were building real software and competing as future computer scientists.',
    tanglishQuote: 'Hackathon-la namma pasanga full participation! 🚀💻',
    reactions: ['💻', '⚡', '🏆'],
    tags: ['Commitcon', 'Hackathon', 'Innovation']
  },
  {
    id: 'mem-3-sujith-webinar-reminders',
    semester: 3,
    date: '26 September 2026',
    category: 'funny',
    categoryLabel: 'Creative Classmate',
    title: 'The Java Main Method Webinar Alarm',
    excerpt: '//import java.util.Reminder;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.printf("Reminder: Building Communication Skills Webinar 6:00 PM => 7:30 PM");\n  }\n}',
    sender: 'Sujith E',
    caption: 'Classmate Sujith reminding 80 people to attend the mandatory 1-credit webinar using executable Java syntax.',
    tanglishQuote: 'import java.util.Reminder; 😂',
    reactions: ['☕', '💻', '👏'],
    tags: ['Java Code', 'Webinar', 'Sujith']
  }
];

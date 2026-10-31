export interface TimelineEvent {
  id: string;
  date: string;
  semester: 1 | 2 | 3;
  semesterBadge: string;
  title: string;
  description: string;
  highlightQuote?: string;
  repsInCharge: string[];
  category: 'origin' | 'academic' | 'humour' | 'solidarity' | 'milestone';
  icon: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 't-1',
    date: '13 August 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'The Digital Genesis of CSE G1',
    description: 'Vishnupriya creates the WhatsApp group at 12:21 PM. By night, name brainstorms like "Infinite Loopers", "Kinda from Python", and "Parama Padi daa" flood the chat. At 9:04 PM, Hrithik posts the 4-year class manifesto.',
    highlightQuote: 'Well guys, This is our group for the next 4 years! Lets have a fun and chill journey!! 🎉',
    repsInCharge: ['Vishnupriya', 'Rithik Loganathan'],
    category: 'origin',
    icon: 'Sparkles'
  },
  {
    id: 't-2',
    date: '15 August 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'Resolving the "Library Hours" Panic',
    description: 'Anxious first-year students panic over whether library periods have biometric attendance. Hrithik contacts tutor and seniors, relieving 81 students.',
    highlightQuote: 'Bcoz namma irukkuradhu PSG 😂',
    repsInCharge: ['Rithik Loganathan'],
    category: 'humour',
    icon: 'BookOpen'
  },
  {
    id: 't-3',
    date: '20 August 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'The ₹550 English Book Bulk Order Mission',
    description: 'Reps organize bulk purchase of English textbooks directly from publishers, managing GPay and cash payments to prevent students standing in long campus depot lines.',
    highlightQuote: 'Got the money from all 🙏🏻 A big thanks to everyone for making my job simple!',
    repsInCharge: ['Rithik Loganathan', 'Vishnupriya'],
    category: 'academic',
    icon: 'Layers'
  },
  {
    id: 't-4',
    date: '24 August 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'The Tharun Fake Birthday Incident',
    description: 'A prank naming the group "HBD Tharun" results in 40+ classmates wishing him before Tharun realizes: "Edhey birthday va? Enaku birthday illa da!" and proposes an 81-photo family tree group icon.',
    highlightQuote: '81 peroda passport size photo um vechu group dp ah vechurlam',
    repsInCharge: ['Vishnupriya', 'Rithik Loganathan'],
    category: 'humour',
    icon: 'Laugh'
  },
  {
    id: 't-5',
    date: '26 September 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'Dharunish Wins National Kickboxing (₹1 Lakh)',
    description: 'Classmate Dharunish clinches Gold in a national kickboxing championship. Hrithik and Vishnupriya lead the class in celebrating him with demands for treat.',
    highlightQuote: 'National level kickboxing la win pannirkan... Cash prize 1 Lakh! 🏆',
    repsInCharge: ['Rithik Loganathan'],
    category: 'milestone',
    icon: 'Trophy'
  },
  {
    id: 't-6',
    date: '15 October 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'The Chemistry Lab Calculator Auction',
    description: 'A forgotten Casio calculator in Chemistry lab leads Vishnuvardhan to open bidding in Y201 Row 1 starting at ₹50, quickly rising to 30 Lakhs.',
    highlightQuote: 'Auction venue change panikonga😅!',
    repsInCharge: ['Vishnupriya'],
    category: 'humour',
    icon: 'Coins'
  },
  {
    id: 't-7',
    date: '17 December 2025',
    semester: 1,
    semesterBadge: 'Semester 1: The Foundation',
    title: 'Uniform Spiral Binding for Python Lab',
    description: 'Reps hold a class poll between Green, Blue, Yellow, and Violet for Python record binding so the class presents a professional, uniform front to faculty.',
    highlightQuote: 'Blue colour is finalized! How can Sivaranjani mam go with?! 👺',
    repsInCharge: ['Rithik Loganathan'],
    category: 'academic',
    icon: 'FileCheck'
  },
  {
    id: 't-8',
    date: '19 January 2026',
    semester: 2,
    semesterBadge: 'Semester 2: The Rhythm & The Road',
    title: 'Semester 2 Opens: Sharvesh & Thurika Take Charge',
    description: 'Introduction to Engineering Graphics and C Programming. Mini-drafters, A2 sheets, roller scales, and J208 classrooms become the new routine.',
    highlightQuote: 'New semester, new challenges. Come prepared with all tools.',
    repsInCharge: ['Sharvesh', 'Thurika'],
    category: 'origin',
    icon: 'Compass'
  },
  {
    id: 't-9',
    date: '28 February 2026',
    semester: 2,
    semesterBadge: 'Semester 2: The Rhythm & The Road',
    title: 'The "Moongil Thottam" Musical Epoch',
    description: 'Sharvesh sings "Moongil Thottam", leaking an audio recording that becomes the permanent comedy soundtrack of our college memories.',
    highlightQuote: 'Isai Kadavul Sharvesh 🙏🏻☠️',
    repsInCharge: ['Sharvesh'],
    category: 'humour',
    icon: 'Music'
  },
  {
    id: 't-10',
    date: '21 March 2026',
    semester: 2,
    semesterBadge: 'Semester 2: The Rhythm & The Road',
    title: 'The Ooty Industrial Visit: RAC & Botanical Haven',
    description: 'A milestone day where 80+ classmates boarded two buses to the Radio Astronomy Centre in Ooty and Karnataka Garden. Coordinated smoothly by our team.',
    highlightQuote: '5:15 AM departure, a lifetime of road trip memories.',
    repsInCharge: ['Sharvesh', 'Thurika'],
    category: 'milestone',
    icon: 'Bus'
  },
  {
    id: 't-11',
    date: '1 April 2026',
    semester: 2,
    semesterBadge: 'Semester 2: The Rhythm & The Road',
    title: 'The Saturday Compensation Class Prank',
    description: 'Sharvesh announces that Saturday compensation classes are strictly mandatory for Good Friday holidays, convincing the whole class for 15 frantic minutes.',
    highlightQuote: 'Pala per saabam unna summa vidathuuu da ☠️',
    repsInCharge: ['Sharvesh', 'Vishnupriya'],
    category: 'humour',
    icon: 'Smile'
  },
  {
    id: 't-12',
    date: '16 April 2026',
    semester: 2,
    semesterBadge: 'Semester 2: The Rhythm & The Road',
    title: 'Double Triumph: Subisa & Kalaiarasi Ranks 1 & 2',
    description: 'Subisa Shree and Kalaiarasi top the entire department in academic rankings, sparking celebratory cheers across the class.',
    highlightQuote: 'Congratulations Subisa and Kalai! Rank 1 & Rank 2 are ours.',
    repsInCharge: ['Sharvesh', 'Thurika'],
    category: 'milestone',
    icon: 'Award'
  },
  {
    id: 't-13',
    date: '28 May 2026',
    semester: 2,
    semesterBadge: 'Semester 2: The Rhythm & The Road',
    title: 'The EP Lab CA2 Night Survival Warning',
    description: 'Thurika posts tactical survival instructions regarding logic gate pin codes and strict faculty invigilation before the practical examination.',
    highlightQuote: 'Don’t ask Anusha anything. Write whatever you know.',
    repsInCharge: ['Thurika'],
    category: 'academic',
    icon: 'ShieldAlert'
  },
  {
    id: 't-14',
    date: '3 August 2026',
    semester: 3,
    semesterBadge: 'Semester 3: The Resolve',
    title: 'Sophomore Year Begins: Abinayasri & Sachin Step Up',
    description: 'Relocating to Room Q301. Welcoming lateral entry students into our teams, dividing OOPS & DSA lab batches, and tackling advanced theory.',
    highlightQuote: 'New semester, advanced courses. Let’s stay united.',
    repsInCharge: ['Abinayasri', 'Sachin Pranav'],
    category: 'origin',
    icon: 'DoorOpen'
  },
  {
    id: 't-15',
    date: '26 August 2026',
    semester: 3,
    semesterBadge: 'Semester 3: The Resolve',
    title: 'The "Dictator Sachin" Admin Lock Episode',
    description: 'Sachin locks and unlocks the group multiple times while posting Design Thinking Club recruitment details, earning playful teasing from classmates.',
    highlightQuote: 'Dictator sachin! @~Sachin. M the 🐐🐐',
    repsInCharge: ['Sachin Pranav'],
    category: 'humour',
    icon: 'Lock'
  },
  {
    id: 't-16',
    date: '3 September 2026',
    semester: 3,
    semesterBadge: 'Semester 3: The Resolve',
    title: 'The "Make Him Proud" Turning Point',
    description: 'Abinayasri delivers a deeply moving plea for unity and mutual discipline after faculty pressure on our tutor Veerakumar Sir, revitalizing class spirit.',
    highlightQuote: 'Let\'s be together and win together. Let\'s make him proud. ✨',
    repsInCharge: ['Abinayasri', 'Sachin Pranav'],
    category: 'solidarity',
    icon: 'HeartHandshake'
  },
  {
    id: 't-17',
    date: '7 October 2026',
    semester: 3,
    semesterBadge: 'Semester 3: The Resolve',
    title: 'Centralized Open Google Drive Resource Vault',
    description: 'Abinayasri curates an open-access Google Drive repository with organized COA, Linear Algebra, and Discrete Structure notes for the entire class.',
    highlightQuote: 'Centralized notes drive is live. Let’s make revision easy for all.',
    repsInCharge: ['Abinayasri'],
    category: 'academic',
    icon: 'HardDrive'
  },
  {
    id: 't-18',
    date: '9 October 2026',
    semester: 3,
    semesterBadge: 'Semester 3: The Resolve',
    title: 'Commitcon Hackathon & CSEA Mobilization',
    description: 'Sachin and Abinayasri coordinate registrations, hardware splitters, and attendance exemptions for 40+ classmates in competitive coding hackathons.',
    highlightQuote: 'From classroom theory to national stage innovators.',
    repsInCharge: ['Sachin Pranav', 'Abinayasri'],
    category: 'milestone',
    icon: 'Terminal'
  }
];

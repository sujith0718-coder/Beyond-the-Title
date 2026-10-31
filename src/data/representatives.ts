export interface Representative {
  id: string;
  name: string;
  semester: 1 | 2 | 3;
  semesterTitle: string;
  tenure: string;
  roleTitle: string;
  accentColor: string; // Tailored HSL/Hex color for styling
  badge: string;
  quote: string;
  quoteTamil?: string;
  bio: string;
  stats: {
    label: string;
    value: string;
  }[];
  keyContributions: {
    title: string;
    description: string;
    dateOrPeriod: string;
    impact: string;
  }[];
  signatureMoment: {
    headline: string;
    chatExcerpt: string;
    context: string;
  };
  peerAppreciation: string;
}

export const representatives: Representative[] = [
  {
    id: 'hrithik-loganathan',
    name: 'Rithik Loganathan',
    semester: 1,
    semesterTitle: 'Semester 1: The Foundation',
    tenure: 'August 2025 – January 2026',
    roleTitle: 'Class Representative (Semester 1)',
    accentColor: '#38bdf8', // Sky Blue
    badge: 'The Pioneer & Bridge',
    quote: "Well guys, This is our group for the next 4 years! Feel free to share your thoughts!! May this group be a stress buster.",
    quoteTamil: "Namma irukkuradhu PSG 😂",
    bio: "On the very first night of college on August 13, 2025, Hrithik set the tone for the entire class with a message welcoming 81 students into what would become a second family. Whether saving everyone's numbers, coordinating bulk orders for English books (₹550) and Chemistry manuals (₹140) to save students hours in queues, or reassuring worried freshers about library attendance, Hrithik was the steady anchor of Semester 1.",
    stats: [
      { label: 'Verified Messages', value: '513' },
      { label: 'Bulk Orders Handled', value: '80+ Books' },
      { label: 'Key Clarifications', value: 'Library & CT Labs' },
      { label: 'Semester', value: 'Sem 01' },
    ],
    keyContributions: [
      {
        title: 'The Foundational Class Welcome',
        description: 'Initiated the primary vision of the class group as a safe, stress-busting, collaborative space on August 13, 2025 at 9:04 PM.',
        dateOrPeriod: 'August 13, 2025',
        impact: 'Transformed an unfamiliar classroom into an approachable community from Day 1.',
      },
      {
        title: 'Coordinating English Books & Manuals',
        description: 'Organized bulk purchases of English books (₹550) and Chemistry manuals (₹140), managing GPay and cash collection so students avoided book depot stockouts.',
        dateOrPeriod: 'August 20–24, 2025',
        impact: 'Saved classmates hours standing in campus queues and ensured timely academic materials for lab sessions.',
      },
      {
        title: 'Library Hours & Attendance Clarification',
        description: 'When students panicked over whether library hours required mandatory attendance before permanent ID cards arrived, he inquired directly with tutors and seniors.',
        dateOrPeriod: 'August 15, 2025',
        impact: 'Brought immediate calm with the legendary line: "Bcoz namma irukkuradhu PSG 😂".',
      },
      {
        title: 'Python Lab Mini Project Coordination',
        description: 'Structured the 10 mini-project teams with 6–8 members each, preventing overlap and ensuring no classmate was left without a team.',
        dateOrPeriod: 'November 11–14, 2025',
        impact: 'Full 100% team inclusion without peer disputes.',
      },
    ],
    signatureMoment: {
      headline: 'The Library Hours Relief',
      chatExcerpt: 'Guys, generally the library hours are free hours. If u are interested u can visit the library... not necessary to be in library hours. Ithu clg vara maatanga... Bcoz namma irukkuradhu PSG 😂',
      context: 'August 15, 2025 — When 81 freshers were anxious about college rules and missing attendance.',
    },
    peerAppreciation: 'Hrithik made the first terrifying days of college feel manageable. When we were completely clueless about book depots, lab manuals, and rules, he patiently gathered numbers, answered DMs, and kept everyone calm.'
  },
  {
    id: 'vishnu-priya',
    name: 'Vishnupriya',
    semester: 1,
    semesterTitle: 'Semester 1: The Foundation',
    tenure: 'August 2025 – January 2026',
    roleTitle: 'Class Representative (Semester 1)',
    accentColor: '#fbbf24', // Warm Amber
    badge: 'The Catalyst & Organizer',
    quote: "Hey guys.. I've got a lot of names and suggestions.. choose one! Infinite loopers, Kinda from python, Jubilee gems, Platinum crew, Gossip gurus...",
    quoteTamil: "Andha manasu tha sir kadavul 🙏",
    bio: "Vishnupriya literally laid the initial keystrokes of our class digital existence by creating the official unofficial WhatsApp group on August 13, 2025 at 12:21 PM. She guided students through early induction report requirements, alphabetized lab batches, secured printing codes like SIGMA229, and kept track of absentees so no classmate lost internal marks unjustly.",
    stats: [
      { label: 'Verified Messages', value: '475' },
      { label: 'Initiatives Started', value: 'Group Inception' },
      { label: 'Lab Roster Sheets', value: 'Alphabetized 81' },
      { label: 'Semester', value: 'Sem 01' },
    ],
    keyContributions: [
      {
        title: 'Creating the Class Communication Hub',
        description: 'Created the class WhatsApp group on August 13, 2025 at 12:21 PM and brainstormed creative class names to break the ice.',
        dateOrPeriod: 'August 13, 2025',
        impact: 'Established the single most important line of peer-to-peer communication for the next 4 years.',
      },
      {
        title: 'Induction & Python Lab Report Structuring',
        description: 'Clarified the 4–5 page induction report requirements and Python Flowgorithm observation notes with teachers.',
        dateOrPeriod: 'August 13–19, 2025',
        impact: 'Prevented classmates from submitting incomplete reports during initial faculty reviews.',
      },
      {
        title: 'Alphabetical Practical Batch Allotment',
        description: 'Created and managed the Google Sheets master directory to ensure fair, transparent practical groups and lab team distributions.',
        dateOrPeriod: 'August 25, 2025',
        impact: 'Allowed smooth practical batch divisions across E-block and J-block labs.',
      },
      {
        title: 'SIGMA229 Campus Printing Code',
        description: 'Arranged with the A-Block printing stall for students to print Chapter 4 lecture notes seamlessly using a class code.',
        dateOrPeriod: 'November 11, 2025',
        impact: 'Students received textbook prints quickly without confusion during exam preparation.',
      },
    ],
    signatureMoment: {
      headline: 'The Chemistry Lab Calculator Auction',
      chatExcerpt: 'Auction venue change panikonga😅! (When Vishnuvardhan started a bidding war on a lost calculator in Y201 Row 1 starting at ₹50 up to ₹30 Lakhs!)',
      context: 'October 15, 2025 — Balancing classroom discipline with genuine collegiate laughter.',
    },
    peerAppreciation: 'Vishnupriya always followed up with professors when the rest of the class was too hesitant to ask. Her attention to detail on test portions and lab documents saved us multiple times.'
  },
  {
    id: 'sharvesh',
    name: 'Sharvesh',
    semester: 2,
    semesterTitle: 'Semester 2: The Rhythm & The Road',
    tenure: 'January 2026 – July 2026',
    roleTitle: 'Class Representative (Semester 2)',
    accentColor: '#a855f7', // Electric Violet
    badge: 'The Voice & Advocate',
    quote: "Na bayangarama Kenji kettu kammiyana mark vanguna avungaluku mattum ketturukkenn... Atb guys!",
    quoteTamil: "Moongil Thottam - Melody Version ft. Sharvesh 🎵",
    bio: "Semester 2 brought intense engineering courses — C Programming, Engineering Graphics, Sensors, and Digital Design. Sharvesh balanced tough classroom logistics with pure warmth and humor. Famous for his impromptu vocal rendition of 'Moongil Thottam' that became a timeless class meme, Sharvesh also advocated fiercely for classmates struggling with C lab marks, pleaded with faculty for re-evaluations, and helped lead the unforgettable Ooty Industrial Visit.",
    stats: [
      { label: 'Verified Messages', value: '238' },
      { label: 'IV Destination', value: 'Ooty (RAC & Garden)' },
      { label: 'C Lab Marks Rescued', value: '15+ Students' },
      { label: 'Semester', value: 'Sem 02' },
    ],
    keyContributions: [
      {
        title: 'Ooty Industrial Visit Planning & Execution',
        description: 'Spearheaded student surveys, bus allotments (Bus 1 & Bus 2), and itinerary coordination for the Radio Astronomy Centre and Karnataka Garden trip on March 21, 2026.',
        dateOrPeriod: 'March 8–21, 2026',
        impact: 'Delivered the most memorable out-of-classroom bonding experience of our first year.',
      },
      {
        title: 'Fighting for Classmates in C Lab Evaluations',
        description: 'Personally approached faculty Veerakumar Sir to review low scores in the PAT portal and secure reconsiderations for 15+ students with score 5 or below.',
        dateOrPeriod: 'May 12, 2026',
        impact: 'Directly protected internal marks for classmates who were struggling.',
      },
      {
        title: 'The Legendary April Fools Compensation Prank',
        description: 'Told the class on April 1, 2026 that compensation classes were mandatory on Saturday, April 4th, sending hostel students into a hilarious scramble.',
        dateOrPeriod: 'April 1, 2026',
        impact: 'A cherished memory that everyone still talks about and laughs over.',
      },
      {
        title: 'Engineering Graphics & C Class Reminders',
        description: 'Constantly checked whether students had their mini-drafters, A2 sheets, and roller scales ready for G301 sessions.',
        dateOrPeriod: 'January – May 2026',
        impact: 'Prevented students from being sent out of EG lab due to missing tools.',
      },
    ],
    signatureMoment: {
      headline: 'The April Fools Saturday Prank',
      chatExcerpt: 'Guys, since this week’s Tuesday and Friday are holidays, compensation classes will be held on April 4th (working Saturday). Attendance is mandatory. Timetable will be shared shortly... [Vishnupriya: April fools ah thambi!? Rithik: Pala per saabam unna summa vidathuuu da ☠️]',
      context: 'April 1, 2026 — Masterfully pulling off a class-wide prank that fooled even the former reps.',
    },
    peerAppreciation: 'Sharvesh was approachable to anyone at any time. If someone had low internal marks or was terrified of failing C lab, Sharvesh would go speak to sir without hesitation and get them another chance.'
  },
  {
    id: 'thurika',
    name: 'Thurika',
    semester: 2,
    semesterTitle: 'Semester 2: The Rhythm & The Road',
    tenure: 'January 2026 – July 2026',
    roleTitle: 'Class Representative (Semester 2)',
    accentColor: '#ec4899', // Pink / Rose
    badge: 'The Vigilant Guardian',
    quote: "Guys Tomorrow, don't ask Anusha anything. She'll just say 'I don't know.' Write whatever you know. All the best for your exams.",
    quoteTamil: "Reminder! Forenoon sessions at Y 201, Afternoon at J 208",
    bio: "With 640 messages sent, Thurika was the heartbeat of Semester 2's daily academic life. Managing a relentless schedule of hall shifts (J208, G301, Y201, 3AI, AIR Lab), vocabulary tests, oral presentation sequences, and original 12th marksheet distributions, Thurika ensured nobody missed a deadline or sat in the wrong room. Her late-night 'survival guides' before the EP lab exam are legendary.",
    stats: [
      { label: 'Verified Messages', value: '640' },
      { label: 'Room Shifts Guided', value: '50+ Swaps' },
      { label: 'Vocabulary Tests Shared', value: '7 Weeks' },
      { label: 'Semester', value: 'Sem 02' },
    ],
    keyContributions: [
      {
        title: 'Mastering the Hall-Shifting Labyrinth',
        description: 'Provided pinpoint room updates across J-Block (J208, J310, J313), Y-Block (Y201), G-Block (G301, G308), and E-Block labs every single morning.',
        dateOrPeriod: 'Jan – May 2026',
        impact: 'Saved 81 classmates from wandering across the vast campus looking for elusive classrooms.',
      },
      {
        title: 'EP Lab CA2 Preparation & Survival Briefing',
        description: 'Outlined the exact components, logic gates (AND 7408, OR 7432, XOR 7486), and experimental steps to follow, warning the class how to navigate tough invigilation.',
        dateOrPeriod: 'May 14–28, 2026',
        impact: 'Enabled both Batch 1 and Batch 2 to navigate stressful practical examinations with confidence.',
      },
      {
        title: 'Original 12th Marksheet Distribution',
        description: 'Coordinated with the academic section (A206) and Book Depot to return original certificates safely to every student.',
        dateOrPeriod: 'March 4, 2026',
        impact: 'Ensured high-value personal legal documents were safely handed over without losses.',
      },
      {
        title: 'Oral Presentation PPT & Batch Schedules',
        description: 'Collected slides, divided the class into balanced batches, and liaised with English faculty so that every student received a fair turn to present.',
        dateOrPeriod: 'February 3–9, 2026',
        impact: 'Removed presentation chaos and ensured orderly evaluation.',
      },
    ],
    signatureMoment: {
      headline: 'The EP Lab Examination Warning',
      chatExcerpt: 'Tomorrow in the lab exam, whatever you know, write it. Don’t ask Anusha mam anything and avoid unnecessary activities like using mobile phones because Anusha mam is already angry, so she may complain to the HOD. And Nagasudha mam will also be there.',
      context: 'May 28, 2026 at 9:05 PM — Pragmatic, protective advice the night before the hardest lab exam.',
    },
    peerAppreciation: 'Thurika never let anything slip through the cracks. If a class was cancelled or rescheduled at 7:30 AM, she would post it before students left their hostel rooms. Her punctuality kept the class afloat.'
  },
  {
    id: 'Abinayasri',
    name: 'Abinayasri',
    semester: 3,
    semesterTitle: 'Semester 3: The Resolve',
    tenure: 'August 2026 – Present',
    roleTitle: 'Class Representative (Semester 3)',
    accentColor: '#10b981', // Emerald Green
    badge: 'The Soul & Mobilizer',
    quote: "Let's be together and win together. Let's prove our new HoD and our tutor He is much more than efficient for us. Let's make him proud. ✨",
    quoteTamil: "VK sir pasanga da namma... ❤️‍🩹🫂",
    bio: "Semester 3 tested the class with heavy theory — Discrete Structures, Linear Algebra, Computer Organization (COA), and Data Structures. On September 3, 2026, when discipline issues threatened the tutor's standing, Abinayasri wrote an unforgettable, heartfelt message that rallied 80+ classmates around shared responsibility and pride in being 'VK sir pasanga'. With 632 messages, she curated central study drives, managed lab discipline, and organized continuous exam schedules.",
    stats: [
      { label: 'Verified Messages', value: '632' },
      { label: 'Drive Resources Curated', value: '50+ PPTs & PYQs' },
      { label: 'Rallied Class Unity', value: 'Sept 3 Manifesto' },
      { label: 'Semester', value: 'Sem 03' },
    ],
    keyContributions: [
      {
        title: 'The September 3 Unity Call',
        description: 'Wrote an emotional, respectful plea urging classmates to honor our tutor Veerakumar Sir and unite as a responsible batch when faculty complaints arose.',
        dateOrPeriod: 'September 3, 2026, 6:36 PM',
        impact: 'Considered the defining emotional moment of Semester 3. Transformed class culture overnight.',
      },
      {
        title: 'Centralized Faculty Material Drive',
        description: 'Consolidated all lecture notes, tutorial problem sheets, and PYQs into a well-structured Google Drive accessible to every student.',
        dateOrPeriod: 'October 7, 2026',
        impact: 'Ended the frantic search for materials the night before exams.',
      },
      {
        title: 'Discrete Structures & Linear Algebra Coordination',
        description: 'Handled Rosen 8th Edition textbook printouts, coordinated 20-sum assignment submissions, and arranged tutorial paper reviews.',
        dateOrPeriod: 'August – October 2026',
        impact: 'Ensured assignments were completed on time to protect internal marks.',
      },
      {
        title: 'Managing Lab Discipline & Lateral Integration',
        description: 'Welcomed newly joined lateral entry classmates, shared sample report formats, and ensured silence during 3AI and AIR lab sessions.',
        dateOrPeriod: 'August 2026',
        impact: 'Lateral students were integrated immediately with zero feeling of being outsiders.',
      },
    ],
    signatureMoment: {
      headline: 'The "Make Him Proud" Manifesto',
      chatExcerpt: 'Hi guys.. Can you kindly spend some time to read this...? Pls ellarum knjm namma sir soldra badi behave panalaama.. for sir\'s sake. He is saying "iniyum complain vandha I will step down"... His responsibility is only to teach us.. but he is doing beyond that only for us. Let\'s be together and win together. Let\'s make him proud. ✨',
      context: 'September 3, 2026 at 6:36 PM — When the entire class pledged solidarity to our tutor.',
    },
    peerAppreciation: 'Abinayasri speaks with genuine care for the class. She doesn’t just forward circulars; she explains why something matters. Her message on Sept 3 reminded all of us why our class matters.'
  },
  {
    id: 'sachin-pranav',
    name: 'Sachin Pranav',
    semester: 3,
    semesterTitle: 'Semester 3: The Resolve',
    tenure: 'August 2026 – Present',
    roleTitle: 'Class Representative (Semester 3)',
    accentColor: '#f97316', // Bright Orange
    badge: 'The Enforcer & Anchor',
    quote: "Guys, sir strictly said that no one should come to class before 10:30 AM tomorrow. ⚠️",
    quoteTamil: "Kandipa ithu nadakum... Me and abinaya spoke with sir.",
    bio: "Partnering with Abinayasri in Semester 3, Sachin Pranav brought steady communication and decisive action. Whether coordinating CSEA events, launching the Design Thinking Club interest drive, managing attendance rosters for inaugural functions, or standing with Abinaya during meetings with faculty and the HoD, Sachin provided clear, authoritative direction that classmates trusted.",
    stats: [
      { label: 'Verified Messages', value: '72' },
      { label: 'Club Drives Led', value: 'Design Thinking Club' },
      { label: 'Exam Timetables Synced', value: 'Sem 03 Retests' },
      { label: 'Semester', value: 'Sem 03' },
    ],
    keyContributions: [
      {
        title: 'Direct Faculty Representation',
        description: 'Met directly with Veerakumar sir to resolve classroom tensions and opened direct lines of communication between students and the department.',
        dateOrPeriod: 'September 2, 2026, 8:34 PM',
        impact: 'Reassured classmates: "Me and abinaya spoke with sir. You guys can text or call sir regarding any official matters as usual."',
      },
      {
        title: 'CSEA & Technical Event Mobilization',
        description: 'Coordinated attendance and registrations for the CSEA Inauguration, Hackastorm, and Commitcon hackathons.',
        dateOrPeriod: 'August – October 2026',
        impact: 'Ensured full department participation and secured attendance exemptions for student volunteers.',
      },
      {
        title: 'Design Thinking Club Launch',
        description: 'Facilitated the recruitment and interest form dissemination for the newly formed Design Thinking Club under CSEA.',
        dateOrPeriod: 'August 26 – Sept 5, 2026',
        impact: 'Opened innovation and hackathon opportunities to non-technical and technical students alike.',
      },
      {
        title: 'Strict Schedule Buffer Management',
        description: 'Prevented students from entering campus during restricted morning evaluation windows to avoid disciplinary reprimands.',
        dateOrPeriod: 'August 28 & Sept 16, 2026',
        impact: 'Protected classmates from unnecessary disciplinary inquiries by HoD/faculty.',
      },
    ],
    signatureMoment: {
      headline: 'The "Dictator Sachin" Teasing',
      chatExcerpt: 'When Sachin toggled group settings to "Only admins can send messages" back and forth during important club announcements on August 26, classmates jokingly exclaimed: "Dictator sachin! @~Sachin. M the 🐐🐐".',
      context: 'August 26, 2026 — Friendly banter highlighting the affectionate rapport between rep and class.',
    },
    peerAppreciation: 'Sachin is calm under pressure. When there were confusing timetable instructions or last-minute faculty changes, Sachin clarified things directly with sir and gave us clear, final instructions.'
  }
];

export interface ChatMessage {
  id: string;
  sender: string;
  role?: string;
  isRep?: boolean;
  time: string;
  text: string;
  isImage?: boolean;
  isVideo?: boolean;
}

export interface ChatThread {
  id: string;
  title: string;
  semester: 1 | 2 | 3;
  date: string;
  topic: string;
  editorialCaption: string;
  messages: ChatMessage[];
}

export const chatThreads: ChatThread[] = [
  {
    id: 'thread-group-naming',
    title: 'The Group Name Brainstorm (Day 1)',
    semester: 1,
    date: '13 August 2025',
    topic: 'Freshers breaking the ice on their very first evening in college',
    editorialCaption: 'Before this conversation, 81 students were just names on an admission list. Within 30 minutes of creative teasing and name suggestions, our collective sense of humour and identity was born.',
    messages: [
      {
        id: 'gn-1',
        sender: 'Vishnupriya',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '8:19 pm',
        text: "Hey guys.. I've got a lot of names and suggestions.. you guys seems to be very creative 😅.. I'll list down.. choose one and make sure you name it like this ~ '__-CSE UNOFFICIAL'\n\nInfinite loopers\nKinda from python\nJubilee gems\nPlatinum crew\nGossip gurus\nPSG PRODUCTS Loading..\n\nChoose one pah!"
      },
      {
        id: 'gn-2',
        sender: 'Classmate',
        time: '8:21 pm',
        text: 'Kinda from Python sounds good!!'
      },
      {
        id: 'gn-3',
        sender: 'Classmate',
        time: '8:25 pm',
        text: 'Guyss what about "Parama Padi daa" 😂'
      },
      {
        id: 'gn-4',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '8:26 pm',
        text: 'Athula onnu illa keela potru 😅'
      },
      {
        id: 'gn-5',
        sender: 'Vishnuvardhan N',
        time: '8:26 pm',
        text: 'It sounds good for description actually'
      },
      {
        id: 'gn-6',
        sender: 'Classmate',
        time: '8:29 pm',
        text: 'Cse payaluga 😅'
      },
      {
        id: 'gn-7',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '9:04 pm',
        text: 'Well guys, This is our group for the next 4 years! Feel free to share your thoughts!! May this group be a stress buster. You can use this group if you have doubts also!!! Lets have a fun and chill journey!! 🎉'
      }
    ]
  },
  {
    id: 'thread-library-hours',
    title: 'The Great Library Attendance Panic',
    semester: 1,
    date: '15 August 2025',
    topic: 'Freshers confused about whether library periods were mandatory or free',
    editorialCaption: 'High school instincts made freshers fear attendance penalties for free periods. Hrithik personally reached out to senior mentors and the class tutor, giving everyone clarity with typical collegiate humour.',
    messages: [
      {
        id: 'lib-1',
        sender: 'Classmate',
        time: '5:37 pm',
        text: 'Does library hour has mandatory attendance?'
      },
      {
        id: 'lib-2',
        sender: 'Thurika',
        time: '5:37 pm',
        text: 'Yes... I think'
      },
      {
        id: 'lib-3',
        sender: 'Classmate',
        time: '5:40 pm',
        text: 'I thought those (LIB) were free periods 🤦🏼‍♂️'
      },
      {
        id: 'lib-4',
        sender: 'Classmate',
        time: '5:41 pm',
        text: "Let's wait, we have two reps. They will answer it 🙂"
      },
      {
        id: 'lib-5',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '5:44 pm',
        text: 'I have passed on the message! Once i receive the info will intimate'
      },
      {
        id: 'lib-6',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '6:30 pm',
        text: 'Guys, library hours are free hours. No attendance. We can use it for any productive purpose.'
      },
      {
        id: 'lib-7',
        sender: 'Classmate',
        time: '8:25 pm',
        text: 'One doubt, schl la phy teacher leave na, maths teacher clss ku vara mari, library period yaarum vara matangalae... 😅😅'
      },
      {
        id: 'lib-8',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '8:26 pm',
        text: 'Ithu oru nalla kelvi 😅... anaa ithu clg vara maatanga... Bcoz namma irukkuradhu PSG 😂'
      }
    ]
  },
  {
    id: 'thread-calculator-auction',
    title: 'The ₹30 Lakh Calculator Auction',
    semester: 1,
    date: '15 October 2025',
    topic: 'A scientific calculator forgotten in Chemistry Lab sparks an imaginary stock exchange',
    editorialCaption: 'College isn\'t just assignments and tutorials — it\'s these spontaneous 10-minute bursts of absurdity that turn an ordinary classroom into an unforgettable memory.',
    messages: [
      {
        id: 'auc-1',
        sender: 'Vishnuvardhan N',
        time: '12:06 pm',
        text: 'Calculator found in chemistry lab.... Contact kavin for recovery'
      },
      {
        id: 'auc-2',
        sender: 'Vishnuvardhan N',
        time: '12:09 pm',
        text: 'If nobody comes to recover it before 1:40, auction will begin at 1:45 at Y201 1 ROW. Bidders are welcome base price 50 rupees'
      },
      {
        id: 'auc-3',
        sender: 'Prem',
        time: '12:18 pm',
        text: '55'
      },
      {
        id: 'auc-4',
        sender: 'Rehaan',
        time: '12:18 pm',
        text: '60'
      },
      {
        id: 'auc-5',
        sender: 'Prem',
        time: '12:18 pm',
        text: '70.2'
      },
      {
        id: 'auc-6',
        sender: 'Santhosh',
        time: '12:19 pm',
        text: '3000000'
      },
      {
        id: 'auc-7',
        sender: 'Rehaan',
        time: '12:19 pm',
        text: 'Sold 🗣🗣🗣'
      },
      {
        id: 'auc-8',
        sender: 'Vishnupriya',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '12:23 pm',
        text: 'Auction venue change panikonga😅! No more confusion, 1st batch students go to english lab and come to Y202!'
      }
    ]
  },
  {
    id: 'thread-april-fools',
    title: 'Sharvesh\'s Saturday Compensation Prank',
    semester: 2,
    date: '1 April 2026',
    topic: 'Sharvesh weaponizing Good Friday weekend plans for the ultimate April Fool prank',
    editorialCaption: 'Hostellers who had booked sleeper buses home froze in shock when their class representative posted a deadpan notice claiming Saturday attendance was strictly mandatory.',
    messages: [
      {
        id: 'af-1',
        sender: 'Sharvesh',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '4:40 pm',
        text: 'Guys, since this week’s Tuesday and Friday are holidays, compensation classes will be held on April 4th (working Saturday). Attendance is mandatory. The timetable will be shared shortly.'
      },
      {
        id: 'af-2',
        sender: 'Vishnupriya',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '4:41 pm',
        text: 'April fools ah thambi!?'
      },
      {
        id: 'af-3',
        sender: 'Vishnupriya',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '4:42 pm',
        text: 'Official circular pls'
      },
      {
        id: 'af-4',
        sender: 'Sharvesh',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '4:43 pm',
        text: 'Therinja seriiii 😂 I did my part! Dedicated to those planning to go home fr good Friday'
      },
      {
        id: 'af-5',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '4:45 pm',
        text: 'Pala per saabam unna summa vidathuuu da ☠️'
      },
      {
        id: 'af-6',
        sender: 'Sharvesh',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '4:46 pm',
        text: 'Summa ve mosamana nelamiai daa 😂'
      }
    ]
  },
  {
    id: 'thread-ep-lab-warning',
    title: 'The EP Lab Night Before Briefing',
    semester: 2,
    date: '28 May 2026',
    topic: 'Navigating logic gates, IC pin numbers, and strict faculty scrutiny',
    editorialCaption: 'Engineering Practice lab exam was universally known as a gauntlet. Thurika didn\'t sugarcoat reality — she gave everyone the exact pin configurations and survival strategy.',
    messages: [
      {
        id: 'ep-1',
        sender: 'Thurika',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '8:30 am',
        text: 'Experiments 4, 5, 7, 8, flip-flops, and latches are the experiments you have to perform in the lab. The remaining experiments will be asked for the viva.'
      },
      {
        id: 'ep-2',
        sender: 'Thurika',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '8:31 am',
        text: 'Guys Tomorrow, don’t ask Anusha anything. She’ll just say "I don’t know." Write whatever you know.'
      },
      {
        id: 'ep-3',
        sender: 'Sharvesh',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '10:55 am',
        text: 'Since ma\'am told to follow G2 idha paathu padichukonga. Atb guys'
      },
      {
        id: 'ep-4',
        sender: 'Thurika',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '9:05 pm',
        text: 'Tomorrow in the lab exam, whatever you know, write it. Don’t ask Anusha mam anything and avoid unnecessary activities like using mobile phones because Anusha mam is already angry, so she may complain to the HOD. And Nagasudha mam will also be there.'
      },
      {
        id: 'ep-5',
        sender: 'Sujith E',
        time: '8:27 am',
        text: 'ic logic gates numbers:\nbasic: AND(7408), OR(7432), NOT(7404)\nuniversal: NAND(7400), NOR(7402)\nspecial: XOR(7486), JK FLIPFLOP(7476), D FLIPFLOP(7474)'
      }
    ]
  },
  {
    id: 'thread-sept3-unity',
    title: 'The September 3 Manifesto ("VK Sir Pasanga")',
    semester: 3,
    date: '3 September 2026',
    topic: 'Abinayasri rallying the class around unity and respect for our tutor',
    editorialCaption: 'When classroom discipline issues threatened tutor Veerakumar Sir\'s standing, Abinayasri penned this heartfelt, candid message. It wasn\'t an official notice — it was a plea from a friend to her friends.',
    messages: [
      {
        id: 's3-1',
        sender: 'Abinayasri',
        role: 'Class Representative (Sem 3)',
        isRep: true,
        time: '6:36 pm',
        text: 'Hi guys.. Can you kindly spend some time to read this...? This is not about studies.. but it is as important as it is. Pls ellarum knjm namma sir soldra badi behave panalaama.. just only for 2 years.. after that we won\'t come to college that much... For sir\'s sake. Just college timing la crt ah irukalaam... I am not saying this to hurt or anything. I just felt bad for our tutor. He is saying "iniyum complain vandha I will step down" , so please atleast avarukaaga mattum aachu namma nalla padichi nalla name vaangi tharalaam. He is not expecting us to achieve very big. He wants us to get good name from all faculties.. get placed in a good job. His responsibility is only to teach us.. but he is doing beyond that only for us. I hope everyone will understand this. Let\'s be together and win together. Let\'s prove our new HoD and our tutor He is much more than efficient for us. Let\'s make him proud.✨'
      },
      {
        id: 's3-2',
        sender: 'Abinayasri',
        role: 'Class Representative (Sem 3)',
        isRep: true,
        time: '6:40 pm',
        text: 'If I said something wrong or something which bothers you, I am really sorry. But I am just hoping that everything will change from now on. Let\'s prove our maths teachers that we won\'t fail. We have so many sources available for us. Let\'s work how we worked for digital design in the last two months before the exam. If we can learn that and pass that within two months or 1 months, we can also tackle this , if we do it from the beginning.'
      },
      {
        id: 's3-3',
        sender: 'Thurika',
        role: 'Class Representative (Sem 2)',
        isRep: true,
        time: '6:42 pm',
        text: 'Yeah we will grow together'
      },
      {
        id: 's3-4',
        sender: 'Deepa T',
        time: '7:28 pm',
        text: 'Hi guys ,I am Deepa. Hope you guys remember me. I don\'t know what the problem is. Veerakumar Sir is a very good tutor and he is supportive too. So everyone work together and make him feel proud. It\'s your responsibility guys.'
      },
      {
        id: 's3-5',
        sender: 'Rithik Loganathan',
        role: 'Class Representative (Sem 1)',
        isRep: true,
        time: '7:32 pm',
        text: 'Grp feels wholesome guyss for the first time 🫶🏻'
      },
      {
        id: 's3-6',
        sender: 'Sachin Pranav',
        role: 'Class Representative (Sem 3)',
        isRep: true,
        time: '7:57 pm',
        text: 'Really happy to see all this. Kandipa ithu nadakum..'
      }
    ]
  }
];

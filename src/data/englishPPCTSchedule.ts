import { Grade, LessonActivity } from "../types";
import { EnglishLessonDetail } from "./englishLessonDetails";

export interface PPCTLessonInfo {
  periodNum: number;
  lessonTitle: string;
  unitName: string;
  theme: string;
  vocabulary: Array<{ word: string; ipa: string; meaning: string }>;
  sentencePatterns: string[];
  phonicsSound: string;
  gameName: string;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  integrationNotes: string;
  activities: LessonActivity[];
}

// ==============================================================================
// 1. GRADE 3 OFFICIAL PPCT LESSONS (GLOBAL SUCCESS MOET STANDARD)
// ==============================================================================
const GRADE_3_WEEK_3_LESSONS: Record<number, PPCTLessonInfo> = {
  // Tiết 9: Unit 1: Hello - Lesson 3 (1,2,3)
  1: {
    periodNum: 9,
    lessonTitle: "Unit 1: Hello - Lesson 3 (1,2,3)",
    unitName: "Unit 1: Hello",
    theme: "Greetings and Sounds /h/, /b/",
    vocabulary: [
      { word: "hello", ipa: "/həˈləʊ/", meaning: "formal friendly greeting" },
      { word: "bye", ipa: "/baɪ/", meaning: "informal farewell expression" },
      { word: "Ben", ipa: "/ben/", meaning: "character name" },
      { word: "Mai", ipa: "/maɪ/", meaning: "character name" },
      { word: "Minh", ipa: "/mɪn/", meaning: "character name" },
      { word: "Lucy", ipa: "/ˈluːsi/", meaning: "character name" }
    ],
    sentencePatterns: [
      "Hello, Ben.",
      "Bye, Ben."
    ],
    phonicsSound: "Sounds of the letters h and b in isolation and in words 'hello' and 'bye'",
    gameName: "Numbers 1-10 & Pass the ball",
    specificCompetencies: [
      "Correctly repeat the sounds of the letters h and b in isolation, in the words 'hello' and 'bye', and in the sentences 'Hello, Ben.' and 'Bye, Ben.' with proper pronunciation and intonation.",
      "Identify the target words 'hello' and 'bye' while listening to audio tracks.",
      "Say the chant with correct rhythm, pronunciation, and rhythmic hand-clapping.",
      "Use greetings and personal names in communicative situations with confidence."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 3 (Page 14), Teacher's Guide, Audio tracks 12, 13, 14.",
      "Flashcards of Ben, Mai, Minh, Lucy, and letter cards h and b.",
      "Computer, interactive projector / Smart TV, external speaker."
    ],
    studentMaterials: [
      "Pupil's Book Grade 3, notebook, pencil, and rubber."
    ],
    integrationNotes: "Tích hợp Năng lực số (NLS 1.2.CB1a): Sử dụng thiết bị âm thanh và học liệu số tương tác hoclieu.vn.",
    activities: [
      {
        id: "g3-p9-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Attract pupils' attention and review numbers 1-10 through an engaging warm-up game.
- Procedure:
  * Greet the class warmly: "Good morning/afternoon, class!"
  * Game: Numbers (1 to 10). Divide the class into 4 groups.
  * Teacher displays numbers on the screen. Representatives from groups race to call out or click the correct number.
  * Praise the winners and lead into Lesson 3: "Today, we will learn the sounds of letters h and b!"`,
        studentActivity: `- Pupils stand up and greet the teacher in chorus.
- Listen attentively to game rules, look at numbers on screen, and participate actively in teams.
- Cheer for classmates and open the Pupil's Book to page 14.`
      },
      {
        id: "g3-p9-act2",
        name: "2. Knowledge Construction (10 minutes) - Activity 1: Listen and repeat",
        teacherActivity: `- Objective: Correctly repeat the sounds of letters h and b in isolation, in words 'hello', 'bye', and in sentences 'Hello, Ben.', 'Bye, Ben.'.
- Procedure:
  * Step 1: Draw pupils' attention to the letter h, the word 'hello', and the sentence 'Hello, Ben.'. Play Audio Track 12. Guide pupils to notice the sound /h/.
  * Step 2: Draw attention to the letter b, the word 'bye', and the sentence 'Bye, Ben.'. Play Audio Track 12. Guide pupils to notice the sound /b/.
  * Step 3: Play the recording again and let pupils listen and repeat chorally, row by row, and individually.
  * Step 4: Invite individual pupils to read aloud in front of the class; praise good pronunciation and gently correct mistakes.`,
        studentActivity: `- Pupils look at the board and book page 14.
- Listen carefully to Track 12 and observe the teacher's mouth shape for sounds /h/ and /b/.
- Repeat the sounds, words, and sentences in chorus, in small groups, and individually.
- Stand up to read aloud with confidence when invited by the teacher.`
      },
      {
        id: "g3-p9-act3",
        name: "3. Practice (12 minutes) - Activity 2: Listen and circle & Activity 3: Let's chant",
        teacherActivity: `- Objective: Identify target words while listening, and say the chant with correct pronunciation and natural rhythm.
- Procedure:
  * Activity 2 (Listen and circle):
    + Direct pupils' attention to items 1 and 2 (Track 13). Elicit the options.
    + Play recording twice. Pupils listen and circle the correct letter (Key: 1. c, 2. a).
    + Have pupils swap books to peer check; confirm the correct answers on screen.
  * Activity 3 (Let's chant):
    + Display the chant on the board (Track 14). Play the recording line by line.
    + Model rhythmic hand-clapping: "Hello. I'm Ben. / Hi, Ben. I'm Mai...".
    + Guide the whole class to chant together, then divide into two groups to chant alternately.`,
        studentActivity: `- Listen to Track 13 attentively and circle the correct options in their books.
- Swap books with partners to cross-check answers under the teacher's guidance.
- Read the chant lyrics on page 14; listen to Track 14 and clap hands rhythmically.
- Chant aloud with energy in chorus and in alternating groups.`
      },
      {
        id: "g3-p9-act4",
        name: "4. Production & Wrap-up (8 minutes)",
        teacherActivity: `- Objective: Consolidate learned sounds /h/, /b/ and chant lyrics; assign meaningful homelink.
- Procedure:
  * Game: Pass the ball!
    + Play music; pupils pass a soft ball around the classroom. When the music stops, the pupil holding the ball says a word starting with /h/ or /b/ (e.g. 'hello', 'bye', 'Ben') and a sentence.
  * Core values: Remind pupils to always greet friends and teachers politely.
  * Homelink: Practise pronouncing the sounds /h/ and /b/ and recite the chant at home.`,
        studentActivity: `- Pass the ball eagerly while music plays; when it stops, say the target sound, word, and sentence clearly.
- Note down the homelink tasks in student notebooks.
- Wave and say goodbye to the teacher: "Goodbye, teacher! See you again!"`
      }
    ]
  },

  // Tiết 10: Unit 1: Hello - Lesson 3 (4,5,6)
  2: {
    periodNum: 10,
    lessonTitle: "Unit 1: Hello - Lesson 3 (4,5,6)",
    unitName: "Unit 1: Hello",
    theme: "Reading, Writing & Project: Pupil Card",
    vocabulary: [
      { word: "pupil", ipa: "/ˈpjuːpl/", meaning: "primary school learner" },
      { word: "card", ipa: "/kɑːd/", meaning: "rectangular identification card" },
      { word: "school", ipa: "/skuːl/", meaning: "place of education" },
      { word: "class", ipa: "/klɑːs/", meaning: "group of pupils" }
    ],
    sentencePatterns: [
      "Hi. I'm Lucy. -> Hello, Lucy. I'm [Minh].",
      "How are you? -> Fine, thank you."
    ],
    phonicsSound: "Consolidation of greeting sounds /h/ and /b/",
    gameName: "Chinese whispers & Project presentation",
    specificCompetencies: [
      "Read four sentences and choose the correct responses with 100% accuracy.",
      "Read, understand, and complete three written exchanges with personal information.",
      "Make a neat pupil card (Name, Class, School) and use it to introduce oneself to classmates.",
      "Demonstrate autonomy, self-learning, and respectful peer collaboration."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 3 (Page 15), Teacher's Guide.",
      "Sample pupil cards, colored paper, markers, scissors, adhesive tape.",
      "Projector, digital slides on hoclieu.vn."
    ],
    studentMaterials: [
      "Pupil's Book, notebook, colored markers, blank cards for project."
    ],
    integrationNotes: "Tích hợp Giáo dục STEM & Khéo tay: Tự làm thẻ học sinh (Pupil card) và tự tin giới thiệu bản thân.",
    activities: [
      {
        id: "g3-p10-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Revise vocabulary and the chant of Unit 1 to energize the class.
- Procedure:
  * Greet class cheerfully.
  * Play Audio Track 14 (Chant on page 14). Cover some keywords on the board.
  * Have pupils say the chant by heart with hand clapping and body movements.`,
        studentActivity: `- Greet the teacher in English.
- Chant along energetically, recalling covered words from memory.
- Clap hands to the rhythm and sit down ready for the new lesson.`
      },
      {
        id: "g3-p10-act2",
        name: "2. Practice (12 minutes) - Activity 4: Read and circle",
        teacherActivity: `- Objective: Read sentences and circle the correct responses.
- Procedure:
  * Direct pupils to Activity 4 on page 15. Explain the task: read each sentence (1-4) and circle option a or b.
  * Give pupils 3 minutes to read silently and complete the exercise individually.
  * Guide checking: Call pupils to read aloud their chosen sentences. (Key: 1. b, 2. a, 3. a, 4. b).
  * Confirm answers on the screen and give feedback.`,
        studentActivity: `- Look at page 15, read items 1 to 4 carefully.
- Circle the correct options (a or b) independently in their books.
- Read aloud the completed sentences when called; explain their choices.
- Swap books with desk-mates to cross-check answers.`
      },
      {
        id: "g3-p10-act3",
        name: "3. Production (10 minutes) - Activity 5: Let's write",
        teacherActivity: `- Objective: Read, understand, and complete three written exchanges with personal information.
- Procedure:
  * Direct pupils to Activity 5. Point to exchange 1, 2, and 3.
  * Model exchange 1: "Hi. I'm Lucy." -> Elicit the response: "Hello, Lucy. I'm [Pupil's name]."
  * Let pupils write their own names and answers in their books.
  * Game: Chinese whispers! Whisper greeting exchanges down rows to check communicative speed and accuracy.`,
        studentActivity: `- Look at the three exchanges in Activity 5.
- Write their personal names and appropriate greeting responses neatly into their books.
- Read their completed exchanges aloud with their partners in pairs.
- Play Chinese whispers enthusiastically with row members.`
      },
      {
        id: "g3-p10-act4",
        name: "4. Project & Wrap-up (8 minutes) - Activity 6: Project (Pupil card)",
        teacherActivity: `- Objective: Create a personalized pupil card and introduce oneself to classmates.
- Procedure:
  * Show a sample pupil card (Name: ..., Class: 3, School: Primary School).
  * Guide pupils to write their info and draw/decorate their card.
  * Invite 3-4 pupils to stand in front of the class, hold up their card, and present: "Hello, everyone. My name is... I am in Class 3...".
  * Homelink: Finish decorating the pupil card and review Unit 1.`,
        studentActivity: `- Take out blank cards, write personal name, class, and school; decorate neatly.
- Rehearse the presentation in pairs.
- Present cards confidently in front of the whole class.
- Listen to teacher's praise and write down homelink.`
      }
    ]
  },

  // Tiết 11: Unit 2: Our names - Lesson 1 (1,2,3)
  3: {
    periodNum: 11,
    lessonTitle: "Unit 2: Our names - Lesson 1 (1,2,3)",
    unitName: "Unit 2: Our names",
    theme: "Asking and Answering About Names",
    vocabulary: [
      { word: "name", ipa: "/neɪm/", meaning: "given personal name" },
      { word: "what", ipa: "/wɒt/", meaning: "question word for things" },
      { word: "your", ipa: "/jɔː/", meaning: "belonging to you" },
      { word: "my", ipa: "/maɪ/", meaning: "belonging to me" },
      { word: "Mary", ipa: "/ˈmeəri/", meaning: "character name" },
      { word: "Bill", ipa: "/bɪl/", meaning: "character name" }
    ],
    sentencePatterns: [
      "What's your name? -> My name's [Mary / Bill / Linh / Nam]."
    ],
    phonicsSound: "Intonation in question 'What's your name?' and falling tone in 'My name's...'",
    gameName: "Spelling Bee & Line-up Name Game",
    specificCompetencies: [
      "Understand and correctly repeat sentences in communicative contexts asking and answering about names.",
      "Use target structure 'What's your name? - My name's...' fluently in authentic classroom interaction.",
      "Listen, point, and pronounce names with natural English rhythm and intonation."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 3 (Page 16), Audio tracks 15, 16.",
      "Name tags, flashcards of characters (Mary, Bill, Linh, Nam).",
      "Projector, digital flashcards on hoclieu.vn."
    ],
    studentMaterials: [
      "Pupil's Book, notebook, pen, pencil."
    ],
    integrationNotes: "Tích hợp GD kỹ năng giao tiếp: Tự tin xưng tên và hỏi tên bạn mới một cách lịch sự, thân thiện.",
    activities: [
      {
        id: "g3-p11-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Create a lively learning atmosphere and review the English alphabet.
- Procedure:
  * Greet the class: "Hello! Welcome to Unit 2: Our names!"
  * Play the Alphabet Song video; have pupils sing along and dance to the rhythm.
  * Quick game: Spelling Bee. Call out a letter; pupils say a word starting with it.`,
        studentActivity: `- Greet the teacher happily.
- Sing the Alphabet Song with energetic hand gestures.
- Participate in the Spelling Bee game attentively.`
      },
      {
        id: "g3-p11-act2",
        name: "2. Knowledge Construction (10 minutes) - Activity 1: Look, listen and repeat",
        teacherActivity: `- Objective: Introduce the question 'What's your name?' and answer 'My name's...'.
- Procedure:
  * Display pictures a and b on the screen (Track 15).
  * Elicit characters: "Who is this? - It's Ben and Mary."
  * Play Track 15 twice. Have pupils listen and repeat sentence by sentence.
  * Write the target structure on the board, highlighting contraction 'What's' = 'What is'.`,
        studentActivity: `- Look at the pictures, listen to Track 15 attentively.
- Repeat the dialogue in chorus, in groups, and in pairs.
- Note the sentence structure 'What's your name? - My name's...' in notebooks.`
      },
      {
        id: "g3-p11-act3",
        name: "3. Practice (12 minutes) - Activity 2: Listen, point and say",
        teacherActivity: `- Objective: Practice asking and telling names using picture cues (Mary, Bill, Linh, Nam).
- Procedure:
  * Teach the four names using flashcards: Mary, Bill, Linh, Nam.
  * Model the question and answer with a good student: "What's your name? - My name's Mary."
  * Guide pupils to point at each picture and practice in pairs (Student A asks, Student B answers, then swap).
  * Monitor and support struggling pupils with pronunciation.`,
        studentActivity: `- Look at pictures a, b, c, d on page 16; point to each character and say the name.
- Practice in pairs:
  + Student A: "What's your name?"
  + Student B: "My name's Bill."
- Swap roles and practice with all 4 picture cues.`
      },
      {
        id: "g3-p11-act4",
        name: "4. Production & Wrap-up (8 minutes) - Activity 3: Let's talk",
        teacherActivity: `- Objective: Freely ask and answer about names in real classroom context.
- Procedure:
  * Activity 3: Invite pupils to mingle around the classroom, ask 3 different classmates their real names using 'What's your name? - My name's...'.
  * Game: Line-up Name Game. Call 5 pupils to arrange themselves alphabetically by first name.
  * Homelink: Ask 3 family members their names in English and prepare Lesson 1 (4,5,6).`,
        studentActivity: `- Stand up, move politely around the class, ask and answer real names with classmates.
- Participate in the Line-up Name Game enthusiastically.
- Record homelink tasks in notebooks and say goodbye to the teacher.`
      }
    ]
  },

  // Tiết 12: Unit 2: Our names - Lesson 1 (4,5,6)
  4: {
    periodNum: 12,
    lessonTitle: "Unit 2: Our names - Lesson 1 (4,5,6)",
    unitName: "Unit 2: Our names",
    theme: "Listening, Completing Text & Game",
    vocabulary: [
      { word: "tick", ipa: "/tɪk/", meaning: "mark with a tick symbol" },
      { word: "complete", ipa: "/kəmˈpliːt/", meaning: "fill in missing gaps" },
      { word: "read", ipa: "/riːd/", meaning: "look at and understand text" },
      { word: "play", ipa: "/pleɪ/", meaning: "engage in game activity" }
    ],
    sentencePatterns: [
      "What's your name? -> My name's [Linh / Ben / Nam]."
    ],
    phonicsSound: "Consolidation of sentence rhythm and intonation",
    gameName: "Name Race & Pass the Secret",
    specificCompetencies: [
      "Listen and identify correct characters to tick corresponding pictures.",
      "Complete gapped dialogues with target words and read them aloud fluently.",
      "Participate actively in communicative classroom games."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 3 (Page 17), Audio track 17.",
      "Character cards, board markers, projector."
    ],
    studentMaterials: [
      "Pupil's Book, notebook, pen, pencil."
    ],
    integrationNotes: "Tích hợp Giáo dục quyền trẻ em: Mỗi đứa trẻ đều có quyền có họ tên và quốc tịch hợp pháp.",
    activities: [
      {
        id: "g3-p12-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Review the structure 'What's your name? - My name's...'.
- Procedure:
  * Greet the class: "Hello, class! How are you today?"
  * Quick Fire Dialogue: Point at random pupils and ask quickly: "What's your name?" Pupils respond rapidly.
  * Announce the lesson and write the title on the board.`,
        studentActivity: `- Greet the teacher in chorus.
- Respond quickly and accurately when the teacher asks their name.
- Open Pupil's Book to page 17.`
      },
      {
        id: "g3-p12-act2",
        name: "2. Practice (12 minutes) - Activity 4: Listen and tick",
        teacherActivity: `- Objective: Listen and identify correct picture cues.
- Procedure:
  * Direct pupils to Activity 4. Elicit characters in pictures 1a, 1b, 2a, 2b.
  * Play Audio Track 17 twice. Pupils listen and tick the correct boxes.
  * Replay audio to check answers with the class. (Key: 1. a, 2. b).`,
        studentActivity: `- Identify characters in the pictures before listening.
- Listen to Track 17 carefully and tick the correct boxes in their books.
- Compare answers with desk-mates and confirm with the teacher.`
      },
      {
        id: "g3-p12-act3",
        name: "3. Practice (10 minutes) - Activity 5: Look, complete and read",
        teacherActivity: `- Objective: Fill in missing words to complete four dialogues.
- Procedure:
  * Guide pupils to look at picture cues and read the gapped sentences in Activity 5.
  * Model item 1: "What's your name? - My name's ______ (Mary)."
  * Give pupils 3 minutes to complete items 2, 3, and 4 independently.
  * Call pairs of pupils to read the completed dialogues aloud.`,
        studentActivity: `- Read the text and look at pictures 1, 2, 3, 4 carefully.
- Write missing words into the gaps neatly.
- Read the dialogues aloud in pairs with natural intonation.`
      },
      {
        id: "g3-p12-act4",
        name: "4. Consolidation & Wrap-up (8 minutes) - Activity 6: Let's play",
        teacherActivity: `- Objective: Reinforce asking and answering names through the Name Race game.
- Procedure:
  * Organize Activity 6: Name Race Game.
  * Divide class into 2 teams. When teacher shows a character card, two team representatives race to ask and answer correctly: "What's your name? - My name's [Character]."
  * Award points and praise the winning team.
  * Homelink: Review vocabulary and practice asking family members' names.`,
        studentActivity: `- Form two competing teams and participate in Name Race enthusiastically.
- Speak loudly, clearly, and accurately to win points for their team.
- Note down homelink instructions and say goodbye.`
      }
    ]
  }
};

// ==============================================================================
// 2. GRADE 4 OFFICIAL PPCT LESSONS (GLOBAL SUCCESS MOET STANDARD)
// ==============================================================================
const GRADE_4_WEEK_3_LESSONS: Record<number, PPCTLessonInfo> = {
  // Tiết 9: Unit 1: My friends - Lesson 3 (1,2,3)
  1: {
    periodNum: 9,
    lessonTitle: "Unit 1: My friends - Lesson 3 (1,2,3)",
    unitName: "Unit 1: My friends",
    theme: "Phonics: Sounds 'a' & 'ia', Listening & Chant",
    vocabulary: [
      { word: "America", ipa: "/əˈmerɪkə/", meaning: "the United States of America" },
      { word: "Australia", ipa: "/ɒˈstreɪliə/", meaning: "continent and country Australia" },
      { word: "from", ipa: "/frɒm/", meaning: "indicating the origin" },
      { word: "friend", ipa: "/frend/", meaning: "person with whom one has a bond" }
    ],
    sentencePatterns: [
      "I'm from America.",
      "She's from Australia."
    ],
    phonicsSound: "Sounds of the letters 'a' in 'America' and 'ia' in 'Australia'",
    gameName: "Listen and choose (Canada, China, India, Cambodia)",
    specificCompetencies: [
      "Correctly pronounce the sounds of the letters 'a' and 'ia' in isolation, in words 'America', 'Australia', and in sentences 'I'm from America.', 'She's from Australia.' with accurate intonation.",
      "Identify target words 'America' and 'Australia' while listening to audio tracks.",
      "Say the chant with correct rhythm, pronunciation, and clapping."
    ],
    teacherMaterials: [
      "Student's Book Grade 4 (Page 14), Teacher's Guide, Audio tracks 13, 14, 15.",
      "Flashcards of flags and characters from America and Australia.",
      "Projector, speaker, digital slides."
    ],
    studentMaterials: [
      "Student's Book Grade 4, notebook, pens."
    ],
    integrationNotes: "Tích hợp Giáo dục Quốc tế & Tôn trọng đa văn hóa: Nhận biết quốc kỳ, quốc gia và trân trọng bạn bè quốc tế.",
    activities: [
      {
        id: "g4-p9-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Review asking and answering 'Where are you from?' from previous lessons.
- Procedure:
  * Greet the class warmly: "Hello everyone! Welcome back!"
  * Invite groups of pupils to the front to sing the song 'Where are you from?' (Activity 6, Lesson 1).
  * Praise pupils and guide them to open the Student's Book to page 14.`,
        studentActivity: `- Greet the teacher in chorus.
- Sing the song 'Where are you from?' with enthusiastic gestures and hand clapping.
- Open books to page 14.`
      },
      {
        id: "g4-p9-act2",
        name: "2. Knowledge Construction (5 minutes) - Activity 1: Listen and repeat",
        teacherActivity: `- Objective: Correctly pronounce sounds 'a' in America and 'ia' in Australia.
- Procedure:
  * Step 1: Point at the letter 'a', the word 'America', and sentence 'I'm from America.'. Play Track 13.
  * Step 2: Point at the letters 'ia', the word 'Australia', and sentence 'She's from Australia.'. Play Track 13.
  * Step 3: Guide choral, group, and individual repetition; correct pronunciation of vowel sounds.`,
        studentActivity: `- Focus on the board and book page 14.
- Listen to Track 13 and repeat sounds, words, and sentences in chorus and individually.
- Work in pairs to practice pronouncing the sounds accurately.`
      },
      {
        id: "g4-p9-act3",
        name: "3. Practice (18 minutes) - Activity 2: Listen and circle & Activity 3: Let's chant",
        teacherActivity: `- Objective: Identify words while listening and chant with rhythm.
- Procedure:
  * Activity 2 (10 minutes): Direct pupils to items 1 and 2 (Track 14). Play audio twice. Have pupils circle options. (Key: 1. America, 2. Australia).
  * Activity 3 (8 minutes): Display the chant on screen (Track 15: Mary's from America... Ben's from Australia...).
  * Play recording line by line, model clapping, and guide groups to chant alternately.`,
        studentActivity: `- Read sentences in Activity 2, listen to Track 14, and circle the correct answers.
- Swap books with partners to verify answers.
- Read the chant lyrics on page 14, listen to Track 15, and chant aloud with rhythmic hand clapping.`
      },
      {
        id: "g4-p9-act4",
        name: "4. Consolidation and Production (7 minutes)",
        teacherActivity: `- Objective: Consolidate target sounds through a fast-reflex game.
- Procedure:
  * Game: Listen and choose. Read names of countries (Canada, China, India, Cambodia); pupils choose if the word has sound 'a' or 'ia'.
  * Homelink: Learn vocabulary and chant by heart; prepare for Lesson 3 (4,5,6).`,
        studentActivity: `- Listen to teacher's words and call out the target sounds quickly.
- Note down homelink instructions in student notebooks.
- Wave and say goodbye to the teacher.`
      }
    ]
  },

  // Tiết 10: Unit 1: My friends - Lesson 3 (4,5,6)
  2: {
    periodNum: 10,
    lessonTitle: "Unit 1: My friends - Lesson 3 (4,5,6)",
    unitName: "Unit 1: My friends",
    theme: "Reading Comprehension, Writing & Project: Pupil Cards",
    vocabulary: [
      { word: "country", ipa: "/ˈkʌntri/", meaning: "nation with own government" },
      { word: "nationality", ipa: "/ˌnæʃəˈnæləti/", meaning: "status of belonging to a nation" },
      { word: "friend", ipa: "/frend/", meaning: "companion" },
      { word: "Britain", ipa: "/ˈbrɪtn/", meaning: "Great Britain" }
    ],
    sentencePatterns: [
      "Where are you from? -> I'm from [Vietnam / America].",
      "She's from [Australia]. He's from [Singapore]."
    ],
    phonicsSound: "Review sounds 'a' and 'ia'",
    gameName: "Hot Potato & Pupil Cards Presentation",
    specificCompetencies: [
      "Read short texts and identify True/False statements accurately.",
      "Write a short introductory paragraph about oneself and international friends.",
      "Present pupil cards of friends to the group and class using target language."
    ],
    teacherMaterials: [
      "Student's Book Grade 4 (Page 15), Teacher's Guide.",
      "Sample pupil cards, project templates, ball for Hot Potato.",
      "Projector, digital slides."
    ],
    studentMaterials: [
      "Student's Book Grade 4, notebook, pupil cards prepared at home."
    ],
    integrationNotes: "Tích hợp GDQPAN: Tự hào về đất nước Việt Nam, giới thiệu bạn bè quốc tế về quê hương mình.",
    activities: [
      {
        id: "g4-p10-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Review chant and country vocabulary.
- Procedure:
  * Greet class warmly.
  * Have pupils recite the chant on page 14 with clapping.
  * Pair-work warm-up: "Where are you from? - I'm from..."`,
        studentActivity: `- Greet teacher.
- Say the chant enthusiastically with hand clapping.
- Ask and answer origins in pairs.`
      },
      {
        id: "g4-p10-act2",
        name: "2. Practice (13 minutes) - Activity 4: Read and tick True or False & Activity 5: Let's write",
        teacherActivity: `- Objective: Read text about Minh, Tony, Laura and write a self-introductory text.
- Procedure:
  * Activity 4 (5 mins): Have pupils read text silently. Check True/False for items 1-4. (Key: 1. True, 2. True, 3. False, 4. False).
  * Activity 5 (8 mins): Model gapped paragraph on board. Guide pupils to fill in their own name, age, and country origin. Call 3 pupils to read aloud.`,
        studentActivity: `- Read the text about Minh, Tony, and Laura silently.
- Tick True or False in books and cross-check with partners.
- Complete the writing task about themselves in notebooks and read aloud.`
      },
      {
        id: "g4-p10-act3",
        name: "3. Consolidation and Production (17 minutes) - Activity 6: Project (Pupil cards)",
        teacherActivity: `- Objective: Present pupil cards of two friends to the class.
- Procedure:
  * Activity 6: Have pupils take out their prepared pupil cards.
  * Organize group presentation (groups of 4): pupils take turns showing cards and describing their friends.
  * Game: Hot potato! Pass a ball; whoever holds it must introduce a friend: "This is Linda. She is 8 years old. She is from Britain."
  * Homelink: Review Unit 1 vocabulary and prepare Unit 2 Lesson 1.`,
        studentActivity: `- Show pupil cards and present friends in small groups.
- Selected pupils present their cards in front of the class with confidence.
- Play Hot Potato eagerly.
- Take notes on homelink.`
      },
      {
        id: "g4-p10-act4",
        name: "4. Wrap-up & Evaluation (5 minutes)",
        teacherActivity: `- Teacher summarizes key vocabulary of Unit 1 and provides formative praise to active pupils.`,
        studentActivity: `- Listen to teacher's comments and say goodbye.`
      }
    ]
  },

  // Tiết 11: Unit 2: Time and daily routines - Lesson 1 (1,2,3)
  3: {
    periodNum: 11,
    lessonTitle: "Unit 2: Time and daily routines - Lesson 1 (1,2,3)",
    unitName: "Unit 2: Time and daily routines",
    theme: "Asking and Telling the Time",
    vocabulary: [
      { word: "time", ipa: "/taɪm/", meaning: "measured period or clock reading" },
      { word: "o'clock", ipa: "/əˈklɒk/", meaning: "used after numbers to specify hour" },
      { word: "fifteen", ipa: "/ˌfɪfˈtiːn/", meaning: "number 15" },
      { word: "thirty", ipa: "/ˈθɜːti/", meaning: "number 30" },
      { word: "forty-five", ipa: "/ˌfɔːti ˈfaɪv/", meaning: "number 45" }
    ],
    sentencePatterns: [
      "What time is it? -> It's [eight thirty / three fifteen / seven o'clock]."
    ],
    phonicsSound: "Falling intonation in question 'What time is it?' and statement 'It's...'",
    gameName: "Slap the board & Sentence Puzzle",
    specificCompetencies: [
      "Understand and repeat sentences in communicative contexts asking and telling the time.",
      "Use 'What time is it? – It's...' correctly to ask and tell different times (o'clock, fifteen, thirty, forty-five).",
      "Develop punctuality and daily routine management skills."
    ],
    teacherMaterials: [
      "Student's Book Grade 4 (Page 16), Audio tracks 16, 17.",
      "Toy teaching clock with movable hands, digital flashcards.",
      "Projector, speaker."
    ],
    studentMaterials: [
      "Student's Book Grade 4, notebook, pen, pencil."
    ],
    integrationNotes: "Tích hợp Rèn thói quen đúng giờ: Giáo dục học sinh ý thức đi học đúng giờ và sinh hoạt khoa học.",
    activities: [
      {
        id: "g4-p11-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Warm up the class with numbers review.
- Procedure:
  * Greet class: "Good morning/afternoon, class!"
  * Game: Slap the board. Write numbers (15, 30, 45, 6, 8, 12) on board.
  * Call two pupils to slap the correct number when teacher calls it out.
  * Lead-in to Unit 2: "Today we will learn how to ask and tell the time!"`,
        studentActivity: `- Greet teacher in chorus.
- Race to slap correct numbers on the board.
- Open books to page 16.`
      },
      {
        id: "g4-p11-act2",
        name: "2. Knowledge Construction (5 minutes) - Activity 1: Look, listen and repeat",
        teacherActivity: `- Objective: Introduce 'What time is it? - It's eight thirty / three fifteen'.
- Procedure:
  * Display pictures a and b on screen (Track 16).
  * Elicit context: pupils asking about time to catch the bus or start class.
  * Play Track 16 twice. Pupils listen and repeat sentence by sentence.
  * Highlight the sentence pattern on board with toy clock demonstration.`,
        studentActivity: `- Look at pictures a and b, listen to Track 16.
- Repeat the dialogues chorally, in groups, and in pairs.
- Observe clock hands moving and repeat the time.`
      },
      {
        id: "g4-p11-act3",
        name: "3. Practice (18 minutes) - Activity 2: Listen, point and say & Activity 3: Let's talk",
        teacherActivity: `- Objective: Practice telling time (6:00, 6:15, 6:30, 6:45) in pairs.
- Procedure:
  * Activity 2 (10 mins): Teach 4 clock times (Track 17). Model asking and telling time. Explain a.m. and p.m. Have pupils point and practice in pairs.
  * Activity 3 (8 mins): Let's talk. Two pupils ask and answer using clock cues: 7:00 AM, 8:15 AM, 2:30 PM, 4:45 PM. Invite pairs to role-play in front of class.`,
        studentActivity: `- Listen to Track 17, point to clock pictures on page 16.
- Practice in pairs:
  + Student A: "What time is it?"
  + Student B: "It's six fifteen."
- Swap roles and practice with all 4 clocks. Role-play in front of class.`
      },
      {
        id: "g4-p11-act4",
        name: "4. Consolidation and Production (7 minutes)",
        teacherActivity: `- Objective: Reinforce time telling through Sentence Puzzle game.
- Procedure:
  * Game: Sentence Puzzle. Put scrambled word cards on board; pupils arrange them into "What time is it?" and "It's seven o'clock."
  * Homelink: Draw 3 clocks showing your daily routine times and prepare Lesson 1 (4,5,6).`,
        studentActivity: `- Arrange word cards on board quickly.
- Note down homelink in student notebooks.
- Wave and say goodbye to teacher.`
      }
    ]
  },

  // Tiết 12: Unit 2: Time and daily routines - Lesson 1 (4,5,6)
  4: {
    periodNum: 12,
    lessonTitle: "Unit 2: Time and daily routines - Lesson 1 (4,5,6)",
    unitName: "Unit 2: Time and daily routines",
    theme: "Listening & Clock Games",
    vocabulary: [
      { word: "morning", ipa: "/ˈmɔːnɪŋ/", meaning: "early part of day" },
      { word: "afternoon", ipa: "/ˌɑːftəˈnuːn/", meaning: "time from noon to evening" },
      { word: "evening", ipa: "/ˈiːvnɪŋ/", meaning: "end of day before night" },
      { word: "clock", ipa: "/klɒk/", meaning: "instrument for measuring time" }
    ],
    sentencePatterns: [
      "What time is it? -> It's [nine fifteen / four thirty]."
    ],
    phonicsSound: "Word stress in numbers ending in -teen and -ty",
    gameName: "Which clock says...? & Rearrange words",
    specificCompetencies: [
      "Listen to and tick correct clock pictures in communicative audio tracks.",
      "Complete four gapped exchanges with clock cues and read aloud.",
      "Consolidate telling time through interactive classroom games."
    ],
    teacherMaterials: [
      "Student's Book Grade 4 (Page 17), Audio track 18.",
      "Clock flashcards, word strips, projector."
    ],
    studentMaterials: [
      "Student's Book Grade 4, notebook, pens."
    ],
    integrationNotes: "Tích hợp Năng lực số (NLS 1.2.CB2a): Quan sát đồng hồ số (digital) và đồng hồ kim (analog) trên màn hình tương tác.",
    activities: [
      {
        id: "g4-p12-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Warm up with numbers and time recall.
- Procedure:
  * Greet class.
  * Game: Who's faster? Flash clock pictures rapidly; pupils shout out the time.
  * Announce page 17.`,
        studentActivity: `- Greet teacher.
- Shout out times rapidly when seeing clock pictures.
- Open books to page 17.`
      },
      {
        id: "g4-p12-act2",
        name: "2. Practice (15 minutes) - Activity 4: Listen and tick & Activity 5: Look, complete and read",
        teacherActivity: `- Objective: Listen and tick correct clock; complete gapped exchanges.
- Procedure:
  * Activity 4 (5 mins): Point to 1a (9:00), 1b (9:15), 2a (4:00), 2b (4:30). Play Track 18 twice. (Key: 1b, 2a).
  * Activity 5 (10 mins): Guide pupils to complete 4 exchanges (1. ten o'clock, 2. six thirty, 3. What time / six forty-five, 4. nine fifteen).
  * Have pupils read completed dialogues aloud in pairs.`,
        studentActivity: `- Look at clock pictures in Activity 4. Listen to Track 18 and tick correct boxes.
- Swap books with partners to verify answers.
- Fill in missing words in Activity 5 and read dialogues aloud in pairs.`
      },
      {
        id: "g4-p12-act3",
        name: "3. Consolidation and Production (15 minutes) - Activity 6: Let's play",
        teacherActivity: `- Objective: Reinforce telling time through game 'Which clock says...?'.
- Procedure:
  * Activity 6: Let's play (Which clock says...?).
  * Teacher calls a time: "Which clock says eight fifteen?"; pupils point to and tap the correct clock on board.
  * Game: Rearrange the words to form complete sentences.
  * Homelink: Practice asking and telling the time with friends at break time.`,
        studentActivity: `- Compete eagerly in 'Which clock says...?' game.
- Rearrange words into accurate English sentences.
- Record homelink tasks in notebooks.`
      }
    ]
  }
};

// ==============================================================================
// 3. GRADE 5 OFFICIAL PPCT LESSONS (GLOBAL SUCCESS MOET STANDARD)
// ==============================================================================
const GRADE_5_WEEK_3_LESSONS: Record<number, PPCTLessonInfo> = {
  // Tiết 9: UNIT 1: All about me! - Lesson 3 (Activity 1 - 3)
  1: {
    periodNum: 9,
    lessonTitle: "UNIT 1: All about me! - Lesson 3 (Activity 1 - 3)",
    unitName: "UNIT 1: All about me!",
    theme: "Word Stress in Two-syllable Words & Chant",
    vocabulary: [
      { word: "dolphin", ipa: "/ˈdɒlfɪn/", meaning: "intelligent marine mammal" },
      { word: "tennis", ipa: "/ˈtenɪs/", meaning: "racket sport" },
      { word: "panda", ipa: "/ˈpændə/", meaning: "large black-and-white bear" },
      { word: "football", ipa: "/ˈfʊtbɔːl/", meaning: "popular team sport" }
    ],
    sentencePatterns: [
      "I like 'dolphins.",
      "He plays 'tennis on Sundays."
    ],
    phonicsSound: "Stress on the first syllable in two-syllable nouns: 'dolphin, 'tennis, 'panda",
    gameName: "Who is faster? & Jumping Game",
    specificCompetencies: [
      "Correctly pronounce two-syllable words with stress on the first syllable as 'dolphin and 'tennis in isolation and in authentic sentences.",
      "Say the chant with correct pronunciation, natural word stress, and rhythmic clapping.",
      "Develop confidence and communicative reflexes in group games."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 5 (Page 14), Teacher's Guide, Audio tracks 13, 14, 15.",
      "Flashcards of animals and sports (dolphin, panda, tennis, football).",
      "Interactive screen, external speaker."
    ],
    studentMaterials: [
      "Pupil's Book Grade 5, notebook, pen, pencil."
    ],
    integrationNotes: "Tích hợp GD thể chất & Yêu thương động vật: Khuyến khích tập luyện thể thao và bảo vệ động vật hoang dã.",
    activities: [
      {
        id: "g5-p9-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Review sports and animals vocabulary through a competitive game.
- Procedure:
  * Greet class: "Hello class! How are you doing today?"
  * Game: Who is faster? (Rock, Paper, Scissors + picture guessing).
  * Show partial pictures of animals/sports; winning pairs guess words.
  * Lead into Lesson 3: "Today we focus on word stress in English!"`,
        studentActivity: `- Greet teacher in English.
- Play Rock, Paper, Scissors and guess pictures enthusiastically.
- Open Pupil's Book to page 14.`
      },
      {
        id: "g5-p9-act2",
        name: "2. Knowledge Construction (10 minutes) - Activity 1: Listen and repeat",
        teacherActivity: `- Objective: Master word stress on first syllable for 'dolphin and 'tennis.
- Procedure:
  * Explain word stress mark (') placed before the stressed syllable.
  * Model pronunciation: "'dolphin" (raise pitch/stress on first syllable) and "'tennis".
  * Play Audio Track 13 for words and sentences: "I like 'dolphins." / "He plays 'tennis on Sundays."
  * Guide choral, group, and individual repetition; clap hands on the stressed syllable.`,
        studentActivity: `- Look at page 14, observe the stress mark (').
- Listen to Track 13 and repeat words and sentences with hand claps on stressed syllables.
- Practice in pairs and stand up to read aloud when invited.`
      },
      {
        id: "g5-p9-act3",
        name: "3. Practice (15 minutes) - Activity 2: Circle, listen and check & Activity 3: Let's chant",
        teacherActivity: `- Objective: Identify stressed syllable in listening exercise and recite the chant rhythmically.
- Procedure:
  * Activity 2 (10 mins): Point to words in Activity 2. Have pupils circle words stressed on the 1st syllable. Play Track 14 to check.
  * Activity 3 (5 mins): Display chant on screen (Track 15: pandas, dolphins, tennis, football).
  * Play audio line by line, guide clapping on stressed words, and organize team chant competition.`,
        studentActivity: `- Read words in Activity 2, circle stressed words, listen to Track 14 and verify.
- Listen to the chant, clap hands to the rhythm, and chant aloud with classmates.`
      },
      {
        id: "g5-p9-act4",
        name: "4. Consolidation and Production (5 minutes)",
        teacherActivity: `- Objective: Reinforce stressed words through Jumping Game.
- Procedure:
  * Game: Jumping. Pupils stand up; when teacher says a word stressed on 1st syllable ('dolphin), pupils jump. If not stressed, they stay still.
  * Homelink: Practise the chant at home and prepare Activity 4, 5, 6.`,
        studentActivity: `- Play Jumping Game with high concentration and laughter.
- Note down homelink instructions in notebooks.`
      }
    ]
  },

  // Tiết 10: UNIT 1: All about me! - Lesson 3 (Activity 4 - 6)
  2: {
    periodNum: 10,
    lessonTitle: "UNIT 1: All about me! - Lesson 3 (Activity 4 - 6)",
    unitName: "UNIT 1: All about me!",
    theme: "Reading, Writing & Project: Favourite Things Poster",
    vocabulary: [
      { word: "favourite", ipa: "/ˈfeɪvərɪt/", meaning: "preferred above all others" },
      { word: "poster", ipa: "/ˈpəʊstə/", meaning: "large printed picture for display" },
      { word: "hobby", ipa: "/ˈhɒbi/", meaning: "regular leisure activity" },
      { word: "presenter", ipa: "/prɪˈzentə/", meaning: "person who introduces something" }
    ],
    sentencePatterns: [
      "My favourite sport is [football / table tennis].",
      "I like [reading books] in my free time."
    ],
    phonicsSound: "Review of word stress and sentence flow",
    gameName: "I'm a presenter & Poster Exhibition",
    specificCompetencies: [
      "Read two paragraphs about Tom and Lan and circle correct answers accurately.",
      "Complete a written paragraph about personal information and favourite things.",
      "Create and present a colourful poster about favourite things in front of the class."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 5 (Page 15), Teacher's Guide.",
      "A3 paper, colored markers, sample posters.",
      "Projector, digital slides."
    ],
    studentMaterials: [
      "Pupil's Book Grade 5, notebook, poster materials."
    ],
    integrationNotes: "Tích hợp Giáo dục STEM & Kỹ năng thuyết trình: Thiết kế poster sáng tạo và tự tin thuyết trình trước đám đông.",
    activities: [
      {
        id: "g5-p10-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Energize class with Unit 1 chant.
- Procedure:
  * Greet class.
  * Play Track 15 (Unit 1 Chant); class chants aloud with actions.`,
        studentActivity: `- Greet teacher and recite chant enthusiastically.`
      },
      {
        id: "g5-p10-act2",
        name: "2. Practice (15 minutes) - Activity 4: Read and circle & Activity 5: Let's write",
        teacherActivity: `- Objective: Read paragraphs about Tom and Lan; write self-description.
- Procedure:
  * Activity 4 (5 mins): Guide pupils to read silently and circle correct options. Check answers with whole class.
  * Activity 5 (10 mins): Guide pupils to write a short paragraph about their own name, age, class, school, and favourite things. Invite 3 pupils to read aloud.`,
        studentActivity: `- Read paragraphs in Activity 4 silently and circle answers.
- Write about themselves in Activity 5 neatly and read aloud when invited.`
      },
      {
        id: "g5-p10-act3",
        name: "3. Production & Project (15 minutes) - Activity 6: Project (Favourite Things Poster)",
        teacherActivity: `- Objective: Present posters about favourite things.
- Procedure:
  * Activity 6: Have groups display their prepared posters on the board.
  * Game / Role-play: I'm a presenter! Pupils step up: "Hello, everyone. My name is Lan. This is my poster about my favourite things..."
  * Award badges and praise creative designs.`,
        studentActivity: `- Display posters on board in groups.
- Present their favourite things confidently to the class.
- Listen to classmates and vote for best posters.`
      }
    ]
  },

  // Tiết 11: UNIT 2: Our homes - Lesson 1 (Activity 1 - 3)
  3: {
    periodNum: 11,
    lessonTitle: "UNIT 2: Our homes - Lesson 1 (Activity 1 - 3)",
    unitName: "UNIT 2: Our homes",
    theme: "Types of Homes & Asking 'Do you live in this/that...?'",
    vocabulary: [
      { word: "building", ipa: "/ˈbɪldɪŋ/", meaning: "structure with roof and walls" },
      { word: "flat", ipa: "/flæt/", meaning: "set of rooms on one floor for living" },
      { word: "house", ipa: "/haʊs/", meaning: "building for human habitation" },
      { word: "tower", ipa: "/ˈtaʊə/", meaning: "tall narrow building" },
      { word: "numbers 23, 38, 93, 116", ipa: "", meaning: "address numbers" }
    ],
    sentencePatterns: [
      "Do you live in this / that [building / flat / house / tower]? -> Yes, I do. / No, I don't."
    ],
    phonicsSound: "Rising intonation in Yes/No questions and falling in short answers",
    gameName: "Collect the letters & Lucky Letter",
    specificCompetencies: [
      "Use words 'building', 'flat', 'house', 'tower' and numbers 23, 38, 93, 116 in relation to the topic 'Our homes'.",
      "Correctly use 'Do you live in this/that...? - Yes, I do. / No, I don't.' in authentic dialogues.",
      "Cultivate pride in personal home and local living environment."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 5 (Page 16), Audio tracks 16, 17.",
      "Flashcards of homes (building, flat, house, tower).",
      "Projector, speaker."
    ],
    studentMaterials: [
      "Pupil's Book Grade 5, notebook, pen, pencil."
    ],
    integrationNotes: "Tích hợp GD tình cảm quê hương & Môi trường sống: Giữ gìn nhà cửa gọn gàng, yêu quý tổ ấm gia đình.",
    activities: [
      {
        id: "g5-p11-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Introduce Unit 2 theme through word guessing game.
- Procedure:
  * Greet class.
  * Game: Collect the letters. Give clues: street, road, village, city. Unscramble to find key word: HOMES.
  * Write 'UNIT 2: OUR HOMES' on board.`,
        studentActivity: `- Greet teacher.
- Guess words and unscramble HOMES enthusiastically.
- Open books to page 16.`
      },
      {
        id: "g5-p11-act2",
        name: "2. Exploration (5 minutes) - Activity 1: Look, listen and repeat",
        teacherActivity: `- Objective: Introduce target dialogue 'Do you live in this building? - Yes, I do. I live in that flat.'.
- Procedure:
  * Display pictures a and b on screen (Track 16).
  * Elicit characters and setting. Play recording twice; have pupils listen and repeat sentence by sentence.
  * Highlight sentence structure on board with picture cues.`,
        studentActivity: `- Look at pictures a and b, listen to Track 16.
- Repeat dialogue chorally and in pairs.
- Note sentence pattern in notebooks.`
      },
      {
        id: "g5-p11-act3",
        name: "3. Knowledge Construction & Practice (18 minutes) - Activity 2: Listen, point and say & Activity 3: Let's talk",
        teacherActivity: `- Objective: Practice home words and target question structure.
- Procedure:
  * Teach vocabulary with flashcards: building, flat, house, tower, numbers 23, 38, 93, 116.
  * Play Track 17. Pupils point and repeat.
  * Activity 3: Let's talk. Have pupils work in pairs to ask and answer using picture cues. Invite pairs to perform in front of class.`,
        studentActivity: `- Look at picture cues, listen to Track 17, and repeat words.
- Practice in pairs:
  + Student A: "Do you live in that building?"
  + Student B: "Yes, I do. / No, I don't."
- Swap roles and practice with all pictures.`
      },
      {
        id: "g5-p11-act4",
        name: "4. Consolidation & Production (7 minutes)",
        teacherActivity: `- Objective: Reinforce home words through Lucky Letter game.
- Procedure:
  * Game: Lucky Letter. Homelink: Prepare survey on page 21.`,
        studentActivity: `- Play game actively.
- Take notes on homelink.`
      }
    ]
  },

  // Tiết 12: UNIT 2: Our homes - Lesson 1 (Activity 4 - 6)
  4: {
    periodNum: 12,
    lessonTitle: "UNIT 2: Our homes - Lesson 1 (Activity 4 - 6)",
    unitName: "UNIT 2: Our homes",
    theme: "Listening & Guessing Games",
    vocabulary: [
      { word: "number", ipa: "/ˈnʌmbə/", meaning: "mathematical value or house address" },
      { word: "live", ipa: "/lɪv/", meaning: "reside in a place" },
      { word: "street", ipa: "/striːt/", meaning: "public road in city" }
    ],
    sentencePatterns: [
      "Do you live in this house? -> Yes, I do. / No, I don't."
    ],
    phonicsSound: "Intonation in communicative Yes/No questions",
    gameName: "Slap the board & Zootopia / Guessing Game",
    specificCompetencies: [
      "Listen and number four pictures of homes accurately.",
      "Read and complete gapped exchanges using context clues.",
      "Consolidate asking and answering about home types in interactive games."
    ],
    teacherMaterials: [
      "Pupil's Book Grade 5 (Page 17), Audio track 18.",
      "Flashcards of homes, projector."
    ],
    studentMaterials: [
      "Pupil's Book Grade 5, notebook, pen, pencil."
    ],
    integrationNotes: "Tích hợp Năng lực số (NLS 1.2.CB2a): Tìm kiếm hình ảnh các kiểu nhà trên thế giới qua bảng tương tác.",
    activities: [
      {
        id: "g5-p12-act1",
        name: "1. Warm-up and review (5 minutes)",
        teacherActivity: `- Objective: Review home vocabulary.
- Procedure:
  * Greet class. Game: Slap the board (building, flat, house, tower). Pupils slap correct picture when teacher says word.`,
        studentActivity: `- Greet teacher and play Slap the board eagerly.
- Open books to page 17.`
      },
      {
        id: "g5-p12-act2",
        name: "2. Practice (20 minutes) - Activity 4: Listen and number & Activity 5: Read and complete",
        teacherActivity: `- Objective: Listen and number 4 pictures; complete gapped exchanges.
- Procedure:
  * Activity 4 (10 mins): Elicit pictures a, b, c, d. Play Track 18 twice. Have pupils number pictures. (Check answers with class).
  * Activity 5 (10 mins): Model exchange 1 on board. Pupils fill in missing words in items 1, 2, 3, 4. Check and have pupils read aloud in pairs.`,
        studentActivity: `- Look at pictures in Activity 4. Listen to Track 18 and number the pictures in books.
- Complete Activity 5 independently, swap books to check, and read dialogues aloud in pairs.`
      },
      {
        id: "g5-p12-act3",
        name: "3. Production (10 minutes) - Activity 6: Let's play",
        teacherActivity: `- Objective: Consolidate language through Guessing game / Zootopia.
- Procedure:
  * Activity 6: Let's play: Guessing game.
  * Divide class into 2 teams. Team A holds a hidden home card; Team B asks: "Do you live in that flat?" Team A answers: "Yes, I do. / No, I don't."
  * Award points and praise winner.
  * Homelink: Review vocabulary and prepare Lesson 2.`,
        studentActivity: `- Participate in the Guessing game enthusiastically in teams.
- Ask and answer using target sentence structures.
- Record homelink instructions.`
      }
    ]
  }
};

// Master lookup helper
export function getOfficialEnglishPPCTLesson(
  grade: Grade,
  week: number,
  periodInWeek: number = 1
): EnglishLessonDetail | null {
  const pInW = Math.max(1, Math.min(4, ((periodInWeek - 1) % 4) + 1));
  let lessonInfo: PPCTLessonInfo | undefined;

  if (week === 3) {
    if (grade === 3) {
      lessonInfo = GRADE_3_WEEK_3_LESSONS[pInW];
    } else if (grade === 4) {
      lessonInfo = GRADE_4_WEEK_3_LESSONS[pInW];
    } else if (grade === 5) {
      lessonInfo = GRADE_5_WEEK_3_LESSONS[pInW];
    }
  }

  if (!lessonInfo) return null;

  return {
    lessonTitle: lessonInfo.lessonTitle,
    unitName: lessonInfo.unitName,
    theme: lessonInfo.theme,
    vocabulary: lessonInfo.vocabulary.map((v) => `${v.word} (${v.ipa} - ${v.meaning})`),
    rawWords: lessonInfo.vocabulary.map((v) => v.word),
    sentencePatterns: lessonInfo.sentencePatterns,
    phonicsSound: lessonInfo.phonicsSound,
    gameName: lessonInfo.gameName,
    specificCompetencies: lessonInfo.specificCompetencies,
    teacherMaterials: lessonInfo.teacherMaterials,
    studentMaterials: lessonInfo.studentMaterials,
    integrationNotes: lessonInfo.integrationNotes,
    activities: lessonInfo.activities
  };
}

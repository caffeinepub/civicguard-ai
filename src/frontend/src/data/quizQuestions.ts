export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestionsEn: QuizQuestion[] = [
  {
    question: "What should you do with plastic waste?",
    options: ["Throw on street", "Burn it", "Segregate and recycle", "Bury it"],
    correctAnswer: 2,
  },
  {
    question: "What is the emergency helpline number in India?",
    options: ["100", "112", "108", "911"],
    correctAnswer: 1,
  },
  {
    question: "Why is spitting tobacco in public harmful?",
    options: ["It looks bad", "Spreads diseases", "Both A and B", "None"],
    correctAnswer: 2,
  },
  {
    question: "What should you do when you see someone littering?",
    options: ["Ignore it", "Join them", "Politely request them to stop", "Shout at them"],
    correctAnswer: 2,
  },
  {
    question: "How can you contribute to a cleaner city?",
    options: ["Report civic issues", "Keep surroundings clean", "Follow traffic rules", "All of the above"],
    correctAnswer: 3,
  },
];

export const quizQuestionsHi: QuizQuestion[] = [
  {
    question: "प्लास्टिक कचरे का आपको क्या करना चाहिए?",
    options: ["सड़क पर फेंकें", "जलाएं", "अलग करें और रीसायकल करें", "दफनाएं"],
    correctAnswer: 2,
  },
  {
    question: "भारत में आपातकालीन हेल्पलाइन नंबर क्या है?",
    options: ["100", "112", "108", "911"],
    correctAnswer: 1,
  },
  {
    question: "सार्वजनिक स्थानों पर तंबाकू थूकना हानिकारक क्यों है?",
    options: ["यह बुरा दिखता है", "बीमारियां फैलाता है", "A और B दोनों", "कोई नहीं"],
    correctAnswer: 2,
  },
  {
    question: "जब आप किसी को कूड़ा फेंकते देखें तो क्या करना चाहिए?",
    options: ["अनदेखा करें", "उनके साथ शामिल हों", "विनम्रता से रोकने का अनुरोध करें", "उन पर चिल्लाएं"],
    correctAnswer: 2,
  },
  {
    question: "आप एक स्वच्छ शहर में कैसे योगदान कर सकते हैं?",
    options: ["नागरिक समस्याओं की रिपोर्ट करें", "आसपास साफ रखें", "यातायात नियमों का पालन करें", "उपरोक्त सभी"],
    correctAnswer: 3,
  },
];

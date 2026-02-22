const translations = {
  // App name
  appName: 'सिविकगार्ड एआई',
  
  // Navigation
  navHome: 'होम',
  navFileComplaint: 'शिकायत दर्ज करें',
  navMyComplaints: 'मेरी शिकायतें',
  navVolunteer: 'स्वयंसेवक',
  navEducation: 'सीखें',
  navProfile: 'प्रोफाइल',
  navSettings: 'सेटिंग्स',
  navRTI: 'आरटीआई जनरेटर',
  navImpact: 'प्रभाव प्रमाण',
  
  // Auth
  login: 'लॉगिन',
  logout: 'लॉगआउट',
  loggingIn: 'लॉगिन हो रहा है...',
  
  // Profile Setup
  profileSetupTitle: 'सिविकगार्ड एआई में आपका स्वागत है',
  profileSetupDesc: 'कृपया शुरू करने के लिए अपना नाम बताएं',
  profileSetupName: 'आपका नाम',
  profileSetupRole: 'मैं हूं',
  roleCitizen: 'नागरिक',
  roleAuthority: 'अधिकारी',
  roleAdmin: 'प्रशासक',
  profileSetupSubmit: 'शुरू करें',
  
  // Issue Types
  issueGarbage: 'कचरा',
  issueTobacco: 'तंबाकू की थूक',
  issueTraffic: 'यातायात उल्लंघन',
  issueNuisance: 'सार्वजनिक उपद्रव',
  
  // Complaint Status
  statusReceived: 'प्राप्त',
  statusUnderReview: 'समीक्षाधीन',
  statusActionTaken: 'कार्रवाई की गई',
  statusEscalated: 'बढ़ाया गया',
  
  // File Complaint
  fileComplaintTitle: 'नागरिक समस्या की रिपोर्ट करें',
  selectIssueType: 'समस्या का प्रकार चुनें',
  describeIssue: 'समस्या का वर्णन करें',
  uploadMedia: 'फोटो या वीडियो अपलोड करें',
  uploadImage: 'फोटो अपलोड करें',
  uploadVideo: 'वीडियो अपलोड करें (30-90 सेकंड)',
  locationCaptured: 'स्थान कैप्चर किया गया',
  capturingLocation: 'स्थान कैप्चर हो रहा है...',
  anonymousReport: 'गुमनाम रिपोर्ट करें',
  anonymousReportDesc: 'आपकी पहचान साझा नहीं की जाएगी',
  submitReport: 'रिपोर्ट जमा करें',
  reportSubmitted: 'रिपोर्ट सफलतापूर्वक जमा की गई',
  trackingId: 'ट्रैकिंग आईडी',
  
  // My Complaints
  myComplaintsTitle: 'मेरी रिपोर्ट',
  noComplaints: 'अभी तक कोई रिपोर्ट नहीं',
  noComplaintsDesc: 'नागरिक समस्या की रिपोर्ट करके शुरू करें',
  viewDetails: 'विवरण देखें',
  
  // Complaint Detail
  complaintDetails: 'रिपोर्ट विवरण',
  reportedBy: 'द्वारा रिपोर्ट किया गया',
  anonymous: 'गुमनाम',
  reportedOn: 'रिपोर्ट की तारीख',
  currentStatus: 'वर्तमान स्थिति',
  statusHistory: 'स्थिति इतिहास',
  updateStatus: 'स्थिति अपडेट करें',
  
  // Helpline
  helplineTitle: 'आपातकालीन हेल्पलाइन',
  helplineEmergency: 'आपातकाल',
  helplineTraffic: 'यातायात पुलिस',
  helplineAmbulance: 'एम्बुलेंस',
  helplineMunicipal: 'नगर निगम कार्यालय',
  
  // Dashboard
  dashboardTitle: 'नागरिक डैशबोर्ड',
  civicHeatmap: 'समस्या हीटमैप',
  areaCivicScores: 'क्षेत्र नागरिक स्कोर',
  cleanlinessScore: 'स्वच्छता',
  disciplineScore: 'अनुशासन',
  dailyFact: 'दैनिक नागरिक तथ्य',
  dailyQuiz: 'दैनिक प्रश्नोत्तरी',
  dailyStory: 'दैनिक कहानी',
  
  // Gamification
  yourCivicScore: 'आपका नागरिक स्कोर',
  yourBadges: 'आपके बैज',
  leaderboard: 'लीडरबोर्ड',
  cityLeaderboard: 'शहर लीडरबोर्ड',
  schoolLeaderboard: 'स्कूल लीडरबोर्ड',
  badgeFirstReport: 'पहली रिपोर्ट',
  badgeChampion: 'नागरिक चैंपियन',
  badgeLeader: 'समुदाय नेता',
  
  // Education
  educationTitle: 'सीखें और बढ़ें',
  takeQuiz: 'आज की प्रश्नोत्तरी लें',
  quizScore: 'आपका स्कोर',
  quizHistory: 'प्रश्नोत्तरी इतिहास',
  factHistory: 'पिछले तथ्य',
  storyArchive: 'कहानी संग्रह',
  motivationalVideos: 'प्रेरक वीडियो',
  
  // Tobacco Awareness
  tobaccoTitle: 'तंबाकू थूक मुक्त सार्वजनिक स्थान',
  tobaccoAwareness: 'तंबाकू की थूक बीमारियां फैलाती है और हमारे सार्वजनिक स्थानों को गंदा बनाती है। अपने समुदाय को स्वच्छ और स्वस्थ रखने में मदद करें।',
  tobaccoStats: 'इस महीने की रिपोर्ट',
  
  // Volunteer
  volunteerTitle: 'स्वयंसेवक बाज़ार',
  availableTasks: 'उपलब्ध कार्य',
  myTasks: 'मेरे कार्य',
  createTask: 'कार्य बनाएं',
  taskDetails: 'कार्य विवरण',
  volunteersNeeded: 'स्वयंसेवकों की आवश्यकता',
  timeCommitment: 'समय प्रतिबद्धता',
  expressInterest: 'रुचि व्यक्त करें',
  
  // RTI Generator
  rtiTitle: 'आरटीआई ड्राफ्ट जनरेटर',
  selectComplaint: 'एक रिपोर्ट चुनें',
  generateRTI: 'आरटीआई ड्राफ्ट बनाएं',
  downloadRTI: 'आरटीआई डाउनलोड करें',
  copyRTI: 'क्लिपबोर्ड पर कॉपी करें',
  
  // Impact Proof
  impactTitle: 'पहले/बाद प्रभाव प्रमाण',
  uploadAfterImage: 'बाद की छवि अपलोड करें',
  beforeImage: 'पहले',
  afterImage: 'बाद में',
  downloadProof: 'प्रमाण डाउनलोड करें',
  
  // Settings
  settingsTitle: 'सेटिंग्स',
  languageSettings: 'भाषा',
  selectLanguage: 'भाषा चुनें',
  english: 'English',
  hindi: 'हिंदी',
  
  // Common
  save: 'सहेजें',
  cancel: 'रद्द करें',
  close: 'बंद करें',
  loading: 'लोड हो रहा है...',
  error: 'त्रुटि',
  success: 'सफलता',
  submit: 'जमा करें',
  back: 'वापस',
  next: 'अगला',
  
  // Footer
  builtWith: 'प्यार से बनाया गया',
  
  // Empty States
  noData: 'कोई डेटा उपलब्ध नहीं',
  noResults: 'कोई परिणाम नहीं मिला',
} as const;

export default translations;

const translations = {
  // App name
  appName: 'CivicGuard AI',
  
  // Navigation
  navHome: 'Home',
  navFileComplaint: 'Report Issue',
  navMyComplaints: 'My Reports',
  navVolunteer: 'Volunteer',
  navEducation: 'Learn',
  navProfile: 'Profile',
  navSettings: 'Settings',
  navRTI: 'RTI Generator',
  navImpact: 'Impact Proof',
  
  // Auth
  login: 'Login',
  logout: 'Logout',
  loggingIn: 'Logging in...',
  
  // Profile Setup
  profileSetupTitle: 'Welcome to CivicGuard AI',
  profileSetupDesc: 'Please tell us your name to get started',
  profileSetupName: 'Your Name',
  profileSetupRole: 'I am a',
  roleCitizen: 'Citizen',
  roleAuthority: 'Authority',
  roleAdmin: 'Admin',
  profileSetupSubmit: 'Get Started',
  
  // Issue Types
  issueGarbage: 'Garbage',
  issueTobacco: 'Tobacco Spit',
  issueTraffic: 'Traffic Violation',
  issueNuisance: 'Public Nuisance',
  
  // Complaint Status
  statusReceived: 'Received',
  statusUnderReview: 'Under Review',
  statusActionTaken: 'Action Taken',
  statusEscalated: 'Escalated',
  
  // File Complaint
  fileComplaintTitle: 'Report a Civic Issue',
  selectIssueType: 'Select Issue Type',
  describeIssue: 'Describe the Issue',
  uploadMedia: 'Upload Photo or Video',
  uploadImage: 'Upload Photo',
  uploadVideo: 'Upload Video (30-90 sec)',
  locationCaptured: 'Location Captured',
  capturingLocation: 'Capturing Location...',
  anonymousReport: 'Report Anonymously',
  anonymousReportDesc: 'Your identity will not be shared',
  submitReport: 'Submit Report',
  reportSubmitted: 'Report Submitted Successfully',
  trackingId: 'Tracking ID',
  
  // My Complaints
  myComplaintsTitle: 'My Reports',
  noComplaints: 'No reports yet',
  noComplaintsDesc: 'Start by reporting a civic issue',
  viewDetails: 'View Details',
  
  // Complaint Detail
  complaintDetails: 'Report Details',
  reportedBy: 'Reported By',
  anonymous: 'Anonymous',
  reportedOn: 'Reported On',
  currentStatus: 'Current Status',
  statusHistory: 'Status History',
  updateStatus: 'Update Status',
  
  // Helpline
  helplineTitle: 'Emergency Helplines',
  helplineEmergency: 'Emergency',
  helplineTraffic: 'Traffic Police',
  helplineAmbulance: 'Ambulance',
  helplineMunicipal: 'Municipal Office',
  
  // Dashboard
  dashboardTitle: 'Civic Dashboard',
  civicHeatmap: 'Issue Heatmap',
  areaCivicScores: 'Area Civic Scores',
  cleanlinessScore: 'Cleanliness',
  disciplineScore: 'Discipline',
  dailyFact: 'Daily Civic Fact',
  dailyQuiz: 'Daily Quiz',
  dailyStory: 'Daily Story',
  
  // Gamification
  yourCivicScore: 'Your Civic Score',
  yourBadges: 'Your Badges',
  leaderboard: 'Leaderboard',
  cityLeaderboard: 'City Leaderboard',
  schoolLeaderboard: 'School Leaderboard',
  badgeFirstReport: 'First Report',
  badgeChampion: 'Civic Champion',
  badgeLeader: 'Community Leader',
  
  // Education
  educationTitle: 'Learn & Grow',
  takeQuiz: 'Take Today\'s Quiz',
  quizScore: 'Your Score',
  quizHistory: 'Quiz History',
  factHistory: 'Previous Facts',
  storyArchive: 'Story Archive',
  motivationalVideos: 'Motivational Videos',
  
  // Tobacco Awareness
  tobaccoTitle: 'Tobacco Spit-Free Public Spaces',
  tobaccoAwareness: 'Tobacco spit spreads diseases and makes our public spaces dirty. Help keep our community clean and healthy.',
  tobaccoStats: 'Reports This Month',
  
  // Volunteer
  volunteerTitle: 'Volunteer Marketplace',
  availableTasks: 'Available Tasks',
  myTasks: 'My Tasks',
  createTask: 'Create Task',
  taskDetails: 'Task Details',
  volunteersNeeded: 'Volunteers Needed',
  timeCommitment: 'Time Commitment',
  expressInterest: 'Express Interest',
  
  // RTI Generator
  rtiTitle: 'RTI Draft Generator',
  selectComplaint: 'Select a Report',
  generateRTI: 'Generate RTI Draft',
  downloadRTI: 'Download RTI',
  copyRTI: 'Copy to Clipboard',
  
  // Impact Proof
  impactTitle: 'Before/After Impact Proof',
  uploadAfterImage: 'Upload After Image',
  beforeImage: 'Before',
  afterImage: 'After',
  downloadProof: 'Download Proof',
  
  // Settings
  settingsTitle: 'Settings',
  languageSettings: 'Language',
  selectLanguage: 'Select Language',
  english: 'English',
  hindi: 'हिंदी',
  
  // Common
  save: 'Save',
  cancel: 'Cancel',
  close: 'Close',
  loading: 'Loading...',
  error: 'Error',
  success: 'Success',
  submit: 'Submit',
  back: 'Back',
  next: 'Next',
  
  // Footer
  builtWith: 'Built with love using',
  
  // Empty States
  noData: 'No data available',
  noResults: 'No results found',
} as const;

export default translations;

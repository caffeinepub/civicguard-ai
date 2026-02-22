import { quizQuestionsEn, quizQuestionsHi, type QuizQuestion } from '../data/quizQuestions';

export function getDailyQuizQuestions(language: 'en' | 'hi'): QuizQuestion[] {
  const allQuestions = language === 'hi' ? quizQuestionsHi : quizQuestionsEn;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Select 5 questions deterministically based on the day
  const selectedQuestions: QuizQuestion[] = [];
  for (let i = 0; i < 5; i++) {
    const index = (dayOfYear + i) % allQuestions.length;
    selectedQuestions.push(allQuestions[index]);
  }
  
  return selectedQuestions;
}

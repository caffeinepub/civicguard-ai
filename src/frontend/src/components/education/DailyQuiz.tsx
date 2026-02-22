import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getDailyQuizQuestions } from '../../utils/dailyQuizSelection';

export default function DailyQuiz() {
  const { t, language } = useLanguage();
  const questions = getDailyQuizQuestions(language);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('quizScore')}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold mb-4">{score} / {questions.length}</p>
          <Button onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setScore(0);
            setShowResult(false);
          }}>
            {t('takeQuiz')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {t('dailyQuiz')} - {currentQuestion + 1}/{questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </Button>
          ))}
        </div>
        {selectedAnswer !== null && (
          <Button onClick={handleNext} className="w-full">
            {currentQuestion < questions.length - 1 ? t('next') : t('submit')}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

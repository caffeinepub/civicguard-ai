import { useLanguage } from '../../contexts/LanguageContext';
import { Progress } from '@/components/ui/progress';

interface CivicScoreDisplayProps {
  score: number;
}

export default function CivicScoreDisplay({ score }: CivicScoreDisplayProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{t('yourCivicScore')}</span>
        <span className="text-2xl font-bold">{score}</span>
      </div>
      <Progress value={Math.min(score, 100)} />
    </div>
  );
}

import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDailyFact } from '../../utils/dailyFactSelection';

export default function DailyFact() {
  const { t, language } = useLanguage();
  const fact = getDailyFact(language);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('dailyFact')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">{fact}</p>
      </CardContent>
    </Card>
  );
}

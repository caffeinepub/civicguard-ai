import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MotivationalVideos() {
  const { t } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('motivationalVideos')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground py-8">{t('noData')}</p>
      </CardContent>
    </Card>
  );
}

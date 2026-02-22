import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function BeforeAfterComparison() {
  const { t } = useLanguage();

  return (
    <Card>
      <CardContent className="py-12">
        <p className="text-center text-muted-foreground">{t('noData')}</p>
      </CardContent>
    </Card>
  );
}

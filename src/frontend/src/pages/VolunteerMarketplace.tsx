import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VolunteerMarketplace() {
  const { t } = useLanguage();

  return (
    <div className="container py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('volunteerTitle')}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t('availableTasks')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <img 
              src="/assets/generated/empty-state-reports.dim_400x300.png" 
              alt={t('noData')}
              className="mx-auto mb-4 w-48 h-36 object-contain opacity-50"
            />
            <p className="text-muted-foreground">{t('noData')}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

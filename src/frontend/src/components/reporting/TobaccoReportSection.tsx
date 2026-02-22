import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function TobaccoReportSection() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <img 
              src="/assets/generated/icon-tobacco.dim_128x128.png" 
              alt={t('tobaccoTitle')}
              className="w-16 h-16"
            />
            <CardTitle>{t('tobaccoTitle')}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{t('tobaccoAwareness')}</AlertDescription>
          </Alert>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium text-muted-foreground">{t('tobaccoStats')}</p>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

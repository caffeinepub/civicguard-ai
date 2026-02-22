import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LanguageToggle from '../components/settings/LanguageToggle';

export default function Settings() {
  const { t } = useLanguage();

  return (
    <div className="container max-w-2xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('settingsTitle')}</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('languageSettings')}</CardTitle>
        </CardHeader>
        <CardContent>
          <LanguageToggle />
        </CardContent>
      </Card>
    </div>
  );
}

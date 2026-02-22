import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HelplinePanel from '../components/helpline/HelplinePanel';
import DailyFact from '../components/education/DailyFact';
import CivicHeatmap from '../components/dashboard/CivicHeatmap';
import AreaCivicScores from '../components/dashboard/AreaCivicScores';

export default function Dashboard() {
  const { t } = useLanguage();

  return (
    <div className="container py-8 px-4 space-y-8">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/assets/generated/hero-banner.dim_1200x400.png" 
          alt="CivicGuard AI"
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 flex items-center">
          <div className="container px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('appName')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('dashboardTitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Helpline Panel */}
      <HelplinePanel />

      {/* Daily Fact */}
      <DailyFact />

      {/* Heatmap and Scores */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('civicHeatmap')}</CardTitle>
          </CardHeader>
          <CardContent>
            <CivicHeatmap />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('areaCivicScores')}</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaCivicScores />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

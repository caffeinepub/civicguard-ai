import { useLanguage } from '../contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DailyQuiz from '../components/education/DailyQuiz';
import DailyFact from '../components/education/DailyFact';
import DailyStory from '../components/education/DailyStory';
import MotivationalVideos from '../components/education/MotivationalVideos';
import TobaccoReportSection from '../components/reporting/TobaccoReportSection';

export default function Education() {
  const { t } = useLanguage();

  return (
    <div className="container py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('educationTitle')}</h1>
      
      <Tabs defaultValue="quiz" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="quiz">{t('dailyQuiz')}</TabsTrigger>
          <TabsTrigger value="fact">{t('dailyFact')}</TabsTrigger>
          <TabsTrigger value="story">{t('dailyStory')}</TabsTrigger>
          <TabsTrigger value="videos">{t('motivationalVideos')}</TabsTrigger>
          <TabsTrigger value="tobacco">{t('tobaccoTitle')}</TabsTrigger>
        </TabsList>

        <TabsContent value="quiz">
          <DailyQuiz />
        </TabsContent>

        <TabsContent value="fact">
          <DailyFact />
        </TabsContent>

        <TabsContent value="story">
          <DailyStory />
        </TabsContent>

        <TabsContent value="videos">
          <MotivationalVideos />
        </TabsContent>

        <TabsContent value="tobacco">
          <TobaccoReportSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

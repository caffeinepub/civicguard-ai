import { useLanguage } from '../../contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Leaderboard() {
  const { t } = useLanguage();

  return (
    <Tabs defaultValue="city">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="city">{t('cityLeaderboard')}</TabsTrigger>
        <TabsTrigger value="school">{t('schoolLeaderboard')}</TabsTrigger>
      </TabsList>
      <TabsContent value="city" className="space-y-4">
        <p className="text-center text-muted-foreground py-8">{t('noData')}</p>
      </TabsContent>
      <TabsContent value="school" className="space-y-4">
        <p className="text-center text-muted-foreground py-8">{t('noData')}</p>
      </TabsContent>
    </Tabs>
  );
}

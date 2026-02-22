import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDailyStory } from '../../utils/dailyStorySelection';

export default function DailyStory() {
  const { t, language } = useLanguage();
  const story = getDailyStory(language);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="whitespace-pre-line">{story.content}</p>
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium text-muted-foreground mb-1">Moral:</p>
          <p className="text-sm">{story.moral}</p>
        </div>
      </CardContent>
    </Card>
  );
}

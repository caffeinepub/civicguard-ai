import { useLanguage } from '../contexts/LanguageContext';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CivicScoreDisplay from '../components/gamification/CivicScoreDisplay';
import BadgeDisplay from '../components/gamification/BadgeDisplay';
import Leaderboard from '../components/gamification/Leaderboard';

export default function Profile() {
  const { t } = useLanguage();
  const { data: profile, isLoading } = useGetCallerUserProfile();

  if (isLoading) {
    return (
      <div className="container py-8 px-4">
        <p className="text-center text-muted-foreground">{t('loading')}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container py-8 px-4">
        <p className="text-center text-muted-foreground">{t('noData')}</p>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8 px-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{profile.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
        </CardHeader>
        <CardContent>
          <CivicScoreDisplay score={Number(profile.civicScore)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('yourBadges')}</CardTitle>
        </CardHeader>
        <CardContent>
          <BadgeDisplay badgeLevel={Number(profile.badgeLevel)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('leaderboard')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Leaderboard />
        </CardContent>
      </Card>
    </div>
  );
}

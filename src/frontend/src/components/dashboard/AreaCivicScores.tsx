import { useLanguage } from '../../contexts/LanguageContext';
import { Progress } from '@/components/ui/progress';

export default function AreaCivicScores() {
  const { t } = useLanguage();

  const areas = [
    { name: 'Downtown', cleanliness: 75, discipline: 82 },
    { name: 'Suburbs', cleanliness: 88, discipline: 79 },
    { name: 'Industrial', cleanliness: 65, discipline: 71 },
  ];

  return (
    <div className="space-y-6">
      {areas.map((area) => (
        <div key={area.name} className="space-y-2">
          <h4 className="font-medium">{area.name}</h4>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">{t('cleanlinessScore')}</span>
                <span className="font-medium">{area.cleanliness}%</span>
              </div>
              <Progress value={area.cleanliness} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">{t('disciplineScore')}</span>
                <span className="font-medium">{area.discipline}%</span>
              </div>
              <Progress value={area.discipline} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

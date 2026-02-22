import { useLanguage } from '../../contexts/LanguageContext';

export default function CivicHeatmap() {
  const { t } = useLanguage();

  return (
    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
      <p className="text-muted-foreground">{t('civicHeatmap')}</p>
    </div>
  );
}

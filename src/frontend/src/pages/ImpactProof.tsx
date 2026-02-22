import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BeforeAfterComparison from '../components/impact/BeforeAfterComparison';

export default function ImpactProof() {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('impactTitle')}</h1>
      <BeforeAfterComparison />
    </div>
  );
}

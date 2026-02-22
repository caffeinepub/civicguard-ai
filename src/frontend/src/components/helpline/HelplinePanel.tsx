import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function HelplinePanel() {
  const { t } = useLanguage();

  const helplines = [
    { number: '112', label: t('helplineEmergency'), color: 'bg-red-500/10 hover:bg-red-500/20 border-red-500/20' },
    { number: '1969', label: t('helplineTraffic'), color: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20' },
    { number: '103', label: t('helplineAmbulance'), color: 'bg-green-500/10 hover:bg-green-500/20 border-green-500/20' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('helplineTitle')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-3 gap-4">
          {helplines.map((helpline) => (
            <div
              key={helpline.number}
              className={`p-4 rounded-lg border-2 ${helpline.color} transition-colors`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5" />
                <span className="text-2xl font-bold">{helpline.number}</span>
              </div>
              <p className="text-sm text-muted-foreground">{helpline.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

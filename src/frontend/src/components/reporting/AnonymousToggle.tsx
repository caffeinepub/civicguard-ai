import { useLanguage } from '../../contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface AnonymousToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function AnonymousToggle({ checked, onChange }: AnonymousToggleProps) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
      <div className="space-y-0.5">
        <Label htmlFor="anonymous" className="text-base">
          {t('anonymousReport')}
        </Label>
        <p className="text-sm text-muted-foreground">{t('anonymousReportDesc')}</p>
      </div>
      <Switch id="anonymous" checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

import { useLanguage } from '../../contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="space-y-2">
      <Label>{t('selectLanguage')}</Label>
      <Select value={language} onValueChange={(v) => setLanguage(v as 'en' | 'hi')}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('english')}</SelectItem>
          <SelectItem value="hi">{t('hindi')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

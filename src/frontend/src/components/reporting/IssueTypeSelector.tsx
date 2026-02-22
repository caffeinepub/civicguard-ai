import { useLanguage } from '../../contexts/LanguageContext';
import { IssueType } from '../../backend';

interface IssueTypeSelectorProps {
  value: IssueType | null;
  onChange: (type: IssueType) => void;
}

export default function IssueTypeSelector({ value, onChange }: IssueTypeSelectorProps) {
  const { t } = useLanguage();

  const issueTypes: { type: IssueType; icon: string; label: string }[] = [
    { type: IssueType.garbage, icon: '/assets/generated/icon-garbage.dim_128x128.png', label: t('issueGarbage') },
    { type: IssueType.tobaccoSpit, icon: '/assets/generated/icon-tobacco.dim_128x128.png', label: t('issueTobacco') },
    { type: IssueType.trafficViolation, icon: '/assets/generated/icon-traffic.dim_128x128.png', label: t('issueTraffic') },
    { type: IssueType.publicNuisance, icon: '/assets/generated/icon-nuisance.dim_128x128.png', label: t('issueNuisance') },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {issueTypes.map((issue) => (
        <button
          key={issue.type}
          type="button"
          onClick={() => onChange(issue.type)}
          className={`p-4 rounded-lg border-2 transition-all hover:border-primary ${
            value === issue.type ? 'border-primary bg-primary/10' : 'border-border'
          }`}
        >
          <img src={issue.icon} alt={issue.label} className="w-16 h-16 mx-auto mb-2" />
          <p className="text-sm font-medium text-center">{issue.label}</p>
        </button>
      ))}
    </div>
  );
}

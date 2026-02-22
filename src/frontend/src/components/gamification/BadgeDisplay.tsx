import { useLanguage } from '../../contexts/LanguageContext';

interface BadgeDisplayProps {
  badgeLevel: number;
}

export default function BadgeDisplay({ badgeLevel }: BadgeDisplayProps) {
  const { t } = useLanguage();

  const badges = [
    { level: 0, name: t('badgeFirstReport'), image: '/assets/generated/badge-first-report.dim_200x200.png' },
    { level: 1, name: t('badgeChampion'), image: '/assets/generated/badge-champion.dim_200x200.png' },
    { level: 2, name: t('badgeLeader'), image: '/assets/generated/badge-leader.dim_200x200.png' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {badges.map((badge) => (
        <div key={badge.level} className="text-center">
          <div className={`relative ${badgeLevel >= badge.level ? '' : 'opacity-30'}`}>
            <img src={badge.image} alt={badge.name} className="w-full h-auto" />
          </div>
          <p className="text-xs mt-2">{badge.name}</p>
        </div>
      ))}
    </div>
  );
}

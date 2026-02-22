import { Link } from '@tanstack/react-router';
import { useLanguage } from '../../contexts/LanguageContext';
import { Home, FileText, List, Users, BookOpen, User, Settings, FileCheck, TrendingUp } from 'lucide-react';

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const { t } = useLanguage();

  const navItems = [
    { to: '/', label: t('navHome'), icon: Home },
    { to: '/file-complaint', label: t('navFileComplaint'), icon: FileText },
    { to: '/my-complaints', label: t('navMyComplaints'), icon: List },
    { to: '/volunteer', label: t('navVolunteer'), icon: Users },
    { to: '/education', label: t('navEducation'), icon: BookOpen },
    { to: '/profile', label: t('navProfile'), icon: User },
    { to: '/rti-generator', label: t('navRTI'), icon: FileCheck },
    { to: '/impact-proof', label: t('navImpact'), icon: TrendingUp },
    { to: '/settings', label: t('navSettings'), icon: Settings },
  ];

  return (
    <nav className="flex flex-col gap-4 mt-8">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
            activeProps={{ className: 'bg-accent font-medium' }}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

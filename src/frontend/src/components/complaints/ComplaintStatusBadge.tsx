import { useLanguage } from '../../contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import type { ComplaintStatus } from '../../backend';

interface ComplaintStatusBadgeProps {
  status: ComplaintStatus;
}

export default function ComplaintStatusBadge({ status }: ComplaintStatusBadgeProps) {
  const { t } = useLanguage();

  const statusConfig = {
    received: { variant: 'secondary' as const, label: t('statusReceived') },
    underReview: { variant: 'default' as const, label: t('statusUnderReview') },
    actionTaken: { variant: 'outline' as const, label: t('statusActionTaken') },
    escalated: { variant: 'destructive' as const, label: t('statusEscalated') },
  };

  const config = statusConfig[status];

  return <Badge variant={config.variant}>{config.label}</Badge>;
}

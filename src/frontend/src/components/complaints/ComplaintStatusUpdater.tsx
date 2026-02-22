import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUpdateComplaintStatus } from '../../hooks/useQueries';
import { useGetCallerUserProfile } from '../../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ComplaintStatus } from '../../backend';

interface ComplaintStatusUpdaterProps {
  complaintId: string;
  currentStatus: ComplaintStatus;
}

export default function ComplaintStatusUpdater({ complaintId, currentStatus }: ComplaintStatusUpdaterProps) {
  const { t } = useLanguage();
  const { data: profile } = useGetCallerUserProfile();
  const updateStatus = useUpdateComplaintStatus();
  const [newStatus, setNewStatus] = useState<ComplaintStatus>(currentStatus);

  const isAuthorityOrAdmin = profile?.role === 'Authority' || profile?.role === 'Admin';

  if (!isAuthorityOrAdmin) {
    return null;
  }

  const handleUpdate = async () => {
    try {
      await updateStatus.mutateAsync({ complaintId, newStatus });
      toast.success(t('success'));
    } catch (error) {
      toast.error(t('error'));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('updateStatus')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={newStatus} onValueChange={(v) => setNewStatus(v as ComplaintStatus)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ComplaintStatus.received}>{t('statusReceived')}</SelectItem>
            <SelectItem value={ComplaintStatus.underReview}>{t('statusUnderReview')}</SelectItem>
            <SelectItem value={ComplaintStatus.actionTaken}>{t('statusActionTaken')}</SelectItem>
            <SelectItem value={ComplaintStatus.escalated}>{t('statusEscalated')}</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleUpdate} disabled={updateStatus.isPending || newStatus === currentStatus}>
          {updateStatus.isPending ? t('loading') : t('updateStatus')}
        </Button>
      </CardContent>
    </Card>
  );
}

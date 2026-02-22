import { useParams } from '@tanstack/react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useGetComplaint } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ComplaintStatusBadge from '../components/complaints/ComplaintStatusBadge';
import ComplaintStatusTimeline from '../components/complaints/ComplaintStatusTimeline';
import ComplaintStatusUpdater from '../components/complaints/ComplaintStatusUpdater';
import { format } from 'date-fns';

export default function ComplaintDetail() {
  const { id } = useParams({ from: '/complaint/$id' });
  const { t } = useLanguage();
  const { data: complaint, isLoading } = useGetComplaint(id);

  if (isLoading) {
    return (
      <div className="container py-8 px-4">
        <p className="text-center text-muted-foreground">{t('loading')}</p>
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="container py-8 px-4">
        <p className="text-center text-muted-foreground">{t('noData')}</p>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8 px-4 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>{t('complaintDetails')}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {t('trackingId')}: {complaint.id}
              </p>
            </div>
            <ComplaintStatusBadge status={complaint.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{t('selectIssueType')}</p>
            <p className="text-lg">
              {t(`issue${complaint.issueType.charAt(0).toUpperCase() + complaint.issueType.slice(1)}`)}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">{t('describeIssue')}</p>
            <p>{complaint.description}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">{t('reportedOn')}</p>
            <p>{format(new Date(Number(complaint.timestamp) / 1000000), 'PPp')}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">{t('reportedBy')}</p>
            <p>{complaint.anonymous ? t('anonymous') : complaint.reporter?.toString()}</p>
          </div>

          {complaint.media.length > 0 && (
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">{t('uploadMedia')}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {complaint.media.map((m, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-muted">
                    {m.mediaType === 'image' ? (
                      <img src={m.url} alt="Evidence" className="w-full h-full object-cover" />
                    ) : (
                      <video src={m.url} controls className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('statusHistory')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ComplaintStatusTimeline statusHistory={complaint.statusHistory} />
        </CardContent>
      </Card>

      <ComplaintStatusUpdater complaintId={complaint.id} currentStatus={complaint.status} />
    </div>
  );
}

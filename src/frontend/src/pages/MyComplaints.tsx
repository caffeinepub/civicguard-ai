import { useLanguage } from '../contexts/LanguageContext';
import { useMyComplaints } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import ComplaintStatusBadge from '../components/complaints/ComplaintStatusBadge';
import { format } from 'date-fns';

export default function MyComplaints() {
  const { t } = useLanguage();
  const { data: complaints, isLoading } = useMyComplaints();

  if (isLoading) {
    return (
      <div className="container py-8 px-4">
        <p className="text-center text-muted-foreground">{t('loading')}</p>
      </div>
    );
  }

  if (!complaints || complaints.length === 0) {
    return (
      <div className="container max-w-2xl py-16 px-4 text-center">
        <img 
          src="/assets/generated/empty-state-reports.dim_400x300.png" 
          alt={t('noComplaints')}
          className="mx-auto mb-6 w-64 h-48 object-contain"
        />
        <h2 className="text-2xl font-bold mb-2">{t('noComplaints')}</h2>
        <p className="text-muted-foreground mb-6">{t('noComplaintsDesc')}</p>
        <Button asChild>
          <Link to="/file-complaint">{t('navFileComplaint')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('myComplaintsTitle')}</h1>
      <div className="grid gap-4">
        {complaints.map((complaint) => (
          <Card key={complaint.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {t(`issue${complaint.issueType.charAt(0).toUpperCase() + complaint.issueType.slice(1)}`)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {format(new Date(Number(complaint.timestamp) / 1000000), 'PPp')}
                  </p>
                </div>
                <ComplaintStatusBadge status={complaint.status} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 line-clamp-2">{complaint.description}</p>
              <Button asChild variant="outline" size="sm">
                <Link to="/complaint/$id" params={{ id: complaint.id }}>{t('viewDetails')}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useFileComplaint } from '../hooks/useQueries';
import { useGeolocation } from '../hooks/useGeolocation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import IssueTypeSelector from '../components/reporting/IssueTypeSelector';
import ImageUploader from '../components/reporting/ImageUploader';
import VideoUploader from '../components/reporting/VideoUploader';
import AnonymousToggle from '../components/reporting/AnonymousToggle';
import { toast } from 'sonner';
import type { IssueType, Media } from '../backend';

export default function FileComplaint() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const fileComplaint = useFileComplaint();
  const { latitude, longitude, loading: locationLoading } = useGeolocation();

  const [issueType, setIssueType] = useState<IssueType | null>(null);
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState<Media[]>([]);
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!issueType) {
      toast.error(t('selectIssueType'));
      return;
    }

    if (!latitude || !longitude) {
      toast.error(t('capturingLocation'));
      return;
    }

    try {
      await fileComplaint.mutateAsync({
        issueType,
        description,
        location: { latitude, longitude },
        media,
        anonymous,
      });

      toast.success(t('reportSubmitted'));
      navigate({ to: '/my-complaints' });
    } catch (error) {
      toast.error(t('error'));
      console.error(error);
    }
  };

  return (
    <div className="container max-w-3xl py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('fileComplaintTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>{t('selectIssueType')}</Label>
              <IssueTypeSelector value={issueType} onChange={setIssueType} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">{t('describeIssue')}</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t('describeIssue')}
                rows={4}
                required
              />
            </div>

            <div className="space-y-4">
              <Label>{t('uploadMedia')}</Label>
              <div className="grid sm:grid-cols-2 gap-4">
                <ImageUploader onMediaUploaded={(m) => setMedia([...media, m])} />
                <VideoUploader onMediaUploaded={(m) => setMedia([...media, m])} />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">{locationLoading ? t('capturingLocation') : t('locationCaptured')}</p>
                {latitude && longitude && (
                  <p className="text-sm text-muted-foreground">
                    {latitude.toFixed(4)}, {longitude.toFixed(4)}
                  </p>
                )}
              </div>
            </div>

            <AnonymousToggle checked={anonymous} onChange={setAnonymous} />

            <Button type="submit" className="w-full" disabled={fileComplaint.isPending || locationLoading}>
              {fileComplaint.isPending ? t('loading') : t('submitReport')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

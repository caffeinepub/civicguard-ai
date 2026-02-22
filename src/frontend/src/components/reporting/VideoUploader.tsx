import { useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useGeolocation } from '../../hooks/useGeolocation';
import { Button } from '@/components/ui/button';
import { Upload, Video } from 'lucide-react';
import { toast } from 'sonner';
import type { Media, MediaType } from '../../backend';

interface VideoUploaderProps {
  onMediaUploaded: (media: Media) => void;
}

export default function VideoUploader({ onMediaUploaded }: VideoUploaderProps) {
  const { t } = useLanguage();
  const { latitude, longitude } = useGeolocation();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateVideoDuration = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        resolve(duration >= 30 && duration <= 90);
      };

      video.onerror = () => {
        resolve(false);
      };

      video.src = URL.createObjectURL(file);
    });
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !latitude || !longitude) return;

    const isValid = await validateVideoDuration(file);
    if (!isValid) {
      toast.error('Video must be between 30-90 seconds');
      return;
    }

    setUploading(true);

    try {
      // Create a blob URL for the video
      const url = URL.createObjectURL(file);

      const media: Media = {
        mediaType: 'video' as MediaType,
        url,
        location: { latitude, longitude },
        timestamp: BigInt(Date.now() * 1000000),
      };

      onMediaUploaded(media);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      <Button
        type="button"
        variant="outline"
        className="w-full h-32 flex flex-col gap-2"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
      >
        {uploading ? (
          <>
            <Upload className="h-8 w-8 animate-pulse" />
            <span className="text-sm">{t('loading')}</span>
          </>
        ) : (
          <>
            <Video className="h-8 w-8" />
            <span className="text-sm">{t('uploadVideo')}</span>
          </>
        )}
      </Button>
    </div>
  );
}

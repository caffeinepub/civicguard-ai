import { useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useGeolocation } from '../../hooks/useGeolocation';
import { Button } from '@/components/ui/button';
import { Upload, Image as ImageIcon } from 'lucide-react';
import type { Media, MediaType } from '../../backend';

interface ImageUploaderProps {
  onMediaUploaded: (media: Media) => void;
}

export default function ImageUploader({ onMediaUploaded }: ImageUploaderProps) {
  const { t } = useLanguage();
  const { latitude, longitude } = useGeolocation();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !latitude || !longitude) return;

    setUploading(true);

    try {
      // Create a blob URL for the image
      const url = URL.createObjectURL(file);

      const media: Media = {
        mediaType: 'image' as MediaType,
        url,
        location: { latitude, longitude },
        timestamp: BigInt(Date.now() * 1000000),
      };

      onMediaUploaded(media);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
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
            <ImageIcon className="h-8 w-8" />
            <span className="text-sm">{t('uploadImage')}</span>
          </>
        )}
      </Button>
    </div>
  );
}

import { Heart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'civicguard-ai');

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container py-6 px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} {t('appName')}
          </p>
          <p className="flex items-center gap-1">
            {t('builtWith')} <Heart className="h-4 w-4 text-red-500 fill-red-500" />{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

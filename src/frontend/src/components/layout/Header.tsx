import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LoginButton from '../auth/LoginButton';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import MobileNav from './MobileNav';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/assets/generated/civicguard-logo.dim_256x256.png" 
              alt={t('appName')}
              className="h-10 w-10"
            />
            <span className="font-bold text-lg hidden sm:inline-block">{t('appName')}</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link 
              to="/" 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              activeProps={{ className: 'text-foreground font-medium' }}
            >
              {t('navHome')}
            </Link>
            <Link 
              to="/file-complaint" 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              activeProps={{ className: 'text-foreground font-medium' }}
            >
              {t('navFileComplaint')}
            </Link>
            <Link 
              to="/my-complaints" 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              activeProps={{ className: 'text-foreground font-medium' }}
            >
              {t('navMyComplaints')}
            </Link>
            <Link 
              to="/education" 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              activeProps={{ className: 'text-foreground font-medium' }}
            >
              {t('navEducation')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LoginButton />
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileNav onClose={() => setMobileMenuOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

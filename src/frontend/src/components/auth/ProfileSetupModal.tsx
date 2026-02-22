import { useState } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '../../hooks/useQueries';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '../../contexts/LanguageContext';
import type { UserProfile } from '../../backend';

export default function ProfileSetupModal() {
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [role, setRole] = useState<string>('Citizen');

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const profile: UserProfile = {
      name: name.trim(),
      role,
      badgeLevel: BigInt(0),
      civicScore: BigInt(0),
    };

    await saveProfile.mutateAsync(profile);
  };

  return (
    <Dialog open={showProfileSetup}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{t('profileSetupTitle')}</DialogTitle>
          <DialogDescription>{t('profileSetupDesc')}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('profileSetupName')}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('profileSetupName')}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">{t('profileSetupRole')}</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Citizen">{t('roleCitizen')}</SelectItem>
                <SelectItem value="Authority">{t('roleAuthority')}</SelectItem>
                <SelectItem value="Admin">{t('roleAdmin')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled={saveProfile.isPending}>
            {saveProfile.isPending ? t('loading') : t('profileSetupSubmit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

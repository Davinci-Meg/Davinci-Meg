'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { profileData } from '@/lib/data/profile';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--background)] py-24 px-6 md:px-12 border-t border-[var(--card-border)]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter mb-6">
            Megumu Isshiki
          </h2>
          <div className="flex flex-col gap-2 text-lg font-medium text-gray-500">
            <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[var(--accent)] transition-colors">GitHub</a>
            <a href={profileData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[var(--accent)] transition-colors">Facebook</a>
            <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[var(--accent)] transition-colors">Instagram</a>
            <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[var(--accent)] transition-colors">YouTube</a>
          </div>
        </div>

        <div className="text-sm font-mono text-gray-400">
          © {new Date().getFullYear()} Megumu Isshiki. {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
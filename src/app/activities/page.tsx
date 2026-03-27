'use client';

import { LanguageProvider, useTranslation } from '@/hooks/useTranslation';
import { activitiesData } from '@/lib/data/activities';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function ActivitiesPageContent() {
  const { t, currentLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-24">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Portfolio</span>
        </Link>

        <h1 className="text-section-title mb-16">{t('sections.activities')}</h1>

        {/* Desktop: table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--card-border)]">
                <th className="text-left py-3 pr-6 text-sm font-bold uppercase tracking-wider text-[var(--foreground)]/60">
                  {currentLanguage === 'ja' ? 'タイトル' : 'Title'}
                </th>
                <th className="text-left py-3 pr-6 text-sm font-bold uppercase tracking-wider text-[var(--foreground)]/60 w-48">
                  {currentLanguage === 'ja' ? '役割' : 'Role'}
                </th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {activitiesData.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-[var(--card-border)] hover:bg-[var(--card-bg)] transition-colors"
                >
                  <td className="py-4 pr-6 font-medium">
                    {activity.title[currentLanguage]}
                  </td>
                  <td className="py-4 pr-6 text-[var(--accent)]">
                    {activity.role[currentLanguage]}
                  </td>
                  <td className="py-4">
                    <a
                      href={activity.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)]/40 hover:text-[var(--accent)] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: card list */}
        <div className="md:hidden space-y-4">
          {activitiesData.map((activity) => (
            <a
              key={activity.id}
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-[var(--card-border)] rounded-xl hover:bg-[var(--card-bg)] transition-colors"
            >
              <h3 className="font-medium mb-1 leading-tight">
                {activity.title[currentLanguage]}
              </h3>
              <p className="text-sm text-[var(--accent)]">
                {activity.role[currentLanguage]}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <LanguageProvider>
      <ActivitiesPageContent />
    </LanguageProvider>
  );
}

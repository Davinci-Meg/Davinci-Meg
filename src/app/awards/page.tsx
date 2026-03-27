'use client';

import { LanguageProvider, useTranslation } from '@/hooks/useTranslation';
import { awardsData } from '@/lib/data/awards';
import { groupByYear } from '@/lib/utils';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function AwardsPageContent() {
  const { currentLanguage } = useTranslation();
  const groupedAwards = groupByYear(awardsData);
  const years = Object.keys(groupedAwards).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-24">
        <Link
          href="/#awards"
          className="inline-flex items-center gap-2 text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Portfolio</span>
        </Link>

        <h1 className="text-section-title mb-16">Awards & Honors</h1>

        {/* Desktop: table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--card-border)]">
                <th className="text-left py-3 pr-6 text-sm font-bold uppercase tracking-wider text-[var(--foreground)]/60 w-20">
                  {currentLanguage === 'ja' ? '年' : 'Year'}
                </th>
                <th className="text-left py-3 pr-6 text-sm font-bold uppercase tracking-wider text-[var(--foreground)]/60">
                  {currentLanguage === 'ja' ? 'タイトル' : 'Title'}
                </th>
                <th className="text-left py-3 pr-6 text-sm font-bold uppercase tracking-wider text-[var(--foreground)]/60 w-64">
                  {currentLanguage === 'ja' ? '受賞' : 'Award'}
                </th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {years.map((year) =>
                groupedAwards[year].map((award, index) => (
                  <tr
                    key={award.id}
                    className="border-b border-[var(--card-border)] hover:bg-[var(--card-bg)] transition-colors"
                  >
                    <td className="py-4 pr-6 text-[var(--foreground)]/40 font-bold tabular-nums">
                      {index === 0 ? year : ''}
                    </td>
                    <td className="py-4 pr-6 font-medium">
                      {award.title[currentLanguage]}
                    </td>
                    <td className="py-4 pr-6 text-[var(--accent)]">
                      {award.prize[currentLanguage]}
                    </td>
                    <td className="py-4">
                      <a
                        href={award.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--foreground)]/40 hover:text-[var(--accent)] transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile: card list */}
        <div className="md:hidden space-y-12">
          {years.map((year) => (
            <div key={year}>
              <h2 className="text-4xl font-bold mb-6 text-gray-200 dark:text-gray-800">
                {year}
              </h2>
              <div className="space-y-4">
                {groupedAwards[year].map((award) => (
                  <a
                    key={award.id}
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-[var(--card-border)] rounded-xl hover:bg-[var(--card-bg)] transition-colors"
                  >
                    <h3 className="font-medium mb-1 leading-tight">
                      {award.title[currentLanguage]}
                    </h3>
                    {award.prize[currentLanguage] && (
                      <p className="text-sm text-[var(--accent)]">
                        {award.prize[currentLanguage]}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <LanguageProvider>
      <AwardsPageContent />
    </LanguageProvider>
  );
}

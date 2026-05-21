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
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <Link
          href="/#awards"
          className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors mb-16 md:mb-24"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Portfolio</span>
        </Link>

        <p className="text-eyebrow mb-8">Index / Awards</p>
        <h1 className="text-section-title mb-20 md:mb-32">Awards &amp; Honors</h1>

        <div>
          {years.map((year) => (
            <section key={year} className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-medium tabular-nums tracking-tight pb-4 border-b border-[var(--foreground)]">
                {year}
              </h2>
              <ul>
                {groupedAwards[year].map((award) => (
                  <li key={award.id} className="border-b border-[var(--rule)] group">
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline cursor-pointer transition-colors hover:bg-[var(--rule)]/30"
                    >
                      <p className="col-span-12 md:col-span-3 text-xs md:text-sm tracking-[0.12em] uppercase text-[var(--foreground-muted)]">
                        {award.prize[currentLanguage]}
                      </p>
                      <h3 className="col-span-10 md:col-span-8 text-base md:text-xl font-medium leading-snug tracking-tight group-hover:text-[var(--accent)] transition-colors">
                        {award.title[currentLanguage]}
                      </h3>
                      <span className="col-span-2 md:col-span-1 flex justify-end text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-all duration-300 group-hover:translate-x-1">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
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

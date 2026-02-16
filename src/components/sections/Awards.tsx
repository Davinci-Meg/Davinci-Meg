'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { awardsData } from '@/lib/data/awards';
import { groupByYear } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';

export function Awards() {
  const { t, currentLanguage } = useTranslation();
  const revealRef = useScrollReveal();
  const groupedAwards = groupByYear(awardsData);
  const years = Object.keys(groupedAwards).map(Number).sort((a, b) => b - a);

  return (
    <Section id="awards" className="bg-[var(--card-bg)]">
      <div ref={revealRef} className="max-w-screen-xl mx-auto px-6 md:px-12 scroll-reveal">
        <h2 className="text-section-title mb-12">
          {t('sections.awards')}
        </h2>

        <div className="space-y-16">
          {years.map((year) => (
            <div key={year}>
              <h3 className="text-6xl font-bold mb-8 text-gray-200 dark:text-gray-800">
                {year}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {groupedAwards[year].map((award) => (
                  <Card key={award.id} className="flex flex-col justify-between h-full group">
                    <div>
                      <h4 className="font-bold text-xl mb-2 leading-tight">
                        {award.title[currentLanguage]}
                      </h4>
                      <p className="text-[var(--accent)] font-medium mb-4">
                        {award.prize[currentLanguage]}
                      </p>
                    </div>
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex items-center text-sm font-bold uppercase tracking-wider mt-4 group-hover:text-[var(--accent)] transition-colors"
                    >
                      {t('ui.viewDetails')} <ArrowUpRight className="ml-1 w-4 h-4" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
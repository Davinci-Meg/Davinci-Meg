'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { awardsData } from '@/lib/data/awards';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Awards() {
  const { t, currentLanguage } = useTranslation();
  const selectedAwards = awardsData.filter(a => a.selected).sort((a, b) => b.year - a.year);

  return (
    <Section id="awards" className="bg-[var(--card-bg)]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-section-title mb-12">
          {t('sections.awards')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {selectedAwards.map((award) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/awards"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-bold text-lg hover:underline transition-colors"
          >
            {t('ui.viewAll')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
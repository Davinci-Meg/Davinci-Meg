'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { mediaCoverageData } from '@/lib/data/media';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';

export function MediaCoverage() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="media" className="bg-[var(--background)]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-section-title mb-12">
          {t('sections.media')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {mediaCoverageData.map((media) => (
            <Card key={media.id} className="flex flex-col justify-between h-full group">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {media.organization}
                </p>
                <h3 className="font-bold text-xl mb-4 leading-tight">
                  {media.title[currentLanguage]}
                </h3>
              </div>
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider group-hover:text-[var(--accent)] transition-colors"
              >
                {t('ui.viewArticle')} <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
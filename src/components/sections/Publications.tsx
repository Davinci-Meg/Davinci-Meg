'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { publicationsData } from '@/lib/data/publications';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Publications() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="publications" className="bg-[var(--background)]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-section-title mb-12">
          {t('sections.publications')}
        </h2>

        <div className="grid gap-6">
          {publicationsData.map((publication) => (
            <Card key={publication.id} className="group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <p className="text-sm font-mono text-gray-500 mb-2">
                {publication.authors[currentLanguage]}
              </p>
              <h3 className="font-bold text-xl md:text-2xl mb-3 leading-tight group-hover:text-[var(--accent)] transition-colors">
                &ldquo;{publication.title[currentLanguage]}&rdquo;
              </h3>
              <p className="text-lg font-medium">
                {publication.venue[currentLanguage]}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
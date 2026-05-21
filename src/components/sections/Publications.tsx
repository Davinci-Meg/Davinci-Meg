'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { publicationsData } from '@/lib/data/publications';
import { Section } from '@/components/ui/Section';

export function Publications() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="publications">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <p className="text-eyebrow mb-8">03 / Publications</p>
        <h2 className="text-section-title mb-20 md:mb-32">{t('sections.publications')}</h2>

        <ul className="border-t border-[var(--rule)]">
          {publicationsData.map((publication) => (
            <li
              key={publication.id}
              className="border-b border-[var(--rule)] py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8"
            >
              <p className="col-span-12 md:col-span-3 text-xs md:text-sm font-mono text-[var(--foreground-muted)] leading-relaxed">
                {publication.authors[currentLanguage]}
              </p>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-xl md:text-3xl font-medium leading-snug tracking-tight mb-3">
                  &ldquo;{publication.title[currentLanguage]}&rdquo;
                </h3>
                <p className="text-sm md:text-base text-[var(--foreground-muted)]">
                  {publication.venue[currentLanguage]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
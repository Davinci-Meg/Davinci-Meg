'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { activitiesData } from '@/lib/data/activities';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';

export function Activities() {
  const { t, currentLanguage } = useTranslation();
  const revealRef = useScrollReveal();

  return (
    <Section id="activities" className="bg-[var(--card-bg)]">
      <div ref={revealRef} className="max-w-screen-xl mx-auto px-6 md:px-12 scroll-reveal">
        <h2 className="text-section-title mb-12">
          {t('sections.activities')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {activitiesData.map((activity) => (
            <Card key={activity.id} className="flex flex-col justify-between h-full group">
              <div>
                <h3 className="font-bold text-xl mb-2 leading-tight">
                  {activity.title[currentLanguage]}
                </h3>
                <p className="text-[var(--accent)] font-medium mb-4">
                  {activity.role[currentLanguage]}
                </p>
              </div>
              <a
                href={activity.url}
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
    </Section>
  );
}
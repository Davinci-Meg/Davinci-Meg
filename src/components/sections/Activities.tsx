'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { activitiesData } from '@/lib/data/activities';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Activities() {
  const { t, currentLanguage } = useTranslation();
  const selectedActivities = activitiesData.filter(a => a.selected);

  return (
    <Section id="activities" className="bg-[var(--card-bg)]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-section-title mb-12">
          {t('sections.activities')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {selectedActivities.map((activity) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-bold text-lg hover:underline transition-colors"
          >
            {t('ui.viewAll')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
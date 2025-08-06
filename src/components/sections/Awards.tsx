'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { awardsData } from '@/lib/data/awards';
import { groupByYear } from '@/lib/utils';

export function Awards() {
  const { t, currentLanguage } = useTranslation();
  const groupedAwards = groupByYear(awardsData);
  const years = Object.keys(groupedAwards).map(Number).sort((a, b) => b - a);

  return (
    <section id="awards" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('sections.awards')}
          </h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                {t(`years.${year}`)}
              </h3>
              <div className="space-y-4 stagger-fade">
                {groupedAwards[year].map((award) => (
                  <div
                    key={award.id}
                    className="bg-white p-8 rounded-xl shadow-lg card-hover"
                  >
                    <h4 className="font-bold text-xl mb-3 text-gray-800">
                      {award.title[currentLanguage]}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-4 text-lg">
                      {award.prize[currentLanguage]}
                    </p>
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      {t('ui.viewDetails')} →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
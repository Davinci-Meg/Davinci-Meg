'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { activitiesData } from '@/lib/data/activities';

export function Activities() {
  const { t, currentLanguage } = useTranslation();

  return (
    <section id="activities" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent">
            {t('sections.activities')}
          </h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 stagger-fade">
          {activitiesData.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
            >
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {activity.title[currentLanguage]}
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                {activity.role[currentLanguage]}
              </p>
              <a
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors"
              >
                {t('ui.viewDetails')} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
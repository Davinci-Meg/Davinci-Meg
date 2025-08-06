'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { publicationsData } from '@/lib/data/publications';

export function Publications() {
  const { t, currentLanguage } = useTranslation();

  return (
    <section id="publications" className="py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('sections.publications')}
          </h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>
        
        <div className="space-y-6 stagger-fade">
          {publicationsData.map((publication) => (
            <div
              key={publication.id}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
            >
              <p className="text-blue-600 font-medium mb-3">
                {publication.authors[currentLanguage]}
              </p>
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                &ldquo;{publication.title[currentLanguage]}&rdquo;
              </h3>
              <p className="text-gray-600 text-lg">
                {publication.venue[currentLanguage]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
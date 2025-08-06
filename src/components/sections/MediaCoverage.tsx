'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { mediaCoverageData } from '@/lib/data/media';

export function MediaCoverage() {
  const { t, currentLanguage } = useTranslation();

  return (
    <section id="media" className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('sections.media')}
          </h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>
        
        <div className="space-y-6 stagger-fade">
          {mediaCoverageData.map((media) => (
            <div
              key={media.id}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
            >
              <p className="text-indigo-600 font-medium mb-3">
                {media.organization}
              </p>
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                {media.title[currentLanguage]}
              </h3>
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                {t('ui.viewArticle')} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
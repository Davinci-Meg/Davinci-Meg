'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { projectsData } from '@/lib/data/projects';

export function Projects() {
  const { t, currentLanguage } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('sections.projects')}
          </h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative aspect-square group overflow-hidden rounded-xl bg-gray-100 shadow-lg"
            >
              <Image
                src={project.imagePath}
                alt={project.alt[currentLanguage]}
                width={400}
                height={400}
                className="w-full h-full object-cover project-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
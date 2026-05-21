'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { projectsData } from '@/lib/data/projects';
import { getImagePath } from '@/lib/utils';
import { getBlurDataURL } from '@/lib/imageBlur';
import { Section } from '@/components/ui/Section';

export function Projects() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="projects">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <p className="text-eyebrow mb-8">07 / Projects</p>
        <h2 className="text-section-title mb-20 md:mb-32">{t('sections.projects')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="aspect-square relative overflow-hidden bg-[var(--rule)]/40 group"
            >
              <Image
                src={getImagePath(project.imagePath)}
                alt={project.alt[currentLanguage]}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading={index < 6 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL={getBlurDataURL(project.imagePath)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
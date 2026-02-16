'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projectsData } from '@/lib/data/projects';
import { getImagePath } from '@/lib/utils';
import { getBlurDataURL } from '@/lib/imageBlur';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Projects() {
  const { t, currentLanguage } = useTranslation();
  const revealRef = useScrollReveal();

  return (
    <Section id="projects" className="bg-[var(--background)]">
      <div ref={revealRef} className="max-w-screen-xl mx-auto px-6 md:px-12 scroll-reveal">
        <h2 className="text-section-title mb-12">
          {t('sections.projects')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="overflow-hidden p-0 border-0 bg-gray-100 dark:bg-gray-900 aspect-square relative">
              <Image
                src={getImagePath(project.imagePath)}
                alt={project.alt[currentLanguage]}
                fill
                className="object-cover"
                loading={index < 6 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL={getBlurDataURL(project.imagePath)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillsData } from '@/lib/data/skills';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function TechnicalSkills() {
  const { t } = useTranslation();
  const revealRef = useScrollReveal();
  const categories = ['programming', 'prototyping', 'fabrication'];

  return (
    <Section id="skills" className="bg-[var(--card-bg)]">
      <div ref={revealRef} className="max-w-screen-xl mx-auto px-6 md:px-12 scroll-reveal">
        <h2 className="text-section-title mb-12">
          {t('sections.skills')}
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {categories.map((category) => {
            const skillsInCategory = skillsData.filter(skill => skill.category === category);

            return (
              <Card key={category} className="h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 capitalize tracking-tight">
                  {t(`skills.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillsInCategory.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-[var(--card-border)] rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 dark:hover:bg-white dark:hover:text-black"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
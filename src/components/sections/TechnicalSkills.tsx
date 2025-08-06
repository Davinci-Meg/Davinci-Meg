'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { skillsData } from '@/lib/data/skills';

export function TechnicalSkills() {
  const { t } = useTranslation();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'programming':
        return '💻';
      case 'prototyping':
        return '🔧';
      case 'fabrication':
        return '⚙️';
      default:
        return '🔧';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          title: 'text-blue-600',
          iconBg: 'bg-blue-100'
        };
      case 'prototyping':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          title: 'text-green-600',
          iconBg: 'bg-green-100'
        };
      case 'fabrication':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          title: 'text-purple-600',
          iconBg: 'bg-purple-100'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          title: 'text-gray-600',
          iconBg: 'bg-gray-100'
        };
    }
  };

  const categories = ['programming', 'prototyping', 'fabrication'];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('sections.skills')}
          </h2>
          <div className="section-divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 stagger-fade">
          {categories.map((category) => {
            const skillsInCategory = skillsData.filter(skill => skill.category === category);
            const colors = getCategoryColor(category);
            
            return (
              <div
                key={category}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <h3 className={`font-bold text-2xl mb-6 ${colors.title} flex items-center`}>
                  <span className={`w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center mr-3`}>
                    {getCategoryIcon(category)}
                  </span>
                  {t(`skills.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillsInCategory.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium skill-tag`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
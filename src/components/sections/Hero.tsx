'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { profileData } from '@/lib/data/profile';
import { Section } from '@/components/ui/Section';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { currentLanguage } = useTranslation();
  const interestTags = ['Human Computer Interaction', 'Robotics', 'Umwelt'];

  return (
    <Section className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12">
      <div className="max-w-screen-xl">
        <h1 className="text-huge tracking-tighter mb-6">
          {profileData.name[currentLanguage]}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          {profileData.affiliation[currentLanguage]}
        </p>
        <div className="flex flex-wrap gap-3">
          {interestTags.map((tag, index) => (
            <span
              key={index}
              className="text-xl md:text-3xl font-light text-gray-500 border border-gray-300 rounded-full px-6 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
          <a href={profileData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Facebook</a>
          <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
          <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">YouTube</a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-[var(--accent)]" />
        </div>
      </div>
    </Section>
  );
}
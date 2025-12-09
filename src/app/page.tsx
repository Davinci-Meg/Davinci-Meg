'use client';

import { LanguageProvider } from '@/hooks/useTranslation';
import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Profile } from '@/components/sections/Profile';
import { Awards } from '@/components/sections/Awards';
import { Publications } from '@/components/sections/Publications';
import { TechnicalSkills } from '@/components/sections/TechnicalSkills';
import { MediaCoverage } from '@/components/sections/MediaCoverage';
import { Activities } from '@/components/sections/Activities';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="antialiased">
        <Navigation />
        <main>
          <Hero />
          <Profile />
          <Awards />
          <Publications />
          <TechnicalSkills />
          <MediaCoverage />
          <Activities />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { profileData } from '@/lib/data/profile';
import { getImagePath } from '@/lib/utils';

export function Hero() {
  const { t, currentLanguage } = useTranslation();

  const interestTags = ['Human Computer Interaction', 'Robotics', 'Umwelt'];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 hero-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0">
            <Image
              src={getImagePath('/images/profile/profile-square.jpg')}
              alt="Megumu Isshiki Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          <div className="text-center md:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {profileData.name[currentLanguage]}
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              {profileData.nameAlt[currentLanguage]}
            </p>
            
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">
                {t('profile.fieldOfInterest')}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {interestTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-20 text-blue-800 rounded-full text-sm backdrop-blur-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-lg mb-6">
              {profileData.affiliation[currentLanguage]}
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="GitHub"
              >
                💻 GitHub
              </a>
              <a
                href={profileData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                🕊 Facebook
              </a>
              <a
                href={profileData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Instagram"
              >
                #️⃣ Instagram
              </a>
              <a
                href={profileData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="YouTube"
              >
                📽️ YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Section } from '@/components/ui/Section';
import { getImagePath } from '@/lib/utils';
import { profileData } from '@/lib/data/profile';

export function Profile() {
    const { currentLanguage } = useTranslation();
    const revealRef = useScrollReveal();

    return (
        <Section id="profile" className="bg-[var(--background)]">
            <div ref={revealRef} className="max-w-screen-xl mx-auto px-6 md:px-12 scroll-reveal">
                <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
                    {/* Text Content */}
                    <div className="flex-1 text-left w-full">
                        <h2 className="text-section-title mb-8">
                            Profile
                        </h2>
                        <div className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                            <p className="whitespace-pre-line leading-relaxed">
                                {profileData.description[currentLanguage]}
                            </p>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
                        <div className="relative w-full max-w-sm md:max-w-md aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={getImagePath('/images/profile/profile-rectangle-v2.webp')}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

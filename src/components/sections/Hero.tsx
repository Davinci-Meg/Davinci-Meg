'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { profileData } from '@/lib/data/profile';
import { getImagePath } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { ArrowDown } from 'lucide-react';

const HERO_IMAGES = [
    '/images/hero/hero-slide-1.jpg',
    '/images/hero/hero-slide-2.jpg',
    '/images/hero/hero-slide-3.jpg',
    '/images/hero/hero-slide-4.png',
    '/images/hero/hero-slide-5.png'
];

export function Hero() {
    const { currentLanguage } = useTranslation();
    const interestTags = ['Human Computer Interaction', 'Robotics', 'Umwelt'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-12 overflow-hidden text-center">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0 bg-black">
                {HERO_IMAGES.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={getImagePath(src)}
                            alt="Hero Background"
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Overlay for text readability */}
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-screen-xl flex flex-col items-center">
                <h1 className="text-huge tracking-tighter mb-6 text-white">
                    {profileData.name[currentLanguage]}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                    {profileData.affiliation[currentLanguage]}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {interestTags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xl md:text-3xl font-light text-gray-200 border border-gray-400 rounded-full px-6 py-2 bg-white/10 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-white">
                    <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
                    <a href={profileData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Facebook</a>
                    <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
                    <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">YouTube</a>
                </div>
            </div>

            <div className="absolute bottom-12 z-10 animate-bounce">
                <ArrowDown className="w-8 h-8 text-[var(--accent)]" />
            </div>
        </Section>
    );
}

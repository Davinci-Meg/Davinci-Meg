'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageToggle } from './LanguageToggle';

export function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'awards', href: '#awards', label: t('navigation.awards') },
    { key: 'publications', href: '#publications', label: t('navigation.publications') },
    { key: 'skills', href: '#skills', label: t('navigation.skills') },
    { key: 'media', href: '#media', label: t('navigation.media') },
    { key: 'activities', href: '#activities', label: t('navigation.activities') },
    { key: 'projects', href: '#projects', label: t('navigation.projects') }
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#" 
            className="font-bold text-xl text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2"
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center space-x-2 pt-4 border-t border-gray-200 mt-4">
            <span className="text-sm text-gray-600">Language:</span>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
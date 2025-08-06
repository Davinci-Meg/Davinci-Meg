'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/types';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { currentLanguage, setLanguage } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => handleLanguageChange('ja')}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          currentLanguage === 'ja'
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        aria-label="日本語に切り替え"
      >
        日本語
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          currentLanguage === 'en'
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
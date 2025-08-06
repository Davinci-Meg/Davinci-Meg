'use client';

import { useTranslation } from '@/hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-200 text-lg">
          💡 Copyright, Megumu Isshiki, {t('copyright')}.
        </p>
      </div>
    </footer>
  );
}
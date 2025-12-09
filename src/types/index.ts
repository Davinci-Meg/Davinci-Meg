export interface Translation {
  ja: string;
  en: string;
}

export type Language = 'ja' | 'en';

export interface ProfileData {
  name: Translation;
  nameAlt: Translation;
  affiliation: Translation;
  fieldOfInterest: Translation;
  socialLinks: {
    github: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
  description: Translation;
}

export interface Award {
  id: string;
  title: Translation;
  prize: Translation;
  url: string;
  year: number;
}

export interface Publication {
  id: string;
  authors: Translation;
  title: Translation;
  venue: Translation;
}

export interface Skill {
  name: string;
  category: 'programming' | 'prototyping' | 'fabrication';
}

export interface MediaCoverage {
  id: string;
  organization: string;
  title: Translation;
  url: string;
}

export interface Activity {
  id: string;
  title: Translation;
  role: Translation;
  url: string;
}

export interface Project {
  id: string;
  imagePath: string;
  alt: Translation;
}

export interface TranslationKeys {
  navigation: {
    awards: Translation;
    publications: Translation;
    skills: Translation;
    media: Translation;
    activities: Translation;
    projects: Translation;
  };
  profile: {
    fieldOfInterest: Translation;
  };
  sections: {
    awards: Translation;
    publications: Translation;
    skills: Translation;
    media: Translation;
    activities: Translation;
    projects: Translation;
  };
  skills: {
    programming: Translation;
    prototyping: Translation;
    fabrication: Translation;
  };
  ui: {
    viewDetails: Translation;
    viewArticle: Translation;
    speaker: Translation;
    asTeam: Translation;
  };
  years: {
    [key: string]: Translation;
  };
  copyright: Translation;
}

export interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
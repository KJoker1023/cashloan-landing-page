
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'sw';

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Common translations
const translations: Translations = {
  // Navigation
  home: {
    en: 'Home',
    sw: 'Nyumbani',
  },
  privacy: {
    en: 'Privacy',
    sw: 'Faragha',
  },
  faq: {
    en: 'FAQ',
    sw: 'Maswali',
  },
  accountDeletion: {
    en: 'Account Deletion',
    sw: 'Kufuta Akaunti',
  },
  // Hero Section
  quickCash: {
    en: 'Quick cash loans at your fingertips',
    sw: 'Mikopo ya haraka kwa vidole vyako',
  },
  appDescription: {
    en: 'Get instant cash when you need it most. Apply, get approved, and receive funds directly on your iOS device.',
    sw: 'Pata pesa taslimu mara moja unapohitaji zaidi. Omba, idhinishwa, na kupokea fedha moja kwa moja kwenye kifaa chako cha iOS.',
  },
  downloadIOS: {
    en: 'Download on iOS',
    sw: 'Pakua kwenye iOS',
  },
  learnMore: {
    en: 'Learn More',
    sw: 'Jifunze Zaidi',
  },
  // Features
  instantApproval: {
    en: 'Instant approval',
    sw: 'Idhini ya haraka',
  },
  secure: {
    en: 'Secure & confidential',
    sw: 'Salama & siri',
  },
  noHiddenFees: {
    en: 'No hidden fees',
    sw: 'Hakuna ada zilizofichwa',
  },
  // CTA 
  readyToStart: {
    en: 'Ready to get started?',
    sw: 'Tayari kuanza?',
  },
  downloadNow: {
    en: 'Download Now for iOS',
    sw: 'Pakua Sasa kwa iOS',
  },
  // Change language
  changeLanguage: {
    en: 'Swahili',
    sw: 'English',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sw')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

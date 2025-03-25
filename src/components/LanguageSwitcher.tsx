
import React from 'react';
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 bg-white/90 text-cash-dark-blue border-cash-light-blue hover:bg-cash-light-blue/20"
    >
      <Languages className="h-4 w-4" />
      <span>{t('changeLanguage')}</span>
    </Button>
  );
};

export default LanguageSwitcher;

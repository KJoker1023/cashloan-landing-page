
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Clock, CreditCard, Users, Landmark } from 'lucide-react';
import Card3D from './Card3D';
import { useLanguage } from '@/contexts/LanguageContext';

const tanzaniaInfo = {
  en: [
    {
      title: "Accessible Across Tanzania",
      description: "Available in Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya, and more regions.",
      icon: <Users size={24} />,
    },
    {
      title: "M-Pesa & Tigo Pesa Integration",
      description: "Receive and repay loans through Tanzania's popular mobile money services.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Tanzania Regulatory Compliant",
      description: "Licensed by the Bank of Tanzania (BOT) and follows all local financial regulations.",
      icon: <Landmark size={24} />,
    },
    {
      title: "Fast Approval Process",
      description: "Get approved within hours, not days. Quick verification process for Tanzanian citizens.",
      icon: <Clock size={24} />,
    },
    {
      title: "Secure & Private",
      description: "End-to-end encryption ensures your data stays confidential and secure.",
      icon: <Shield size={24} />,
    },
    {
      title: "Flexible Loan Terms",
      description: "Customized loan options designed specifically for Tanzanian needs and income patterns.",
      icon: <CreditCard size={24} />,
    }
  ],
  sw: [
    {
      title: "Inapatikana Tanzania Nzima",
      description: "Inapatikana Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya na mikoa mingine.",
      icon: <Users size={24} />,
    },
    {
      title: "Unganisho wa M-Pesa & Tigo Pesa",
      description: "Pokea na lipa mikopo kupitia huduma maarufu za pesa za simu za Tanzania.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Inazingatia Sheria za Tanzania",
      description: "Imethibitishwa na Benki Kuu ya Tanzania (BOT) na inafuata kanuni zote za kifedha za ndani.",
      icon: <Landmark size={24} />,
    },
    {
      title: "Mchakato wa Haraka wa Kuidhinishwa",
      description: "Idhinishwa ndani ya masaa, sio siku. Mchakato wa haraka wa uthibitishaji kwa raia wa Tanzania.",
      icon: <Clock size={24} />,
    },
    {
      title: "Salama & ya Faragha",
      description: "Usimbaji fiche wa mwisho hadi mwisho unahakikisha data yako inabaki ya siri na salama.",
      icon: <Shield size={24} />,
    },
    {
      title: "Masharti Rahisi ya Mkopo",
      description: "Chaguo za mikopo zilizotengenezwa maalum kwa mahitaji ya Tanzania na mifumo ya mapato.",
      icon: <CreditCard size={24} />,
    }
  ]
};

const RichContentSection = () => {
  const { language } = useLanguage();
  const content = language === 'en' ? tanzaniaInfo.en : tanzaniaInfo.sw;

  return (
    <section className="py-16 bg-gradient-to-b from-cash-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-4">
            {language === 'en' ? 'Designed for Tanzanians' : 'Imeundwa kwa Watanzania'}
          </h2>
          <p className="max-w-2xl mx-auto text-cash-dark-gray/70">
            {language === 'en' 
              ? 'Our loan app is specially designed to meet the unique financial needs of Tanzanians.' 
              : 'Programu yetu ya mikopo imeundwa maalum kukidhi mahitaji ya kipekee ya kifedha ya Watanzania.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <Card3D 
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RichContentSection;

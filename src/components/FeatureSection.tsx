
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, CheckCircle2, UserCheck, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Card3D from "./Card3D";

const FeatureSection = () => {
  const { language } = useLanguage();

  const features = {
    en: [
      {
        icon: <CreditCard size={24} />,
        title: "Instant Funding",
        description: "Get funds deposited directly to your mobile money account as soon as your loan is approved."
      },
      {
        icon: <Clock size={24} />,
        title: "Quick Application",
        description: "Complete your loan application in minutes right from your iOS device."
      },
      {
        icon: <Shield size={24} />,
        title: "Secure & Private",
        description: "We use bank-level encryption to keep your personal and financial information safe."
      },
      {
        icon: <CheckCircle2 size={24} />,
        title: "High Approval Rates",
        description: "Our simplified process means more approvals, even if you've been rejected elsewhere."
      },
      {
        icon: <UserCheck size={24} />,
        title: "No Paperwork",
        description: "Everything is digital. No need to print, scan, or mail any documents."
      },
      {
        icon: <Landmark size={24} />,
        title: "Transparent Terms",
        description: "Clear repayment schedules with no hidden fees or surprise charges."
      }
    ],
    sw: [
      {
        icon: <CreditCard size={24} />,
        title: "Fedha za Haraka",
        description: "Pata fedha zikiwekwa moja kwa moja kwenye akaunti yako ya pesa za simu mara tu baada ya mkopo wako kuidhinishwa."
      },
      {
        icon: <Clock size={24} />,
        title: "Maombi ya Haraka",
        description: "Kamilisha maombi yako ya mkopo kwa dakika chache kutoka kwenye kifaa chako cha iOS."
      },
      {
        icon: <Shield size={24} />,
        title: "Salama & ya Faragha",
        description: "Tunatumia usimbaji fiche wa kiwango cha benki ili kuweka taarifa zako za kibinafsi na za fedha salama."
      },
      {
        icon: <CheckCircle2 size={24} />,
        title: "Viwango vya Juu vya Kuidhinishwa",
        description: "Mchakato wetu uliorahisishwa unamaanisha kuidhinishwa zaidi, hata kama umekataliwa mahali pengine."
      },
      {
        icon: <UserCheck size={24} />,
        title: "Hakuna Kazi ya Karatasi",
        description: "Kila kitu ni dijitali. Hakuna haja ya kuchapisha, kuskanisha, au kutuma nyaraka yoyote."
      },
      {
        icon: <Landmark size={24} />,
        title: "Masharti Wazi",
        description: "Ratiba wazi za malipo bila ada zilizofichwa au malipo ya kushangaza."
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-4"
          >
            {language === 'en' ? 'Why choose ' : 'Kwa nini uchague '}
            <span className="bg-gradient-to-r from-cash-blue to-cash-dark-blue bg-clip-text text-transparent">CashLoan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cash-dark-gray/70 max-w-2xl mx-auto"
          >
            {language === 'en' 
              ? 'Designed exclusively for iOS users in Tanzania, our app makes borrowing money easier, faster, and more secure than ever before.'
              : 'Imeundwa pekee kwa watumiaji wa iOS nchini Tanzania, programu yetu hufanya kukopa pesa kuwa rahisi zaidi, haraka zaidi, na salama zaidi kuliko hapo awali.'}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features[language].map((feature, index) => (
            <Card3D
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;

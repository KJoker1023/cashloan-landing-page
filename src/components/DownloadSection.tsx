
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DownloadSection = () => {
  const { language } = useLanguage();

  const features = {
    en: [
      "Available on all Android devices",
      "Optimized for the latest Android versions",
      "Secure biometric login",
      "M-Pesa and Tigo Pesa integration"
    ],
    sw: [
      "Inapatikana kwenye vifaa vyote vya Android",
      "Imeboreshwa kwa matoleo ya hivi karibuni ya Android",
      "Ufunguo salama wa biometric",
      "Unganisho wa M-Pesa na Tigo Pesa"
    ]
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cash-blue/10 to-cash-light-blue/5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cash-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cash-light-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:order-2"
          >
            <div className="relative w-72 h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-cash-blue/20 to-transparent rounded-[40px] blur-2xl opacity-70"></div>
              
              {/* Android Phone Mockup */}
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-app overflow-hidden border-4 border-gray-100">
                {/* Phone Camera & Speaker */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-center">
                  <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Google Play Store screenshot mockup */}
                <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cash-blue to-cash-dark-blue rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl font-bold">D</span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-base font-bold text-cash-dark-blue">DoPesa</h3>
                        <p className="text-xs text-cash-dark-gray/60">CLAREEN MICROFINANCE LIMITED</p>
                      </div>
                    </div>
                    
                    <div className="bg-cash-gray rounded-xl p-3 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-cash-blue flex items-center justify-center text-white font-bold text-xs">4.8</div>
                          <div className="ml-2">
                            <div className="text-xs font-bold">{language === 'en' ? 'Rating' : 'Ukadiriaji'}</div>
                            <div className="text-xs text-cash-dark-gray/60">{language === 'en' ? '1.2K reviews' : 'Maoni 1.2K'}</div>
                          </div>
                        </div>
                        <div className="text-xs text-cash-blue">{language === 'en' ? 'See All' : 'Tazama Yote'}</div>
                      </div>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <div key={i} className={`h-2 flex-1 rounded-full ${i < 4 ? 'bg-cash-blue' : 'bg-cash-light-blue/50'}`}></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-3 shadow-subtle mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs font-bold text-cash-dark-blue">{language === 'en' ? 'Downloads' : 'Upakuaji'}</div>
                        <div className="text-xs text-cash-blue">{language === 'en' ? '10K+' : 'Zaidi ya 10K'}</div>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <div className="text-xs text-cash-dark-gray/70">{language === 'en' ? 'Finance' : 'Fedha'}</div>
                        <div className="w-1 h-1 bg-cash-dark-gray/30 rounded-full"></div>
                        <div className="text-xs text-cash-dark-gray/70">{language === 'en' ? '25MB' : '25MB'}</div>
                      </div>
                    </div>
                    
                    <div className="mt-2 space-y-2">
                      <div className="text-xs text-cash-dark-gray/60 mb-1">{language === 'en' ? 'WHAT\'S NEW' : 'VIPYA'}</div>
                      <div className="text-xs">
                        - {language === 'en' ? 'Improved loan application process' : 'Mchakato bora wa maombi ya mikopo'}<br />
                        - {language === 'en' ? 'New payment options' : 'Chaguo mpya za malipo'}<br />
                        - {language === 'en' ? 'Faster approval process' : 'Mchakato wa haraka wa kuidhinishwa'}<br />
                        - {language === 'en' ? 'Bug fixes and improvements' : 'Marekebisho ya hitilafu na maboresho'}
                      </div>
                    </div>
                    
                    <div className="mt-auto pb-4">
                      <button className="w-full bg-cash-blue text-white py-3 rounded-xl font-medium shadow-blue-glow">
                        {language === 'en' ? 'INSTALL' : 'SAKINISHA'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:order-1"
          >            
            <h2 className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-6">
              {language === 'en' ? 'Download our app' : 'Pakua programu yetu'} <br />
              <span className="text-gradient">{language === 'en' ? 'for Android devices' : 'kwa vifaa vya Android'}</span>
            </h2>
            <p className="text-cash-dark-gray/70 mb-8">
              {language === 'en' 
                ? 'Get the DoPesa app on your Android device and enjoy a seamless borrowing experience. Apply for loans, track your repayments, and manage your account—all from one intuitive app.' 
                : 'Pata programu ya DoPesa kwenye kifaa chako cha Android na furahia uzoefu rahisi wa kukopa. Omba mikopo, fuatilia malipo yako, na simamia akaunti yako—yote kutoka kwenye programu moja rahisi kutumia.'}
            </p>
            
            <ul className="space-y-4 mb-8">
              {features[language].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-cash-blue/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-cash-blue" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#download"
              className="inline-flex items-center justify-center px-6 py-3 bg-cash-blue text-white rounded-lg font-medium transition-transform hover:scale-105 shadow-blue-glow"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              {language === 'en' ? 'Download on Google Play' : 'Pakua kwenye Google Play'}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

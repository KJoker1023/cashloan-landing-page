
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-cash-gray relative">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      {/* Tanzania flag colors decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-tz-green opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-tz-blue opacity-10"></div>
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-tz-yellow opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cash-light-blue/20 text-cash-blue rounded-full mb-4">
              Tanzania's Financial Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('quickCash')} <span className="bg-gradient-to-r from-cash-blue to-cash-dark-blue bg-clip-text text-transparent">Tanzania</span>
            </h1>
            <p className="text-lg text-cash-dark-gray/80 mb-8 max-w-lg">
              {t('appDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link 
                to="/"
                className="bg-cash-blue text-white btn-hover-effect px-6 py-3 font-medium text-base rounded-lg shadow-blue-glow flex items-center justify-center"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                {t('downloadAndroid')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/faq"
                className="px-6 py-3 border border-cash-blue text-cash-blue font-medium text-base rounded-lg hover:bg-cash-blue/5 transition-colors flex items-center justify-center"
              >
                {t('learnMore')}
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              {[
                t('instantApproval'),
                t('secure'),
                t('noHiddenFees')
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-cash-blue mr-2 flex-shrink-0" />
                  <span className="text-sm text-cash-dark-gray/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Phone mockup with illustrations instead of 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-[500px] md:w-80 md:h-[560px]">
              <div className="absolute inset-0 bg-gradient-to-b from-cash-blue/20 to-transparent rounded-[40px] blur-2xl opacity-70 translate-y-4"></div>
              
              {/* Android Phone Mockup */}
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-app overflow-hidden border-4 border-gray-100">
                {/* Phone Camera & Speaker */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-center">
                  <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* App UI mockup */}
                <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
                  <div className="h-full flex flex-col">
                    <div className="text-center mb-6 pt-2">
                      <h3 className="text-xl font-bold text-cash-dark-blue">DoPesa</h3>
                      <p className="text-xs text-cash-dark-gray/60">Tanzania</p>
                    </div>
                    <div className="bg-cash-gray rounded-xl p-4 mb-4">
                      <div className="text-xs text-cash-dark-gray/60 mb-1">Available amount</div>
                      <div className="text-2xl font-bold text-cash-dark-blue">TSh 1,200,000</div>
                      <div className="w-full bg-cash-light-blue/30 h-2 rounded-full mt-2">
                        <div className="bg-cash-blue h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {[
                        { label: "Quick Cash", amount: "TSh 100,000" },
                        { label: "Medium Loan", amount: "TSh 500,000" },
                        { label: "Large Loan", amount: "TSh 1,000,000" }
                      ].map((loan, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-subtle flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium text-cash-dark-blue">{loan.label}</div>
                            <div className="text-xs text-cash-dark-gray/60">48-hour approval</div>
                          </div>
                          <div className="text-base font-bold text-cash-blue">{loan.amount}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pb-4">
                      <button className="w-full bg-cash-blue text-white py-3 rounded-xl font-medium shadow-blue-glow">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tanzanian financial illustrations */}
              <div className="absolute -right-16 top-10 w-20 h-20 bg-tz-yellow/40 rounded-full flex items-center justify-center z-10">
                <div className="text-cash-dark-blue text-xl font-bold">TSh</div>
              </div>
              <motion.div 
                className="absolute -left-10 top-32 w-16 h-16 bg-tz-blue/30 rounded-full flex items-center justify-center z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <svg className="w-8 h-8 text-cash-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </motion.div>
              <motion.div 
                className="absolute -right-8 bottom-28 w-14 h-14 bg-cash-light-blue/30 rounded-full flex items-center justify-center z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <svg className="w-7 h-7 text-cash-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

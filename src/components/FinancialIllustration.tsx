
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, DollarSign, Wallet } from 'lucide-react';

const FinancialIllustration = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative h-64 w-full max-w-md mx-auto">
      {/* Tanzania map outline shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-cash-light-blue/20 to-cash-blue/10 rounded-xl"></div>

      {/* Tanzania flag colored stripes */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-tz-blue"></div>
      <div className="absolute top-3 left-0 right-0 h-3 bg-tz-yellow"></div>
      <div className="absolute top-6 left-0 right-0 h-3 bg-tz-green"></div>

      {/* Financial Tech elements */}
      <motion.div
        className="absolute inset-0 p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Central element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-20"
          variants={itemVariants}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-cash-blue to-cash-dark-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
            DP
          </div>
        </motion.div>

        {/* Mobile money icon */}
        <motion.div 
          className="absolute top-[20%] left-[20%] w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center z-10"
          variants={itemVariants}
        >
          <Smartphone className="h-6 w-6 text-cash-blue" />
        </motion.div>

        {/* Credit card icon */}
        <motion.div 
          className="absolute top-[30%] right-[20%] w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center z-10"
          variants={itemVariants}
        >
          <CreditCard className="h-6 w-6 text-cash-blue" />
        </motion.div>

        {/* Dollar sign icon */}
        <motion.div 
          className="absolute bottom-[20%] left-[30%] w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center z-10"
          variants={itemVariants}
        >
          <DollarSign className="h-6 w-6 text-cash-blue" />
        </motion.div>

        {/* Wallet icon */}
        <motion.div 
          className="absolute bottom-[25%] right-[25%] w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center z-10"
          variants={itemVariants}
        >
          <Wallet className="h-6 w-6 text-cash-blue" />
        </motion.div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 300">
          <motion.path 
            d="M200,150 L100,80" 
            stroke="#F97316" 
            strokeWidth="2" 
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            fill="none"
          />
          <motion.path 
            d="M200,150 L300,100" 
            stroke="#F97316" 
            strokeWidth="2" 
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            fill="none"
          />
          <motion.path 
            d="M200,150 L120,220" 
            stroke="#F97316" 
            strokeWidth="2" 
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            fill="none"
          />
          <motion.path 
            d="M200,150 L280,220" 
            stroke="#F97316" 
            strokeWidth="2" 
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default FinancialIllustration;

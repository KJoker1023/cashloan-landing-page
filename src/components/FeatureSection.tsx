
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, CheckCircle2, UserCheck, Landmark } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Instant Funding",
    description: "Get funds deposited directly to your bank account as soon as your loan is approved."
  },
  {
    icon: Clock,
    title: "Quick Application",
    description: "Complete your loan application in minutes right from your iOS device."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "We use bank-level encryption to keep your personal and financial information safe."
  },
  {
    icon: CheckCircle2,
    title: "High Approval Rates",
    description: "Our simplified process means more approvals, even if you've been rejected elsewhere."
  },
  {
    icon: UserCheck,
    title: "No Paperwork",
    description: "Everything is digital. No need to print, scan, or mail any documents."
  },
  {
    icon: Landmark,
    title: "Transparent Terms",
    description: "Clear repayment schedules with no hidden fees or surprise charges."
  }
];

const FeatureSection = () => {
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
            Why choose <span className="text-gradient">CashLoan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cash-dark-gray/70 max-w-2xl mx-auto"
          >
            Designed exclusively for iOS users, our app makes borrowing money easier, faster, and more secure than ever before.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-cash-gray rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-subtle mb-6">
                <feature.icon className="w-6 h-6 text-cash-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cash-dark-blue mb-3">{feature.title}</h3>
              <p className="text-cash-dark-gray/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;

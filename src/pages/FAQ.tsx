import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";

const faqSections = [
  {
    title: "About DoPesa",
    faqs: [
      {
        question: "What is DoPesa?",
        answer: "DoPesa is a mobile lending platform by CLAREEN MICROFINANCE LIMITED, designed to provide quick and convenient loans to Tanzanian users directly through their mobile devices."
      },
      {
        question: "Is DoPesa available for multiple platforms?",
        answer: "Currently, DoPesa is optimized for mobile users in Tanzania, with a focus on providing seamless financial services through our mobile application."
      },
      {
        question: "Who is eligible for a DoPesa loan?",
        answer: "To be eligible for a DoPesa loan, you must be a Tanzanian resident, at least 18 years old, have a valid government-issued ID, a stable income source, and an active mobile money account."
      }
    ]
  },
  {
    title: "Loan Information",
    faqs: [
      {
        question: "How much can I borrow with DoPesa?",
        answer: "Loan amounts range from TSh 50,000 to TSh 5,000,000, depending on your credit history, income, and our assessment of your repayment ability."
      },
      {
        question: "What are the interest rates?",
        answer: "Interest rates are transparent and vary based on your credit profile and loan term. We ensure competitive rates with no hidden fees."
      },
      {
        question: "How long do I have to repay my loan?",
        answer: "Repayment terms are flexible, ranging from 1 to 24 months. You can choose a term that best suits your financial situation during the application process."
      }
    ]
  },
  {
    title: "Application Process",
    faqs: [
      {
        question: "How do I apply for a loan?",
        answer: "Download the DoPesa app, create an account, and follow our guided application process. You'll need to provide personal and financial information, and you'll receive a decision quickly."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need a valid Tanzanian ID, proof of income, and an active mobile money account. The app will guide you through the document verification process."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-cash-dark-blue mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cash-dark-gray/70 max-w-2xl mx-auto"
          >
            Find answers to the most common questions about DoPesa and our services.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-cash-gray rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-cash-dark-blue mb-4">Jump to Section</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {faqSections.map((section, index) => (
                <a 
                  key={index}
                  href={`#section-${index}`}
                  className="bg-white rounded-lg p-4 shadow-subtle hover:shadow-md transition-shadow border border-gray-100 text-cash-dark-blue hover:text-cash-blue"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {faqSections.map((section, index) => (
            <motion.div 
              key={index}
              id={`section-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-cash-dark-blue mb-6 flex items-center">
                <span className="w-8 h-8 bg-cash-blue rounded-full text-white flex items-center justify-center text-sm mr-3">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="bg-white rounded-2xl shadow-subtle overflow-hidden border border-gray-100">
                <FAQAccordion faqs={section.faqs} title="" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-cash-blue to-cash-dark-blue rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:contact@dopesa.cc"
              className="bg-white text-cash-blue px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;

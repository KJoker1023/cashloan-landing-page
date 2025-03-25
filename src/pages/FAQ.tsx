
import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";

const faqSections = [
  {
    title: "About CashLoan",
    faqs: [
      {
        question: "What is CashLoan?",
        answer: "CashLoan is an iOS-exclusive app that allows you to apply for and receive cash loans quickly and securely. Our streamlined process makes it easy to get the funds you need, when you need them."
      },
      {
        question: "Is CashLoan available for Android?",
        answer: "Currently, CashLoan is exclusively available for iOS devices. We've optimized our experience specifically for iPhone and iPad users to provide the most seamless and secure experience possible."
      },
      {
        question: "Who is eligible for a CashLoan?",
        answer: "To be eligible for a CashLoan, you must be at least 18 years old, have a valid government-issued ID, a regular source of income, and an active bank account. Our app will guide you through the specific requirements during the application process."
      }
    ]
  },
  {
    title: "Loan Information",
    faqs: [
      {
        question: "How much money can I borrow?",
        answer: "Loan amounts range from $100 to $5,000, depending on your eligibility, credit history, and our assessment of your ability to repay. First-time borrowers typically qualify for lower amounts, with the opportunity to access higher amounts after establishing a positive repayment history."
      },
      {
        question: "What are the interest rates and fees?",
        answer: "Interest rates vary based on your credit profile, loan amount, and term length. All rates and fees are transparently displayed before you accept any loan offer. We pride ourselves on having no hidden fees or charges."
      },
      {
        question: "How long do I have to repay my loan?",
        answer: "Repayment terms range from 1 to 24 months, depending on the loan amount and your preferences. You can choose the term that works best for your financial situation during the application process."
      },
      {
        question: "Can I repay my loan early?",
        answer: "Yes, you can repay your loan early at any time without any prepayment penalties. Early repayment can help you save on interest costs."
      }
    ]
  },
  {
    title: "Application Process",
    faqs: [
      {
        question: "How do I apply for a loan?",
        answer: "Simply download the CashLoan app from the iOS App Store, create an account, and follow the guided application process. You'll need to provide some personal and financial information, and we'll give you a decision typically within minutes."
      },
      {
        question: "What information do I need to provide?",
        answer: "You'll need to provide personal details (name, address, date of birth), financial information (income, expenses), bank account details, and a valid government ID for verification purposes."
      },
      {
        question: "How long does the application process take?",
        answer: "Most applicants complete the application in under 10 minutes. Our automated system usually provides an instant decision, though some applications may require additional verification."
      },
      {
        question: "Do you perform a credit check?",
        answer: "Yes, we perform a soft credit check as part of our assessment process. This doesn't affect your credit score. If you accept a loan offer, we may perform a hard credit check, which could temporarily impact your credit score."
      }
    ]
  },
  {
    title: "Receiving and Repaying Funds",
    faqs: [
      {
        question: "How quickly will I receive my money?",
        answer: "Once approved, funds are typically deposited into your bank account within 24 hours. Many customers receive their money on the same day if approved during business hours."
      },
      {
        question: "How do I make repayments?",
        answer: "Repayments are automatically deducted from your linked bank account on the scheduled dates. You can also make manual payments through the app using Apple Pay or other payment methods."
      },
      {
        question: "What happens if I can't make a payment on time?",
        answer: "Contact us immediately through the app if you anticipate difficulty making a payment. We may be able to offer a payment extension or alternative arrangement. Late payments may result in fees and could affect your credit score."
      }
    ]
  },
  {
    title: "Account and Data Security",
    faqs: [
      {
        question: "Is my personal and financial information secure?",
        answer: "Yes, we use bank-level encryption and security protocols to protect your data. Our app also utilizes Apple's security features, including Face ID and Touch ID for authentication."
      },
      {
        question: "How can I secure my account?",
        answer: "We recommend enabling Face ID or Touch ID for app access, using a strong password, and never sharing your login credentials. You can review and manage security settings within the app."
      },
      {
        question: "What should I do if I suspect unauthorized activity?",
        answer: "If you notice any suspicious activity, immediately secure your account by changing your password and contact our customer support team through the app or at support@cashloan.com."
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
            Find answers to the most common questions about CashLoan and our services.
          </motion.p>
        </div>

        {/* Quick Navigation */}
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

        {/* FAQ Sections */}
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

        {/* Still have questions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-cash-blue to-cash-dark-blue rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our customer support team is here to help with any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:support@cashloan.com"
              className="bg-white text-cash-blue px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Contact Support
            </a>
            <Link 
              to="/privacy"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;

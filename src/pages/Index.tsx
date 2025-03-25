
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DownloadSection from "@/components/DownloadSection";
import FAQAccordion from "@/components/FAQAccordion";

const homeFAQs = [
  {
    question: "How much can I borrow?",
    answer: "You can apply for loans ranging from $100 to $5,000 depending on your eligibility and our assessment of your ability to repay."
  },
  {
    question: "How quickly will I receive the funds?",
    answer: "Most approved loans are funded within 24 hours, with many customers receiving money the same day if approved during business hours."
  },
  {
    question: "Is the CashLoan app secure?",
    answer: "Yes, we employ bank-level encryption and security protocols to ensure your personal and financial information is kept safe and private."
  },
  {
    question: "What do I need to apply?",
    answer: "You need to be at least 18 years old, have a valid ID, regular source of income, and an active bank account. The application is completed entirely within the iOS app."
  }
];

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      
      {/* Trusted by section */}
      <div className="bg-cash-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-cash-dark-gray/60 uppercase tracking-wider font-medium">Trusted by thousands of iOS users</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="h-4 w-4 bg-cash-blue rounded-full mr-2"></div>
                <span className="text-cash-dark-gray/80 font-medium">Partner {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <FeatureSection />
      
      {/* Testimonials section */}
      <section className="bg-cash-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 text-xs font-medium bg-cash-light-blue/20 text-cash-blue rounded-full mb-4"
            >
              Success Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-4"
            >
              What our users say
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael T.",
                role: "Small Business Owner",
                quote: "The app is incredibly easy to use. I had the money in my account within hours of being approved. Great customer service too!",
                rating: 5
              },
              {
                name: "Jennifer L.",
                role: "Healthcare Professional",
                quote: "I was in a tight spot financially and CashLoan came through for me. The process was simple and the terms were clear.",
                rating: 5
              },
              {
                name: "David R.",
                role: "Freelancer",
                quote: "As someone with irregular income, I appreciate how CashLoan considers my overall financial picture instead of just my latest paycheck.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-subtle border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cash-dark-gray/80 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cash-light-blue flex items-center justify-center text-cash-blue font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-cash-dark-blue">{testimonial.name}</h4>
                    <p className="text-sm text-cash-dark-gray/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <DownloadSection />
      
      {/* Quick FAQ section */}
      <FAQAccordion 
        faqs={homeFAQs} 
        title="Common Questions"
        description="Have more questions? Visit our detailed FAQ page for more information."
      />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cash-blue to-cash-dark-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to get started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            Download the CashLoan app today and experience the fastest way to get cash when you need it most.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#download"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-cash-blue rounded-lg font-medium transition-transform hover:scale-105 shadow-lg"
            >
              Download Now for iOS
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;

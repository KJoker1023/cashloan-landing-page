
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  description 
}) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-4">{title}</h2>
          {description && (
            <p className="text-cash-dark-gray/70">{description}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cash-gray rounded-2xl p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-cash-light-blue/30 last:border-0 pb-4">
                <AccordionTrigger className="text-left font-medium text-cash-dark-blue hover:text-cash-blue transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-cash-dark-gray/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;

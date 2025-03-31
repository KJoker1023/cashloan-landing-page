import React from "react";
import ReactMarkdown from 'react-markdown';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PrivacySection = ({ title, children, className = "" }: { title: string; children: string; className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={cn("mb-12", className)}
  >
    <h2 className="text-2xl font-bold text-cash-dark-blue mb-4">{title}</h2>
    <div className="prose prose-gray max-w-none">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  </motion.section>
);

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cash-dark-gray/70"
          >
            Last updated: June 15, 2023
          </motion.p>
        </div>

        <PrivacySection title="1. Introduction">
          Welcome to CashLoan. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our iOS app and tell you about your privacy rights and how the law protects you.

          This privacy policy applies to all users of the CashLoan app and website. Please read it carefully to understand our practices regarding your personal data.
        </PrivacySection>

        <PrivacySection title="2. Data We Collect">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:

          - **Identity Data** includes first name, last name, username or similar identifier, date of birth, and government ID information.
          - **Contact Data** includes billing address, delivery address, email address and telephone numbers.
          - **Financial Data** includes bank account details, payment card details, credit score, income information, and employment details.
          - **Transaction Data** includes details about payments to and from you and other details of products and services you have purchased from us.
          - **Technical Data** includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
        </PrivacySection>

        <PrivacySection title="3. How We Use Your Data">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:

          - To process your loan application and assess creditworthiness
          - To manage your account and provide our services
          - To communicate with you about your account and loans
          - To comply with legal obligations, such as anti-money laundering regulations
          - To improve our products and services
          - To protect against fraud and unauthorized transactions
        </PrivacySection>

        <PrivacySection title="4. Data Security">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.

          We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
        </PrivacySection>

        <PrivacySection title="5. Data Retention">
          We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.

          In some circumstances, we may anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
        </PrivacySection>

        <PrivacySection title="6. Your Legal Rights">
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:

          - Request access to your personal data
          - Request correction of your personal data
          - Request erasure of your personal data
          - Object to processing of your personal data
          - Request restriction of processing your personal data
          - Request transfer of your personal data
          - Right to withdraw consent
        </PrivacySection>

        <PrivacySection title="7. Third-Party Links">
          Our app or website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
        </PrivacySection>

        <PrivacySection title="8. Changes to This Privacy Policy">
          We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
        </PrivacySection>

        <PrivacySection title="9. Contact Us">
          If you have any questions about this privacy policy or our privacy practices, please contact us at:

          **Email:** privacy@cashloan.com

          **Mail:** CashLoan Privacy Team, 123 Finance Street, Suite 100, San Francisco, CA 94103
        </PrivacySection>
      </div>
    </motion.div>
  );
};

export default Privacy;

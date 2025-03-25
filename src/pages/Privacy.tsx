
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PrivacySection = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={cn("mb-12", className)}
  >
    <h2 className="text-2xl font-bold text-cash-dark-blue mb-4">{title}</h2>
    <div className="prose prose-gray max-w-none">
      {children}
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
          <p>
            Welcome to CashLoan. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our iOS app and tell you about your privacy rights and how the law protects you.
          </p>
          <p>
            This privacy policy applies to all users of the CashLoan app and website. Please read it carefully to understand our practices regarding your personal data.
          </p>
        </PrivacySection>

        <PrivacySection title="2. Data We Collect">
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Identity Data</strong> includes first name, last name, username or similar identifier, date of birth, and government ID information.
            </li>
            <li>
              <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.
            </li>
            <li>
              <strong>Financial Data</strong> includes bank account details, payment card details, credit score, income information, and employment details.
            </li>
            <li>
              <strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
            </li>
            <li>
              <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="3. How We Use Your Data">
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To process your loan application and assess creditworthiness</li>
            <li>To manage your account and provide our services</li>
            <li>To communicate with you about your account and loans</li>
            <li>To comply with legal obligations, such as anti-money laundering regulations</li>
            <li>To improve our products and services</li>
            <li>To protect against fraud and unauthorized transactions</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="4. Data Security">
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          <p>
            We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
          </p>
        </PrivacySection>

        <PrivacySection title="5. Data Retention">
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
          </p>
          <p>
            In some circumstances, we may anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
          </p>
        </PrivacySection>

        <PrivacySection title="6. Your Legal Rights">
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="mt-4">
            If you wish to exercise any of these rights, please contact us using the details provided below.
          </p>
        </PrivacySection>

        <PrivacySection title="7. Third-Party Links">
          <p>
            Our app or website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
          </p>
        </PrivacySection>

        <PrivacySection title="8. Changes to This Privacy Policy">
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
        </PrivacySection>

        <PrivacySection title="9. Contact Us">
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Email:</strong> privacy@cashloan.com</p>
            <p><strong>Mail:</strong> CashLoan Privacy Team, 123 Finance Street, Suite 100, San Francisco, CA 94103</p>
          </div>
        </PrivacySection>
      </div>
    </motion.div>
  );
};

export default Privacy;

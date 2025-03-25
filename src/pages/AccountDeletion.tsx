
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const AccountDeletion = () => {
  const [step, setStep] = useState(1);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setRequestSubmitted(true);
  };

  const deletionFaqs = [
    {
      question: "What happens when I delete my account?",
      answer: "When you delete your CashLoan account, all your personal information will be removed from our active systems. However, we may retain certain information to comply with legal obligations, prevent fraud, resolve disputes, or enforce our agreements."
    },
    {
      question: "Can I delete my account if I have an outstanding loan?",
      answer: "You cannot delete your account while you have an outstanding loan balance. You must first repay your loan in full before requesting account deletion."
    },
    {
      question: "Will deleting my account affect my credit score?",
      answer: "Simply deleting your account will not directly affect your credit score. However, your loan history with CashLoan (whether positive or negative) will remain on your credit report as per standard credit reporting regulations."
    },
    {
      question: "Can I create a new account after deletion?",
      answer: "Yes, you can create a new account after deletion. However, your previous borrowing history with us will not be available, and you may need to rebuild your borrowing status and limits."
    },
    {
      question: "How long does the deletion process take?",
      answer: "We process account deletion requests within 30 days. You will receive a confirmation email once the process is complete."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-4"
          >
            Account Deletion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cash-dark-gray/70"
          >
            Follow the steps below to request the deletion of your CashLoan account
          </motion.p>
        </div>

        {requestSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-subtle p-8 md:p-12 text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-cash-dark-blue mb-4">Request Submitted</h2>
            <p className="text-cash-dark-gray/70 mb-8">
              Your account deletion request has been received. We'll process your request within 30 days and send you a confirmation email once completed.
            </p>
            <Link 
              to="/"
              className="btn-primary btn-hover-effect px-6 py-3 font-medium text-base rounded-lg inline-block"
            >
              Return to Home
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-subtle overflow-hidden border border-gray-100"
          >
            {/* Progress Steps */}
            <div className="bg-cash-gray p-6 border-b border-gray-200">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                        step === i 
                          ? 'bg-cash-blue text-white' 
                          : step > i 
                            ? 'bg-green-500 text-white' 
                            : 'bg-cash-gray border border-gray-300 text-cash-dark-gray'
                      }`}
                    >
                      {step > i ? <CheckCircle className="h-4 w-4" /> : i}
                    </div>
                    <span className={`text-xs mt-2 ${step === i ? 'text-cash-blue font-medium' : 'text-cash-dark-gray/70'}`}>
                      {i === 1 ? 'Information' : i === 2 ? 'Verification' : 'Confirmation'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6 md:p-8">
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-cash-dark-blue mb-4">Account Deletion Information</h2>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex">
                    <Info className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-700">
                        Before proceeding with account deletion, please be aware of the following:
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-yellow-700 space-y-1">
                        <li>Account deletion is permanent and cannot be undone</li>
                        <li>Any outstanding loans must be repaid before deleting your account</li>
                        <li>You will lose access to your loan history and account information</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="mb-6">
                    {deletionFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200 last:border-0">
                        <AccordionTrigger className="text-left font-medium text-cash-dark-blue hover:text-cash-blue transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-cash-dark-gray/80">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  
                  <div className="mt-8 flex justify-end">
                    <Button 
                      className="bg-cash-blue hover:bg-cash-dark-blue text-white"
                      onClick={() => setStep(2)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-cash-dark-blue mb-4">Identity Verification</h2>
                  <p className="text-cash-dark-gray/80 mb-6">
                    For security purposes, we need to verify your identity before processing your account deletion request.
                  </p>
                  
                  <form className="space-y-6 mb-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cash-dark-gray mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cash-blue focus:border-cash-blue outline-none"
                        placeholder="Enter your registered email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-cash-dark-gray mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cash-blue focus:border-cash-blue outline-none"
                        placeholder="Enter your registered phone number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-cash-dark-gray mb-1">Reason for Deletion (Optional)</label>
                      <select 
                        id="reason" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cash-blue focus:border-cash-blue outline-none"
                      >
                        <option value="">Select a reason</option>
                        <option value="no-longer-needed">No longer need the service</option>
                        <option value="privacy-concerns">Privacy concerns</option>
                        <option value="found-alternative">Found an alternative service</option>
                        <option value="difficult-to-use">App is difficult to use</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </form>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button 
                      className="bg-cash-blue hover:bg-cash-dark-blue text-white"
                      onClick={() => setStep(3)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-cash-dark-blue mb-4">Confirm Deletion Request</h2>
                  <p className="text-cash-dark-gray/80 mb-6">
                    Please review the information below and confirm that you wish to delete your account.
                  </p>
                  
                  <div className="bg-cash-gray rounded-lg p-6 mb-8">
                    <h3 className="font-medium text-cash-dark-blue mb-4">What will happen next:</h3>
                    <ul className="space-y-3">
                      {[
                        "We'll process your deletion request within 30 days",
                        "You'll receive a confirmation email once your account has been deleted",
                        "Your personal data will be removed from our active systems",
                        "Some information may be retained for legal and regulatory requirements"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-cash-blue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-cash-dark-gray/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" required />
                      <span className="text-sm text-cash-dark-gray/80">
                        I understand that this action is permanent and cannot be undone. I confirm that I want to delete my CashLoan account.
                      </span>
                    </label>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </Button>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={handleSubmitRequest}
                    >
                      Delete My Account
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-cash-dark-gray/70 mb-4">
            Need help or have questions about account deletion?
          </p>
          <Link 
            to="/faq"
            className="text-cash-blue hover:underline"
          >
            Visit our FAQ page
          </Link>
          <span className="mx-2 text-cash-dark-gray/40">•</span>
          <a 
            href="mailto:support@cashloan.com"
            className="text-cash-blue hover:underline"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AccountDeletion;

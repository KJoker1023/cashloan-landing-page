
import React from "react";
import { motion } from "framer-motion";
import { AppleIcon } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cash-blue/10 to-cash-light-blue/5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cash-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cash-light-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:order-2"
          >
            <div className="relative w-72 h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-cash-blue/20 to-transparent rounded-[40px] blur-2xl opacity-70"></div>
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-app overflow-hidden border-4 border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-cash-blue to-cash-dark-blue"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-black rounded-full"></div>
                
                {/* App Store screenshot mockup */}
                <div className="absolute top-20 left-0 right-0 bottom-0 p-4">
                  <div className="h-full flex flex-col">
                    <div className="text-center mb-6 pt-2">
                      <div className="mx-auto w-16 h-16 bg-cash-blue rounded-xl mb-3 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">$</span>
                      </div>
                      <h3 className="text-xl font-bold text-cash-dark-blue">CashLoan</h3>
                      <p className="text-xs text-cash-dark-gray/60">Finance</p>
                    </div>
                    
                    <div className="bg-cash-gray rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-cash-blue flex items-center justify-center text-white font-bold text-xs">4.8</div>
                          <div className="ml-2">
                            <div className="text-xs font-bold">Rating</div>
                            <div className="text-xs text-cash-dark-gray/60">1.2K reviews</div>
                          </div>
                        </div>
                        <div className="text-xs text-cash-blue">See All</div>
                      </div>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <div key={i} className={`h-2 flex-1 rounded-full ${i < 4 ? 'bg-cash-blue' : 'bg-cash-light-blue/50'}`}></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white rounded-xl p-3 shadow-subtle">
                        <div className="flex -space-x-2 mb-2">
                          {[1, 2, 3].map((_, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-cash-light-blue border-2 border-white"></div>
                          ))}
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">Sarah M.</span> and 245 others recently downloaded this app
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs text-cash-dark-gray/60 mb-1">WHAT'S NEW</div>
                      <div className="text-xs">
                        - iOS 17 optimization<br />
                        - New loan options<br />
                        - Faster approval process<br />
                        - Bug fixes and improvements
                      </div>
                    </div>
                    
                    <div className="mt-auto pb-4">
                      <button className="w-full bg-cash-blue text-white py-3 rounded-xl font-medium shadow-blue-glow">
                        GET
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cash-dark-blue mb-6">
              Download our app <br />
              <span className="text-gradient">exclusively for iOS</span>
            </h2>
            <p className="text-cash-dark-gray/70 mb-8">
              Get the CashLoan app on your iPhone or iPad and enjoy a seamless borrowing experience. Apply for loans, track your repayments, and manage your account—all from one intuitive app.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Available on iPhone and iPad",
                "Optimized for iOS 17",
                "Touch ID & Face ID secure login",
                "Apple Pay integration for easy repayments"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-cash-blue/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cash-blue"></div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#download"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium transition-transform hover:scale-105"
            >
              <AppleIcon className="mr-2 h-5 w-5" />
              Download on the App Store
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

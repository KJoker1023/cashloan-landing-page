
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import * as THREE from 'three';

const HeroSection = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create a torus knot
    const geometry = new THREE.TorusKnotGeometry(2, 0.6, 100, 16);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xF97316,
      specular: 0xF97316,
      shininess: 100,
      flatShading: false,
    });
    
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Position camera
    camera.position.z = 10;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the torus knot
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (canvasRef.current && canvasRef.current.contains(renderer.domElement)) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-cash-gray relative">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      {/* 3D Background */}
      <div 
        ref={canvasRef} 
        className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-40 pointer-events-none"
      ></div>
      
      {/* Tanzania flag colors decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-tz-green opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-tz-blue opacity-10"></div>
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-tz-yellow opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cash-light-blue/20 text-cash-blue rounded-full mb-4">
              iOS Exclusive
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('quickCash')} <span className="bg-gradient-to-r from-cash-blue to-cash-dark-blue bg-clip-text text-transparent">Tanzania</span>
            </h1>
            <p className="text-lg text-cash-dark-gray/80 mb-8 max-w-lg">
              {t('appDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link 
                to="/"
                className="bg-cash-blue text-white btn-hover-effect px-6 py-3 font-medium text-base rounded-lg shadow-blue-glow flex items-center justify-center"
              >
                {t('downloadIOS')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/faq"
                className="px-6 py-3 border border-cash-blue text-cash-blue font-medium text-base rounded-lg hover:bg-cash-blue/5 transition-colors flex items-center justify-center"
              >
                {t('learnMore')}
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              {[
                t('instantApproval'),
                t('secure'),
                t('noHiddenFees')
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-cash-blue mr-2 flex-shrink-0" />
                  <span className="text-sm text-cash-dark-gray/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <motion.div 
              className="relative w-72 h-[500px] md:w-80 md:h-[560px]"
              animate={{ rotateY: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cash-blue/20 to-transparent rounded-[40px] blur-2xl opacity-70 translate-y-4"></div>
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-app overflow-hidden border-4 border-gray-100 transform-style-3d">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-cash-blue to-cash-dark-blue"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-black rounded-full"></div>
                
                {/* App UI mockup */}
                <div className="absolute top-20 left-0 right-0 bottom-0 p-4">
                  <div className="h-full flex flex-col">
                    <div className="text-center mb-6 pt-2">
                      <h3 className="text-xl font-bold text-cash-dark-blue">CashLoan</h3>
                      <p className="text-xs text-cash-dark-gray/60">Tanzania</p>
                    </div>
                    <div className="bg-cash-gray rounded-xl p-4 mb-4">
                      <div className="text-xs text-cash-dark-gray/60 mb-1">Available amount</div>
                      <div className="text-2xl font-bold text-cash-dark-blue">TSh 1,200,000</div>
                      <div className="w-full bg-cash-light-blue/30 h-2 rounded-full mt-2">
                        <div className="bg-cash-blue h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {[
                        { label: "Quick Cash", amount: "TSh 100,000" },
                        { label: "Medium Loan", amount: "TSh 500,000" },
                        { label: "Large Loan", amount: "TSh 1,000,000" }
                      ].map((loan, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-subtle flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium text-cash-dark-blue">{loan.label}</div>
                            <div className="text-xs text-cash-dark-gray/60">48-hour approval</div>
                          </div>
                          <div className="text-base font-bold text-cash-blue">{loan.amount}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pb-4">
                      <button className="w-full bg-cash-blue text-white py-3 rounded-xl font-medium shadow-blue-glow">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -right-4 top-20 w-12 h-12 bg-cash-light-blue rounded-full opacity-50"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -left-6 bottom-32 w-8 h-8 bg-cash-blue rounded-full opacity-30"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Card3DProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Card3D: React.FC<Card3DProps> = ({ title, description, icon, footer, children, className = '' }) => {
  return (
    <motion.div
      className={`relative group perspective ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2, z: 10 }}
    >
      <Card className="relative rounded-xl shadow-3d transform transition-transform duration-300 bg-white border border-cash-light-blue/20">
        {/* 3D effect elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cash-light-blue/5 to-white rounded-xl transform -translate-y-1 translate-x-1 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300"></div>
        
        <div className="relative z-10">
          <CardHeader className="pb-2">
            {icon && (
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cash-light-blue to-cash-blue text-white mb-2 shadow-md">
                {icon}
              </div>
            )}
            <CardTitle className="text-xl font-bold text-cash-dark-blue">{title}</CardTitle>
            {description && <CardDescription className="text-cash-dark-gray/70">{description}</CardDescription>}
          </CardHeader>
          
          {children && <CardContent>{children}</CardContent>}
          
          {footer && <CardFooter>{footer}</CardFooter>}
        </div>
      </Card>
    </motion.div>
  );
};

export default Card3D;

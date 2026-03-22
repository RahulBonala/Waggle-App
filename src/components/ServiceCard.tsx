import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


interface ServiceCardProps {
  title: string;
  price: string;
  color: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, color, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group relative bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer overflow-hidden"
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-500 font-medium mb-8">Starts at <span className="text-gray-900 font-bold">{price}</span></p>
      
      <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Book Now <ArrowRight size={16} />
      </div>

      <div 
        className="absolute -bottom-1 -right-1 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"
        style={{ color: color }}
      >
        {icon}
      </div>
    </motion.div>
  );
};


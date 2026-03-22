import React from 'react';
import { Star, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedSitterCardProps {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  image: string;
  isVerified?: boolean;
  services: string[];
}

export const FeaturedSitterCard: React.FC<FeaturedSitterCardProps> = ({
  name,
  rating,
  reviews,
  location,
  price,
  image,
  isVerified = true,
  services
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[2rem] border-2 border-gray-100 p-4 hover:border-primary/20 hover:shadow-xl transition-all w-full max-w-sm group"
    >
      <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star size={14} className="text-warning fill-warning" />
          <span className="text-xs font-bold text-gray-900">{rating}</span>
          <span className="text-[10px] text-gray-500 font-medium">({reviews})</span>
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
          <Heart size={16} />
        </button>
        {isVerified && (
          <div className="absolute bottom-3 left-3 bg-success/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <ShieldCheck size={14} className="text-white" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Verified</span>
          </div>
        )}
      </div>

      <div className="px-2">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <div className="text-right">
            <span className="text-lg font-extrabold text-primary">₹{price}</span>
            <span className="text-[10px] text-gray-500 font-bold block">/day</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <MapPin size={12} className="text-gray-400" />
          {location}
        </div>

        <div className="flex flex-wrap gap-2">
          {services.slice(0, 2).map((service) => (
            <span key={service} className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              {service}
            </span>
          ))}
          {services.length > 2 && (
            <span className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              +{services.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

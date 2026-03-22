import React from 'react';
import { Star, MapPin, BadgeCheck } from 'lucide-react';

interface SitterCardProps {
    name: string;
    location: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    badges?: string[];
}

export const SitterCard: React.FC<SitterCardProps> = ({
    name,
    location,
    rating,
    reviews,
    price,
    image,
    badges = []
}) => {
    return (
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all group">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {badges.includes('KYC Verified') && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        <BadgeCheck size={12} /> Verified
                    </div>
                )}
            </div>
            
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-black text-gray-900 italic leading-none mb-1">{name}</h3>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
                            <MapPin size={10} className="text-primary" />
                            {location}
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-xl">
                        <Star size={14} fill="currentColor" className="text-amber-500" />
                        <span className="text-sm font-black text-amber-600 italic leading-none">{rating}</span>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">({reviews})</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-gray-900 leading-none italic">₹{price}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">/visit</span>
                    </div>
                    <button className="text-[10px] font-black text-primary uppercase tracking-widest italic hover:translate-x-1 transition-transform">
                        View Profile →
                    </button>
                </div>
            </div>
        </div>
    );
};

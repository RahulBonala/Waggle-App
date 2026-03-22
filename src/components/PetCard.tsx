import React from 'react';
import { Edit2, Dog, Cat, Heart } from 'lucide-react';


interface PetCardProps {
  name: string;
  breed: string;
  age: string;
  photo?: string;
  type: 'dog' | 'cat' | 'other';
  onEdit?: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({ name, breed, age, photo, type, onEdit }) => {
  return (
    <div className="flex-shrink-0 w-48 bg-white rounded-3xl border-2 border-gray-100 p-4 hover:border-primary/30 transition-all group">
      <div className="relative">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-50 mb-3 group-hover:scale-105 transition-transform">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-300">
              {type === 'dog' ? <Dog size={32} /> : type === 'cat' ? <Cat size={32} /> : <Heart size={32} />}
            </div>
          )}
        </div>
        <button
          onClick={onEdit}
          className="absolute top-0 right-0 p-1.5 bg-white shadow-md rounded-full border border-gray-100 text-gray-400 hover:text-primary transition-colors"
        >
          <Edit2 size={12} />
        </button>
      </div>
      
      <div className="text-center">
        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{breed}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
          {age}
        </span>
      </div>
    </div>
  );
};

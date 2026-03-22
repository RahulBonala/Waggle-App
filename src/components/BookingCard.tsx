import React from 'react';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from './Button';

interface BookingCardProps {
  id: string;
  sitterName: string;
  sitterPhoto?: string;
  service: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Active' | 'Completed' | 'Cancelled';
  price: number;
  petName: string;
  onTrack?: () => void;
  onCancel?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  sitterName,
  sitterPhoto,
  service,
  date,
  time,
  status,
  price,
  petName,
  onTrack,
  onCancel
}) => {
  const statusColors = {
    Upcoming: 'bg-blue-50 text-blue-600 border-blue-100',
    Active: 'bg-green-50 text-green-600 border-green-100 animate-pulse',
    Completed: 'bg-gray-50 text-gray-600 border-gray-100',
    Cancelled: 'bg-red-50 text-red-600 border-red-100',
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-gray-100 p-5 hover:shadow-xl hover:shadow-gray-200/50 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 overflow-hidden border border-gray-100">
            {sitterPhoto ? (
              <img src={sitterPhoto} alt={sitterName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <Calendar size={20} />
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{sitterName}</h4>
            <p className="text-xs text-gray-500">{service} for {petName}</p>
          </div>
        </div>
        <span className={clsx('px-3 py-1 rounded-full text-[10px] font-bold border', statusColors[status])}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50 mb-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
          <Calendar size={16} className="text-primary" />
          {date}
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
          <Clock size={16} className="text-primary" />
          {time}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-gray-900">₹{price}</div>
        <div className="flex gap-2">
          {status === 'Upcoming' && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-red-500 transition-colors"
            >
              Cancel
            </button>
          )}
          {status === 'Active' ? (
            <Button size="sm" onClick={onTrack} className="px-4">
              Track Live <ChevronRight size={14} className="ml-1" />
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="px-4">
              Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

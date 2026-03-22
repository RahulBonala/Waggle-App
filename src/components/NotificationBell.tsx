import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export const NotificationBell: React.FC = () => {
  const { notifications } = useAppStore();
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <Link to="/notifications" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
      <Bell size={24} />
      {unreadCount > 0 && (
        <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
          {unreadCount}
        </span>
      )}
    </Link>
  );
};

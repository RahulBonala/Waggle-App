import React from 'react';
import { 
  Bell, CheckCircle2, MessageSquare, 
  Trash2, Clock, Check, Shield, ShieldCheck
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Notifications: React.FC = () => {
  const { notifications, markNotificationAsRead, clearNotifications } = useAppStore();

  const getIcon = (title: string) => {
    if (title.includes('Confirmed')) return <CheckCircle2 className="text-emerald-500" size={20} />;
    if (title.includes('Start')) return <Clock className="text-trust-blue" size={20} />;
    if (title.includes('Message')) return <MessageSquare className="text-primary" size={20} />;
    if (title.includes('Safe')) return <Shield className="text-indigo-500" size={20} />;
    return <Bell className="text-orange-500" size={20} />;
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black text-gray-900">Notifications</h1>
            <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-xs italic">Stay updated with your furry friends</p>
          </div>
          {notifications.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearNotifications}
              className="text-gray-400 hover:text-red-500 rounded-2xl"
            >
              <Trash2 size={18} className="mr-2" /> Clear All
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {notifications.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[3rem] border-2 border-gray-100 p-16 text-center shadow-sm"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 text-gray-200">
                  <Bell size={48} />
                </div>
                <h3 className="text-2xl font-black text-gray-400 italic">No new updates yet</h3>
                <p className="text-gray-400 max-w-xs mx-auto mt-2">When something happens with your bookings or pets, you'll see it here.</p>
              </motion.div>
            ) : (
              notifications.map((notif, i) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative bg-white p-6 rounded-[2rem] border-2 transition-all flex gap-5 items-start ${
                    notif.isRead ? 'border-gray-50 opacity-70' : 'border-primary/10 shadow-lg shadow-primary/5 ring-1 ring-primary/5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6 ${
                    notif.isRead ? 'bg-gray-100' : 'bg-primary/5'
                  }`}>
                    {getIcon(notif.title)}
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className={`font-black tracking-tight ${notif.isRead ? 'text-gray-600' : 'text-gray-900'}`}>
                        {notif.title}
                      </h4>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap pt-1">
                        {notif.time}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${notif.isRead ? 'text-gray-400' : 'text-gray-600 font-medium'}`}>
                      {notif.message}
                    </p>
                  </div>

                  {!notif.isRead && (
                    <button
                      onClick={() => markNotificationAsRead(notif.id)}
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/20 text-white flex items-center justify-center translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                      title="Mark as read"
                    >
                      <Check size={16} />
                    </button>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Safety Footer */}
        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <Shield size={120} fill="currentColor" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center backdrop-blur-sm">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-black mb-2 italic">Aadhaar Enabled Safety</h4>
              <p className="text-indigo-100 text-sm leading-relaxed max-w-md">
                We've enhanced our verification system. All new booking notifications now include a <b>Waggle Trust Badge</b> to ensure you're interacting with verified neighbors.
              </p>
            </div>
            <Button size="sm" className="bg-white text-indigo-900 hover:bg-gray-100 rounded-xl whitespace-nowrap">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


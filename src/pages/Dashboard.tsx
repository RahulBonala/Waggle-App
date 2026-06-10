import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Dog, Calendar, Scissors, Stethoscope, 
  Plus, ChevronRight, Bell, Sparkles, 
  Clock, ArrowRight, Copy, CheckCircle2 
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { PetCard } from '../components/PetCard';
import { BookingCard } from '../components/BookingCard';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { clsx } from 'clsx';

export const Dashboard: React.FC = () => {
  const { user, pets, bookings } = useAppStore();
  const navigate = useNavigate();
  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  })();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('WAGGLE20');
    setCopied(true);
    toast.success('Coupon code copied! 🎉');
    setTimeout(() => setCopied(false), 2000);
  };

  const quickActions = [
    { title: 'Dog Walking', icon: Dog, color: 'bg-primary', link: '/search?service=walking' },
    { title: 'Pet Sitting', icon: Calendar, color: 'bg-blue-600', link: '/search?service=sitting' },
    { title: 'Grooming', icon: Scissors, color: 'bg-emerald-500', link: '/search?service=grooming' },
    { title: 'Vet Visit', icon: Stethoscope, color: 'bg-amber-500', link: '/search?service=vet' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-extrabold text-gray-900 tracking-tight"
              >
                Namaste, {user?.name.split(' ')[0]}! 👋
              </motion.h1>
              <p className="text-gray-500 mt-2 font-medium text-lg">
                {greeting}. Your furry friends are waiting for some fun!
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Upcoming</p>
                <p className="text-xl font-bold text-gray-900">{bookings.filter(b => b.status === 'Upcoming').length}</p>
              </div>
              <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Waggle Credits</p>
                <p className="text-xl font-bold text-primary">₹150</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 space-y-12">
        {/* My Pets Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Pets</h2>
            <button 
              onClick={() => navigate('/profile')}
              className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
            >
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {pets.map((pet) => (
              <PetCard 
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                type={pet.type}
                photo={pet.photo}
              />
            ))}
            <button 
              onClick={() => navigate('/profile')}
              className="flex-shrink-0 w-48 h-full min-h-[180px] rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-primary/50 hover:text-primary transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary/5">
                <Plus size={24} />
              </div>
              <span className="font-bold text-sm">Add New Pet</span>
            </button>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Upcoming Bookings */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Bookings</h2>
              {bookings.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {bookings.map((booking) => (
                    <BookingCard 
                      key={booking.id}
                      {...booking}
                      onTrack={() => navigate(`/tracking/${booking.id}`)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border-2 border-dashed border-gray-100 p-12 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <Calendar size={32} />
                  </div>
                  <h3 className="font-bold text-gray-900">No upcoming bookings</h3>
                  <p className="text-gray-500 mt-1 max-w-xs mx-auto">Book a service for your pet and it will appear here.</p>
                  <Button variant="primary" size="sm" className="mt-6" onClick={() => navigate('/search')}>
                    Explore Services
                  </Button>
                </div>
              )}
            </section>

            {/* Quick Actions Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What can we do today?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <button
                    key={action.title}
                    onClick={() => navigate(action.link)}
                    className="flex flex-col items-center p-6 bg-white rounded-3xl border-2 border-gray-100 hover:border-primary/30 transition-all group"
                  >
                    <div className={clsx(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg transition-transform group-hover:scale-110",
                      action.color
                    )}>
                      <action.icon size={32} />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">{action.title}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-10">
            {/* Promo Banner */}
            <div className="relative overflow-hidden bg-gradient-to-br from-trust-blue to-blue-800 rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20">
              <Sparkles className="absolute top-4 right-4 text-white/20" size={64} />
              <div className="relative z-10">
                <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Special Offer</span>
                <h3 className="text-2xl font-bold mb-2">Get 20% OFF</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">Enjoy your first service with a special discount. Limited time only!</p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-white/10 px-4 py-3 rounded-2xl border border-white/10">
                    <span className="font-mono font-bold tracking-widest">WAGGLE20</span>
                    <button 
                      onClick={handleCopyCode}
                      className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                    >
                      {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-200 font-medium">
                    <Clock size={14} />
                    <span>Expires in 2 days, 14 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Bell size={20} className="text-primary" />
                Recent Activity
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Welcome to Waggle!', time: '2 hours ago', icon: Sparkles, color: 'text-amber-500' },
                  { title: 'Profile updated', time: 'Yesterday', icon: CheckCircle2, color: 'text-emerald-500' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={clsx("mt-1", item.color)}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/notifications')}
                className="w-full mt-8 text-sm font-bold text-primary hover:underline flex items-center justify-center gap-1"
              >
                View all activity <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


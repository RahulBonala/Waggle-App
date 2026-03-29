import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, 
  Settings, ShieldCheck, Heart, 
  Plus, LogOut, Camera,
  PawPrint, Star, Award

} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { PetCard } from '../components/PetCard';
import { motion, AnimatePresence } from 'framer-motion';

export const UserProfile: React.FC = () => {
  const { user, pets, logout } = useAppStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'pets' | 'settings'>('overview');

  if (!user) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'pets', label: 'My Pets', icon: PawPrint },
    { id: 'settings', label: 'Settings', icon: Settings },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header Profile */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-primary to-orange-400">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -bottom-16 left-0 right-0 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end gap-6">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-white p-2 shadow-2xl border-4 border-white">
              <div className="w-full h-full rounded-[2.2rem] bg-gray-100 overflow-hidden relative group">
                {user.photo ? (
                  <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User size={48} />
                  </div>
                )}
                <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Camera size={24} />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white">
              <ShieldCheck size={14} />
            </div>
          </div>
          
          <div className="pb-4 flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-900 leading-none mb-2">{user.name}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 text-gray-500 font-bold text-sm bg-white/50 px-3 py-1 rounded-full border border-white/20">
                  <Star size={14} className="text-orange-500 fill-orange-500" />
                  <span>Pet Parent Since 2024</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <Award size={14} />
                  <span>Verified Identity</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/80 backdrop-blur-sm border-white/50 rounded-2xl">
                Edit Profile
              </Button>
              <Button onClick={logout} variant="ghost" className="text-red-500 hover:bg-red-50 rounded-2xl">
                <LogOut size={18} className="mr-2" /> Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="flex lg:flex-col gap-2 bg-white p-3 rounded-[2rem] border-2 border-gray-100 shadow-sm overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                  <div className="bg-white p-8 rounded-[2.5rem] mt-2 border-2 border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                      <Heart size={140} fill="currentColor" className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-black mb-8">Personal Details</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Email Address</label>
                        <div className="flex items-center gap-3 text-gray-800 font-bold group-hover:text-primary transition-colors cursor-default">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                            <Mail size={18} />
                          </div>
                          {user.email}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                        <div className="flex items-center gap-3 text-gray-800 font-bold">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                            <Phone size={18} />
                          </div>
                          {user.phone}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Base City</label>
                        <div className="flex items-center gap-3 text-gray-800 font-bold">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                            <MapPin size={18} />
                          </div>
                          Bangalore, KA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Bookings', value: '12', color: 'text-orange-600', bg: 'bg-orange-50' },
                      { label: 'Reviews', value: '8', color: 'text-blue-600', bg: 'bg-blue-50' },
                      { label: 'Saved', value: '4', color: 'text-rose-600', bg: 'bg-rose-50' },
                      { label: 'Points', value: '450', color: 'text-amber-600', bg: 'bg-amber-50' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-sm text-center">
                        <div className={`text-2xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'pets' && (
                <motion.div
                  key="pets"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-black text-gray-900">Your Furry Family</h3>
                      <p className="text-gray-500 font-medium mt-1">Manage and add your pets to your profile.</p>
                    </div>
                    <Button className="rounded-2xl">
                      <Plus size={20} className="mr-2" /> Add Pet
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {pets.map((pet) => (
                      <PetCard
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        age={pet.age}
                        type={pet.type as 'dog' | 'cat' | 'other'}
                        photo={pet.photo}
                        onEdit={() => {}}
                      />
                    ))}
                    
                    {/* Add Empty State Card */}
                    <button className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-2 border-dashed border-gray-200 hover:border-primary/40 hover:bg-white transition-all group min-h-[220px]">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-primary/10 group-hover:text-primary transition-all mb-4">
                        <Plus size={32} />
                      </div>
                      <span className="font-black text-gray-400 group-hover:text-primary transition-colors italic">Add New Pet</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm"
                >
                  <h3 className="text-2xl font-black mb-8">Account Settings</h3>
                  <div className="space-y-8 max-w-xl">
                    <div className="grid gap-6">
                      <Input label="Display Name" defaultValue={user.name} />
                      <Input label="Email Address" defaultValue={user.email} />
                      <Input label="WhatsApp Group Number" defaultValue={user.phone} placeholder="For priority updates" />
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">Email Notifications</h4>
                          <p className="text-sm text-gray-500">Updates about your bookings and more.</p>
                        </div>
                        <div className="w-12 h-6 bg-primary rounded-full p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm ml-auto" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">Safety Alerts</h4>
                          <p className="text-sm text-gray-500">Critical updates about community safety.</p>
                        </div>
                        <div className="w-12 h-6 bg-primary rounded-full p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm ml-auto" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                      <Button className="px-10 rounded-2xl shadow-lg shadow-primary/20">Save Changes</Button>
                      <Button variant="outline" className="px-10 rounded-2xl italic">Cancel</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};


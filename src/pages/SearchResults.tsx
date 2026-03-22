import React, { useState } from 'react';
import { 
  Filter, MapPin, Star, ShieldCheck, 
  ChevronDown, SlidersHorizontal,
  Heart, CheckCircle2,
  Dog
} from 'lucide-react';
import { mockSitters } from '../data/mockData';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const SearchResults: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filters = ['All', 'Verified', 'Top Rated', 'Near Me', 'Host Family'];

  return (
    <div className="min-h-screen bg-gray-50/50 pt-20">
      {/* Search Header Strip */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Location</span>
              <div className="flex items-center gap-2 text-gray-900 font-bold">
                <MapPin size={16} className="text-primary" />
                Bangalore, KA
              </div>
            </div>
            <div className="w-px h-8 bg-gray-100" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Service</span>
              <div className="flex items-center gap-2 text-gray-900 font-bold">
                <Dog size={16} className="text-primary" />
                Dog Boarding
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex bg-gray-50 p-1 rounded-2xl border border-gray-100">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all ${
                    activeFilter === f ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-xl px-4 md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-2" /> Filters
            </Button>
            <Button size="sm" className="rounded-xl px-6">Modify Search</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Advanced Filters Sidebar */}
          <aside className="lg:w-72 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-[2.5rem] border-2 border-gray-100 p-8 sticky top-40 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black">Filters</h3>
                <SlidersHorizontal size={20} className="text-gray-400" />
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Pet Preference</h4>
                  <div className="space-y-3">
                    {['Dog Friendly', 'Cat Friendly', 'No Other Pets'].map((label) => (
                      <label key={label} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-5 h-5 rounded-lg border-2 border-gray-200 group-hover:border-primary transition-colors flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-sm opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                        </div>
                        <input type="checkbox" className="hidden" />
                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors italic">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Price Range</h4>
                  <div className="px-2">
                    <input type="range" className="w-full accent-primary" />
                    <div className="flex justify-between mt-2 text-[10px] font-black text-gray-400">
                      <span>₹100</span>
                      <span>₹2,000+</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Home Type</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Apartment', 'House', 'Villa', 'Farm'].map((type) => (
                      <button key={type} className="px-3 py-2 rounded-xl border border-gray-100 font-bold text-xs text-gray-500 hover:border-primary hover:text-primary transition-all">
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="primary" className="w-full mt-10 rounded-2xl shadow-lg shadow-primary/20">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="flex-grow">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-gray-900 leading-none">
                342 <span className="text-primary italic">Verified Sitters</span> in Bangalore
              </h2>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-500 bg-white px-4 py-2 rounded-xl border border-gray-100">
                Sort by: <span className="text-gray-900 flex items-center gap-1 cursor-pointer">Recommended <ChevronDown size={16} /></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockSitters.map((sitter, i) => (
                <motion.div
                  key={sitter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[2.5rem] border-2 border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:border-primary/30 transition-all shadow-sm group cursor-pointer"
                >
                  <div className="w-full md:w-32 h-48 md:h-32 flex-shrink-0 rounded-[2rem] overflow-hidden relative">
                    <img src={sitter.image} alt={sitter.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg">
                      <CheckCircle2 size={12} fill="white" className="text-emerald-500" />
                    </div>
                    <button className="absolute top-2 right-2 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:text-primary transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors italic">{sitter.name}</h3>
                        <p className="flex items-center gap-1 text-xs text-gray-500 font-bold mb-3">
                          <MapPin size={12} className="text-primary" />
                          {sitter.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-gray-900 leading-none">₹{sitter.price}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">per day</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-lg">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs font-black text-amber-700">{sitter.rating}</span>
                      </div>
                      <div className="text-xs font-bold text-gray-400">
                        {sitter.reviews} <span className="italic">Reviews</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {sitter.services.map((svc) => (
                        <span key={svc} className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest border border-gray-100">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-16 text-center">
              <Button variant="outline" size="lg" className="rounded-2xl px-12 border-2 border-gray-100 hover:border-primary italic group">
                Show 20 More Sitters
                <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </main>
        </div>
      </div>
      
      {/* Mobile Trust Strip */}
      <div className="md:hidden mt-10 px-6 pb-20">
        <div className="bg-indigo-600 rounded-[2rem] p-8 text-white text-center shadow-xl shadow-indigo-500/20">
          <ShieldCheck size={32} className="mx-auto mb-4" />
          <h4 className="font-black text-xl mb-2 italic">Aadhaar Verified Sitters</h4>
          <p className="text-indigo-100 text-sm">Every partner is verified through government ID checks for your pet's safety.</p>
        </div>
      </div>
    </div>
  );
};


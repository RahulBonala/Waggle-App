import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, ShieldCheck, Clock, 
  ChevronRight, Heart, Share2, Shield,
  CheckCircle2, MessageSquare, Calendar,
  Dog, Home, Camera, Sparkles, Zap, Scissors
} from 'lucide-react';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const SitterProfile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('About');

  const sitter = {
    name: "Priya Sharma",
    profession: "Professional Pet Sitter & Walker",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    cover: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200",
    rating: 4.9,
    reviewsCount: 124,
    location: "Koramangala, Bangalore",
    price: 499,
    about: "Hi, I am Priya. I have grown up with dogs and currently have a golden retriever named Max. I love long walks and playing fetch. I am certified in pet first aid and have specialized experience with senior pets and puppies.",
    experience: "5+ Years",
    repeatClients: "50+",
    badges: ['Adhaar Verified', 'Safety Certified', 'Top Rated'],
    gallery: [
        "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={sitter.cover} className="w-full h-full object-cover" alt="Cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-white shadow-2xl overflow-hidden bg-white">
                        <img src={sitter.image} className="w-full h-full object-cover" alt={sitter.name} />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                             <h1 className="text-4xl md:text-5xl font-black text-white">{sitter.name}</h1>
                             <CheckCircle2 className="text-emerald-400 fill-emerald-400" size={24} />
                        </div>
                        <p className="text-white/80 font-bold italic flex items-center gap-2 justify-center md:justify-start">
                            <Sparkles size={16} className="text-primary" />
                            {sitter.profession}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 mb-4">
                    <Button variant="outline" aria-label="Share profile" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-2xl">
                        <Share2 size={18} />
                    </Button>
                    <Button variant="outline" aria-label="Save to favorites" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-2xl">
                        <Heart size={18} />
                    </Button>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-grow space-y-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Rating', value: sitter.rating, icon: Star, color: 'text-amber-500' },
                        { label: 'Reviews', value: sitter.reviewsCount, icon: MessageSquare, color: 'text-blue-500' },
                        { label: 'Exp', value: sitter.experience, icon: Clock, color: 'text-emerald-500' },
                        { label: 'Repeats', value: sitter.repeatClients, icon: Heart, color: 'text-rose-500' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50">
                            <stat.icon className={`${stat.color} mb-3`} size={20} />
                            <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-100 overflow-x-auto scrollbar-hide whitespace-nowrap">
                    <div className="flex gap-8">
                        {['About', 'Services', 'Photos', 'Reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative ${
                                    activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="min-h-[300px]"
                    >
                        {activeTab === 'About' && (
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 italic">Story</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{sitter.about}</p>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
                                        <h4 className="flex items-center gap-2 font-black text-emerald-900 mb-4 italic">
                                            <ShieldCheck size={20} />
                                            Safety Features
                                        </h4>
                                        <ul className="space-y-3">
                                            {['24/7 Support Access', 'Emergency Transport', 'Daily Photo Updates', 'Live GPS Tracking'].map(f => (
                                                <li key={f} className="flex items-center gap-2 text-sm font-bold text-emerald-700/80">
                                                    <CheckCircle2 size={16} /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-indigo-50 p-6 rounded-[2rem] border border-indigo-100">
                                        <h4 className="flex items-center gap-2 font-black text-indigo-900 mb-4 italic">
                                            <Home size={20} />
                                            Home Environment
                                        </h4>
                                        <ul className="space-y-3">
                                            {['Large Private Yard', 'Zero Other Pets', 'No Crate Policy', 'Fenced Balcony'].map(f => (
                                                <li key={f} className="flex items-center gap-2 text-sm font-bold text-indigo-700/80">
                                                    <CheckCircle2 size={16} /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Services' && (
                            <div className="space-y-4">
                                {[
                                    { name: 'Dog Boarding', price: '₹499', period: 'per night', icon: Home },
                                    { name: 'Dog Walking', price: '₹199', period: 'per walk', icon: Dog },
                                    { name: 'Pet Grooming', price: '₹799', period: 'per session', icon: Scissors },
                                    { name: 'Vet Visit', price: '₹999', period: 'per visit', icon: Shield }
                                ].map((svc, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-primary/20 transition-all group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                                                <svc.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900">{svc.name}</h4>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{svc.period}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-primary italic">{svc.price}</div>
                                            <Button size="sm" variant="ghost" className="text-[10px] font-bold uppercase tracking-widest p-0">View Details</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'Photos' && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {sitter.gallery.map((img, i) => (
                                    <div key={i} className="aspect-square rounded-[2rem] overflow-hidden group cursor-zoom-in">
                                        <img src={img} alt={`Gallery photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                ))}
                                <button className="aspect-square rounded-[2.5rem] bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-300 hover:border-primary hover:text-primary transition-all group">
                                    <Camera size={32} />
                                    <span className="text-[10px] font-black uppercase tracking-widest mt-2 group-hover:text-primary italic">View All</span>
                                </button>
                            </div>
                        )}
                        
                        {activeTab === 'Reviews' && (
                            <div className="space-y-6">
                                {[
                                    { name: 'Amit K.', text: 'Priya was amazing with our Beagle! Highly recommended for senior dogs. She sent us hourly photos.', rating: 5, date: '2 days ago' },
                                    { name: 'Sneha R.', text: 'Very professional and punctual. Max loved the long walks in the park. Will book again!', rating: 5, date: '1 week ago' }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-50">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-black text-gray-400">{review.name[0]}</div>
                                                <div>
                                                    <h5 className="font-black text-gray-900">{review.name}</h5>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex text-amber-500">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 font-medium italic">"{review.text}"</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Sidebar Booking Card */}
            <aside className="lg:w-96 flex-shrink-0">
                <div className="bg-white rounded-[3rem] border-2 border-gray-100 p-8 sticky top-32 shadow-2xl shadow-gray-200/50">
                    <div className="flex justify-between items-end mb-8 pb-8 border-b border-gray-100">
                        <div>
                            <div className="text-sm font-bold text-gray-400 italic">Starting from</div>
                            <div className="text-4xl font-black text-gray-900 italic">₹{sitter.price}<span className="text-base text-gray-400 not-italic font-bold">/night</span></div>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-1.5 flex items-center gap-1">
                            <Zap size={12} fill="currentColor" /> Best Deal
                        </div>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Start Date</label>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 group focus-within:border-primary transition-colors">
                                    <Calendar size={18} className="text-gray-400 group-focus-within:text-primary" />
                                    <input type="text" placeholder="Jun 15" className="bg-transparent text-sm font-bold w-full focus:outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">End Date</label>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 group focus-within:border-primary transition-colors">
                                    <Calendar size={18} className="text-gray-400 group-focus-within:text-primary" />
                                    <input type="text" placeholder="Jun 18" className="bg-transparent text-sm font-bold w-full focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Select Service</label>
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-gray-200">
                                <span className="text-sm font-bold text-gray-900">Dog Boarding</span>
                                <ChevronRight size={18} className="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <Button variant="primary" size="lg" className="w-full rounded-2xl shadow-xl shadow-orange-500/30 font-black text-lg py-5 group" onClick={() => navigate('/checkout')}>
                        Request to Book
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <p className="text-center text-xs font-bold text-gray-400 mt-6 uppercase tracking-widest px-8 leading-relaxed">
                        No credit card required. Only 10% booking freeze fee.
                    </p>

                    <div className="mt-10 pt-8 border-t border-gray-100 space-y-4">
                        <div className="flex items-center gap-3 text-emerald-600">
                            <ShieldCheck size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Waggle Trust Covered</span>
                        </div>
                        <div className="flex items-center gap-3 text-emerald-600">
                            <CheckCircle2 size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Cancellation Protection</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};


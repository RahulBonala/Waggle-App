import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Phone, CheckCircle2, Home, 
  Navigation, Clock, 
  Activity, ChevronRight, 
  Zap, Wind, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Tracking: React.FC = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(0);
    const [isWalking, setIsWalking] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showSummary, setShowSummary] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        if (isWalking) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
                setProgress(prev => (prev < 100 ? prev + 0.1 : 100));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isWalking]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-gray-900 overflow-hidden relative font-manrope">
            {/* Full Screen Map Layer */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full object-cover" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <rect width="100%" height="100%" fill="#111827" />
                    
                    {/* Dark Mode City Grid */}
                    <path d="M 0 100 H 800 M 0 300 H 800 M 0 500 H 800 M 200 0 V 600 M 400 0 V 600 M 600 0 V 600" 
                          stroke="#1f2937" strokeWidth="2" />
                    
                    {/* Main Arteries */}
                    <path d="M 0 300 H 800" stroke="#374151" strokeWidth="40" />
                    <path d="M 400 0 V 600" stroke="#374151" strokeWidth="40" />
                    
                    {/* Park Area */}
                    <path d="M 450 350 Q 600 300 750 350 T 750 550 Q 600 580 450 550 T 450 350" 
                          fill="#064e3b" stroke="#059669" strokeWidth="2" />

                    {/* Walking Path */}
                    <circle cx="350" cy="250" r="10" fill="#ff6b1a" fillOpacity="0.2">
                        <animate attributeName="r" values="10;20;10" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <path
                        d="M 350 250 Q 400 200 450 250 T 550 300 T 450 400 T 350 450"
                        fill="none"
                        stroke="#ff6b1a"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="1000"
                        strokeDashoffset={1000 - (progress * 10)}
                        className="transition-all duration-1000"
                    />

                    {/* Sitter Avatar on Map */}
                    <g>
                        <animateMotion
                            dur="120s"
                            repeatCount="indefinite"
                            path="M 350 250 Q 400 200 450 250 T 550 300 T 450 400 T 350 450"
                        />
                        <circle r="12" fill="#ff6b1a" stroke="white" strokeWidth="3" />
                        <circle r="24" fill="#ff6b1a" fillOpacity="0.1">
                           <animate attributeName="r" values="12;30;12" dur="1.5s" repeatCount="indefinite" />
                           <animate attributeName="opacity" values="0.2;0;0.2" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                    </g>
                </svg>
            </div>

            <AnimatePresence>
                {!showSummary ? (
                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 500 }}
                        className="absolute bottom-10 left-6 right-6 z-10 max-w-lg mx-auto"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-[3rem] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/20">
                            {/* Live Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Activity size={24} className="animate-pulse" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-gray-900 italic">Live Tracking</h2>
                                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                                            Active since 10:00 AM
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-black text-gray-900 italic">{formatTime(time)}</div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Elapsed Time</p>
                                </div>
                            </div>

                            {/* Stats Strip */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { label: 'Distance', val: '1.2 km', icon: Navigation },
                                    { label: 'Avg Speed', val: '4.2 km/h', icon: Wind },
                                    { label: 'Pee/Poop', val: '2/1', icon: Zap }
                                ].map((s, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                                        <s.icon size={16} className="mx-auto mb-2 text-gray-400" />
                                        <div className="text-sm font-black text-gray-900">{s.val}</div>
                                        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Walker Contact */}
                            <div className="flex items-center justify-between p-4 bg-primary rounded-[2rem] text-white mb-6">
                                <div className="flex items-center gap-3 pl-2">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full border-2 border-white/20" alt="Walker" />
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest leading-none">Your Walker</div>
                                        <div className="font-black italic">Ravi Varma</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
                                        <MessageCircle size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
                                        <Phone size={18} />
                                    </button>
                                </div>
                            </div>

                            <Button 
                                variant="outline" 
                                className="w-full rounded-2xl border-2 border-gray-100 text-gray-400 text-xs font-black py-4 uppercase tracking-widest italic"
                                onClick={() => {
                                    setIsWalking(false);
                                    setShowSummary(true);
                                }}
                            >
                                Demo: Complete Service
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <div className="bg-white rounded-[4rem] p-10 max-w-lg w-full shadow-2xl overflow-hidden relative">
                            {/* Success Pattern */}
                            <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12">
                                <CheckCircle2 size={120} />
                            </div>

                            <div className="text-center mb-10">
                                <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-emerald-500">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-2 italic">Walk Success!</h2>
                                <p className="text-gray-500 font-bold italic uppercase tracking-widest text-[10px]">Your furry friend is back home safe</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                    <Clock size={20} className="text-primary mb-3" />
                                    <div className="text-2xl font-black text-gray-900 leading-none">45 Mins</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Total Duration</div>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                    <Navigation size={20} className="text-primary mb-3" />
                                    <div className="text-2xl font-black text-gray-900 leading-none">2.3 km</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Total Distance</div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-[2.5rem] border border-emerald-100 flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm shadow-emerald-100">
                                    <Home size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-emerald-900 italic">Safe Drop-off</h4>
                                    <p className="text-xs font-bold text-emerald-700/60">Confirmed at 10:45 AM today</p>
                                </div>
                            </div>

                            <Button 
                                size="lg" 
                                className="w-full rounded-[2rem] h-20 shadow-2xl shadow-primary/20"
                                onClick={() => navigate('/payment-complete')}
                            >
                                <div className="flex flex-col">
                                    <span className="text-lg font-black">Finalize & Pay</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic">Service Summary Invoice</span>
                                </div>
                                <ChevronRight className="ml-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Toolbar */}
            <div className="absolute top-8 left-6 right-6 flex justify-between items-center z-10">
                <button 
                  onClick={() => navigate(-1)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10 shadow-xl"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                   <span className="text-xs font-black text-white uppercase tracking-[0.2em] italic">Encrypted Connection</span>
                </div>
            </div>
        </div>
    );
};

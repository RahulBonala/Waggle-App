import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, Star, CreditCard, Wallet, 
  Building2, ChevronRight, Home, Share2,
  Download, Printer, Sparkles, Heart
} from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const PaymentComplete: React.FC = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isPaid, setIsPaid] = useState(false);

    const handlePayment = () => {
        setIsPaid(true);
    };

    const handleSubmit = () => {
        navigate('/dashboard');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    if (!isPaid) {
        return (
            <div className="min-h-screen bg-gray-50/30 pt-24 pb-20">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-gray-200 border border-gray-100">
                        <div className="text-center mb-10">
                            <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-emerald-500">
                                <CheckCircle2 size={40} />
                            </div>
                            <h1 className="text-3xl font-black text-gray-900 italic mb-2">Service Complete!</h1>
                            <p className="text-gray-500 font-bold italic uppercase tracking-widest text-[10px]">Your furry friend was dropped off safely</p>
                        </div>

                        {/* Final Invoice */}
                        <div className="bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100 mb-10">
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-6 italic text-center">Final Statement</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-500 italic uppercase tracking-wider text-[10px]">Session Duration (45m)</span>
                                    <span className="font-black text-gray-900">₹450.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-500 italic uppercase tracking-wider text-[10px]">Distance Covered (2.3km)</span>
                                    <span className="font-black text-gray-900">₹46.00</span>
                                </div>
                                <div className="flex justify-between items-center text-emerald-600">
                                    <span className="text-sm font-bold italic uppercase tracking-wider text-[10px]">Booking Deposit Paid</span>
                                    <span className="font-black">- ₹149.00</span>
                                </div>
                                <div className="h-px bg-gray-200 my-4" />
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mb-1">Total Outstanding</div>
                                        <div className="text-4xl font-black text-gray-900 leading-none">₹347.00</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Incl. GST 18%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Selection */}
                        <div className="space-y-3">
                            {[
                                { id: 'upi', name: 'Instant UPI Transfer', desc: 'No transaction fee', icon: Wallet, color: 'text-primary' },
                                { id: 'card', name: 'Credit / Debit Card', desc: 'All major banks', icon: CreditCard, color: 'text-blue-600' },
                                { id: 'bank', name: 'Netbanking', desc: 'Secure bank portal', icon: Building2, color: 'text-gray-500' }
                            ].map((m) => (
                                <button 
                                    key={m.id}
                                    onClick={handlePayment}
                                    className="w-full flex items-center justify-between p-6 bg-white rounded-[2rem] border-2 border-gray-100 hover:border-primary/30 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center ${m.color}`}>
                                            <m.icon size={24} />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-black text-gray-900 italic leading-none mb-1">{m.name}</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{m.desc}</div>
                                        </div>
                                    </div>
                                    <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl mx-auto px-6 text-center"
            >
                {/* Success Animation */}
                <motion.div 
                    variants={itemVariants}
                    className="relative w-32 h-32 mx-auto mb-10"
                >
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200 }}
                        className="absolute inset-0 bg-emerald-500 rounded-[2.5rem] shadow-2xl shadow-emerald-200"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center text-white"
                    >
                        <CheckCircle2 size={56} />
                    </motion.div>
                    
                    {/* Floating Icons */}
                    {[Sparkles, Heart, Star].map((Icon, i) => (
                        <motion.div
                            key={i}
                            animate={{ 
                                y: [-10, 10, -10],
                                x: [-5, 5, -5]
                            }}
                            transition={{ 
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className={`absolute ${i === 0 ? '-top-4 -right-4 text-amber-400' : i === 1 ? 'top-1/2 -left-8 text-rose-400' : '-bottom-4 right-4 text-blue-400'}`}
                        >
                            <Icon size={24} fill="currentColor" opacity={0.3} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl font-black text-gray-900 italic mb-4">Payment Success!</h1>
                    <p className="text-gray-500 font-bold italic uppercase tracking-widest text-[10px]">Reference: #WGL-82937-2024</p>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="mt-12 bg-gray-50 rounded-[3rem] p-10 border border-gray-100"
                >
                    <h2 className="text-xl font-black text-gray-900 mb-8 italic">Rate Ravi's Service</h2>
                    
                    {/* Interactive Stars */}
                    <div className="flex justify-center gap-3 mb-10">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button
                                key={s}
                                onMouseEnter={() => setHover(s)}
                                onMouseLeave={() => setHover(0)}
                                onClick={() => setRating(s)}
                                className="relative group transition-transform active:scale-90"
                            >
                                <Star 
                                    size={44} 
                                    className={`transition-all duration-300 ${
                                        (hover || rating) >= s ? 'text-amber-400 scale-110' : 'text-gray-200'
                                    }`}
                                    fill={(hover || rating) >= s ? 'currentColor' : 'none'}
                                    strokeWidth={2}
                                />
                                {(hover || rating) === s && (
                                    <motion.div 
                                        layoutId="star-glow"
                                        className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <textarea
                        rows={4}
                        placeholder="Was your dog happy? Let Ravi know!"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full bg-white rounded-[2rem] p-6 border-2 border-transparent focus:border-primary outline-none transition-all font-bold text-sm italic placeholder:text-gray-300 resize-none shadow-sm"
                    />

                    <div className="flex gap-4 mt-8">
                        <Button 
                            variant="primary" 
                            className="flex-grow rounded-[2rem] h-16 shadow-xl shadow-primary/20"
                            onClick={handleSubmit}
                        >
                            <span className="font-black italic">Submit Review</span>
                            <ChevronRight size={20} className="ml-2" />
                        </Button>
                        <button className="w-16 h-16 rounded-[2rem] bg-white border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                            <Share2 size={24} />
                        </button>
                    </div>
                </motion.div>

                {/* Footer Actions */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-12 flex justify-center gap-8"
                >
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-600 transition-colors italic">
                        <Download size={14} /> Download Invoice
                    </button>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-600 transition-colors italic">
                        <Printer size={14} /> Print Receipt
                    </button>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-12">
                   <Button variant="ghost" onClick={() => navigate('/dashboard')} className="text-gray-400 hover:text-primary">
                       <Home size={18} className="mr-2" />
                       <span className="font-black italic uppercase tracking-widest text-[10px]">Back to Dashboard</span>
                   </Button>
                </motion.div>
            </motion.div>
        </div>
    );
};


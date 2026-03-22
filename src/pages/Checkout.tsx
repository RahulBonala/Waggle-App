import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, CreditCard, ShieldCheck, 
  ChevronRight, CheckCircle2, Clock,
  Smartphone, Building2, Apple, AlertCircle,
  QrCode, Zap, ArrowLeft, Lock
} from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { motion, AnimatePresence } from 'framer-motion';

export const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            // Navigate to live tracking to show off the new feature!
            navigate('/tracking/BK-WGL-92837');
        }, 2000);
    };

    const steps = [
        { id: 1, name: 'Service Address' },
        { id: 2, name: 'Payment' }
    ];

    return (
        <div className="min-h-screen bg-gray-50/30 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 leading-none">Secure Checkout</h1>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 italic flex items-center gap-2">
                            <Lock size={12} /> SSL Encrypted Architecture
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-grow space-y-8">
                        {/* Step Progress */}
                        <div className="flex items-center gap-4 bg-white p-2 rounded-[2rem] border border-gray-100 shadow-sm w-fit">
                            {steps.map((s, i) => (
                                <React.Fragment key={s.id}>
                                    <div className="flex items-center gap-3 px-6 py-2">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                                            step >= s.id ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-400'
                                        }`}>
                                            {step > s.id ? <CheckCircle2 size={18} /> : s.id}
                                        </div>
                                        <span className={`text-sm font-black uppercase tracking-widest ${
                                            step >= s.id ? 'text-gray-900' : 'text-gray-400'
                                        }`}>{s.name}</span>
                                    </div>
                                    {i < steps.length - 1 && <div className="w-8 h-px bg-gray-100" />}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Step 1: Address */}
                        <div className={`bg-white rounded-[3rem] border-2 transition-all overflow-hidden ${
                            step === 1 ? 'border-primary/20 shadow-2xl shadow-primary/5' : 'border-gray-50 opacity-60'
                        }`}>
                            <div className="p-10">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-2xl font-black italic">Service Address</h2>
                                    {step > 1 && (
                                        <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="text-primary italic font-black">Edit</Button>
                                    )}
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-4"
                                        >
                                            {[
                                                { id: 'home', label: 'Home', address: 'Flat 402, Sunshine Apartments, 12th Main, Indiranagar, Bangalore - 560038' },
                                                { id: 'office', label: 'Office', address: 'WeWork Galaxy, Residency Road, Bangalore' }
                                            ].map((addr) => (
                                                <div 
                                                    key={addr.id}
                                                    className="group bg-gray-50/50 p-6 rounded-[2rem] border-2 border-transparent hover:border-primary/30 hover:bg-white transition-all cursor-pointer relative"
                                                    onClick={() => setStep(2)}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 group-hover:text-primary">
                                                                <MapPin size={20} />
                                                            </div>
                                                            <span className="font-black text-gray-900">{addr.label}</span>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-primary flex items-center justify-center">
                                                            <div className="w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transiton-opacity" />
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-500 leading-relaxed pl-13 pr-8">{addr.address}</p>
                                                </div>
                                            ))}
                                            <Button variant="outline" className="w-full rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 h-16 hover:border-primary hover:text-primary">
                                                + Add New Address
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <p className="font-bold text-gray-600 italic">Flat 402, Sunshine Apartments, Indiranagar...</p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Step 2: Payment */}
                        <div className={`bg-white rounded-[3rem] border-2 transition-all overflow-hidden ${
                            step === 2 ? 'border-primary/20 shadow-2xl shadow-primary/5' : 'border-gray-50 opacity-40 pointer-events-none'
                        }`}>
                            <div className="p-10">
                                <h2 className="text-2xl font-black italic mb-8">Payment Method</h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { id: 'upi', name: 'UPI / QR', icon: QrCode },
                                        { id: 'card', name: 'Credit/Debit', icon: CreditCard },
                                        { id: 'bank', name: 'NetBanking', icon: Building2 },
                                        { id: 'apple', name: 'Apple Pay', icon: Apple }
                                    ].map((m) => (
                                        <button 
                                            key={m.id}
                                            onClick={() => setPaymentMethod(m.id)}
                                            className={`flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all ${
                                                paymentMethod === m.id ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-400'
                                            }`}
                                        >
                                            <m.icon size={22} />
                                            <span className="font-black uppercase tracking-widest text-xs italic">{m.name}</span>
                                            {m.id === 'upi' && (
                                                <span className="ml-auto text-[8px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase">Fast</span>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    {paymentMethod === 'upi' && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8"
                                        >
                                            <div className="bg-white p-4 rounded-3xl shadow-xl shadow-gray-200/50">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="w-32 h-32" alt="QR" />
                                            </div>
                                            <div className="flex-grow text-center md:text-left">
                                                <h4 className="font-black text-gray-900 mb-2 italic">Scan with GPay, PhonePe or Paytm</h4>
                                                <p className="text-sm text-gray-500 font-medium mb-4">Or enter your VPA manually below</p>
                                                <Input placeholder="Enter UPI ID (e.g. 9876543210@upi)" className="rounded-xl border-gray-200 focus:border-primary" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="mt-10 p-6 bg-amber-50 rounded-[2rem] border border-amber-100 flex items-start gap-4">
                                    <AlertCircle className="text-amber-600 mt-1" size={20} />
                                    <p className="text-xs font-bold text-amber-700 leading-relaxed uppercase tracking-widest italic">
                                        Waggle Zero-Fraud Policy: You only pay the 10% booking fee now. The balance is settled after the service is completed.
                                    </p>
                                </div>

                                <Button 
                                    className="w-full mt-10 rounded-[2rem] h-20 shadow-2xl shadow-primary/20 group"
                                    size="lg"
                                    onClick={handlePay}
                                    isLoading={isProcessing}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-lg font-black group-hover:scale-105 transition-transform">Pay ₹149.00 Securely</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Instant Confirmation Unlock</span>
                                    </div>
                                    {!isProcessing && <ChevronRight className="ml-4 group-hover:translate-x-1 transition-transform" />}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <aside className="lg:w-96 flex-shrink-0">
                        <div className="bg-white rounded-[3rem] border-2 border-gray-100 p-8 sticky top-32">
                            <h3 className="text-xl font-black mb-8 italic">Bill Summary</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm font-bold text-gray-500">
                                    <span className="flex items-center gap-2 italic uppercase tracking-wider text-[10px]"><Zap size={14} /> Dog Boarding (3 nights)</span>
                                    <span className="text-gray-900">₹1,497.00</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-gray-500">
                                    <span className="flex items-center gap-2 italic uppercase tracking-wider text-[10px]"><Clock size={14} /> Peak Season Surcharge</span>
                                    <span className="text-gray-900">₹250.00</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-gray-500">
                                    <span className="flex items-center gap-2 italic uppercase tracking-wider text-[10px]"><ShieldCheck size={14} /> Safety & Insurance (GST Incl)</span>
                                    <span className="text-emerald-600">FREE</span>
                                </div>
                                <div className="h-px bg-gray-50 my-2" />
                                <div className="flex justify-between items-end">
                                    <div className="font-black text-gray-900 italic">Total Payable</div>
                                    <div className="text-2xl font-black text-gray-900">₹1,747.00</div>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-6 rounded-[2rem] border-2 border-primary/10">
                                <div className="flex justify-between mb-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">Pay Now (10%)</span>
                                    <span className="text-lg font-black text-primary italic">₹174.70</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Balance at Home</span>
                                    <span className="text-sm font-black text-gray-400 italic">₹1,572.30</span>
                                </div>
                            </div>

                            <div className="mt-10 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <ShieldCheck size={16} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 italic">Money Back Guarantee</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Smartphone size={16} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 italic">24/7 Booking Concierge</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};


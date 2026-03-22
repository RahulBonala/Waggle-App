import React, { useState, useEffect, useRef } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import { Button } from './Button';
import { useAppStore } from '../store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Dog, Cat, Rabbit, X } from 'lucide-react';
import { clsx } from 'clsx';
import toast from 'react-hot-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [name, setName] = useState('');
  const [hasPet, setHasPet] = useState<boolean | null>(null);
  const [petType, setPetType] = useState<'dog' | 'cat' | 'other' | null>(null);
  const [petName, setPetName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { setUser } = useAppStore();

  useEffect(() => {
    let interval: any;
    if (step === 'otp' && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  const handleSendOtp = () => {
    if (mobile.length < 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      toast.success('OTP sent successfully!');
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
    
    if (newOtp.every(digit => digit !== '')) {
      handleVerifyOtp(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = (otpValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (otpValue === '1234') {
        setStep('profile');
      } else {
        toast.error('Invalid OTP. Try 1234');
        setOtp(['', '', '', '']);
        otpRefs.current[0]?.focus();
      }
    }, 1000);
  };

  const handleCompleteProfile = () => {
    if (!name) {
      toast.error('Please enter your name');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        phone: mobile,
        email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
        hasPet: hasPet || false,
        petName: petName || undefined
      };
      setUser(userData);
      toast.success(`Welcome to Waggle, ${name}! 👋`);
      onClose();
    }, 1000);
  };



  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step === 'phone' ? 'Welcome to Waggle' : step === 'otp' ? 'Verification' : 'Tell us about yourself'}
      maxWidth="sm"
    >
      <div className="relative overflow-hidden min-h-[350px]">
        <AnimatePresence initial={false} mode="wait">
          {step === 'phone' && (
            <motion.div
              key="phone"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <p className="text-gray-600">Enter your mobile number to get started with India's most trusted pet care.</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl font-bold">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <Input
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="text-lg font-bold tracking-wider"
                    containerClassName="flex-1"
                    autoFocus
                  />
                </div>
                
                <Button onClick={handleSendOtp} isLoading={isLoading} disabled={mobile.length < 10} className="w-full">
                  Continue
                </Button>
                
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-400 font-medium">Coming Soon</span>
                  </div>
                </div>
                
                <button disabled className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-100 rounded-2xl font-bold text-gray-400 cursor-not-allowed">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 grayscale" />
                  Continue with Google
                </button>
              </div>
              
              <p className="text-[12px] text-gray-400 text-center leading-relaxed">
                By continuing, you agree to Waggle's <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
              </p>
            </motion.div>
          )}

          {step === 'otp' && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8"
            >
              <div className="text-center flex flex-col gap-2">
                <p className="text-gray-600">We've sent a 4-digit code to</p>
                <div className="flex items-center justify-center gap-2 font-bold text-xl text-gray-900">
                  +91 {mobile}
                  <button onClick={() => setStep('phone')} className="text-primary text-sm font-bold ml-1">Edit</button>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { otpRefs.current[index] = el; }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-16 text-center text-2xl font-bold bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-4 text-center">
                {resendTimer > 0 ? (
                  <p className="text-gray-400 text-sm font-medium">Resend OTP in {resendTimer}s</p>
                ) : (
                  <button onClick={() => { setResendTimer(30); toast.success('OTP Resent!'); }} className="text-primary font-bold hover:underline">
                    Resend OTP
                  </button>
                )}
                
                <p className="text-sm text-gray-400">Hint: Use 1234</p>
              </div>
            </motion.div>
          )}

          {step === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <Input
                  label="What's your full name?"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
                
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-700 ml-1">Do you have a pet?</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setHasPet(true)}
                      className={clsx(
                        'flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all',
                        hasPet === true ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-500'
                      )}
                    >
                      <CheckCircle2 size={24} className={hasPet === true ? 'opacity-100' : 'opacity-0'} />
                      <span className="font-bold">Yes</span>
                    </button>
                    <button
                      onClick={() => { setHasPet(false); setPetType(null); setPetName(''); }}
                      className={clsx(
                        'flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all',
                        hasPet === false ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-500'
                      )}
                    >
                      <X size={24} className={hasPet === false ? 'opacity-100' : 'opacity-0'} />
                      <span className="font-bold">No</span>
                    </button>
                  </div>
                </div>

                {hasPet && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="flex flex-col gap-6 pt-2"
                  >
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-bold text-gray-700 ml-1">Pet Type</label>
                      <div className="flex gap-3">
                        {[
                          { type: 'dog', icon: Dog, label: 'Dog' },
                          { type: 'cat', icon: Cat, label: 'Cat' },
                          { type: 'other', icon: Rabbit, label: 'Other' },
                        ].map((item) => (
                          <button
                            key={item.type}
                            onClick={() => setPetType(item.type as any)}
                            className={clsx(
                              'flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all',
                              petType === item.type ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-500'
                            )}
                          >
                            <item.icon size={20} />
                            <span className="text-[12px] font-bold">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Input
                      label="Pet's Name"
                      placeholder="e.g. Bruno"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                    />
                  </motion.div>
                )}
              </div>

              <Button
                onClick={handleCompleteProfile}
                isLoading={isLoading}
                disabled={!name || (hasPet === true && (!petType || !petName))}
                className="w-full"
              >
                Let's Go <ChevronRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
};


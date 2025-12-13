import React, { useState } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import { Button } from './Button';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: (user: any) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
    const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendOtp = () => {
        if (mobile.length < 10) return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep('otp');
        }, 1000);
    };

    const handleVerifyOtp = () => {
        if (otp.length !== 4) return;
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('profile');
        }, 1000);
    };

    const handleCompleteProfile = () => {
        if (!name) return;
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onLoginSuccess({ name, mobile });
            onClose();
        }, 1000);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={step === 'phone' ? 'Login or Sign Up' : step === 'otp' ? 'Verify Mobile' : 'Complete Profile'}
        >
            <div className="flex flex-col gap-4">
                {step === 'phone' && (
                    <>
                        <p className="text-secondary text-sm">We'll send you a 4-digit One Time Password to verify your mobile number.</p>
                        <Input
                            label="Mobile Number"
                            placeholder="Enter 10 digit number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            icon={<span>+91</span>}
                            maxLength={10}
                        />
                        <Button onClick={handleSendOtp} isLoading={isLoading} disabled={mobile.length < 10}>
                            Get OTP
                        </Button>
                    </>
                )}

                {step === 'otp' && (
                    <>
                        <p className="text-secondary text-sm">Enter the OTP sent to +91 {mobile}</p>
                        <Input
                            label="One Time Password"
                            placeholder="0000"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="text-center tracking-widest text-lg"
                            maxLength={4}
                        />
                        <Button onClick={handleVerifyOtp} isLoading={isLoading} disabled={otp.length < 4}>
                            Verify & Proceed
                        </Button>
                        <button className="text-primary text-sm font-semibold" onClick={() => setStep('phone')}>
                            Change Number
                        </button>
                    </>
                )}

                {step === 'profile' && (
                    <>
                        <p className="text-secondary text-sm">Tell us a bit about yourself to get started.</p>
                        <Input
                            label="Full Name"
                            placeholder="e.g. Rahul Sharma"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            label="Location"
                            placeholder="Society or Area"
                        />
                        <Button onClick={handleCompleteProfile} isLoading={isLoading} disabled={!name}>
                            Start Exploring
                        </Button>
                    </>
                )}
            </div>
        </Modal>
    );
};

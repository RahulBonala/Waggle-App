import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import styles from './Checkout.module.css';

export const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const handlePay = () => {
        // Simulate payment processing
        setTimeout(() => {
            navigate('/tracking');
        }, 1500);
    };

    return (
        <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
            <h1 className="text-2xl font-bold mb-6">Secure Checkout</h1>

            <div className={styles.grid}>
                <div className={styles.main}>
                    {/* Address Section */}
                    <div className={`${styles.card} ${step > 1 ? styles.completed : ''}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.stepNumber}>1</div>
                            <h2 className={styles.cardTitle}>Service Address</h2>
                        </div>
                        {step === 1 ? (
                            <div className={styles.cardContent}>
                                <div className={styles.addressList}>
                                    <div className={`${styles.addressOption} ${styles.selected}`}>
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold flex items-center gap-2"><MapPin size={16} /> Home</span>
                                            <div className={styles.radioSelected}></div>
                                        </div>
                                        <p className="text-sm text-secondary mt-1">Flat 402, Sunshine Apartments, 12th Main, Indiranagar, Bangalore - 560038</p>
                                    </div>
                                    <div className={styles.addressOption}>
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold flex items-center gap-2"><MapPin size={16} /> Office</span>
                                            <div className={styles.radio}></div>
                                        </div>
                                        <p className="text-sm text-secondary mt-1">WeWork Galaxy, Residency Road, Bangalore</p>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full mt-4" size="sm">+ Add New Address</Button>
                                <Button className="w-full mt-6" onClick={() => setStep(2)}>Proceed to Payment</Button>
                            </div>
                        ) : (
                            <div className="pl-12 pb-4">
                                <p className="font-medium">Flat 402, Sunshine Apartments...</p>
                                <button className="text-primary text-sm font-semibold mt-1" onClick={() => setStep(1)}>Change</button>
                            </div>
                        )}
                    </div>

                    {/* Payment Section */}
                    <div className={`${styles.card} ${step === 2 ? styles.active : ''}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.stepNumber}>2</div>
                            <h2 className={styles.cardTitle}>Payment Method</h2>
                        </div>
                        {step === 2 && (
                            <div className={styles.cardContent}>
                                <div className="flex flex-col gap-3">
                                    <div
                                        className={`${styles.paymentOption} ${paymentMethod === 'upi' ? styles.selected : ''}`}
                                        onClick={() => setPaymentMethod('upi')}
                                    >
                                        <span className="font-bold">UPI / QR Code</span>
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Recommended</span>
                                    </div>
                                    {paymentMethod === 'upi' && (
                                        <div className={styles.upiSection}>
                                            <div className={styles.qrPlaceholder}>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR Code" className="w-32 h-32" />
                                                <p className="text-sm font-medium mt-2">Scan & Pay</p>
                                            </div>
                                            <div className="text-center my-2 text-secondary text-sm">OR</div>
                                            <Input placeholder="Enter UPI ID (e.g. 9876543210@upi)" />
                                        </div>
                                    )}

                                    <div
                                        className={`${styles.paymentOption} ${paymentMethod === 'card' ? styles.selected : ''}`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <span className="font-bold flex items-center gap-2"><CreditCard size={18} /> Credit / Debit Card</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-6" size="lg" onClick={handlePay}>
                                    Pay ₹99 (Booking Fee)
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Summary Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.summaryCard}>
                        <h3 className="font-bold mb-4">Bill Details</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-secondary">Dog Walking (1 hr)</span>
                                <span>₹250</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-secondary">Service Fee</span>
                                <span>₹20</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-secondary">GST (18%)</span>
                                <span>₹45</span>
                            </div>
                            <div className={styles.divider}></div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Booking Fee</span>
                                <span>₹99</span>
                            </div>
                            <div className="text-xs text-secondary mt-1">
                                *Distance fee (₹20/km) will be charged after the walk.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

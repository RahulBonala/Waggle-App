import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star, CreditCard, Wallet, Building } from 'lucide-react';
import { Button } from '../components/Button';
import styles from './PaymentComplete.module.css';

export const PaymentComplete: React.FC = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isPaid, setIsPaid] = useState(false);

    const handlePayment = () => {
        // Simulate Payment
        setIsPaid(true);
    };

    const handleSubmit = () => {
        // Submit review logic
        navigate('/dashboard');
    };

    if (!isPaid) {
        return (
            <div className="container" style={{ padding: '2rem 1.5rem' }}>
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Walk Complete!</h1>
                    <p className="text-secondary">Ravi has dropped off max safely.</p>
                </div>

                {/* Summary Card */}
                <div className={styles.invoiceCard}>
                    <h3 className="font-bold text-lg mb-4 text-center">Final Invoice</h3>
                    <div className="flex justify-between mb-2">
                        <span>Total Distance</span>
                        <span className="font-bold">5.5 km</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Rate</span>
                        <span className="font-bold">₹20 / km</span>
                    </div>
                    <div className="flex justify-between mb-4 text-secondary text-sm">
                        <span>Booking Fee</span>
                        <span className="text-success">Paid (₹99)</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className="flex justify-between font-bold text-xl mt-4">
                        <span>Amount Due</span>
                        <span>₹{5.5 * 20}</span>
                    </div>
                </div>

                {/* Payment Options */}
                <div className="mt-8">
                    <h3 className="font-bold mb-4">Select Payment Method</h3>
                    <div className={styles.paymentMethods}>
                        <div className={styles.method} onClick={handlePayment}>
                            <div className="flex items-center gap-3">
                                <Wallet className="text-primary" />
                                <div>
                                    <p className="font-bold">UPI</p>
                                    <p className="text-xs text-secondary">GooglePay, PhonePe</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.method} onClick={handlePayment}>
                            <div className="flex items-center gap-3">
                                <CreditCard className="text-trust-blue" />
                                <div>
                                    <p className="font-bold">Card</p>
                                    <p className="text-xs text-secondary">Credit/Debit</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.method} onClick={handlePayment}>
                            <div className="flex items-center gap-3">
                                <Building className="text-gray-500" />
                                <div>
                                    <p className="font-bold">Netbanking</p>
                                    <p className="text-xs text-secondary">All Indian Banks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <div className={styles.successWrapper}>
                <CheckCircle size={64} className="text-success mb-4" />
                <h1 className="text-2xl font-bold text-center">Payment Successful!</h1>
                <p className="text-secondary text-center mb-8">How was Ravi's service?</p>
            </div>

            <div className={styles.ratingCard}>
                <div className="flex justify-center gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={32}
                            fill={star <= rating ? "#F59E0B" : "none"}
                            className={star <= rating ? "text-warning" : "text-gray-300"}
                            onClick={() => setRating(star)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>

                <div className="mb-4">
                    <label className="text-sm font-bold mb-2 block">Feedback</label>
                    <textarea
                        className={styles.textarea}
                        rows={4}
                        placeholder="Write your review here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </div>

                <Button variant="primary" className="w-full" onClick={handleSubmit}>
                    Submit & Go to Home
                </Button>
            </div>
        </div>
    );
};

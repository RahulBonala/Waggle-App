import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Shield, Clock, Award } from 'lucide-react';
import { Button } from '../components/Button';
import styles from './SitterProfile.module.css';

export const SitterProfile: React.FC = () => {
    const navigate = useNavigate();
    // Mock data - in real app would fetch by ID
    const sitter = {
        name: "Priya Sharma",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
        rating: 4.9,
        reviews: 124,
        location: "Koramangala, Bangalore",
        about: "Hi, I am Priya. I have grown up with dogs and currently have a golden retriever named Max. I love long walks and playing fetch. I am certified in pet first aid.",
        price: 250,
        verified: true,
    };

    return (
        <div className={styles.container}>
            <div className={styles.heroWrapper}>
                <img src={sitter.image} alt={sitter.name} className={styles.heroImage} />
                <div className={styles.overlay}></div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.name}>{sitter.name}</h1>
                        <div className={styles.meta}>
                            <span className="flex items-center gap-1"><MapPin size={18} /> {sitter.location}</span>
                            <span className="flex items-center gap-1"><Star fill="currentColor" className="text-warning" size={18} /> {sitter.rating} ({sitter.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.main}>
                        {/* Trust Section */}
                        <div className={styles.trustSection}>
                            <div className={styles.trustItem}>
                                <Shield className="text-success" size={24} />
                                <div>
                                    <h4 className="font-bold">Identity Verified</h4>
                                    <p className="text-sm text-secondary">Aadhaar & Background Check Passed</p>
                                </div>
                            </div>
                            <div className={styles.trustItem}>
                                <Award className="text-primary" size={24} />
                                <div>
                                    <h4 className="font-bold">50+ Repeat Clients</h4>
                                    <p className="text-sm text-secondary">Highly trusted by pet parents</p>
                                </div>
                            </div>
                        </div>

                        {/* About */}
                        <section className="mb-8">
                            <h3 className={styles.sectionTitle}>About {sitter.name.split(' ')[0]}</h3>
                            <p className={styles.text}>{sitter.about}</p>
                        </section>

                        {/* Services */}
                        <section className="mb-8">
                            <h3 className={styles.sectionTitle}>Services & Rates</h3>
                            <div className={styles.rateCard}>
                                <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                                    <span className="font-semibold flex items-center gap-2"><Clock size={18} /> Dog Walking</span>
                                    <span className="font-bold">₹{sitter.price} / hour</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold flex items-center gap-2"><Clock size={18} /> House Sitting</span>
                                    <span className="font-bold">₹{sitter.price * 2} / night</span>
                                </div>
                            </div>
                        </section>

                        {/* Reviews Mock */}
                        <section>
                            <h3 className={styles.sectionTitle}>Reviews</h3>
                            <div className="flex flex-col gap-4">
                                <div className={styles.review}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold">Amit K.</span>
                                        <span className="text-sm text-secondary">2 days ago</span>
                                    </div>
                                    <p className="text-sm">Priya was amazing with our Beagle! Highly recommended.</p>
                                </div>
                                <div className={styles.review}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold">Sneha R.</span>
                                        <span className="text-sm text-secondary">1 week ago</span>
                                    </div>
                                    <p className="text-sm">Very professional and punctual. Sent regular updates.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.bookingCard}>
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-2xl font-bold">₹{sitter.price}</span>
                                    <span className="text-secondary">/hour</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <Star size={14} fill="currentColor" className="text-warning" /> {sitter.rating}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mb-6">
                                <div className={styles.inputGroup}>
                                    <label>Date</label>
                                    <input type="date" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Time</label>
                                    <input type="time" className={styles.input} />
                                </div>
                            </div>

                            <Button variant="primary" className="w-full" onClick={() => navigate('/checkout')}>
                                Request to Book
                            </Button>
                            <p className="text-xs text-center mt-4 text-secondary">You won't be charged yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

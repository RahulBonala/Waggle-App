import React from 'react';
import { Heart, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Heart fill="white" size={24} className="text-primary" />
                            <span className={styles.logoText}>Waggle India</span>
                        </div>
                        <p className={styles.tagline}>
                            India's #1 Trusted Pet Care Network. Connecting pet parents with verified sitters.
                        </p>
                        <div className={styles.social}>
                            <Instagram size={20} />
                            <Facebook size={20} />
                            <Twitter size={20} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className={styles.heading}>Services</h3>
                        <ul className={styles.list}>
                            <li><a href="#">Dog Walking</a></li>
                            <li><a href="#">Home Boarding</a></li>
                            <li><a href="#">House Sitting</a></li>
                            <li><a href="#">Vet Consultation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.heading}>Top Cities</h3>
                        <ul className={styles.list}>
                            <li><a href="#">Pet Sitters in Bangalore</a></li>
                            <li><a href="#">Pet Sitters in Mumbai</a></li>
                            <li><a href="#">Pet Sitters in Delhi</a></li>
                            <li><a href="#">Pet Sitters in Hyderabad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.heading}>Support</h3>
                        <ul className={styles.list}>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Trust & Safety</a></li>
                            <li><a href="#">Cancellation Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2025 Waggle India. Made with <Heart size={12} fill="currentColor" className="inline" /> for pets.</p>
                    <div className={styles.trustStrip}>
                        <span><MapPin size={12} className="inline" /> Made in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

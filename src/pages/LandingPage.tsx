import React from 'react';
import { Search, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import styles from './LandingPage.module.css';

// We'll use the generated image path here
import heroImage from '../assets/hero_pet_owner.png';

export const LandingPage: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.headline}>
                            India's #1 Trusted <br />
                            <span className="text-primary">Pet Care Network</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Verified sitters, walkers, and groomers for your furry family.
                            Book trusted care in your neighborhood.
                        </p>

                        {/* Search Widget */}
                        <div className={styles.searchWidget}>
                            <div className={styles.searchRow}>
                                <div className={styles.inputGroup}>
                                    <label>Service</label>
                                    <select className={styles.select}>
                                        <option>Dog Walking</option>
                                        <option>Home Boarding</option>
                                        <option>House Sitting</option>
                                    </select>
                                </div>

                                <div className={`${styles.inputGroup} ${styles.borderLeft}`}>
                                    <label>Location</label>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" />
                                        <input type="text" placeholder="Enter Society or Area" className={styles.input} />
                                    </div>
                                </div>

                                <div className={`${styles.inputGroup} ${styles.borderLeft}`}>
                                    <label>Dates</label>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary" />
                                        <input type="text" placeholder="Select Dates" className={styles.input} />
                                    </div>
                                </div>

                                <Button size="lg" className={styles.searchButton}>
                                    <Search size={20} />
                                    Search
                                </Button>
                            </div>
                        </div>

                        <div className={styles.trustSignals}>
                            <div className={styles.signal}>
                                <CheckCircle size={16} className="text-success" />
                                <span>10,000+ Happy Pets</span>
                            </div>
                            <div className={styles.signal}>
                                <CheckCircle size={16} className="text-success" />
                                <span>Verified by Aadhaar</span>
                            </div>
                            <div className={styles.signal}>
                                <CheckCircle size={16} className="text-success" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroImageWrapper}>
                        <img src={heroImage} alt="Happy pet owner" className={styles.heroImage} />
                        <div className={styles.floatCard}>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="font-bold text-sm">500+ Sitters online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.services}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <div className={styles.servicesGrid}>
                        <ServiceCard
                            title="Dog Walking"
                            price="₹199/walk"
                            color="#FF6B35"
                            icon={<MapPin />}
                        />
                        <ServiceCard
                            title="Pet Sitting"
                            price="₹499/night"
                            color="#1A4D8C"
                            icon={<Calendar />}
                        />
                        <ServiceCard
                            title="Grooming"
                            price="₹699/session"
                            color="#10B981"
                            icon={<Search />}
                        />
                        <ServiceCard
                            title="Vet Consultation"
                            price="₹399/visit"
                            color="#F59E0B"
                            icon={<Search />}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

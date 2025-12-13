import React from 'react';
import { Link } from 'react-router-dom';
import { SitterCard } from '../components/SitterCard';
import styles from './SearchResults.module.css';

export const SearchResults: React.FC = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <h2 className="text-2xl font-bold mb-6">Pet Sitters in Bangalore</h2>
            <div className={styles.layout}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.filterCard}>
                        <h3 className="font-bold mb-4">Filters</h3>
                        {/* Add filters here */}
                        <div className="flex flex-col gap-2">
                            <label><input type="checkbox" /> Verified Only</label>
                            <label><input type="checkbox" /> House with Yard</label>
                            <label><input type="checkbox" /> No other pets</label>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className={styles.results}>
                    <Link to="/sitter/1" style={{ textDecoration: 'none' }}>
                        <SitterCard
                            name="Priya Sharma"
                            location="Koramangala, 2km away"
                            rating={4.9}
                            reviews={124}
                            price={250}
                            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
                            badges={['KYC Verified', '50+ Repeats']}
                        />
                    </Link>
                    <Link to="/sitter/1" style={{ textDecoration: 'none' }}>
                        <SitterCard
                            name="Rahul Verma"
                            location="Indiranagar, 4km away"
                            rating={4.7}
                            reviews={89}
                            price={199}
                            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
                            badges={['KYC Verified']}
                        />
                    </Link>
                    <Link to="/sitter/1" style={{ textDecoration: 'none' }}>
                        <SitterCard
                            name="Anjali Gupta"
                            location="HSR Layout, 5km away"
                            rating={4.8}
                            reviews={56}
                            price={300}
                            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
                            badges={['KYC Verified', 'Pet Friendly Home']}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { Star, MapPin, BadgeCheck } from 'lucide-react';
import styles from './SitterCard.module.css';

interface SitterCardProps {
    name: string;
    location: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    badges?: string[];
}

export const SitterCard: React.FC<SitterCardProps> = ({
    name,
    location,
    rating,
    reviews,
    price,
    image,
    badges = []
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />
                {badges.includes('KYC Verified') && (
                    <div className={styles.verifiedBadge}>
                        <BadgeCheck size={14} /> Only Trusted
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.rating}>
                        <Star size={14} fill="currentColor" className="text-warning" />
                        <span>{rating}</span>
                        <span className={styles.reviews}>({reviews})</span>
                    </div>
                </div>

                <div className={styles.location}>
                    <MapPin size={14} />
                    {location}
                </div>

                <div className={styles.footer}>
                    <div className={styles.price}>
                        <span className={styles.amount}>₹{price}</span>
                        <span className={styles.unit}>/hour</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

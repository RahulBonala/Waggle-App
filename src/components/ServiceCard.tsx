import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    price: string;
    color: string;
    icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, color, icon }) => {
    return (
        <div className={styles.card} style={{ '--card-color': color } as React.CSSProperties}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>Starts at {price}</p>
            <div className={styles.arrow}>
                <ArrowRight size={20} />
            </div>
        </div>
    );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Calendar, Scissors, Stethoscope } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import styles from './Dashboard.module.css';

interface DashboardProps {
    user: { name: string; mobile: string };
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div className={styles.header}>
                <h1 className={styles.welcome}>Namaste, {user.name.split(' ')[0]}!</h1>
                <p className={styles.subtitle}>What does your pet need today?</p>
            </div>

            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h2 className={styles.bannerTitle}>Get 20% off your first booking!</h2>
                    <p className={styles.bannerText}>Use code <strong>WAGGLE20</strong> at checkout.</p>
                </div>
            </div>

            <h2 className={styles.sectionTitle}>Quick Actions</h2>
            <div className={styles.grid}>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <ServiceCard
                        title="Dog Walking"
                        price="₹199/walk"
                        color="#FF6B35"
                        icon={<Dog />}
                    />
                </Link>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <ServiceCard
                        title="Pet Sitting"
                        price="₹499/night"
                        color="#1A4D8C"
                        icon={<Calendar />}
                    />
                </Link>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <ServiceCard
                        title="Grooming"
                        price="₹699/session"
                        color="#10B981"
                        icon={<Scissors />}
                    />
                </Link>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <ServiceCard
                        title="Vet Consultation"
                        price="₹399/visit"
                        color="#F59E0B"
                        icon={<Stethoscope />}
                    />
                </Link>
            </div>
        </div>
    );
};

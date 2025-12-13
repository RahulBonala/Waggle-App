import React from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

export const Navbar: React.FC<{ onLoginClick: () => void; user: { name: string; mobile: string } | null }> = ({ onLoginClick, user }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="Waggle India" style={{ height: '40px' }} />
                </div>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <a href="#" className={styles.link}>Become a Sitter</a>
                    <a href="#" className={styles.link}>Help/Support</a>
                    {user ? (
                        <span className="font-bold text-trust-blue" style={{ cursor: 'default' }}>Hi, {user.name.split(' ')[0]}</span>
                    ) : (
                        <Button variant="primary" size="sm" onClick={onLoginClick}>Login / Sign Up</Button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <a href="#" className={styles.mobileLink}>Become a Sitter</a>
                        <a href="#" className={styles.mobileLink}>Help/Support</a>
                        <div className={styles.mobileAuth}>
                            {user ? (
                                <span className="font-bold text-trust-blue text-lg">Hi, {user.name}</span>
                            ) : (
                                <Button variant="primary" className="w-full" onClick={onLoginClick}>Login / Sign Up</Button>
                            )}
                        </div>
                        <div className={styles.trustBadge}>
                            <ShieldCheck size={16} className="text-success" />
                            <span>Aadhaar Verified Sitters</span>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

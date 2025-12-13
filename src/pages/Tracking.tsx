import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, CheckCircle, Home, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import styles from './Tracking.module.css';

export const Tracking: React.FC = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(0);
    const [isWalking, setIsWalking] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showSummary, setShowSummary] = useState(false);

    // Timer Logic
    useEffect(() => {
        let interval: any;
        if (isWalking) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
                setProgress(prev => (prev < 100 ? prev + 0.5 : 100));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isWalking]);

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleFinishWalk = () => {
        setIsWalking(false);
        setShowSummary(true);
    };

    const handleProceedToPayment = () => {
        navigate('/payment-complete');
    };

    return (
        <div className={styles.container}>
            {/* Full Screen Map Layer */}
            <div className={styles.mapLayer}>
                {/* CSS/SVG Map Simulation */}
                <svg className={styles.mapSvg} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <rect width="100%" height="100%" fill="#f1f5f9" />

                    {/* Basic Clean Roads */}
                    <path d="M 0 300 H 800" stroke="#cbd5e1" strokeWidth="30" />
                    <path d="M 400 0 V 600" stroke="#cbd5e1" strokeWidth="30" />
                    <path d="M 100 100 Q 400 50 700 100" stroke="#cbd5e1" strokeWidth="20" fill="none" />

                    {/* Park Area - Simplified */}
                    <path d="M 450 350 Q 600 300 750 350 T 750 550 Q 600 580 450 550 T 450 350" fill="#dcfce7" stroke="none" />

                    {/* Walking Path (Orange Polyline) */}
                    <path
                        d="M 350 250 Q 400 200 450 250 T 550 300 T 450 400 T 350 450"
                        fill="none"
                        stroke="#FF6B35"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="1000"
                        strokeDashoffset={1000 - (progress * 10)}
                    />

                    {/* Start Point */}
                    <circle cx="350" cy="250" r="8" fill="#1A4D8C" stroke="white" strokeWidth="2" />

                    {/* Moving Marker (Live) */}
                    <g>
                        <circle cx="0" cy="0" r="12" fill="#FF6B35" fillOpacity="0.3">
                            <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="0" cy="0" r="8" fill="#FF6B35" stroke="white" strokeWidth="2">
                            <animateMotion
                                dur="100s"
                                repeatCount="indefinite"
                                path="M 350 250 Q 400 200 450 250 T 550 300 T 450 400 T 350 450"
                            />
                        </circle>
                    </g>
                </svg>
            </div>

            {/* Screen A: Live Dashboard Overlay */}
            {!showSummary && (
                <div className={styles.floatingOverlay}>
                    <div className={styles.statusCard}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    Walk in Progress
                                    <span className={styles.liveBadge}>LIVE</span>
                                </h2>
                            </div>
                            {/* Walker Mini Profile */}
                            <div className="flex items-center gap-2">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Ravi" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                                <div className="text-right">
                                    <p className="font-bold text-sm">Ravi</p>
                                    <div className="flex items-center text-xs text-warning">
                                        <Star size={10} fill="currentColor" /> 4.9
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Digital Timer */}
                        <div className="text-5xl font-mono font-bold text-center my-6 text-trust-blue tracking-wider">
                            {formatTime(time)}
                        </div>

                        {/* Stepper */}
                        <div className={styles.stepper}>
                            <div className={styles.step}>
                                <div className={styles.stepIconCompleted}><CheckCircle size={14} /></div>
                                <div className={styles.stepContent}>
                                    <p className="font-bold text-sm">Walk Started</p>
                                    <p className="text-xs text-secondary">10:00 AM</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIconActive}></div>
                                <div className={styles.stepContent}>
                                    <p className="font-bold text-sm text-primary">Reaching Park</p>
                                    <p className="text-xs text-secondary">In Progress</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIconPending}></div>
                                <div className={styles.stepContent}>
                                    <p className="font-semibold text-sm text-secondary">Walk Completes</p>
                                    <p className="text-xs text-secondary">Est. 11:00 AM</p>
                                </div>
                            </div>
                            <div className={styles.stepperLine}></div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6">
                            <Button variant="outline" className="flex-1 border-gray-300">
                                <MessageCircle size={18} /> Chat
                            </Button>
                            <Button className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                                <Phone size={18} /> WhatsApp
                            </Button>
                        </div>

                        <p className="text-center text-sm text-secondary mt-4 font-medium">Your dog is enjoying the walk! 🐾</p>

                        {/* Demo Finish Button */}
                        <button
                            className="w-full mt-4 text-xs text-gray-400 hover:text-gray-600 underline"
                            onClick={handleFinishWalk}
                        >
                            Demo: Finish Walk
                        </button>
                    </div>
                </div>
            )}

            {/* Screen B: Summary Overlay */}
            {showSummary && (
                <div className={styles.summaryOverlay}>
                    <div className={styles.summaryCard}>
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CheckCircle size={32} className="text-success" />
                            </div>
                            <h1 className="text-2xl font-bold">Walk Completed Successfully!</h1>
                        </div>

                        {/* Stats Grid */}
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <p className="text-xs text-secondary uppercase">Total Time</p>
                                <p className="text-xl font-bold">45 Mins</p>
                            </div>
                            <div className={styles.statItem}>
                                <p className="text-xs text-secondary uppercase">Distance</p>
                                <p className="text-xl font-bold">2.3 km</p>
                            </div>
                            <div className={`${styles.statItem} col-span-2`}>
                                <p className="text-xs text-secondary uppercase">Route</p>
                                <p className="font-bold text-sm">Home to Jayanagar Park & Back</p>
                            </div>
                        </div>

                        {/* Drop Off Success Box */}
                        <div className={styles.successBox}>
                            <Home className="text-success shrink-0" size={24} />
                            <div>
                                <p className="font-bold text-success">Safe Drop-off Confirmed</p>
                                <p className="text-xs text-secondary">Your dog has been safely returned home 🏠 at 10:45 AM</p>
                            </div>
                        </div>

                        <Button className="w-full mt-6" size="lg" onClick={handleProceedToPayment}>
                            View Details & Pay
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

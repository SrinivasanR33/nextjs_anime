"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const HomePage = () => {
    const [showTopBoxes, setShowTopBoxes] = useState(true);

    useEffect(() => {
        // Hide top boxes after 5 seconds
        const hideTimeout = setTimeout(() => {
            setShowTopBoxes(false);

            // Reset to default after 10 seconds
            const showTimeout = setTimeout(() => {
                setShowTopBoxes(true);
            }, 10000);

            return () => clearTimeout(showTimeout);
        }, 5000);

        return () => clearTimeout(hideTimeout);
    }, []);

    return (
        <div className={styles.container}>
            {/* Top 50% */}
            <div className={`${styles.top} ${showTopBoxes ? '' : styles.hide}`}>
                <div className={styles.box}>Box 1</div>
                <div className={styles.box}>Box 2</div>
            </div>

            {/* Bottom 50% */}
            <div className='flex flex-1'>
                <div className={`${styles.bottom} ${styles.animation}`}>
                    <div className={styles.box}>Box 3</div>
                    <div className={styles.box}>Box 4</div>
                </div>
                <div className={`${styles.bottom1} ${styles.animation}`}>
                    <div className={styles.box}>Box 5</div>
                    <div className={styles.box}>Box 6</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

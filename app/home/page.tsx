"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { loacalImage } from '../commen/CommenName';

const HomePage = () => {
    const [showTopBoxes, setShowTopBoxes] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            // Toggle between showing top and bottom containers
            setShowTopBoxes(prevState => !prevState);
        }, 10000); // Change every 10 seconds
        if (!showTopBoxes) {

        }
        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${showTopBoxes ? styles.container : styles.hidecontainer}`}>
            {/* Top 50% */}
            <div className={`${showTopBoxes ? styles.top : styles.hideTop}`}
            //  style={{ ...(!showTopBoxes && { display: 'none' }) }}
            >
                <div className={styles.box1}>
                    <div className={styles.inerbox}>

                        {/* <Image src={loacalImage.homePage.homeimage2} style={{ height: '100%' }} alt='' /> */}
                    </div>
                </div>
                <div className={styles.box1}>
                    <div className={styles.inerbox}>

                        {/* <Image src={loacalImage.homePage.homeimage1} style={{ height: '100%' }} alt='' /> */}
                    </div>
                </div>
            </div>
            {/* Bottom 50% */}
            <div className={`${styles.bottom} ${showTopBoxes ? "" : styles.showBottom}`}>
                <div className={styles.box}>Box 3</div>
                <div className={styles.box}>Box 4</div>
                <div className={styles.box}>Box 5</div>
                <div className={styles.box}>Box 6</div>
            </div>
        </div>
    );
};

export default HomePage;

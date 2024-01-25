"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { homepageImageList1, loacalImage } from '../commen/CommenName';
import CenterBox from '../component/PageComponents/rootpage/centerBox/RootPageCenterBox';
import { homeImageList } from '../commen/CommenTypeDefination';

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
        <div className='max-h-screen flex-col overflow-auto'>
            <div className={`${showTopBoxes ? styles.container : styles.hidecontainer}`}>
                {/* Top 50% */}
                <div className={`${showTopBoxes ? styles.top : styles.hideTop}`}
                //  style={{ ...(!showTopBoxes && { display: 'none' }) }}
                >
                    <div className={styles.box1}>
                        <div className={styles.inerbox}>

                            <Image src={loacalImage.homePage.homeimage1} style={{ height: '100%', width: "100%" }} alt='' />
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.inerbox}>

                            <Image src={loacalImage.homePage.homeimage2} style={{ height: '100%', width: "100%" }} alt='' />
                        </div>
                    </div>
                </div>
                {/* Bottom 50% */}
                <div className={`${styles.bottom} ${showTopBoxes ? "" : styles.showBottom}`}>
                {homepageImageList1.map((box: homeImageList, i) => (
                    <div className={`${styles.box}`} key={i}>
                        {/* <Image src={demon} layout='fill' objectFit='covers' alt=''/>S */}
                        <Image src={box.image} style={{ height: "100%", width: "100%" }} alt={`${box.id}`} />
                    </div>
                ))}
                    {/* <div className={styles.box}>Box 3</div>
                    <div className={styles.box}>Box 4</div>
                    <div className={styles.box}>Box 5</div>
                    <div className={styles.box}>Box 6</div> */}
                </div>
            </div>

            <CenterBox />
        </div>
    );
};

export default HomePage;

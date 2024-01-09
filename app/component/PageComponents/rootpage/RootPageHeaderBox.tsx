"use client"
// components/FlipBox.tsx
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { homeImageList } from '@/app/commen/CommenTypeDefination';
import { landingpageImageList, landingpageImageList2 } from '@/app/commen/CommenName';
interface FlipBoxProps {
    content: string;
}

const FlipBox: React.FC<FlipBoxProps> = ({ content }) => {
    const [flipped, setFlipped] = useState(false);
    const [boxes, setBoxes] = useState<homeImageList[]>(landingpageImageList);


    useEffect(() => {
        const interval = setInterval(() => {
            // Toggle between the first and second sets of boxes
            setFlipped(!flipped)
            setBoxes((prevBoxes: homeImageList[]) => (prevBoxes[0].id === 1 ? landingpageImageList2 : landingpageImageList));
        }, 10000);

        // Clear the interval when the component unmounts or when needed
        return () => clearInterval(interval);
    }, [flipped]);

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.box_container}   ${flipped ? styles.flipped : ''} lg:flex-row md:flex-row sm:flex-col flex-col`}>
                {boxes.map((box: homeImageList, i) => (
                    <div className={`${styles.box}`} key={i}>
                        {/* <Image src={demon} layout='fill' objectFit='covers' alt=''/>S */}
                        <Image src={box.image} style={{ height: "100%", width: "100%" }} alt={`${box.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlipBox;

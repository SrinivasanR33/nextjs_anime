"use client"
// components/FlipBox.tsx
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface FlipBoxProps {
    content: string;
}

const FlipBox: React.FC<FlipBoxProps> = ({ content }) => {
    const [flipped, setFlipped] = useState(false);
    const [boxes, setBoxes] = useState([1, 2, 3, 4, 5]);


    useEffect(() => {
        const interval = setInterval(() => {
            // Toggle between the first and second sets of boxes
            setFlipped(!flipped)
            setBoxes((prevBoxes) => (prevBoxes[0] === 1 ? [6, 7, 8, 9, 10] : [1, 2, 3, 4, 5]));
        }, 5000);

        // Clear the interval when the component unmounts or when needed
        return () => clearInterval(interval);
    }, [flipped]);

    return (
        <div className={styles.container}>
            <div className={`${styles.box_container} ${flipped ? styles.flipped : ''}`}>
                {boxes.map((box) => (
                    <div className={styles.box} key={box}>
                        {box}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlipBox;

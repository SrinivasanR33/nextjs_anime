"use client"
import React, { useState, useEffect } from 'react';
// Import your Tailwind CSS styles

const RootPageHeader: React.FC = () => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setAnimate(true);

        // Clear animation after 5 seconds
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="grid grid-cols-4 h-screen">
            {/* Initial 4 boxes */}
            {[1, 2, 3, 4].map((index) => (
                <div key={index} className="border-solid border-primary-focus">hfis</div>
            ))}

            {/* Additional 4 boxes for animation */}
            {[5, 6, 7, 8].map((index) => (
                <div
                    key={index}
                    className={`box ${animate ? 'animate-in' : 'animate-out'}`}
                ></div>
            ))}
        </div>
    );
};

export default RootPageHeader;

'use client'
import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`bg-gray-800 text-red h-screen w-1/5 fixed top-0 left-0 p-4 transition-all ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={toggleSidebar} className="text-red">
                {isOpen ? 'Close' : 'Open'}dxascsv
            </button>
            <ul className="space-y-4 mt-4">
                <li>
                    <a href="#">Item 1</a>
                </li>
                <li>
                    <a href="#">Item 2</a>
                </li>
                <li>
                    <a href="#">Item 3</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

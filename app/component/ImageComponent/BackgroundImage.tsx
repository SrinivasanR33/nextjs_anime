// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    backgroundImage: string;
}

const LayoutBackground: React.FC<LayoutProps> = ({ children, backgroundImage }) => {
    const layoutStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return <div style={layoutStyle}>{children}</div>;
};

export default LayoutBackground;

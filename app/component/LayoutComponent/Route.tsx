'use client'

import Navbar from '../Navbar';
import { usePathname } from 'next/navigation';

const Layout: React.FC = () => {
    const router = usePathname();

    // Determine which layout to use based on the route
    const getLayout = () => {
        if (router.startsWith('/routeA')) {
            return <Navbar page={"main"} />;
        } else if (router.startsWith('/home')) {
            return <Navbar page={""} />;
        } else {
            return <Navbar page={"main"} />; // Default layout
        }
    };

    return getLayout();
};

export default Layout;

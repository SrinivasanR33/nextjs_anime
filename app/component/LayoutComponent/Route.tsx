'use client'

import { useAppSelector } from '@/redux/hook/hook';
import Navbar from '../Navbar';
import { usePathname } from 'next/navigation';

const Layout: React.FC = () => {
    const router = usePathname();

    // Determine which layout to use based on the route
    const { fullScreen } = useAppSelector((state) => state.masterReducer)
    const getLayout = () => {
        if (router.startsWith('/routeA')) {
            return <Navbar page={"main"} />;
        } else if (router.startsWith('/home')) {
            return <Navbar page={""} />;
        } else if (router.startsWith("/imagelist") && fullScreen) {
            return <></>; // Default layout
        } else {
            return <Navbar page={"main"} />; // Default layout

        }

    };

    return getLayout();
};

export default Layout;

"use client"
// components/LogoutButton.tsx

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        // Sign out the user
        const data = await signOut({ callbackUrl: "/" });

        // Redirect to a specific page after logout (optional)
        if (data) {
            const { url } = data;

            // Check if url is defined before redirecting
            if (url) {
                router.push(url)
            }
        }
    };

    return (
        <button className='btn btn-xs btn-secondary' onClick={handleLogout} disabled={!session}>
            Logout
        </button>
    );
};

export default LogoutButton;

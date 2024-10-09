'use client'

import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

interface UserProfileProps {
    initialUserId: string | null;
}

const UserProfile = ({ initialUserId }: UserProfileProps) => {
    const [userId, setUserId] = useState(initialUserId);

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await fetch('/api/get-current-user');
                const data = await response.json();
                if (data.userId) {
                    setUserId(data.userId);
                }
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        // Optionally, you can periodically check for updates
        const interval = setInterval(fetchUserId, 5000); // Check every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>User Id: {userId || 'No user ID available'}</h1>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<UserProfileProps> = async () => {
    // You might want to fetch the initial user ID from your database or another source
    return {
        props: {
            initialUserId: null, // This will be updated by the client-side effect
        },
    };
};

export default UserProfile;
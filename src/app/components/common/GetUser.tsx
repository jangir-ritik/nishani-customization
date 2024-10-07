'use client'
import { useEffect, useState } from 'react';

export default function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch('/api/user', {
                    headers: {
                        'user-id': 'current-user-id', // Replace with actual user ID
                    },
                });
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!userData) return <div>User not found</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
    );
}
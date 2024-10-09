'use client'
import { api } from '@/app/lib/wordpress/auth';
import { useEffect } from 'react';

export default function UserProfile() {
    useEffect(() => {
        api.get("customers/7").then((res) => {
            console.log(res.data);
        })
    }, []);


    return (
        <div>
            <h1>User Profile</h1>
        </div>
    );
}
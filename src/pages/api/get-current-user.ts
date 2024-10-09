// pages/api/getCurrentUser.ts
import { NextApiRequest, NextApiResponse } from 'next';

// You'll need to implement a proper database or state management solution
// This is just a placeholder
let currentUserId: string | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    res.status(200).json({ userId: currentUserId });
}

// Update your existing user API route to also update this currentUserId
export function updateCurrentUserId(userId: string) {
    currentUserId = userId;
}
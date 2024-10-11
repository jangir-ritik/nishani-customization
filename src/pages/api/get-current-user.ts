import { NextApiRequest, NextApiResponse } from 'next';

// You might want to use a more persistent storage solution in production
let currentUserId: string | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Set headers to prevent caching
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('Pragma', 'no-cache');

    res.status(200).json({ userId: currentUserId });
}

// Export a function to update the user ID
export function updateCurrentUserId(userId: string) {
    currentUserId = userId;
}
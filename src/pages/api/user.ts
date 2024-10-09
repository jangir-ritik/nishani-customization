import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const userData = req.body;

        if (!userData || !userData.id) {
            return res.status(400).json({ message: 'User data is required' });
        }

        console.log('Received user data for ID:', userData.id);

        // Here you can process the user data as needed
        // For example, you might want to store it in a database or state management system

        res.status(200).json({
            message: 'User data received successfully',
            userId: userData.id
        });

    } catch (error: any) {
        console.error('Error processing user data:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}
// pages/api/user.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        console.log('Received userId:', userId);

        // Fetch user data using the WooCommerce REST API
        const response = await fetch(
            `https://nishanistudio.com/wp-json/wc/v3/customers/${userId}`,
            {
                headers: {
                    'Authorization': 'Basic ' + Buffer.from('ck_96d94f775b205d983c24968ee9054914dcb3a00b:cs_18884552606f1cd6e53c0bb6a3ecc18b1dfd98d0').toString('base64')
                }
            }
        );

        const userData = await response.json();

        res.status(200).json(userData);
    } catch (error: any) {
        console.error('Error processing request:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
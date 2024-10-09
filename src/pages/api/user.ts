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

        console.log('Processing request for userId:', userId);

        // Set a timeout for the WooCommerce API call
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        try {
            const response = await fetch(
                `https://nishanistudio.com/wp-json/wc/v3/customers/${userId}`,
                {
                    headers: {
                        'Authorization': 'Basic ' + Buffer.from('ck_96d94f775b205d983c24968ee9054914dcb3a00b:cs_18884552606f1cd6e53c0bb6a3ecc18b1dfd98d0').toString('base64')
                    },
                    signal: controller.signal
                }
            );

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`WooCommerce API responded with status: ${response.status}`);
            }

            const userData = await response.json();
            return res.status(200).json(userData);

        } catch (fetchError: any) {
            if (fetchError.name === 'AbortError') {
                return res.status(504).json({ 
                    message: 'Request to WooCommerce API timed out',
                    error: 'timeout'
                });
            }
            throw fetchError;
        }

    } catch (error: any) {
        console.error('Error processing request:', error);
        res.status(500).json({ 
            message: 'Internal server error', 
            error: error.message,
            errorType: error.name
        });
    }
}
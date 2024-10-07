import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const csvFilePath = path.join(process.cwd(), 'data', 'user-ids.csv');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Respond to OPTIONS immediately
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { user_id } = req.body;

    if (!user_id) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        let csvData = '';
        if (fs.existsSync(csvFilePath)) {
            csvData = fs.readFileSync(csvFilePath, 'utf8');
        } else {
            csvData = 'user_id,timestamp\n';
        }

        const newEntry = `${user_id},${new Date().toISOString()}\n`;
        csvData += newEntry;

        // In a production environment, you would save this data to a database or external storage
        // For demonstration purposes, we're just keeping it in memory
        console.log('Updated CSV data:', csvData);

        // Respond immediately
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error storing user ID:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
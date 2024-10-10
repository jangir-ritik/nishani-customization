// pages/api/test-user.js
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.body;
    res.status(200).json({
        receivedUserId: userId,
        method: req.method,
        headers: req.headers,
        body: req.body
    });
}
import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
    id: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const { userId } = req.query

        if (!userId || typeof userId !== 'string') {
            return res.status(400).json({ error: 'Invalid user ID' })
        }
        console.log(userId);
        const mockUser: User = {
            id: userId
        }
        console.log(mockUser);
        return res.status(200).json(mockUser)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
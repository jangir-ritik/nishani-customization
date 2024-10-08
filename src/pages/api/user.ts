import mysql from 'mysql2/promise';
import { NextApiRequest, NextApiResponse } from 'next';
import { RowDataPacket } from 'mysql2';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: process.env.DB_USE_SSL === 'true' ? {
            rejectUnauthorized: false
        } : undefined
    };

    try {
        console.log('Attempting connection with:', {
            host: dbConfig.host,
            user: dbConfig.user,
            database: dbConfig.database,
            ssl: dbConfig.ssl ? 'Enabled' : 'Disabled'
        });

        const connection = await mysql.createConnection(dbConfig);

        // Get user ID from session or token
        const userId = req.headers['user-id'];

        // Note the updated table prefix 'luxria_' instead of 'wp_'
        const [rows] = await connection.execute(
            'SELECT * FROM `luxria_users` WHERE id = ?',
            [userId]
        ) as [RowDataPacket[], any];

        await connection.end();

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        console.error('Database error:', {
            message: error.message,
            code: error.code,
            errno: error.errno,
            sqlState: error.sqlState,
            config: {
                host: dbConfig.host,
                user: dbConfig.user,
                database: dbConfig.database,
                ssl: dbConfig.ssl ? 'Enabled' : 'Disabled'
            }
        });

        res.status(500).json({
            error: 'Database connection failed',
            details: error.message,
            suggestion: 'Check your database configuration and SSL settings'
        });
    }
}
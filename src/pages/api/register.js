// import prisma from '../../lib/prisma'; // Assuming you have a prisma.js setup
import { tripleEncrypt } from '../../utils/encryption.js';
import Prisma from '../../../db/index';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        console.log(name, email, password);

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Encrypt the password 3 times
        const encryptedPassword = tripleEncrypt(password);
        console.log(encryptedPassword, 'encrypt password');
        try {
            const user = await Prisma.user.create({
                data: {
                    name,
                    email,
                    password: encryptedPassword,
                },
            });

            res.status(200).json({ success: true, userId: user.id });
        } catch (error) {
            if (error.code === 'P2002') {
                // Unique constraint violation (email already exists)
                return res.status(409).json({ success: false, message: 'Email already exists' });
            }
            console.error('Error creating user:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}

import Prisma from '../../../db/index.js';

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const user = await Prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: {
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user';
import { sendResetEmail } from '../../config/mailer';

export const resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Email not registered' });

    const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    sendResetEmail(user.email, resetToken);

    res.json({ message: 'Password reset link sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reset email' });
  }
};

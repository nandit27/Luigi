import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { authMiddleware } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google', async (req, res) => {
  try {
    const { credential } = req.body;
    
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    if(!email.endsWith("@charusat.edu.in") && !email.endsWith("@charusat.ac.in")){
        return res.status(403).json({ message: 'Invalid email domain' });
    }

    console.log(payload);


    // Determine role based on email domain
    const role = email.endsWith('@charusat.edu.in') ? 'student' : 'admin';

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        name,
        picture,
        role
      });
    }

    const token = jwt.sign(
      { userId: user._id, email, name, picture, role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        email,
        name,
        picture,
        role
      }
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Get user profile with downloaded datasets
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select('-__v')
      .lean();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
});

router.get('/verify', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

export default router; 
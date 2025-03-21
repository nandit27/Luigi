const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middleware/auth');

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

    // // Check if email is from Charusat
    // if (!email.endsWith('@charusat.edu.in') && !email.endsWith('@charusat.ac.in')) {
    //   return res.status(403).json({ message: 'Only Charusat email addresses are allowed' });
    // }

    // Create JWT token
    const token = jwt.sign(
      { email, name, picture },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: { email, name, picture }
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
});

router.get('/verify', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router; 
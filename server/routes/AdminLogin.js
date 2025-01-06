const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Admin Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if credentials match .env values
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Generate a token
    const token = jwt.sign(
      { username, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login successful', token });
  }

  res.status(401).json({ error: 'Invalid username or password' });
});

module.exports = router;

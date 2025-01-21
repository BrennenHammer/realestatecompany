const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User'); // Require the User model
const bcrypt = require('bcrypt'); // Require bcrypt for password hashing

// Admin Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: 'Invalid username or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid username or password' });

    // Generate a token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// Admin Register Route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, isAdmin: true });
    await newUser.save();

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: 'Failed to create admin' });
  }
});

module.exports = router;
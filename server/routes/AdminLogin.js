const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Admin = require('../models/Admin'); // Require the Admin model
const bcrypt = require('bcrypt'); // Require bcrypt for password hashing

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

// Admin Register Route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create admin' });
  }
});

module.exports = router;
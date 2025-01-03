const express = require('express');
const router = express.Router();
const Listing = require('../models/Listings');
// Create a new listing
router.post('/add', async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json({ message: 'Listing added successfully', listing });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing'); // Import the Listing model
const authenticateAdmin = require('../middleware/AuthenticateAdmit'); // Middleware for admin authentication
const { body, validationResult } = require('express-validator'); // Input validation middleware

// Route to create a new listing (admin only)
router.post(
  '/listings',
  authenticateAdmin,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, price } = req.body;
      const newListing = new Listing({
        title,
        description,
        price,
      });

      await newListing.save();
      res.status(201).json({ message: 'Listing created successfully', newListing });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create listing', details: err.message });
    }
  }
);

// Route to delete a listing (admin only)
router.delete('/listings/:id', authenticateAdmin, async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });

    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete listing', details: err.message });
  }
});

// Route to update a listing (admin only)
router.put(
  '/listings/:id',
  authenticateAdmin,
  [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('price').optional().isNumeric().withMessage('Price must be a number'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!listing) return res.status(404).json({ error: 'Listing not found' });

      res.status(200).json({ message: 'Listing updated successfully', listing });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update listing', details: err.message });
    }
  }
);

// Route to get all listings (admin only)
router.get('/listings', authenticateAdmin, async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json({ listings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings', details: err.message });
  }
});

module.exports = router;

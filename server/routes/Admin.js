const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');
const authenticateAdmin = require('../middleware/AuthenticateAdmit'); // Ensure filename matches
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Set up Cloudinary for image storage (if you are using it)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'listings_images',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage: storage });

// Route to create a new listing (admin only)
router.post(
  '/listings',
  authenticateAdmin,
  upload.array('images', 20), // Allows up to 5 images per listing
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
      const imageUrls = req.files.map(file => file.path); // URLs of uploaded images

      const newListing = new Listing({
        title,
        description,
        price,
        images: imageUrls, // Store image URLs in the listing
      });

      await newListing.save();
      res.status(201).json({ message: 'Listing created successfully', newListing });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create listing', details: error.message });
    }
  }
);

// Route to delete a listing (admin only)
router.delete('/listings/:id', authenticateAdmin, async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });

    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete listing', details: error.message });
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
    } catch (error) {
      res.status(500).json({ error: 'Failed to update listing', details: error.message });
    }
  }
);

// Route to get all listings with pagination (admin only)
router.get('/listings', authenticateAdmin, async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Pagination
  try {
    const listings = await Listing.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({ listings });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch listings', details: error.message });
  }
});

// Route to get a single listing (admin only)
router.get('/listings/:id', authenticateAdmin, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });

    res.status(200).json({ listing });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch listing', details: error.message });
  }
});

module.exports = router;

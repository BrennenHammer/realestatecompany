const express = require('express');
const multer = require('multer');
const Listing = require('../models/Listing'); // Import Listing model
const router = express.Router();

// Setup multer for image uploads
const upload = multer({ dest: 'uploads/' }); // Image upload destination folder

// POST route to create a new listing with images
router.post('/add', upload.array('images', 5), async (req, res) => {  // 'images' is the field name for image upload
  try {
    const { title, description, price, bathrooms, rooms, residenceType } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];  // Store uploaded image paths

    const newListing = new Listing({
      title,
      description,
      price,
      bathrooms,
      rooms,
      residenceType,
      images,  // Store the array of image paths
    });

    await newListing.save();
    res.status(201).json({ message: 'Listing added successfully', newListing });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

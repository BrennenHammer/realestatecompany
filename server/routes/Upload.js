const express = require('express');
const router = express.Router();
const { uploadImage } = require('../utils/cloudinary');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary folder for multer

// Route to upload an image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const result = await uploadImage(req.file.path, 'listings');
    res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: 'Image upload failed', details: error.message });
  }
});

module.exports = router;

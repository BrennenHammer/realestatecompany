const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,  // Replace with your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_KEY,     // Replace with your Cloudinary API key
  api_secret: process.env.CLOUDINARY_SECRET // Replace with your Cloudinary API secret
});

// Utility function to upload an image
const uploadImage = async (filePath, folder = 'uploads') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder, // Optional: specify folder to organize uploads
      use_filename: true, // Use the original file name
      unique_filename: false, // Avoid generating unique names
      resource_type: 'image', // Default is 'image'
    });
    return result;
  } catch (error) {
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};

module.exports = { cloudinary, uploadImage };

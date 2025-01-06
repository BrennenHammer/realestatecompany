const mongoose = require('mongoose');

// Define Listing Schema
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true, // Automatically creates an index
    required: true,
    trim: true,
    minlength: 3,  // Ensure title has a minimum length
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10, // Ensure description is meaningful
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  images: [{
    type: String,
    validate: {
      validator: (image) => {
        // Basic image URL validation (supports more formats)
        return /^(http|https):\/\/[^\s]+(\.(jpg|jpeg|png|gif|bmp|webp|svg))$/i.test(image);
      },
      message: '{VALUE} is not a valid image URL',
    },
    validate: [
      {
        validator: function(value) {
          return value.length <= 15; // Limit the number of images to 5
        },
        message: 'You can only upload up to 5 images.',
      }
    ],
  }],
  bathrooms: {
    type: Number,
    default: 0,
    min: 0,
  },
  rooms: {
    type: Number,
    default: 0,
    min: 0,
  },
  residenceType: {
    type: String,
    enum: {
      values: [
        'Studio Apartment',
        '1 Bedroom Apartment',
        '2 Bedroom Apartment',
        'Condominium',
        'Single Family Home',
        'Townhouse',
        'Villa',
        'Duplex',
        'Triplex',
        'Apartment Complex',
      ],
      message: '{VALUE} is not a valid residence type',
    },
    default: 'House',
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Sold', 'Archived'],
    default: 'Active',
  },
}, { timestamps: true });

// Indexing commonly queried fields, avoiding duplicates
listingSchema.index({ price: 1 });
listingSchema.index({ residenceType: 1 });

// Create Listing Model
const Listing = mongoose.model('Listing', listingSchema);

// Export Listing Model
module.exports = Listing;

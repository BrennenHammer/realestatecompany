const mongoose = require('mongoose');

// Define Listing Schema
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
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
        // Basic image URL validation
        return /^(http|https):\/\/[^\s]+(\.(jpg|jpeg|png|gif))$/i.test(image);
      },
      message: '{VALUE} is not a valid image URL',
    },
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
}, { timestamps: true });

// Create Listing Model
const Listing = mongoose.model('Listing', listingSchema);

// Export Listing Model
module.exports = Listing;

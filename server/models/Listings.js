// Import Mongoose
const mongoose = require('mongoose');

// Define Listing Schema
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  images: [{
    type: String,
    validate: {
      validator: (image) => {
        // Basic image URL validation
        return /^(http|https):\/\/+\.{2,4}\/+.\w+$/g.test(image);
      },
      message: '{VALUE} is not a valid image URL'
    }
  }],
  bathrooms: {
    type: Number,
    default: 0,
    min: 0
  },
  rooms: {
    type: Number,
    default: 0,
    min: 0
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
        'Apartment Complex'
      ],
      message: '{VALUE} is not a valid residence type'
    },
    default: 'House'
  }
}, { timestamps: true });

// Custom Validation for Residence Type
listingSchema.path('residenceType').validate((value) => {
  return.includes(value);
}, 'Invalid residence type');

// Error Handling for Validation Errors
listingSchema.post('validate', (error, doc) => {
  if (error) {
    console.error('Validation Error:', error);
  }
});

// Create Listing Model
const Listing = mongoose.model('Listing', listingSchema);

// Export Listing Model
module.exports = Listing;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const listingsRoutes = require('./routes/Listing.js');
const adminRoutes = require('./routes/Admin.js'); // Import the admin routes


require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Allow all origins, or configure as needed
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/listings', listingsRoutes);
app.use('/api/admin', adminRoutes); // Admin-specific routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit process if DB connection fails
  });

// Default route
app.get('/', (req, res) => res.send('Welcome to the MERN Stack Backend'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

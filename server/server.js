const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const listingsRoutes = require('./routes/Listing.js');
const adminRoutes = require('./routes/Admin.js'); // Admin routes for managing listings
const adminLoginRoutes = require('./routes/AdminLogin.js'); // Admin login route
const uploadRoutes = require('./routes/Upload');
const authRouter = require('./routes/Auth.js');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests (configure as needed)
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/listings', listingsRoutes);           // Listing management routes
app.use('/api/admin', adminRoutes);                 // Admin-specific routes
app.use('/api/adminlogin', adminLoginRoutes);       // Admin login route
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
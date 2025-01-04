// authenticateAdmin.js

const jwt = require('jsonwebtoken');

// Middleware to authenticate admin users
const authenticateAdmin = (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Invalid token format' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }

      // Check if the user has admin privileges
      if (!decoded.isAdmin) {
        return res.status(403).json({ error: 'Access denied: Admins only' });
      }

      // Attach the decoded user information to the request object
      req.user = decoded;
      next();
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = authenticateAdmin;

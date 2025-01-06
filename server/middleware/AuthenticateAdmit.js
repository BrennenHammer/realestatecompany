const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    if (!decoded.isAdmin) {
      return res.status(403).json({ error: 'Access denied: Admins only' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authenticateAdmin;

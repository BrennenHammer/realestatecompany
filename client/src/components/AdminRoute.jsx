import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Example check
  const token = localStorage.getItem('token'); // Token for authenticated users

  if (!token || !isAdmin) {
    return <Navigate to="/" replace />; // Redirect unauthorized users
  }

  return children; // Render the protected component if authorized
};

export default AdminRoute;

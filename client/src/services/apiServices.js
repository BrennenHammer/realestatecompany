import axios from 'axios';

// Set up the axios instance
const api = axios.create({
  baseURL: '/api/admin', // You can set the base URL for the admin API here
});

// Function to get listings
export const getListings = () => {
  const token = localStorage.getItem('adminToken');
  
  // If token exists, add it to the headers
  if (token) {
    return api.get('/listings', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  } else {
    return Promise.reject('No token found');
  }
};

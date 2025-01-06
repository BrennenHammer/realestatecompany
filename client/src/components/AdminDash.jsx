import React, { useState } from 'react';
import axios from 'axios';

const AdminDash = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [rooms, setRooms] = useState('');
  const [residenceType, setResidenceType] = useState('House');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // To manage loading state
  const [errorMessage, setErrorMessage] = useState(''); // To display error messages

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('bathrooms', bathrooms);
    formData.append('rooms', rooms);
    formData.append('residenceType', residenceType);

    // Append each image file to FormData
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      setLoading(true);
      setErrorMessage('');

      // Get the admin token from localStorage
      const adminToken = localStorage.getItem('adminToken');
      if (!adminToken) {
        throw new Error('No admin token found.');
      }

      // Send the POST request to the backend
      await axios.post('/api/listings', formData, {
        headers: {
          'Authorization': `Bearer ${adminToken}`,
        },
      });
      
      // Clear form fields after successful submission
      setTitle('');
      setDescription('');
      setPrice('');
      setBathrooms('');
      setRooms('');
      setResidenceType('House');
      setImages([]);

      alert('Listing posted successfully!');
    } catch (error) {
      console.error('Error posting listing:', error);
      setErrorMessage(error.response ? error.response.data.error : 'Failed to post listing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Post a New Listing</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label>Bathrooms</label>
        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />

        <label>Rooms</label>
        <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} required />

        <label>Residence Type</label>
        <select value={residenceType} onChange={(e) => setResidenceType(e.target.value)}>
          <option value="Studio Apartment">Studio Apartment</option>
          <option value="1 Bedroom Apartment">1 Bedroom Apartment</option>
          <option value="2 Bedroom Apartment">2 Bedroom Apartment</option>
          <option value="Condominium">Condominium</option>
          <option value="Single Family Home">Single Family Home</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Villa">Villa</option>
          <option value="Duplex">Duplex</option>
          <option value="Triplex">Triplex</option>
          <option value="Apartment Complex">Apartment Complex</option>
        </select>

        <label>Images</label>
        <input type="file" multiple onChange={handleImageChange} />

        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Post Listing'}
        </button>
      </form>
    </div>
  );
};

export default AdminDash;

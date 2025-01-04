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
        // Send the POST request without capturing the response
        await axios.post('/api/listings', formData);
        alert('Listing posted successfully!');
      } catch (error) {
        console.error('Error posting listing:', error);
        alert('Failed to post listing.');
      }
      
  };

  return (
    <div>
      <h1>Post a New Listing</h1>
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

        <button type="submit">Post Listing</button>
      </form>
    </div>
  );
};

export default AdminDash;

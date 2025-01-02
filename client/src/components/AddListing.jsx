import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    images: '',
    bathrooms: '',
    rooms: '',
    residenceType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imagesArray = formData.images.split(',').map((url) => url.trim());
      const data = { ...formData, images: imagesArray };
      const response = await axios.post('/api/listings/add', data);
      alert(response.data.message);
      setFormData({
        title: '',
        description: '',
        price: '',
        images: '',
        bathrooms: '',
        rooms: '',
        residenceType: ''
      });
    } catch (error) {
      console.error(error);
      alert('Error adding listing: ' + error.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add New Listing</h2>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input name="images" placeholder="Image URLs (comma-separated)" value={formData.images} onChange={handleChange} />
      <input name="bathrooms" type="number" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} />
      <input name="rooms" type="number" placeholder="Rooms" value={formData.rooms} onChange={handleChange} />
      <select name="residenceType" value={formData.residenceType} onChange={handleChange}>
        <option value="">Select Residence Type</option>
        <option value="Studio Apartment">Studio Apartment</option>
        <option value="1 Bedroom Apartment">1 Bedroom Apartment</option>
        {/* Add other residence types */}
      </select>
      <button type="submit">Add Listing</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
  input, textarea, select {
    padding: 10px;
    font-size: 1em;
  }
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default AddListing;

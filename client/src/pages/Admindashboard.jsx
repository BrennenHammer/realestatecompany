import React from 'react';
import AddListing from '../components/AddListing';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <DashboardTitle>Admin Dashboard</DashboardTitle>
      <AddListing />
    </div>
  );
};

const DashboardTitle = styled.h1`
  font-size: 24px; /* Adjust the font size to your liking */
  font-weight: 400; /* Optional: adjust the font weight */
  margin-bottom: 20px;
  margin-left: 15px;
`;

export default AdminDashboard;
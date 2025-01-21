import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

// Create an Axios instance with the correct baseURL
const api = axios.create({
  baseURL: 'http://localhost:4000/api/adminlogin',
});

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/login', { username, password });
      localStorage.setItem('adminToken', data.token); // Store the JWT in local storage
      // Redirect to the admin dashboard or other protected area
      window.location.href = '/admin/dashboard';
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Something went wrong');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await api.post('/register', { username, password });
      setError('Registration successful. Please log in.');
      setIsRegistering(false);
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Something went wrong');
    }
  };

  return (
    <Container>
      <Navbar />
      <Title>{isRegistering ? 'Admin Register' : 'Admin Login'}</Title>
      <Form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <InputContainer>
          <Label>Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputContainer>
        {isRegistering && (
          <InputContainer>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputContainer>
        )}
        <Button type="submit">{isRegistering ? 'Register' : 'Login'}</Button>
        {error && <ErrorText>{error}</ErrorText>}
        {!isRegistering && (
          <RegisterText>
            Don't have an account?{' '}
            <RegisterButton onClick={() => setIsRegistering(true)}>Register</RegisterButton>
          </RegisterText>
        )}
      </Form>
    </Container>
  );
};

export default AdminLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 85%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  margin-left: 20px;
  background-color: darkgreen;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const RegisterText = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const RegisterButton = styled.button`
  background-color: darkgreen;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;
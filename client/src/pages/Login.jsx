import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', { username, password });
      localStorage.setItem('adminToken', response.data.token); // Store the JWT in local storage
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
      const response = await axios.post('/api/admin/register', { username, password });
      setError('Registration successful. Please log in.');
      setIsRegistering(false);
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Admin Register' : 'Admin Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isRegistering && (
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        {error && <p>{error}</p>}
        {!isRegistering && (
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </p>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
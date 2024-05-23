/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');  // State for the username
  const [password, setPassword] = useState('');  // State for the password
  const [error, setError] = useState('');        // State to handle any login error

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Here you can add the logic to validate the credentials via an API
    // This example will just check if fields are empty
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      // Assuming the API endpoint URL 'http://your-backend-url/login.php'
      const response = await fetch('../backend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (data.loggedIn) {
        console.log('Login successful:', data.user);
        // Redirect the user or handle login state
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Failed to connect to the server');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;

// src/Login.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Login() {
  const { login, logout, isAuthenticated, user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setUsername(''); setPassword('');
      alert('Logged in');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div>Logged in as: <strong>{user}</strong></div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" />
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

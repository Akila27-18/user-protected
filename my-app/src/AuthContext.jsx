// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import api from './api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access_token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    // if token exists, try to fetch protected endpoint to validate
    const validate = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) return;
      try {
        const res = await api.get('/api/protected/');
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (err) {
        // invalid/expired token
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    validate();
  }, []);

  const login = async (username, password) => {
    const res = await api.post('/api/token/', { username, password });
    localStorage.setItem('access_token', res.data.access);
    localStorage.setItem('refresh_token', res.data.refresh);
    setIsAuthenticated(true);
    // fetch user info
    const info = await api.get('/api/protected/');
    setUser(info.data.user);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://user-protected-1.onrender.com',  // 🔥 your Render backend URL
});

// attach access token automatically if present
api.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

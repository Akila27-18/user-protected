import React from 'react';
import Login from './Login';
import ProtectedDashboard from './ProtectedDashboard';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Auth HOC Demo</h1>
      <Login />
      <hr />
      <ProtectedDashboard />
    </div>
  );
}

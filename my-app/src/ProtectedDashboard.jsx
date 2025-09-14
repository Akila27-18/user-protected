// src/ProtectedDashboard.jsx
import React from 'react';
import withAuth from './withAuth';

function Dashboard() {
  return (
    <div>
      <h2>Secret Dashboard</h2>
      <p>This is protected content — only visible when authenticated.</p>
    </div>
  );
}

export default withAuth(Dashboard);  // default export wrapped by HOC

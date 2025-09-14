// src/withAuth.jsx
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function withAuth(WrappedComponent) {
  return function WithAuthWrapper(props) {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }
    return <div style={{ color: 'red', padding: 12 }}>Access Denied</div>;
  };
}

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AdminRoute = ({ children }) => {
  const { role } = useAuth();

  if (role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;

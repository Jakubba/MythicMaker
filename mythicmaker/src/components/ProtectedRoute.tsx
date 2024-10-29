// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './../AuthProvider';

const ProtectedRoute = ({ component: Component, restricted, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser && restricted ? (
    <Navigate to="/character" />
  ) : (
    <Component {...rest} />
  );
};

export default ProtectedRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const RedirectIfAuthenticated = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  console.log('currentUser:', currentUser);
  console.log('current path:', location.pathname);

  if (currentUser && location.pathname !== '/registration') {
    return <Navigate to="/character" replace />;
  }

  return children;
};

export default RedirectIfAuthenticated;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { AuthenticationGuardProps } from './AuthenticationGuard.types';

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (currentUser && location.pathname !== '/registration') {
    return <Navigate to="/character" replace />;
  }

  return children;
};

export default AuthenticationGuard;

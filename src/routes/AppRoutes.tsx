import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import LoginForm from '../pages/LoginForm/LoginPage';
import Registration from '../pages/Registration/RegisterPage';
import CharacterPage from '../pages/Character';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthenticationGuard from '../components/AuthenticationGuard/AuthenticationGuard';
import { FAQ } from '../pages/FAQ';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <AuthenticationGuard>
            <LoginForm />
          </AuthenticationGuard>
        }
      />
      <Route
        path="/"
        element={
          <AuthenticationGuard>
            <Home />
          </AuthenticationGuard>
        }
      />
      <Route
        path="/registration"
        element={
          <AuthenticationGuard>
            <Registration />
          </AuthenticationGuard>
        }
      />
      <Route
        path="/character"
        element={
          <ProtectedRoute>
            <CharacterPage />
          </ProtectedRoute>
        }
      />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

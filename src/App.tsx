import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { Home } from './pages/Home/Home';
import LoginForm from './pages/LoginForm/LoginPage';
import Registration from './pages/Registration/RegisterPage';
import CharacterPage from './pages/Character';
import ProtectedRoute from './components/ProtectedRoute';
import AuthenticationGuard from './components/AuthenticationGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </AuthProvider>
  );
};

export default App;

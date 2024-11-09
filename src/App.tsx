import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import LoginForm from './pages/LoginForm/LoginForm';
import Registration from './pages/Registration/Registration';
import CharacterPage from './pages/Character';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <LoginForm />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/registration"
          element={
            <RedirectIfAuthenticated>
              <Registration />
            </RedirectIfAuthenticated>
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
        <Route path="*" element={<Navigate to="/login" />} />
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

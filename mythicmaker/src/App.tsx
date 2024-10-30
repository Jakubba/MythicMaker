import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import LoginForm from './pages/LoginForm/LoginForm';
import Registration from './pages/Registration/Registration';
import CharacterPage from './pages/Character';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import LoginForm from './pages/LoginForm'; 
import Registration from './pages/Registration'; 
import Character from './pages/Character';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> 
      <Route path="/login" element={<LoginForm />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm'; 
import Registration from './pages/Registration'; 

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default App;

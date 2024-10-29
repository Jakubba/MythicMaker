import React from 'react';
import { useAuth } from './../AuthProvider';

const Character = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    auth.signOut();
  };

  return (
    <div>
      <h1>Witaj w sekcji postaci!</h1>
      <button onClick={handleLogout}>Wyloguj</button>
    </div>
  );
};

export default Character;

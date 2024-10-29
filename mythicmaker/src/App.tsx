// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import LoginForm from './pages/LoginForm/LoginForm';
import Registration from './pages/Registration/Registration';
import CharacterPage from './pages/Character';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<ProtectedRoute component={LoginForm} restricted />}
          />
          <Route
            path="/registration"
            element={<ProtectedRoute component={Registration} restricted />}
          />
          <Route path="/character" element={<CharacterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider } from './AuthProvider';
// import LoginForm from './pages/LoginForm/LoginForm';
// import Registration from './pages/Registration/Registration';
// import CharacterPage from './pages/Character';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/character" element={<CharacterPage />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;
// App.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import LoginForm from './pages/LoginForm/LoginForm';
import Registration from './pages/Registration/Registration';
import CharacterPage from './pages/Character';
import ProtectedRoute from './components/ProtectedRoute'; // Make sure this path is correct
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated'; // Make sure this path is correct

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
    </AuthProvider>
  );
};

export default App;

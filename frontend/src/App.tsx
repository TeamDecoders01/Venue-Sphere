// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from '../AuthContext';
import Homepage from './pages/Home';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import VenuePage from './pages/Venues/Venues';
import ProtectedRoute from '../ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<ProtectedRoute element={<Homepage />} />} />
            <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} />} />
            <Route path="/venues" element={<ProtectedRoute element={<VenuePage />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

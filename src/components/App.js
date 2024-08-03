import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Heading from '../pages/Heading';
import Descriptionpage from '../pages/Descriptionpage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';
import ContactUs from '../pages/ContactUs';

const AuthenticatedRedirect = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : children;
};

function App() {
  return (
    <AuthProvider>
      <Router basename="/b_planet">
        <Routes>
          <Route 
            path="/login" 
            element={
              <AuthenticatedRedirect>
                <LoginPage />
              </AuthenticatedRedirect>
            } 
          />
          <Route path="/" element={
            <ProtectedRoute>
              <Heading />
            </ProtectedRoute>
          } />
          <Route path="/description" element={
            <ProtectedRoute>
              <Descriptionpage />
            </ProtectedRoute>
          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          } />
              <Route path="/contact" element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          } />
          
         

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

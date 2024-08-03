import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('user'); // Default role

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setRole('user'); // Reset role on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

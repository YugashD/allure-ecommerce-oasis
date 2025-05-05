
import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    // For demo, we'll simulate a successful login if email contains '@' and password is at least 6 chars
    if (email.includes('@') && password.length >= 6) {
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name: email.split('@')[0],
        email
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };
  
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    // For demo, we'll simulate a successful signup
    if (email.includes('@') && password.length >= 6) {
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const forgotPassword = async (email: string): Promise<boolean> => {
    // In a real app, this would send a reset email
    // For demo, we'll just return true if email contains '@'
    return email.includes('@');
  };
  
  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      forgotPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

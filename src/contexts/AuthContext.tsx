import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  bio?: string;
  email: string;
  gender: 'male' | 'female';
  avatar?: string;
  phone?: string;
  whatsapp?: string;
  dateOfBirth?: string;
  age?: string;
  address?: string;
  city?: string;
  joinDate?: string;
  // Legacy dosha data that might still exist
  doshaType?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  updateProfile: (data: Partial<User>) => Promise<void>;
  removeDoshaResult: () => Promise<void>;
  login: (email: string) => Promise<void>;
  register: (name: string, email: string, password: string, gender: 'male' | 'female') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('ekaUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock authentication functions for demo purposes
  const login = async (email: string) => {
    setIsLoading(true);
    try {
      // Check for dummy credentials
      if (email === 'rahul@test.com') {
        // Mock user data for Rahul
        const userData: User = {
          id: '123456',
          name: 'Rahul Kumar',
          gender: 'male',
          bio: 'On a journey to holistic wellness through Ayurveda',
          email,
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
          joinDate: '2025',
          phone: '+91-9876543210',
          whatsapp: '+91-9876543210',
          dateOfBirth: '1990-08-15',
          age: '34',
          city: 'Mumbai',
          address: '123 Wellness Street, Mumbai, MH 400001',
          // Legacy dosha data for demonstration
          doshaType: 'Pitta-Vata'
        };
        
        setUser(userData);
        localStorage.setItem('ekaUser', JSON.stringify(userData));
      } else {
        // For other emails, create a generic user
        const userData: User = {
          id: '123456',
          name: 'Rebecca Johnson',
          gender: 'female',
          bio: 'On a journey to holistic wellness through Ayurveda',
          email,
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
          joinDate: '2025',
          phone: '+1-555-0123',
          whatsapp: '+1-555-0123',
          dateOfBirth: '1992-05-15',
          age: '32',
          city: 'San Francisco',
          address: '123 Wellness Street, San Francisco, CA 94102',
          // Legacy dosha data for demonstration
          doshaType: 'Pitta-Vata'
        };
        
        setUser(userData);
        localStorage.setItem('ekaUser', JSON.stringify(userData));
      }
      
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, gender: 'male' | 'female') => {
    setIsLoading(true);
    try {
      // Create user data based on registration info
      const userData: User = {
        id: '123456',
        name,
        gender,
        email,
        avatar: gender === 'male' 
          ? 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
          : 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        joinDate: new Date().getFullYear().toString()
      };
      
      setUser(userData);
      localStorage.setItem('ekaUser', JSON.stringify(userData));
      
      // Store credentials for future login
      localStorage.setItem('ekaCredentials', JSON.stringify({
        email,
        password
      }));
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ekaUser');
  };

  const updateProfile = async (data: Partial<User>) => {
    setIsLoading(true);
    try {
      // Simulate API call with validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate email format if email is being updated
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }
      
      // Validate phone format if phone is being updated
      if (data.phone && !/^\+?[\d\s\-\(\)]+$/.test(data.phone)) {
        throw new Error('Please enter a valid phone number');
      }
      
      if (!user) {
        throw new Error('No user found');
      }
      
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('ekaUser', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Profile update failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const removeDoshaResult = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!user) {
        throw new Error('No user found');
      }
      
      const updatedUser = { ...user };
      delete updatedUser.doshaType;
      
      setUser(updatedUser);
      localStorage.setItem('ekaUser', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Dosha removal failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    removeDoshaResult,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
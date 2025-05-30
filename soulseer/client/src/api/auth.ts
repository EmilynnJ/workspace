import api from './api';
import { User } from './types';

// Description: Login a user
// Endpoint: POST /api/auth/login
// Request: { email: string, password: string }
// Response: { success: boolean, data: { user: User, accessToken: string, refreshToken: string } }
export const login = async (data: { email: string; password: string }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      if (data.email === 'admin@soulseer.com' && data.password === 'password') {
        resolve({
          success: true,
          data: {
            user: {
              _id: '1',
              name: 'Admin User',
              email: 'admin@soulseer.com',
              role: 'admin',
            },
            accessToken: 'mock-access-token',
            refreshToken: 'mock-refresh-token',
          },
        });
      } else if (data.email === 'reader@soulseer.com' && data.password === 'password') {
        resolve({
          success: true,
          data: {
            user: {
              _id: '2',
              name: 'Mystic Reader',
              email: 'reader@soulseer.com',
              role: 'reader',
              avatar: 'https://i.pravatar.cc/150?img=2',
              bio: 'Experienced tarot reader with 10+ years of practice.',
              specialties: ['Tarot', 'Astrology', 'Mediumship'],
              rate: 45,
              rating: 4.8,
              reviewCount: 124,
              isActive: true,
            },
            accessToken: 'mock-access-token',
            refreshToken: 'mock-refresh-token',
          },
        });
      } else if (data.email === 'client@soulseer.com' && data.password === 'password') {
        resolve({
          success: true,
          data: {
            user: {
              _id: '3',
              name: 'Seeker Client',
              email: 'client@soulseer.com',
              role: 'client',
              avatar: 'https://i.pravatar.cc/150?img=3',
              wallet: {
                balance: 150.00,
                currency: 'USD',
              },
            },
            accessToken: 'mock-access-token',
            refreshToken: 'mock-refresh-token',
          },
        });
      } else {
        resolve({
          success: false,
          message: 'Invalid email or password',
        });
      }
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/auth/login', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Register a new user
// Endpoint: POST /api/auth/register
// Request: { name: string, email: string, password: string, role: 'client' }
// Response: { success: boolean, data: { user: User, accessToken: string } }
export const register = async (data: { name: string; email: string; password: string; role: 'client' }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          user: {
            _id: '4',
            name: data.name,
            email: data.email,
            role: 'client',
            wallet: {
              balance: 0.00,
              currency: 'USD',
            },
          },
          accessToken: 'mock-access-token',
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/auth/register', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Logout a user
// Endpoint: POST /api/auth/logout
// Request: {}
// Response: { success: boolean }
export const logout = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      resolve({ success: true });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/auth/logout');
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
import api from './api';
import { User } from './types';

// Description: Get current user profile
// Endpoint: GET /api/users/me
// Request: {}
// Response: { success: boolean, data: { user: User } }
export const getCurrentUser = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        resolve({
          success: false,
          message: 'Not authenticated',
        });
        return;
      }
      
      // Based on a sample token, return the appropriate user
      // In a real app, this would decode the token or make an API call
      if (accessToken === 'mock-access-token') {
        // Check if there's a role in localStorage to simulate different user types
        const role = localStorage.getItem('userRole') || 'client';
        
        if (role === 'admin') {
          resolve({
            success: true,
            data: {
              user: {
                _id: '1',
                name: 'Admin User',
                email: 'admin@soulseer.com',
                role: 'admin',
              },
            },
          });
        } else if (role === 'reader') {
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
                wallet: {
                  balance: 1250.75,
                  currency: 'USD',
                },
              },
            },
          });
        } else {
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
            },
          });
        }
      } else {
        resolve({
          success: false,
          message: 'Invalid token',
        });
      }
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/users/me');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get all readers
// Endpoint: GET /api/users/readers
// Request: {}
// Response: { success: boolean, data: { readers: User[] } }
export const getReaders = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          readers: [
            {
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
            {
              _id: '5',
              name: 'Luna Stargazer',
              email: 'luna@soulseer.com',
              role: 'reader',
              avatar: 'https://i.pravatar.cc/150?img=5',
              bio: 'Astrology expert specializing in natal charts and life path readings.',
              specialties: ['Astrology', 'Numerology', 'Dream Interpretation'],
              rate: 55,
              rating: 4.9,
              reviewCount: 89,
              isActive: true,
            },
            {
              _id: '6',
              name: 'Orion Seer',
              email: 'orion@soulseer.com',
              role: 'reader',
              avatar: 'https://i.pravatar.cc/150?img=6',
              bio: 'Clairvoyant medium connecting clients with spiritual guidance.',
              specialties: ['Mediumship', 'Clairvoyance', 'Past Lives'],
              rate: 65,
              rating: 4.7,
              reviewCount: 152,
              isActive: true,
            },
            {
              _id: '7',
              name: 'Crystal Healer',
              email: 'crystal@soulseer.com',
              role: 'reader',
              avatar: 'https://i.pravatar.cc/150?img=7',
              bio: 'Energy healer specializing in chakra alignment and crystal therapy.',
              specialties: ['Energy Healing', 'Chakra Reading', 'Crystal Work'],
              rate: 40,
              rating: 4.6,
              reviewCount: 78,
              isActive: true,
            },
            {
              _id: '8',
              name: 'Tarot Master',
              email: 'tarot@soulseer.com',
              role: 'reader',
              avatar: 'https://i.pravatar.cc/150?img=8',
              bio: 'Traditional tarot master with 20+ years of experience.',
              specialties: ['Tarot', 'Divination', 'Spiritual Guidance'],
              rate: 50,
              rating: 4.9,
              reviewCount: 215,
              isActive: true,
            },
          ],
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/users/readers');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get reader by ID
// Endpoint: GET /api/users/readers/:id
// Request: {}
// Response: { success: boolean, data: { reader: User } }
export const getReaderById = async (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const readers = [
        {
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
        {
          _id: '5',
          name: 'Luna Stargazer',
          email: 'luna@soulseer.com',
          role: 'reader',
          avatar: 'https://i.pravatar.cc/150?img=5',
          bio: 'Astrology expert specializing in natal charts and life path readings.',
          specialties: ['Astrology', 'Numerology', 'Dream Interpretation'],
          rate: 55,
          rating: 4.9,
          reviewCount: 89,
          isActive: true,
        },
        {
          _id: '6',
          name: 'Orion Seer',
          email: 'orion@soulseer.com',
          role: 'reader',
          avatar: 'https://i.pravatar.cc/150?img=6',
          bio: 'Clairvoyant medium connecting clients with spiritual guidance.',
          specialties: ['Mediumship', 'Clairvoyance', 'Past Lives'],
          rate: 65,
          rating: 4.7,
          reviewCount: 152,
          isActive: true,
        },
      ];
      
      const reader = readers.find(r => r._id === id);
      
      if (reader) {
        resolve({
          success: true,
          data: { reader },
        });
      } else {
        resolve({
          success: false,
          message: 'Reader not found',
        });
      }
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get(`/api/users/readers/${id}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Update user profile
// Endpoint: PUT /api/users/profile
// Request: { name?: string, bio?: string, specialties?: string[], avatar?: string }
// Response: { success: boolean, data: { user: User } }
export const updateProfile = async (data: { name?: string; bio?: string; specialties?: string[]; avatar?: string }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get current user info
      const role = localStorage.getItem('userRole') || 'client';
      let user: User;
      
      if (role === 'reader') {
        user = {
          _id: '2',
          name: data.name || 'Mystic Reader',
          email: 'reader@soulseer.com',
          role: 'reader',
          avatar: data.avatar || 'https://i.pravatar.cc/150?img=2',
          bio: data.bio || 'Experienced tarot reader with 10+ years of practice.',
          specialties: data.specialties || ['Tarot', 'Astrology', 'Mediumship'],
          rate: 45,
          rating: 4.8,
          reviewCount: 124,
          isActive: true,
        };
      } else {
        user = {
          _id: '3',
          name: data.name || 'Seeker Client',
          email: 'client@soulseer.com',
          role: 'client',
          avatar: data.avatar || 'https://i.pravatar.cc/150?img=3',
          wallet: {
            balance: 150.00,
            currency: 'USD',
          },
        };
      }
      
      resolve({
        success: true,
        data: { user },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.put('/api/users/profile', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
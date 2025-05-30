import api from './api';
import { Session } from './types';

// Description: Get available slots for a reader
// Endpoint: GET /api/sessions/availability/:readerId
// Request: {}
// Response: { success: boolean, data: { slots: { date: string, times: string[] }[] } }
export const getReaderAvailability = async (readerId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate some mock availability for the next 7 days
      const slots = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        // Format date as YYYY-MM-DD
        const formattedDate = date.toISOString().split('T')[0];

        // Generate random available time slots for each day
        const times = [];
        const possibleTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
        
        // Add some randomness to availability
        const numSlots = Math.floor(Math.random() * 6) + 3; // 3-8 slots per day
        for (let j = 0; j < numSlots; j++) {
          const randomIndex = Math.floor(Math.random() * possibleTimes.length);
          times.push(possibleTimes[randomIndex]);
          possibleTimes.splice(randomIndex, 1);
        }

        // Sort times chronologically
        times.sort();

        slots.push({
          date: formattedDate,
          times,
        });
      }

      resolve({
        success: true,
        data: { slots },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get(`/api/sessions/availability/${readerId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Book a session with a reader
// Endpoint: POST /api/sessions/book
// Request: { readerId: string, type: 'chat' | 'video' | 'phone', date: string, time: string, duration: number }
// Response: { success: boolean, data: { session: Session } }
export const bookSession = async (data: { 
  readerId: string; 
  type: 'chat' | 'video' | 'phone'; 
  date: string; 
  time: string; 
  duration: number;
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const reader = {
        _id: data.readerId,
        name: data.readerId === '2' ? 'Mystic Reader' : 'Luna Stargazer',
        rate: data.readerId === '2' ? 45 : 55,
      };

      const session: Session = {
        _id: Math.random().toString(36).substring(2, 15),
        type: data.type,
        readerId: data.readerId,
        clientId: '3', // Mock client ID
        status: 'scheduled',
        startTime: `${data.date}T${data.time}:00Z`,
        duration: data.duration,
        price: reader.rate * (data.duration / 60), // Rate is per hour
        notes: '',
      };

      resolve({
        success: true,
        data: { session },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/sessions/book', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get user's sessions
// Endpoint: GET /api/sessions/my-sessions
// Request: {}
// Response: { success: boolean, data: { sessions: Session[] } }
export const getUserSessions = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const role = localStorage.getItem('userRole') || 'client';
      const sessions: Session[] = [];

      // Create mock sessions based on user role
      if (role === 'client') {
        sessions.push(
          {
            _id: '101',
            type: 'chat',
            readerId: '2',
            clientId: '3',
            status: 'scheduled',
            startTime: new Date(Date.now() + 86400000).toISOString(), // tomorrow
            duration: 30,
            price: 22.50,
          },
          {
            _id: '102',
            type: 'video',
            readerId: '5',
            clientId: '3',
            status: 'scheduled',
            startTime: new Date(Date.now() + 172800000).toISOString(), // day after tomorrow
            duration: 60,
            price: 55.00,
          },
          {
            _id: '103',
            type: 'phone',
            readerId: '6',
            clientId: '3',
            status: 'completed',
            startTime: new Date(Date.now() - 86400000).toISOString(), // yesterday
            endTime: new Date(Date.now() - 83400000).toISOString(), // yesterday + 50 min
            duration: 50,
            price: 54.17,
          }
        );
      } else if (role === 'reader') {
        sessions.push(
          {
            _id: '101',
            type: 'chat',
            readerId: '2',
            clientId: '3',
            status: 'scheduled',
            startTime: new Date(Date.now() + 86400000).toISOString(), // tomorrow
            duration: 30,
            price: 22.50,
          },
          {
            _id: '104',
            type: 'video',
            readerId: '2',
            clientId: '7',
            status: 'scheduled',
            startTime: new Date(Date.now() + 86400000 + 3600000).toISOString(), // tomorrow + 1 hour
            duration: 45,
            price: 33.75,
          },
          {
            _id: '105',
            type: 'phone',
            readerId: '2',
            clientId: '8',
            status: 'completed',
            startTime: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            endTime: new Date(Date.now() - 169200000).toISOString(), // 2 days ago + 60 min
            duration: 60,
            price: 45.00,
          }
        );
      }

      resolve({
        success: true,
        data: { sessions },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/sessions/my-sessions');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Start a session
// Endpoint: POST /api/sessions/start/:sessionId
// Request: {}
// Response: { success: boolean, data: { session: Session, rtcToken: string } }
export const startSession = async (sessionId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          session: {
            _id: sessionId,
            type: 'chat',
            readerId: '2',
            clientId: '3',
            status: 'active',
            startTime: new Date().toISOString(),
            duration: 30,
            price: 22.50,
          },
          rtcToken: 'mock-rtc-token-' + Math.random().toString(36).substring(2, 15),
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/sessions/start/${sessionId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: End a session
// Endpoint: POST /api/sessions/end/:sessionId
// Request: {}
// Response: { success: boolean, data: { session: Session } }
export const endSession = async (sessionId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          session: {
            _id: sessionId,
            type: 'chat',
            readerId: '2',
            clientId: '3',
            status: 'completed',
            startTime: new Date(Date.now() - 1800000).toISOString(), // 30 min ago
            endTime: new Date().toISOString(),
            duration: 30,
            price: 22.50,
          },
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/sessions/end/${sessionId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Join a session
// Endpoint: POST /api/sessions/join/:sessionId
// Request: {}
// Response: { success: boolean, data: { session: Session, rtcToken: string } }
export const joinSession = async (sessionId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          session: {
            _id: sessionId,
            type: 'chat',
            readerId: '2',
            clientId: '3',
            status: 'active',
            startTime: new Date(Date.now() - 300000).toISOString(), // 5 min ago
            duration: 30,
            price: 22.50,
          },
          rtcToken: 'mock-rtc-token-' + Math.random().toString(36).substring(2, 15),
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/sessions/join/${sessionId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
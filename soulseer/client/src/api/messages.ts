import api from './api';
import { Message } from './types';

// Description: Get messages between two users
// Endpoint: GET /api/messages/:userId
// Request: {}
// Response: { success: boolean, data: { messages: Message[] } }
export const getMessages = async (userId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const messages: Message[] = [
        {
          _id: '201',
          senderId: '3', // client
          receiverId: userId,
          content: 'Hello, I have a question about my future career path.',
          timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
          isPaid: false,
        },
        {
          _id: '202',
          senderId: userId,
          receiverId: '3', // client
          content: 'I would be happy to help you with that. Would you like a brief free insight or a full paid reading?',
          timestamp: new Date(Date.now() - 3540000).toISOString(), // 59 min ago
          isPaid: false,
        },
        {
          _id: '203',
          senderId: '3', // client
          receiverId: userId,
          content: 'I would like a brief free insight first please.',
          timestamp: new Date(Date.now() - 3480000).toISOString(), // 58 min ago
          isPaid: false,
        },
        {
          _id: '204',
          senderId: userId,
          receiverId: '3', // client
          content: 'Based on your question, I can sense that you're at a crossroads. There are multiple paths opening up for you soon.',
          timestamp: new Date(Date.now() - 3420000).toISOString(), // 57 min ago
          isPaid: false,
        },
        {
          _id: '205',
          senderId: '3', // client
          receiverId: userId,
          content: 'That's interesting! Can you tell me more in a full reading?',
          timestamp: new Date(Date.now() - 3360000).toISOString(), // 56 min ago
          isPaid: false,
        },
        {
          _id: '206',
          senderId: userId,
          receiverId: '3', // client
          content: 'For a detailed career reading, I can offer a comprehensive analysis for $25. This will include potential career paths, timing, and guidance.',
          timestamp: new Date(Date.now() - 3300000).toISOString(), // 55 min ago
          isPaid: false,
          price: 25,
        },
      ];

      resolve({
        success: true,
        data: { messages },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get(`/api/messages/${userId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Send a message to a user
// Endpoint: POST /api/messages/send
// Request: { receiverId: string, content: string, isPaid: boolean, price?: number }
// Response: { success: boolean, data: { message: Message } }
export const sendMessage = async (data: { 
  receiverId: string; 
  content: string; 
  isPaid: boolean; 
  price?: number;
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const role = localStorage.getItem('userRole') || 'client';
      const senderId = role === 'client' ? '3' : '2';
      
      resolve({
        success: true,
        data: {
          message: {
            _id: Math.random().toString(36).substring(2, 15),
            senderId,
            receiverId: data.receiverId,
            content: data.content,
            timestamp: new Date().toISOString(),
            isPaid: data.isPaid,
            price: data.price,
          },
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/messages/send', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get all message threads
// Endpoint: GET /api/messages/threads
// Request: {}
// Response: { success: boolean, data: { threads: { userId: string, name: string, avatar: string, lastMessage: string, timestamp: string, unread: number }[] } }
export const getMessageThreads = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const role = localStorage.getItem('userRole') || 'client';
      const threads = [];

      if (role === 'client') {
        // For clients, threads with readers
        threads.push(
          {
            userId: '2',
            name: 'Mystic Reader',
            avatar: 'https://i.pravatar.cc/150?img=2',
            lastMessage: 'For a detailed career reading, I can offer a comprehensive analysis for $25.',
            timestamp: new Date(Date.now() - 3300000).toISOString(), // 55 min ago
            unread: 0,
          },
          {
            userId: '5',
            name: 'Luna Stargazer',
            avatar: 'https://i.pravatar.cc/150?img=5',
            lastMessage: 'Your astrology chart shows a significant transit coming up next month.',
            timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            unread: 2,
          }
        );
      } else if (role === 'reader') {
        // For readers, threads with clients
        threads.push(
          {
            userId: '3',
            name: 'Seeker Client',
            avatar: 'https://i.pravatar.cc/150?img=3',
            lastMessage: 'That's interesting! Can you tell me more in a full reading?',
            timestamp: new Date(Date.now() - 3360000).toISOString(), // 56 min ago
            unread: 1,
          },
          {
            userId: '7',
            name: 'Lisa Johnson',
            avatar: 'https://i.pravatar.cc/150?img=7',
            lastMessage: 'Thank you for the reading, it was very insightful!',
            timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            unread: 0,
          }
        );
      }

      resolve({
        success: true,
        data: { threads },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/messages/threads');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
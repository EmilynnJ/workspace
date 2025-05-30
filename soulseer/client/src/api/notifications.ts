import api from './api';
import { Notification } from './types';

// Description: Get user notifications
// Endpoint: GET /api/notifications
// Request: {}
// Response: { success: boolean, data: { notifications: Notification[] } }
export const getNotifications = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const role = localStorage.getItem('userRole') || 'client';
      const notifications: Notification[] = [];

      if (role === 'client') {
        notifications.push(
          {
            _id: '1001',
            userId: '3',
            type: 'booking',
            title: 'Booking Confirmed',
            content: 'Your session with Mystic Reader has been confirmed for tomorrow at 10:00 AM.',
            timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            read: true,
            link: '/sessions/101',
          },
          {
            _id: '1002',
            userId: '3',
            type: 'message',
            title: 'New Message',
            content: 'Luna Stargazer has sent you a new message.',
            timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
            read: false,
            link: '/messages/5',
          },
          {
            _id: '1003',
            userId: '3',
            type: 'system',
            title: 'Welcome to SoulSeer',
            content: 'Thank you for joining our community! Explore our readers and book your first session.',
            timestamp: new Date(Date.now() - 604800000).toISOString(), // 1 week ago
            read: true,
          },
          {
            _id: '1004',
            userId: '3',
            type: 'system',
            title: 'New Livestream',
            content: 'Mystic Reader is now live with "Tarot Tuesday: Card Reading for All Signs"',
            timestamp: new Date(Date.now() - 1800000).toISOString(), // 30 min ago
            read: false,
            link: '/live/401',
          },
        );
      } else if (role === 'reader') {
        notifications.push(
          {
            _id: '1005',
            userId: '2',
            type: 'booking',
            title: 'New Booking',
            content: 'Seeker Client has booked a session with you for tomorrow at 10:00 AM.',
            timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            read: true,
            link: '/sessions/101',
          },
          {
            _id: '1006',
            userId: '2',
            type: 'message',
            title: 'New Message',
            content: 'Seeker Client has sent you a new message.',
            timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
            read: false,
            link: '/messages/3',
          },
          {
            _id: '1007',
            userId: '2',
            type: 'system',
            title: 'Earnings Update',
            content: 'You have new earnings from your recent sessions. Check your wallet for details.',
            timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
            read: true,
            link: '/wallet',
          },
        );
      }

      resolve({
        success: true,
        data: { notifications },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/notifications');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Mark notification as read
// Endpoint: POST /api/notifications/:id/read
// Request: {}
// Response: { success: boolean }
export const markNotificationAsRead = async (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/notifications/${id}/read`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Mark all notifications as read
// Endpoint: POST /api/notifications/read-all
// Request: {}
// Response: { success: boolean }
export const markAllNotificationsAsRead = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/notifications/read-all');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
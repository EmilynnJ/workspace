import api from './api';
import { Livestream, Gift, GiftTransaction } from './types';

// Description: Get all active livestreams
// Endpoint: GET /api/livestreams/active
// Request: {}
// Response: { success: boolean, data: { livestreams: Livestream[] } }
export const getActiveLivestreams = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const livestreams: Livestream[] = [
        {
          _id: '401',
          readerId: '2',
          title: 'Tarot Tuesday: Card Reading for All Signs',
          description: 'Join me for a collective tarot reading session for all zodiac signs!',
          startTime: new Date(Date.now() - 1800000).toISOString(), // 30 min ago
          status: 'active',
          viewerCount: 24,
          totalGifts: 150,
        },
        {
          _id: '402',
          readerId: '5',
          title: 'Full Moon Energy Reading',
          description: 'Exploring the powerful energies of tonight\'s full moon and how to harness them.',
          startTime: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
          status: 'active',
          viewerCount: 45,
          totalGifts: 350,
        },
        {
          _id: '403',
          readerId: '6',
          title: 'Connecting with Spirit Guides',
          description: 'Learn how to communicate with your personal spirit guides and receive messages.',
          startTime: new Date(Date.now() - 900000).toISOString(), // 15 min ago
          status: 'active',
          viewerCount: 32,
          totalGifts: 210,
        },
      ];

      resolve({
        success: true,
        data: { livestreams },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/livestreams/active');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Start a livestream
// Endpoint: POST /api/livestreams/start
// Request: { title: string, description: string }
// Response: { success: boolean, data: { livestream: Livestream, rtcToken: string } }
export const startLivestream = async (data: {
  title: string;
  description: string;
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          livestream: {
            _id: Math.random().toString(36).substring(2, 15),
            readerId: '2', // Assuming reader role
            title: data.title,
            description: data.description,
            startTime: new Date().toISOString(),
            status: 'active',
            viewerCount: 0,
            totalGifts: 0,
          },
          rtcToken: 'mock-rtc-token-' + Math.random().toString(36).substring(2, 15),
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/livestreams/start', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: End a livestream
// Endpoint: POST /api/livestreams/end/:livestreamId
// Request: {}
// Response: { success: boolean, data: { livestream: Livestream } }
export const endLivestream = async (livestreamId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          livestream: {
            _id: livestreamId,
            readerId: '2', // Assuming reader role
            title: 'Tarot Tuesday: Card Reading for All Signs',
            description: 'Join me for a collective tarot reading session for all zodiac signs!',
            startTime: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
            endTime: new Date().toISOString(),
            status: 'completed',
            viewerCount: 35,
            totalGifts: 250,
          },
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/livestreams/end/${livestreamId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Join a livestream
// Endpoint: POST /api/livestreams/join/:livestreamId
// Request: {}
// Response: { success: boolean, data: { livestream: Livestream, rtcToken: string } }
export const joinLivestream = async (livestreamId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          livestream: {
            _id: livestreamId,
            readerId: '2',
            title: 'Tarot Tuesday: Card Reading for All Signs',
            description: 'Join me for a collective tarot reading session for all zodiac signs!',
            startTime: new Date(Date.now() - 1800000).toISOString(), // 30 min ago
            status: 'active',
            viewerCount: 25, // Increased by 1
            totalGifts: 150,
          },
          rtcToken: 'mock-rtc-token-' + Math.random().toString(36).substring(2, 15),
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/livestreams/join/${livestreamId}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get available gifts
// Endpoint: GET /api/livestreams/gifts
// Request: {}
// Response: { success: boolean, data: { gifts: Gift[] } }
export const getGifts = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const gifts: Gift[] = [
        {
          _id: '501',
          name: 'Crystal',
          icon: '💎',
          price: 5,
          animation: 'sparkle',
        },
        {
          _id: '502',
          name: 'Moon',
          icon: '🌙',
          price: 10,
          animation: 'glow',
        },
        {
          _id: '503',
          name: 'Star',
          icon: '⭐',
          price: 20,
          animation: 'float',
        },
        {
          _id: '504',
          name: 'Galaxy',
          icon: '🌌',
          price: 50,
          animation: 'expand',
        },
        {
          _id: '505',
          name: 'Cosmic Energy',
          icon: '✨',
          price: 100,
          animation: 'pulse',
        },
      ];

      resolve({
        success: true,
        data: { gifts },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/livestreams/gifts');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Send a gift in a livestream
// Endpoint: POST /api/livestreams/send-gift
// Request: { livestreamId: string, giftId: string, receiverId: string }
// Response: { success: boolean, data: { transaction: GiftTransaction } }
export const sendGift = async (data: {
  livestreamId: string;
  giftId: string;
  receiverId: string;
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get gift price from gift ID
      let giftPrice = 5; // Default
      if (data.giftId === '502') giftPrice = 10;
      if (data.giftId === '503') giftPrice = 20;
      if (data.giftId === '504') giftPrice = 50;
      if (data.giftId === '505') giftPrice = 100;

      resolve({
        success: true,
        data: {
          transaction: {
            _id: Math.random().toString(36).substring(2, 15),
            giftId: data.giftId,
            senderId: '3', // Assuming client role
            receiverId: data.receiverId,
            livestreamId: data.livestreamId,
            amount: giftPrice,
            timestamp: new Date().toISOString(),
          },
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/livestreams/send-gift', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get gift history for a livestream
// Endpoint: GET /api/livestreams/:livestreamId/gifts
// Request: {}
// Response: { success: boolean, data: { gifts: GiftTransaction[] } }
export const getLivestreamGifts = async (livestreamId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const gifts: GiftTransaction[] = [
        {
          _id: '601',
          giftId: '501',
          senderId: '3',
          receiverId: '2',
          livestreamId,
          amount: 5,
          timestamp: new Date(Date.now() - 1200000).toISOString(), // 20 min ago
        },
        {
          _id: '602',
          giftId: '503',
          senderId: '7',
          receiverId: '2',
          livestreamId,
          amount: 20,
          timestamp: new Date(Date.now() - 900000).toISOString(), // 15 min ago
        },
        {
          _id: '603',
          giftId: '502',
          senderId: '8',
          receiverId: '2',
          livestreamId,
          amount: 10,
          timestamp: new Date(Date.now() - 600000).toISOString(), // 10 min ago
        },
        {
          _id: '604',
          giftId: '504',
          senderId: '3',
          receiverId: '2',
          livestreamId,
          amount: 50,
          timestamp: new Date(Date.now() - 300000).toISOString(), // 5 min ago
        },
      ];

      resolve({
        success: true,
        data: { gifts },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get(`/api/livestreams/${livestreamId}/gifts`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
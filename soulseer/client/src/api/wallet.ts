import api from './api';
import { Transaction } from './types';

// Description: Get user wallet
// Endpoint: GET /api/wallet
// Request: {}
// Response: { success: boolean, data: { balance: number, currency: string } }
export const getWallet = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const role = localStorage.getItem('userRole') || 'client';
      
      if (role === 'client') {
        resolve({
          success: true,
          data: { balance: 150.00, currency: 'USD' },
        });
      } else if (role === 'reader') {
        resolve({
          success: true,
          data: { balance: 1250.75, currency: 'USD' },
        });
      } else {
        resolve({
          success: true,
          data: { balance: 0, currency: 'USD' },
        });
      }
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/wallet');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Add funds to wallet
// Endpoint: POST /api/wallet/add-funds
// Request: { amount: number }
// Response: { success: boolean, data: { balance: number, transaction: Transaction } }
export const addFunds = async (data: { amount: number }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const transaction: Transaction = {
        _id: Math.random().toString(36).substring(2, 15),
        userId: '3', // client
        type: 'deposit',
        amount: data.amount,
        currency: 'USD',
        description: 'Added funds via Stripe',
        timestamp: new Date().toISOString(),
        status: 'completed',
      };

      resolve({
        success: true,
        data: { 
          balance: 150.00 + data.amount,
          transaction,
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/wallet/add-funds', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Request withdrawal
// Endpoint: POST /api/wallet/withdraw
// Request: { amount: number }
// Response: { success: boolean, data: { balance: number, transaction: Transaction } }
export const requestWithdrawal = async (data: { amount: number }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const transaction: Transaction = {
        _id: Math.random().toString(36).substring(2, 15),
        userId: '2', // reader
        type: 'withdrawal',
        amount: data.amount,
        currency: 'USD',
        description: 'Withdrawal request',
        timestamp: new Date().toISOString(),
        status: 'pending',
      };

      resolve({
        success: true,
        data: { 
          balance: 1250.75 - data.amount,
          transaction,
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/wallet/withdraw', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get transaction history
// Endpoint: GET /api/wallet/transactions
// Request: {}
// Response: { success: boolean, data: { transactions: Transaction[] } }
export const getTransactions = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const role = localStorage.getItem('userRole') || 'client';
      const transactions: Transaction[] = [];

      if (role === 'client') {
        transactions.push(
          {
            _id: '301',
            userId: '3',
            type: 'deposit',
            amount: 100.00,
            currency: 'USD',
            description: 'Added funds via Stripe',
            timestamp: new Date(Date.now() - 604800000).toISOString(), // 1 week ago
            status: 'completed',
          },
          {
            _id: '302',
            userId: '3',
            type: 'payment',
            amount: 22.50,
            currency: 'USD',
            description: 'Payment for chat session with Mystic Reader',
            timestamp: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
            status: 'completed',
            relatedEntityId: '101',
            relatedEntityType: 'session',
          },
          {
            _id: '303',
            userId: '3',
            type: 'payment',
            amount: 25.00,
            currency: 'USD',
            description: 'Payment for paid message from Luna Stargazer',
            timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            status: 'completed',
            relatedEntityId: '205',
            relatedEntityType: 'message',
          }
        );
      } else if (role === 'reader') {
        transactions.push(
          {
            _id: '304',
            userId: '2',
            type: 'payment',
            amount: 15.75,
            currency: 'USD',
            description: 'Earnings from chat session with Seeker Client',
            timestamp: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
            status: 'completed',
            relatedEntityId: '101',
            relatedEntityType: 'session',
          },
          {
            _id: '305',
            userId: '2',
            type: 'payment',
            amount: 17.50,
            currency: 'USD',
            description: 'Earnings from paid message to Seeker Client',
            timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            status: 'completed',
            relatedEntityId: '205',
            relatedEntityType: 'message',
          },
          {
            _id: '306',
            userId: '2',
            type: 'withdrawal',
            amount: 100.00,
            currency: 'USD',
            description: 'Withdrawal request',
            timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            status: 'completed',
          }
        );
      }

      resolve({
        success: true,
        data: { transactions },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/wallet/transactions');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
import api from './api';
import { ForumPost } from './types';

// Description: Get forum posts
// Endpoint: GET /api/forum/posts
// Request: {}
// Response: { success: boolean, data: { posts: ForumPost[] } }
export const getForumPosts = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts: ForumPost[] = [
        {
          _id: '901',
          userId: '2',
          title: 'Understanding Tarot Card Meanings',
          content: 'Many beginners struggle with memorizing all 78 card meanings. In this post, I'll share some tips on how to intuitively understand the cards without rote memorization.',
          timestamp: new Date(Date.now() - 604800000).toISOString(), // 1 week ago
          likes: 24,
          comments: [
            {
              _id: '901-1',
              userId: '3',
              content: 'This is so helpful! I've been struggling with the court cards especially.',
              timestamp: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
              likes: 5,
            },
            {
              _id: '901-2',
              userId: '5',
              content: 'Great post! I would add that connecting each card with a personal memory or experience can really help cement the meaning.',
              timestamp: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
              likes: 7,
            },
          ],
        },
        {
          _id: '902',
          userId: '5',
          title: 'Full Moon Rituals for Manifestation',
          content: 'The full moon is a powerful time for manifestation work. Here are some simple rituals you can perform to harness this lunar energy.',
          timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
          likes: 18,
          comments: [
            {
              _id: '902-1',
              userId: '3',
              content: 'I tried the water charging ritual last full moon and it was amazing!',
              timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
              likes: 3,
            },
          ],
        },
        {
          _id: '903',
          userId: '3',
          title: 'My First Psychic Reading Experience',
          content: 'I recently had my first reading with Luna and I wanted to share my experience with the community. It was truly eye-opening!',
          timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          likes: 12,
          comments: [
            {
              _id: '903-1',
              userId: '5',
              content: 'Thank you for sharing your experience! I'm so glad it was meaningful for you.',
              timestamp: new Date(Date.now() - 43200000).toISOString(), // 12 hours ago
              likes: 2,
            },
            {
              _id: '903-2',
              userId: '6',
              content: 'Luna is amazing! I've had several readings with her as well.',
              timestamp: new Date(Date.now() - 21600000).toISOString(), // 6 hours ago
              likes: 1,
            },
          ],
        },
      ];

      resolve({
        success: true,
        data: { posts },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/forum/posts');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Create forum post
// Endpoint: POST /api/forum/posts
// Request: { title: string, content: string }
// Response: { success: boolean, data: { post: ForumPost } }
export const createForumPost = async (data: {
  title: string;
  content: string;
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const post: ForumPost = {
        _id: Math.random().toString(36).substring(2, 15),
        userId: '3', // Assuming client role
        title: data.title,
        content: data.content,
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: [],
      };

      resolve({
        success: true,
        data: { post },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/forum/posts', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Add comment to post
// Endpoint: POST /api/forum/posts/:postId/comments
// Request: { content: string }
// Response: { success: boolean, data: { comment: { _id: string, userId: string, content: string, timestamp: string, likes: number } } }
export const addComment = async (postId: string, data: {
  content: string;
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const comment = {
        _id: Math.random().toString(36).substring(2, 15),
        userId: '3', // Assuming client role
        content: data.content,
        timestamp: new Date().toISOString(),
        likes: 0,
      };

      resolve({
        success: true,
        data: { comment },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/forum/posts/${postId}/comments`, data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Like a post
// Endpoint: POST /api/forum/posts/:postId/like
// Request: {}
// Response: { success: boolean, data: { likes: number } }
export const likePost = async (postId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { likes: 13 }, // Incremented from 12
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post(`/api/forum/posts/${postId}/like`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
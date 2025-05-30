import api from './api';
import { Product, Order } from './types';

// Description: Get all products
// Endpoint: GET /api/shop/products
// Request: {}
// Response: { success: boolean, data: { products: Product[] } }
export const getProducts = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const products: Product[] = [
        {
          _id: '701',
          name: 'Crystal Healing Set',
          description: 'A set of 7 healing crystals for chakra alignment.',
          price: 49.99,
          currency: 'USD',
          type: 'physical',
          images: ['https://source.unsplash.com/random/300x300/?crystal'],
          inventory: 25,
          stripeProductId: 'prod_123',
        },
        {
          _id: '702',
          name: 'Tarot Card Deck',
          description: 'Traditional Rider-Waite tarot deck with guidebook.',
          price: 35.00,
          currency: 'USD',
          type: 'physical',
          images: ['https://source.unsplash.com/random/300x300/?tarot'],
          inventory: 50,
          stripeProductId: 'prod_124',
        },
        {
          _id: '703',
          name: 'Astrology Birth Chart Analysis',
          description: 'Detailed PDF analysis of your natal chart with personal insights.',
          price: 25.00,
          currency: 'USD',
          type: 'digital',
          images: ['https://source.unsplash.com/random/300x300/?astrology'],
          stripeProductId: 'prod_125',
        },
        {
          _id: '704',
          name: 'Meditation Guide',
          description: 'Digital guide with 10 guided meditation tracks.',
          price: 15.00,
          currency: 'USD',
          type: 'digital',
          images: ['https://source.unsplash.com/random/300x300/?meditation'],
          stripeProductId: 'prod_126',
        },
        {
          _id: '705',
          name: 'Crystal Pendant Necklace',
          description: 'Handcrafted amethyst pendant on sterling silver chain.',
          price: 79.99,
          currency: 'USD',
          type: 'physical',
          images: ['https://source.unsplash.com/random/300x300/?pendant'],
          inventory: 10,
          stripeProductId: 'prod_127',
        },
      ];

      resolve({
        success: true,
        data: { products },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/shop/products');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get product by ID
// Endpoint: GET /api/shop/products/:id
// Request: {}
// Response: { success: boolean, data: { product: Product } }
export const getProductById = async (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        {
          _id: '701',
          name: 'Crystal Healing Set',
          description: 'A set of 7 healing crystals for chakra alignment.',
          price: 49.99,
          currency: 'USD',
          type: 'physical',
          images: ['https://source.unsplash.com/random/300x300/?crystal'],
          inventory: 25,
          stripeProductId: 'prod_123',
        },
        {
          _id: '702',
          name: 'Tarot Card Deck',
          description: 'Traditional Rider-Waite tarot deck with guidebook.',
          price: 35.00,
          currency: 'USD',
          type: 'physical',
          images: ['https://source.unsplash.com/random/300x300/?tarot'],
          inventory: 50,
          stripeProductId: 'prod_124',
        },
        {
          _id: '703',
          name: 'Astrology Birth Chart Analysis',
          description: 'Detailed PDF analysis of your natal chart with personal insights.',
          price: 25.00,
          currency: 'USD',
          type: 'digital',
          images: ['https://source.unsplash.com/random/300x300/?astrology'],
          stripeProductId: 'prod_125',
        },
      ];

      const product = products.find(p => p._id === id);

      if (product) {
        resolve({
          success: true,
          data: { product },
        });
      } else {
        resolve({
          success: false,
          message: 'Product not found',
        });
      }
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get(`/api/shop/products/${id}`);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Create order
// Endpoint: POST /api/shop/orders
// Request: { products: { productId: string, quantity: number }[], shippingAddress?: { name: string, street: string, city: string, state: string, zip: string, country: string } }
// Response: { success: boolean, data: { order: Order, checkoutUrl: string } }
export const createOrder = async (data: {
  products: { productId: string; quantity: number }[];
  shippingAddress?: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      // Calculate total amount based on product IDs
      let totalAmount = 0;
      const products = [];

      for (const item of data.products) {
        let price = 0;
        if (item.productId === '701') price = 49.99;
        if (item.productId === '702') price = 35.00;
        if (item.productId === '703') price = 25.00;
        if (item.productId === '704') price = 15.00;
        if (item.productId === '705') price = 79.99;

        totalAmount += price * item.quantity;
        products.push({
          productId: item.productId,
          quantity: item.quantity,
          price: price,
        });
      }

      const order: Order = {
        _id: Math.random().toString(36).substring(2, 15),
        userId: '3', // Assuming client role
        products,
        totalAmount,
        status: 'pending',
        shippingAddress: data.shippingAddress,
        orderDate: new Date().toISOString(),
      };

      resolve({
        success: true,
        data: {
          order,
          checkoutUrl: 'https://checkout.stripe.com/mock-checkout',
        },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.post('/api/shop/orders', data);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};

// Description: Get user orders
// Endpoint: GET /api/shop/orders
// Request: {}
// Response: { success: boolean, data: { orders: Order[] } }
export const getUserOrders = async () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders: Order[] = [
        {
          _id: '801',
          userId: '3',
          products: [
            {
              productId: '701',
              quantity: 1,
              price: 49.99,
            },
            {
              productId: '702',
              quantity: 1,
              price: 35.00,
            },
          ],
          totalAmount: 84.99,
          status: 'delivered',
          shippingAddress: {
            name: 'Seeker Client',
            street: '123 Mystic Lane',
            city: 'Spiritual City',
            state: 'CA',
            zip: '90210',
            country: 'USA',
          },
          trackingNumber: 'USPS1234567890',
          orderDate: new Date(Date.now() - 2592000000).toISOString(), // 30 days ago
          deliveryDate: new Date(Date.now() - 2160000000).toISOString(), // 25 days ago
        },
        {
          _id: '802',
          userId: '3',
          products: [
            {
              productId: '703',
              quantity: 1,
              price: 25.00,
            },
          ],
          totalAmount: 25.00,
          status: 'delivered',
          orderDate: new Date(Date.now() - 1296000000).toISOString(), // 15 days ago
          deliveryDate: new Date(Date.now() - 1296000000).toISOString(), // 15 days ago (immediate for digital)
        },
        {
          _id: '803',
          userId: '3',
          products: [
            {
              productId: '705',
              quantity: 1,
              price: 79.99,
            },
          ],
          totalAmount: 79.99,
          status: 'shipped',
          shippingAddress: {
            name: 'Seeker Client',
            street: '123 Mystic Lane',
            city: 'Spiritual City',
            state: 'CA',
            zip: '90210',
            country: 'USA',
          },
          trackingNumber: 'FEDEX9876543210',
          orderDate: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
        },
      ];

      resolve({
        success: true,
        data: { orders },
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   const response = await api.get('/api/shop/orders');
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error?.response?.data?.message || error.message);
  // }
};
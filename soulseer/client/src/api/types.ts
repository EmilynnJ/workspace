export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'reader' | 'client';
  avatar?: string;
  bio?: string;
  specialties?: string[];
  rate?: number;
  rating?: number;
  reviewCount?: number;
  isActive?: boolean;
  wallet?: {
    balance: number;
    currency: string;
  };
}

export interface Session {
  _id: string;
  type: 'chat' | 'video' | 'phone' | 'livestream';
  readerId: string;
  clientId: string;
  status: 'scheduled' | 'active' | 'completed' | 'cancelled' | 'refunded';
  startTime: string;
  endTime?: string;
  duration: number;
  price: number;
  notes?: string;
}

export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isPaid: boolean;
  price?: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  type: 'physical' | 'digital';
  images: string[];
  inventory?: number;
  stripeProductId: string;
}

export interface Transaction {
  _id: string;
  userId: string;
  type: 'deposit' | 'withdrawal' | 'payment' | 'refund' | 'gift';
  amount: number;
  currency: string;
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
  relatedEntityId?: string;
  relatedEntityType?: 'session' | 'message' | 'product' | 'livestream';
}

export interface Livestream {
  _id: string;
  readerId: string;
  title: string;
  description?: string;
  startTime: string;
  endTime?: string;
  status: 'scheduled' | 'active' | 'completed';
  viewerCount: number;
  totalGifts: number;
}

export interface Gift {
  _id: string;
  name: string;
  icon: string;
  price: number;
  animation?: string;
}

export interface GiftTransaction {
  _id: string;
  giftId: string;
  senderId: string;
  receiverId: string;
  livestreamId: string;
  amount: number;
  timestamp: string;
}

export interface Order {
  _id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress?: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  trackingNumber?: string;
  orderDate: string;
  deliveryDate?: string;
}

export interface ForumPost {
  _id: string;
  userId: string;
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: {
    _id: string;
    userId: string;
    content: string;
    timestamp: string;
    likes: number;
  }[];
}

export interface Notification {
  _id: string;
  userId: string;
  type: 'booking' | 'message' | 'gift' | 'system';
  title: string;
  content: string;
  timestamp: string;
  read: boolean;
  link?: string;
}
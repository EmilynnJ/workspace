import localFont from 'next/font/local';
import { Inter as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const alexBrush = localFont({
  src: '../assets/fonts/AlexBrush-Regular.ttf',
  variable: '--font-alex-brush',
});

export const playfairDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlayfairDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-playfair',
});
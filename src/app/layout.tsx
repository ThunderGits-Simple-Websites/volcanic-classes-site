'use client';

import '@/assets/styles/app.css';
import Navbar from './Navbar';
import { metadata } from './metadata';
import Foolter from './Foolter';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="title" content={metadata.title} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body>
        <Navbar />
        {children}
        <Foolter />
      </body>
    </html>
  );
}

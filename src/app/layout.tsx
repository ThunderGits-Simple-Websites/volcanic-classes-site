'use client'; // Mark this as a client component

import '@/assets/styles/app.css';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import { metadata } from './metadata';  // Import metadata from the separate file
import Foolter from './Foolter';


export default function RootLayout({ children }) {
  const pathname = usePathname();
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
        <Foolter/>
      </body>
    </html>
  );
}

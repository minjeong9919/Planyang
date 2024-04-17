import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Providers from './_store/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <div id="modal-root" />
      </body>
    </html>
  );
}

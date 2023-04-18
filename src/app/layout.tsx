import { ReactNode } from 'react';
import './globals.css';
import Head from './head';
import { Menu } from '@/components/Menu';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head />

      <body className="bg-base-300 min-h-screen">
        <main className="container border-base-100 border-l border-r mx-auto bg-base-100 px-16 min-h-screen py-6">
          <Menu />
          {children}
        </main>
      </body>
    </html>
  );
}

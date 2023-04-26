import { ReactNode } from 'react';
import './globals.css';
import Head from './head';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-base-300">
      <Head />
      <body className="min-h-screen container max-w-7xl mx-auto">
        <main className="border-base-100 border-l border-r bg-base-100 px-16 py-6 min-h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

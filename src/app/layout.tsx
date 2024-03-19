import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SuperTokensProvider } from '@/providers';

import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "charlycator: Next js 14 playground",
  description: "github.com/charlycator",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <SuperTokensProvider>
        <body className={inter.className}>{children}</body>
      </SuperTokensProvider>
    </html>
  );
}

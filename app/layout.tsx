import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PersonaPalette AI - Diverse Avatar & Asset Generator',
  description: 'Value Proposition: Provides designers and content creators with an endless supply of customizable, high-quality, and diverse avatars and visual assets, eliminating tedious searching and ensuring inclusive representation in digital projects and marketing materials.

Target Customer: UI/UX designers, marketing teams, content creators, indie game developers, and agencies needing diverse visual elements for their digital products, websites, and campaigns.

---
Category: Developer Tools
Target Market: UI/UX designers, marketing teams, content creators, indie game developers, and agencies needing diverse visual elements for their digital products, websites, and campaigns.
Source Hypothesis ID: 30fe896b-fcf1-40f8-8d9b-33203fd8f27c
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PersonaPalette AI - Diverse Avatar & Asset Generator</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}

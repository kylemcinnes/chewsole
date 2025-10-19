import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ChewSole™ - Save the planet. Chew flip-flops.',
  description: "The world's first gum made from 100% recycled flip-flops. From beach to chew.",
  keywords: ['sustainable', 'gum', 'recycled', 'flip-flops', 'eco-friendly'],
  openGraph: {
    title: 'ChewSole™ - The Gum with Real Sole',
    description: "100% recycled flip-flops. Save the planet, one chew at a time.",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Nav />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

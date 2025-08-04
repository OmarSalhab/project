import './globals.css';
import type { Metadata } from 'next';
import { Cairo, Amiri } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });
const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-amiri' });

export const metadata: Metadata = {
  title: 'فندق العندليب - إقامة فاخرة',
  description: 'استمتع بالفخامة والراحة في فندق العندليب. غرف مميزة ووسائل راحة عالمية وخدمة استثنائية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${amiri.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
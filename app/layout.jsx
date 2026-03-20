import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Liam Aiello | Software Developer',
  description:
    'Portfolio of Liam Aiello — Software Developer and Environmental Advocate',
  openGraph: {
    title: 'Liam Aiello | Software Developer',
    description:
      'Portfolio of Liam Aiello — Software Developer and Environmental Advocate',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

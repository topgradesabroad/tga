import { Metadata } from 'next';
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css"; // Keep global styles
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'

// Load Google Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Study Abroad Blog',
    default: 'Study Abroad Blog',
  },
  description: 'Your guide to studying abroad',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSans.variable}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
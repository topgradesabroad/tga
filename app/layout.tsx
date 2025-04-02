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



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSans.variable}`}>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
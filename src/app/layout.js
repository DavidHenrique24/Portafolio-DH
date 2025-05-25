import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'font-awesome/css/font-awesome.min.css';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafolio David Henrique ",
  description: "Portafolio de David Henrique hecho con Next.js y Tailwind CSS", 
};

export default function RootLayout({ children }) {
  return (
 <html lang="en" style={{ scrollBehavior: "smooth" }}>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

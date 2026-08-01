import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aegis - AI Frontend Capstone Project",
  description: "A modern Next.js 15 App Router scaffold built for the Frontend AI Engineering capstone project.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-peach text-brand-blue-dark transition-colors duration-300">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

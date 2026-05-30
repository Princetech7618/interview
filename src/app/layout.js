import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keyword AI Solution | AI-Powered Digital Marketing Agency",
  description:
    "Keyword AI Solution helps businesses grow with AI-powered SEO, content marketing, lead generation, social media marketing, and performance-driven digital strategies.",
  keywords: [
    "Keyword AI Solution",
    "AI Marketing",
    "Digital Marketing Agency",
    "SEO Services",
    "AI SEO",
    "Lead Generation",
    "Content Marketing",
    "Social Media Marketing",
    "Performance Marketing",
  ],
  authors: [{ name: "Keyword AI Solution" }],
  creator: "Keyword AI Solution",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

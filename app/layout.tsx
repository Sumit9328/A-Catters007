import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopInfoBar from "@/components/TopInfoBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A-Catters - Premium Catering & Event Services",
  description: "Professional catering services, halwai items, sweets, snacks, live counters, desserts, breakfast, lunch/dinner, and DJ & sound services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <TopInfoBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thailand Cost of Living Calculator | Accurate 2024 Estimates",
  description: "Calculate monthly living costs in Thailand (Bangkok, Phuket, Chiang Mai) for Expats, Nomads, and Families. Rent, Food, and Visa costs updated.",
  keywords: "Thailand cost of living, Bangkok rent prices, Phuket expenses, Digital nomad Thailand budget",
  openGraph: {
    title: "Is Thailand Affordable for You? Check Calculator",
    description: "Real-time cost of living calculator for Thailand. Check your budget now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
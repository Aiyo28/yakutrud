import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ЯкуТруд: Вакансии Якутии",
    template: "%s | ЯкуТруд",
  },
  description: "ЯкуТруд: Ваш мост к возможностям трудоустройства в Якутии!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

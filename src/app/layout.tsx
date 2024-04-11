<<<<<<< HEAD
import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'ЯкуТруд',
		template: '%s | ЯкуТруд',
	},
	description: 'Найди работу своей мечты.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-w-[350px]`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
=======
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
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}

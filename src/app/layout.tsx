import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // pick the weights you actually use
  variable: '--font-montserrat', // exposes it as a CSS variable
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: "MySDH Launch",
  description: "MySDH Application Launch",
  keywords: ["SDH", "True Knowledge", "Faith in Christ", "Godly Character", "Sekolah Diah Harapan"],
  authors: [{ name: "Edutech SDH" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={quicksand.variable}
    >
      <body className={quicksand.variable}>{children}</body>
    </html>
  );
}

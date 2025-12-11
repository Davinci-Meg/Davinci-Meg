import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Megumu Isshiki - Portfolio",
  description: "Portfolio of Megumu Isshiki (一色潤), a researcher in Human Computer Interaction, Robotics, and Umwelt at Hokkaido University.",
  keywords: ["Megumu Isshiki", "一色潤", "Human Computer Interaction", "Robotics", "Portfolio", "Hokkaido University"],
  authors: [{ name: "Megumu Isshiki", url: "https://github.com/Davinci-Meg" }],
  creator: "Megumu Isshiki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://megumu-isshiki-portfolio.vercel.app",
    title: "Megumu Isshiki - Portfolio",
    description: "Portfolio of Megumu Isshiki (一色潤), a researcher in Human Computer Interaction, Robotics, and Umwelt at Hokkaido University.",
    siteName: "Megumu Isshiki Portfolio",
    images: [
      {
        url: "/images/profile/profile-rectangle-v2.webp",
        width: 1200, // Approximate/target width, good standard for OG
        height: 900, // 4:3 aspect
        alt: "Megumu Isshiki Profile Picture"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Megumu Isshiki - Portfolio",
    description: "Portfolio of Megumu Isshiki (一色潤), a researcher in Human Computer Interaction, Robotics, and Umwelt.",
    images: ["/images/profile/profile-rectangle-v2.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

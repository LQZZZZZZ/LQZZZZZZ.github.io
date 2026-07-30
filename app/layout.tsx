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
  metadataBase: new URL("https://lqzzzzzz.github.io"),
  title: "Qizhe Li 李启哲 · AI Researcher",
  description:
    "李启哲的个人学术主页：个性化智能体、通信智能体、科研基础设施、代表论文与研究 Demo。",
  openGraph: {
    title: "Qizhe Li · AI Researcher",
    description: "Intelligent agents · Telecom · AI for Science",
    type: "website",
    images: [
      {
        url: "https://lqzzzzzz.github.io/og.png",
        width: 1731,
        height: 909,
        alt: "Qizhe Li academic profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qizhe Li · AI Researcher",
    description: "Intelligent agents · Telecom · AI for Science",
    images: ["https://lqzzzzzz.github.io/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

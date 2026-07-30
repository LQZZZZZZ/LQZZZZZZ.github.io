import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lqzzzzzz.github.io"),
  title: "Qizhe Li 李启哲 · Trustworthy AI & Intelligent Networks",
  description:
    "Qizhe Li's academic homepage: uncertainty quantification, AI for networks, publications, and open research.",
  openGraph: {
    title: "Qizhe Li · Trustworthy AI & Intelligent Networks",
    description: "Uncertainty quantification · AI for networks · Open research",
    type: "website",
    images: [
      {
        url: "https://lqzzzzzz.github.io/og.png",
        width: 1732,
        height: 908,
        alt: "Qizhe Li academic profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qizhe Li · Trustworthy AI & Intelligent Networks",
    description: "Uncertainty quantification · AI for networks · Open research",
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
      <body>{children}</body>
    </html>
  );
}

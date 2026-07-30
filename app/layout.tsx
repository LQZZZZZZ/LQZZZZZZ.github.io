import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lqzzzzzz.github.io"),
  title: "Qizhe Li · Trustworthy AI & Intelligent Networks",
  description:
    "Qizhe Li's academic profile: uncertainty quantification, AI for networks, an interactive publication timeline, and research projects.",
  openGraph: {
    title: "Qizhe Li · Trustworthy AI & Intelligent Networks",
    description: "Uncertainty quantification · AI for networks · Open research",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

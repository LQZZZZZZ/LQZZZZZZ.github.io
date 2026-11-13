import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./SiteHeader";
import SiteSidebar from "./SiteSidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://lqzzzzzz.github.io"),
  title: "Qizhe Li · Intelligent Networks & AI-RAN",
  description:
    "Qizhe Li's academic profile, news, publications, and patents in intelligent networks, AI-RAN, large language models and agents for networks, and uncertainty quantification.",
  openGraph: {
    title: "Qizhe Li · Intelligent Networks & AI-RAN",
    description: "Intelligent networks · AI-RAN · Large language models and agents · Uncertainty quantification",
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
    title: "Qizhe Li · Intelligent Networks & AI-RAN",
    description: "Intelligent networks · AI-RAN · Large language models and agents · Uncertainty quantification",
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
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div className="site-layout">
          <SiteSidebar />
          <div className="site-content" id="main-content">{children}</div>
        </div>
      </body>
    </html>
  );
}

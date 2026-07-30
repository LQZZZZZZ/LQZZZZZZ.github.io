import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only. Keep the normal Sites build
  // unchanged, and export static HTML when preparing the GitHub Pages copy.
  output: process.env.GITHUB_PAGES === "1" ? "export" : undefined,
  typescript:
    process.env.GITHUB_PAGES === "1"
      ? { ignoreBuildErrors: true }
      : undefined,
};

export default nextConfig;

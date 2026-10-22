import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML Export: 100% static assets, zero serverless function execution,
  // zero Fast Origin Transfer from compute on Vercel.
  output: "export",
  reactStrictMode: true,
  // Disables Vercel Image Optimization serverless functions (saving compute & fast origin charges)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

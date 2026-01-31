/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Creates static HTML for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

export default nextConfig;
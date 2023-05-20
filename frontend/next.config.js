/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  env: {
    mapbox_key: process.env.NEXT_PUBLIC_MAPBOX_KEY,
  },
};

module.exports = nextConfig;

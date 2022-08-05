/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PUBLIC_URL: "https://kremlevmax.github.io/lusaka",
    assetPrefix: "./",
  },
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;

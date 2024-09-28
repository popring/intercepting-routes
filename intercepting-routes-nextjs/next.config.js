/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tuapi.eees.cc",
      },
    ],
  },
};

module.exports = nextConfig;

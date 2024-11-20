/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-admin-rework.scalastaging.online",
        port: "8080", // Include the port separately
        pathname: "/download/**", // Match any dynamic path under /download
      },
    ],
  },
};

export default nextConfig;

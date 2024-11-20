/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-admin-rework.scalastaging.online",
        port: "8080", // Include the port separately if it's part of the URL
        pathname: "/download/company_profile/**", // Add a specific pattern if needed
      },
    ],
  },
};

export default nextConfig;

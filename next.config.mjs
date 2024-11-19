/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api-admin-rework.scalastaging.online8080'
      }
    ]
  }
};

export default nextConfig;

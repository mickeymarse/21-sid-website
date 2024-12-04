/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
{
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
      },
       {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  },

};

export default nextConfig;

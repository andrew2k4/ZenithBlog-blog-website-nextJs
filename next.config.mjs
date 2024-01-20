/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.petitechambre.fr",
      },
    ],
  },
};

export default nextConfig;

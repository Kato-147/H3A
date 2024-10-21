/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.didongmy.com",
      },
      {
        protocol: "https",
        hostname: "ibhak.gimcheon.ac.kr",
      },
      {
        protocol: "https",
        hostname: "socwel.gimcheon.ac.kr",
      },
    ],
  },
};

export default nextConfig;

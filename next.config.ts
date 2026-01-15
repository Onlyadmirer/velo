import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // 👈 Izinkan domain ini
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // 👈 Izinkan domain ini
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/despre", permanent: true },
      { source: "/about-us", destination: "/despre", permanent: true },
      { source: "/services", destination: "/servicii", permanent: true },
      { source: "/services/:path*", destination: "/servicii", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/informatii-fiscale-utile", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;

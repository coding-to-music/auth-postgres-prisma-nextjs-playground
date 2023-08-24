/** @type {import('next').NextConfig} */

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   swcMinify: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   removeConsole: process.env.NODE_ENV !== "development",
  // },  
}

// const withPWA = require("next-pwa")({
//   dest: "public", // Destination directory for the PWA files
//   disable: true, // Disable PWA in development mode
// });

module.exports = nextConfig

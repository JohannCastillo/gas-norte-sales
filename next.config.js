/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  experimental:{
    serverActions: true,
    serverComponentsExternalPackages: ['@react-pdf/renderer']
  }
};

module.exports = nextConfig;

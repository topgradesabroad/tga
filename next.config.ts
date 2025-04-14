/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  images: {
    domains: ['cdn.sanity.io'],
  },
};


module.exports = nextConfig;
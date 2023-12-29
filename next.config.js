/** @type {import('next').NextConfig} */
const runtimeCaching = require('./cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  dynamicStartUrl: false,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
});

module.exports = nextConfig;

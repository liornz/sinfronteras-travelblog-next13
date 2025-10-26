/** @type {import('next').NextConfig} */
const runtimeCaching = require('./cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  dynamicStartUrl: false,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  experimental: {
    turbo: {},
  },
  sassOptions: {
    api: 'modern-compiler',
    silenceDeprecations: ['legacy-js-api'],
  },
});

module.exports = nextConfig;

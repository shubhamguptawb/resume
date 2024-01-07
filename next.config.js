/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['user-images.githubusercontent.com',
  'private-user-images.githubusercontent.com',
  'boostedcrm.com'
  ],
  },
  experimental: {
    appDir: false,
  },
};

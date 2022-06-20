/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    assetPrefix: 'lens-protocol-frontend/',
    domains: ['ipfs.infura.io'],
  },
}

module.exports = nextConfig

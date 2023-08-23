/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.unsplash.com',
            'shop.adalia.pp.ua'
        ],
    },
    async redirects() {
      return [
        {
          source: '/product',
          destination: '/',
          permanent: true,
        },
      ]
    }
} 

module.exports = nextConfig

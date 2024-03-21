/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.unsplash.com',
            'cdn.pixabay.com',
            'shop.adonia.ink'
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

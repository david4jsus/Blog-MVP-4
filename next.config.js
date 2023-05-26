/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { // Allow Next's 'image' component to fetch images with URL source outside of the local origin
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test-thingy.000webhostapp.com',
        port: '',
        pathname: '/wp-content/**'
      }
    ]
  }
}

module.exports = nextConfig

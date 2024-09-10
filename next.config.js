/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://101.79.9.79:8080/:path*",
      }
    ]
  }
}

module.exports = nextConfig

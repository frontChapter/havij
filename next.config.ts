import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/havij',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig

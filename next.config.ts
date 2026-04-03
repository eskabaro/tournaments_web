import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    cacheComponents: true,
    cacheLife: {
        tournaments: {
            stale: 60,
            revalidate: 300,
            expire: 3600
        },
        tournament: {
            stale: 60,
            revalidate: 300,
            expire: 3600
        }
    },
    images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] }
}

export default nextConfig

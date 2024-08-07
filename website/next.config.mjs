/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'build',
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; preload',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options', 
                        value: 'DENY',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: "camera=(), geolocation=(), microphone=()", 
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    }
                ]
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/de',
                permanent: true,
            },
        ]
    },
}

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'build',
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options', 
                        value: 'DENY',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: "camera=(); battery=(self); geolocation=(); microphone=()" 
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    }
                ]
            }
        ]
    }
}

export default nextConfig;

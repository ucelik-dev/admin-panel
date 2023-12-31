/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard',
            permanent: true,
          },
        ]
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'beyrsfyeozhbwdxwvbqh.supabase.co',
          pathname: '**'
        }
      ]
    },

}

module.exports = nextConfig
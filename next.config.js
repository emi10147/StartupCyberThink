/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // WebGL and Three.js optimization
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Handle shader files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });

    return config;
  },
  transpilePackages: ['three'],
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  poweredByHeader: false,
  // Note: Custom headers are configured on the hosting platform (Vercel, Netlify, etc.)
  // For static export, add security headers via your hosting provider or reverse proxy
}

module.exports = nextConfig
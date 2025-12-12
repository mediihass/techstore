/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },

  // Options de performance pour Next.js 15
  experimental: {
    // Augmenter la limite de données pour les pages
    largePageDataBytes: 128 * 1000 * 1000, // 128MB (corrigé)

    // Autres optimisations pour Next.js 15
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;

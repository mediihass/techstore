/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },

  experimental: {
    // 128 MiB page‑data limit
    largePageDataBytes: 128 * 1000 * 1000,

    // still‑supported experimental flags
    optimizeCss: true,
    scrollRestoration: true,

    // ✅ correct placement of concurrentFeatures
  },

  // Turbopack is the default bundler; no need for a separate key
};

export default nextConfig;

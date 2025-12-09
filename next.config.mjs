/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org", // for social media icons
      // add other domains if needed
    ],
  },
};

export default nextConfig;

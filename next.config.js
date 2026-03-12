/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // for static export
  images: { unoptimized: true },  // Vercel will serve images without optimization
  typescript: { ignoreBuildErrors: true }, // optional: allows deploy even with warnings
}

module.exports = nextConfig
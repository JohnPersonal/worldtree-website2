/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/worldtree-website2',
  distDir: 'docs'
}

module.exports = nextConfig
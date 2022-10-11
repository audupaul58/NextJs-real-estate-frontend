/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

   images: {
    domains: ['realprops.herokuapp.com', 'res.cloudinary.com'],
    loader : "akamai",
    path : "",

  },

  
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  
  reactStrictMode: true,
  // experimental:{
  //   appDir:true,
  // },
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "websites.mil-tech.pl",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

module.exports = nextConfig

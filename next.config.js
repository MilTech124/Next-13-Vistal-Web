/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental:{
  //   appDir:true,
  // },
  i18n:{
    locales:['pl','sk'],
    defaultLocale:'pl'
  },
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

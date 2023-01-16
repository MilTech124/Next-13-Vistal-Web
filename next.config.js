/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental:{
  //   appDir:true,
  // },
  i18n:{
    locales:['pl','sk'],
    defaultLocale:'pl'
  }
}

module.exports = nextConfig

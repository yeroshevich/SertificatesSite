/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // env:{
  //   server_domen:process.env.SERVER_DOMEN
  // },
  // webpack: (config, context) => {
  //   config.watchOptions = {
  //     ignored:/node_modules/,
  //     poll: 500,
  //     aggregateTimeout: 30
  //   }
  //   return config
  // }
}

module.exports = nextConfig

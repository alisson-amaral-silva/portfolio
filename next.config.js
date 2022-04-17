// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }

    return config
  },
  env: {
    EMAIL: process.env.EMAIL
  },
  reactStrictMode: true,
  i18n
}

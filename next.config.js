// @ts-check
/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (cfg.cache && !dev) {
      cfg.cache = Object.freeze({
        type: 'memory',
      })
      cfg.cache.maxMemoryGenerations = 0
    }
    return config
  },
}
 
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development config options */
    }
  }
 
  return {
   experimental.instrumentationHook: true,
   productionBrowserSourceMaps: false,
   experimental.serverSourceMaps: false,
   experimental.webpackBuildWorker: true,
  }
}

export default nextConfig

// @ts-check
 
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const experimental.instrumentationHook = true;
 
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }
 
  return {
    /* config options for all phases except development here */
  }
}

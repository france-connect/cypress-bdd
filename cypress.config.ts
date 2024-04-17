import { defineConfig } from 'cypress';

import pluginConfig from './cypress/plugins';

export default defineConfig({
  // allow self-signed certificates and cross-domain testing
  chromeWebSecurity: false,
  // disable video recording by default
  video: false,
  e2e: {
    // main website url
    baseUrl: 'https://www.saucedemo.com',
    // cucumber feature file pattern
    specPattern: 'cypress/e2e/*.feature',
    // extra plugins and custom commands
    supportFile: 'cypress/support/index.ts',
    // experimental cypress features
    experimentalRunAllSpecs: true,
    experimentalMemoryManagement: true,
    // plugin configuration
    async setupNodeEvents(on, config) {
      return await pluginConfig(on, config);
    },
  },
  // environment variables
  env: {
    TEST_ENV: 'dev',
  },
});

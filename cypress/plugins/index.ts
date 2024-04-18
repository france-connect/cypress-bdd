import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

import { log, table } from './console-log-plugin';
import { createHexaHash } from './crypto-plugin';

const pluginConfig = async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> => {
  await addCucumberPreprocessorPlugin(on, config);

  on('task', {
    createHexaHash,
    log,
    table,
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'electron') {
      // Use larger headless screen size to support all viewports
      launchOptions.preferences.width = 1440;
      launchOptions.preferences.height = 1200;
      launchOptions.preferences.webPreferences = {
        spellcheck: false,
      };
    }
    return launchOptions;
  });

  addMatchImageSnapshotPlugin(on);

  return config;
};

export default pluginConfig;

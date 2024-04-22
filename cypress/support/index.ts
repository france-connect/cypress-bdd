// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

import 'cypress-axe';
import 'cypress-plugin-api';

import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

// Import all custom types
import * as _types from './types';

// Snapshot matching default configuration
addMatchImageSnapshotCommand({
  capture: 'fullPage',
  customDiffConfig: { threshold: 0.2 },
  customDiffDir: './cypress/snapshots/diff',
  customSnapshotsDir: './cypress/snapshots/base',
  e2eSpecDir: 'cypress/e2e/visual',
  failureThreshold: 0,
  failureThresholdType: 'percent',
});

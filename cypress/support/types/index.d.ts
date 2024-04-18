import { Result } from 'axe-core';

import { User } from './user';

// Cypress Alias
// eslint-disable-next-line no-undef
export type ChainableElement = Cypress.Chainable<JQuery<HTMLElement>>;

// Define Cucumber world interface
declare module 'mocha' {
  export interface Context {
    // Accessibility context
    allViolations?: Result[];
    newViolations?: Result[];

    // API context
    apiRequests: Partial<Cypress.RequestOptions>[];
    apiRequest?: Partial<Cypress.RequestOptions>;

    // BDD context
    users: User[];
    user: User;
  }
}

export * from './user';

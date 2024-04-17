import { User } from './user';

// Cypress Alias
// eslint-disable-next-line no-undef
export type ChainableElement = Cypress.Chainable<JQuery<HTMLElement>>;

// Define Cucumber world interface
declare module 'mocha' {
  export interface Context {
    users: User[];
    user: User;
  }
}

export * from './user';

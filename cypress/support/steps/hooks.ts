import { Before } from '@badeball/cypress-cucumber-preprocessor';

import { getDefaultUser } from '../helpers';
import { User } from '../types';

Before(function () {
  const testEnv: string = Cypress.env('TEST_ENV');
  // Initiate this.users with the users.json
  cy.fixture(`${testEnv}/users.json`).as('users');

  // Initiate this.user with the default user
  cy.get<User[]>('@users').then((users) => {
    this.user = getDefaultUser(users);
  });
});

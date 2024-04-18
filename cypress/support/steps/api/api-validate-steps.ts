import { Given } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Validate Steps
 *
 * Those steps are specific to the validate endpoint
 */

Given(
  'je mets un objet vide dans la propriété "token" du corps de la requête',
  function () {
    this.apiRequest.body['token'] = {};
  },
);

Given(
  'je mets le token dans la propriété "token" du corps de la requête',
  function () {
    const TOKEN_COOKIE_NAME = 'token';
    cy.getCookie(TOKEN_COOKIE_NAME)
      .should('exist')
      .then((cookie) => {
        const token = cookie.value;
        this.apiRequest.body['token'] = token;
      });
  },
);

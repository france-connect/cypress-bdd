import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Request Steps
 *
 * Those steps prepare the step `je lance la requête`
 * They are followed by the response steps
 * from ./api-response-steps.ts
 */

Given('je prépare une requête {string}', function (requestKey: string) {
  this.apiRequest = this.apiRequests[requestKey];
  expect(this.apiRequest).to.be.ok;
});

Given(
  /^je prépare la requête en mode "(formulaire|json)"$/,
  function (mode: string) {
    const form = mode === 'formulaire';
    this.apiRequest.form = form;
  },
);

Given(
  "je mets {string} dans la propriété {string} de l'entête de la requête",
  function (value: string, property: string) {
    this.apiRequest.headers = this.apiRequest.headers ?? {};
    this.apiRequest.headers[property] = value;
  },
);

Given(
  "je mets {string} dans la propriété {string} de l'entête de la requête",
  function (value: string, property: string) {
    this.apiRequest.headers = this.apiRequest.headers ?? {};
    this.apiRequest.headers[property] = value;
  },
);

Given(
  'je retire le paramètre {string} de la requête',
  function (property: string) {
    expect(this.apiRequest.qs[property]).to.exist;
    delete this.apiRequest.qs[property];
  },
);

Given(
  'je mets {string} dans le paramètre {string} de la requête',
  function (value: string, property: string) {
    this.apiRequest.qs[property] = value;
  },
);

Given('je retire {string} du corps de la requête', function (property: string) {
  expect(this.apiRequest.body[property]).to.exist;
  delete this.apiRequest.body[property];
});

Given(
  'je mets {string} dans la propriété {string} du corps de la requête',
  function (value: string, property: string) {
    this.apiRequest.body[property] = value;
  },
);

Given(
  'je configure la requête pour ne pas suivre les redirections',
  function () {
    this.apiRequest.followRedirect = false;
  },
);

When('je lance la requête', function () {
  const apiRequest: Partial<Cypress.RequestOptions> = {
    ...this.apiRequest,
    failOnStatusCode: false,
  };
  cy.api(apiRequest).as('apiResponse');
});

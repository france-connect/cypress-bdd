import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { Result } from 'axe-core';

import { displayViolations } from '../../helpers';

// Change to true to get all the accessibility checks
// without stopping the test after the first violation
const skipFailures = `${Cypress.env('A11Y_SKIP_FAILURES')}` === 'true';

const injectAxeOnce = (): void => {
  cy.window().then((win) => {
    if (!win.axe) {
      cy.injectAxe();
    }
  });
};

When("je vérifie l'accessibilité sur cette page", function () {
  const checkA11y = (): void => {
    const violationCallback = (violations: Result[]) => {
      displayViolations(violations);
      this.newViolations = violations;
      const oldViolations = this.allViolations ?? [];
      this.allViolations = oldViolations.concat(this.newViolations);
    };
    cy.checkA11y(null, null, violationCallback, true);
  };
  injectAxeOnce();
  checkA11y();
});

Then("aucune erreur d'accessibilité n'est présente", function () {
  if (!skipFailures) {
    expect(this.allViolations ?? []).length(0);
  }
});

Then(
  "aucune erreur d'accessibilité n'est présente après cette vérification",
  function () {
    if (!skipFailures) {
      expect(this.newViolations ?? []).length(0);
    }
  },
);

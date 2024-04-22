import { ChainableElement } from '../types';

export default class AdminLoginPage {
  getUsernameInput(): ChainableElement {
    return cy.get('[data-testid="username"]');
  }

  getPasswordInput(): ChainableElement {
    return cy.get('[data-testid="password"]');
  }

  getLoginButton(): ChainableElement {
    return cy.get('[data-testid="submit"]');
  }

  checkIsVisible(): void {
    this.getUsernameInput().should('be.visible');
  }

  visit(): void {
    // turn off uncaught:exception handling on admin login page
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
    });
    cy.visit('/#/admin');
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return true;
    });
  }

  login(username: string, password: string): void {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}

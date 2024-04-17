import { ChainableElement } from '../types';

export default class LoginPage {
  getUsernameInput(): ChainableElement {
    return cy.get('#user-name');
  }

  getPasswordInput(): ChainableElement {
    return cy.get('#password');
  }

  getLoginButton(): ChainableElement {
    return cy.get('#login-button');
  }

  checkIsVisible(): void {
    this.getLoginButton().should('be.visible');
  }

  visit(): void {
    cy.visit('/');
  }

  login(username: string, password: string): void {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}

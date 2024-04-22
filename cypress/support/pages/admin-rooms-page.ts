import { ChainableElement } from '../types';

export default class AdminRoomsPage {
  getRoomsList(): ChainableElement {
    return cy.get('[data-testid="roomlisting"]');
  }

  checkIsVisible(): void {
    this.getRoomsList().should('be.visible');
  }

  visit(): void {
    // Only when logged in
    cy.visit('/#/admin');
  }
}

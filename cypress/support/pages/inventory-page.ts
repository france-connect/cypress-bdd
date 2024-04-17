import { ChainableElement } from '../types';

export default class InventoryPage {
  getInventoryList(): ChainableElement {
    return cy.get('[data-test="inventory-list"]');
  }

  checkIsVisible(): void {
    this.getInventoryList().should('be.visible');
  }

  visit(): void {
    cy.visit('/inventory.html');
  }
}

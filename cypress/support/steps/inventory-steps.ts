import { Then } from '@badeball/cypress-cucumber-preprocessor';

import InventoryPage from '../pages/inventory-page';

const inventoryPage = new InventoryPage();

Then("je suis redirigé vers la page d'inventaire", function () {
  inventoryPage.checkIsVisible();
});

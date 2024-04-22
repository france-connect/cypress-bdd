import { When } from '@badeball/cypress-cucumber-preprocessor';

import HomePage from '../../pages/home-page';

const homePage = new HomePage();

When("je navigue sur la page d'accueil", function () {
  homePage.visit();
});

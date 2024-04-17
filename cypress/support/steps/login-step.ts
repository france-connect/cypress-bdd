import { When } from '@badeball/cypress-cucumber-preprocessor';

import LoginPage from '../pages/login-page';

const loginPage = new LoginPage();

When('je navigue sur la page de connexion', function () {
  loginPage.visit();
});

When("j'entre le nom d'utilisateur {string}", function (username: string) {
  loginPage.getUsernameInput().type(username);
});

When("j'entre mon nom d'utilisateur", function () {
  const { username } = this.user;
  loginPage.getUsernameInput().type(username);
});

When("j'entre le mot de passe {string}", function (password: string) {
  loginPage.getPasswordInput().type(password);
});

When("j'entre mon mot de passe", function () {
  const { password } = this.user;
  loginPage.getPasswordInput().type(password);
});

When('je clique sur le bouton de connexion', function () {
  loginPage.getLoginButton().click();
});

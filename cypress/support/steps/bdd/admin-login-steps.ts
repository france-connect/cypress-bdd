import { When } from '@badeball/cypress-cucumber-preprocessor';

import AdminLoginPage from '../../pages/admin-login-page';

const adminLoginPage = new AdminLoginPage();

When('je navigue sur la page de connexion administrateur', function () {
  adminLoginPage.visit();
});

When("j'entre le nom d'utilisateur {string}", function (username: string) {
  adminLoginPage.getUsernameInput().type(username);
});

When("j'entre mon nom d'utilisateur", function () {
  const { username } = this.user;
  adminLoginPage.getUsernameInput().type(username);
});

When("j'entre le mot de passe {string}", function (password: string) {
  adminLoginPage.getPasswordInput().type(password);
});

When("j'entre mon mot de passe", function () {
  const { password } = this.user;
  adminLoginPage.getPasswordInput().type(password);
});

When('je clique sur le bouton de connexion', function () {
  adminLoginPage.getLoginButton().click();
});

import { Given } from '@badeball/cypress-cucumber-preprocessor';

import { getUserByDescription } from '../../helpers';

Given("j'utilise un utilisateur {string}", function (description: string) {
  this.user = getUserByDescription(this.users, description);
});

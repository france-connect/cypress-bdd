import { Then } from '@badeball/cypress-cucumber-preprocessor';

import AdminRoomsPage from '../../pages/admin-rooms-page';

const adminRoomsPage = new AdminRoomsPage();

Then('je suis redirigé vers la page de gestion des chambres', function () {
  adminRoomsPage.checkIsVisible();
});

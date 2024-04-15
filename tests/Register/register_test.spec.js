import { test } from '@playwright/test';
import { Pom } from '../../pages/POM.spec';
import { urlData } from '../../Data/URLData';
import { userData } from '../../Data/UserData';

let pomManager;
let navigate;
let registerPage;

test.beforeEach(async ({ page }) => {
  pomManager = new Pom(page);
  navigate = pomManager.getNavigation();
  registerPage = pomManager.getRegisterPage();
  await navigate.gotoPage(urlData.baseUrl);
});

test('Successful Register with Valid Credentials @register@regression', async () => {
  await navigate.clickSignupLogin();
  await registerPage.registration(userData);
  await registerPage.verifyAccountCreated();

});





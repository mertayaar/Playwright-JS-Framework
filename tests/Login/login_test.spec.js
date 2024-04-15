import { test } from '@playwright/test';
import { Pom } from '../../pages/POM.spec';
import { urlData } from '../../Data/URLData';
import { userData } from '../../Data/UserData';

let pomManager;
let navigate;
let loginPage;

test.beforeEach(async ({ page }) => {
  pomManager = new Pom(page);
  navigate = pomManager.getNavigation();
  loginPage = pomManager.getLoginPage();
  await navigate.gotoPage(urlData.baseUrl);
});

test('Successful Login with Valid Credentials @login@regression', async () => {
  await navigate.clickSignupLogin();
  await loginPage.login(userData.email, userData.password);
  await loginPage.verifySuccessfullLoggedIn();
});

test('Login with Invalid Credentials @login@regression', async () => {
  await navigate.clickSignupLogin();
  await loginPage.login(userData.email, userData.passwordRandom);
  await loginPage.verifyIncorrectMessage();
});



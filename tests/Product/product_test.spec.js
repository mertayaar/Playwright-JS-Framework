import { test } from '@playwright/test';
import { Pom } from '../../pages/POM.spec';
import { urlData } from '../../Data/URLData';
import { userData } from '../../Data/UserData';
import { productData } from '../../Data/ProductData';

let pomManager;
let productPage;
let navigate;

test.beforeEach(async ({ page }) => {
  pomManager = new Pom(page);
  productPage = pomManager.getProductPage();
  navigate = pomManager.getNavigation();
  const loginPage = pomManager.getLoginPage();

  await navigate.gotoPage(urlData.baseUrl);
  await navigate.clickSignupLogin();
  await loginPage.login(userData.email, userData.password);
  await loginPage.verifySuccessfullLoggedIn();
});

test('Verify All Products Show up @products@regression',async ()=>{
  await navigate.clickProducts();
  await productPage.verifyTotalProducts(productData.totalProducts);
});




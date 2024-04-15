import { test } from '@playwright/test';
import { Pom } from '../../pages/POM.spec';
import { productData } from '../../Data/ProductData';
import { urlData } from '../../Data/URLData';
import { userData } from '../../Data/UserData';
import { paymentData } from '../../Data/PaymentData';

let pomManager;
let navigate;

test.beforeEach(async ({ page }) => {
  pomManager = new Pom(page);
  navigate = pomManager.getNavigation();
  const loginPage = pomManager.getLoginPage();

  await navigate.gotoPage(urlData.baseUrl);
  await navigate.clickSignupLogin();
  await loginPage.login(userData.email, userData.password);
  await loginPage.verifySuccessfullLoggedIn();

});
test('place a order @products@placeorder@regression', async () => {
  const productPage = pomManager.getProductPage();
  await navigate.clickProducts();
  await productPage.addProductToCart(productData.title);

});

test('Proceed to Check Out @cart@placeorder@regression', async () => {
  const cartPage = pomManager.getCartPage();
  await navigate.clickCart();
  await cartPage.verifyProductInCart(productData.title);
  await cartPage.checkOut();

});

test('Verify Address and Place Order @placeorder@regression', async () => {
  const checkOutPage = pomManager.getCheckOutPage();
  await navigate.gotoPage(urlData.checkOutUrl);
  await checkOutPage.verifyAddress(userData);
  await checkOutPage.placeOrder();
});
test('Pay and Confirm @placeorder@regression', async () => {
  const paymentPage = pomManager.getPaymentPage();
  await navigate.gotoPage(urlData.paymentUrl);
  await paymentPage.verifyOnPaymentPage();
  await paymentPage.payOrder(paymentData);
  await paymentPage.verifySuccessfulPayment();


});
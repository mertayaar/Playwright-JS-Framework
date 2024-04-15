import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { ProductPage } from "./ProductPage";
import { CartPage } from "./CartPage";
import { CheckOutPage } from "./CheckOutPage";
import { PaymentPage } from "./PaymentPage";
import { Navigation } from "./Navigation";
import { DeleteAccountPage } from "./DeleteAccountPage";

export class Pom {

  constructor(page) {
    this.page = page;
    this.registerPage = new RegisterPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.productPage = new ProductPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkOutPage = new CheckOutPage(this.page);
    this.paymentPage = new PaymentPage(this.page);
    this.navigate = new Navigation(this.page);
    this.deleteAccountPage = new DeleteAccountPage(this.page);
  }

  getRegisterPage = () => this.registerPage;
  getLoginPage = () => this.loginPage;
  getProductPage = () => this.productPage;
  getCartPage = () => this.cartPage;
  getCheckOutPage = () => this.checkOutPage;
  getPaymentPage = () => this.paymentPage;
  getNavigation = () => this.navigate;
  getDeleteAccountPage = () => this.deleteAccountPage;


}
const {expect} = require('@playwright/test');

export class Navigation{
  constructor(page){
    this.page = page;
    this.loginAndRegisterButton = 'a[href="/login"]';
    this.productsButton = 'a[href="/products"]';
    this.cartButton = 'li>a[href="/view_cart"]';
    this.logOutButton = 'a[href="/logout"]';
    this.deleteAccountButton='a[href="/delete_account"]';
  }

  async gotoPage(url){
    await this.page.goto(url);
  }

  async getUsernameLocator(username){
    return this.page.locator(`//b[normalize-space()="${username}"]`)
  }

  async verifyUsernameShowUp(username){
    await expect(this.getUsernameLocator).toBeVisible();
  }

  async clickSignupLogin(){
    await this.page.locator(this.loginAndRegisterButton).click();
  }

  async clickProducts(){
    await this.page.locator(this.productsButton).click();
  }

  async clickCart(){
    await this.page.locator(this.cartButton).click();
  }

  async clickLogOut(){
    await this.page.locator(this.logOutButton).click();
  }

  async clickDeleteAccount(){
    await this.page.locator(this.deleteAccountButton).click();
  }


}
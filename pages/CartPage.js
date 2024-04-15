const { expect } = require('@playwright/test');
export class CartPage {
  constructor(page) {
    this.page = page;
    this.productsInTable = "#cart_info_table tbody tr";
    this.checkOutButton =".btn.btn-default.check_out";
  }

  async getProductLocatorInCart(productTitle){
    return this.page.locator(`//a[text()="${productTitle}"]`)
  }

  async verifyProductInCart(productTitle){
    await expect(await this.getProductLocatorInCart(productTitle)).toBeVisible();
  }

  async checkOut(){
    await this.page.locator(this.checkOutButton).click();
  }

}
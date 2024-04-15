const { expect } = require('@playwright/test');
export class ProductPage {
  constructor(page) {
    this.page = page;
    this.salePicture = '#sale_image';
    this.allProducts = 'div[id="cartModal"] ~ div';
    this.productAddedText = "//h4[normalize-space()='Added!']";
    this.continueButton = 'button[data-dismiss="modal"]';
  }

  async addProductToCart(productTitle) {
    await this.selectProduct(productTitle);
    await this.verifyProductAdded();
    await this.countinueToShop();
  }

  async selectProduct(productTitle) {
    this.product = await this.page.getByText(productTitle).nth(1);
    this.selectedProduct = `//div[@class="product-overlay"] //p[contains(text(),"${productTitle}")]/../a`;

    await this.product.hover();
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.selectedProduct).click();
  }


  async countinueToShop() {
    await this.page.locator(this.continueButton).click();
  }

  async verifyProductAdded() {
    await expect(this.page.locator(this.productAddedText)).toBeVisible();
  }

  async verifyTotalProducts(totalProducts) {
    const products = await this.page.locator(this.allProducts).count();
    expect(products).toBe(totalProducts);
  }

}
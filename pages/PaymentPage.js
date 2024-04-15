const { expect } = require('@playwright/test');
export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.paymentPageTitle = "//h2[normalize-space()='Payment']";
    this.nameInput = "input[data-qa='name-on-card']";
    this.cardNumberInput ='input[data-qa="card-number"]';
    this.cvcInput = 'input[data-qa="cvc"]';
    this.expMonth ='input[data-qa="expiry-month"]';
    this.expYear = 'input[data-qa="expiry-year"]';
    this.payButton = '#submit';
    this.successFullPayment= "//b[normalize-space()='Order Placed!']";
  }

  async enterPaymentDetail(paymentData){
    await this.page.locator(this.nameInput).fill(paymentData.name);
    await this.page.locator(this.cardNumberInput).fill(paymentData.cardNumber);
    await this.page.locator(this.cvcInput).fill(paymentData.CVC);
    await this.page.locator(this.expMonth).fill(paymentData.expMonth);
    await this.page.locator(this.expYear).fill(paymentData.expYear);
  }

  async payOrder(paymentData){
    await this.enterPaymentDetail(paymentData);
    await this.page.locator(this.payButton).click();
  }

  async verifySuccessfulPayment(){
    await expect(this.page.locator(this.successFullPayment)).toBeVisible();
  }

  async verifyOnPaymentPage(){
    await expect(this.page.locator(this.paymentPageTitle)).toBeVisible();
  }




}
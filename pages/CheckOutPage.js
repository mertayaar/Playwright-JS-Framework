const { expect } = require('@playwright/test');
export class CheckOutPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = 'a[href="/payment"]';
  }

  async getDetailLocator(check) {
    return this.page.locator(`(//ul[@id="address_delivery"] //li[contains(text(),"${check}")])[1]`);
  }

  async checkFirstAndLastName(firstName) {
    expect(await this.getDetailLocator(firstName)).toBeVisible();

  }

  async checkAddressDetail(streetAddress, unitNo) {
    expect(await this.getDetailLocator(streetAddress)).toBeVisible();
    expect(await this.getDetailLocator(unitNo)).toBeVisible();
  }

  async checkCityStateZip(city, state, zip, country) {
    expect(await this.getDetailLocator(city)).toBeVisible();
    expect(await this.getDetailLocator(state)).toBeVisible();
    expect(await this.getDetailLocator(zip)).toBeVisible();
    expect(await this.getDetailLocator(country)).toBeVisible();
  }

  async checkPhoneNo(phoneNo) {
    expect(await this.getDetailLocator(phoneNo)).toBeVisible();
  }

  async verifyAddress(userData) {
    await this.checkFirstAndLastName(userData.firstName, userData.lastName);
    await this.checkAddressDetail(userData.streetAddress, userData.unitNo);
    await this.checkCityStateZip(userData.city, userData.state, userData.zip,userData.country);
    await this.checkPhoneNo(userData.phone);
  }

  async placeOrder(){
    await this.page.locator(this.placeOrderButton).click();
  }





}
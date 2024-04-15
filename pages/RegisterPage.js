import { expect } from '@playwright/test';

export class RegisterPage {

  constructor(page) {
    this.page = page;
    this.nameInput = "input[data-qa='signup-name']";
    this.emailInput = "input[data-qa='signup-email']";
    this.signUpButton = "button[data-qa='signup-button']";
    this.enterAccountInfoText = '//b[normalize-space()="Enter Account Information"]';
    this.passwordInput = "#password";
    this.dayDropDownBox = '#days'
    this.monthDropDownBox = '#months';
    this.yearDropDownBox = '#years';
    this.newsLetterCheckBox = "#newsletter";
    this.receiveOfferCheckBox = "#optin";
    this.firstNameInput = "#first_name";
    this.lastNameInput = "#last_name";
    this.companyInput = "#company";
    this.addressInput = "#address1";
    this.addressUnitInput = "#address2";
    this.countryDropDownBox = "#country";
    this.stateInput = "#state";
    this.cityInput = "#city";
    this.zipCodeInput = "#zipcode";
    this.phoneInput = "#mobile_number";
    this.createAccountButton = "button[data-qa='create-account']";
    this.createdText = "//b[text()='Account Created!']";
    this.countinueButton = ".btn.btn-primary";
  }


  async registration(userData) {
    await this.fillNameAndEmail(userData.username, userData.emailRandom);
    await this.clickSignUpButton();
    await this.verifyRegisterPageShowUp();
    await this.fillPassword(userData.password);
    await this.selectDateOfBirth(userData.day, userData.month, userData.year);
    await this.checkBoxCheck();
    await this.fillNameAndCompany(userData.firstName, userData.lastName, userData.company);
    await this.fillAddress(userData.streetAddress, userData.unitNo, userData.country, userData.state, userData.city, userData.zip);
    await this.fillPhone(userData.phone);
    await this.clickCreateAccountButton();
   
  }

  async fillNameAndEmail(username, email) {
    await this.page.locator(this.nameInput).fill(username);
    await this.page.locator(this.emailInput).fill(email);
  }

  async clickSignUpButton() {
    await this.page.locator(this.signUpButton).click();
  }

  async fillPassword(password) {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async selectDateOfBirth(day, month, year) {
    await this.page.selectOption(this.dayDropDownBox, day);
    await this.page.selectOption(this.monthDropDownBox, month);
    await this.page.selectOption(this.yearDropDownBox, year);
  }

  async fillNameAndCompany(firstName, lastName, company) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.companyInput).fill(company);
  }

  async fillAddress(streetAddress, unitNo, country, state, city, zip) {
    await this.page.locator(this.addressInput).fill(streetAddress);
    await this.page.locator(this.addressUnitInput).fill(unitNo);
    await this.page.selectOption(this.countryDropDownBox, country);
    await this.page.locator(this.stateInput).fill(state);
    await this.page.locator(this.cityInput).fill(city);
    await this.page.locator(this.zipCodeInput).fill(zip);
  }

  async fillPhone(phone) {
    await this.page.locator(this.phoneInput).fill(phone);
  }

  async clickCreateAccountButton() {
    await this.page.locator(this.createAccountButton).click();
  }

  async checkBoxCheck() {
    await this.page.locator(this.newsLetterCheckBox).check();
    await this.page.locator(this.receiveOfferCheckBox).check();
  }

  async verifyAccountCreated() {
    await expect(this.page.locator(this.createdText)).toBeVisible();
  }

  async verifyRegisterPageShowUp() {
    await expect(this.page.locator(this.enterAccountInfoText)).toBeVisible();
  }

  async clickCountinue(){
    await this.page.locator(this.countinueButton).click();
  }
}

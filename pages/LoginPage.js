import { expect } from '@playwright/test';

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.emailInput = "input[data-qa='login-email']";
    this.passwordInput = "input[data-qa='login-password']";
    this.signInButton = "button[data-qa='login-button']";
    this.validationElement = 'a[href="/logout"]';
    this.loginError ="//p[normalize-space()='Your email or password is incorrect!']"

  }

  async login(email, password) {
    await this.fillEmailAndPassword(email, password);
    await this.clickSignInButton();
  }



  async fillEmailAndPassword(email, password) {
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickSignInButton() {
    await this.page.locator(this.signInButton).click();
  }

  async verifySuccessfullLoggedIn() {
    await expect(this.page.locator(this.validationElement)).toBeVisible();
  }

  async verifyIncorrectMessage(){
    await expect(this.page.locator(this.loginError)).toBeVisible();
  }
}

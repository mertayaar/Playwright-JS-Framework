const {expect} = require('@playwright/test');
export class DeleteAccountPage{
  constructor(page){
    this.page = page;
    this.deleteConfirmation="//b[normalize-space()='Account Deleted!']";
    this.countinueButton ='a[data-qa="continue-button"]';
  }

  async verifyAccountDeleted(){
    await expect(this.page.locator(this.verifyAccountDeleted)).toBeVisible();
    await this.page.locator(this.countinueButton).click();
  }
}
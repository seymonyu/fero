import { Page } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {}
  
  async waitForLoad() {
    await new Promise(f => setTimeout(f, 3 * 1000));
  }

  get acceptCookiesButton() {
    return this.page.getByRole('button', { name: 'Accept all' });
  }
}
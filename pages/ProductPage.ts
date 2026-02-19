import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  // Locator definitions
  get addToCartButton() {
    return this.page.getByTestId('add-to-cart-button');
  }

  get goToCartButton() {
    return this.page.getByTestId('cart-header-link');
  }
}
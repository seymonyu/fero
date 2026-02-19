import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  // Locator definitions
  get shippingAdressForm() {
    return this.page.locator('#shippingAddressForm');
  }

  get checkoutButton() {
    return this.page.getByTestId('proceed-to-checkout-button');
  }

  get firstNameInput() {
    return this.shippingAdressForm.locator('[name="firstName"]');
  }
  
  get lastNameInput() {
    return this.shippingAdressForm.locator('[name="lastName"]');
  }

  get emailInput() {
    return this.shippingAdressForm.locator('[name="email"]');
  }

  get addressInput() {
    return this.shippingAdressForm.locator('[name="streetName"]');
  }

  get postalCodeInput() {
    return this.shippingAdressForm.locator('[name="postalCode"]');
  }

  get cityInput() {
    return this.shippingAdressForm.locator('[name="city"]');
  }

  get phoneNumberInput() {
    return this.shippingAdressForm.locator('[name="phone"]');
  }

  get countrySwitcherButton() {
    return this.shippingAdressForm.getByTestId('country-switcher-button');
  }

  get countrySwitcher() {
    return this.page.getByTestId('country-switcher');
  }

  paymentMethod(name: string) {
    return this.page.getByRole('radio', { name });
  }

  countrySwitcherLink(countryCode: string) {
    return this.countrySwitcher.getByTestId(`country-switcher-link-${countryCode}`);
  }

  // Interaction methods

  async fillShippingAddress(address: string, postalCode: string, city: string) {  
    await this.addressInput.fill(address);
    await this.postalCodeInput.fill(postalCode);
    await this.cityInput.fill(city);
  }
}
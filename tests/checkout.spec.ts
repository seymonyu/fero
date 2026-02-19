import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductPage } from '../pages/ProductPage';
import { testConfig } from '../config/testConfig';

test.describe('Checkout Flow', () => {
    let checkoutPage: CheckoutPage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        // Initialize page objects
        checkoutPage = new CheckoutPage(page);
        productPage = new ProductPage(page);
        
        // Navigate to the product page before each test
        await page.goto(testConfig.urls.baseUrl);
        await productPage.acceptCookiesButton.click();
    });
    
    test('address change during checkout', async ({ page }) => {
    await page.goto(testConfig.urls.baseUrl + '/es-es/p/w-ashley-beanie-natural-41');

    await productPage.addToCartButton.click();
    await productPage.goToCartButton.click();
    await checkoutPage.checkoutButton.click();
    await checkoutPage.firstNameInput.fill('John');
    await checkoutPage.lastNameInput.fill('Doe');
    await checkoutPage.emailInput.fill(testConfig.credentials.email);
    await checkoutPage.fillShippingAddress('Calle de Ardemans ', '28028', 'Madrid');
    await checkoutPage.countrySwitcherButton.click();
    await checkoutPage.countrySwitcherLink('NL').click();
    await checkoutPage.fillShippingAddress('John Franklinstraat ', '1056SW', 'Amsterdam');
    await expect(checkoutPage.paymentMethod('iDEAL')).toBeVisible();
    await expect(checkoutPage.paymentMethod('Apple Pay')).toBeVisible();
    await expect(checkoutPage.paymentMethod('Cards')).toBeVisible();
    await expect(checkoutPage.paymentMethod('PayPal')).toBeVisible();
    });
});
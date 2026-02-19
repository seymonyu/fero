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
        // arrange
        await page.goto(testConfig.urls.baseUrl + '/es-es/p/w-ashley-beanie-natural-41');

        await productPage.addToCartButton.click();
        await productPage.goToCartButton.click();
        await checkoutPage.checkoutButton.click();

        // act
        await checkoutPage.firstNameInput.fill('John');
        await checkoutPage.lastNameInput.fill('Doe');
        await checkoutPage.emailInput.fill(testConfig.credentials.email);
        await checkoutPage.fillShippingAddress('Calle de Ardemans ', '28028', 'Madrid');

        await expect(checkoutPage.shippingMethod).toContainText('UPS (Entrega estándar)');
        await expect(checkoutPage.shippingPrice).toContainText('7,90 €');
        await expect(checkoutPage.paymentMethod('Apple Pay')).toBeVisible();
        await expect(checkoutPage.paymentMethod('Tarjeta')).toBeVisible();
        await expect(checkoutPage.paymentMethod('PayPal')).toBeVisible();

        await checkoutPage.countrySwitcherButton.click();
        await checkoutPage.countrySwitcherLink('CH').click();
        await checkoutPage.shippingAdressForm.waitFor({ state: 'visible' });
        await checkoutPage.fillShippingAddress('Turnweg 2', '3013', 'Bern');

        // assert
        await expect(page.getByTestId('shipping').nth(1)).toContainText('Swiss Post (Standard Shipping)' );
        await expect(page.getByTestId('price').nth(1)).toContainText('CHF 29.00');
        await expect(page.getByTestId('price').nth(2)).toContainText('CHF 9.50');
        await expect(checkoutPage.paymentMethod('TWINT')).toBeVisible();
        await expect(checkoutPage.paymentMethod('Apple Pay')).toBeVisible();
        await expect(checkoutPage.paymentMethod('Cards')).toBeVisible();
        await expect(checkoutPage.paymentMethod('Klarna')).toBeVisible();
        await expect(checkoutPage.paymentMethod('PayPal')).toBeVisible();
    });
});
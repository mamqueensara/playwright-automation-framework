import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.loginAsStandardUser();
});

test('Verify successful checkout', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await products.openCart();

    const cart = new CartPage(page);

    await cart.checkout();

    const checkout = new CheckoutPage(page);

    await checkout.enterCheckoutDetails('John', 'David', '682001');

    await checkout.finishCheckout();

    await expect(await checkout.successMessage()).toContainText('Thank you');
});

test('Verify checkout validation for empty first name', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await products.openCart();

    const cart = new CartPage(page);

    await cart.checkout();

    const checkout = new CheckoutPage(page);

    await checkout.enterCheckoutDetails('', 'David', '682001');

    const error = checkout.errorMessage();

    await expect(error).toBeVisible();
    await expect(error).toContainText('First Name is required');
    
});

test('Verify checkout validation for empty postal code', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await products.openCart();

    const cart = new CartPage(page);

    await cart.checkout();

    const checkout = new CheckoutPage(page);

    await checkout.enterCheckoutDetails('John', 'David', '');

    const error = checkout.errorMessage();

    await expect(error).toBeVisible();
    await expect(error).toContainText('Postal Code is required');
});
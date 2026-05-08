import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.loginAsStandardUser();
});

test('Verify cart page displays selected product', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await products.openCart();

    const cart = new CartPage(page);

    await expect(await cart.getCartItem()).toContainText('Backpack');
});

test('Verify continue shopping button navigation', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.openCart();

    const cart = new CartPage(page);

    await cart.continueShopping();

    await expect(page).toHaveURL(/inventory/);
});
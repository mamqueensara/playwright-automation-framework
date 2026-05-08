import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.loginAsStandardUser();
});

test('Verify all product names are displayed', async ({ page }) => {

    const products = new ProductsPage(page);

    await expect(await products.getProductPrices()).toHaveCount(6);
});

test('Verify product prices are displayed', async ({ page }) => {

    const products = new ProductsPage(page);

    await expect(await products.getProductPrices()).toHaveCount(6);
});

test('Verify add single product to cart', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await expect(await products.getCartBadge()).toHaveText('1');
});

test('Verify add multiple products to cart', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await products.addBikeLightToCart();

    await expect(await products.getCartBadge()).toHaveText('2');
});

test('Verify remove product from cart', async ({ page }) => {

    const products = new ProductsPage(page);

    await products.addBackpackToCart();

    await products.removeBackpack();

    await expect(await products.getCartBadge()).not.toBeVisible();
});
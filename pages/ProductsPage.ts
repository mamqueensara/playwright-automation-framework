import { Page } from '@playwright/test';

export class ProductsPage {

    constructor(private page: Page) {}

    async getProductTitles() {
        return this.page.locator('.inventory_item_name');
    }

    async getProductPrices() {
        return this.page.locator('.inventory_item_price');
    }

    async addBackpackToCart() {
        await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
    }

    async addBikeLightToCart() {
        await this.page.locator('#add-to-cart-sauce-labs-bike-light').click();
    }

    async removeBackpack() {
        await this.page.locator('#remove-sauce-labs-backpack').click();
    }

    async getCartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}
import { Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async getCartItem() {
        return this.page.locator('.inventory_item_name');
    }

    async continueShopping() {
        await this.page.locator('#continue-shopping').click();
    }

    async checkout() {
        await this.page.locator('#checkout').click();
    }
}
import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    async enterCheckoutDetails(first: string, last: string, postal: string) {

        await this.page.locator('#first-name').fill(first);

        await this.page.locator('#last-name').fill(last);

        await this.page.locator('#postal-code').fill(postal);

        await this.page.locator('#continue').click();
    }

    async finishCheckout() {
        await this.page.locator('#finish').click();
    }

    async successMessage() {
        return this.page.locator('.complete-header');
    }

     errorMessage() {
        return this.page.locator('[data-test="error"]');
    }
}
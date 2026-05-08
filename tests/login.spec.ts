import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { readExcel } from '../utils/excelReader';

const testData: any[] = readExcel('./testdata/loginData.xlsx', 'Sheet1');

for (const data of testData) {

    test(`Login test - ${data.email || 'blank'} | ${data.password || 'blank'}`, async ({ page }) => {
        

        const login = new LoginPage(page);

        await login.goto();
        const email = (data.email ?? '').trim();
        const password = (data.password ?? '').trim();
        await login.login(email, password);
      

        // SUCCESS CASE
        if (data.expected === 'success') {

            await expect(page).toHaveURL(/inventory/);

        }

        // ERROR CASE
        else {

            const errorMessage = await login.getErrorMessage();

            await expect(errorMessage).toBeVisible();

        }
    });
}
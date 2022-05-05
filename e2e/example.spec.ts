import { test} from '@playwright/test'

test('should calculate operation on page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/')
    // Click [placeholder="Enter a first number"]
    await page.locator('[placeholder="Enter a first number"]').click();
    // Click [placeholder="Enter a second number"]
    await page.locator('[placeholder="Enter a second number"]').click();
    // fill [placeholder="Enter a first number"]
    await page.locator('[placeholder="Enter a first number"]').fill("3");
    // fill [placeholder="Enter a second number"]
    await page.locator('[placeholder="Enter a second number"]').fill("3");
    // Click button:has-text("Multiplication")
    await page.locator('button:has-text("Multiplication")').click();

    await page.pause()
})
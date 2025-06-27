// tests/example.spec.js

const { test, expect } = require('@playwright/test');
test('Visit Apple site', async ({ page }) => {
 await page.goto('https://www.apple.com');
 await expect(page).toHaveTitle(/Apple/);
});
 
import { test, expect } from '@playwright/test';

const userdata = [
    { Firstname:"Blessing", Lastname: "Aaron"},
    { Firstname:"Jake", Lastname: "Brown"}
]

userdata.forEach(({ Firstname, Lastname}) => {
test(`first test for ${Firstname}`, async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/')
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.getByRole('button',{name: 'Login'}).click()
await expect(page).toHaveTitle(/OrangeHRM/);
await page.getByRole('link', { name: 'PIM' }).click();
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('textbox', { name: 'First Name' }).click();
await page.getByRole('textbox', { name: 'First Name' }).fill(Firstname);
await page.getByRole('textbox', { name: 'Middle Name' }).click();
await page.getByRole('textbox', { name: 'Middle Name' }).fill('Two');
await page.getByRole('textbox', { name: 'Last Name' }).click();
await page.getByRole('textbox', { name: 'Last Name' }).fill(Lastname);
await page.getByRole('button', { name: 'Save' }).click();
await page.getByText('Successfully Saved').click();


})
})